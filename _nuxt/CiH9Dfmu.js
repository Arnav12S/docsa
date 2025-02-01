import{ad as $,d as F,af as H,an as q,ao as G,A as N,i as o,G as f,w as b,g as A,S as n,n as g,c as h,J as I,F as C,f as _,H as T,ae as D,R as y,aj as J,ak as L,at as M,ac as B,t as P,a6 as R,a7 as W,o as Q,bj as X,E as U,r as Y,bf as Z,bg as aa,bh as ia,aC as j}from"./YcoAKQos.js";import{_ as ea,a as ta,b as sa,c as ra,d as oa}from"./DWg0nofr.js";import"./CCze7_98.js";const na={slots:{root:"flex items-center gap-2",list:"relative flex p-1 group",indicator:"absolute transition-[translate,width] duration-200",trigger:["group relative inline-flex items-center shrink-0 min-w-0 data-[state=inactive]:text-[var(--ui-text-muted)] hover:data-[state=inactive]:not-disabled:text-[var(--ui-text)] font-medium rounded-[calc(var(--ui-radius)*1.5)] disabled:cursor-not-allowed disabled:opacity-75 focus:outline-hidden","transition-colors"],content:"focus:outline-none w-full",leadingIcon:"shrink-0",leadingAvatar:"shrink-0",leadingAvatarSize:"",label:"truncate"},variants:{color:{primary:"",secondary:"",success:"",info:"",warning:"",error:"",neutral:""},variant:{pill:{list:"bg-[var(--ui-bg-elevated)] rounded-[calc(var(--ui-radius)*2)]",trigger:"flex-1 w-full",indicator:"rounded-[calc(var(--ui-radius)*1.5)] shadow-xs"},link:{list:"border-[var(--ui-border)]",indicator:"rounded-full"}},orientation:{horizontal:{root:"flex-col",list:"w-full",indicator:"left-0 w-[var(--reka-tabs-indicator-size)] translate-x-[var(--reka-tabs-indicator-position)]",trigger:"justify-center"},vertical:{list:"flex-col",indicator:"top-0 h-[var(--reka-tabs-indicator-size)] translate-y-[var(--reka-tabs-indicator-position)]"}},size:{xs:{trigger:"px-2 py-1 text-xs gap-1",leadingIcon:"size-4",leadingAvatarSize:"3xs"},sm:{trigger:"px-2.5 py-1.5 text-xs gap-1.5",leadingIcon:"size-4",leadingAvatarSize:"3xs"},md:{trigger:"px-3 py-1.5 text-sm gap-1.5",leadingIcon:"size-5",leadingAvatarSize:"2xs"},lg:{trigger:"px-3 py-2 text-sm gap-2",leadingIcon:"size-5",leadingAvatarSize:"2xs"},xl:{trigger:"px-3 py-2 text-base gap-2",leadingIcon:"size-6",leadingAvatarSize:"xs"}}},compoundVariants:[{orientation:"horizontal",variant:"pill",class:{indicator:"inset-y-1"}},{orientation:"horizontal",variant:"link",class:{list:"border-b -mb-px",indicator:"-bottom-px h-px"}},{orientation:"vertical",variant:"pill",class:{indicator:"inset-x-1",list:"items-center"}},{orientation:"vertical",variant:"link",class:{list:"border-s -ms-px",indicator:"-start-px w-px"}},{color:"primary",variant:"pill",class:{indicator:"bg-[var(--ui-primary)]",trigger:"data-[state=active]:text-[var(--ui-bg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ui-primary)]"}},{color:"secondary",variant:"pill",class:{indicator:"bg-[var(--ui-secondary)]",trigger:"data-[state=active]:text-[var(--ui-bg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ui-secondary)]"}},{color:"success",variant:"pill",class:{indicator:"bg-[var(--ui-success)]",trigger:"data-[state=active]:text-[var(--ui-bg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ui-success)]"}},{color:"info",variant:"pill",class:{indicator:"bg-[var(--ui-info)]",trigger:"data-[state=active]:text-[var(--ui-bg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ui-info)]"}},{color:"warning",variant:"pill",class:{indicator:"bg-[var(--ui-warning)]",trigger:"data-[state=active]:text-[var(--ui-bg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ui-warning)]"}},{color:"error",variant:"pill",class:{indicator:"bg-[var(--ui-error)]",trigger:"data-[state=active]:text-[var(--ui-bg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ui-error)]"}},{color:"neutral",variant:"pill",class:{indicator:"bg-[var(--ui-bg-inverted)]",trigger:"data-[state=active]:text-[var(--ui-bg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ui-border-inverted)]"}},{color:"primary",variant:"link",class:{indicator:"bg-[var(--ui-primary)]",trigger:"data-[state=active]:text-[var(--ui-primary)] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-primary)]"}},{color:"secondary",variant:"link",class:{indicator:"bg-[var(--ui-secondary)]",trigger:"data-[state=active]:text-[var(--ui-secondary)] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-secondary)]"}},{color:"success",variant:"link",class:{indicator:"bg-[var(--ui-success)]",trigger:"data-[state=active]:text-[var(--ui-success)] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-success)]"}},{color:"info",variant:"link",class:{indicator:"bg-[var(--ui-info)]",trigger:"data-[state=active]:text-[var(--ui-info)] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-info)]"}},{color:"warning",variant:"link",class:{indicator:"bg-[var(--ui-warning)]",trigger:"data-[state=active]:text-[var(--ui-warning)] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-warning)]"}},{color:"error",variant:"link",class:{indicator:"bg-[var(--ui-error)]",trigger:"data-[state=active]:text-[var(--ui-error)] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-error)]"}},{color:"neutral",variant:"link",class:{indicator:"bg-[var(--ui-bg-inverted)]",trigger:"data-[state=active]:text-[var(--ui-text-highlighted)] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-border-inverted)]"}}],defaultVariants:{color:"primary",variant:"pill",size:"md"}},la=D;var K;const ca=$({extend:$(na),...((K=la.ui)==null?void 0:K.tabs)||{}}),ua=F({__name:"Tabs",props:{as:{},items:{},color:{},variant:{},size:{},orientation:{default:"horizontal"},content:{type:Boolean,default:!0},labelKey:{default:"label"},class:{},ui:{},defaultValue:{default:"0"},modelValue:{},activationMode:{},unmountOnHide:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(p,{emit:l}){const a=p,c=l,x=H(),m=q(G(a,"as","modelValue","defaultValue","orientation","activationMode","unmountOnHide"),c),r=N(()=>ca({color:a.color,variant:a.variant,size:a.size,orientation:a.orientation}));return(u,t)=>{var i;return o(),f(n(sa),T(n(m),{class:r.value.root({class:[a.class,(i=a.ui)==null?void 0:i.root]})}),{default:b(()=>{var d;return[A(n(ta),{class:g(r.value.list({class:(d=a.ui)==null?void 0:d.list}))},{default:b(()=>{var s;return[A(n(ea),{class:g(r.value.indicator({class:(s=a.ui)==null?void 0:s.indicator}))},null,8,["class"]),(o(!0),h(C,null,I(u.items,(e,v)=>{var k;return o(),f(n(ra),{key:v,value:e.value||String(v),disabled:e.disabled,class:g(r.value.trigger({class:(k=a.ui)==null?void 0:k.trigger}))},{default:b(()=>{var z;return[y(u.$slots,"leading",{item:e,index:v},()=>{var w,V,S;return[e.icon?(o(),f(J,{key:0,name:e.icon,class:g(r.value.leadingIcon({class:(w=a.ui)==null?void 0:w.leadingIcon}))},null,8,["name","class"])):e.avatar?(o(),f(L,T({key:1,size:((V=a.ui)==null?void 0:V.leadingAvatarSize)||r.value.leadingAvatarSize(),ref_for:!0},e.avatar,{class:r.value.leadingAvatar({class:(S=a.ui)==null?void 0:S.leadingAvatar})}),null,16,["size","class"])):_("",!0)]}),n(M)(e,a.labelKey)||x.default?(o(),h("span",{key:0,class:g(r.value.label({class:(z=a.ui)==null?void 0:z.label}))},[y(u.$slots,"default",{item:e,index:v},()=>[B(P(n(M)(e,a.labelKey)),1)])],2)):_("",!0),y(u.$slots,"trailing",{item:e,index:v})]}),_:2},1032,["value","disabled","class"])}),128))]}),_:3},8,["class"]),u.content?(o(!0),h(C,{key:0},I(u.items,(s,e)=>{var v;return o(),f(n(oa),{key:e,value:s.value||String(e),class:g(r.value.content({class:(v=a.ui)==null?void 0:v.content}))},{default:b(()=>[y(u.$slots,s.slot||"content",{item:s,index:e},()=>[B(P(s.content),1)])]),_:2},1032,["value","class"])}),128)):_("",!0)]}),_:3},16,["class"])}}}),va=Object.assign(ua,{__name:"UTabs"}),da={slots:{root:"my-5"}},ga=D;var O,E;const fa=j({extend:j(da),...((E=(O=ga.uiPro)==null?void 0:O.prose)==null?void 0:E.tabs)||{}}),ba=F({__name:"Tabs",props:R({defaultValue:{default:"0"},sync:{},hash:{},class:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(p){const l=p,a=H(),c=W(p,"modelValue"),x=N(()=>{var t,i;return((i=(t=a.default)==null?void 0:t.call(a))==null?void 0:i.flatMap(m).filter(Boolean))||[]});function m(t,i){var d,s,e;return typeof t.type=="symbol"?(d=t.children)==null?void 0:d.map(m):{index:i,label:((s=t.props)==null?void 0:s.label)||`${i}`,icon:(e=t.props)==null?void 0:e.icon,component:t}}Q(()=>{if(l.sync){const t=`tabs-${l.sync}`,i=X(t,()=>localStorage.getItem(t));U(i,()=>{i.value&&(c.value=i.value)},{immediate:!0}),U(c,()=>{c.value&&(i.value=c.value,localStorage.setItem(t,c.value))})}});async function r(){if(l.hash){const t=l.hash.startsWith("#")?l.hash:`#${l.hash}`;setTimeout(()=>{var i;(i=document.querySelector(t))==null||i.scrollIntoView()},200)}}const u=Y(1);return Z(()=>u.value++),(t,i)=>{const d=va;return o(),f(d,{modelValue:c.value,"onUpdate:modelValue":[i[0]||(i[0]=s=>c.value=s),r],color:"primary",variant:"link",items:x.value,class:g(l.class),"unmount-on-hide":!1,ui:n(ia)(n(fa)())},{content:b(({item:s})=>[(o(),f(aa(s.component)))]),_:1},8,["modelValue","items","class","ui"])}}}),xa=Object.assign(ba,{__name:"ProseTabs"});export{xa as default};
