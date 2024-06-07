import{r}from"./index.DhYZZe0J.js";/* empty css                       */var h={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=r,j=Symbol.for("react.element"),N=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,p=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function x(e,n,a){var t,o={},i=null,l=null;a!==void 0&&(i=""+a),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(l=n.ref);for(t in n)v.call(n,t)&&!f.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps,n)o[t]===void 0&&(o[t]=n[t]);return{$$typeof:j,type:e,key:i,ref:l,props:o,_owner:p.current}}d.Fragment=N;d.jsx=x;d.jsxs=x;h.exports=d;var s=h.exports;const u={src:"/NetLogo-redesign/_astro/search-icon.APHpxcbc.svg",width:25,height:24,format:"svg"};console.log("searchIcon",u);const b=({})=>s.jsxs("div",{className:"search-bar",children:[s.jsx("img",{className:"search-bar-icon",src:u.src,alt:"search-icon"}),s.jsx("input",{className:"search-bar-input",type:"text",placeholder:"SEARCH"})]}),w={src:"/NetLogo-redesign/_astro/blue-ellipse.DvODqTp4.svg",width:30,height:30,format:"svg"},y={src:"/NetLogo-redesign/_astro/netlogo.C0jtWmPo.svg",width:24,height:24,format:"svg"},c={src:"/NetLogo-redesign/_astro/dropdown-icon.or0YmpcX.svg",width:17,height:16,format:"svg"},_=({})=>s.jsx("div",{className:"netlogo-header",children:s.jsxs("div",{className:"header-action-bar",children:[s.jsxs("div",{className:"header-action-cont",children:[s.jsxs("div",{className:"netlogo-icon-cont",children:[s.jsx("img",{className:"icon",src:w.src}),s.jsx("img",{className:"icon",src:y.src})]}),s.jsx("div",{id:"netlogo-title",className:"header-action",children:" NetLogo "})]}),s.jsxs("div",{className:"header-action-cont",children:[s.jsx("div",{className:"header-action",children:" Products "}),s.jsx("img",{className:"dropdown-icon",src:c.src})]}),s.jsxs("div",{className:"header-action-cont",children:[s.jsx("div",{className:"header-action",children:" Learning "}),s.jsx("img",{className:"dropdown-icon",src:c.src})]}),s.jsxs("div",{className:"header-action-cont",children:[s.jsx("div",{className:"header-action",children:" Docs "}),s.jsx("img",{className:"dropdown-icon",src:c.src})]}),s.jsxs("div",{className:"header-action-cont",children:[s.jsx("div",{className:"header-action",children:" Models "}),s.jsx("img",{className:"dropdown-icon",src:c.src})]}),s.jsxs("div",{className:"header-action-cont",children:[s.jsx("div",{className:"header-action",children:" News  "}),s.jsx("img",{className:"dropdown-icon",src:c.src})]}),s.jsxs("div",{className:"header-action-cont",children:[s.jsx("div",{className:"header-action",children:" Community "}),s.jsx("img",{className:"dropdown-icon",src:c.src})]}),s.jsxs("div",{className:"header-action-cont",children:[s.jsx("div",{className:"header-action",children:" About  "}),s.jsx("img",{className:"dropdown-icon",src:c.src})]}),s.jsx(b,{})]})}),C=({title:e,content:n,setShowAnnouncement:a})=>s.jsx("div",{className:"aCont",children:s.jsxs("div",{className:"aTextButtonCont",children:[s.jsxs("div",{className:"aTextCont",children:[s.jsxs("span",{className:"aTitle",children:[" ",e," "]}),s.jsxs("span",{className:"aContent",children:[" ",n," "]})]}),s.jsx("button",{className:"a-learn-button a-button",children:" LEARN MORE "}),s.jsx("button",{className:"a-close-button a-button",onClick:()=>a(!1),children:" CLOSE "})]})}),L="https://130.245.173.208:81",T=()=>s.jsx("div",{className:"demo-display"}),E={src:"/NetLogo-redesign/_astro/visual.CvOcwzml.svg",width:25,height:24,format:"svg"},I={src:"/NetLogo-redesign/_astro/easy-learn.CJPJmL7N.svg",width:25,height:24,format:"svg"},A={src:"/NetLogo-redesign/_astro/power-extensible.SCI4TO-7.svg",width:25,height:24,format:"svg"},D={src:"/NetLogo-redesign/_astro/cross-platform.Bs9SB9uW.svg",width:25,height:24,format:"svg"},O=()=>{const[e,n]=r.useState(0);r.useEffect(()=>{console.log("currentTab:",e);const t=setTimeout(()=>{n(o=>(o+1)%4)},4e3);return()=>{clearTimeout(t)}},[e]);const a=t=>{n(t)};return s.jsxs("div",{className:"intro-anim-cont",children:[s.jsxs("div",{className:"intro-anim-options",children:[s.jsx("div",{className:`intro-anim-option ${e===0?"current-tab":""}`,onClick:()=>a(0),style:{animationDelay:"1500ms",animationTimingFunction:"ease-out",animationDuration:"300ms"},children:s.jsxs("div",{className:"intro-anim-text-icon",children:[s.jsx("div",{className:`intro-anim-icon ${e===0?"current-tab-icon":""}`,children:s.jsx("img",{src:E.src,alt:"Visual Icon"})}),s.jsx("span",{className:`intro-anim-text ${e===0?"current-tab-text":""}`,children:"Real-time Visualization"})]})}),s.jsx("div",{className:`intro-anim-option ${e===1?"current-tab":""}`,onClick:()=>a(1),style:{animationDelay:"1500ms",animationTimingFunction:"ease-out",animationDuration:"300ms"},children:s.jsxs("div",{className:"intro-anim-text-icon",children:[s.jsx("div",{className:`intro-anim-icon ${e===1?"current-tab-icon":""}`,children:s.jsx("img",{src:I.src,alt:"Easy Icon"})}),s.jsx("span",{className:`intro-anim-text ${e===1?"current-tab-text":""}`,children:"Easy to Learn"})]})}),s.jsx("div",{className:`intro-anim-option ${e===2?"current-tab":""}`,onClick:()=>a(2),style:{animationDelay:"1500ms",animationTimingFunction:"ease-out",animationDuration:"300ms"},children:s.jsxs("div",{className:"intro-anim-text-icon",children:[s.jsx("div",{className:`intro-anim-icon ${e===2?"current-tab-icon":""}`,children:s.jsx("img",{src:A.src,alt:"Power Icon"})}),s.jsx("span",{className:`intro-anim-text ${e===2?"current-tab-text":""}`,children:"Powerful & Extensible"})]})}),s.jsx("div",{className:`intro-anim-option ${e===3?"current-tab":""}`,onClick:()=>a(3),style:{animationDelay:"1500ms",animationTimingFunction:"ease-out",animationDuration:"300ms"},children:s.jsxs("div",{className:"intro-anim-text-icon",children:[s.jsx("div",{className:`intro-anim-icon ${e===3?"current-tab-icon":""}`,children:s.jsx("img",{src:D.src,alt:"Cross-Platform Icon"})}),s.jsx("span",{className:`intro-anim-text ${e===3?"current-tab-text":""}`,children:"Cross-Platform"})]})})]}),s.jsx(T,{})]})},S=({})=>s.jsxs("div",{className:"intro",children:[s.jsxs("div",{className:"intro-title-text-cont",children:[s.jsx("div",{className:"intro-title",children:s.jsxs("pre",{children:["Understanding Complex Systems with",`
`,"Agent-Based Modeling"]})}),s.jsx("div",{className:"intro-text",children:s.jsxs("p",{children:["Agent-based modeling (ABM) is a powerful tool for understanding complex systems in which large-scale patterns emerge from the",`
`,'interactions of many simple parts. NetLogo is an ABM environment with a "low threshold" for learning yet "high ceiling" capabilities. This',`
`," combination is why NetLogo is used widely both in educational settings and by professional scientists doing cutting edge research."]})})]}),s.jsx(O,{})]});function k(){const[e,n]=r.useState(null),[a,t]=r.useState(!1);return r.useEffect(()=>{(async()=>{try{const i=await fetch(L+"/items/announcements"),l=await i.json();if(!i.ok)return;const m=await l;m.data.length!=0&&(n(m.data[0]),t(!0))}catch(i){console.log(i)}})()},[]),s.jsxs("div",{className:"body",children:[s.jsx(_,{}),e&&a&&s.jsx(C,{title:e.title,content:e.content,setShowAnnouncement:t}),s.jsx(S,{})]})}export{k as Body};