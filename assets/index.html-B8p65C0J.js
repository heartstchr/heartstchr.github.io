import{B as P,m as s,s as T,o as l,c as b,w as g,a as R,r as w,b as o,d as m,v as se,e as y,T as ce,n as C,f as E,g as M,h as le,R as W,i as de,j as D,k as h,F as A,l as _,p as x,t as I,q as ue,u as pe,x as he,y as L,z as me,A as fe,C as ve,D as G,E as k,G as ge,H as B,I as be,J as ye,_ as ke,K as Q}from"./app-CvkXX2Hq.js";import{s as N,a as q,U as F,b as Y,c as xe}from"./index-CYcH6kqZ.js";import{s as we}from"./index-CJ-eTCL2.js";import"./index-DWNtKo-M.js";var Ie={root:"p-accordioncontent",content:"p-accordioncontent-content"},Ae=P.extend({name:"accordioncontent",classes:Ie}),_e={name:"BaseAccordionContent",extends:T,props:{as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:Ae,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},X={name:"AccordionContent",extends:_e,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],computed:{id:function(){return"".concat(this.$pcAccordion.id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},ariaLabelledby:function(){return"".concat(this.$pcAccordion.id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},attrs:function(){return s(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{id:this.id,role:"region","aria-labelledby":this.ariaLabelledby,"data-pc-name":"accordioncontent","data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function Se(e,n,t,a,r,i){return e.asChild?m(e.$slots,"default",{key:1,class:C(e.cx("root")),active:i.$pcAccordionPanel.active,a11yAttrs:i.a11yAttrs}):(l(),b(ce,s({key:0,name:"p-toggleable-content"},e.ptm("transition",i.ptParams)),{default:g(function(){return[!i.$pcAccordion.lazy||i.$pcAccordionPanel.active?R((l(),b(w(e.as),s({key:0,class:e.cx("root")},i.attrs),{default:g(function(){return[o("div",s({class:e.cx("content")},e.ptm("content",i.ptParams)),[m(e.$slots,"default")],16)]}),_:3},16,["class"])),[[se,i.$pcAccordion.lazy?!0:i.$pcAccordionPanel.active]]):y("",!0)]}),_:3},16))}X.render=Se;var Ce={root:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon"},Pe=P.extend({name:"accordionheader",classes:Ce}),Te={name:"BaseAccordionHeader",extends:T,props:{as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:Pe,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},Z={name:"AccordionHeader",extends:Te,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(n){switch(n.code){case"ArrowDown":this.onArrowDownKey(n);break;case"ArrowUp":this.onArrowUpKey(n);break;case"Home":this.onHomeKey(n);break;case"End":this.onEndKey(n);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(n);break}},onArrowDownKey:function(n){var t=this.findNextPanel(this.findPanel(n.currentTarget));t?this.changeFocusedPanel(n,t):this.onHomeKey(n),n.preventDefault()},onArrowUpKey:function(n){var t=this.findPrevPanel(this.findPanel(n.currentTarget));t?this.changeFocusedPanel(n,t):this.onEndKey(n),n.preventDefault()},onHomeKey:function(n){var t=this.findFirstPanel();this.changeFocusedPanel(n,t),n.preventDefault()},onEndKey:function(n){var t=this.findLastPanel();this.changeFocusedPanel(n,t),n.preventDefault()},onEnterKey:function(n){this.changeActiveValue(),n.preventDefault()},findPanel:function(n){return n==null?void 0:n.closest('[data-pc-name="accordionpanel"]')},findHeader:function(n){return E(n,'[data-pc-name="accordionheader"]')},findNextPanel:function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=t?n:n.nextElementSibling;return a?M(a,"data-p-disabled")?this.findNextPanel(a):this.findHeader(a):null},findPrevPanel:function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=t?n:n.previousElementSibling;return a?M(a,"data-p-disabled")?this.findPrevPanel(a):this.findHeader(a):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(n,t){le(this.findHeader(t))}},computed:{id:function(){return"".concat(this.$pcAccordion.id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},ariaControls:function(){return"".concat(this.$pcAccordion.id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},attrs:function(){return s(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":"accordionheader","data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}},components:{ChevronUpIcon:N,ChevronDownIcon:q},directives:{ripple:W}};function Be(e,n,t,a,r,i){var f=de("ripple");return e.asChild?m(e.$slots,"default",{key:1,class:C(e.cx("root")),active:i.$pcAccordionPanel.active,a11yAttrs:i.a11yAttrs,onClick:i.onClick}):R((l(),b(w(e.as),s({key:0,class:e.cx("root"),onClick:i.onClick},i.attrs),{default:g(function(){return[m(e.$slots,"default",{active:i.$pcAccordionPanel.active}),m(e.$slots,"toggleicon",{active:i.$pcAccordionPanel.active,class:C(e.cx("toggleicon"))},function(){return[i.$pcAccordionPanel.active?(l(),b(w(i.$pcAccordion.$slots.collapseicon?i.$pcAccordion.$slots.collapseicon:i.$pcAccordion.collapseIcon?"span":"ChevronDownIcon"),s({key:0,class:[i.$pcAccordion.collapseIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",i.ptParams)),null,16,["class"])):(l(),b(w(i.$pcAccordion.$slots.expandicon?i.$pcAccordion.$slots.expandicon:i.$pcAccordion.expandIcon?"span":"ChevronUpIcon"),s({key:1,class:[i.$pcAccordion.expandIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",i.ptParams)),null,16,["class"]))]})]}),_:3},16,["class","onClick"])),[[f]])}Z.render=Be;var Ve={root:function(n){var t=n.instance,a=n.props;return["p-accordionpanel",{"p-accordionpanel-active":t.active,"p-disabled":a.disabled}]}},Le=P.extend({name:"accordionpanel",classes:Ve}),De={name:"BaseAccordionPanel",extends:T,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:Le,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},ee={name:"AccordionPanel",extends:De,inheritAttrs:!1,inject:["$pcAccordion"],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return s(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{"data-pc-name":"accordionpanel","data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function $e(e,n,t,a,r,i){return e.asChild?m(e.$slots,"default",{key:1,class:C(e.cx("root")),active:i.active,a11yAttrs:i.a11yAttrs}):(l(),b(w(e.as),s({key:0,class:e.cx("root")},i.attrs),{default:g(function(){return[m(e.$slots,"default")]}),_:3},16,["class"]))}ee.render=$e;var je=function(n){var t=n.dt;return`
.p-accordionpanel {
    display: flex;
    flex-direction: column;
    border-style: solid;
    border-width: `.concat(t("accordion.panel.border.width"),`;
    border-color: `).concat(t("accordion.panel.border.color"),`;
}

.p-accordionheader {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: `).concat(t("accordion.header.padding"),`;
    color: `).concat(t("accordion.header.color"),`;
    background: `).concat(t("accordion.header.background"),`;
    border-style: solid;
    border-width: `).concat(t("accordion.header.border.width"),`;
    border-color: `).concat(t("accordion.header.border.color"),`;
    font-weight: `).concat(t("accordion.header.font.weight"),`;
    border-radius: `).concat(t("accordion.header.border.radius"),`;
    transition: background `).concat(t("accordion.transition.duration"),"; color ").concat(t("accordion.transition.duration"),"color ").concat(t("accordion.transition.duration"),", outline-color ").concat(t("accordion.transition.duration"),", box-shadow ").concat(t("accordion.transition.duration"),`;
    outline-color: transparent;
}

.p-accordionpanel:first-child > .p-accordionheader {
    border-width: `).concat(t("accordion.header.first.border.width"),`;
    border-start-start-radius: `).concat(t("accordion.header.first.top.border.radius"),`;
    border-start-end-radius: `).concat(t("accordion.header.first.top.border.radius"),`;
}

.p-accordionpanel:last-child > .p-accordionheader {
    border-end-start-radius: `).concat(t("accordion.header.last.bottom.border.radius"),`;
    border-end-end-radius: `).concat(t("accordion.header.last.bottom.border.radius"),`;
}

.p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
    border-end-start-radius: `).concat(t("accordion.header.last.active.bottom.border.radius"),`;
    border-end-end-radius: `).concat(t("accordion.header.last.active.bottom.border.radius"),`;
}

.p-accordionheader-toggle-icon {
    color: `).concat(t("accordion.header.toggle.icon.color"),`;
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    box-shadow: `).concat(t("accordion.header.focus.ring.shadow"),`;
    outline: `).concat(t("accordion.header.focus.ring.width")," ").concat(t("accordion.header.focus.ring.style")," ").concat(t("accordion.header.focus.ring.color"),`;
    outline-offset: `).concat(t("accordion.header.focus.ring.offset"),`;
}

.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
    background: `).concat(t("accordion.header.hover.background"),`;
    color: `).concat(t("accordion.header.hover.color"),`;
}

.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
    color: `).concat(t("accordion.header.toggle.icon.hover.color"),`;
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
    background: `).concat(t("accordion.header.active.background"),`;
    color: `).concat(t("accordion.header.active.color"),`;
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
    color: `).concat(t("accordion.header.toggle.icon.active.color"),`;
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
    background: `).concat(t("accordion.header.active.hover.background"),`;
    color: `).concat(t("accordion.header.active.hover.color"),`;
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
    color: `).concat(t("accordion.header.toggle.icon.active.hover.color"),`;
}

.p-accordioncontent-content {
    border-style: solid;
    border-width: `).concat(t("accordion.content.border.width"),`;
    border-color: `).concat(t("accordion.content.border.color"),`;
    background-color: `).concat(t("accordion.content.background"),`;
    color: `).concat(t("accordion.content.color"),`;
    padding: `).concat(t("accordion.content.padding"),`;
}
`)},Oe={root:"p-accordion p-component"},Ee=P.extend({name:"accordion",theme:je,classes:Oe}),Me={name:"BaseAccordion",extends:T,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:Ee,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},te={name:"Accordion",extends:Me,inheritAttrs:!1,emits:["update:value","update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(n){this.id=n||F()},value:function(n){this.d_value=n},activeIndex:{immediate:!0,handler:function(n){this.hasAccordionTab&&(this.d_value=this.multiple?n==null?void 0:n.map(String):n==null?void 0:n.toString())}}},mounted:function(){this.id=this.id||F()},methods:{isItemActive:function(n){var t;return this.multiple?(t=this.d_value)===null||t===void 0?void 0:t.includes(n):this.d_value===n},updateValue:function(n){var t,a=this.isItemActive(n);this.multiple?a?this.d_value=this.d_value.filter(function(r){return r!==n}):this.d_value?this.d_value.push(n):this.d_value=[n]:this.d_value=a?null:n,this.$emit("update:value",this.d_value),this.$emit("update:activeIndex",this.multiple?(t=this.d_value)===null||t===void 0?void 0:t.map(Number):Number(this.d_value)),this.$emit(a?"tab-close":"tab-open",{originalEvent:void 0,index:Number(n)})},isAccordionTab:function(n){return n.type.name==="AccordionTab"},getTabProp:function(n,t){return n.props?n.props[t]:void 0},getKey:function(n,t){return this.getTabProp(n,"header")||t},getHeaderPT:function(n,t){var a=this;return{root:s({onClick:function(i){return a.onTabClick(i,t)}},this.getTabProp(n,"headerProps"),this.getTabPT(n,"header",t)),toggleicon:s(this.getTabProp(n,"headeractionprops"),this.getTabPT(n,"headeraction",t))}},getContentPT:function(n,t){return{root:s(this.getTabProp(n,"contentProps"),this.getTabPT(n,"toggleablecontent",t)),transition:this.getTabPT(n,"transition",t),content:this.getTabPT(n,"content",t)}},getTabPT:function(n,t,a){var r=this.tabs.length,i={props:n.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:a,count:r,first:a===0,last:a===r-1,active:this.isItemActive("".concat(a))}};return s(this.ptm("accordiontab.".concat(t),i),this.ptmo(this.getTabProp(n,"pt"),t,i))},onTabClick:function(n,t){this.$emit("tab-click",{originalEvent:n,index:t})}},computed:{tabs:function(){var n=this;return this.$slots.default().reduce(function(t,a){return n.isAccordionTab(a)?t.push(a):a.children&&a.children instanceof Array&&a.children.forEach(function(r){n.isAccordionTab(r)&&t.push(r)}),t},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:ee,AccordionHeader:Z,AccordionContent:X,ChevronUpIcon:N,ChevronRightIcon:Y}};function Ue(e,n,t,a,r,i){var f=D("AccordionHeader"),d=D("AccordionContent"),c=D("AccordionPanel");return l(),h("div",s({class:e.cx("root")},e.ptmi("root")),[i.hasAccordionTab?(l(!0),h(A,{key:0},_(i.tabs,function(p,v){return l(),b(c,{key:i.getKey(p,v),value:"".concat(v),pt:{root:i.getTabPT(p,"root",v)},disabled:i.getTabProp(p,"disabled")},{default:g(function(){return[x(f,{class:C(i.getTabProp(p,"headerClass")),pt:i.getHeaderPT(p,v)},{toggleicon:g(function(S){return[S.active?(l(),b(w(e.$slots.collapseicon?e.$slots.collapseicon:e.collapseIcon?"span":"ChevronDownIcon"),s({key:0,class:[e.collapseIcon,S.class],"aria-hidden":"true",ref_for:!0},i.getTabPT(p,"headericon",v)),null,16,["class"])):(l(),b(w(e.$slots.expandicon?e.$slots.expandicon:e.expandIcon?"span":"ChevronUpIcon"),s({key:1,class:[e.expandIcon,S.class],"aria-hidden":"true",ref_for:!0},i.getTabPT(p,"headericon",v)),null,16,["class"]))]}),default:g(function(){return[p.children&&p.children.headericon?(l(),b(w(p.children.headericon),{key:0,isTabActive:i.isItemActive("".concat(v)),active:i.isItemActive("".concat(v)),index:v},null,8,["isTabActive","active","index"])):y("",!0),p.props&&p.props.header?(l(),h("span",s({key:1,ref_for:!0},i.getTabPT(p,"headertitle",v)),I(p.props.header),17)):y("",!0),p.children&&p.children.header?(l(),b(w(p.children.header),{key:2})):y("",!0)]}),_:2},1032,["class","pt"]),x(d,{pt:i.getContentPT(p,v)},{default:g(function(){return[(l(),b(w(p)))]}),_:2},1032,["pt"])]}),_:2},1032,["value","pt","disabled"])}),128)):m(e.$slots,"default",{key:1})],16)}te.render=Ue;var Ne=function(n){var t=n.dt;return`
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
    padding: `.concat(t("timeline.vertical.event.content.padding"),`;
}

.p-timeline-vertical .p-timeline-event-connector {
    width: `).concat(t("timeline.event.connector.size"),`;
}

.p-timeline-event {
    display: flex;
    position: relative;
    min-height: `).concat(t("timeline.event.min.height"),`;
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
    border-width: `).concat(t("timeline.event.marker.border.width"),`;
    border-style: solid;
    border-color: `).concat(t("timeline.event.marker.border.color"),`;
    border-radius: `).concat(t("timeline.event.marker.border.radius"),`;
    width: `).concat(t("timeline.event.marker.size"),`;
    height: `).concat(t("timeline.event.marker.size"),`;
    background: `).concat(t("timeline.event.marker.background"),`;
}

.p-timeline-event-marker::before {
    content: " ";
    border-radius: `).concat(t("timeline.event.marker.content.border.radius"),`;
    width: `).concat(t("timeline.event.marker.content.size"),`;
    height:`).concat(t("timeline.event.marker.content.size"),`;
    background: `).concat(t("timeline.event.marker.content.background"),`;
}

.p-timeline-event-marker::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: `).concat(t("timeline.event.marker.border.radius"),`;
    box-shadow: `).concat(t("timeline.event.marker.content.inset.shadow"),`;
}

.p-timeline-event-connector {
    flex-grow: 1;
    background: `).concat(t("timeline.event.connector.color"),`;
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
    height: `).concat(t("timeline.event.connector.size"),`;
}

.p-timeline-horizontal .p-timeline-event-opposite,
.p-timeline-horizontal .p-timeline-event-content {
    padding: `).concat(t("timeline.horizontal.event.content.padding"),`;
}

.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: column-reverse;
}

.p-timeline-bottom .p-timeline-event {
    flex-direction: column-reverse;
}
`)},ze={root:function(n){var t=n.props;return["p-timeline p-component","p-timeline-"+t.align,"p-timeline-"+t.layout]},event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},Ke=P.extend({name:"timeline",theme:Ne,classes:ze}),He={name:"BaseTimeline",extends:T,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:Ke,provide:function(){return{$pcTimeline:this,$parentInstance:this}}},ne={name:"Timeline",extends:He,inheritAttrs:!1,methods:{getKey:function(n,t){return this.dataKey?ue(n,this.dataKey):t},getPTOptions:function(n,t){return this.ptm(n,{context:{index:t,count:this.value.length}})}}};function Fe(e,n,t,a,r,i){return l(),h("div",s({class:e.cx("root")},e.ptmi("root")),[(l(!0),h(A,null,_(e.value,function(f,d){return l(),h("div",s({key:i.getKey(f,d),class:e.cx("event"),ref_for:!0},i.getPTOptions("event",d)),[o("div",s({class:e.cx("eventOpposite",{index:d}),ref_for:!0},i.getPTOptions("eventOpposite",d)),[m(e.$slots,"opposite",{item:f,index:d})],16),o("div",s({class:e.cx("eventSeparator"),ref_for:!0},i.getPTOptions("eventSeparator",d)),[m(e.$slots,"marker",{item:f,index:d},function(){return[o("div",s({class:e.cx("eventMarker"),ref_for:!0},i.getPTOptions("eventMarker",d)),null,16)]}),d!==e.value.length-1?m(e.$slots,"connector",{key:0,item:f,index:d},function(){return[o("div",s({class:e.cx("eventConnector"),ref_for:!0},i.getPTOptions("eventConnector",d)),null,16)]}):y("",!0)],16),o("div",s({class:e.cx("eventContent"),ref_for:!0},i.getPTOptions("eventContent",d)),[m(e.$slots,"content",{item:f,index:d})],16)],16)}),128))],16)}ne.render=Fe;var Je=P.extend({name:"accordiontab"}),Re={name:"BaseAccordionTab",extends:T,props:{header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:Je,provide:function(){return{$pcAccordionTab:this,$parentInstance:this}}},ie={name:"AccordionTab",extends:Re,inheritAttrs:!1,mounted:function(){console.warn("Deprecated since v4. Use the new structure of Accordion instead.")}};function We(e,n,t,a,r,i){return m(e.$slots,"default")}ie.render=We;var Ge=function(n){var t=n.dt;return`
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
    gap: `.concat(t("carousel.content.gap"),`;
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
    padding: `).concat(t("carousel.indicator.list.padding"),`;
    gap: `).concat(t("carousel.indicator.list.gap"),`;
    margin: 0;
    list-style: none;
}

.p-carousel-indicator-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: `).concat(t("carousel.indicator.background"),`;
    width: `).concat(t("carousel.indicator.width"),`;
    height: `).concat(t("carousel.indicator.height"),`;
    border: 0 none;
    transition: background `).concat(t("carousel.transition.duration"),", color ").concat(t("carousel.transition.duration"),", outline-color ").concat(t("carousel.transition.duration"),", box-shadow ").concat(t("carousel.transition.duration"),`;
    outline-color: transparent;
    border-radius: `).concat(t("carousel.indicator.border.radius"),`;
    padding: 0;
    margin: 0;
    user-select: none;
    cursor: pointer;
}

.p-carousel-indicator-button:focus-visible {
    box-shadow: `).concat(t("carousel.indicator.focus.ring.shadow"),`;
    outline: `).concat(t("carousel.indicator.focus.ring.width")," ").concat(t("carousel.indicator.focus.ring.style")," ").concat(t("carousel.indicator.focus.ring.color"),`;
    outline-offset: `).concat(t("carousel.indicator.focus.ring.offset"),`;
}

.p-carousel-indicator-button:hover {
    background: `).concat(t("carousel.indicator.hover.background"),`;
}

.p-carousel-indicator-active .p-carousel-indicator-button {
    background: `).concat(t("carousel.indicator.active.background"),`;
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
`)},Qe={root:function(n){var t=n.instance;return["p-carousel p-component",{"p-carousel-vertical":t.isVertical(),"p-carousel-horizontal":!t.isVertical()}]},header:"p-carousel-header",contentContainer:"p-carousel-content-container",content:"p-carousel-content",pcPrevButton:function(n){var t=n.instance;return["p-carousel-prev-button",{"p-disabled":t.backwardIsDisabled}]},viewport:"p-carousel-viewport",itemList:"p-carousel-item-list",itemClone:function(n){var t=n.index,a=n.value,r=n.totalShiftedItems,i=n.d_numVisible;return["p-carousel-item p-carousel-item-clone",{"p-carousel-item-active":r*-1===a.length+i,"p-carousel-item-start":t===0,"p-carousel-item-end":a.slice(-1*i).length-1===t}]},item:function(n){var t=n.instance,a=n.index;return["p-carousel-item",{"p-carousel-item-active":t.firstIndex()<=a&&t.lastIndex()>=a,"p-carousel-item-start":t.firstIndex()===a,"p-carousel-item-end":t.lastIndex()===a}]},pcNextButton:function(n){var t=n.instance;return["p-carousel-next-button",{"p-disabled":t.forwardIsDisabled}]},indicatorList:"p-carousel-indicator-list",indicator:function(n){var t=n.instance,a=n.index;return["p-carousel-indicator",{"p-carousel-indicator-active":t.d_page===a}]},indicatorButton:"p-carousel-indicator-button",footer:"p-carousel-footer"},qe=P.extend({name:"carousel",theme:Ge,classes:Qe}),Ye={name:"BaseCarousel",extends:T,props:{value:null,page:{type:Number,default:0},numVisible:{type:Number,default:1},numScroll:{type:Number,default:1},responsiveOptions:Array,orientation:{type:String,default:"horizontal"},verticalViewPortHeight:{type:String,default:"300px"},contentClass:String,containerClass:String,indicatorsContentClass:String,circular:{type:Boolean,default:!1},autoplayInterval:{type:Number,default:0},showNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},prevButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},nextButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:qe,provide:function(){return{$pcCarousel:this,$parentInstance:this}}};function V(e){return tt(e)||et(e)||Ze(e)||Xe()}function Xe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ze(e,n){if(e){if(typeof e=="string")return U(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?U(e,n):void 0}}function et(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function tt(e){if(Array.isArray(e))return U(e)}function U(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=Array(n);t<n;t++)a[t]=e[t];return a}var ae={name:"Carousel",extends:Ye,inheritAttrs:!1,emits:["update:page"],isRemainingItemsAdded:!1,data:function(){return{remainingItems:0,d_numVisible:this.numVisible,d_numScroll:this.numScroll,d_oldNumScroll:0,d_oldNumVisible:0,d_oldValue:null,d_page:this.page,totalShiftedItems:this.page*this.numScroll*-1,allowAutoplay:!!this.autoplayInterval,d_circular:this.circular||this.allowAutoplay,swipeThreshold:20}},watch:{page:function(n){n>this.d_page?this.navForward({},n):n<this.d_page&&this.navBackward({},n),this.d_page=n},circular:function(n){this.d_circular=n},numVisible:function(n,t){this.d_numVisible=n,this.d_oldNumVisible=t},numScroll:function(n,t){this.d_oldNumScroll=t,this.d_numScroll=n},value:function(n){this.d_oldValue=n}},mounted:function(){var n=!1;if(this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners(),this.isCircular()){var t=this.totalShiftedItems;this.d_page===0?t=-1*this.d_numVisible:t===0&&(t=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),t!==this.totalShiftedItems&&(this.totalShiftedItems=t,n=!0)}!n&&this.isAutoplay()&&this.startAutoplay()},updated:function(){if(!this.empty){var n=this.isCircular(),t=!1,a=this.totalShiftedItems;if(this.autoplayInterval&&this.stopAutoplay(),this.d_oldNumScroll!==this.d_numScroll||this.d_oldNumVisible!==this.d_numVisible||this.d_oldValue.length!==this.value.length){this.remainingItems=(this.value.length-this.d_numVisible)%this.d_numScroll;var r=this.d_page;this.totalIndicators!==0&&r>=this.totalIndicators&&(r=this.totalIndicators-1,this.$emit("update:page",r),this.d_page=r,t=!0),a=r*this.d_numScroll*-1,n&&(a-=this.d_numVisible),r===this.totalIndicators-1&&this.remainingItems>0?(a+=-1*this.remainingItems+this.d_numScroll,this.isRemainingItemsAdded=!0):this.isRemainingItemsAdded=!1,a!==this.totalShiftedItems&&(this.totalShiftedItems=a,t=!0),this.d_oldNumScroll=this.d_numScroll,this.d_oldNumVisible=this.d_numVisible,this.d_oldValue=this.value,this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(a*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(a*(100/this.d_numVisible),"%, 0, 0)")}n&&(this.d_page===0?a=-1*this.d_numVisible:a===0&&(a=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),a!==this.totalShiftedItems&&(this.totalShiftedItems=a,t=!0)),!t&&this.isAutoplay()&&this.startAutoplay()}},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.autoplayInterval&&this.stopAutoplay()},methods:{getIndicatorPTOptions:function(n,t){return this.ptm(n,{context:{highlighted:t===this.d_page}})},getItemPTOptions:function(n,t){return this.ptm(n,{context:{index:t,active:this.firstIndex()<=t&&this.lastIndex()>=t,start:this.firstIndex()===t,end:this.lastIndex()===t}})},step:function(n,t){var a=this.totalShiftedItems,r=this.isCircular();if(t!=null)a=this.d_numScroll*t*-1,r&&(a-=this.d_numVisible),this.isRemainingItemsAdded=!1;else{a+=this.d_numScroll*n,this.isRemainingItemsAdded&&(a+=this.remainingItems-this.d_numScroll*n,this.isRemainingItemsAdded=!1);var i=r?a+this.d_numVisible:a;t=Math.abs(Math.floor(i/this.d_numScroll))}r&&this.d_page===this.totalIndicators-1&&n===-1?(a=-1*(this.value.length+this.d_numVisible),t=0):r&&this.d_page===0&&n===1?(a=0,t=this.totalIndicators-1):t===this.totalIndicators-1&&this.remainingItems>0&&(a+=this.remainingItems*-1-this.d_numScroll*n,this.isRemainingItemsAdded=!0),this.$refs.itemsContainer&&(!this.isUnstyled&&pe(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(a*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(a*(100/this.d_numVisible),"%, 0, 0)"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=a,this.$emit("update:page",t),this.d_page=t},calculatePosition:function(){if(this.$refs.itemsContainer&&this.responsiveOptions){for(var n=window.innerWidth,t={numVisible:this.numVisible,numScroll:this.numScroll},a=0;a<this.responsiveOptions.length;a++){var r=this.responsiveOptions[a];parseInt(r.breakpoint,10)>=n&&(t=r)}if(this.d_numScroll!==t.numScroll){var i=this.d_page;i=parseInt(i*this.d_numScroll/t.numScroll),this.totalShiftedItems=t.numScroll*i*-1,this.isCircular()&&(this.totalShiftedItems-=t.numVisible),this.d_numScroll=t.numScroll,this.$emit("update:page",i),this.d_page=i}this.d_numVisible!==t.numVisible&&(this.d_numVisible=t.numVisible)}},navBackward:function(n,t){(this.d_circular||this.d_page!==0)&&this.step(1,t),this.allowAutoplay=!1,n.cancelable&&n.preventDefault()},navForward:function(n,t){(this.d_circular||this.d_page<this.totalIndicators-1)&&this.step(-1,t),this.allowAutoplay=!1,n.cancelable&&n.preventDefault()},onIndicatorClick:function(n,t){var a=this.d_page;t>a?this.navForward(n,t):t<a&&this.navBackward(n,t)},onTransitionEnd:function(){this.$refs.itemsContainer&&(!this.isUnstyled&&he(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="",(this.d_page===0||this.d_page===this.totalIndicators-1)&&this.isCircular()&&(this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(this.totalShiftedItems*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(this.totalShiftedItems*(100/this.d_numVisible),"%, 0, 0)")))},onTouchStart:function(n){var t=n.changedTouches[0];this.startPos={x:t.pageX,y:t.pageY}},onTouchMove:function(n){var t=n.changedTouches[0],a=this.isVertical()?t.pageY-this.startPos.y:t.pageX-this.startPos.x;Math.abs(a)>this.swipeThreshold&&n.cancelable&&n.preventDefault()},onTouchEnd:function(n){var t=n.changedTouches[0];this.isVertical()?this.changePageOnTouch(n,t.pageY-this.startPos.y):this.changePageOnTouch(n,t.pageX-this.startPos.x)},changePageOnTouch:function(n,t){Math.abs(t)>this.swipeThreshold&&(t<0?this.navForward(n):this.navBackward(n))},onIndicatorKeydown:function(n){switch(n.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),n.preventDefault();break;case"End":this.onEndKey(),n.preventDefault();break;case"ArrowUp":case"ArrowDown":case"PageUp":case"PageDown":n.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey:function(){var n=V(L(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t+1===n.length?n.length-1:t+1)},onLeftKey:function(){var n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n-1<=0?0:n-1)},onHomeKey:function(){var n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,0)},onEndKey:function(){var n=V(L(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,n.length-1)},onTabKey:function(){var n=V(L(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),t=n.findIndex(function(i){return M(i,"data-p-active")===!0}),a=E(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]'),r=n.findIndex(function(i){return i===a.parentElement});n[r].children[0].tabIndex="-1",n[t].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var n=V(L(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),t=E(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]');return n.findIndex(function(a){return a===t.parentElement})},changedFocusedIndicator:function(n,t){var a=V(L(this.$refs.indicatorContent,'[data-pc-section="indicator"]'));a[n].children[0].tabIndex="-1",a[t].children[0].tabIndex="0",a[t].children[0].focus()},bindDocumentListeners:function(){var n=this;this.documentResizeListener||(this.documentResizeListener=function(t){n.calculatePosition(t)},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},startAutoplay:function(){var n=this;this.interval=setInterval(function(){n.d_page===n.totalIndicators-1?n.step(-1,0):n.step(-1,n.d_page+1)},this.autoplayInterval)},stopAutoplay:function(){this.interval&&clearInterval(this.interval)},createStyle:function(){if(!this.carouselStyle){var n;this.carouselStyle=document.createElement("style"),this.carouselStyle.type="text/css",me(this.carouselStyle,"nonce",(n=this.$primevue)===null||n===void 0||(n=n.config)===null||n===void 0||(n=n.csp)===null||n===void 0?void 0:n.nonce),document.body.appendChild(this.carouselStyle)}var t=`
                .p-carousel[`.concat(this.$attrSelector,`] .p-carousel-item {
                    flex: 1 0 `).concat(100/this.d_numVisible,`%
                }
            `);if(this.responsiveOptions&&!this.isUnstyled){var a=V(this.responsiveOptions),r=fe();a.sort(function(d,c){var p=d.breakpoint,v=c.breakpoint;return ve(p,v,-1,r)});for(var i=0;i<a.length;i++){var f=a[i];t+=`
                        @media screen and (max-width: `.concat(f.breakpoint,`) {
                            .p-carousel[`).concat(this.$attrSelector,`] .p-carousel-item {
                                flex: 1 0 `).concat(100/f.numVisible,`%
                            }
                        }
                    `)}}this.carouselStyle.innerHTML=t},isVertical:function(){return this.orientation==="vertical"},hasValidItemCount:function(){return this.value&&this.value.length>this.d_numVisible},isCircular:function(){return this.hasValidItemCount()&&this.d_circular},isAutoplay:function(){return this.hasValidItemCount()&&this.autoplayInterval&&this.allowAutoplay},firstIndex:function(){return this.isCircular()?-1*(this.totalShiftedItems+this.d_numVisible):this.totalShiftedItems*-1},lastIndex:function(){return this.firstIndex()+this.d_numVisible-1},ariaSlideNumber:function(n){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,n):void 0},ariaPageLabel:function(n){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,n):void 0}},computed:{totalIndicators:function(){return this.value?Math.max(Math.ceil((this.value.length-this.d_numVisible)/this.d_numScroll)+1,0):0},backwardIsDisabled:function(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&this.d_page===0},forwardIsDisabled:function(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&(this.d_page===this.totalIndicators-1||this.totalIndicators===0)},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0},ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0},empty:function(){return!this.value||this.value.length===0},emptyMessageText:function(){var n;return((n=this.$primevue.config)===null||n===void 0||(n=n.locale)===null||n===void 0?void 0:n.emptyMessage)||""}},components:{Button:G,ChevronRightIcon:Y,ChevronDownIcon:q,ChevronLeftIcon:xe,ChevronUpIcon:N},directives:{ripple:W}},nt=["aria-live"],it=["data-p-carousel-item-active","data-p-carousel-item-start","data-p-carousel-item-end"],at=["aria-hidden","aria-label","aria-roledescription","data-p-carousel-item-active","data-p-carousel-item-start","data-p-carousel-item-end"],ot=["data-p-active"],rt=["tabindex","aria-label","aria-current","onClick"];function st(e,n,t,a,r,i){var f=D("Button");return l(),h("div",s({class:e.cx("root"),role:"region"},e.ptmi("root")),[e.$slots.header?(l(),h("div",s({key:0,class:e.cx("header")},e.ptm("header")),[m(e.$slots,"header")],16)):y("",!0),i.empty?m(e.$slots,"empty",{key:2},function(){return[k(I(i.emptyMessageText),1)]}):(l(),h("div",s({key:1,class:[e.cx("contentContainer"),e.containerClass]},e.ptm("contentContainer")),[o("div",s({class:[e.cx("content"),e.contentClass],"aria-live":r.allowAutoplay?"polite":"off"},e.ptm("content")),[e.showNavigators?(l(),b(f,s({key:0,class:e.cx("pcPrevButton"),disabled:i.backwardIsDisabled,"aria-label":i.ariaPrevButtonLabel,unstyled:e.unstyled,onClick:i.navBackward},e.prevButtonProps,{pt:e.ptm("pcPrevButton"),"data-pc-group-section":"navigator"}),{icon:g(function(d){return[m(e.$slots,"previcon",{},function(){return[(l(),b(w(i.isVertical()?"ChevronUpIcon":"ChevronLeftIcon"),s({class:d.icon},e.ptm("pcPrevButton").icon),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-label","unstyled","onClick","pt"])):y("",!0),o("div",s({class:e.cx("viewport"),style:[{height:i.isVertical()?e.verticalViewPortHeight:"auto"}],onTouchend:n[1]||(n[1]=function(){return i.onTouchEnd&&i.onTouchEnd.apply(i,arguments)}),onTouchstart:n[2]||(n[2]=function(){return i.onTouchStart&&i.onTouchStart.apply(i,arguments)}),onTouchmove:n[3]||(n[3]=function(){return i.onTouchMove&&i.onTouchMove.apply(i,arguments)})},e.ptm("viewport")),[o("div",s({ref:"itemsContainer",class:e.cx("itemList"),onTransitionend:n[0]||(n[0]=function(){return i.onTransitionEnd&&i.onTransitionEnd.apply(i,arguments)})},e.ptm("itemList")),[i.isCircular()?(l(!0),h(A,{key:0},_(e.value.slice(-1*r.d_numVisible),function(d,c){return l(),h("div",s({key:c+"_scloned",class:e.cx("itemClone",{index:c,value:e.value,totalShiftedItems:r.totalShiftedItems,d_numVisible:r.d_numVisible}),ref_for:!0},e.ptm("itemClone"),{"data-p-carousel-item-active":r.totalShiftedItems*-1===e.value.length+r.d_numVisible,"data-p-carousel-item-start":c===0,"data-p-carousel-item-end":e.value.slice(-1*r.d_numVisible).length-1===c}),[m(e.$slots,"item",{data:d,index:c})],16,it)}),128)):y("",!0),(l(!0),h(A,null,_(e.value,function(d,c){return l(),h("div",s({key:c,class:e.cx("item",{index:c}),role:"group","aria-hidden":i.firstIndex()>c||i.lastIndex()<c?!0:void 0,"aria-label":i.ariaSlideNumber(c),"aria-roledescription":i.ariaSlideLabel,ref_for:!0},i.getItemPTOptions("item",c),{"data-p-carousel-item-active":i.firstIndex()<=c&&i.lastIndex()>=c,"data-p-carousel-item-start":i.firstIndex()===c,"data-p-carousel-item-end":i.lastIndex()===c}),[m(e.$slots,"item",{data:d,index:c})],16,at)}),128)),i.isCircular()?(l(!0),h(A,{key:1},_(e.value.slice(0,r.d_numVisible),function(d,c){return l(),h("div",s({key:c+"_fcloned",class:e.cx("itemClone",{index:c,value:e.value,totalShiftedItems:r.totalShiftedItems,d_numVisible:r.d_numVisible}),ref_for:!0},e.ptm("itemClone")),[m(e.$slots,"item",{data:d,index:c})],16)}),128)):y("",!0)],16)],16),e.showNavigators?(l(),b(f,s({key:1,class:e.cx("pcNextButton"),disabled:i.forwardIsDisabled,"aria-label":i.ariaNextButtonLabel,unstyled:e.unstyled,onClick:i.navForward},e.nextButtonProps,{pt:e.ptm("pcNextButton"),"data-pc-group-section":"navigator"}),{icon:g(function(d){return[m(e.$slots,"nexticon",{},function(){return[(l(),b(w(i.isVertical()?"ChevronDownIcon":"ChevronRightIcon"),s({class:d.class},e.ptm("pcNextButton").icon),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-label","unstyled","onClick","pt"])):y("",!0)],16,nt),i.totalIndicators>=0&&e.showIndicators?(l(),h("ul",s({key:0,ref:"indicatorContent",class:[e.cx("indicatorList"),e.indicatorsContentClass],onKeydown:n[4]||(n[4]=function(){return i.onIndicatorKeydown&&i.onIndicatorKeydown.apply(i,arguments)})},e.ptm("indicatorList")),[(l(!0),h(A,null,_(i.totalIndicators,function(d,c){return l(),h("li",s({key:"p-carousel-indicator-"+c.toString(),class:e.cx("indicator",{index:c}),ref_for:!0},i.getIndicatorPTOptions("indicator",c),{"data-p-active":r.d_page===c}),[o("button",s({class:e.cx("indicatorButton"),type:"button",tabindex:r.d_page===c?"0":"-1","aria-label":i.ariaPageLabel(c+1),"aria-current":r.d_page===c?"page":void 0,onClick:function(v){return i.onIndicatorClick(v,c)},ref_for:!0},i.getIndicatorPTOptions("indicatorButton",c)),null,16,rt)],16,ot)}),128))],16)):y("",!0)],16)),e.$slots.footer?(l(),h("div",s({key:3,class:e.cx("footer")},e.ptm("footer")),[m(e.$slots,"footer")],16)):y("",!0)],16)}ae.render=st;const J=5e3,ct=ge({__name:"index.html",setup(e,{expose:n}){n();const t=B(0);let a=null;const r=B([{status:"We start with understanding your requirements",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0"},{status:"Set a clear timeline",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"I handle the development phase",date:"15/10/2020 16:15",icon:"pi pi-shopping-cart",color:"#FF9800"},{status:"Deliver your project with ongoing support to ensure success",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}]),i=B([{name:"Upstox: Open Demat Account",description:"Open a Demat Account Online: Demat Account Opening at Upstox",skills:["AngularJS","MongoDB","MSSQL","LoopbackJS","Digital Ocean"],software:"Web",features:[{name:"Open Demat account with document upload"},{name:"Pan, Aadhar, IPV, and canceled check verification"},{name:"Lead to CRM system"},{name:"Scrutiny of lead"},{name:"Upload details to NSE, BSE, and MCX"},{name:"Report based on the flow of lead"}],org:"Upstox",year:"2017",schema:"https://schema.org/BusinessApplication",link:"https://upstox.com/open-demat-account/",images:[{itemImageSrc:"/img/projects/openDemat.png",thumbnailImageSrc:"/img/projects/openDemat.png",alt:"Open a Demat Account Online: Demat Account Opening at Upstox",title:"Open a Demat Account Online: Demat Account Opening at Upstox"}]},{name:"Trokka Attraction",description:"Book Attractions and Tours for Your Next Holiday",skills:["Javascript","ES6","VueJs","Vuex","Axios","API integration","ExpressJS","MongoDB","Git","EC2"],software:"Web",features:[{name:"Show Tours and Attraction of Malaysia"},{name:"Popular activities based on rating and demand"},{name:"Activities and details based on location"},{name:"Book and share attractions for other people"},{name:"Discount system based on promo code"},{name:"Paymnet system using Boost wallet and other payment methods"},{name:"Custome CMS Backend system to add, update, delete tours and attractions"}],org:"Catch That Bus",year:"2019",schema:"https://schema.org/DeveloperApplication",link:"/projects/#Trokka Attraction",images:[{itemImageSrc:"/img/projects/trokka.gif",thumbnailImageSrc:"/img/projects/trokka.gif",alt:"Trokka.com | Book Attractions and Tours for Your Next Holiday",title:"Trokka.com | Book Attractions and Tours for Your Next Holiday"}]},{name:"Call Matrix",description:"Call Intelligence, Marketing, and Analytics Platform",skills:["NodeJS","MongoDB","MSSQL","HapiJS","Digital Ocean"],software:"Web",features:[{name:"Create campaign for call"},{name:"Create bundel of campaigns for call"},{name:"Buy local & toll-free numbers"},{name:"Call Recording and Off Hour Call Handling"},{name:"Funnel to redirect the call based on the multi level IVR"},{name:"Report of bundel, CDR, and offer based on hour, week and geo location"},{name:"Dashboard to get bird eye view"},{name:"Google Adwords API integration"},{name:"User autherisation based on role"}],org:"Mobistreak",year:"2015",schema:"https://schema.org/BusinessApplication",link:"https://callmatrix.io/",images:[{itemImageSrc:"/img/projects/callmatrix.png",thumbnailImageSrc:"/img/projects/callmatrix.png",alt:"CallMatrix - Call Intelligence, Marketing, and Analytics Platform",title:"Title 1"}]},{name:"Catch That Bus",description:"Book Malaysia and Singapore bus tickets online.",skills:["Javascript","ES6","VueJs","Vuex","Vite","Axios","Cordova","API integration","ExpressJS","MongoDB","Git","EC2","Eslint","Prettier"],software:"Web / IOS APP",features:[{name:"Search for bus by chosing from destination and to destination in Malaysia for dates"},{name:"Sort and filter on available buses"},{name:"Seat visualization of a bus"},{name:"Booking system to handel concurent request"},{name:"Discount system based on cupon code"},{name:"Insurnce integration for travelers"},{name:"Payment system usign wallet and cards"},{name:"Webview for Boost wallet"},{name:"Multiple language support"},{name:"Multiple Currency support"},{name:"Bus Booked history"},{name:"Bus orboarding sytem for admin and bus operator"}],org:"Catch That Bus",year:"2019",schema:"https://schema.org/DeveloperApplication",link:"https://m.catchthatbus.com",iosLink:"https://apps.apple.com/my/app/catchthatbus/id1025824078",images:[{itemImageSrc:"/img/projects/catchthatbus.gif",thumbnailImageSrc:"/img/projects/catchthatbus.gif",alt:"Book Malaysia and Singapore bus tickets online. | CatchThatBus",title:"Book Malaysia and Singapore bus tickets online. | CatchThatBus"},{itemImageSrc:"https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/ad/b9/3b/adb93b8f-08b6-ac23-8f9e-906f7b2529c2/pr_source.png/230x0w.png",thumbnailImageSrc:"https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/ad/b9/3b/adb93b8f-08b6-ac23-8f9e-906f7b2529c2/pr_source.png/230x0w.png",alt:"IOS app for booking Malaysia and Singapore bus tickets online | CatchThatBus",title:"Title 1"}]},{name:"Upstox: Partner Dashboard",description:"Open a sub-broker account with Upstox.",skills:["AngularJS","MongoDB","MSSQL","LoopbackJS"],software:"Web",features:[{name:"Refer and earn program"},{name:"Track lead refered"},{name:"Ambasador program"},{name:"Royalty program"},{name:"Track customer refered"},{name:"Dashboard to show earning based on the program"},{name:"Search by name and UCC"},{name:"Earning report based on the customer trade"}],org:"Upstox",year:"2018",schema:"https://schema.org/BusinessApplication",link:"https://upstox.com/sub-broker/",images:[{itemImageSrc:"/img/projects/partnerUpstox/dashboard.png",thumbnailImageSrc:"/img/projects/partnerUpstox/dashboard.png",alt:"Open a sub-broker account with Upstox.",title:"Open a sub-broker account with Upstox."},{itemImageSrc:"/img/projects/partnerUpstox/partnerUpstox.png",thumbnailImageSrc:"/img/projects/partnerUpstox/partnerUpstox.png",alt:"Open a sub-broker account with Upstox.",title:"Open a sub-broker account with Upstox."},{itemImageSrc:"/img/projects/partnerUpstox/leads.png",thumbnailImageSrc:"/img/projects/partnerUpstox/leads.png",alt:"Open a sub-broker account with Upstox.",title:"Open a sub-broker account with Upstox."},{itemImageSrc:"/img/projects/partnerUpstox/customer.png",thumbnailImageSrc:"/img/projects/partnerUpstox/customer.png",alt:"Open a sub-broker account with Upstox.",title:"Open a sub-broker account with Upstox."},{itemImageSrc:"/img/projects/partnerUpstox/earning.png",thumbnailImageSrc:"/img/projects/partnerUpstox/earning.png",alt:"Open a sub-broker account with Upstox.",title:"Open a sub-broker account with Upstox."}]}]),f=B([{breakpoint:"1400px",numVisible:4,numScroll:1},{breakpoint:"1199px",numVisible:2,numScroll:1},{breakpoint:"767px",numVisible:2,numScroll:1},{breakpoint:"575px",numVisible:1,numScroll:1}]),d=B([{breakpoint:"1400px",numVisible:1,numScroll:1},{breakpoint:"1199px",numVisible:1,numScroll:1},{breakpoint:"767px",numVisible:1,numScroll:1},{breakpoint:"575px",numVisible:1,numScroll:1}]),c=[{label:"linkedin",icon:"pi pi-linkedin",url:"https://www.linkedin.com/in/jiwanghosal/"},{label:"youtube",icon:"pi pi-youtube",url:"https://www.youtube.com/@stackseekers"},{label:"stackoverflow",icon:"pi pi-chart-bar",url:"https://stackoverflow.com/users/10376224/stchr?tab=profile"},{label:"Instagram",icon:"pi pi-instagram",url:"https://www.instagram.com/jiwan_ghosal/"}],p=[{title:"Capgemini",icon:"/img/home/capgemini2.png",details:"Consulting and technology services",link:"https://www.capgemini.com/"},{title:"CatchThatBus",icon:"/img/home/catchthatbus.png",details:"Leisure, travel, and tourism",link:"https://www.catchthatbus.com/"},{title:"Upstox",icon:"/img/home/upstox.jpeg",details:"Online stock broker",link:"https://www.upstox.com/"},{title:"Mobistreak",icon:"/img/home/mobistreak.png",details:"Marketing and advertising",link:"https://www.mobistreak.com/"}],v=[{name:"Front end",value:["VueJS","Vue3","Nuxt","ReactJS","Vite","Pinia","Axios","Vuepress","Storybook","Lit","HTML5","CSS3","JavaScript(ES6)","TypeScript"]},{name:"Back end",value:["ExpressJS","NodeJS","MYSQL","MSSQL","PLSQL","MongoDB","DynamoDB"]},{name:"Hosting & Deployment",value:["Git","CICD","Ansible","YAML","Docker","Kibana","Azure","AWS"]},{name:"Automation Testing",value:["Jest","Testcafe","Lighthouse","Playwright"]}],S=()=>"background-image: url('/img/home/faq.jpeg');  background-repeat: no-repeat; background-size: cover;",u=[{icon:"pi pi-tag",title:"No minimum order",description:"Try our service without any hassle."},{icon:"pi pi-bolt",title:"Fast Delivery",description:"I have got you covered."},{icon:"pi pi-calendar-clock",title:"Support",description:"I am here to help!"},{icon:"pi pi-eye",title:"Free Demo",description:"Free demo biweekly to update progress."}],$=[{link:"/img/stacks/vuejs.png",title:"VueJs"},{link:"/img/stacks/reactjs.png",title:"ReactJS"},{link:"/img/stacks/nodejs.png",title:"NodeJs"},{link:"/img/stacks/mongodb.png",title:"MongoDb"}],z=B([{name:"Harris Malik",designation:"Senior Product Manager at 8x8",message:"Jiwan is one of the most valuable people I have ever met. He is smart, professional, and never fails to surprise us with creative solutions to difficult problems. Jiwan's personality and skills would be a great asset to any company. Highly recommended.",avatar:"https://media.licdn.com/dms/image/v2/D5603AQG8ooyo97JCoA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1682841547783?e=1738195200&v=beta&t=JARoSOLbmEvkdoSPUN0KudV6as1XSLEzxngLUDb9S6c",link:"https://www.linkedin.com/in/harrismalik04/",location:"Malaysia",code:"my"},{name:"Jurgen Sweere",designation:"Front End Expert at ABN Amro",message:"Jiwan never stopped amazing me. He brings a lot of front-end knowledge to the table and is able to quickly learn anything new. Jiwan is a great colleague to have!",avatar:"https://media.licdn.com/dms/image/v2/C5603AQGLWlLKfqFZgw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516235161685?e=1738195200&v=beta&t=UF337AJukgtr4CHB2h-M-Azrt31Y24z3Q2lRBTiIk_c",link:"https://www.linkedin.com/in/jurgensweere",location:"The Netherlands",code:"nl"},{name:"Shyam Kumar",designation:"Senior Product Manager at Angel One",message:"I always found Jiwan to be a very dependable and hardworking colleague. Many times he went above and beyond to meet the product requirements; it might be either working overtime to release the project on time or working with other teams to get the production issue fixed. He was always the go-to person on the team.",avatar:"https://media.licdn.com/dms/image/v2/D5603AQHZpSlK7j89uA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1698672442801?e=1738195200&v=beta&t=lXm4yDQlyLnGzUFtfzqjDGEgBzttasSc03uUb5s0ZVc",link:"https://www.linkedin.com/in/shyam-kumar-k/",location:"India",code:"in"},{name:"Erkan Ateşli",designation:"Chapter Lead at ABN AMRO Bank N.V.",message:"In our connection with Jiwan at ABN AMRO, I noticed that he has a lot of knowledge in his field of expertise. He can transfer his knowledge easily to others. With his strong analytics skills, he can handle complex questions as usual. Jiwan is a brave colleague I’ve met, and we had a lot of fun during the India visit and especially at the party. ",avatar:"https://media.licdn.com/dms/image/v2/C4E03AQFg4Oh_B9JEeQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1621625662967?e=1738195200&v=beta&t=Pe3O7c2KVXVkPPfb7cs06mLOgmvBHxUufz1hWnUDVCI",link:"https://www.linkedin.com/in/erkanatesli",location:"The Netherlands",code:"nl"}]),j=()=>{a=setInterval(()=>{t.value=(t.value+1)%z.value.length},J)},K=()=>{clearInterval(a)},oe=()=>{j()},re=O=>{t.value=O};be(()=>{j()}),ye(()=>{K()});const H={currentPage:t,autoplayInterval:J,get autoplayTimer(){return a},set autoplayTimer(O){a=O},events:r,projects:i,responsiveOptions:f,responsiveCustomerOptions:d,social:c,orgs:p,skills:v,getImage:S,features:u,stackLogos:$,testimonials:z,startAutoPlay:j,pauseAutoPlay:K,resumeAutoPlay:oe,onPageChange:re};return Object.defineProperty(H,"__isScriptSetup",{enumerable:!1,value:!0}),H}}),lt=o("div",{class:"hidden"},[o("div",{class:"text-4xl font-bold"},"Scaling startups, Elevating Industry Giants"),o("div",{class:"my-4 text-xl"},"Experienced full-stack developer specializing in scalable web, mobile, and software solutions.")],-1),dt={class:"my-6"},ut=o("div",{class:"text-center pb-4"},[o("div",{class:"text-4xl font-bold"},"Scaling startups"),o("a",{class:"text-4xl font-bold no-underline"},"Elevating industry giants"),o("div",{class:"my-4 text-xl"},"I bring a proven track record of success in the industry, with a comprehensive skill set spanning every phase of software development")],-1),pt={class:"my-4 flex flex-column md:flex-row justify-content-center"},ht={class:"no-underline flex flex-column justify-content-center flex-wrap"},mt={class:"mr-2 flex align-items-center justify-content-center"},ft=["src"],vt={class:"text-2xl font-bold flex align-items-center justify-content-center"},gt={class:"text-xs flex align-items-center justify-content-center"},bt={class:"my-6"},yt=o("div",{class:"text-center pb-4"},null,-1),kt={class:"card relative"},xt={class:"border border-surface-200 shadow-1 border-round-md rounded md:m-2 md:p-2 flex flex-column align-self-center align-items-center justify-content-center"},wt={key:0,class:"mb-2 image-box"},It={class:"relative mx-auto w-13rem h-10rem overflow-hidden"},At=["src","alt"],_t=["href"],St=Q('<div class="text-center pb-4"><a href="/projects/" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4"><div class="p-flex p-ai-center"><div class="p-button p-button-rounded p-button-secondary p-px-3 p-py-2 p-text-sm p-flex p-ai-center p-shadow-2 custom-button"><span class="mr-6">See all projects</span><div class="absolute right-0 mr-5"><div class="circle pb-2 my-2 mx-2"></div><div class="circle pt-2 my-2 mx-2"></div></div><i class="pi pi-angle-double-right" style="font-size:1rem;"></i></div></div></a></div>',1),Ct={class:"my-6"},Pt=o("div",{class:"text-center pb-4"},[o("div",{class:"text-4xl font-bold"},"Trusted by"),o("a",{class:"text-4xl font-bold no-underline"},"World Wide"),o("div",{class:"my-4 text-xl"},"I value every client as a strategic partner. Here’s what they’ve shared about their experience working with me.")],-1),Tt={class:"card shadow-1 border-round-md p-4 md:mx-8 vp-feature-item"},Bt={class:"font-italic mb-8"},Vt={class:"text-md"},Lt=o("span",{class:"font-bold text-4xl"},'"',-1),Dt={class:"flex align-items-center"},$t=["src"],jt=["href"],Ot={class:"flex flex-column align-items-start ml-2"},Et=["alt"],Mt=o("div",{class:"my-6 flex flex-column"},[o("div",{class:"text-center pb-4"},[o("div",{class:"text-4xl font-bold"},"Why me?")])],-1),Ut={class:"my-4"},Nt=o("div",{class:"text-xl"}," I'm a full-stack developer with extensive experience in the JavaScript, VueJS, ReactJS and NodeJS ecosystems, as well as expertise in the Azure cloud platform. ",-1),zt={class:"grid mt-4"},Kt=Q('<div class="text-center pb-4"><a href="/about/#stack" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4"><div class="p-flex p-ai-center"><div class="p-button p-button-rounded p-button-secondary p-px-3 p-py-2 p-text-sm p-flex p-ai-center p-shadow-2 custom-button"><span class="mr-6">See all stacks used</span><div class="absolute right-0 mr-5"><div class="circle pb-2 my-2 mx-2"></div><div class="circle pt-2 my-2 mx-2"></div></div><i class="pi pi-angle-double-right" style="font-size:1rem;"></i></div></div></a></div>',1),Ht={class:"my-6"},Ft=o("div",{class:"text-center pb-4"},[o("div",{class:"text-4xl font-bold"},[k("Frequently asked "),o("a",{class:"no-underline"},"questions")])],-1),Jt={class:"grid overflow-hidden border-round-2xl"},Rt={class:"col-12"},Wt={class:"border-round-2xl flex flex-column gap-2 p-2"},Gt=o("p",{class:"m-0"},[k(" You can start by "),o("a",{href:"https://cal.com/stackseekers",class:"no-underline"},"scheduling a meeting"),k(" with me. I’ll connect with you promptly to discuss your requirements and plan the next steps. ")],-1),Qt=o("p",{class:"m-0"},[k(" I offer a variety of services tailored to your needs, including "),o("a",{href:"services/#ConsultingAndTechnicalAdvisory",class:"no-underline"},"Custom Web Development"),k(", "),o("a",{href:"services/#E-commerceSolutions",class:"no-underline"},"E-commerce Solutions"),k(", "),o("a",{href:"services/#APIDevelopmentAndIntegration",class:"no-underline"},"API Development and Integration "),k(", "),o("a",{href:"services/#FigmatoWeb",class:"no-underline"},"Figma to Web Conversion"),k(", and "),o("a",{href:"services/#hosting",class:"no-underline"},"Hosting & Deployment"),k(". "),o("div",{class:"mt-2"},"Let’s find the best solution for your project!")],-1),qt={class:"m-0"},Yt=o("div",null,"It’s simple and straightforward:",-1),Xt={class:"my-4"},Zt={href:"https://cal.com/stackseekers",size:"large",color:"deeppink",class:"flex justify-content-center text-center no-underline mt-4"},en={class:"border-round-md vp-feature-item",id:"contact"},tn=o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 60 1440 260"},[o("path",{fill:"#10b981","fill-opacity":"0.1",d:"M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,160C560,160,640,192,720,176C800,160,880,96,960,80C1040,64,1120,96,1200,144C1280,192,1360,256,1400,288L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"})],-1),nn=o("div",{class:"text-center pb-4"},[o("div",{class:"text-4xl font-bold"},"Contact me"),o("div",{class:"my-4 text-md"},"Let's work together!")],-1),an=o("div",{class:"mx-4 text-center text-xl"}," I'm always excited to tackle new challenges and bring ideas to life. If you’re searching for a committed full-stack developer to make your vision a reality, don’t hesitate to get in touch - I’d love to collaborate! ",-1),on={class:"my-4"},rn={href:"mailto:jiwan.cse@gmail.com",size:"large",color:"deeppink",class:"flex justify-content-center text-center no-underline"},sn={class:"flex flex-row justify-content-end flex-wrap gap-4 mx-6"},cn=["href"],ln=o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 60 1440 220"},[o("path",{fill:"#10b981","fill-opacity":"0.1",d:"M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,160C560,160,640,192,720,176C800,160,880,96,960,80C1040,64,1120,96,1200,144C1280,192,1360,256,1400,288L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"})],-1);function dn(e,n,t,a,r,i){const f=ae,d=we,c=ie,p=ne,v=te,S=G;return l(),h("div",null,[lt,o("div",dt,[ut,o("div",pt,[(l(),h(A,null,_(a.orgs,u=>o("div",{class:"md:col col-12 border-round-md p-2 m-2 vp-feature-item flex align-items-center justify-content-center",key:u.title},[o("div",ht,[o("div",mt,[o("img",{src:u.icon,alt:"Avatar",width:"80px"},null,8,ft)]),o("div",vt,[o("span",null,I(u.title),1)]),o("div",gt,I(u.details),1)])])),64))])]),o("div",bt,[yt,o("div",kt,[x(f,{value:a.projects,numVisible:3,numScroll:1,responsiveOptions:a.responsiveOptions,class:"flex"},{item:g(u=>[o("div",xt,[u.data.images[0]?(l(),h("div",wt,[o("div",It,[o("img",{src:u.data.images[0].itemImageSrc,alt:u.data.images[0].alt,class:"w-full rounded"},null,8,At)])])):y("",!0),o("a",{href:u.data.link,class:"text-l p-2 font-medium text-center no-underline"},I(u.data.name),9,_t)])]),_:1},8,["value","responsiveOptions"])]),St]),o("div",Ct,[Pt,o("div",{class:"card relative",onMouseenter:a.pauseAutoPlay,onMouseleave:a.resumeAutoPlay},[x(f,{value:a.testimonials,numVisible:1,numScroll:1,ref:"carousel",responsiveOptions:a.responsiveCustomerOptions,circular:"",page:a.currentPage,onPage:a.onPageChange},{item:g(u=>[o("div",Tt,[o("div",Bt,[o("div",Vt,[Lt,k(" "+I(u.data.message),1)])]),o("div",Dt,[o("img",{src:u.data.avatar,alt:"Avatar",class:"border-circle",width:"50px"},null,8,$t),o("a",{href:u.data.link,target:"_blank",class:"no-underline"},[o("div",Ot,[o("div",null,I(u.data.name),1),o("div",null,[o("img",{alt:u.data.name,src:"https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png",class:C(`flag flag-${u.data.code.toLowerCase()} mr-2`),style:{width:"18px"}},null,10,Et),k(" "+I(u.data.location),1)])])],8,jt)])])]),_:1},8,["value","responsiveOptions","page"])],32)]),Mt,o("div",Ut,[Nt,o("div",zt,[(l(),h(A,null,_(a.stackLogos,u=>o("div",{class:"md:col col-6 text-center",key:u.title},[o("i",{class:C([u.icon,"m-auto text-400 pl-3"]),style:{"font-size":"5rem"}},null,2),x(d,{src:u.link,alt:"Avatar",width:"100px"},null,8,["src"])])),64))]),Kt]),o("div",Ht,[Ft,o("div",Jt,[o("div",Rt,[o("div",Wt,[x(v,{activeIndex:0},{default:g(()=>[x(c,{header:"Q: How can I start a project with you?"},{default:g(()=>[Gt]),_:1}),x(c,{header:"Q: What services do you provide?"},{default:g(()=>[Qt]),_:1}),x(c,{header:"Q: What does the project process look like?"},{default:g(()=>[o("p",qt,[Yt,x(p,{value:a.events,align:"alternate",class:"w-full md:w-80"},{content:g(u=>[k(I(u.item.status),1)]),_:1},8,["value"])])]),_:1})]),_:1}),o("div",Xt,[o("a",Zt,[x(S,{label:"Discuss your project",icon:"pi pi-calendar-clock",severity:"primary",raised:"",rounded:""})])])])])])]),o("div",en,[tn,o("div",null,[nn,an,o("div",on,[o("a",rn,[x(S,{label:"Let's collaborate now!",icon:"pi pi-briefcase",severity:"primary",raised:"",rounded:""})])]),o("div",sn,[(l(),h(A,null,_(a.social,(u,$)=>o("a",{key:$,href:u.url,target:"_blank",class:"flex flex-row gap-2"},[o("i",{class:C(u.icon),style:{"font-size":"1rem"}},null,2)],8,cn)),64))])]),ln])])}const fn=ke(ct,[["render",dn],["__file","index.html.vue"]]),vn=JSON.parse('{"path":"/","title":"Home","lang":"en-US","frontmatter":{"home":true,"icon":"pi pi-home","title":"Home","heroImage":"/img/jiwan.png","heroText":"Hi, I am Jiwan Ghosal","tagline":"Experienced full-stack developer specializing in scalable web, mobile, and software solutions.","containerClass":"fancy-container","actions":[{"text":"Let’s bring your vision to life","icon":"pi pi-calendar-clock","link":"https://cal.com/stackseekers","type":"primary"},{"text":"See my work 🚀","link":"/projects/"}],"editLink":false,"copyright":false,"description":"Scaling startups, Elevating Industry Giants Experienced full-stack developer specializing in scalable web, mobile, and software solutions. Scaling startups Elevating industry gi...","head":[["meta",{"property":"og:url","content":"https://heartstchr.github.io/"}],["meta",{"property":"og:site_name","content":"Jiwan Ghosal"}],["meta",{"property":"og:title","content":"Home"}],["meta",{"property":"og:description","content":"Scaling startups, Elevating Industry Giants Experienced full-stack developer specializing in scalable web, mobile, and software solutions. Scaling startups Elevating industry gi..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-22T11:38:43.000Z"}],["meta",{"property":"article:author","content":"Jiwan Ghosal"}],["meta",{"property":"article:modified_time","content":"2024-12-22T11:38:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Home\\",\\"description\\":\\"Scaling startups, Elevating Industry Giants Experienced full-stack developer specializing in scalable web, mobile, and software solutions. Scaling startups Elevating industry gi...\\"}"]]},"headers":[],"git":{"createdTime":1671040067000,"updatedTime":1734867523000,"contributors":[{"name":"Jiwan ghosal","email":"jiwan.cse@gmail.com","commits":67}]},"readingTime":{"minutes":10.07,"words":3020},"filePathRelative":"README.md","localizedDate":"December 14, 2022","excerpt":"<div class=\\"hidden\\">\\n  <div class=\\"text-4xl font-bold\\">Scaling startups, Elevating Industry Giants</div>\\n  <div class=\\"my-4 text-xl\\">Experienced full-stack developer specializing in scalable web, mobile, and software solutions.</div>\\n</div>\\n<div class=\\"my-6\\">\\n  <div class=\\"text-center pb-4\\">\\n    <div class=\\"text-4xl font-bold\\">Scaling startups</div>\\n    <a class=\\"text-4xl font-bold no-underline\\">Elevating industry giants</a>\\n    <div class=\\"my-4 text-xl\\">I bring a proven track record of success in the industry, with a comprehensive skill set spanning every phase of software development</div>\\n  </div>\\n  <div class=\\"my-4 flex flex-column md:flex-row justify-content-center\\">\\n    <div class=\\"md:col col-12 border-round-md p-2 m-2 vp-feature-item flex align-items-center justify-content-center\\" v-for=\\"org in orgs\\" :key=\\"org.title\\">\\n      <div class=\\"no-underline flex flex-column justify-content-center flex-wrap\\">\\n        <div class=\\"mr-2 flex align-items-center justify-content-center\\">\\n          \\n        </div>\\n        <div class=\\"text-2xl font-bold flex align-items-center justify-content-center\\"><span>{{org.title}}</span></div>\\n        <div class=\\"text-xs flex align-items-center justify-content-center\\">{{org.details}}</div>\\n      </div>\\n    </div>\\n  </div>\\n</div>","autoDesc":true}');export{fn as comp,vn as data};
