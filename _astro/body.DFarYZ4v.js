const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/header-expanded.B3JtWmoh.js","_astro/index.tX3Lecyq.js","_astro/index.DND96gtO.css"])))=>i.map(i=>d[i]);
import{r as l,R as P}from"./index.tX3Lecyq.js";/* empty css                       */var B={exports:{}},w={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R=l,z=Symbol.for("react.element"),O=Symbol.for("react.fragment"),M=Object.prototype.hasOwnProperty,$=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,G={key:!0,ref:!0,__self:!0,__source:!0};function F(t,o,r){var n,a={},d=null,i=null;r!==void 0&&(d=""+r),o.key!==void 0&&(d=""+o.key),o.ref!==void 0&&(i=o.ref);for(n in o)M.call(o,n)&&!G.hasOwnProperty(n)&&(a[n]=o[n]);if(t&&t.defaultProps)for(n in o=t.defaultProps,o)a[n]===void 0&&(a[n]=o[n]);return{$$typeof:z,type:t,key:d,ref:i,props:a,_owner:$.current}}w.Fragment=O;w.jsx=F;w.jsxs=F;B.exports=w;var e=B.exports;const A="modulepreload",W=function(t){return"/foundation-website-frontend/"+t},S={},H=function(o,r,n){let a=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),c=i?.nonce||i?.getAttribute("nonce");a=Promise.allSettled(r.map(s=>{if(s=W(s),s in S)return;S[s]=!0;const m=s.endsWith(".css"),h=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${h}`))return;const u=document.createElement("link");if(u.rel=m?"stylesheet":A,m||(u.as="script"),u.crossOrigin="",u.href=s,c&&u.setAttribute("nonce",c),document.head.appendChild(u),m)return new Promise((v,f)=>{u.addEventListener("load",v),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})}))}function d(i){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=i,window.dispatchEvent(c),!c.defaultPrevented)throw i}return a.then(i=>{for(const c of i||[])c.status==="rejected"&&d(c.reason);return o().catch(d)})},_={src:"/foundation-website-frontend/_astro/search-icon.APHpxcbc.svg",width:25,height:24,format:"svg"},U=({headerRef:t})=>{const[o,r]=l.useState(!1),[n,a]=l.useState(!1),[d,i]=l.useState(!1),c=l.useRef(null),s=l.useRef(null),m=l.useRef(null),h=l.useCallback(()=>{if(c.current&&t.current){const L=t.current.offsetWidth;let E=c.current.getBoundingClientRect().right;o&&(E+=5*16);const I=E>L;I!==o&&r(I)}},[t,o,r]),u=()=>{o&&(a(!0),console.log("Search bar expanded:",n))},v=()=>{s.current&&clearTimeout(s.current),i(!0),a(!1),setTimeout(()=>{i(!1)},300)},f=l.useCallback(L=>{m.current&&!m.current.contains(L.target)&&v()},[]),y=l.useCallback(()=>{s.current&&clearTimeout(s.current),s.current=setTimeout(h,100)},[h]);return l.useEffect(()=>(h(),window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y),s.current&&clearTimeout(s.current)}),[h,y]),l.useEffect(()=>(n?document.addEventListener("mousedown",f):document.removeEventListener("mousedown",f),()=>{document.removeEventListener("mousedown",f)}),[n,f]),l.useEffect(()=>{!o&&n&&v()},[o]),e.jsxs("div",{className:"searchbar-container",style:{position:"relative"},children:[n&&e.jsx("div",{className:"placeholder-search-bar"}),e.jsxs("div",{ref:c,className:`search-bar ${o?"compact":""} ${n?"hidden":""}`,onClick:u,children:[e.jsx("img",{className:"search-bar-icon",src:_.src,alt:"search-icon"}),!o&&e.jsx("input",{className:"search-bar-input",type:"text",placeholder:"SEARCH"})]}),(n||d)&&e.jsxs("div",{ref:m,className:`search-bar-overlay ${d?"fade-out":"fade-in"}`,children:[e.jsx("img",{className:"search-bar-icon",src:_.src,alt:"search-icon"}),e.jsx("input",{className:"search-bar-input",type:"text",placeholder:"SEARCH",autoFocus:!0,onBlur:v})]})]})},V={src:"/foundation-website-frontend/_astro/blue-ellipse.DvODqTp4.svg",width:30,height:30,format:"svg"},q={src:"/foundation-website-frontend/_astro/netlogo.C0jtWmPo.svg",width:24,height:24,format:"svg"},J={src:"/foundation-website-frontend/_astro/dropdown-icon.or0YmpcX.svg",width:17,height:16,format:"svg"},Y={src:"/foundation-website-frontend/_astro/hover-dropdown-icon.DqY7ZXhQ.svg",width:17,height:16,format:"svg"},p={Header:{Products:{"No Title":{"NetLogo Desktop":"https://ccl.northwestern.edu/netlogo/download.shtml","NetLogo Web":"https://www.netlogoweb.org/launch","Turtle Universe":"https://turtlesim.com/products/turtle-universe/",NetTango:"https://netlogoweb.org/nettango-builder","HubNet Web":"https://hubnetweb.org/","Modelling Commons":"https://modelingcommons.org/"}},Learning:{Tutorials:{"Intro: Sample Model":"https://ccl.northwestern.edu/netlogo/docs/sample.html","Tutorial 1: Running Models":"https://ccl.northwestern.edu/netlogo/docs/tutorial1.html","Tutorial 2: Commands":"https://ccl.northwestern.edu/netlogo/docs/tutorial2.html","Tutorial 3: Procedures":"https://ccl.northwestern.edu/netlogo/docs/tutorial3.html","Tutorial 4: Lists":"https://forum.netlogo.org/c/share/tutorials/16"},Guides:{"Beginner’s Interactive NetLogo Dictionary":"https://ccl.northwestern.edu/netlogo/bind/","Common NetLogo Errors and How to Fix Them":"https://ccl.northwestern.edu/netlogo/bind/article/common-netlogo-error-messages.html","Customizing Shapes & Colors in NetLogo":"https://ccl.northwestern.edu/netlogo/bind/article/shapes-and-colors-in-netlogo.html"},"Video Tutorials":{"Disease Model from Scratch":"https://ccl.northwestern.edu/netlogo/bind/watch/disease.html","Forest Fire Model From Scratch":"https://ccl.northwestern.edu/netlogo/bind/watch/fire.html","Information Spread Over a Network From Scratch":"https://ccl.northwestern.edu/netlogo/bind/watch/information-network.html","Exploring the Models Library":"https://ccl.northwestern.edu/netlogo/bind/watch/modelslibrary.html"},Books:{"An Introduction to Agent-Based Modeling by Uri Wilensky (author of NetLogo) and Bill Rand":"https://www.intro-to-abm.com/"}},Docs:{"No Title":{"NetLogo User Manual":"https://ccl.northwestern.edu/netlogo/docs/","NetLogo Dictionary":"https://ccl.northwestern.edu/netlogo/docs/dictionary.html","Beginner’s Interactive NetLogo Dictionary":"https://ccl.northwestern.edu/netlogo/docs/dictionary.html","NetLogo Source Code":"https://github.com/NetLogo/"}},Community:{"No Title":{"NetLogo Forum":"https://forum.netlogo.org/","NetLogo Google Group":"https://groups.google.com/g/netlogo-users","Modeling Commons":"https://modelingcommons.org/","NetLogo on X (formerly Twitter)":"https://x.com/netlogo",GitHub:"https://github.com/NetLogo/NetLogo"}}},Body:{"Get NetLogo":{"NetLogo Desktop":"https://ccl.northwestern.edu/netlogo/","NetLogo Web":"https://www.netlogoweb.org/launch","Turtle Universe":"https://turtlesim.com/products/turtle-universe",NetTango:"https://ccl.northwestern.edu/nettangoweb/","HubNet Web":"https://hubnetweb.org/"},Community:{"NetLogo Forum":"https://forum.netlogo.org/","NetLogo Google Group":"https://groups.google.com/g/netlogo-users","Modeling Commons":"https://modelingcommons.org/"}},Footer:{Buttons:{Donate:"https://secure.ard.northwestern.edu/s/1479/282-giving/basic-page-nonav-campaign.aspx?sid=1479&gid=282&pgid=19841&cid=31575"},Products:{"NetLogo Desktop":"https://ccl.northwestern.edu/netlogo/download.shtml","NetLogo Web":"https://www.netlogoweb.org/launch","Turtle Universe":"https://turtlesim.com/products/turtle-universe/",NetTango:"https://netlogoweb.org/nettango-builder","HubNet Web":"https://hubnetweb.org/","Modelling Commons":"https://modelingcommons.org/"},Learning:{"Official Tutorials Intro":"https://ccl.northwestern.edu/netlogo/docs/sample.html","Beginners' Interactive NetLogo Dictionary":"https://ccl.northwestern.edu/netlogo/bind/","An Introduction to Agent-Based Modeling by Uri Wilensky (author of NetLogo) and Bill Rand":"https://www.intro-to-abm.com/"},Docs:{"NetLogo User Manual":"https://ccl.northwestern.edu/netlogo/docs/","NetLogo Dictionary":"https://ccl.northwestern.edu/netlogo/docs/dictionary.html","Beginner’s Interactive NetLogo Dictionary":"https://ccl.northwestern.edu/netlogo/docs/dictionary.html","NetLogo Source Code":"https://github.com/NetLogo/"},Community:{"NetLogo Forum":"https://forum.netlogo.org/","NetLogo Google Group":"https://groups.google.com/g/netlogo-users","Modeling Commons":"https://modelingcommons.org/","NetLogo on X (formerly Twitter)":"https://x.com/netlogo",GitHub:"https://github.com/NetLogo/NetLogo"}}},X=P.lazy(()=>H(()=>import("./header-expanded.B3JtWmoh.js"),__vite__mapDeps([0,1,2])));let D=Object.keys(p.Header);const Q=P.memo(({title:t,isHovered:o,onMouseEnter:r,isCompact:n})=>e.jsxs("div",{className:"header-action-cont",onMouseEnter:r,children:[e.jsx("div",{className:`header-action ${o?"header-action-hovered":""}`,children:t}),e.jsx("img",{className:"dropdown-icon",src:o?Y.src:J.src,alt:"dropdown"})]})),K=()=>{const t=l.useRef(null),[o,r]=l.useState(!1),[n,a]=l.useState(null),d=l.useCallback(s=>{a(s)},[]),i=l.useCallback(()=>{a(-1)},[]),c=l.useMemo(()=>D.map((s,m)=>e.jsx(Q,{title:s,isHovered:n===m,onMouseEnter:()=>d(m),isCompact:o},m)),[n,d]);return e.jsxs("div",{ref:t,className:"netlogo-header",onMouseLeave:i,children:[e.jsxs("div",{className:"header-action-bar",children:[e.jsxs("div",{className:"header-action-cont",children:[e.jsxs("div",{className:"netlogo-icon-cont",children:[e.jsx("img",{className:"icon",src:V.src,alt:"Blue Ellipse"}),e.jsx("img",{className:"icon",src:q.src,alt:"NetLogo Icon"})]}),e.jsx("div",{id:"netlogo-title",className:"header-action",children:"NetLogo"})]}),c,e.jsx(U,{headerRef:t,isCompact:o,setIsCompact:r})]}),e.jsx(X,{headerSections:D,headerIndex:n!==null?n:-1})]})},Z={src:"/foundation-website-frontend/_astro/more-icon.C3hdnv3t.svg",width:20,height:21,format:"svg"},g=t=>{const{colorClass:o,padding:r,fontSize:n,text:a,hasIcon:d=!1,onClick:i=()=>console.log(`${a} pressed`),style:c={}}=t,[s,m]=l.useState(!1),h={padding:r,fontSize:n};return e.jsxs("button",{className:`button ${o}`,style:{...h,...c},onClick:i,onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),children:[e.jsxs("span",{children:[" ",a," "]}),d&&e.jsx("img",{src:Z.src,className:"button-icon",style:{filter:s?"invert(1)":"invert(34%) sepia(93%) saturate(3432%) hue-rotate(202deg) brightness(94%) contrast(98%)"}})]})},ee=({announcement:t,setShowAnnouncement:o})=>e.jsx("div",{className:"aCont",children:e.jsxs("div",{className:"aTextButtonCont",children:[e.jsxs("div",{className:"aTextCont",children:[e.jsxs("span",{className:"aTitle",children:[" ",t.title," "]}),e.jsxs("span",{className:"aContent",children:[" ",t.content," "]})]}),e.jsxs("div",{className:"a-button-cont",children:[e.jsx(g,{colorClass:"blue-button",padding:"0.75rem 1.5rem",fontSize:"0.875rem",text:"LEARN MORE"}),e.jsx(g,{colorClass:"light-button",padding:"0.75rem 1.5rem",fontSize:"0.875rem",text:"CLOSE",onClick:()=>o(!1)})]})]})}),te=({demo:t,descript:o,currentTab:r})=>{const[n,a]=l.useState(!1),[d,i]=l.useState(t),[c,s]=l.useState(o);l.useEffect(()=>{if(t!==d||o!==c){a(!0);const h=setTimeout(()=>{i(t),s(o),a(!1)},150);return()=>clearTimeout(h)}},[t,o]);let m="";return r===0?m="0px 10px 10px 10px":r===3&&(m="10px 10px 10px 0px"),e.jsx("div",{className:"demo-display",style:{borderRadius:`${m}`},children:e.jsxs("div",{className:`demo-content ${n?"fade-out":""}`,children:[d,e.jsx("span",{className:"demo-display-text",children:c})]})})},oe={src:"/foundation-website-frontend/_astro/visual.CvOcwzml.svg",width:25,height:24,format:"svg"},se={src:"/foundation-website-frontend/_astro/easy-learn.CJPJmL7N.svg",width:25,height:24,format:"svg"},ne={src:"/foundation-website-frontend/_astro/power-extensible.SCI4TO-7.svg",width:25,height:24,format:"svg"},re={src:"/foundation-website-frontend/_astro/cross-platform.Bs9SB9uW.svg",width:25,height:24,format:"svg"},ie={src:"/foundation-website-frontend/_astro/visualization-demo.DgfpN9Qn.svg",width:740,height:270,format:"svg"},ae={src:"/foundation-website-frontend/_astro/cross-platform.82kl3XjJ.png",width:1276,height:622,format:"png"},ce={src:"/foundation-website-frontend/_astro/fire.zK0ZhBi3.gif",width:340,height:340,format:"gif"},le={src:"/foundation-website-frontend/_astro/visualization.Cvff7MfG.png",width:1408,height:674,format:"png"},de={src:"/foundation-website-frontend/_astro/powerful-extensible.BjC9U6mw.png",width:1388,height:630,format:"png"},me=()=>{const[t,o]=l.useState(0);l.useEffect(()=>{const i=setTimeout(()=>{o(c=>(c+1)%4)},4e3);return()=>{clearTimeout(i)}},[t]);const r=i=>{o(i)},n=i=>{switch(i){case 0:return{demo:e.jsx("div",{className:"intro-demo",children:e.jsx("img",{className:"demo-img",src:le.src,alt:"Visualization Demo"})}),descript:"NetLogo visualizes agent-based models as they run in real time, which is very important both for learning from existing models and for debugging models as you code them. Above is the visualization of a model of birds following a few simple rules from which flocking behavior emerges."};case 1:return{demo:e.jsxs("div",{className:"intro-demo",children:[e.jsx("img",{src:ie.src,alt:"Visualization Demo"}),e.jsx("img",{src:ce.src,className:"visualization-inner-img",alt:"Visualization 1"})]}),descript:"NetLogo code is designed to read similarly to English, making it easy for English speakers to understand even as novices. In the above forest fire model, the code asks the fire agents (red patches) to ask their neighboring trees (green patches) to light on fire (turn red) and then burn out (darken color). "};case 2:return{demo:e.jsx("div",{className:"intro-demo",children:e.jsx("img",{className:"demo-img",src:de.src,alt:"Visualization Demo"})}),descript:"NetLogo models can run simulations with tens of thousands of agents and has many extensions to expand its capabilities, including being able to run Python code within a NetLogo model."};case 3:return{demo:e.jsx("div",{className:"intro-demo",children:e.jsx("img",{className:"demo-img",src:ae.src,alt:"Visualization Demo"})}),descript:"NetLogo Web runs in any web browser and traditional NetLogo runs on all major operating systems so anyone with a computer can use it. "};default:return{demo:null,descript:""}}},{demo:a,descript:d}=n(t);return e.jsxs("div",{className:"intro-anim-cont",children:[e.jsxs("div",{className:"intro-anim-options",children:[e.jsx("div",{className:`${t===0?"current-tab":""}`,children:e.jsx("div",{className:"intro-anim-option ",onClick:()=>r(0),style:{animationDelay:"1500ms",animationTimingFunction:"ease-out",animationDuration:"300ms"},children:e.jsxs("div",{className:"intro-anim-text-icon",children:[e.jsx("div",{className:`intro-anim-icon ${t===0?"current-tab-icon":""}`,children:e.jsx("img",{src:oe.src,alt:"Visual Icon"})}),e.jsx("span",{className:`intro-anim-text ${t===0?"current-tab-text":""}`,children:"Real-time Visualization"})]})})}),e.jsx("div",{className:`${t===1?"current-tab":""}`,children:e.jsx("div",{className:"intro-anim-option ",onClick:()=>r(1),style:{animationDelay:"1500ms",animationTimingFunction:"ease-out",animationDuration:"300ms"},children:e.jsxs("div",{className:"intro-anim-text-icon",children:[e.jsx("div",{className:`intro-anim-icon ${t===1?"current-tab-icon":""}`,children:e.jsx("img",{src:se.src,alt:"Easy Icon"})}),e.jsx("span",{className:`intro-anim-text ${t===1?"current-tab-text":""}`,children:"Easy to Learn"})]})})}),e.jsx("div",{className:`${t===2?"current-tab":""}`,children:e.jsx("div",{className:"intro-anim-option ",onClick:()=>r(2),style:{animationDelay:"1500ms",animationTimingFunction:"ease-out",animationDuration:"300ms"},children:e.jsxs("div",{className:"intro-anim-text-icon",children:[e.jsx("div",{className:`intro-anim-icon ${t===2?"current-tab-icon":""}`,children:e.jsx("img",{src:ne.src,alt:"Power Icon"})}),e.jsx("span",{className:`intro-anim-text ${t===2?"current-tab-text":""}`,children:"Powerful & Extensible"})]})})}),e.jsx("div",{className:`${t===3?"current-tab":""}`,children:e.jsx("div",{className:`intro-anim-option ${t===3?"current-tab":""}`,onClick:()=>r(3),style:{animationDelay:"1500ms",animationTimingFunction:"ease-out",animationDuration:"300ms"},children:e.jsxs("div",{className:"intro-anim-text-icon",children:[e.jsx("div",{className:`intro-anim-icon ${t===3?"current-tab-icon":""}`,children:e.jsx("img",{src:re.src,alt:"Cross-Platform Icon"})}),e.jsx("span",{className:`intro-anim-text ${t===3?"current-tab-text":""}`,children:"Cross-Platform"})]})})})]}),e.jsx(te,{demo:a,descript:d,currentTab:t})]})},he=({getNetLogoSection:t})=>{const o=()=>{t.current?.scrollIntoView({behavior:"smooth"})};return e.jsxs("div",{className:"intro",children:[e.jsxs("div",{className:"intro-title-text-cont",children:[e.jsx("div",{className:"intro-title",children:e.jsxs("p",{children:["Complex Systems with",`
`,"Agent-Based Modeling"]})}),e.jsx("div",{className:"intro-text",children:e.jsxs("p",{children:['Agent-based modeling (ABM) is a powerful tool for understanding complex systems in which large-scale patterns emerge from the interactions of many simple parts. NetLogo is an ABM environment with a "low threshold" for learning yet "high ceiling" capabilities. This combination is why NetLogo is used widely both in educational settings and by professional scientists doing cutting edge research.',`
`]})})]}),e.jsx(me,{}),e.jsx("div",{className:"intro-btn-cont",children:e.jsx(g,{colorClass:"blue-button",padding:"1rem 3rem",fontSize:"1.125rem",text:"GET NETLOGO",onClick:o})})]})},j=({sectionTitle:t,sectionDescript:o,sectionGap:r,sectionPaddingBot:n,backgroundColor:a="transparent",borderRadius:d=0,moreButton:i=!1,body:c})=>e.jsx("div",{className:"page-section-cont",style:{backgroundColor:`${a}`},children:e.jsxs("div",{className:"page-section",style:{gap:`${r}rem`,paddingBottom:`${n}rem`},children:[e.jsxs("div",{className:"section-header",children:[e.jsxs("span",{className:"section-title",children:[" ",t," "]}),e.jsxs("span",{className:"section-descript",children:[" ",o," "]})]}),c,i&&e.jsx("div",{className:"more-btn-cont",children:e.jsx(g,{colorClass:"light-button",padding:"1rem 3rem",fontSize:"1.125rem",text:"MORE",hasIcon:!0})})]})}),ue={src:"/foundation-website-frontend/_astro/students_icon._wUNH1IR.svg",width:48,height:48,format:"svg"},ge={src:"/foundation-website-frontend/_astro/research_icon.B2oUtblh.svg",width:40,height:40,format:"svg"},pe={src:"/foundation-website-frontend/_astro/educators_icon.D8QvGUOW.svg",width:48,height:48,format:"svg"},C=({title:t,content:o,imagePath:r})=>e.jsx("div",{className:"for-tab-inner",children:e.jsxs("div",{className:"for-tab-content",children:[e.jsxs("div",{className:"for-tab-title-cont",children:[e.jsx("div",{className:"for-tab-icon",children:e.jsx("img",{className:"for-tab-icon-image",src:r.src,alt:`${t} icon`})}),e.jsx("span",{className:"for-tab-title",children:t})]}),e.jsx("span",{className:"for-tab-text",children:o})]})}),fe=()=>e.jsx("div",{className:"why-section",children:e.jsx(j,{sectionTitle:"Why NetLogo?",sectionDescript:"NetLogo powers everyone to learn and create.",sectionGap:1.88,sectionPaddingBot:7.5,backgroundColor:"#F2F2F5",moreButton:!1,body:e.jsxs("div",{className:"why-netlogo-content",children:[e.jsx(C,{title:"For Students",content:"NetLogo provides students with many pre-made models of scientific phenomena they can explore. For those who want to learn to program or create models themselves, NetLogo is very easy to get started with.",imagePath:ue}),e.jsx(C,{title:"For Researchers",content:"NetLogo is easy to learn but still very powerful. It is has been used in over 20,000 scientific publications in fields including sociology, ecology, cognitive science, business, and more.",imagePath:ge}),e.jsx(C,{title:"For Educators",content:"NetLogo provides educators with an easy-to-use modeling platform that includes many built-in models to engage students in learning science.",imagePath:pe})]})})}),xe={src:"/foundation-website-frontend/_astro/get-netlogo.CW7j6lP9.svg",width:65,height:65,format:"svg"},Ne={src:"/foundation-website-frontend/_astro/netlogo-web.Dbo-Pn1i.svg",width:64,height:65,format:"svg"},k={src:"/foundation-website-frontend/_astro/turtle-universe.BbgqC7xB.svg",width:64,height:64,format:"svg"},b=({title:t,description:o,icon:r,link:n})=>{const a=d=>{window.open(d,"_blank")};return e.jsxs("div",{className:"get-item",children:[e.jsxs("div",{className:"get-item-header",children:[e.jsx("img",{className:"get-item-img",src:r}),e.jsxs("span",{className:"get-item-title",children:[" ",t," "]})]}),e.jsxs("span",{className:"get-item-descript",children:[" ",o," "]}),e.jsx("div",{className:"button-container",children:e.jsx(g,{colorClass:"blue-button",padding:"0.75rem 2.5rem",fontSize:"0.875rem",text:"GET",onClick:()=>a(n)})})]})},ve=({sectionRef:t})=>{const o=p.Body["Get NetLogo"];return e.jsx("div",{ref:t,className:"get-section",children:e.jsx(j,{sectionTitle:"Get NetLogo",sectionDescript:"There are five different products in NetLogo. Find the one suits your need.",sectionGap:2.5,sectionPaddingBot:3.75,backgroundColor:"white",moreButton:!1,body:e.jsx("div",{children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"2%"},ref:t,className:"get-netlogo-content",children:[e.jsx(b,{title:"NetLogo Desktop",description:`A programmable modeling environment for simulating natural and
                  social phenomena that runs on Mac, Windows, and Linux. This is
                  the most powerful version of NetLogo.`,icon:xe.src,link:o["NetLogo Desktop"]}),e.jsx(b,{title:"NetLogo Web",description:`A version of NetLogo that runs in all modern web browsers,
                  without any need for installation. Very useful for embedding
                  in online educational materials.`,icon:Ne.src,link:o["NetLogo Web"]}),e.jsx(b,{title:"Turtle Universe",description:`Powered by the NetLogo engine but with its own unique
                  interface, Turtle Universe brings the limitless power of
                  computational modeling to smartphones and tablets of young
                  students and educators.`,icon:k.src,link:o["Turtle Universe"]}),e.jsx(b,{title:"NetTango",description:`A block-based interface for NetLogo for creating educational
                  models with domain-specific programming blocks.`,icon:k.src,link:o.NetTango}),e.jsx(b,{title:"HubNet Web",description:`An online platform for creating and running participatory
                  simulations in which people can play the role of agents in a
                  NetLogo model.`,icon:k.src,link:o["HubNet Web"]})]})})})})},be={src:"/foundation-website-frontend/_astro/netlogo-forum.DXvqVKVY.png",width:48,height:49,format:"png"},we={src:"/foundation-website-frontend/_astro/google-group.ooPbl_k0.png",width:40,height:41,format:"png"},je={src:"/foundation-website-frontend/_astro/modeling-commons.DAiFxgvQ.png",width:40,height:40,format:"png"},T=p.Footer.Community,ye=[{title:"NetLogo Forum",description:"The NetLogo Forum provides a place for the NetLogo community to ask and answer questions, share resources and more.",link:T["NetLogo Forum"],icon:be.src,bordered:!1},{title:"NetLogo Google Group",description:"The netlogo-users google group is a mailing list where NetLogo users can ask and answer questions. ",link:T["NetLogo Google Group"],icon:we.src,bordered:!0},{title:"Modeling Commons",description:"NetLogo provides educators with an easy-to-use modeling platform that includes many built-in models to engage students in learning science.",link:T["Modeling Commons"],icon:je.src,bordered:!1}],Le=({link:t,title:o,description:r,icon:n,bordered:a})=>{const d=c=>{window.open(c,"_blank")},i="community-item-img"+(a?" bordered":"");return e.jsxs("div",{className:"community-item",children:[e.jsxs("div",{className:"community-item-header",children:[e.jsx("img",{className:i,src:n}),e.jsxs("span",{className:"community-item-title",children:[" ",o," "]})]}),e.jsxs("span",{className:"community-item-descript",children:[" ",r," "]}),e.jsx("div",{className:"button-container",children:e.jsx(g,{colorClass:"blue-button",padding:"0.75rem 2.5rem",fontSize:"0.875rem",text:"GO",onClick:()=>d(t)})})]})},Ce=({communityPosts:t})=>(l.useState(t.length>0?t[0].image:null),e.jsx("div",{className:"community-section",children:e.jsx(j,{sectionTitle:"Community",sectionDescript:"Join NetLogo community and start contributing today.",sectionGap:1.88,sectionPaddingBot:3.75,backgroundColor:"#F2F2F5",moreButton:!1,body:e.jsx("div",{children:e.jsx("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"2%"},className:"community-netlogo-content",children:ye.map((o,r)=>e.jsx(Le,{title:o.title,link:o.link,description:o.description,icon:o.icon,bordered:o.bordered}))})})})})),x={src:"/foundation-website-frontend/_astro/partner-logo.Dq46v3-l.svg",width:64,height:64,format:"svg"},N=({partnerName:t,partnerImage:o})=>e.jsxs("div",{className:"partner",children:[e.jsx("div",{className:"partner-image",children:e.jsx("img",{className:"partner-image-image",src:o.src})}),e.jsx("span",{className:"partner-name",children:t})]}),ke=()=>e.jsx("div",{className:"featured-partners-section",children:e.jsx(j,{sectionTitle:"Featured Partners",sectionDescript:"Trusted by the world’s leading universities and research institutes",sectionGap:2.5,sectionPaddingBot:6,backgroundColor:"white",moreButton:!1,body:e.jsxs("div",{className:"partners-cont",children:[e.jsxs("div",{className:"partners-row",children:[e.jsx(N,{partnerName:"Partner Name",partnerImage:x}),e.jsx(N,{partnerName:"Partner Name",partnerImage:x}),e.jsx(N,{partnerName:"Partner Name",partnerImage:x})]}),e.jsxs("div",{className:"partners-row",children:[e.jsx(N,{partnerName:"Partner Name",partnerImage:x}),e.jsx(N,{partnerName:"Partner Name",partnerImage:x}),e.jsx(N,{partnerName:"Partner Name",partnerImage:x})]})]})})}),Te=()=>{const[t,o]=l.useState(""),r=()=>{o("")};return e.jsx("div",{className:"mailing-list-section",children:e.jsx("div",{className:"mailing-list-body",children:e.jsxs("div",{className:"mailing-list-content",children:[e.jsxs("div",{className:"mailing-list-text-cont",children:[e.jsx("span",{className:"mailing-list-title",children:"Join our mailing list!"}),e.jsx("span",{className:"mailing-list-descript",children:"Join the NetLogo mailing list to keep up-to-date with what's happening in the NetLogo Community!"})]}),e.jsxs("div",{className:"mailing-list-input-cont",children:[e.jsx("span",{className:"mailing-list-input-text",children:"YOUR EMAIL"}),e.jsx("input",{className:"mailing-list-input-input",value:t,onChange:n=>o(n.target.value)}),e.jsx(g,{colorClass:"blue-button",padding:"0.75rem 1.5rem",fontSize:"0.875rem",text:"JOIN",onClick:r})]})]})})})},Ee={src:"/foundation-website-frontend/_astro/lofi-text-l.CLkCIwpY.svg",width:247,height:12,format:"svg"},Ie={src:"/foundation-website-frontend/_astro/lofi-text-m.YRCni6sA.svg",width:247,height:12,format:"svg"},Se={src:"/foundation-website-frontend/_astro/lofi-text-s.KS4NP1bh.svg",width:247,height:12,format:"svg"},_e=({getNetLogoSection:t})=>{const o=()=>{t.current?.scrollIntoView({behavior:"smooth"})},r=s=>{window.open(s,"_blank")},n=p.Footer.Buttons,a=p.Footer.Products,d=p.Footer.Learning,i=p.Footer.Docs,c=p.Footer.Community;return e.jsx("div",{className:"footer-section",children:e.jsxs("div",{className:"footer-body",children:[e.jsx("div",{className:"footer-get-cont",children:e.jsxs("div",{children:[e.jsx(g,{colorClass:"blue-button",padding:"0.875rem 2rem",fontSize:"1rem",text:"GET NETLOGO",style:{width:"12rem"},onClick:o}),e.jsx(g,{colorClass:"light-button",padding:"0.875rem 2rem",fontSize:"1rem",text:"DONATE",style:{width:"12rem"},onClick:()=>r(n.Donate)})]})}),e.jsx("div",{className:"footer-line"}),e.jsxs("div",{className:"footer-content",children:[e.jsxs("div",{className:"footer-content-row",children:[e.jsxs("div",{className:"footer-row-front",children:[e.jsx("div",{className:"footer-row-front-title",children:"LOGO"}),e.jsxs("div",{className:"footer-row-front-logo",children:[e.jsx("img",{src:Ee.src}),e.jsx("img",{src:Ie.src}),e.jsx("img",{src:Se.src})]})]}),e.jsxs("div",{className:"footer-content-row-back",children:[e.jsxs("div",{className:"footer-content-row-vert-cont",children:[e.jsx("div",{className:"footer-content-row-vert-header",children:e.jsx("span",{children:" Products "})}),e.jsx("div",{className:"footer-content-row-vert-content",children:Object.entries(a).map(([s,m])=>e.jsx("a",{href:m,className:"footer-link",children:e.jsx("span",{children:s})},`footer-link-${s}`))})]}),e.jsxs("div",{className:"footer-content-row-vert-cont",children:[e.jsx("div",{className:"footer-content-row-vert-header",children:e.jsx("span",{children:" Learning "})}),e.jsx("div",{className:"footer-content-row-vert-content",children:Object.entries(d).map(([s,m])=>e.jsx("a",{href:m,className:"footer-link",children:e.jsx("span",{children:s})},`footer-link-${s}`))})]}),e.jsxs("div",{className:"footer-content-row-vert-cont",children:[e.jsx("div",{className:"footer-content-row-vert-header",children:e.jsx("span",{children:" Docs "})}),e.jsx("div",{className:"footer-content-row-vert-content",children:Object.entries(i).map(([s,m])=>e.jsx("a",{href:m,className:"footer-link",children:e.jsx("span",{children:s})},`footer-link-${s}`))})]}),e.jsxs("div",{className:"footer-content-row-vert-cont",children:[e.jsx("div",{className:"footer-content-row-vert-header",children:e.jsx("span",{children:" Community "})}),e.jsx("div",{className:"footer-content-row-vert-content",children:Object.entries(c).map(([s,m])=>e.jsx("a",{href:m,className:"footer-link",children:e.jsx("span",{children:s})},`footer-link-${s}`))})]})]})]}),e.jsxs("div",{className:"footer-content-row",children:[e.jsx("div",{className:"footer-row-front"}),e.jsx("div",{className:"footer-content-row-back"})]})]})]})})};function Be({announcement:t,upcomingEvents:o,upcomingWorkshops:r,competitions:n,publications:a,communityContent:d}){const[i,c]=l.useState(!!t),s=l.useRef(null);return e.jsxs("div",{className:"body",children:[e.jsx(K,{}),i&&t&&e.jsx(ee,{announcement:t,setShowAnnouncement:c}),e.jsx(he,{getNetLogoSection:s}),e.jsx(fe,{}),e.jsx(ve,{sectionRef:s}),e.jsx(Ce,{communityPosts:d}),e.jsx(ke,{}),e.jsx(Te,{}),e.jsx(_e,{getNetLogoSection:s})]})}export{Be as B,e as j,p as l};
