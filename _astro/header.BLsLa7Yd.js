const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/header-expanded.DVvhtYYe.js","_astro/jsx-runtime.BftctW7E.js","_astro/index.DJO9vBfz.js"])))=>i.map(i=>d[i]);
import{j as e}from"./jsx-runtime.BftctW7E.js";/* empty css                          */import{r as s,R as w}from"./index.DJO9vBfz.js";const C="modulepreload",N=function(a){return"/foundation-website-frontend/"+a},b={},S=function(n,i,l){let d=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),o=r?.nonce||r?.getAttribute("nonce");d=Promise.allSettled(i.map(t=>{if(t=N(t),t in b)return;b[t]=!0;const c=t.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${u}`))return;const m=document.createElement("link");if(m.rel=c?"stylesheet":C,c||(m.as="script"),m.crossOrigin="",m.href=t,o&&m.setAttribute("nonce",o),document.head.appendChild(m),c)return new Promise((p,f)=>{m.addEventListener("load",p),m.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${t}`)))})}))}function h(r){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r}return d.then(r=>{for(const o of r||[])o.status==="rejected"&&h(o.reason);return n().catch(h)})},j={src:"/foundation-website-frontend/_astro/search-icon.APHpxcbc.svg"},R=({headerRef:a})=>{const[n,i]=s.useState(!1),[l,d]=s.useState(!1),[h,r]=s.useState(!1),o=s.useRef(null),t=s.useRef(null),c=s.useRef(null),u=s.useCallback(()=>{if(o.current&&a.current){const x=a.current.offsetWidth;let g=o.current.getBoundingClientRect().right;n&&(g+=5*16);const E=g>x;E!==n&&i(E)}},[a,n,i]),m=()=>{n&&(d(!0),console.log("Search bar expanded:",l))},p=()=>{t.current&&clearTimeout(t.current),r(!0),d(!1),setTimeout(()=>{r(!1)},300)},f=s.useCallback(x=>{c.current&&!c.current.contains(x.target)&&p()},[]),v=s.useCallback(()=>{t.current&&clearTimeout(t.current),t.current=setTimeout(u,100)},[u]);return s.useEffect(()=>(u(),window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v),t.current&&clearTimeout(t.current)}),[u,v]),s.useEffect(()=>(l?document.addEventListener("mousedown",f):document.removeEventListener("mousedown",f),()=>{document.removeEventListener("mousedown",f)}),[l,f]),s.useEffect(()=>{!n&&l&&p()},[n]),e.jsxs("div",{className:"searchbar-container",style:{position:"relative"},children:[l&&e.jsx("div",{className:"placeholder-search-bar"}),e.jsxs("div",{ref:o,className:`search-bar ${n?"compact":""} ${l?"hidden":""}`,onClick:m,children:[e.jsx("img",{className:"search-bar-icon",src:j.src,alt:"search-icon"}),!n&&e.jsx("input",{className:"search-bar-input",type:"text",placeholder:"SEARCH"})]}),(l||h)&&e.jsxs("div",{ref:c,className:`search-bar-overlay ${h?"fade-out":"fade-in"}`,children:[e.jsx("img",{className:"search-bar-icon",src:j.src,alt:"search-icon"}),e.jsx("input",{className:"search-bar-input",type:"text",placeholder:"SEARCH",autoFocus:!0,onBlur:p})]})]})},y={src:"/foundation-website-frontend/_astro/blue-ellipse.DvODqTp4.svg"},k={src:"/foundation-website-frontend/_astro/netlogo.C0jtWmPo.svg"},L={src:"/foundation-website-frontend/_astro/dropdown-icon.or0YmpcX.svg"},_={src:"/foundation-website-frontend/_astro/hover-dropdown-icon.DqY7ZXhQ.svg"},I=w.lazy(()=>S(()=>import("./header-expanded.DVvhtYYe.js"),__vite__mapDeps([0,1,2]))),H=w.memo(({title:a,isHovered:n,onMouseEnter:i,isCompact:l})=>e.jsxs("div",{className:"header-action-cont",onMouseEnter:i,children:[e.jsx("div",{className:`header-action ${n?"header-action-hovered":""}`,children:a}),e.jsx("img",{className:"dropdown-icon",src:n?_.src:L.src,alt:"dropdown"})]})),A=({navData:a})=>{const n=s.useRef(null),[i,l]=s.useState(!1),[d,h]=s.useState(-1),r=s.useCallback(c=>{h(c)},[]),o=s.useCallback(()=>{h(-1)},[]),t=s.useMemo(()=>a.map((c,u)=>e.jsx(H,{title:c.name,isHovered:d===u,onMouseEnter:()=>r(u),isCompact:i},u)),[d,r]);return e.jsxs("div",{ref:n,className:"netlogo-header",onMouseLeave:o,children:[e.jsxs("div",{className:"header-action-bar",children:[e.jsxs("div",{className:"header-action-cont",children:[e.jsxs("div",{className:"netlogo-icon-cont",children:[e.jsx("img",{className:"icon",src:y.src,alt:"Blue Ellipse"}),e.jsx("img",{className:"icon",src:k.src,alt:"NetLogo Icon"})]}),e.jsx("div",{id:"netlogo-title",className:"header-action",children:"NetLogo"})]}),t,e.jsx(R,{headerRef:n,isCompact:i,setIsCompact:l})]}),e.jsx(I,{navigation_section:a[d],headerIndex:d})]})};export{A as Header};
