import{B as S,s as _,m as s,c as w,r as f,o as l,w as v,a as E,b as x,d as I,e as a,v as X,T as ee,n as P,R as H,f as R,g as xe,h as M,i as F,j as te,k as D,l as p,F as $,p as C,q as A,t as k,u as Ie,x as ne,y as ie,z as Ae,A as $e,C as Ce,D as B,E as Pe,G as Se,H as b,I as _e,J as T,K as Te,L as je,M as Z}from"./app-BfSqh4X5.js";import{s as ae,a as Ve}from"./index-DTDwk0I4.js";import{s as oe,a as W}from"./index-9aecsyZe.js";var Be={root:"p-accordioncontent",content:"p-accordioncontent-content"},Le=S.extend({name:"accordioncontent",classes:Be}),Ne={name:"BaseAccordionContent",extends:_,props:{as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:Le,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},re={name:"AccordionContent",extends:Ne,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],computed:{id:function(){return"".concat(this.$pcAccordion.id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},ariaLabelledby:function(){return"".concat(this.$pcAccordion.id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},attrs:function(){return s(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{id:this.id,role:"region","aria-labelledby":this.ariaLabelledby,"data-pc-name":"accordioncontent","data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function De(e,t,n,o,r,i){return e.asChild?f(e.$slots,"default",{key:1,class:P(e.cx("root")),active:i.$pcAccordionPanel.active,a11yAttrs:i.a11yAttrs}):(l(),w(ee,s({key:0,name:"p-toggleable-content"},e.ptm("transition",i.ptParams)),{default:v(function(){return[!i.$pcAccordion.lazy||i.$pcAccordionPanel.active?E((l(),w(I(e.as),s({key:0,class:e.cx("root")},i.attrs),{default:v(function(){return[a("div",s({class:e.cx("content")},e.ptm("content",i.ptParams)),[f(e.$slots,"default")],16)]}),_:3},16,["class"])),[[X,i.$pcAccordion.lazy?!0:i.$pcAccordionPanel.active]]):x("",!0)]}),_:3},16))}re.render=De;var Ee={root:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon"},Oe=S.extend({name:"accordionheader",classes:Ee}),Ke={name:"BaseAccordionHeader",extends:_,props:{as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:Oe,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},se={name:"AccordionHeader",extends:Ke,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowDownKey:function(t){var n=this.findNextPanel(this.findPanel(t.currentTarget));n?this.changeFocusedPanel(t,n):this.onHomeKey(t),t.preventDefault()},onArrowUpKey:function(t){var n=this.findPrevPanel(this.findPanel(t.currentTarget));n?this.changeFocusedPanel(t,n):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var n=this.findFirstPanel();this.changeFocusedPanel(t,n),t.preventDefault()},onEndKey:function(t){var n=this.findLastPanel();this.changeFocusedPanel(t,n),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue(),t.preventDefault()},findPanel:function(t){return t==null?void 0:t.closest('[data-pc-name="accordionpanel"]')},findHeader:function(t){return F(t,'[data-pc-name="accordionheader"]')},findNextPanel:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=n?t:t.nextElementSibling;return o?M(o,"data-p-disabled")?this.findNextPanel(o):this.findHeader(o):null},findPrevPanel:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=n?t:t.previousElementSibling;return o?M(o,"data-p-disabled")?this.findPrevPanel(o):this.findHeader(o):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(t,n){xe(this.findHeader(n))}},computed:{id:function(){return"".concat(this.$pcAccordion.id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},ariaControls:function(){return"".concat(this.$pcAccordion.id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},attrs:function(){return s(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":"accordionheader","data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}},dataP:function(){return R({active:this.$pcAccordionPanel.active})}},components:{ChevronUpIcon:W,ChevronDownIcon:oe},directives:{ripple:H}};function Me(e,t,n,o,r,i){var g=te("ripple");return e.asChild?f(e.$slots,"default",{key:1,class:P(e.cx("root")),active:i.$pcAccordionPanel.active,a11yAttrs:i.a11yAttrs,onClick:i.onClick}):E((l(),w(I(e.as),s({key:0,"data-p":i.dataP,class:e.cx("root"),onClick:i.onClick},i.attrs),{default:v(function(){return[f(e.$slots,"default",{active:i.$pcAccordionPanel.active}),f(e.$slots,"toggleicon",{active:i.$pcAccordionPanel.active,class:P(e.cx("toggleicon"))},function(){return[i.$pcAccordionPanel.active?(l(),w(I(i.$pcAccordion.$slots.collapseicon?i.$pcAccordion.$slots.collapseicon:i.$pcAccordion.collapseIcon?"span":"ChevronUpIcon"),s({key:0,class:[i.$pcAccordion.collapseIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",i.ptParams)),null,16,["class"])):(l(),w(I(i.$pcAccordion.$slots.expandicon?i.$pcAccordion.$slots.expandicon:i.$pcAccordion.expandIcon?"span":"ChevronDownIcon"),s({key:1,class:[i.$pcAccordion.expandIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",i.ptParams)),null,16,["class"]))]})]}),_:3},16,["data-p","class","onClick"])),[[g]])}se.render=Me;var Fe={root:function(t){var n=t.instance,o=t.props;return["p-accordionpanel",{"p-accordionpanel-active":n.active,"p-disabled":o.disabled}]}},ze=S.extend({name:"accordionpanel",classes:Fe}),He={name:"BaseAccordionPanel",extends:_,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:ze,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},le={name:"AccordionPanel",extends:He,inheritAttrs:!1,inject:["$pcAccordion"],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return s(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{"data-pc-name":"accordionpanel","data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function Re(e,t,n,o,r,i){return e.asChild?f(e.$slots,"default",{key:1,class:P(e.cx("root")),active:i.active,a11yAttrs:i.a11yAttrs}):(l(),w(I(e.as),s({key:0,class:e.cx("root")},i.attrs),{default:v(function(){return[f(e.$slots,"default")]}),_:3},16,["class"]))}le.render=Re;var We=({dt:e})=>`
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
`,Ue={root:"p-accordion p-component"},Je=S.extend({name:"accordion",style:We,classes:Ue}),qe={name:"BaseAccordion",extends:_,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:Je,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},ce={name:"Accordion",extends:qe,inheritAttrs:!1,emits:["update:value","update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{d_value:this.value}},watch:{value:function(t){this.d_value=t},activeIndex:{immediate:!0,handler:function(t){this.hasAccordionTab&&(this.d_value=this.multiple?t==null?void 0:t.map(String):t==null?void 0:t.toString())}}},methods:{isItemActive:function(t){var n;return this.multiple?(n=this.d_value)===null||n===void 0?void 0:n.includes(t):this.d_value===t},updateValue:function(t){var n,o=this.isItemActive(t);this.multiple?o?this.d_value=this.d_value.filter(function(r){return r!==t}):this.d_value?this.d_value.push(t):this.d_value=[t]:this.d_value=o?null:t,this.$emit("update:value",this.d_value),this.$emit("update:activeIndex",this.multiple?(n=this.d_value)===null||n===void 0?void 0:n.map(Number):Number(this.d_value)),this.$emit(o?"tab-close":"tab-open",{originalEvent:void 0,index:Number(t)})},isAccordionTab:function(t){return t.type.name==="AccordionTab"},getTabProp:function(t,n){return t.props?t.props[n]:void 0},getKey:function(t,n){return this.getTabProp(t,"header")||n},getHeaderPT:function(t,n){var o=this;return{root:s({onClick:function(i){return o.onTabClick(i,n)}},this.getTabProp(t,"headerProps"),this.getTabPT(t,"header",n)),toggleicon:s(this.getTabProp(t,"headeractionprops"),this.getTabPT(t,"headeraction",n))}},getContentPT:function(t,n){return{root:s(this.getTabProp(t,"contentProps"),this.getTabPT(t,"toggleablecontent",n)),transition:this.getTabPT(t,"transition",n),content:this.getTabPT(t,"content",n)}},getTabPT:function(t,n,o){var r=this.tabs.length,i={props:t.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:o,count:r,first:o===0,last:o===r-1,active:this.isItemActive("".concat(o))}};return s(this.ptm("accordiontab.".concat(n),i),this.ptmo(this.getTabProp(t,"pt"),n,i))},onTabClick:function(t,n){this.$emit("tab-click",{originalEvent:t,index:n})}},computed:{tabs:function(){var t=this;return this.$slots.default().reduce(function(n,o){return t.isAccordionTab(o)?n.push(o):o.children&&o.children instanceof Array&&o.children.forEach(function(r){t.isAccordionTab(r)&&n.push(r)}),n},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:le,AccordionHeader:se,AccordionContent:re,ChevronUpIcon:W,ChevronRightIcon:ae}};function Ze(e,t,n,o,r,i){var g=D("AccordionHeader"),h=D("AccordionContent"),u=D("AccordionPanel");return l(),p("div",s({class:e.cx("root")},e.ptmi("root")),[i.hasAccordionTab?(l(!0),p($,{key:0},C(i.tabs,function(m,y){return l(),w(u,{key:i.getKey(m,y),value:"".concat(y),pt:{root:i.getTabPT(m,"root",y)},disabled:i.getTabProp(m,"disabled")},{default:v(function(){return[A(g,{class:P(i.getTabProp(m,"headerClass")),pt:i.getHeaderPT(m,y)},{toggleicon:v(function(j){return[j.active?(l(),w(I(e.$slots.collapseicon?e.$slots.collapseicon:e.collapseIcon?"span":"ChevronDownIcon"),s({key:0,class:[e.collapseIcon,j.class],"aria-hidden":"true",ref_for:!0},i.getTabPT(m,"headericon",y)),null,16,["class"])):(l(),w(I(e.$slots.expandicon?e.$slots.expandicon:e.expandIcon?"span":"ChevronUpIcon"),s({key:1,class:[e.expandIcon,j.class],"aria-hidden":"true",ref_for:!0},i.getTabPT(m,"headericon",y)),null,16,["class"]))]}),default:v(function(){return[m.children&&m.children.headericon?(l(),w(I(m.children.headericon),{key:0,isTabActive:i.isItemActive("".concat(y)),active:i.isItemActive("".concat(y)),index:y},null,8,["isTabActive","active","index"])):x("",!0),m.props&&m.props.header?(l(),p("span",s({key:1,ref_for:!0},i.getTabPT(m,"headertitle",y)),k(m.props.header),17)):x("",!0),m.children&&m.children.header?(l(),w(I(m.children.header),{key:2})):x("",!0)]}),_:2},1032,["class","pt"]),A(h,{pt:i.getContentPT(m,y)},{default:v(function(){return[(l(),w(I(m)))]}),_:2},1032,["pt"])]}),_:2},1032,["value","pt","disabled"])}),128)):f(e.$slots,"default",{key:1})],16)}ce.render=Ze;var Qe=({dt:e})=>`
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
`,Ye={root:function(t){var n=t.props;return["p-timeline p-component","p-timeline-"+n.align,"p-timeline-"+n.layout]},event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},Ge=S.extend({name:"timeline",style:Qe,classes:Ye}),Xe={name:"BaseTimeline",extends:_,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:Ge,provide:function(){return{$pcTimeline:this,$parentInstance:this}}};function L(e){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(e)}function Q(e,t,n){return(t=et(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function et(e){var t=tt(e,"string");return L(t)=="symbol"?t:t+""}function tt(e,t){if(L(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(L(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var de={name:"Timeline",extends:Xe,inheritAttrs:!1,methods:{getKey:function(t,n){return this.dataKey?Ie(t,this.dataKey):n},getPTOptions:function(t,n){return this.ptm(t,{context:{index:n,count:this.value.length}})}},computed:{dataP:function(){return R(Q(Q({},this.layout,this.layout),this.align,this.align))}}},nt=["data-p"],it=["data-p"],at=["data-p"],ot=["data-p"],rt=["data-p"],st=["data-p"],lt=["data-p"];function ct(e,t,n,o,r,i){return l(),p("div",s({class:e.cx("root")},e.ptmi("root"),{"data-p":i.dataP}),[(l(!0),p($,null,C(e.value,function(g,h){return l(),p("div",s({key:i.getKey(g,h),class:e.cx("event"),ref_for:!0},i.getPTOptions("event",h),{"data-p":i.dataP}),[a("div",s({class:e.cx("eventOpposite",{index:h}),ref_for:!0},i.getPTOptions("eventOpposite",h),{"data-p":i.dataP}),[f(e.$slots,"opposite",{item:g,index:h})],16,at),a("div",s({class:e.cx("eventSeparator"),ref_for:!0},i.getPTOptions("eventSeparator",h),{"data-p":i.dataP}),[f(e.$slots,"marker",{item:g,index:h},function(){return[a("div",s({class:e.cx("eventMarker"),ref_for:!0},i.getPTOptions("eventMarker",h),{"data-p":i.dataP}),null,16,rt)]}),h!==e.value.length-1?f(e.$slots,"connector",{key:0,item:g,index:h},function(){return[a("div",s({class:e.cx("eventConnector"),ref_for:!0},i.getPTOptions("eventConnector",h),{"data-p":i.dataP}),null,16,st)]}):x("",!0)],16,ot),a("div",s({class:e.cx("eventContent"),ref_for:!0},i.getPTOptions("eventContent",h),{"data-p":i.dataP}),[f(e.$slots,"content",{item:g,index:h})],16,lt)],16,it)}),128))],16,nt)}de.render=ct;var dt=S.extend({name:"accordiontab"}),ut={name:"BaseAccordionTab",extends:_,props:{header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:dt,provide:function(){return{$pcAccordionTab:this,$parentInstance:this}}},ue={name:"AccordionTab",extends:ut,inheritAttrs:!1,mounted:function(){console.warn("Deprecated since v4. Use the new structure of Accordion instead.")}};function pt(e,t,n,o,r,i){return f(e.$slots,"default")}ue.render=pt;var pe={name:"MinusIcon",extends:ne};function ht(e,t,n,o,r,i){return l(),p("svg",s({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[a("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"},null,-1)]),16)}pe.render=ht;var he={name:"PlusIcon",extends:ne};function mt(e,t,n,o,r,i){return l(),p("svg",s({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[a("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"},null,-1)]),16)}he.render=mt;var ft=({dt:e})=>`
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
`,vt={root:function(t){var n=t.props;return["p-fieldset p-component",{"p-fieldset-toggleable":n.toggleable}]},legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",content:"p-fieldset-content"},gt=S.extend({name:"fieldset",style:ft,classes:vt}),bt={name:"BaseFieldset",extends:_,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:gt,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},me={name:"Fieldset",extends:bt,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(t){this.d_collapsed=t}},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend},dataP:function(){return R({toggleable:this.toggleable})}},directives:{ripple:H},components:{PlusIcon:he,MinusIcon:pe}};function N(e){"@babel/helpers - typeof";return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(e)}function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Y(Object(n),!0).forEach(function(o){yt(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function yt(e,t,n){return(t=wt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wt(e){var t=kt(e,"string");return N(t)=="symbol"?t:t+""}function kt(e,t){if(N(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(N(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var xt=["data-p"],It=["data-p"],At=["id"],$t=["id","aria-controls","aria-expanded","aria-label"],Ct=["id","aria-labelledby"];function Pt(e,t,n,o,r,i){var g=te("ripple");return l(),p("fieldset",s({class:e.cx("root"),"data-p":i.dataP},e.ptmi("root")),[a("legend",s({class:e.cx("legend"),"data-p":i.dataP},e.ptm("legend")),[f(e.$slots,"legend",{toggleCallback:i.toggle},function(){return[e.toggleable?x("",!0):(l(),p("span",s({key:0,id:e.$id+"_header",class:e.cx("legendLabel")},e.ptm("legendLabel")),k(e.legend),17,At)),e.toggleable?E((l(),p("button",s({key:1,id:e.$id+"_header",type:"button","aria-controls":e.$id+"_content","aria-expanded":!r.d_collapsed,"aria-label":i.buttonAriaLabel,class:e.cx("toggleButton"),onClick:t[0]||(t[0]=function(){return i.toggle&&i.toggle.apply(i,arguments)}),onKeydown:t[1]||(t[1]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)})},G(G({},e.toggleButtonProps),e.ptm("toggleButton"))),[f(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:r.d_collapsed,class:P(e.cx("toggleIcon"))},function(){return[(l(),w(I(r.d_collapsed?"PlusIcon":"MinusIcon"),s({class:e.cx("toggleIcon")},e.ptm("toggleIcon")),null,16,["class"]))]}),a("span",s({class:e.cx("legendLabel")},e.ptm("legendLabel")),k(e.legend),17)],16,$t)),[[g]]):x("",!0)]})],16,It),A(ee,s({name:"p-toggleable-content"},e.ptm("transition")),{default:v(function(){return[E(a("div",s({id:e.$id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":e.$id+"_header"},e.ptm("contentContainer")),[a("div",s({class:e.cx("content")},e.ptm("content")),[f(e.$slots,"default")],16)],16,Ct),[[X,!r.d_collapsed]])]}),_:3},16)],16,xt)}me.render=Pt;var St=({dt:e})=>`
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
`,_t={root:function(t){var n=t.instance;return["p-carousel p-component",{"p-carousel-vertical":n.isVertical(),"p-carousel-horizontal":!n.isVertical()}]},header:"p-carousel-header",contentContainer:"p-carousel-content-container",content:"p-carousel-content",pcPrevButton:function(t){var n=t.instance;return["p-carousel-prev-button",{"p-disabled":n.backwardIsDisabled}]},viewport:"p-carousel-viewport",itemList:"p-carousel-item-list",itemClone:function(t){var n=t.index,o=t.value,r=t.totalShiftedItems,i=t.d_numVisible;return["p-carousel-item p-carousel-item-clone",{"p-carousel-item-active":r*-1===o.length+i,"p-carousel-item-start":n===0,"p-carousel-item-end":o.slice(-1*i).length-1===n}]},item:function(t){var n=t.instance,o=t.index;return["p-carousel-item",{"p-carousel-item-active":n.firstIndex()<=o&&n.lastIndex()>=o,"p-carousel-item-start":n.firstIndex()===o,"p-carousel-item-end":n.lastIndex()===o}]},pcNextButton:function(t){var n=t.instance;return["p-carousel-next-button",{"p-disabled":n.forwardIsDisabled}]},indicatorList:"p-carousel-indicator-list",indicator:function(t){var n=t.instance,o=t.index;return["p-carousel-indicator",{"p-carousel-indicator-active":n.d_page===o}]},indicatorButton:"p-carousel-indicator-button",footer:"p-carousel-footer"},Tt=S.extend({name:"carousel",style:St,classes:_t}),jt={name:"BaseCarousel",extends:_,props:{value:null,page:{type:Number,default:0},numVisible:{type:Number,default:1},numScroll:{type:Number,default:1},responsiveOptions:Array,orientation:{type:String,default:"horizontal"},verticalViewPortHeight:{type:String,default:"300px"},contentClass:String,containerClass:String,indicatorsContentClass:String,circular:{type:Boolean,default:!1},autoplayInterval:{type:Number,default:0},showNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},prevButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},nextButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:Tt,provide:function(){return{$pcCarousel:this,$parentInstance:this}}};function V(e){return Nt(e)||Lt(e)||Bt(e)||Vt()}function Vt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bt(e,t){if(e){if(typeof e=="string")return z(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}function Lt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Nt(e){if(Array.isArray(e))return z(e)}function z(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}var fe={name:"Carousel",extends:jt,inheritAttrs:!1,emits:["update:page"],isRemainingItemsAdded:!1,data:function(){return{remainingItems:0,d_numVisible:this.numVisible,d_numScroll:this.numScroll,d_oldNumScroll:0,d_oldNumVisible:0,d_oldValue:null,d_page:this.page,totalShiftedItems:this.page*this.numScroll*-1,allowAutoplay:!!this.autoplayInterval,d_circular:this.circular||this.allowAutoplay,swipeThreshold:20}},watch:{page:function(t){t>this.d_page?this.navForward({},t):t<this.d_page&&this.navBackward({},t),this.d_page=t},circular:function(t){this.d_circular=t},numVisible:function(t,n){this.d_numVisible=t,this.d_oldNumVisible=n},numScroll:function(t,n){this.d_oldNumScroll=n,this.d_numScroll=t},value:function(t){this.d_oldValue=t}},mounted:function(){var t=!1;if(this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners(),this.isCircular()){var n=this.totalShiftedItems;this.d_page===0?n=-1*this.d_numVisible:n===0&&(n=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),n!==this.totalShiftedItems&&(this.totalShiftedItems=n,t=!0)}!t&&this.isAutoplay()&&this.startAutoplay()},updated:function(){if(!this.empty){var t=this.isCircular(),n=!1,o=this.totalShiftedItems;if(this.autoplayInterval&&this.stopAutoplay(),this.d_oldNumScroll!==this.d_numScroll||this.d_oldNumVisible!==this.d_numVisible||this.d_oldValue.length!==this.value.length){this.remainingItems=(this.value.length-this.d_numVisible)%this.d_numScroll;var r=this.d_page;this.totalIndicators!==0&&r>=this.totalIndicators&&(r=this.totalIndicators-1,this.$emit("update:page",r),this.d_page=r,n=!0),o=r*this.d_numScroll*-1,t&&(o-=this.d_numVisible),r===this.totalIndicators-1&&this.remainingItems>0?(o+=-1*this.remainingItems+this.d_numScroll,this.isRemainingItemsAdded=!0):this.isRemainingItemsAdded=!1,o!==this.totalShiftedItems&&(this.totalShiftedItems=o,n=!0),this.d_oldNumScroll=this.d_numScroll,this.d_oldNumVisible=this.d_numVisible,this.d_oldValue=this.value,this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(o*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(o*(100/this.d_numVisible),"%, 0, 0)")}t&&(this.d_page===0?o=-1*this.d_numVisible:o===0&&(o=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),o!==this.totalShiftedItems&&(this.totalShiftedItems=o,n=!0)),!n&&this.isAutoplay()&&this.startAutoplay()}},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.autoplayInterval&&this.stopAutoplay()},methods:{getIndicatorPTOptions:function(t,n){return this.ptm(t,{context:{highlighted:n===this.d_page}})},getItemPTOptions:function(t,n){return this.ptm(t,{context:{index:n,active:this.firstIndex()<=n&&this.lastIndex()>=n,start:this.firstIndex()===n,end:this.lastIndex()===n}})},step:function(t,n){var o=this.totalShiftedItems,r=this.isCircular();if(n!=null)o=this.d_numScroll*n*-1,r&&(o-=this.d_numVisible),this.isRemainingItemsAdded=!1;else{o+=this.d_numScroll*t,this.isRemainingItemsAdded&&(o+=this.remainingItems-this.d_numScroll*t,this.isRemainingItemsAdded=!1);var i=r?o+this.d_numVisible:o;n=Math.abs(Math.floor(i/this.d_numScroll))}r&&this.d_page===this.totalIndicators-1&&t===-1?(o=-1*(this.value.length+this.d_numVisible),n=0):r&&this.d_page===0&&t===1?(o=0,n=this.totalIndicators-1):n===this.totalIndicators-1&&this.remainingItems>0&&(o+=this.remainingItems*-1-this.d_numScroll*t,this.isRemainingItemsAdded=!0),this.$refs.itemsContainer&&(!this.isUnstyled&&Se(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(o*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(o*(100/this.d_numVisible),"%, 0, 0)"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=o,this.$emit("update:page",n),this.d_page=n},calculatePosition:function(){if(this.$refs.itemsContainer&&this.responsiveOptions){for(var t=window.innerWidth,n={numVisible:this.numVisible,numScroll:this.numScroll},o=0;o<this.responsiveOptions.length;o++){var r=this.responsiveOptions[o];parseInt(r.breakpoint,10)>=t&&(n=r)}if(this.d_numScroll!==n.numScroll){var i=this.d_page;i=parseInt(i*this.d_numScroll/n.numScroll),this.totalShiftedItems=n.numScroll*i*-1,this.isCircular()&&(this.totalShiftedItems-=n.numVisible),this.d_numScroll=n.numScroll,this.$emit("update:page",i),this.d_page=i}this.d_numVisible!==n.numVisible&&(this.d_numVisible=n.numVisible)}},navBackward:function(t,n){(this.d_circular||this.d_page!==0)&&this.step(1,n),this.allowAutoplay=!1,t.cancelable&&t.preventDefault()},navForward:function(t,n){(this.d_circular||this.d_page<this.totalIndicators-1)&&this.step(-1,n),this.allowAutoplay=!1,t.cancelable&&t.preventDefault()},onIndicatorClick:function(t,n){var o=this.d_page;n>o?this.navForward(t,n):n<o&&this.navBackward(t,n)},onTransitionEnd:function(){this.$refs.itemsContainer&&(!this.isUnstyled&&Pe(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="",(this.d_page===0||this.d_page===this.totalIndicators-1)&&this.isCircular()&&(this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(this.totalShiftedItems*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(this.totalShiftedItems*(100/this.d_numVisible),"%, 0, 0)")))},onTouchStart:function(t){var n=t.changedTouches[0];this.startPos={x:n.pageX,y:n.pageY}},onTouchMove:function(t){var n=t.changedTouches[0],o=this.isVertical()?n.pageY-this.startPos.y:n.pageX-this.startPos.x;Math.abs(o)>this.swipeThreshold&&t.cancelable&&t.preventDefault()},onTouchEnd:function(t){var n=t.changedTouches[0];this.isVertical()?this.changePageOnTouch(t,n.pageY-this.startPos.y):this.changePageOnTouch(t,n.pageX-this.startPos.x)},changePageOnTouch:function(t,n){Math.abs(n)>this.swipeThreshold&&(n<0?this.navForward(t):this.navBackward(t))},onIndicatorKeydown:function(t){switch(t.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"ArrowUp":case"ArrowDown":case"PageUp":case"PageDown":t.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey:function(){var t=V(B(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===t.length?t.length-1:n+1)},onLeftKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)},onHomeKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)},onEndKey:function(){var t=V(B(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,t.length-1)},onTabKey:function(){var t=V(B(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=t.findIndex(function(i){return M(i,"data-p-active")===!0}),o=F(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]'),r=t.findIndex(function(i){return i===o.parentElement});t[r].children[0].tabIndex="-1",t[n].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var t=V(B(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=F(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]');return t.findIndex(function(o){return o===n.parentElement})},changedFocusedIndicator:function(t,n){var o=V(B(this.$refs.indicatorContent,'[data-pc-section="indicator"]'));o[t].children[0].tabIndex="-1",o[n].children[0].tabIndex="0",o[n].children[0].focus()},bindDocumentListeners:function(){var t=this;this.documentResizeListener||(this.documentResizeListener=function(n){t.calculatePosition(n)},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},startAutoplay:function(){var t=this;this.interval=setInterval(function(){t.d_page===t.totalIndicators-1?t.step(-1,0):t.step(-1,t.d_page+1)},this.autoplayInterval)},stopAutoplay:function(){this.interval&&clearInterval(this.interval)},createStyle:function(){if(!this.carouselStyle){var t;this.carouselStyle=document.createElement("style"),this.carouselStyle.type="text/css",Ae(this.carouselStyle,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.body.appendChild(this.carouselStyle)}var n=`
                .p-carousel[`.concat(this.$attrSelector,`] .p-carousel-item {
                    flex: 1 0 `).concat(100/this.d_numVisible,`%
                }
            `);if(this.responsiveOptions&&!this.isUnstyled){var o=V(this.responsiveOptions),r=$e();o.sort(function(h,u){var m=h.breakpoint,y=u.breakpoint;return Ce(m,y,-1,r)});for(var i=0;i<o.length;i++){var g=o[i];n+=`
                        @media screen and (max-width: `.concat(g.breakpoint,`) {
                            .p-carousel[`).concat(this.$attrSelector,`] .p-carousel-item {
                                flex: 1 0 `).concat(100/g.numVisible,`%
                            }
                        }
                    `)}}this.carouselStyle.innerHTML=n},isVertical:function(){return this.orientation==="vertical"},hasValidItemCount:function(){return this.value&&this.value.length>this.d_numVisible},isCircular:function(){return this.hasValidItemCount()&&this.d_circular},isAutoplay:function(){return this.hasValidItemCount()&&this.autoplayInterval&&this.allowAutoplay},firstIndex:function(){return this.isCircular()?-1*(this.totalShiftedItems+this.d_numVisible):this.totalShiftedItems*-1},lastIndex:function(){return this.firstIndex()+this.d_numVisible-1},ariaSlideNumber:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,t):void 0},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{totalIndicators:function(){return this.value?Math.max(Math.ceil((this.value.length-this.d_numVisible)/this.d_numScroll)+1,0):0},backwardIsDisabled:function(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&this.d_page===0},forwardIsDisabled:function(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&(this.d_page===this.totalIndicators-1||this.totalIndicators===0)},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0},ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0},empty:function(){return!this.value||this.value.length===0},emptyMessageText:function(){var t;return((t=this.$primevue.config)===null||t===void 0||(t=t.locale)===null||t===void 0?void 0:t.emptyMessage)||""}},components:{Button:ie,ChevronRightIcon:ae,ChevronDownIcon:oe,ChevronLeftIcon:Ve,ChevronUpIcon:W},directives:{ripple:H}},Dt=["aria-live"],Et=["data-p-carousel-item-active","data-p-carousel-item-start","data-p-carousel-item-end"],Ot=["aria-hidden","aria-label","aria-roledescription","data-p-carousel-item-active","data-p-carousel-item-start","data-p-carousel-item-end"],Kt=["data-p-active"],Mt=["tabindex","aria-label","aria-current","onClick"];function Ft(e,t,n,o,r,i){var g=D("Button");return l(),p("div",s({class:e.cx("root"),role:"region"},e.ptmi("root")),[e.$slots.header?(l(),p("div",s({key:0,class:e.cx("header")},e.ptm("header")),[f(e.$slots,"header")],16)):x("",!0),i.empty?f(e.$slots,"empty",{key:2},function(){return[b(k(i.emptyMessageText),1)]}):(l(),p("div",s({key:1,class:[e.cx("contentContainer"),e.containerClass]},e.ptm("contentContainer")),[a("div",s({class:[e.cx("content"),e.contentClass],"aria-live":r.allowAutoplay?"polite":"off"},e.ptm("content")),[e.showNavigators?(l(),w(g,s({key:0,class:e.cx("pcPrevButton"),disabled:i.backwardIsDisabled,"aria-label":i.ariaPrevButtonLabel,unstyled:e.unstyled,onClick:i.navBackward},e.prevButtonProps,{pt:e.ptm("pcPrevButton"),"data-pc-group-section":"navigator"}),{icon:v(function(h){return[f(e.$slots,"previcon",{},function(){return[(l(),w(I(i.isVertical()?"ChevronUpIcon":"ChevronLeftIcon"),s({class:h.icon},e.ptm("pcPrevButton").icon),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-label","unstyled","onClick","pt"])):x("",!0),a("div",s({class:e.cx("viewport"),style:[{height:i.isVertical()?e.verticalViewPortHeight:"auto"}],onTouchend:t[1]||(t[1]=function(){return i.onTouchEnd&&i.onTouchEnd.apply(i,arguments)}),onTouchstart:t[2]||(t[2]=function(){return i.onTouchStart&&i.onTouchStart.apply(i,arguments)}),onTouchmove:t[3]||(t[3]=function(){return i.onTouchMove&&i.onTouchMove.apply(i,arguments)})},e.ptm("viewport")),[a("div",s({ref:"itemsContainer",class:e.cx("itemList"),onTransitionend:t[0]||(t[0]=function(){return i.onTransitionEnd&&i.onTransitionEnd.apply(i,arguments)})},e.ptm("itemList")),[i.isCircular()?(l(!0),p($,{key:0},C(e.value.slice(-1*r.d_numVisible),function(h,u){return l(),p("div",s({key:u+"_scloned",class:e.cx("itemClone",{index:u,value:e.value,totalShiftedItems:r.totalShiftedItems,d_numVisible:r.d_numVisible}),ref_for:!0},e.ptm("itemClone"),{"data-p-carousel-item-active":r.totalShiftedItems*-1===e.value.length+r.d_numVisible,"data-p-carousel-item-start":u===0,"data-p-carousel-item-end":e.value.slice(-1*r.d_numVisible).length-1===u}),[f(e.$slots,"item",{data:h,index:u})],16,Et)}),128)):x("",!0),(l(!0),p($,null,C(e.value,function(h,u){return l(),p("div",s({key:u,class:e.cx("item",{index:u}),role:"group","aria-hidden":i.firstIndex()>u||i.lastIndex()<u?!0:void 0,"aria-label":i.ariaSlideNumber(u),"aria-roledescription":i.ariaSlideLabel,ref_for:!0},i.getItemPTOptions("item",u),{"data-p-carousel-item-active":i.firstIndex()<=u&&i.lastIndex()>=u,"data-p-carousel-item-start":i.firstIndex()===u,"data-p-carousel-item-end":i.lastIndex()===u}),[f(e.$slots,"item",{data:h,index:u})],16,Ot)}),128)),i.isCircular()?(l(!0),p($,{key:1},C(e.value.slice(0,r.d_numVisible),function(h,u){return l(),p("div",s({key:u+"_fcloned",class:e.cx("itemClone",{index:u,value:e.value,totalShiftedItems:r.totalShiftedItems,d_numVisible:r.d_numVisible}),ref_for:!0},e.ptm("itemClone")),[f(e.$slots,"item",{data:h,index:u})],16)}),128)):x("",!0)],16)],16),e.showNavigators?(l(),w(g,s({key:1,class:e.cx("pcNextButton"),disabled:i.forwardIsDisabled,"aria-label":i.ariaNextButtonLabel,unstyled:e.unstyled,onClick:i.navForward},e.nextButtonProps,{pt:e.ptm("pcNextButton"),"data-pc-group-section":"navigator"}),{icon:v(function(h){return[f(e.$slots,"nexticon",{},function(){return[(l(),w(I(i.isVertical()?"ChevronDownIcon":"ChevronRightIcon"),s({class:h.class},e.ptm("pcNextButton").icon),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-label","unstyled","onClick","pt"])):x("",!0)],16,Dt),i.totalIndicators>=0&&e.showIndicators?(l(),p("ul",s({key:0,ref:"indicatorContent",class:[e.cx("indicatorList"),e.indicatorsContentClass],onKeydown:t[4]||(t[4]=function(){return i.onIndicatorKeydown&&i.onIndicatorKeydown.apply(i,arguments)})},e.ptm("indicatorList")),[(l(!0),p($,null,C(i.totalIndicators,function(h,u){return l(),p("li",s({key:"p-carousel-indicator-"+u.toString(),class:e.cx("indicator",{index:u}),ref_for:!0},i.getIndicatorPTOptions("indicator",u),{"data-p-active":r.d_page===u}),[a("button",s({class:e.cx("indicatorButton"),type:"button",tabindex:r.d_page===u?"0":"-1","aria-label":i.ariaPageLabel(u+1),"aria-current":r.d_page===u?"page":void 0,onClick:function(y){return i.onIndicatorClick(y,u)},ref_for:!0},i.getIndicatorPTOptions("indicatorButton",u)),null,16,Mt)],16,Kt)}),128))],16)):x("",!0)],16)),e.$slots.footer?(l(),p("div",s({key:3,class:e.cx("footer")},e.ptm("footer")),[f(e.$slots,"footer")],16)):x("",!0)],16)}fe.render=Ft;const zt={class:"my-6"},Ht={class:"grid mt-4"},Rt=["src","alt"],Wt={class:"hidden"},Ut={class:"my-6"},Jt={class:"gallery"},qt=["href","aria-label"],Zt=["src","alt"],Qt={class:"p-0 mt-4"},Yt={class:"my-6"},Gt={class:"card shadow-1 border-round-md p-4 md:mx-8 vp-feature-item"},Xt={class:"font-italic mb-8"},en={class:"text-md line-height-3"},tn={class:"flex align-items-center"},nn=["src","alt"],an=["href"],on={class:"flex flex-column align-items-start ml-2 p-0 m-0"},rn=["alt"],sn={class:"my-6 flex flex-column"},ln={class:"flex flex-wrap"},cn={class:"flex align-items-center pl-2 m-0 p-0"},dn=["src","alt"],un={class:"font-bold p-2 line-height-2"},pn={class:"m-0 pt-4"},hn={class:"my-6"},mn={class:"my-4 grid md:flex-row justify-content-center gap-2"},fn={class:"no-underline flex flex-column justify-content-center flex-wrap"},vn={class:"mb-2 flex align-items-center justify-content-center h-4rem"},gn=["src","alt"],bn={class:"h-5rem"},yn={class:"text-base md:text-xl font-bold flex align-items-center justify-content-center p-0 m-0 text-center line-height-3"},wn={class:"text-xs md:text-sm flex align-items-center justify-content-center line-height-2 text-center"},kn={class:"my-6"},xn={class:"grid overflow-hidden border-round-2xl"},In={class:"col-12"},An={class:"border-round-2xl flex flex-column gap-2 md:p-2"},$n={class:"mx-3"},Cn={class:"my-4"},Pn={href:"https://cal.com/stackseekers",size:"large",color:"deeppink",class:"flex justify-content-center text-center no-underline mt-4","aria-label":"scheduling a meeting"},Sn={class:"border-round-md vp-feature-item",id:"contact"},_n={class:"my-4"},Tn={href:"mailto:jiwan.cse@gmail.com?subject=Inquiry:%20collaborate%20now",size:"large",color:"deeppink",class:"flex justify-content-center text-center no-underline","aria-label":"Send an Email"},jn={class:"flex flex-row justify-content-end flex-wrap gap-4 mx-6"},Vn=["href","aria-label"],Bn=["aria-label"],Ln=5e3,On=_e({__name:"index.html",setup(e){const t=T(0);let n=null;T(!1);const o=T([{status:"We start with understanding your requirements",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0"},{status:"Set a clear timeline",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"I handle the development phase",date:"15/10/2020 16:15",icon:"pi pi-shopping-cart",color:"#FF9800"},{status:"Deliver your project with ongoing support to ensure success",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}]),r=T([{name:"SR-22 insurance Now",description:"Need a Cheap SR-22 Insurance? Compare & save on SR22 Insurance from top providers.",software:"Web",schema:"https://schema.org/BusinessApplication",link:"web-development-projects/#SR-22 insurance Now",images:[{itemImageSrc:"/img/home/projects/sr22.webp",alt:"SR-22 insurance Now"}]},{name:"Tech Create",description:"A landing page for tech ",software:"Web",schema:"https://schema.org/BusinessApplication",link:"web-development-projects/#Tech Create",images:[{itemImageSrc:"/img/home/projects/tech_create.webp",alt:"landing page for tech"}]},{name:"Trokka Attraction",description:"Book Attractions and Tours for Your Next Holiday",software:"Web",schema:"https://schema.org/DeveloperApplication",link:"web-development-projects/#Trokka Attraction",images:[{itemImageSrc:"/img/projects/trokka.webp",alt:"Trokka.com | Book Attractions and Tours for Your Next Holiday"}]},{name:"Upstox: Demat Account",description:"Open a Demat Account Online: Demat Account Opening at Upstox",software:"Web",schema:"https://schema.org/BusinessApplication",link:"web-development-projects/#Open Demat Account for Upstox",images:[{itemImageSrc:"/img/projects/openDemat.webp",alt:"Open a Demat Account Online: Demat Account Opening at Upstox"}]},{name:"Catch That Bus",description:"Book Malaysia and Singapore bus tickets online.",software:"Web / IOS APP",schema:"https://schema.org/DeveloperApplication",link:"web-development-projects/#Catch That Bus",images:[{itemImageSrc:"/img/projects/catchthatbus.webp",alt:"Book Malaysia and Singapore bus tickets online. | CatchThatBus"}]},{name:"Momentum Incident Management",description:"A structured process for identifying, analyzing, and resolving incidents that disrupt an organization's operations",software:"Web",schema:"https://schema.org/BusinessApplication",link:"web-development-projects/#Momentum Incident Management",images:[{itemImageSrc:"/img/home/projects/momentum_incident_management.webp",alt:"Incident Management"}]},{name:"Frontend of Tv Maze API",description:"TV Show and web series database. Create personalized schedules. Episode guide, cast, crew and character information. Recaps, reviews, episode trailers, celebrity photos and TV API.",software:"Web",schema:"https://schema.org/BusinessApplication",link:"web-development-projects/#Tv Maze",images:[{itemImageSrc:"/img/home/projects/tvmaze.webp",alt:"Frontend of Tv Maze API"}]},{name:"Call Matrix",description:"Call Intelligence, Marketing, and Analytics Platform",software:"Web",schema:"https://schema.org/BusinessApplication",link:"web-development-projects/#Call Matrix",images:[{itemImageSrc:"/img/projects/callmatrix/callmatrix.webp",alt:"CallMatrix - Call Intelligence, Marketing, and Analytics Platform"}]},{name:"Recipes",description:"Recipes: Social Network",software:"Web",schema:"https://schema.org/DeveloperApplication",link:"web-development-projects/#Recipes",images:[{itemImageSrc:"/img/home/projects/Recipe.webp",alt:"Recipes - Social Network | Recipes"}]}]);T([{breakpoint:"1400px",numVisible:4,numScroll:1},{breakpoint:"1199px",numVisible:2,numScroll:1},{breakpoint:"767px",numVisible:2,numScroll:1},{breakpoint:"575px",numVisible:1,numScroll:1}]);const i=T([{breakpoint:"1400px",numVisible:1,numScroll:1},{breakpoint:"1199px",numVisible:1,numScroll:1},{breakpoint:"767px",numVisible:1,numScroll:1},{breakpoint:"575px",numVisible:1,numScroll:1}]),g=[{label:"linkedin",icon:"pi pi-linkedin",url:"https://www.linkedin.com/in/jiwanghosal/"},{label:"youtube",icon:"pi pi-youtube",url:"https://www.youtube.com/@stackseekers"},{label:"stackoverflow",icon:"pi pi-chart-bar",url:"https://stackoverflow.com/users/10376224/stchr?tab=profile"},{label:"Instagram",icon:"pi pi-instagram",url:"https://www.instagram.com/jiwan_ghosal/"}],h=[{title:"Capgemini",icon:"/img/home/capgemini.webp",details:"Consulting and technology services",link:"https://www.capgemini.com/"},{title:"Catch That Bus",icon:"/img/home/catchthatbus.webp",details:"Leisure, travel, and tourism",link:"https://www.catchthatbus.com/"},{title:"Upstox",icon:"/img/home/upstox.webp",details:"Online stock broker",link:"https://www.upstox.com/"},{title:"Mobistreak",icon:"/img/home/mobistreak.webp",details:"Marketing and advertising",link:"https://www.mobistreak.com/"}],u=[{link:"https://cdn.simpleicons.org/javascript?viewbox=auto",title:"Javascript"},{link:"https://cdn.simpleicons.org/typescript?viewbox=auto",title:"Typescript"},{link:"https://cdn.simpleicons.org/vuedotjs?viewbox=auto",title:"vuejs"},{link:"https://cdn.simpleicons.org/react?viewbox=auto",title:"ReactJS"},{link:"https://cdn.simpleicons.org/nodedotjs?viewbox=auto",title:"NodeJs"},{link:"https://cdn.simpleicons.org/mongodb?viewbox=auto",title:"MongoDb"}],m=T([{name:"Harris Malik",designation:"Senior Product Manager at 8x8",message:"Jiwan is one of the most valuable people I have ever met. He is smart, professional, and never fails to surprise us with creative solutions to difficult problems. Jiwan's personality and skills would be a great asset to any company. Highly recommended.",avatar:"https://media.licdn.com/dms/image/v2/D5603AQG8ooyo97JCoA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1682841547783?e=1750896000&v=beta&t=RV2vZM-PEHtTdtboor0V4y6H-KGoUu7-DuJiiET_buU",link:"https://www.linkedin.com/in/harrismalik04/",location:"Malaysia",code:"my"},{name:"Jurgen Sweere",designation:"Front End Expert at ABN Amro",message:"Jiwan never stopped amazing me. He brings a lot of front-end knowledge to the table and is able to quickly learn anything new. Jiwan is a great colleague to have!",avatar:"https://media.licdn.com/dms/image/v2/C5603AQGLWlLKfqFZgw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516235161685?e=1750896000&v=beta&t=29wMeVltwAWsPCr9QHNhRJZWz1LZaEgES0iwjE2A4oc",link:"https://www.linkedin.com/in/jurgensweere",location:"The Netherlands",code:"nl"},{name:"Shyam Kumar",designation:"Senior Product Manager at Angel One",message:"I always found Jiwan to be a very dependable and hardworking colleague. Many times he went above and beyond to meet the product requirements; it might be either working overtime to release the project on time or working with other teams to get the production issue fixed. He was always the go-to person on the team.",avatar:"https://media.licdn.com/dms/image/v2/D5603AQHZpSlK7j89uA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1698672442801?e=1750896000&v=beta&t=lscT5fFmahvoGSWRzV4hN-r2YM58ddKTki5HdOziiuI",link:"https://www.linkedin.com/in/shyam-kumar-k/",location:"India",code:"in"},{name:"Erkan Ateşli",designation:"Chapter Lead at ABN AMRO Bank N.V.",message:"In our connection with Jiwan at ABN AMRO, I noticed that he has a lot of knowledge in his field of expertise. He can transfer his knowledge easily to others. With his strong analytics skills, he can handle complex questions as usual. Jiwan is a brave colleague I’ve met, and we had a lot of fun during the India visit and especially at the party. ",avatar:"https://media.licdn.com/dms/image/v2/C4E03AQFg4Oh_B9JEeQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1621625662967?e=1750896000&v=beta&t=9KwLZLloVo4ianxK3csxIjlMY0_G0Ez7nKYvgPVVssE",link:"https://www.linkedin.com/in/erkanatesli",location:"The Netherlands",code:"nl"}]),y=[{id:"proven_expertise",title:"10+ Years of Proven Expertise",description:"Over a decade of delivering impactful projects, consistently providing innovative solutions that drive tangible results and add measurable value for clients across industries."},{id:"client_centric_approach",title:"Client-Centric Approach",description:"Focused on understanding your unique needs, I offer tailored solutions that align with your business goals, ensuring seamless collaboration and delivering the most effective value."},{id:"wide_range_of_experience",title:"20+ Clients Across Industries",description:"With experience working with over 20 clients from diverse sectors, I bring versatile expertise, quickly adapting to challenges and offering solutions suited to each industry’s demands."},{id:"commitment_to_quality_code",title:"Commitment to Quality Code",description:"I ensure all code is clean, scalable, and efficient by using industry-standard tools such as ESLint, Prettier, SonarQube, and Jest, delivering high-performance, maintainable, and reliable solutions."}],j=()=>{n=setInterval(()=>{t.value=(t.value+1)%m.value.length},Ln)},U=()=>{clearInterval(n)},ve=()=>{j()},ge=J=>{t.value=J};return Te(()=>{j()}),je(()=>{U()}),(J,c)=>{const be=fe,ye=me,O=ue,we=de,ke=ce,q=ie;return l(),p("div",null,[a("div",zt,[c[0]||(c[0]=a("div",{class:"text-center pb-4"},[a("h2",null,[a("div",{class:"text-4xl font-bold"},[b("Scalable Solutions for "),a("div",{class:"text-4xl font-bold bg-primary"},"Startups, Enterprises & Agencies")])]),a("div",{class:"text-xl text-center md:text-left line-height-3"}," I'm a full-stack developer with extensive experience in the JavaScript, VueJS, ReactJS and NodeJS ecosystems, as well as expertise in the Azure cloud platform. ")],-1)),a("div",Ht,[(l(),p($,null,C(u,d=>a("div",{class:"md:col col-6 text-center",key:d.title},[a("i",{class:P([d.icon,"m-auto text-400 pl-3"]),style:{"font-size":"5rem"}},null,2),a("img",{width:"50px",height:"50px",src:d.link,alt:d.title,loading:"eager",fetchpriority:"high"},null,8,Rt),a("h3",Wt,k(d.title),1)])),64))])]),a("div",Ut,[c[1]||(c[1]=a("div",{class:"text-center pb-4"},null,-1)),a("div",Jt,[(l(!0),p($,null,C(r.value,(d,K)=>(l(),p("div",{key:K,class:"gallery-item"},[a("a",{href:d.link,class:"text-l p-2 font-medium text-center no-underline","aria-label":d.name},[a("img",{src:d.images[0].itemImageSrc,alt:d.images[0].alt,loading:"eager",fetchpriority:"high"},null,8,Zt),a("h3",Qt,k(d.name),1)],8,qt)]))),128))]),c[2]||(c[2]=Z('<div class="text-center pb-4 grid justify-content-center gap-4"><a href="/about/#stack" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4"><div class="p-flex p-ai-center"><div class="p-button p-button-rounded p-button-secondary p-px-3 p-py-2 p-text-sm p-flex p-ai-center p-shadow-2 custom-button"><span class="mr-6">See all stacks</span><div class="absolute right-0 mr-5"><div class="circle pb-2 my-2 mx-2"></div><div class="circle pt-2 my-2 mx-2"></div></div><i class="pi pi-angle-double-right" alt="arrow" style="font-size:1rem;"></i></div></div></a><a href="/web-development-projects/" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4"><div class="p-flex p-ai-center"><div class="p-button p-button-rounded p-button-secondary p-px-3 p-py-2 p-text-sm p-flex p-ai-center p-shadow-2 custom-button"><span class="mr-6">See all projects</span><div class="absolute right-0 mr-5"><div class="circle pb-2 my-2 mx-2"></div><div class="circle pt-2 my-2 mx-2"></div></div><i class="pi pi-angle-double-right" style="font-size:1rem;"></i></div></div></a></div>',1))]),a("div",Yt,[c[5]||(c[5]=a("div",{class:"text-center pb-4"},[a("h2",null,[a("div",{class:"text-4xl font-bold"},[b("Trusted by "),a("div",{class:"text-4xl font-bold bg-primary"},"World Wide")])]),a("div",{class:"my-4 text-xl line-height-2"},"I value every client as a strategic partner. Here’s what they’ve shared about their experience working with me.")],-1)),a("div",{class:"card relative md:mx-0 -mx-4",onMouseenter:U,onMouseleave:ve},[A(be,{value:m.value,numVisible:1,numScroll:1,ref:"carousel",responsiveOptions:i.value,circular:"",page:t.value,onPage:ge},{item:v(d=>[a("div",Gt,[a("div",Xt,[a("div",en,[c[3]||(c[3]=a("span",{class:"font-bold text-4xl"},'"',-1)),b(" "+k(d.data.message),1)])]),a("div",tn,[a("img",{src:d.data.avatar,alt:d.data.name,loading:"eager",fetchpriority:"high",class:"border-circle",width:"50px",height:"50px"},null,8,nn),a("a",{href:d.data.link,target:"_blank",class:"no-underline"},[a("h3",on,[a("div",null,[c[4]||(c[4]=a("i",{class:"pi pi-linkedin mr-1 text-blue-700",style:{"font-size":"1rem"}},null,-1)),b(" "+k(d.data.name)+", ",1)]),a("div",null,[a("img",{alt:d.data.location,src:"https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png",loading:"eager",fetchpriority:"high",class:P(`flag flag-${d.data.code.toLowerCase()} mr-1`),style:{width:"18px"}},null,10,rn),b(" "+k(d.data.location),1)])])],8,an)])])]),_:1},8,["value","responsiveOptions","page"])],32),c[6]||(c[6]=Z('<div class="text-center pb-4"><a href="https://www.linkedin.com/in/jiwanghosal/details/recommendations/" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4"><div class="p-flex p-ai-center"><div class="p-button p-button-rounded p-button-secondary p-px-3 p-py-2 p-text-sm p-flex p-ai-center p-shadow-2 custom-button"><span class="mr-6"><i class="pi pi-linkedin" aria-label="LinkedIn Testimonials" style="font-size:1rem;"></i> LinkedIn Testimonials </span><div class="absolute right-0 mr-5"><div class="circle pb-2 my-2 mx-2"></div><div class="circle pt-2 my-2 mx-2"></div></div><i class="pi pi-angle-double-right" style="font-size:1rem;"></i></div></div></a></div>',1))]),a("div",sn,[c[7]||(c[7]=a("div",{class:"text-center pb-4"},[a("h2",null,[a("div",{class:"text-4xl font-bold"},[b("Why "),a("span",{class:"bg-primary"},"me?")])]),a("div",{class:"my-4 text-xl line-height-2"},"Here’s why I’m the right choice for your project")],-1)),a("div",ln,[(l(),p($,null,C(y,d=>a("div",{class:"md:col-6 col-12 md:p-4",key:d.title},[A(ye,{class:"vp-feature-item"},{legend:v(()=>[a("h3",cn,[a("img",{src:`/img/home/${d.id}.svg`,class:"p-avatar p-avatar-circle",loading:"lazy",alt:`${d.title} icon`,width:"24px",height:"24px"},null,8,dn),a("span",un,k(d.title),1)])]),default:v(()=>[a("p",pn,k(d.description),1)]),_:2},1024)])),64))])]),a("div",hn,[c[8]||(c[8]=a("div",{class:"text-center pb-4"},[a("h2",null,[a("div",{class:"text-4xl font-bold"},[b("Scaling startups "),a("div",{class:"text-4xl font-bold bg-primary"},"Elevating industry giants")])]),a("div",{class:"my-4 text-xl line-height-2"},"I bring a proven track record of success in the industry, with a comprehensive skill set spanning every phase of software development.")],-1)),a("div",mn,[(l(),p($,null,C(h,d=>a("div",{class:"md:col-2 col-5 border-round-md md:p-2 md:m-2 vp-feature-item flex align-items-center justify-content-center",key:d.title},[a("div",fn,[a("div",vn,[a("img",{src:d.icon,alt:d.title,width:"40px",height:"40px",class:"border-round-md",loading:"eager",fetchpriority:"high"},null,8,gn)]),a("div",bn,[a("h3",yn,k(d.title),1),a("div",wn,k(d.details),1)])])])),64))])]),a("div",kn,[c[15]||(c[15]=a("div",{class:"text-center pb-4"},[a("h2",null,[a("div",{class:"text-4xl font-bold line-height-2"},[b("Frequently asked "),a("span",{class:"bg-primary"},"questions")])])],-1)),a("div",xn,[a("div",In,[a("div",An,[A(ke,{activeIndex:0},{default:v(()=>[A(O,{header:"Q: How can I start a project with you?"},{default:v(()=>c[9]||(c[9]=[a("h3",{class:"m-0 p-0 hidden"},"How can I start a project with you?",-1),a("p",{class:"mx-3"},[b(" You can start by "),a("a",{href:"https://cal.com/stackseekers",class:"no-underline text-xl","aria-label":"schedule a meeting"},"scheduling a meeting"),b(" with me. I’ll connect with you promptly to discuss your requirements and plan the next steps. ")],-1)])),_:1}),A(O,{header:"Q: What services do you provide?"},{default:v(()=>c[10]||(c[10]=[a("h3",{class:"m-0 p-0 hidden"},"What services do you provide?",-1),a("div",{class:"mx-3"},[b(" I offer a variety of services tailored to your needs, including "),a("a",{href:"web-development-services/#ConsultingAndTechnicalAdvisory",class:"no-underline","aria-label":"Custom Web Development"},"Custom Web Development"),b(", "),a("a",{href:"web-development-services/#E-commerceSolutions",class:"no-underline","aria-label":"E-commerce Solutions"},"E-commerce Solutions"),b(", "),a("a",{href:"web-development-services/#APIDevelopmentAndIntegration",class:"no-underline","aria-label":"API Development and Integration"},"API Development and Integration "),b(", "),a("a",{href:"web-development-services/#FigmaToWeb",class:"no-underline","aria-label":"Figma to Web Conversion"},"Figma to Web Conversion"),b(", and "),a("a",{href:"web-development-services/#hosting",class:"no-underline","aria-label":"Hosting & Deployment"},"Hosting & Deployment"),b(". "),a("div",{class:"mt-2"},"Let’s find the best solution for your project!")],-1)])),_:1}),A(O,{header:"Q: What does the project process look like?"},{default:v(()=>[c[13]||(c[13]=a("h3",{class:"m-0 p-0 hidden"},"What does the project process look like?",-1)),a("div",$n,[c[12]||(c[12]=a("div",{class:"my-4"},"It’s simple and straightforward: ",-1)),A(we,{value:o.value,align:"left",pt:{eventOpposite:{style:{padding:0,flex:0}},marker:{style:{backgroundColor:"#FFA500"}},connector:{style:{backgroundColor:"#FFA500"}},content:{style:{padding:"4px, 2px"}}}},{opposite:v(d=>c[11]||(c[11]=[a("small",{class:"p-text-secondary"},null,-1)])),content:v(d=>[b(k(d.item.status),1)]),_:1},8,["value"])]),c[14]||(c[14]=a("div",null,null,-1))]),_:1})]),_:1}),a("div",Cn,[a("a",Pn,[A(q,{label:"Discuss your project",icon:"pi pi-calendar-clock",severity:"primary",raised:"",rounded:""})])])])])])]),a("div",Sn,[c[18]||(c[18]=a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 60 1440 260"},[a("path",{fill:"#10b981","fill-opacity":"0.1",d:"M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,160C560,160,640,192,720,176C800,160,880,96,960,80C1040,64,1120,96,1200,144C1280,192,1360,256,1400,288L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"})],-1)),a("div",null,[c[16]||(c[16]=a("div",{class:"text-center pb-4"},[a("h3",null,[a("div",{class:"text-4xl font-bold"},"NEED A FULL STACK WEB DEVELOPER?")]),a("div",{class:"my-4 text-md"},"Let's work together!")],-1)),c[17]||(c[17]=a("div",{class:"mx-4 text-center text-xl line-height-3"}," I'm always excited to tackle new challenges and bring ideas to life. If you’re searching for a committed full-stack developer to make your vision a reality, don’t hesitate to get in touch - I’d love to collaborate! ",-1)),a("div",_n,[a("a",Tn,[A(q,{label:"Let's collaborate now!",icon:"pi pi-briefcase",severity:"primary",raised:"",rounded:""})])]),a("div",jn,[(l(),p($,null,C(g,(d,K)=>a("a",{key:K,href:d.url,target:"_blank",class:"flex flex-row gap-2","aria-label":d.name},[a("i",{class:P(d.icon),"aria-label":d.label,style:{"font-size":"1rem"}},null,10,Bn)],8,Vn)),64))])]),c[19]||(c[19]=a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 60 1440 220",class:"-mb-1"},[a("path",{fill:"#10b981","fill-opacity":"0.1",d:"M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,160C560,160,640,192,720,176C800,160,880,96,960,80C1040,64,1120,96,1200,144C1280,192,1360,256,1400,288L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"})],-1))])])}}}),Kn=JSON.parse('{"path":"/","title":"Web Developer","lang":"en-US","frontmatter":{"home":true,"title":"Web Developer","description":"Stack Seekers is a full-stack web development agency helping startups and businesses build modern, high-performance websites and web applications. From idea to launch, we turn your vision into powerful digital solutions. Expert Vue.js, React.js, and Node.js developer delivering scalable web, mobile, and software solutions with 𝙈𝙀𝙍𝙉 and 𝙈𝙀𝙑𝙉 stacks (MongoDB, Express, React/Vue, Next/Nuxt, Node.js).","heroImage":"/img/home/jiwanghosal.webp","heroText":"Hi, I am Jiwan Ghosal","tagline":"Full-stack consultant specializing in scalable web, mobile, and software solutions using MERN and MEVN stacks. Let’s bring your ideas to life, connect with me today!","containerClass":"fancy-container","actions":[{"text":"Book free consultation","link":"https://cal.com/stackseekers","type":"primary"}],"editLink":false,"copyright":false,"head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Web Developer\\",\\"description\\":\\"Stack Seekers is a full-stack web development agency helping startups and businesses build modern, high-performance websites and web applications. From idea to launch, we turn your vision into powerful digital solutions. Expert Vue.js, React.js, and Node.js developer delivering scalable web, mobile, and software solutions with 𝙈𝙀𝙍𝙉 and 𝙈𝙀𝙑𝙉 stacks (MongoDB, Express, React/Vue, Next/Nuxt, Node.js).\\"}"],["meta",{"property":"og:url","content":"https://heartstchr.github.io/"}],["meta",{"property":"og:site_name","content":"Jiwan Ghosal"}],["meta",{"property":"og:title","content":"Web Developer"}],["meta",{"property":"og:description","content":"Stack Seekers is a full-stack web development agency helping startups and businesses build modern, high-performance websites and web applications. From idea to launch, we turn your vision into powerful digital solutions. Expert Vue.js, React.js, and Node.js developer delivering scalable web, mobile, and software solutions with 𝙈𝙀𝙍𝙉 and 𝙈𝙀𝙑𝙉 stacks (MongoDB, Express, React/Vue, Next/Nuxt, Node.js)."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-04-24T14:49:35.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-24T14:49:35.000Z"}]]},"git":{"createdTime":1671040067000,"updatedTime":1745506175000,"contributors":[{"name":"Jiwan ghosal","username":"","email":"jiwan.cse@gmail.com","commits":109}]},"readingTime":{"minutes":11.1,"words":3331},"filePathRelative":"README.md"}');export{On as comp,Kn as data};
