import{B as P,m as s,s as T,o as c,c as y,w as g,a as N,r as x,b as a,d as m,v as Y,e as k,T as Z,n as C,f as K,g as F,h as we,R as z,i as X,j,k as p,F as I,l as A,p as _,t as w,q as ke,u as ee,x as xe,y as _e,z as D,A as Ie,C as Ae,D as Ce,E as te,G as b,H as Se,I as V,J as Pe,K as Te,_ as Ve,L as ne}from"./app-2zFd3zCS.js";import{U as E,s as ie,a as Be}from"./index-zB8eAMQf.js";import{s as J,a as oe}from"./index-BUk6_9PT.js";var $e={root:"p-accordioncontent",content:"p-accordioncontent-content"},De=P.extend({name:"accordioncontent",classes:$e}),Le={name:"BaseAccordionContent",extends:T,props:{as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:De,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},ae={name:"AccordionContent",extends:Le,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],computed:{id:function(){return"".concat(this.$pcAccordion.id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},ariaLabelledby:function(){return"".concat(this.$pcAccordion.id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},attrs:function(){return s(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{id:this.id,role:"region","aria-labelledby":this.ariaLabelledby,"data-pc-name":"accordioncontent","data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function je(e,n,t,o,r,i){return e.asChild?m(e.$slots,"default",{key:1,class:C(e.cx("root")),active:i.$pcAccordionPanel.active,a11yAttrs:i.a11yAttrs}):(c(),y(Z,s({key:0,name:"p-toggleable-content"},e.ptm("transition",i.ptParams)),{default:g(function(){return[!i.$pcAccordion.lazy||i.$pcAccordionPanel.active?N((c(),y(x(e.as),s({key:0,class:e.cx("root")},i.attrs),{default:g(function(){return[a("div",s({class:e.cx("content")},e.ptm("content",i.ptParams)),[m(e.$slots,"default")],16)]}),_:3},16,["class"])),[[Y,i.$pcAccordion.lazy?!0:i.$pcAccordionPanel.active]]):k("",!0)]}),_:3},16))}ae.render=je;var Ne={root:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon"},Ee=P.extend({name:"accordionheader",classes:Ne}),Oe={name:"BaseAccordionHeader",extends:T,props:{as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:Ee,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},re={name:"AccordionHeader",extends:Oe,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(n){switch(n.code){case"ArrowDown":this.onArrowDownKey(n);break;case"ArrowUp":this.onArrowUpKey(n);break;case"Home":this.onHomeKey(n);break;case"End":this.onEndKey(n);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(n);break}},onArrowDownKey:function(n){var t=this.findNextPanel(this.findPanel(n.currentTarget));t?this.changeFocusedPanel(n,t):this.onHomeKey(n),n.preventDefault()},onArrowUpKey:function(n){var t=this.findPrevPanel(this.findPanel(n.currentTarget));t?this.changeFocusedPanel(n,t):this.onEndKey(n),n.preventDefault()},onHomeKey:function(n){var t=this.findFirstPanel();this.changeFocusedPanel(n,t),n.preventDefault()},onEndKey:function(n){var t=this.findLastPanel();this.changeFocusedPanel(n,t),n.preventDefault()},onEnterKey:function(n){this.changeActiveValue(),n.preventDefault()},findPanel:function(n){return n==null?void 0:n.closest('[data-pc-name="accordionpanel"]')},findHeader:function(n){return K(n,'[data-pc-name="accordionheader"]')},findNextPanel:function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=t?n:n.nextElementSibling;return o?F(o,"data-p-disabled")?this.findNextPanel(o):this.findHeader(o):null},findPrevPanel:function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=t?n:n.previousElementSibling;return o?F(o,"data-p-disabled")?this.findPrevPanel(o):this.findHeader(o):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(n,t){we(this.findHeader(t))}},computed:{id:function(){return"".concat(this.$pcAccordion.id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},ariaControls:function(){return"".concat(this.$pcAccordion.id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},attrs:function(){return s(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":"accordionheader","data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}},components:{ChevronUpIcon:J,ChevronDownIcon:oe},directives:{ripple:z}};function Me(e,n,t,o,r,i){var f=X("ripple");return e.asChild?m(e.$slots,"default",{key:1,class:C(e.cx("root")),active:i.$pcAccordionPanel.active,a11yAttrs:i.a11yAttrs,onClick:i.onClick}):N((c(),y(x(e.as),s({key:0,class:e.cx("root"),onClick:i.onClick},i.attrs),{default:g(function(){return[m(e.$slots,"default",{active:i.$pcAccordionPanel.active}),m(e.$slots,"toggleicon",{active:i.$pcAccordionPanel.active,class:C(e.cx("toggleicon"))},function(){return[i.$pcAccordionPanel.active?(c(),y(x(i.$pcAccordion.$slots.collapseicon?i.$pcAccordion.$slots.collapseicon:i.$pcAccordion.collapseIcon?"span":"ChevronDownIcon"),s({key:0,class:[i.$pcAccordion.collapseIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",i.ptParams)),null,16,["class"])):(c(),y(x(i.$pcAccordion.$slots.expandicon?i.$pcAccordion.$slots.expandicon:i.$pcAccordion.expandIcon?"span":"ChevronUpIcon"),s({key:1,class:[i.$pcAccordion.expandIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",i.ptParams)),null,16,["class"]))]})]}),_:3},16,["class","onClick"])),[[f]])}re.render=Me;var Ke={root:function(n){var t=n.instance,o=n.props;return["p-accordionpanel",{"p-accordionpanel-active":t.active,"p-disabled":o.disabled}]}},Fe=P.extend({name:"accordionpanel",classes:Ke}),He={name:"BaseAccordionPanel",extends:T,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:Fe,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},se={name:"AccordionPanel",extends:He,inheritAttrs:!1,inject:["$pcAccordion"],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return s(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{"data-pc-name":"accordionpanel","data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function ze(e,n,t,o,r,i){return e.asChild?m(e.$slots,"default",{key:1,class:C(e.cx("root")),active:i.active,a11yAttrs:i.a11yAttrs}):(c(),y(x(e.as),s({key:0,class:e.cx("root")},i.attrs),{default:g(function(){return[m(e.$slots,"default")]}),_:3},16,["class"]))}se.render=ze;var Je=function(n){var t=n.dt;return`
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
`)},Re={root:"p-accordion p-component"},Ue=P.extend({name:"accordion",theme:Je,classes:Re}),We={name:"BaseAccordion",extends:T,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:Ue,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},ce={name:"Accordion",extends:We,inheritAttrs:!1,emits:["update:value","update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(n){this.id=n||E()},value:function(n){this.d_value=n},activeIndex:{immediate:!0,handler:function(n){this.hasAccordionTab&&(this.d_value=this.multiple?n==null?void 0:n.map(String):n==null?void 0:n.toString())}}},mounted:function(){this.id=this.id||E()},methods:{isItemActive:function(n){var t;return this.multiple?(t=this.d_value)===null||t===void 0?void 0:t.includes(n):this.d_value===n},updateValue:function(n){var t,o=this.isItemActive(n);this.multiple?o?this.d_value=this.d_value.filter(function(r){return r!==n}):this.d_value?this.d_value.push(n):this.d_value=[n]:this.d_value=o?null:n,this.$emit("update:value",this.d_value),this.$emit("update:activeIndex",this.multiple?(t=this.d_value)===null||t===void 0?void 0:t.map(Number):Number(this.d_value)),this.$emit(o?"tab-close":"tab-open",{originalEvent:void 0,index:Number(n)})},isAccordionTab:function(n){return n.type.name==="AccordionTab"},getTabProp:function(n,t){return n.props?n.props[t]:void 0},getKey:function(n,t){return this.getTabProp(n,"header")||t},getHeaderPT:function(n,t){var o=this;return{root:s({onClick:function(i){return o.onTabClick(i,t)}},this.getTabProp(n,"headerProps"),this.getTabPT(n,"header",t)),toggleicon:s(this.getTabProp(n,"headeractionprops"),this.getTabPT(n,"headeraction",t))}},getContentPT:function(n,t){return{root:s(this.getTabProp(n,"contentProps"),this.getTabPT(n,"toggleablecontent",t)),transition:this.getTabPT(n,"transition",t),content:this.getTabPT(n,"content",t)}},getTabPT:function(n,t,o){var r=this.tabs.length,i={props:n.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:o,count:r,first:o===0,last:o===r-1,active:this.isItemActive("".concat(o))}};return s(this.ptm("accordiontab.".concat(t),i),this.ptmo(this.getTabProp(n,"pt"),t,i))},onTabClick:function(n,t){this.$emit("tab-click",{originalEvent:n,index:t})}},computed:{tabs:function(){var n=this;return this.$slots.default().reduce(function(t,o){return n.isAccordionTab(o)?t.push(o):o.children&&o.children instanceof Array&&o.children.forEach(function(r){n.isAccordionTab(r)&&t.push(r)}),t},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:se,AccordionHeader:re,AccordionContent:ae,ChevronUpIcon:J,ChevronRightIcon:ie}};function Qe(e,n,t,o,r,i){var f=j("AccordionHeader"),u=j("AccordionContent"),d=j("AccordionPanel");return c(),p("div",s({class:e.cx("root")},e.ptmi("root")),[i.hasAccordionTab?(c(!0),p(I,{key:0},A(i.tabs,function(h,v){return c(),y(d,{key:i.getKey(h,v),value:"".concat(v),pt:{root:i.getTabPT(h,"root",v)},disabled:i.getTabProp(h,"disabled")},{default:g(function(){return[_(f,{class:C(i.getTabProp(h,"headerClass")),pt:i.getHeaderPT(h,v)},{toggleicon:g(function(S){return[S.active?(c(),y(x(e.$slots.collapseicon?e.$slots.collapseicon:e.collapseIcon?"span":"ChevronDownIcon"),s({key:0,class:[e.collapseIcon,S.class],"aria-hidden":"true",ref_for:!0},i.getTabPT(h,"headericon",v)),null,16,["class"])):(c(),y(x(e.$slots.expandicon?e.$slots.expandicon:e.expandIcon?"span":"ChevronUpIcon"),s({key:1,class:[e.expandIcon,S.class],"aria-hidden":"true",ref_for:!0},i.getTabPT(h,"headericon",v)),null,16,["class"]))]}),default:g(function(){return[h.children&&h.children.headericon?(c(),y(x(h.children.headericon),{key:0,isTabActive:i.isItemActive("".concat(v)),active:i.isItemActive("".concat(v)),index:v},null,8,["isTabActive","active","index"])):k("",!0),h.props&&h.props.header?(c(),p("span",s({key:1,ref_for:!0},i.getTabPT(h,"headertitle",v)),w(h.props.header),17)):k("",!0),h.children&&h.children.header?(c(),y(x(h.children.header),{key:2})):k("",!0)]}),_:2},1032,["class","pt"]),_(u,{pt:i.getContentPT(h,v)},{default:g(function(){return[(c(),y(x(h)))]}),_:2},1032,["pt"])]}),_:2},1032,["value","pt","disabled"])}),128)):m(e.$slots,"default",{key:1})],16)}ce.render=Qe;var qe=function(n){var t=n.dt;return`
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
`)},Ge={root:function(n){var t=n.props;return["p-timeline p-component","p-timeline-"+t.align,"p-timeline-"+t.layout]},event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},Ye=P.extend({name:"timeline",theme:qe,classes:Ge}),Ze={name:"BaseTimeline",extends:T,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:Ye,provide:function(){return{$pcTimeline:this,$parentInstance:this}}},le={name:"Timeline",extends:Ze,inheritAttrs:!1,methods:{getKey:function(n,t){return this.dataKey?ke(n,this.dataKey):t},getPTOptions:function(n,t){return this.ptm(n,{context:{index:t,count:this.value.length}})}}};function Xe(e,n,t,o,r,i){return c(),p("div",s({class:e.cx("root")},e.ptmi("root")),[(c(!0),p(I,null,A(e.value,function(f,u){return c(),p("div",s({key:i.getKey(f,u),class:e.cx("event"),ref_for:!0},i.getPTOptions("event",u)),[a("div",s({class:e.cx("eventOpposite",{index:u}),ref_for:!0},i.getPTOptions("eventOpposite",u)),[m(e.$slots,"opposite",{item:f,index:u})],16),a("div",s({class:e.cx("eventSeparator"),ref_for:!0},i.getPTOptions("eventSeparator",u)),[m(e.$slots,"marker",{item:f,index:u},function(){return[a("div",s({class:e.cx("eventMarker"),ref_for:!0},i.getPTOptions("eventMarker",u)),null,16)]}),u!==e.value.length-1?m(e.$slots,"connector",{key:0,item:f,index:u},function(){return[a("div",s({class:e.cx("eventConnector"),ref_for:!0},i.getPTOptions("eventConnector",u)),null,16)]}):k("",!0)],16),a("div",s({class:e.cx("eventContent"),ref_for:!0},i.getPTOptions("eventContent",u)),[m(e.$slots,"content",{item:f,index:u})],16)],16)}),128))],16)}le.render=Xe;var et=P.extend({name:"accordiontab"}),tt={name:"BaseAccordionTab",extends:T,props:{header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:et,provide:function(){return{$pcAccordionTab:this,$parentInstance:this}}},de={name:"AccordionTab",extends:tt,inheritAttrs:!1,mounted:function(){console.warn("Deprecated since v4. Use the new structure of Accordion instead.")}};function nt(e,n,t,o,r,i){return m(e.$slots,"default")}de.render=nt;var ue={name:"MinusIcon",extends:ee};function it(e,n,t,o,r,i){return c(),p("svg",s({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),n[0]||(n[0]=[a("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"},null,-1)]),16)}ue.render=it;var pe={name:"PlusIcon",extends:ee};function ot(e,n,t,o,r,i){return c(),p("svg",s({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),n[0]||(n[0]=[a("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"},null,-1)]),16)}pe.render=ot;var at=function(n){var t=n.dt;return`
.p-fieldset {
    background: `.concat(t("fieldset.background"),`;
    border: 1px solid `).concat(t("fieldset.border.color"),`;
    border-radius: `).concat(t("fieldset.border.radius"),`;
    color: `).concat(t("fieldset.color"),`;
    padding: `).concat(t("fieldset.padding"),`;
    margin: 0;
}

.p-fieldset-legend {
    background: `).concat(t("fieldset.legend.background"),`;
    border-radius: `).concat(t("fieldset.legend.border.radius"),`;
    border-width: `).concat(t("fieldset.legend.border.width"),`;
    border-style: solid;
    border-color: `).concat(t("fieldset.legend.border.color"),`;
    padding: `).concat(t("fieldset.legend.padding"),`;
    transition: background `).concat(t("fieldset.transition.duration"),", color ").concat(t("fieldset.transition.duration"),", outline-color ").concat(t("fieldset.transition.duration"),", box-shadow ").concat(t("fieldset.transition.duration"),`;
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
    gap: `).concat(t("fieldset.legend.gap"),`;
    align-items: center;
    justify-content: center;
    padding: `).concat(t("fieldset.legend.padding"),`;
    background: transparent;
    border: 0 none;
    border-radius: `).concat(t("fieldset.legend.border.radius"),`;
    transition: background `).concat(t("fieldset.transition.duration"),", color ").concat(t("fieldset.transition.duration"),", outline-color ").concat(t("fieldset.transition.duration"),", box-shadow ").concat(t("fieldset.transition.duration"),`;
    outline-color: transparent;
}

.p-fieldset-legend-label {
    font-weight: `).concat(t("fieldset.legend.font.weight"),`;
}

.p-fieldset-toggle-button:focus-visible {
    box-shadow: `).concat(t("fieldset.legend.focus.ring.shadow"),`;
    outline: `).concat(t("fieldset.legend.focus.ring.width")," ").concat(t("fieldset.legend.focus.ring.style")," ").concat(t("fieldset.legend.focus.ring.color"),`;
    outline-offset: `).concat(t("fieldset.legend.focus.ring.offset"),`;
}

.p-fieldset-toggleable > .p-fieldset-legend:hover {
    color: `).concat(t("fieldset.legend.hover.color"),`;
    background: `).concat(t("fieldset.legend.hover.background"),`;
}

.p-fieldset-toggle-icon {
    color: `).concat(t("fieldset.toggle.icon.color"),`;
    transition: color `).concat(t("fieldset.transition.duration"),`;
}

.p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {
    color: `).concat(t("fieldset.toggle.icon.hover.color"),`;
}

.p-fieldset .p-fieldset-content {
    padding: `).concat(t("fieldset.content.padding"),`;
}
`)},rt={root:function(n){var t=n.props;return["p-fieldset p-component",{"p-fieldset-toggleable":t.toggleable}]},legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",content:"p-fieldset-content"},st=P.extend({name:"fieldset",theme:at,classes:rt}),ct={name:"BaseFieldset",extends:T,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:st,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},he={name:"Fieldset",extends:ct,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(n){this.id=n||E()},collapsed:function(n){this.d_collapsed=n}},mounted:function(){this.id=this.id||E()},methods:{toggle:function(n){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:n,value:this.d_collapsed})},onKeyDown:function(n){(n.code==="Enter"||n.code==="NumpadEnter"||n.code==="Space")&&(this.toggle(n),n.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend}},directives:{ripple:z},components:{PlusIcon:pe,MinusIcon:ue}};function L(e){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},L(e)}function Q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function q(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Q(Object(t),!0).forEach(function(o){lt(e,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Q(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})}return e}function lt(e,n,t){return(n=dt(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function dt(e){var n=ut(e,"string");return L(n)=="symbol"?n:n+""}function ut(e,n){if(L(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var o=t.call(e,n||"default");if(L(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var pt=["id"],ht=["id","aria-controls","aria-expanded","aria-label"],mt=["id","aria-labelledby"];function ft(e,n,t,o,r,i){var f=X("ripple");return c(),p("fieldset",s({class:e.cx("root")},e.ptmi("root")),[a("legend",s({class:e.cx("legend")},e.ptm("legend")),[m(e.$slots,"legend",{toggleCallback:i.toggle},function(){return[e.toggleable?k("",!0):(c(),p("span",s({key:0,id:r.id+"_header",class:e.cx("legendLabel")},e.ptm("legendLabel")),w(e.legend),17,pt)),e.toggleable?N((c(),p("button",s({key:1,id:r.id+"_header",type:"button","aria-controls":r.id+"_content","aria-expanded":!r.d_collapsed,"aria-label":i.buttonAriaLabel,class:e.cx("toggleButton"),onClick:n[0]||(n[0]=function(){return i.toggle&&i.toggle.apply(i,arguments)}),onKeydown:n[1]||(n[1]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)})},q(q({},e.toggleButtonProps),e.ptm("toggleButton"))),[m(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:r.d_collapsed,class:C(e.cx("toggleIcon"))},function(){return[(c(),y(x(r.d_collapsed?"PlusIcon":"MinusIcon"),s({class:e.cx("toggleIcon")},e.ptm("toggleIcon")),null,16,["class"]))]}),a("span",s({class:e.cx("legendLabel")},e.ptm("legendLabel")),w(e.legend),17)],16,ht)),[[f]]):k("",!0)]})],16),_(Z,s({name:"p-toggleable-content"},e.ptm("transition")),{default:g(function(){return[N(a("div",s({id:r.id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":r.id+"_header"},e.ptm("contentContainer")),[a("div",s({class:e.cx("content")},e.ptm("content")),[m(e.$slots,"default")],16)],16,mt),[[Y,!r.d_collapsed]])]}),_:3},16)],16)}he.render=ft;var gt=function(n){var t=n.dt;return`
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
`)},vt={root:function(n){var t=n.instance;return["p-carousel p-component",{"p-carousel-vertical":t.isVertical(),"p-carousel-horizontal":!t.isVertical()}]},header:"p-carousel-header",contentContainer:"p-carousel-content-container",content:"p-carousel-content",pcPrevButton:function(n){var t=n.instance;return["p-carousel-prev-button",{"p-disabled":t.backwardIsDisabled}]},viewport:"p-carousel-viewport",itemList:"p-carousel-item-list",itemClone:function(n){var t=n.index,o=n.value,r=n.totalShiftedItems,i=n.d_numVisible;return["p-carousel-item p-carousel-item-clone",{"p-carousel-item-active":r*-1===o.length+i,"p-carousel-item-start":t===0,"p-carousel-item-end":o.slice(-1*i).length-1===t}]},item:function(n){var t=n.instance,o=n.index;return["p-carousel-item",{"p-carousel-item-active":t.firstIndex()<=o&&t.lastIndex()>=o,"p-carousel-item-start":t.firstIndex()===o,"p-carousel-item-end":t.lastIndex()===o}]},pcNextButton:function(n){var t=n.instance;return["p-carousel-next-button",{"p-disabled":t.forwardIsDisabled}]},indicatorList:"p-carousel-indicator-list",indicator:function(n){var t=n.instance,o=n.index;return["p-carousel-indicator",{"p-carousel-indicator-active":t.d_page===o}]},indicatorButton:"p-carousel-indicator-button",footer:"p-carousel-footer"},bt=P.extend({name:"carousel",theme:gt,classes:vt}),yt={name:"BaseCarousel",extends:T,props:{value:null,page:{type:Number,default:0},numVisible:{type:Number,default:1},numScroll:{type:Number,default:1},responsiveOptions:Array,orientation:{type:String,default:"horizontal"},verticalViewPortHeight:{type:String,default:"300px"},contentClass:String,containerClass:String,indicatorsContentClass:String,circular:{type:Boolean,default:!1},autoplayInterval:{type:Number,default:0},showNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},prevButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},nextButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:bt,provide:function(){return{$pcCarousel:this,$parentInstance:this}}};function B(e){return _t(e)||xt(e)||kt(e)||wt()}function wt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kt(e,n){if(e){if(typeof e=="string")return H(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?H(e,n):void 0}}function xt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function _t(e){if(Array.isArray(e))return H(e)}function H(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,o=Array(n);t<n;t++)o[t]=e[t];return o}var me={name:"Carousel",extends:yt,inheritAttrs:!1,emits:["update:page"],isRemainingItemsAdded:!1,data:function(){return{remainingItems:0,d_numVisible:this.numVisible,d_numScroll:this.numScroll,d_oldNumScroll:0,d_oldNumVisible:0,d_oldValue:null,d_page:this.page,totalShiftedItems:this.page*this.numScroll*-1,allowAutoplay:!!this.autoplayInterval,d_circular:this.circular||this.allowAutoplay,swipeThreshold:20}},watch:{page:function(n){n>this.d_page?this.navForward({},n):n<this.d_page&&this.navBackward({},n),this.d_page=n},circular:function(n){this.d_circular=n},numVisible:function(n,t){this.d_numVisible=n,this.d_oldNumVisible=t},numScroll:function(n,t){this.d_oldNumScroll=t,this.d_numScroll=n},value:function(n){this.d_oldValue=n}},mounted:function(){var n=!1;if(this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners(),this.isCircular()){var t=this.totalShiftedItems;this.d_page===0?t=-1*this.d_numVisible:t===0&&(t=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),t!==this.totalShiftedItems&&(this.totalShiftedItems=t,n=!0)}!n&&this.isAutoplay()&&this.startAutoplay()},updated:function(){if(!this.empty){var n=this.isCircular(),t=!1,o=this.totalShiftedItems;if(this.autoplayInterval&&this.stopAutoplay(),this.d_oldNumScroll!==this.d_numScroll||this.d_oldNumVisible!==this.d_numVisible||this.d_oldValue.length!==this.value.length){this.remainingItems=(this.value.length-this.d_numVisible)%this.d_numScroll;var r=this.d_page;this.totalIndicators!==0&&r>=this.totalIndicators&&(r=this.totalIndicators-1,this.$emit("update:page",r),this.d_page=r,t=!0),o=r*this.d_numScroll*-1,n&&(o-=this.d_numVisible),r===this.totalIndicators-1&&this.remainingItems>0?(o+=-1*this.remainingItems+this.d_numScroll,this.isRemainingItemsAdded=!0):this.isRemainingItemsAdded=!1,o!==this.totalShiftedItems&&(this.totalShiftedItems=o,t=!0),this.d_oldNumScroll=this.d_numScroll,this.d_oldNumVisible=this.d_numVisible,this.d_oldValue=this.value,this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(o*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(o*(100/this.d_numVisible),"%, 0, 0)")}n&&(this.d_page===0?o=-1*this.d_numVisible:o===0&&(o=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),o!==this.totalShiftedItems&&(this.totalShiftedItems=o,t=!0)),!t&&this.isAutoplay()&&this.startAutoplay()}},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.autoplayInterval&&this.stopAutoplay()},methods:{getIndicatorPTOptions:function(n,t){return this.ptm(n,{context:{highlighted:t===this.d_page}})},getItemPTOptions:function(n,t){return this.ptm(n,{context:{index:t,active:this.firstIndex()<=t&&this.lastIndex()>=t,start:this.firstIndex()===t,end:this.lastIndex()===t}})},step:function(n,t){var o=this.totalShiftedItems,r=this.isCircular();if(t!=null)o=this.d_numScroll*t*-1,r&&(o-=this.d_numVisible),this.isRemainingItemsAdded=!1;else{o+=this.d_numScroll*n,this.isRemainingItemsAdded&&(o+=this.remainingItems-this.d_numScroll*n,this.isRemainingItemsAdded=!1);var i=r?o+this.d_numVisible:o;t=Math.abs(Math.floor(i/this.d_numScroll))}r&&this.d_page===this.totalIndicators-1&&n===-1?(o=-1*(this.value.length+this.d_numVisible),t=0):r&&this.d_page===0&&n===1?(o=0,t=this.totalIndicators-1):t===this.totalIndicators-1&&this.remainingItems>0&&(o+=this.remainingItems*-1-this.d_numScroll*n,this.isRemainingItemsAdded=!0),this.$refs.itemsContainer&&(!this.isUnstyled&&xe(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(o*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(o*(100/this.d_numVisible),"%, 0, 0)"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=o,this.$emit("update:page",t),this.d_page=t},calculatePosition:function(){if(this.$refs.itemsContainer&&this.responsiveOptions){for(var n=window.innerWidth,t={numVisible:this.numVisible,numScroll:this.numScroll},o=0;o<this.responsiveOptions.length;o++){var r=this.responsiveOptions[o];parseInt(r.breakpoint,10)>=n&&(t=r)}if(this.d_numScroll!==t.numScroll){var i=this.d_page;i=parseInt(i*this.d_numScroll/t.numScroll),this.totalShiftedItems=t.numScroll*i*-1,this.isCircular()&&(this.totalShiftedItems-=t.numVisible),this.d_numScroll=t.numScroll,this.$emit("update:page",i),this.d_page=i}this.d_numVisible!==t.numVisible&&(this.d_numVisible=t.numVisible)}},navBackward:function(n,t){(this.d_circular||this.d_page!==0)&&this.step(1,t),this.allowAutoplay=!1,n.cancelable&&n.preventDefault()},navForward:function(n,t){(this.d_circular||this.d_page<this.totalIndicators-1)&&this.step(-1,t),this.allowAutoplay=!1,n.cancelable&&n.preventDefault()},onIndicatorClick:function(n,t){var o=this.d_page;t>o?this.navForward(n,t):t<o&&this.navBackward(n,t)},onTransitionEnd:function(){this.$refs.itemsContainer&&(!this.isUnstyled&&_e(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="",(this.d_page===0||this.d_page===this.totalIndicators-1)&&this.isCircular()&&(this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(this.totalShiftedItems*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(this.totalShiftedItems*(100/this.d_numVisible),"%, 0, 0)")))},onTouchStart:function(n){var t=n.changedTouches[0];this.startPos={x:t.pageX,y:t.pageY}},onTouchMove:function(n){var t=n.changedTouches[0],o=this.isVertical()?t.pageY-this.startPos.y:t.pageX-this.startPos.x;Math.abs(o)>this.swipeThreshold&&n.cancelable&&n.preventDefault()},onTouchEnd:function(n){var t=n.changedTouches[0];this.isVertical()?this.changePageOnTouch(n,t.pageY-this.startPos.y):this.changePageOnTouch(n,t.pageX-this.startPos.x)},changePageOnTouch:function(n,t){Math.abs(t)>this.swipeThreshold&&(t<0?this.navForward(n):this.navBackward(n))},onIndicatorKeydown:function(n){switch(n.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),n.preventDefault();break;case"End":this.onEndKey(),n.preventDefault();break;case"ArrowUp":case"ArrowDown":case"PageUp":case"PageDown":n.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey:function(){var n=B(D(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t+1===n.length?n.length-1:t+1)},onLeftKey:function(){var n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n-1<=0?0:n-1)},onHomeKey:function(){var n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,0)},onEndKey:function(){var n=B(D(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,n.length-1)},onTabKey:function(){var n=B(D(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),t=n.findIndex(function(i){return F(i,"data-p-active")===!0}),o=K(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]'),r=n.findIndex(function(i){return i===o.parentElement});n[r].children[0].tabIndex="-1",n[t].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var n=B(D(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),t=K(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]');return n.findIndex(function(o){return o===t.parentElement})},changedFocusedIndicator:function(n,t){var o=B(D(this.$refs.indicatorContent,'[data-pc-section="indicator"]'));o[n].children[0].tabIndex="-1",o[t].children[0].tabIndex="0",o[t].children[0].focus()},bindDocumentListeners:function(){var n=this;this.documentResizeListener||(this.documentResizeListener=function(t){n.calculatePosition(t)},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},startAutoplay:function(){var n=this;this.interval=setInterval(function(){n.d_page===n.totalIndicators-1?n.step(-1,0):n.step(-1,n.d_page+1)},this.autoplayInterval)},stopAutoplay:function(){this.interval&&clearInterval(this.interval)},createStyle:function(){if(!this.carouselStyle){var n;this.carouselStyle=document.createElement("style"),this.carouselStyle.type="text/css",Ie(this.carouselStyle,"nonce",(n=this.$primevue)===null||n===void 0||(n=n.config)===null||n===void 0||(n=n.csp)===null||n===void 0?void 0:n.nonce),document.body.appendChild(this.carouselStyle)}var t=`
                .p-carousel[`.concat(this.$attrSelector,`] .p-carousel-item {
                    flex: 1 0 `).concat(100/this.d_numVisible,`%
                }
            `);if(this.responsiveOptions&&!this.isUnstyled){var o=B(this.responsiveOptions),r=Ae();o.sort(function(u,d){var h=u.breakpoint,v=d.breakpoint;return Ce(h,v,-1,r)});for(var i=0;i<o.length;i++){var f=o[i];t+=`
                        @media screen and (max-width: `.concat(f.breakpoint,`) {
                            .p-carousel[`).concat(this.$attrSelector,`] .p-carousel-item {
                                flex: 1 0 `).concat(100/f.numVisible,`%
                            }
                        }
                    `)}}this.carouselStyle.innerHTML=t},isVertical:function(){return this.orientation==="vertical"},hasValidItemCount:function(){return this.value&&this.value.length>this.d_numVisible},isCircular:function(){return this.hasValidItemCount()&&this.d_circular},isAutoplay:function(){return this.hasValidItemCount()&&this.autoplayInterval&&this.allowAutoplay},firstIndex:function(){return this.isCircular()?-1*(this.totalShiftedItems+this.d_numVisible):this.totalShiftedItems*-1},lastIndex:function(){return this.firstIndex()+this.d_numVisible-1},ariaSlideNumber:function(n){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,n):void 0},ariaPageLabel:function(n){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,n):void 0}},computed:{totalIndicators:function(){return this.value?Math.max(Math.ceil((this.value.length-this.d_numVisible)/this.d_numScroll)+1,0):0},backwardIsDisabled:function(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&this.d_page===0},forwardIsDisabled:function(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&(this.d_page===this.totalIndicators-1||this.totalIndicators===0)},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0},ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0},empty:function(){return!this.value||this.value.length===0},emptyMessageText:function(){var n;return((n=this.$primevue.config)===null||n===void 0||(n=n.locale)===null||n===void 0?void 0:n.emptyMessage)||""}},components:{Button:te,ChevronRightIcon:ie,ChevronDownIcon:oe,ChevronLeftIcon:Be,ChevronUpIcon:J},directives:{ripple:z}},It=["aria-live"],At=["data-p-carousel-item-active","data-p-carousel-item-start","data-p-carousel-item-end"],Ct=["aria-hidden","aria-label","aria-roledescription","data-p-carousel-item-active","data-p-carousel-item-start","data-p-carousel-item-end"],St=["data-p-active"],Pt=["tabindex","aria-label","aria-current","onClick"];function Tt(e,n,t,o,r,i){var f=j("Button");return c(),p("div",s({class:e.cx("root"),role:"region"},e.ptmi("root")),[e.$slots.header?(c(),p("div",s({key:0,class:e.cx("header")},e.ptm("header")),[m(e.$slots,"header")],16)):k("",!0),i.empty?m(e.$slots,"empty",{key:2},function(){return[b(w(i.emptyMessageText),1)]}):(c(),p("div",s({key:1,class:[e.cx("contentContainer"),e.containerClass]},e.ptm("contentContainer")),[a("div",s({class:[e.cx("content"),e.contentClass],"aria-live":r.allowAutoplay?"polite":"off"},e.ptm("content")),[e.showNavigators?(c(),y(f,s({key:0,class:e.cx("pcPrevButton"),disabled:i.backwardIsDisabled,"aria-label":i.ariaPrevButtonLabel,unstyled:e.unstyled,onClick:i.navBackward},e.prevButtonProps,{pt:e.ptm("pcPrevButton"),"data-pc-group-section":"navigator"}),{icon:g(function(u){return[m(e.$slots,"previcon",{},function(){return[(c(),y(x(i.isVertical()?"ChevronUpIcon":"ChevronLeftIcon"),s({class:u.icon},e.ptm("pcPrevButton").icon),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-label","unstyled","onClick","pt"])):k("",!0),a("div",s({class:e.cx("viewport"),style:[{height:i.isVertical()?e.verticalViewPortHeight:"auto"}],onTouchend:n[1]||(n[1]=function(){return i.onTouchEnd&&i.onTouchEnd.apply(i,arguments)}),onTouchstart:n[2]||(n[2]=function(){return i.onTouchStart&&i.onTouchStart.apply(i,arguments)}),onTouchmove:n[3]||(n[3]=function(){return i.onTouchMove&&i.onTouchMove.apply(i,arguments)})},e.ptm("viewport")),[a("div",s({ref:"itemsContainer",class:e.cx("itemList"),onTransitionend:n[0]||(n[0]=function(){return i.onTransitionEnd&&i.onTransitionEnd.apply(i,arguments)})},e.ptm("itemList")),[i.isCircular()?(c(!0),p(I,{key:0},A(e.value.slice(-1*r.d_numVisible),function(u,d){return c(),p("div",s({key:d+"_scloned",class:e.cx("itemClone",{index:d,value:e.value,totalShiftedItems:r.totalShiftedItems,d_numVisible:r.d_numVisible}),ref_for:!0},e.ptm("itemClone"),{"data-p-carousel-item-active":r.totalShiftedItems*-1===e.value.length+r.d_numVisible,"data-p-carousel-item-start":d===0,"data-p-carousel-item-end":e.value.slice(-1*r.d_numVisible).length-1===d}),[m(e.$slots,"item",{data:u,index:d})],16,At)}),128)):k("",!0),(c(!0),p(I,null,A(e.value,function(u,d){return c(),p("div",s({key:d,class:e.cx("item",{index:d}),role:"group","aria-hidden":i.firstIndex()>d||i.lastIndex()<d?!0:void 0,"aria-label":i.ariaSlideNumber(d),"aria-roledescription":i.ariaSlideLabel,ref_for:!0},i.getItemPTOptions("item",d),{"data-p-carousel-item-active":i.firstIndex()<=d&&i.lastIndex()>=d,"data-p-carousel-item-start":i.firstIndex()===d,"data-p-carousel-item-end":i.lastIndex()===d}),[m(e.$slots,"item",{data:u,index:d})],16,Ct)}),128)),i.isCircular()?(c(!0),p(I,{key:1},A(e.value.slice(0,r.d_numVisible),function(u,d){return c(),p("div",s({key:d+"_fcloned",class:e.cx("itemClone",{index:d,value:e.value,totalShiftedItems:r.totalShiftedItems,d_numVisible:r.d_numVisible}),ref_for:!0},e.ptm("itemClone")),[m(e.$slots,"item",{data:u,index:d})],16)}),128)):k("",!0)],16)],16),e.showNavigators?(c(),y(f,s({key:1,class:e.cx("pcNextButton"),disabled:i.forwardIsDisabled,"aria-label":i.ariaNextButtonLabel,unstyled:e.unstyled,onClick:i.navForward},e.nextButtonProps,{pt:e.ptm("pcNextButton"),"data-pc-group-section":"navigator"}),{icon:g(function(u){return[m(e.$slots,"nexticon",{},function(){return[(c(),y(x(i.isVertical()?"ChevronDownIcon":"ChevronRightIcon"),s({class:u.class},e.ptm("pcNextButton").icon),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-label","unstyled","onClick","pt"])):k("",!0)],16,It),i.totalIndicators>=0&&e.showIndicators?(c(),p("ul",s({key:0,ref:"indicatorContent",class:[e.cx("indicatorList"),e.indicatorsContentClass],onKeydown:n[4]||(n[4]=function(){return i.onIndicatorKeydown&&i.onIndicatorKeydown.apply(i,arguments)})},e.ptm("indicatorList")),[(c(!0),p(I,null,A(i.totalIndicators,function(u,d){return c(),p("li",s({key:"p-carousel-indicator-"+d.toString(),class:e.cx("indicator",{index:d}),ref_for:!0},i.getIndicatorPTOptions("indicator",d),{"data-p-active":r.d_page===d}),[a("button",s({class:e.cx("indicatorButton"),type:"button",tabindex:r.d_page===d?"0":"-1","aria-label":i.ariaPageLabel(d+1),"aria-current":r.d_page===d?"page":void 0,onClick:function(v){return i.onIndicatorClick(v,d)},ref_for:!0},i.getIndicatorPTOptions("indicatorButton",d)),null,16,Pt)],16,St)}),128))],16)):k("",!0)],16)),e.$slots.footer?(c(),p("div",s({key:3,class:e.cx("footer")},e.ptm("footer")),[m(e.$slots,"footer")],16)):k("",!0)],16)}me.render=Tt;const G=5e3,Vt=Se({__name:"index.html",setup(e,{expose:n}){n();const t=V(0);let o=null;const r=V(!1),i=()=>{r.value=!0},f=V([{status:"We start with understanding your requirements",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0"},{status:"Set a clear timeline",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"I handle the development phase",date:"15/10/2020 16:15",icon:"pi pi-shopping-cart",color:"#FF9800"},{status:"Deliver your project with ongoing support to ensure success",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}]),u=V([{name:"Upstox: Demat Account",description:"Open a Demat Account Online: Demat Account Opening at Upstox",skills:["AngularJS","MongoDB","MSSQL","LoopbackJS","Digital Ocean"],software:"Web",org:"Upstox",year:"2017",schema:"https://schema.org/BusinessApplication",link:"https://upstox.com/open-demat-account/",images:[{itemImageSrc:"/img/projects/openDemat.webp",thumbnailImageSrc:"/img/projects/openDemat.webp",alt:"Open a Demat Account Online: Demat Account Opening at Upstox",title:"Open a Demat Account Online: Demat Account Opening at Upstox"}]},{name:"Trokka Attraction",description:"Book Attractions and Tours for Your Next Holiday",skills:["Javascript","ES6","VueJs","Vuex","Axios","API integration","ExpressJS","MongoDB","Git","EC2"],software:"Web",org:"Catch That Bus",year:"2019",schema:"https://schema.org/DeveloperApplication",link:"/projects/#Trokka Attraction",images:[{itemImageSrc:"/img/projects/trokka.webp",thumbnailImageSrc:"/img/projects/trokka.webp",alt:"Trokka.com | Book Attractions and Tours for Your Next Holiday",title:"Trokka.com | Book Attractions and Tours for Your Next Holiday"}]},{name:"Catch That Bus",description:"Book Malaysia and Singapore bus tickets online.",skills:["Javascript","ES6","VueJs","Vuex","Vite","Axios","Cordova","API integration","ExpressJS","MongoDB","Git","EC2","Eslint","Prettier"],software:"Web / IOS APP",org:"Catch That Bus",year:"2019",schema:"https://schema.org/DeveloperApplication",link:"https://m.catchthatbus.com",iosLink:"https://apps.apple.com/my/app/catchthatbus/id1025824078",images:[{itemImageSrc:"/img/projects/catchthatbus.webp",thumbnailImageSrc:"/img/projects/catchthatbus.webp",alt:"Book Malaysia and Singapore bus tickets online. | CatchThatBus",title:"Book Malaysia and Singapore bus tickets online. | CatchThatBus"},{itemImageSrc:"https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/ad/b9/3b/adb93b8f-08b6-ac23-8f9e-906f7b2529c2/pr_source.png/230x0w.png",thumbnailImageSrc:"https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/ad/b9/3b/adb93b8f-08b6-ac23-8f9e-906f7b2529c2/pr_source.png/230x0w.png",alt:"IOS app for booking Malaysia and Singapore bus tickets online | CatchThatBus",title:"Title 1"}]},{name:"Call Matrix",description:"Call Intelligence, Marketing, and Analytics Platform",skills:["NodeJS","MongoDB","MSSQL","HapiJS","Digital Ocean"],software:"Web",org:"Mobistreak",year:"2015",schema:"https://schema.org/BusinessApplication",link:"https://callmatrix.io/",images:[{itemImageSrc:"/img/projects/callmatrix/callmatrix.webp",thumbnailImageSrc:"/img/projects/callmatrix/callmatrix.webp",alt:"CallMatrix - Call Intelligence, Marketing, and Analytics Platform",title:"Title 1"}]}]),d=V([{breakpoint:"1400px",numVisible:4,numScroll:1},{breakpoint:"1199px",numVisible:2,numScroll:1},{breakpoint:"767px",numVisible:2,numScroll:1},{breakpoint:"575px",numVisible:1,numScroll:1}]),h=V([{breakpoint:"1400px",numVisible:1,numScroll:1},{breakpoint:"1199px",numVisible:1,numScroll:1},{breakpoint:"767px",numVisible:1,numScroll:1},{breakpoint:"575px",numVisible:1,numScroll:1}]),v=[{label:"linkedin",icon:"pi pi-linkedin",url:"https://www.linkedin.com/in/jiwanghosal/"},{label:"youtube",icon:"pi pi-youtube",url:"https://www.youtube.com/@stackseekers"},{label:"stackoverflow",icon:"pi pi-chart-bar",url:"https://stackoverflow.com/users/10376224/stchr?tab=profile"},{label:"Instagram",icon:"pi pi-instagram",url:"https://www.instagram.com/jiwan_ghosal/"}],S=[{title:"Capgemini",icon:"/img/home/capgemini.webp",details:"Consulting and technology services",link:"https://www.capgemini.com/"},{title:"Catch That Bus",icon:"/img/home/catchthatbus.webp",details:"Leisure, travel, and tourism",link:"https://www.catchthatbus.com/"},{title:"Upstox",icon:"/img/home/upstox.webp",details:"Online stock broker",link:"https://www.upstox.com/"},{title:"Mobistreak",icon:"/img/home/mobistreak.webp",details:"Marketing and advertising",link:"https://www.mobistreak.com/"}],l=[{name:"Front end",value:["VueJS","Vue3","Nuxt","ReactJS","Vite","Pinia","Axios","Vuepress","Storybook","Lit","HTML5","CSS3","JavaScript(ES6)","TypeScript"]},{name:"Back end",value:["ExpressJS","NodeJS","MYSQL","MSSQL","PLSQL","MongoDB","DynamoDB"]},{name:"Hosting & Deployment",value:["Git","CICD","Ansible","YAML","Docker","Kibana","Azure","AWS"]},{name:"Automation Testing",value:["Jest","Testcafe","Lighthouse","Playwright"]}],$=()=>"background-image: url('/img/home/faq.webp');  background-repeat: no-repeat; background-size: cover;",fe=[{icon:"pi pi-tag",title:"No minimum order",description:"Try our service without any hassle."},{icon:"pi pi-bolt",title:"Fast Delivery",description:"I have got you covered."},{icon:"pi pi-calendar-clock",title:"Support",description:"I am here to help!"},{icon:"pi pi-eye",title:"Free Demo",description:"Free demo biweekly to update progress."}],ge=[{link:"https://cdn.simpleicons.org/javascript?viewbox=auto",title:"Javascript"},{link:"https://cdn.simpleicons.org/typescript?viewbox=auto",title:"Typescript"},{link:"https://cdn.simpleicons.org/vuedotjs?viewbox=auto",title:"vuejs"},{link:"https://cdn.simpleicons.org/react?viewbox=auto",title:"ReactJS"},{link:"https://cdn.simpleicons.org/nodedotjs?viewbox=auto",title:"NodeJs"},{link:"https://cdn.simpleicons.org/mongodb?viewbox=auto",title:"MongoDb"}],R=V([{name:"Harris Malik",designation:"Senior Product Manager at 8x8",message:"Jiwan is one of the most valuable people I have ever met. He is smart, professional, and never fails to surprise us with creative solutions to difficult problems. Jiwan's personality and skills would be a great asset to any company. Highly recommended.",avatar:"https://media.licdn.com/dms/image/v2/D5603AQG8ooyo97JCoA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1682841547783?e=1750896000&v=beta&t=RV2vZM-PEHtTdtboor0V4y6H-KGoUu7-DuJiiET_buU",link:"https://www.linkedin.com/in/harrismalik04/",location:"Malaysia",code:"my"},{name:"Jurgen Sweere",designation:"Front End Expert at ABN Amro",message:"Jiwan never stopped amazing me. He brings a lot of front-end knowledge to the table and is able to quickly learn anything new. Jiwan is a great colleague to have!",avatar:"https://media.licdn.com/dms/image/v2/C5603AQGLWlLKfqFZgw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516235161685?e=1750896000&v=beta&t=29wMeVltwAWsPCr9QHNhRJZWz1LZaEgES0iwjE2A4oc",link:"https://www.linkedin.com/in/jurgensweere",location:"The Netherlands",code:"nl"},{name:"Shyam Kumar",designation:"Senior Product Manager at Angel One",message:"I always found Jiwan to be a very dependable and hardworking colleague. Many times he went above and beyond to meet the product requirements; it might be either working overtime to release the project on time or working with other teams to get the production issue fixed. He was always the go-to person on the team.",avatar:"https://media.licdn.com/dms/image/v2/D5603AQHZpSlK7j89uA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1698672442801?e=1750896000&v=beta&t=lscT5fFmahvoGSWRzV4hN-r2YM58ddKTki5HdOziiuI",link:"https://www.linkedin.com/in/shyam-kumar-k/",location:"India",code:"in"},{name:"Erkan Ateşli",designation:"Chapter Lead at ABN AMRO Bank N.V.",message:"In our connection with Jiwan at ABN AMRO, I noticed that he has a lot of knowledge in his field of expertise. He can transfer his knowledge easily to others. With his strong analytics skills, he can handle complex questions as usual. Jiwan is a brave colleague I’ve met, and we had a lot of fun during the India visit and especially at the party. ",avatar:"https://media.licdn.com/dms/image/v2/C4E03AQFg4Oh_B9JEeQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1621625662967?e=1750896000&v=beta&t=9KwLZLloVo4ianxK3csxIjlMY0_G0Ez7nKYvgPVVssE",link:"https://www.linkedin.com/in/erkanatesli",location:"The Netherlands",code:"nl"}]),ve=[{id:"proven_expertise",title:"10+ Years of Proven Expertise",description:"Over a decade of delivering impactful projects, consistently providing innovative solutions that drive tangible results and add measurable value for clients across industries."},{id:"client_centric_approach",title:"Client-Centric Approach",description:"Focused on understanding your unique needs, I offer tailored solutions that align with your business goals, ensuring seamless collaboration and delivering the most effective value."},{id:"wide_range_of_experience",title:"20+ Clients Across Industries",description:"With experience working with over 20 clients from diverse sectors, I bring versatile expertise, quickly adapting to challenges and offering solutions suited to each industry’s demands."},{id:"commitment_to_quality_code",title:"Commitment to Quality Code",description:"I ensure all code is clean, scalable, and efficient by using industry-standard tools such as ESLint, Prettier, SonarQube, and Jest, delivering high-performance, maintainable, and reliable solutions."}],O=()=>{o=setInterval(()=>{t.value=(t.value+1)%R.value.length},G)},U=()=>{clearInterval(o)},be=()=>{O()},ye=M=>{t.value=M};Pe(()=>{O()}),Te(()=>{U()});const W={currentPage:t,autoplayInterval:G,get autoplayTimer(){return o},set autoplayTimer(M){o=M},visible:r,onVisible:i,events:f,projects:u,responsiveOptions:d,responsiveCustomerOptions:h,social:v,orgs:S,skills:l,getImage:$,features:fe,stackLogos:ge,testimonials:R,whyme:ve,startAutoPlay:O,pauseAutoPlay:U,resumeAutoPlay:be,onPageChange:ye};return Object.defineProperty(W,"__isScriptSetup",{enumerable:!1,value:!0}),W}}),Bt=a("div",{class:"hidden"},[a("h2",{class:"text-4xl font-bold"},"Empowering Digital Growth Through Custom Web Development | Jiwan Ghosal"),a("h3",{class:"my-4 text-xl"},"I'm a full stack developer specializing in building web applications using JavaScript, Vue, React and Node.js")],-1),$t={class:"my-6"},Dt=a("div",{class:"text-center pb-4"},[a("h2",null,[a("div",{class:"text-4xl font-bold"},[b("Scalable Solutions for "),a("div",{class:"text-4xl font-bold bg-primary"},"Startups, Enterprises & Agencies")])]),a("div",{class:"text-xl text-center md:text-left line-height-3"}," I'm a full-stack developer with extensive experience in the JavaScript, VueJS, ReactJS and NodeJS ecosystems, as well as expertise in the Azure cloud platform. ")],-1),Lt={class:"grid mt-4"},jt=["src","alt"],Nt={class:"hidden"},Et={class:"my-6"},Ot=a("div",{class:"text-center pb-4"},null,-1),Mt={class:"gallery"},Kt=["href","aria-label"],Ft=["src","alt"],Ht={class:"p-0 mt-4"},zt=a("i",{class:"pi pi-external-link ml-1 text-blue-700",style:{"font-size":"1rem"}},null,-1),Jt=ne('<div class="text-center pb-4 grid justify-content-center gap-4"><a href="/about/#stack" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4"><div class="p-flex p-ai-center"><div class="p-button p-button-rounded p-button-secondary p-px-3 p-py-2 p-text-sm p-flex p-ai-center p-shadow-2 custom-button"><span class="mr-6">See all stacks</span><div class="absolute right-0 mr-5"><div class="circle pb-2 my-2 mx-2"></div><div class="circle pt-2 my-2 mx-2"></div></div><i class="pi pi-angle-double-right" alt="arrow" style="font-size:1rem;"></i></div></div></a><a href="/web-development-projects/" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4"><div class="p-flex p-ai-center"><div class="p-button p-button-rounded p-button-secondary p-px-3 p-py-2 p-text-sm p-flex p-ai-center p-shadow-2 custom-button"><span class="mr-6">See all projects</span><div class="absolute right-0 mr-5"><div class="circle pb-2 my-2 mx-2"></div><div class="circle pt-2 my-2 mx-2"></div></div><i class="pi pi-angle-double-right" style="font-size:1rem;"></i></div></div></a></div>',1),Rt={class:"my-6"},Ut=a("div",{class:"text-center pb-4"},[a("h2",null,[a("div",{class:"text-4xl font-bold"},[b("Trusted by "),a("div",{class:"text-4xl font-bold bg-primary"},"World Wide")])]),a("div",{class:"my-4 text-xl line-height-2"},"I value every client as a strategic partner. Here’s what they’ve shared about their experience working with me.")],-1),Wt={class:"card shadow-1 border-round-md p-4 md:mx-8 vp-feature-item"},Qt={class:"font-italic mb-8"},qt={class:"text-md line-height-3"},Gt=a("span",{class:"font-bold text-4xl"},'"',-1),Yt={class:"flex align-items-center"},Zt=["src","alt"],Xt=["href"],en={class:"flex flex-column align-items-start ml-2 p-0 m-0"},tn=a("i",{class:"pi pi-linkedin mr-1 text-blue-700",style:{"font-size":"1rem"}},null,-1),nn=["alt"],on=ne('<div class="text-center pb-4"><a href="https://www.linkedin.com/in/jiwanghosal/details/recommendations/" size="large" color="deeppink" class="flex justify-content-center text-center no-underline mt-4"><div class="p-flex p-ai-center"><div class="p-button p-button-rounded p-button-secondary p-px-3 p-py-2 p-text-sm p-flex p-ai-center p-shadow-2 custom-button"><span class="mr-6"><i class="pi pi-linkedin" aria-label="LinkedIn Testimonials" style="font-size:1rem;"></i> LinkedIn Testimonials </span><div class="absolute right-0 mr-5"><div class="circle pb-2 my-2 mx-2"></div><div class="circle pt-2 my-2 mx-2"></div></div><i class="pi pi-angle-double-right" style="font-size:1rem;"></i></div></div></a></div>',1),an={class:"my-6 flex flex-column"},rn=a("div",{class:"text-center pb-4"},[a("h2",null,[a("div",{class:"text-4xl font-bold"},[b("Why "),a("span",{class:"bg-primary"},"me?")])]),a("div",{class:"my-4 text-xl line-height-2"},"Here’s why I’m the right choice for your project")],-1),sn={class:"flex flex-wrap"},cn={class:"flex align-items-center pl-2 m-0 p-0"},ln=["src","alt"],dn={class:"font-bold p-2 line-height-2"},un={class:"m-0 pt-4"},pn={class:"my-6"},hn=a("div",{class:"text-center pb-4"},[a("h2",null,[a("div",{class:"text-4xl font-bold"},[b("Scaling startups "),a("div",{class:"text-4xl font-bold bg-primary"},"Elevating industry giants")])]),a("div",{class:"my-4 text-xl line-height-2"},"I bring a proven track record of success in the industry, with a comprehensive skill set spanning every phase of software development.")],-1),mn={class:"my-4 grid md:flex-row justify-content-center gap-2"},fn={class:"no-underline flex flex-column justify-content-center flex-wrap"},gn={class:"mb-2 flex align-items-center justify-content-center h-4rem"},vn=["src","alt"],bn={class:"h-5rem"},yn={class:"text-base md:text-xl font-bold flex align-items-center justify-content-center p-0 m-0 text-center line-height-3"},wn={class:"text-xs md:text-sm flex align-items-center justify-content-center line-height-2 text-center"},kn={class:"my-6"},xn=a("div",{class:"text-center pb-4"},[a("h2",null,[a("div",{class:"text-4xl font-bold line-height-2"},[b("Frequently asked "),a("span",{class:"bg-primary"},"questions")])])],-1),_n={class:"grid overflow-hidden border-round-2xl"},In={class:"col-12"},An={class:"border-round-2xl flex flex-column gap-2 md:p-2"},Cn=a("h3",{class:"m-0 p-0 hidden"},"How can I start a project with you?",-1),Sn=a("p",{class:"mx-3"},[b(" You can start by "),a("a",{href:"https://cal.com/stackseekers",class:"no-underline text-xl","aria-label":"schedule a meeting"},"scheduling a meeting"),b(" with me. I’ll connect with you promptly to discuss your requirements and plan the next steps. ")],-1),Pn=a("h3",{class:"m-0 p-0 hidden"},"What services do you provide?",-1),Tn=a("p",{class:"mx-3"},[b(" I offer a variety of services tailored to your needs, including "),a("a",{href:"web-development-services/#ConsultingAndTechnicalAdvisory",class:"no-underline","aria-label":"Custom Web Development"},"Custom Web Development"),b(", "),a("a",{href:"web-development-services/#E-commerceSolutions",class:"no-underline","aria-label":"E-commerce Solutions"},"E-commerce Solutions"),b(", "),a("a",{href:"web-development-services/#APIDevelopmentAndIntegration",class:"no-underline","aria-label":"API Development and Integration"},"API Development and Integration "),b(", "),a("a",{href:"web-development-services/#FigmatoWeb",class:"no-underline","aria-label":"Figma to Web Conversion"},"Figma to Web Conversion"),b(", and "),a("a",{href:"web-development-services/#hosting",class:"no-underline","aria-label":"Hosting & Deployment"},"Hosting & Deployment"),b(". "),a("div",{class:"mt-2"},"Let’s find the best solution for your project!")],-1),Vn=a("h3",{class:"m-0 p-0 hidden"},"What does the project process look like?",-1),Bn={class:"mx-3"},$n=a("div",{class:"my-4"},"It’s simple and straightforward: ",-1),Dn=a("small",{class:"p-text-secondary"},null,-1),Ln=a("div",null,null,-1),jn={class:"my-4"},Nn={href:"https://cal.com/stackseekers",size:"large",color:"deeppink",class:"flex justify-content-center text-center no-underline mt-4","aria-label":"scheduling a meeting"},En={class:"border-round-md vp-feature-item",id:"contact"},On=a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 60 1440 260"},[a("path",{fill:"#10b981","fill-opacity":"0.1",d:"M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,160C560,160,640,192,720,176C800,160,880,96,960,80C1040,64,1120,96,1200,144C1280,192,1360,256,1400,288L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"})],-1),Mn=a("div",{class:"text-center pb-4"},[a("h3",null,[a("div",{class:"text-4xl font-bold"},"NEED A FULL STACK WEB DEVELOPER?")]),a("div",{class:"my-4 text-md"},"Let's work together!")],-1),Kn=a("div",{class:"mx-4 text-center text-xl line-height-3"}," I'm always excited to tackle new challenges and bring ideas to life. If you’re searching for a committed full-stack developer to make your vision a reality, don’t hesitate to get in touch - I’d love to collaborate! ",-1),Fn={class:"my-4"},Hn={href:"mailto:jiwan.cse@gmail.com?subject=Inquiry:%20collaborate%20now",size:"large",color:"deeppink",class:"flex justify-content-center text-center no-underline","aria-label":"Send an Email"},zn={class:"flex flex-row justify-content-end flex-wrap gap-4 mx-6"},Jn=["href","aria-label"],Rn=["aria-label"],Un=a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 60 1440 220",class:"-mb-1"},[a("path",{fill:"#10b981","fill-opacity":"0.1",d:"M0,128L40,144C80,160,160,192,240,192C320,192,400,160,480,160C560,160,640,192,720,176C800,160,880,96,960,80C1040,64,1120,96,1200,144C1280,192,1360,256,1400,288L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"})],-1);function Wn(e,n,t,o,r,i){const f=me,u=he,d=de,h=le,v=ce,S=te;return c(),p("div",null,[Bt,a("div",$t,[Dt,a("div",Lt,[(c(),p(I,null,A(o.stackLogos,l=>a("div",{class:"md:col col-6 text-center",key:l.title},[a("i",{class:C([l.icon,"m-auto text-400 pl-3"]),style:{"font-size":"5rem"}},null,2),a("img",{width:"50px",height:"50px",src:l.link,alt:l.title,loading:"eager",fetchpriority:"high"},null,8,jt),a("h3",Nt,w(l.title),1)])),64))])]),a("div",Et,[Ot,a("div",Mt,[(c(!0),p(I,null,A(o.projects,(l,$)=>(c(),p("div",{key:$,class:"gallery-item"},[a("a",{href:l.link,target:"_blank",class:"text-l p-2 font-medium text-center no-underline","aria-label":l.name},[a("img",{src:l.images[0].itemImageSrc,alt:l.images[0].alt,loading:"eager",fetchpriority:"high"},null,8,Ft),a("h3",Ht,[b(w(l.name)+" ",1),zt])],8,Kt)]))),128))]),Jt]),a("div",Rt,[Ut,a("div",{class:"card relative md:mx-0 -mx-4",onMouseenter:o.pauseAutoPlay,onMouseleave:o.resumeAutoPlay},[_(f,{value:o.testimonials,numVisible:1,numScroll:1,ref:"carousel",responsiveOptions:o.responsiveCustomerOptions,circular:"",page:o.currentPage,onPage:o.onPageChange},{item:g(l=>[a("div",Wt,[a("div",Qt,[a("div",qt,[Gt,b(" "+w(l.data.message),1)])]),a("div",Yt,[a("img",{src:l.data.avatar,alt:l.data.name,loading:"eager",fetchpriority:"high",class:"border-circle",width:"50px",height:"50px"},null,8,Zt),a("a",{href:l.data.link,target:"_blank",class:"no-underline"},[a("h3",en,[a("div",null,[tn,b(" "+w(l.data.name)+", ",1)]),a("div",null,[a("img",{alt:l.data.location,src:"https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png",loading:"eager",fetchpriority:"high",class:C(`flag flag-${l.data.code.toLowerCase()} mr-1`),style:{width:"18px"}},null,10,nn),b(" "+w(l.data.location),1)])])],8,Xt)])])]),_:1},8,["value","responsiveOptions","page"])],32),on]),a("div",an,[rn,a("div",sn,[(c(),p(I,null,A(o.whyme,l=>a("div",{class:"md:col-6 col-12 md:p-4",key:l.title},[_(u,{class:"vp-feature-item"},{legend:g(()=>[a("h3",cn,[a("img",{src:`/img/home/${l.id}.svg`,class:"p-avatar p-avatar-circle",loading:"lazy",alt:`${l.title} icon`,width:"24px",height:"24px"},null,8,ln),a("span",dn,w(l.title),1)])]),default:g(()=>[a("p",un,w(l.description),1)]),_:2},1024)])),64))])]),a("div",pn,[hn,a("div",mn,[(c(),p(I,null,A(o.orgs,l=>a("div",{class:"md:col-2 col-5 border-round-md md:p-2 md:m-2 vp-feature-item flex align-items-center justify-content-center",key:l.title},[a("div",fn,[a("div",gn,[a("img",{src:l.icon,alt:l.title,width:"40px",height:"40px",class:"border-round-md",loading:"eager",fetchpriority:"high"},null,8,vn)]),a("div",bn,[a("h3",yn,w(l.title),1),a("div",wn,w(l.details),1)])])])),64))])]),a("div",kn,[xn,a("div",_n,[a("div",In,[a("div",An,[_(v,{activeIndex:0},{default:g(()=>[_(d,{header:"Q: How can I start a project with you?"},{default:g(()=>[Cn,Sn]),_:1}),_(d,{header:"Q: What services do you provide?"},{default:g(()=>[Pn,Tn]),_:1}),_(d,{header:"Q: What does the project process look like?"},{default:g(()=>[Vn,a("div",Bn,[$n,_(h,{value:o.events,align:"left",pt:{eventOpposite:{style:{padding:0,flex:0}},marker:{style:{backgroundColor:"#FFA500"}},connector:{style:{backgroundColor:"#FFA500"}},content:{style:{padding:"4px, 2px"}}}},{opposite:g(l=>[Dn]),content:g(l=>[b(w(l.item.status),1)]),_:1},8,["value"])]),Ln]),_:1})]),_:1}),a("div",jn,[a("a",Nn,[_(S,{label:"Discuss your project",icon:"pi pi-calendar-clock",severity:"primary",raised:"",rounded:""})])])])])])]),a("div",En,[On,a("div",null,[Mn,Kn,a("div",Fn,[a("a",Hn,[_(S,{label:"Let's collaborate now!",icon:"pi pi-briefcase",severity:"primary",raised:"",rounded:""})])]),a("div",zn,[(c(),p(I,null,A(o.social,(l,$)=>a("a",{key:$,href:l.url,target:"_blank",class:"flex flex-row gap-2","aria-label":l.name},[a("i",{class:C(l.icon),"aria-label":l.label,style:{"font-size":"1rem"}},null,10,Rn)],8,Jn)),64))])]),Un])])}const Yn=Ve(Vt,[["render",Wn],["__file","index.html.vue"]]),Zn=JSON.parse('{"path":"/","title":"Web Developer","lang":"en-US","frontmatter":{"home":true,"icon":"pi pi-home","title":"Web Developer","description":"Stack Seekers is a full-stack web development agency helping startups and businesses build modern, high-performance websites and web applications. From idea to launch, we turn your vision into powerful digital solutions. Expert Vue.js, React.js, and Node.js developer delivering scalable web, mobile, and software solutions with 𝙈𝙀𝙍𝙉 and 𝙈𝙀𝙑𝙉 stacks (MongoDB, Express, React/Vue, Next/Nuxt, Node.js).","heroImage":"/img/home/jiwanghosal.webp","heroText":"Hi, I am Jiwan Ghosal","tagline":"Full-stack consultant specializing in scalable web, mobile, and software solutions using MERN and MEVN stacks. Let’s bring your ideas to life, connect with me today!","containerClass":"fancy-container","actions":[{"text":"Book free consultation","icon":"pi pi-calendar-clock","link":"https://cal.com/stackseekers","type":"primary"}],"editLink":false,"copyright":false,"head":[["meta",{"property":"og:url","content":"https://heartstchr.github.io/"}],["meta",{"property":"og:site_name","content":"Jiwan Ghosal"}],["meta",{"property":"og:title","content":"Web Developer"}],["meta",{"property":"og:description","content":"Stack Seekers is a full-stack web development agency helping startups and businesses build modern, high-performance websites and web applications. From idea to launch, we turn your vision into powerful digital solutions. Expert Vue.js, React.js, and Node.js developer delivering scalable web, mobile, and software solutions with 𝙈𝙀𝙍𝙉 and 𝙈𝙀𝙑𝙉 stacks (MongoDB, Express, React/Vue, Next/Nuxt, Node.js)."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-04-21T01:24:48.000Z"}],["meta",{"property":"article:author","content":"Jiwan Ghosal"}],["meta",{"property":"article:modified_time","content":"2025-04-21T01:24:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Web Developer\\",\\"description\\":\\"Stack Seekers is a full-stack web development agency helping startups and businesses build modern, high-performance websites and web applications. From idea to launch, we turn your vision into powerful digital solutions. Expert Vue.js, React.js, and Node.js developer delivering scalable web, mobile, and software solutions with 𝙈𝙀𝙍𝙉 and 𝙈𝙀𝙑𝙉 stacks (MongoDB, Express, React/Vue, Next/Nuxt, Node.js).\\"}"]]},"headers":[],"git":{"createdTime":1671040067000,"updatedTime":1745198688000,"contributors":[{"name":"Jiwan ghosal","email":"jiwan.cse@gmail.com","commits":103}]},"readingTime":{"minutes":11.72,"words":3516},"filePathRelative":"README.md","localizedDate":"December 14, 2022"}');export{Yn as comp,Zn as data};
