import{r as l}from"./index.DhYZZe0J.js";/* empty css                       */var p={exports:{}},g={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=l,y=Symbol.for("react.element"),L=Symbol.for("react.fragment"),C=Object.prototype.hasOwnProperty,_=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function b(s,t,n){var i,o={},a=null,r=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(r=t.ref);for(i in t)C.call(t,i)&&!E.hasOwnProperty(i)&&(o[i]=t[i]);if(s&&s.defaultProps)for(i in t=s.defaultProps,t)o[i]===void 0&&(o[i]=t[i]);return{$$typeof:y,type:s,key:a,ref:r,props:o,_owner:_.current}}g.Fragment=L;g.jsx=b;g.jsxs=b;p.exports=g;var e=p.exports;const T={src:"/NetLogo-redesign/_astro/search-icon.APHpxcbc.svg",width:25,height:24,format:"svg"},D=({})=>e.jsxs("div",{className:"search-bar",children:[e.jsx("img",{className:"search-bar-icon",src:T.src,alt:"search-icon"}),e.jsx("input",{className:"search-bar-input",type:"text",placeholder:"SEARCH"})]}),O={src:"/NetLogo-redesign/_astro/blue-ellipse.DvODqTp4.svg",width:30,height:30,format:"svg"},R={src:"/NetLogo-redesign/_astro/netlogo.C0jtWmPo.svg",width:24,height:24,format:"svg"},c={src:"/NetLogo-redesign/_astro/dropdown-icon.or0YmpcX.svg",width:17,height:16,format:"svg"},$=({})=>e.jsx("div",{className:"netlogo-header",children:e.jsxs("div",{className:"header-action-bar",children:[e.jsxs("div",{className:"header-action-cont",children:[e.jsxs("div",{className:"netlogo-icon-cont",children:[e.jsx("img",{className:"icon",src:O.src}),e.jsx("img",{className:"icon",src:R.src})]}),e.jsx("div",{id:"netlogo-title",className:"header-action",children:" NetLogo "})]}),e.jsxs("div",{className:"header-action-cont",children:[e.jsx("div",{className:"header-action",children:" Products "}),e.jsx("img",{className:"dropdown-icon",src:c.src})]}),e.jsxs("div",{className:"header-action-cont",children:[e.jsx("div",{className:"header-action",children:" Learning "}),e.jsx("img",{className:"dropdown-icon",src:c.src})]}),e.jsxs("div",{className:"header-action-cont",children:[e.jsx("div",{className:"header-action",children:" Docs "}),e.jsx("img",{className:"dropdown-icon",src:c.src})]}),e.jsxs("div",{className:"header-action-cont",children:[e.jsx("div",{className:"header-action",children:" Models "}),e.jsx("img",{className:"dropdown-icon",src:c.src})]}),e.jsxs("div",{className:"header-action-cont",children:[e.jsx("div",{className:"header-action",children:" News  "}),e.jsx("img",{className:"dropdown-icon",src:c.src})]}),e.jsxs("div",{className:"header-action-cont",children:[e.jsx("div",{className:"header-action",children:" Community "}),e.jsx("img",{className:"dropdown-icon",src:c.src})]}),e.jsxs("div",{className:"header-action-cont",children:[e.jsx("div",{className:"header-action",children:" About  "}),e.jsx("img",{className:"dropdown-icon",src:c.src})]}),e.jsx(D,{})]})}),k=({announcement:s,setShowAnnouncement:t})=>e.jsx("div",{className:"aCont",children:e.jsxs("div",{className:"aTextButtonCont",children:[e.jsxs("div",{className:"aTextCont",children:[e.jsxs("span",{className:"aTitle",children:[" ",s.title," "]}),e.jsxs("span",{className:"aContent",children:[" ",s.content," "]})]}),e.jsxs("div",{className:"a-button-cont",children:[e.jsx("button",{className:"a-learn-button a-button",children:" LEARN MORE "}),e.jsx("button",{className:"a-close-button a-button",onClick:()=>t(!1),children:" CLOSE "})]})]})}),I=()=>e.jsx("div",{className:"demo-display"}),P={src:"/NetLogo-redesign/_astro/visual.CvOcwzml.svg",width:25,height:24,format:"svg"},B={src:"/NetLogo-redesign/_astro/easy-learn.CJPJmL7N.svg",width:25,height:24,format:"svg"},S={src:"/NetLogo-redesign/_astro/power-extensible.SCI4TO-7.svg",width:25,height:24,format:"svg"},A={src:"/NetLogo-redesign/_astro/cross-platform.Bs9SB9uW.svg",width:25,height:24,format:"svg"},F=()=>{const[s,t]=l.useState(0);l.useEffect(()=>{const i=setTimeout(()=>{t(o=>(o+1)%4)},4e3);return()=>{clearTimeout(i)}},[s]);const n=i=>{t(i)};return e.jsxs("div",{className:"intro-anim-cont",children:[e.jsxs("div",{className:"intro-anim-options",children:[e.jsx("div",{className:`intro-anim-option ${s===0?"current-tab":""}`,onClick:()=>n(0),style:{animationDelay:"1500ms",animationTimingFunction:"ease-out",animationDuration:"300ms"},children:e.jsxs("div",{className:"intro-anim-text-icon",children:[e.jsx("div",{className:`intro-anim-icon ${s===0?"current-tab-icon":""}`,children:e.jsx("img",{src:P.src,alt:"Visual Icon"})}),e.jsx("span",{className:`intro-anim-text ${s===0?"current-tab-text":""}`,children:"Real-time Visualization"})]})}),e.jsx("div",{className:`intro-anim-option ${s===1?"current-tab":""}`,onClick:()=>n(1),style:{animationDelay:"1500ms",animationTimingFunction:"ease-out",animationDuration:"300ms"},children:e.jsxs("div",{className:"intro-anim-text-icon",children:[e.jsx("div",{className:`intro-anim-icon ${s===1?"current-tab-icon":""}`,children:e.jsx("img",{src:B.src,alt:"Easy Icon"})}),e.jsx("span",{className:`intro-anim-text ${s===1?"current-tab-text":""}`,children:"Easy to Learn"})]})}),e.jsx("div",{className:`intro-anim-option ${s===2?"current-tab":""}`,onClick:()=>n(2),style:{animationDelay:"1500ms",animationTimingFunction:"ease-out",animationDuration:"300ms"},children:e.jsxs("div",{className:"intro-anim-text-icon",children:[e.jsx("div",{className:`intro-anim-icon ${s===2?"current-tab-icon":""}`,children:e.jsx("img",{src:S.src,alt:"Power Icon"})}),e.jsx("span",{className:`intro-anim-text ${s===2?"current-tab-text":""}`,children:"Powerful & Extensible"})]})}),e.jsx("div",{className:`intro-anim-option ${s===3?"current-tab":""}`,onClick:()=>n(3),style:{animationDelay:"1500ms",animationTimingFunction:"ease-out",animationDuration:"300ms"},children:e.jsxs("div",{className:"intro-anim-text-icon",children:[e.jsx("div",{className:`intro-anim-icon ${s===3?"current-tab-icon":""}`,children:e.jsx("img",{src:A.src,alt:"Cross-Platform Icon"})}),e.jsx("span",{className:`intro-anim-text ${s===3?"current-tab-text":""}`,children:"Cross-Platform"})]})})]}),e.jsx(I,{})]})},G=({})=>e.jsxs("div",{className:"intro",children:[e.jsxs("div",{className:"intro-title-text-cont",children:[e.jsx("div",{className:"intro-title",children:e.jsxs("pre",{children:["Understanding Complex Systems with",`
`,"Agent-Based Modeling"]})}),e.jsx("div",{className:"intro-text",children:e.jsxs("p",{children:["Agent-based modeling (ABM) is a powerful tool for understanding complex systems in which large-scale patterns emerge from the",`
`,'interactions of many simple parts. NetLogo is an ABM environment with a "low threshold" for learning yet "high ceiling" capabilities. This',`
`," combination is why NetLogo is used widely both in educational settings and by professional scientists doing cutting edge research."]})})]}),e.jsx(F,{}),e.jsxs("div",{className:"intro-btn-cont",children:[e.jsx("button",{className:"intro-btn intro-get-btn",children:" GET NETLOGO "}),e.jsx("button",{className:"intro-btn intro-learn-btn",children:" LEARN MORE "})]})]}),M={src:"/NetLogo-redesign/_astro/news-dropdown.OSwEjMO4.svg",width:20,height:20,format:"svg"},U={src:"/NetLogo-redesign/_astro/news-dropdown-up.B0mvirmm.svg",width:20,height:20,format:"svg"},h=({title:s,events:t})=>{const[n,i]=l.useState(!0),[o,a]=l.useState(!1);function r(m){const d=m.split("-");return`${d[1]}/${d[2]}/${d[0]}`}const x=t.slice(0,3),w=()=>{n&&a(!1),i(!n)};return e.jsxs("div",{className:"event-display-cont",children:[e.jsxs("div",{className:n&&t.length>0?"event-display-header event-display-opened":"event-display-header",onClick:w,children:[e.jsx("span",{className:"event-display-title",children:s}),e.jsx("img",{src:n?U.src:M.src,alt:"dropdown icon"})]}),n&&e.jsxs("div",{children:[(o?t:x).map((m,d)=>e.jsxs("div",{className:"event-cont",children:[e.jsx("span",{className:"event-date",children:r(m.date)}),e.jsx("span",{className:"event-title",children:m.event_title})]},d)),!o&&t.length>3&&e.jsx("div",{className:"event-cont event-more",onClick:()=>a(!0),children:e.jsx("span",{children:"More"})})]})]})},W={src:"/NetLogo-redesign/_astro/more-icon.CV1LY4hB.svg",width:20,height:21,format:"svg"},u=({sectionTitle:s,sectionDescript:t,sectionGap:n,sectionPaddingBot:i,backgroundColor:o="transparent",borderRadius:a=0,moreButton:r=!1,body:x})=>e.jsx("div",{className:"page-section-cont",style:{backgroundColor:`${o}`,borderRadius:`${a}rem`},children:e.jsxs("div",{className:"page-section",style:{gap:`${n}rem`,paddingBottom:`${i}rem`},children:[e.jsxs("div",{className:"section-header",children:[e.jsxs("span",{className:"section-title",children:[" ",s," "]}),e.jsxs("span",{className:"section-descript",children:[" ",t," "]})]}),x,r&&e.jsxs("button",{className:"section-more-button",children:[e.jsx("span",{children:" MORE "}),e.jsx("img",{src:W.src})]})]})}),H=({upcomingEvents:s,competitions:t,upcomingWorkshops:n,publications:i})=>e.jsx("div",{className:"news-section",children:e.jsx(u,{sectionTitle:"News",sectionDescript:"Learn about latest news and upcoming events in NetLogo community.",sectionGap:2.5,sectionPaddingBot:2.5,backgroundColor:"#F2F2F5",borderRadius:0,moreButton:!0,body:e.jsxs("div",{className:"news-event-cont",children:[e.jsxs("div",{className:"news-event-inner-cont",children:[e.jsx(h,{title:"Upcoming Events",events:s}),e.jsx(h,{title:"Competitions",events:t})]}),e.jsxs("div",{className:"news-event-inner-cont",children:[e.jsx(h,{title:"Upcoming Workshops",events:n}),e.jsx(h,{title:"Publications",events:i})]})]})})}),j={src:"/NetLogo-redesign/_astro/student.ClphuC82.svg",width:34,height:43,format:"svg"},q={src:"/NetLogo-redesign/_astro/researcher.DPIeDtas.svg",width:35,height:44,format:"svg"},N=({title:s,content:t,imagePath:n})=>e.jsx("div",{className:"for-tab",children:e.jsx("div",{className:"for-tab-inner",children:e.jsxs("div",{className:"for-tab-content",children:[e.jsxs("div",{className:"for-tab-title-cont",children:[e.jsx("div",{className:"for-tab-icon",children:e.jsx("img",{className:"for-tab-icon-image",src:n.src,alt:`${s} icon`})}),e.jsx("span",{className:"for-tab-title",children:s})]}),e.jsx("span",{className:"for-tab-text",children:t}),e.jsx("button",{className:"learn-more-button",children:" LEARN MORE "})]})})}),J=()=>e.jsx("div",{className:"why-section",children:e.jsx(u,{sectionTitle:"Why NetLogo?",sectionDescript:"NetLogo powers everyone to learn and create.",sectionGap:1.88,sectionPaddingBot:7.5,backgroundColor:"#F2F2F5",borderRadius:0,moreButton:!1,body:e.jsxs("div",{className:"why-netlogo-content",children:[e.jsx(N,{title:"For Students",content:"NetLogo provides students with many pre-made models of scientific phenomena they can explore. For those who want to learn to program or create models themselves, NetLogo is very easy to get started with.",imagePath:j}),e.jsx(N,{title:"For Researchers",content:"NetLogo is easy to learn but still very powerful. It is has been used in over 20,000 scientific publications in fields including sociology, ecology, cognitive science, business, and more.",imagePath:q}),e.jsx(N,{title:"For Educators",content:"NetLogo provides educators with an easy-to-use modeling platform that includes many built-in models to engage students in learning science.",imagePath:j})]})})}),v={src:"/NetLogo-redesign/_astro/get-netlogo.Cwo0Dmhx.svg",width:64,height:64,format:"svg"},V={src:"/NetLogo-redesign/_astro/TU.BbgqC7xB.svg",width:64,height:64,format:"svg"},Y=()=>e.jsx("div",{className:"get-section",children:e.jsx(u,{sectionTitle:"Get NetLogo",sectionDescript:"There are over xxx products in NetLogo. Find the one that suits your need.",sectionGap:2.5,sectionPaddingBot:3.75,backgroundColor:"white",borderRadius:5,moreButton:!0,body:e.jsxs("div",{className:"get-netlogo-content",children:[e.jsxs("div",{className:"get-item",children:[e.jsxs("div",{className:"get-item-header",children:[e.jsx("img",{className:"get-item-img",src:v.src}),e.jsx("button",{className:"get-item-button",children:" GET "})]}),e.jsx("span",{className:"get-item-title",children:" NetLogo Desktop "}),e.jsx("span",{className:"get-item-descript",children:" Agent-based modeling environment for simulating natural and social phenomena. "})]}),e.jsxs("div",{className:"get-item",children:[e.jsxs("div",{className:"get-item-header",children:[e.jsx("img",{className:"get-item-img",src:v.src}),e.jsx("button",{className:"get-item-button",children:" GET "})]}),e.jsx("span",{className:"get-item-title",children:" NetLogo Web "}),e.jsx("span",{className:"get-item-descript",children:" Includes the same core features as NetLogo but runs in a web browser, making it easy to incorporate into educational materials. "})]}),e.jsxs("div",{className:"get-item",children:[e.jsxs("div",{className:"get-item-header",children:[e.jsx("img",{className:"get-item-img",src:V.src}),e.jsx("button",{className:"get-item-button",children:" GET "})]}),e.jsx("span",{className:"get-item-title",children:" Turtle Universe "}),e.jsx("span",{className:"get-item-descript",children:" Brings the limitless power of computational modeling to smartphones and tablets of young students and educators. "})]})]})})});function K({announcement:s,upcomingEvents:t,upcomingWorkshops:n,competitions:i,publications:o}){const[a,r]=l.useState(!!s);return e.jsxs("div",{className:"body",children:[e.jsx($,{}),a&&s&&e.jsx(k,{announcement:s,setShowAnnouncement:r}),e.jsx(G,{}),e.jsx(J,{}),e.jsx(Y,{}),e.jsx(H,{upcomingEvents:t,upcomingWorkshops:n,competitions:i,publications:o})]})}export{K as Body};
