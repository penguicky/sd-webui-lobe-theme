const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["features-advanced-DPMTiOpX.js","core-jkSX95V2.js","ui-lib-I5wCDNmB.js","heavy-utils-CnT3T5QD.js","index-CvPJPX9X.js","index-Cbhr3QHU.js"])))=>i.map(i=>d[i]);
var Sr=Object.defineProperty;var $r=(t,e,r)=>e in t?Sr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var we=(t,e,r)=>$r(t,typeof e!="symbol"?e+"":e,r);import{O as pe,X as At,E as _r,a as Er,S as K,p as Ae,C as Or,u as Ye,c as T,i as ot,_ as D,d as $,b as Ft,e as Ue,f as Tr,g as Lr,h as Cr,I as Pr,j as B,s as Fe,k as jr,l as Rr,m as Ar,n as Fr,o as Ir,G as ue,D as kr,M as Nr,q as Mr,r as Dr,t as Ne,H as Br,v as Hr,w as Ur,L as zr,x as qr,y as Vr,z as Wr,A as Kr,B as Gr,F as Xr,J as Jr,K as Yr,N as Z,P as Qr,Q as Zr}from"./features-advanced-DPMTiOpX.js";import{r as g,j as u,c as fe,g as ei,H as ti,i as It,I as Qe,b as Ze,F as kt,u as Nt,J as ri}from"./core-jkSX95V2.js";import{y as Oe,z as C,E as ii,H as ni,a as oi,J as ai,K as si,N as li,O as ci,Q as le,U as di,V as ui,c as be,q as et,A as W,u as pi,L as fi,W as gi,S as hi,X as mi,Y as bi,b as yi,Z as xi,_ as wi,$ as at,a0 as vi,a1 as Si,a2 as st,a3 as $i}from"./ui-lib-I5wCDNmB.js";import"./heavy-utils-CnT3T5QD.js";function _i(t,e){for(var r=0;r<e.length;r++){const i=e[r];if(typeof i!="string"&&!Array.isArray(i)){for(const n in i)if(n!=="default"&&!(n in t)){const o=Object.getOwnPropertyDescriptor(i,n);o&&Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:()=>i[n]})}}}return Object.freeze(t)}const lt=new Date().toISOString(),Ei={arvinxx:{avatar:"https://avatars.githubusercontent.com/u/28616219?v=4",desc:"Founder, Design Engineer",name:"Arvin Xu",url:"https://github.com/arvinxx"},canisminor:{avatar:"https://avatars.githubusercontent.com/u/17870709?v=4",desc:"Founder, Design Engineer",name:"CanisMinor",url:"https://github.com/arvinxx"},lobehub:{avatar:"https://avatars.githubusercontent.com/u/131470832?v=4",desc:"Official Account",name:"LobeHub",url:"https://github.com/lobehub"}};class Oi{generate({image:e="/og/cover.png",url:r,title:i,description:n,date:o,webpage:a={enable:!0}}){return{"@context":"https://schema.org","@graph":[this.genWebSite(),a?.enable&&this.genWebPage({...a,...o&&{date:o},description:n,image:e,title:i,url:r}),e&&this.genImageObject({image:e,url:r}),this.genOrganization()].filter(Boolean)}}genOrganization(){return{"@id":this.getId(K,"#organization"),"@type":"Organization",alternateName:"LobeTheme",contactPoint:{"@type":"ContactPoint",contactType:"customer support",email:Er},description:"We are a group of e/acc design-engineers, hoping to provide modern design components and tools for AIGC, and creating a technology-driven forum, fostering knowledge interaction and the exchange of ideas that may culminate in mutual inspiration and collaborative innovation.",email:_r,founders:[this.getAuthors(["arvinxx"]),this.getAuthors(["canisminor"])],image:Oe(pe,"/icon-512x512.png"),logo:{"@type":"ImageObject",height:512,url:Oe(pe,"/icon-512x512.png"),width:512},name:"LobeHub",sameAs:[At,"https://github.com/lobehub","https://medium.com/@lobehub","https://www.youtube.com/@lobehub"],url:pe}}getAuthors(e=[]){const r={"@id":this.getId(K,"#organization"),"@type":"Organization"};if(!e||e.length===0||e.length===1&&e[0]==="lobehub")return r;const i=e.find(o=>o!=="lobehub");if(!i)return r;const n=Ei?.[i];return n?{"@type":"Person",name:n.name,url:n.url}:r}genWebPage({date:e,image:r,search:i,description:n,title:o,url:a}){const s=this.fixUrl(a),l=e?new Date(e).toISOString():lt,d=e?new Date(e).toISOString():lt,f={"@id":s,"@type":"WebPage",about:{"@id":this.getId(K,"#organization")},breadcrumbs:{"@id":this.getId(s,"#breadcrumb")},dateModified:d,datePublished:l,description:n,image:{"@id":this.getId(s,"#primaryimage")},inLanguage:"en-US",isPartOf:{"@id":this.getId(K,"#website")},name:this.fixTitle(o),primaryImageOfPage:{"@id":this.getId(s,"#primaryimage")},thumbnailUrl:r};return i&&(f.potentialAction={"@type":"SearchAction","query-input":"required name=search_term_string",target:`${s}?q={search_term_string}`}),f}genImageObject({image:e,url:r}){const i=this.fixUrl(r);return{"@id":this.getId(i,"#primaryimage"),"@type":"ImageObject",contentUrl:e,inLanguage:"en-US",url:e}}genWebSite(){return{"@id":this.getId(K,"#website"),"@type":"WebSite",description:Ae.description,inLanguage:"en-US",name:"LobeTheme",publisher:{"@id":this.getId(K,"#organization")},url:K}}getId(e,r){return[e,r].join("/")}fixTitle(e){return e.includes("LobeTheme")?e:`${e} · LobeTheme`}fixUrl(e){return Oe(K,e)}}const Ti=new Oi,Li="Stable Diffusion · LobeHub",Ci=Ae.description,Pi=g.memo(()=>{const t=g.useMemo(()=>Ti.generate({description:Ci,image:"https://repository-images.githubusercontent.com/606329910/7fd79db5-fd91-450c-9e95-8ccce8ffdc0b",title:Li,url:"/"}),[]);return u.jsx("script",{dangerouslySetInnerHTML:{__html:JSON.stringify(t)},id:"structured-data",type:"application/ld+json"})}),ji=t=>{const e=document.createElement("button");return e.id=`${t}2img_formatconvert`,e.type="button",e.innerHTML="🪄",e.title="Format prompt~🪄",e.className="lg secondary gradio-button tool svelte-cmf5ev",e.addEventListener("click",()=>Or.onClickConvert(t)),e},ct=t=>{const e=g.useRef(ji(t));Ye(e,`#${t}2img_tools > div.form`,{inverse:!0})},Ri=g.memo(()=>(ct("txt"),ct("img"),null)),q={BUNDLE_LOAD_ERROR:3e3,BUNDLE_LOAD_WARNING:1e3,MOUNT_TIME_ERROR:500,MOUNT_TIME_WARNING:100,RENDER_TIME_ERROR:50,RENDER_TIME_WARNING:16,UPDATE_COUNT_WARNING:10},Ai=(t,e=!1)=>{const r=g.useRef({averageRenderTime:0,lastUpdate:0,mountTime:0,renderTime:0,updateCount:0}),i=g.useRef(),n=g.useRef(),o=g.useRef([]);g.useEffect(()=>{if(e)return n.current=performance.now(),()=>{if(n.current){const s=performance.now()-n.current;r.current.mountTime=s,s>q.MOUNT_TIME_ERROR?T.error(`🐌 ${t}: Slow mount (${s.toFixed(2)}ms)`):s>q.MOUNT_TIME_WARNING&&T.warn(`⚠️ ${t}: Mount time (${s.toFixed(2)}ms)`)}}},[t,e]),g.useEffect(()=>{if(e){if(i.current){const s=performance.now()-i.current;r.current.renderTime=s,r.current.updateCount++,r.current.lastUpdate=Date.now(),o.current.push(s),o.current.length>10&&o.current.shift(),r.current.averageRenderTime=o.current.reduce((l,d)=>l+d,0)/o.current.length,s>q.RENDER_TIME_ERROR?T.error(`🐌 ${t}: Slow render (${s.toFixed(2)}ms)`):s>q.RENDER_TIME_WARNING&&T.warn(`⚠️ ${t}: Render time (${s.toFixed(2)}ms)`)}i.current=performance.now()}});const a=g.useCallback(()=>{const s=[],l=r.current;return l.renderTime>q.RENDER_TIME_WARNING&&s.push(`Slow render time: ${l.renderTime.toFixed(2)}ms`),l.mountTime>q.MOUNT_TIME_WARNING&&s.push(`Slow mount time: ${l.mountTime.toFixed(2)}ms`),l.updateCount>q.UPDATE_COUNT_WARNING&&Date.now()-(n.current||Date.now())<5e3&&s.push(`High update frequency: ${l.updateCount} updates`),{metrics:{...l},name:t,warnings:s}},[t]);return{averageRenderTime:r.current.averageRenderTime,getMetrics:a,renderTime:r.current.renderTime}},Fi=(t=!1)=>{const[e,r]=g.useState([]),i=g.useCallback((n,o,a)=>{if(!t)return o;const s=performance.now();return o.then(l=>{const d=performance.now()-s,f={cached:d<10,componentName:n,loadTime:d,size:a||0};return r(h=>[...h.slice(-9),f]),d>q.BUNDLE_LOAD_ERROR?T.error(`📦 ${n}: Slow bundle load (${d.toFixed(2)}ms)`):d>q.BUNDLE_LOAD_WARNING?T.warn(`📦 ${n}: Bundle load time (${d.toFixed(2)}ms)`):T.info(`📦 ${n}: Loaded in ${d.toFixed(2)}ms`),l}).catch(l=>{const d=performance.now()-s;throw T.error(`📦 ${n}: Failed to load after ${d.toFixed(2)}ms`,l),l})},[t]);return{averageLoadTime:e.length>0?e.reduce((n,o)=>n+o.loadTime,0)/e.length:0,loadMetrics:e,trackBundleLoad:i}},Ii=(t=!1)=>{const[e,r]=g.useState([]),i=g.useRef({}),n=g.useCallback((s,l)=>{if(!t)return;const d=`${s}-${l}`;i.current[d]=performance.now()},[t]),o=g.useCallback((s,l)=>{if(!t)return;const d=`${s}-${l}`,f=i.current[d];if(f){const h=performance.now()-f,c={duration:h,target:l,timestamp:Date.now(),type:s};r(b=>[...b.slice(-19),c]),h>100&&T.warn(`🖱️ Slow ${s} interaction on ${l}: ${h.toFixed(2)}ms`),delete i.current[d]}},[t]),a=g.useCallback(s=>t?{onMouseDown:()=>n("click",s),onMouseUp:()=>o("click",s)}:{onMouseDown:void 0,onMouseUp:void 0},[t,n,o]);return{averageInteractionTime:e.length>0?e.filter(s=>s.duration!==void 0).reduce((s,l)=>s+(l.duration||0),0)/e.length:0,interactions:e,trackClick:a,trackInteractionEnd:o,trackInteractionStart:n}},ki=(t=!1)=>{const[e,r]=g.useState({});return g.useEffect(()=>{if(!t)return;const i=()=>{if(performance.memory){const{usedJSHeapSize:o,totalJSHeapSize:a,jsHeapSizeLimit:s}=performance.memory;r({jsHeapSizeLimit:s,totalJSHeapSize:a,usedJSHeapSize:o});const l=o/s*100;l>80&&T.warn(`🧠 High memory usage: ${l.toFixed(1)}%`)}};i();const n=setInterval(i,1e4);return()=>clearInterval(n)},[t]),e},Ni=(t=!1)=>{const e=Fi(t),r=Ii(t),i=ki(t),n=g.useCallback(()=>t?{bundle:{averageLoadTime:e.averageLoadTime,recentLoads:e.loadMetrics.slice(-5)},interactions:{averageTime:r.averageInteractionTime,recentInteractions:r.interactions.slice(-5)},memory:i,timestamp:new Date().toISOString()}:null,[t,e,r,i]),o=g.useCallback(()=>{const a=n();a&&T.info("📊 Performance Dashboard:",a)},[n]);return{...e,...r,generateReport:n,logReport:o,memoryInfo:i}},Mt=async()=>{$("🔄 Starting Shiki cache warming...");try{const t=ot()?performance.now():Date.now();await D(()=>import("./features-advanced-DPMTiOpX.js").then(i=>i.$),__vite__mapDeps([0,1,2,3]));const r=((ot()?performance.now():Date.now())-t).toFixed(2);$(`✅ Shiki cache warmed successfully in ${r}ms`);try{await D(()=>import("./features-advanced-DPMTiOpX.js").then(i=>i.V),__vite__mapDeps([0,1,2,3])),await D(()=>import("./features-advanced-DPMTiOpX.js").then(i=>i.W),__vite__mapDeps([0,1,2,3])),$("📦 Shiki dependencies preloaded")}catch(i){const n=i instanceof Error?i.message:String(i);Ft("⚠️ Dependency preloading failed:",n)}}catch(t){const e=t instanceof Error?t.message:String(t),r=t instanceof Error?t.stack:void 0;Ue("❌ Shiki cache warming failed:",e),Ue("Error details:",{message:e,stack:r})}},Mi=async()=>{console.group("🔍 Shiki Debug Information");try{$("1. Checking module availability..."),await D(()=>import("./features-advanced-DPMTiOpX.js").then(i=>i.$),__vite__mapDeps([0,1,2,3])),$("✅ useHighlight module loaded");const t=await D(()=>import("./features-advanced-DPMTiOpX.js").then(i=>i.V),__vite__mapDeps([0,1,2,3]));$("✅ Grammar module loaded:",t.default?.[0]?.name);const e=await D(()=>import("./features-advanced-DPMTiOpX.js").then(i=>i.W),__vite__mapDeps([0,1,2,3]));$("✅ Theme module loaded"),$("2. Testing theme generation..."),[{dark:!1,neg:!1},{dark:!1,neg:!0},{dark:!0,neg:!1},{dark:!0,neg:!0}].forEach(({dark:i,neg:n})=>{const o=e.themeConfig(i,n);$(`Theme ${i?"dark":"light"}${n?"-neg-prompt":""}:`,o.name)}),$("3. Testing cache warming..."),await Mt(),$("4. Browser environment check..."),$("WebAssembly supported:",typeof WebAssembly<"u"),$("Performance API available:",typeof performance<"u"),$("Environment:","production")}catch(t){const e=t instanceof Error?t.message:String(t);Ue("Debug check failed:",e)}console.groupEnd()},Dt=(t=0,e=0,r=0,i=0)=>{document.querySelectorAll('[data-code-type="hybrid-highlighter"]').forEach(o=>{const a=o;a.style.setProperty("--highlight-offset-x",`${t}px`),a.style.setProperty("--highlight-offset-y",`${e}px`),a.style.setProperty("--highlight-sub-pixel-x",`${r}px`),a.style.setProperty("--highlight-sub-pixel-y",`${i}px`)}),$(`🎯 Highlight alignment adjusted: X: ${t}px, Y: ${e}px, Sub-pixel X: ${r}px, Sub-pixel Y: ${i}px`)},Di=()=>{const t=document.querySelectorAll('[data-code-type="hybrid-highlighter"]');t.forEach((e,r)=>{const i=e,n=document.createElement("div");n.id=`alignment-debug-${r}`,n.style.cssText=`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px dashed red;
      background: rgba(255, 0, 0, 0.1);
      pointer-events: none;
      z-index: 9999;
      font-family: monospace;
      font-size: 12px;
      color: red;
    `,n.innerHTML=`
      <div style="position: absolute; top: -20px; left: 0; background: red; color: white; padding: 2px 4px; font-size: 10px;">
        Highlighter ${r+1}
      </div>
    `,i.append(n),setTimeout(()=>{const o=document.getElementById(`alignment-debug-${r}`);o&&o.remove()},5e3)}),$(`🔍 Visual alignment test activated for ${t.length} highlighters (will auto-remove in 5s)`)},Bi=()=>{const t=navigator.userAgent.toLowerCase(),e=t.includes("firefox"),r=t.includes("safari")&&!t.includes("chrome"),i=t.includes("edge");let n={subX:0,subY:0,x:0,y:0};return e?n={subX:0,subY:0,x:0,y:-.5}:r?n={subX:.5,subY:0,x:0,y:0}:i&&(n={subX:0,subY:.25,x:0,y:0}),(n.x!==0||n.y!==0||n.subX!==0||n.subY!==0)&&(Dt(n.x,n.y,n.subX,n.subY),$(`🌐 Applied browser-specific alignment for ${e?"Firefox":r?"Safari":i?"Edge":"Chrome"}`)),n},Hi=()=>{$("🧪 Testing highlight responsiveness...");const t=document.querySelectorAll('textarea[placeholder*="prompt" i]');if(t.length===0){$("❌ No prompt textareas found");return}const e=t[0],r=e.value;$("📝 Adding test text..."),e.value="test highlighting responsiveness",e.dispatchEvent(new Event("input",{bubbles:!0})),setTimeout(()=>{$("🔄 Changing text..."),e.value="updated text for responsiveness test",e.dispatchEvent(new Event("input",{bubbles:!0})),setTimeout(()=>{$("↩️ Restoring original text..."),e.value=r,e.dispatchEvent(new Event("input",{bubbles:!0})),$("✅ Responsiveness test complete")},1e3)},1e3)};typeof window<"u"&&(window.debugShikiSetup=Mi,window.adjustHighlightAlignment=Dt,window.testHighlightResponsiveness=Hi,window.testAlignmentVisually=Di,window.detectAndFixBrowserAlignment=Bi,Tr()&&($("🛠️ Debug utilities available:"),$("  - debugShikiSetup() - Full Shiki diagnostics"),$("  - testBasicHighlighting() - Test core highlighting function"),$("  - adjustHighlightAlignment(x, y, subX, subY) - Fine-tune text alignment with sub-pixel precision"),$("  - testAlignmentVisually() - Visual alignment testing with red overlay"),$("  - detectAndFixBrowserAlignment() - Auto-detect and fix browser-specific alignment issues"),$("  - testHighlightResponsiveness() - Test real-time highlighting"),$("  - forceCompleteAllHighlighting() - EMERGENCY: Force stop all loading")));const oe=new Map;function Ui(t,e,r){const i=`${t.colorPrimary}-${t.borderRadius}-${t.fontSize}-${t.colorBgContainer}`;return`${e}-${i}-`}function te(t,e,r,i){const n=Ui(t,e);if(oe.has(n))return oe.get(n);const o=r(t,i);if(oe.set(n,o),oe.size>1e3){const a=oe.keys().next().value;a&&oe.delete(a)}return o}function zi(t){te(t,"button-primary",e=>C`
    background: ${e.colorPrimary};
    border: 1px solid ${e.colorPrimary};
    border-radius: ${e.borderRadius}px;
  `),te(t,"button-secondary",e=>C`
    background: ${e.colorFillTertiary};
    border: 1px solid ${e.colorBorderSecondary};
    border-radius: ${e.borderRadius}px;
  `),te(t,"container-base",e=>C`
    background: ${e.colorBgContainer};
    border: 1px solid ${e.colorBorderSecondary};
    border-radius: ${e.borderRadius}px;
    padding: 16px;
  `),te(t,"text-primary",e=>C`
    color: ${e.colorText};
    font-size: ${e.fontSize}px;
    font-family: ${e.fontFamily};
  `),te(t,"text-secondary",e=>C`
    color: ${e.colorTextSecondary};
    font-size: ${e.fontSizeSM}px;
    font-family: ${e.fontFamily};
  `)}const w=t=>typeof t=="string",de=()=>{let t,e;const r=new Promise((i,n)=>{t=i,e=n});return r.resolve=t,r.reject=e,r},dt=t=>t==null?"":""+t,qi=(t,e,r)=>{t.forEach(i=>{e[i]&&(r[i]=e[i])})},Vi=/###/g,ut=t=>t&&t.indexOf("###")>-1?t.replace(Vi,"."):t,pt=t=>!t||w(t),ge=(t,e,r)=>{const i=w(e)?e.split("."):e;let n=0;for(;n<i.length-1;){if(pt(t))return{};const o=ut(i[n]);!t[o]&&r&&(t[o]=new r),Object.prototype.hasOwnProperty.call(t,o)?t=t[o]:t={},++n}return pt(t)?{}:{obj:t,k:ut(i[n])}},ft=(t,e,r)=>{const{obj:i,k:n}=ge(t,e,Object);if(i!==void 0||e.length===1){i[n]=r;return}let o=e[e.length-1],a=e.slice(0,e.length-1),s=ge(t,a,Object);for(;s.obj===void 0&&a.length;)o=`${a[a.length-1]}.${o}`,a=a.slice(0,a.length-1),s=ge(t,a,Object),s&&s.obj&&typeof s.obj[`${s.k}.${o}`]<"u"&&(s.obj=void 0);s.obj[`${s.k}.${o}`]=r},Wi=(t,e,r,i)=>{const{obj:n,k:o}=ge(t,e,Object);n[o]=n[o]||[],n[o].push(r)},Te=(t,e)=>{const{obj:r,k:i}=ge(t,e);if(r)return r[i]},Ki=(t,e,r)=>{const i=Te(t,r);return i!==void 0?i:Te(e,r)},Bt=(t,e,r)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in t?w(t[i])||t[i]instanceof String||w(e[i])||e[i]instanceof String?r&&(t[i]=e[i]):Bt(t[i],e[i],r):t[i]=e[i]);return t},ae=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Gi={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Xi=t=>w(t)?t.replace(/[&<>"'\/]/g,e=>Gi[e]):t;class Ji{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const r=this.regExpMap.get(e);if(r!==void 0)return r;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const Yi=[" ",",","?","!",";"],Qi=new Ji(20),Zi=(t,e,r)=>{e=e||"",r=r||"";const i=Yi.filter(a=>e.indexOf(a)<0&&r.indexOf(a)<0);if(i.length===0)return!0;const n=Qi.getRegExp(`(${i.map(a=>a==="?"?"\\?":a).join("|")})`);let o=!n.test(t);if(!o){const a=t.indexOf(r);a>0&&!n.test(t.substring(0,a))&&(o=!0)}return o},ze=function(t,e){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return t[e];const i=e.split(r);let n=t;for(let o=0;o<i.length;){if(!n||typeof n!="object")return;let a,s="";for(let l=o;l<i.length;++l)if(l!==o&&(s+=r),s+=i[l],a=n[s],a!==void 0){if(["string","number","boolean"].indexOf(typeof a)>-1&&l<i.length-1)continue;o+=l-o+1;break}n=a}return n},Le=t=>t&&t.replace("_","-"),en={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};class Ce{constructor(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,r)}init(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=r.prefix||"i18next:",this.logger=e||en,this.options=r,this.debug=r.debug}log(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return this.forward(r,"log","",!0)}warn(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return this.forward(r,"warn","",!0)}error(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return this.forward(r,"error","")}deprecate(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return this.forward(r,"warn","WARNING DEPRECATED: ",!0)}forward(e,r,i,n){return n&&!this.debug?null:(w(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[r](e))}create(e){return new Ce(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Ce(this.logger,e)}}var U=new Ce;class Ie{constructor(){this.observers={}}on(e,r){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const n=this.observers[i].get(r)||0;this.observers[i].set(r,n+1)}),this}off(e,r){if(this.observers[e]){if(!r){delete this.observers[e];return}this.observers[e].delete(r)}}emit(e){for(var r=arguments.length,i=new Array(r>1?r-1:0),n=1;n<r;n++)i[n-1]=arguments[n];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(a=>{let[s,l]=a;for(let d=0;d<l;d++)s(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(a=>{let[s,l]=a;for(let d=0;d<l;d++)s.apply(s,[e,...i])})}}class gt extends Ie{constructor(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=r,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const r=this.options.ns.indexOf(e);r>-1&&this.options.ns.splice(r,1)}getResource(e,r,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,a=n.ignoreJSONStructure!==void 0?n.ignoreJSONStructure:this.options.ignoreJSONStructure;let s;e.indexOf(".")>-1?s=e.split("."):(s=[e,r],i&&(Array.isArray(i)?s.push(...i):w(i)&&o?s.push(...i.split(o)):s.push(i)));const l=Te(this.data,s);return!l&&!r&&!i&&e.indexOf(".")>-1&&(e=s[0],r=s[1],i=s.slice(2).join(".")),l||!a||!w(i)?l:ze(this.data&&this.data[e]&&this.data[e][r],i,o)}addResource(e,r,i,n){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const a=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator;let s=[e,r];i&&(s=s.concat(a?i.split(a):i)),e.indexOf(".")>-1&&(s=e.split("."),n=r,r=s[1]),this.addNamespaces(r),ft(this.data,s,n),o.silent||this.emit("added",e,r,i,n)}addResources(e,r,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const o in i)(w(i[o])||Array.isArray(i[o]))&&this.addResource(e,r,o,i[o],{silent:!0});n.silent||this.emit("added",e,r,i)}addResourceBundle(e,r,i,n,o){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},s=[e,r];e.indexOf(".")>-1&&(s=e.split("."),n=i,i=r,r=s[1]),this.addNamespaces(r);let l=Te(this.data,s)||{};a.skipCopy||(i=JSON.parse(JSON.stringify(i))),n?Bt(l,i,o):l={...l,...i},ft(this.data,s,l),a.silent||this.emit("added",e,r,i)}removeResourceBundle(e,r){this.hasResourceBundle(e,r)&&delete this.data[e][r],this.removeNamespaces(r),this.emit("removed",e,r)}hasResourceBundle(e,r){return this.getResource(e,r)!==void 0}getResourceBundle(e,r){return r||(r=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,r)}:this.getResource(e,r)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const r=this.getDataByLanguage(e);return!!(r&&Object.keys(r)||[]).find(n=>r[n]&&Object.keys(r[n]).length>0)}toJSON(){return this.data}}var Ht={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,r,i,n){return t.forEach(o=>{this.processors[o]&&(e=this.processors[o].process(e,r,i,n))}),e}};const ht={};class Pe extends Ie{constructor(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),qi(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=r,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=U.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,r);return i&&i.res!==void 0}extractFromKey(e,r){let i=r.nsSeparator!==void 0?r.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const n=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let o=r.ns||this.options.defaultNS||[];const a=i&&e.indexOf(i)>-1,s=!this.options.userDefinedKeySeparator&&!r.keySeparator&&!this.options.userDefinedNsSeparator&&!r.nsSeparator&&!Zi(e,i,n);if(a&&!s){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:w(o)?[o]:o};const d=e.split(i);(i!==n||i===n&&this.options.ns.indexOf(d[0])>-1)&&(o=d.shift()),e=d.join(n)}return{key:e,namespaces:w(o)?[o]:o}}translate(e,r,i){if(typeof r!="object"&&this.options.overloadTranslationOptionHandler&&(r=this.options.overloadTranslationOptionHandler(arguments)),typeof r=="object"&&(r={...r}),r||(r={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const n=r.returnDetails!==void 0?r.returnDetails:this.options.returnDetails,o=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator,{key:a,namespaces:s}=this.extractFromKey(e[e.length-1],r),l=s[s.length-1],d=r.lng||this.language,f=r.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d&&d.toLowerCase()==="cimode"){if(f){const L=r.nsSeparator||this.options.nsSeparator;return n?{res:`${l}${L}${a}`,usedKey:a,exactUsedKey:a,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(r)}:`${l}${L}${a}`}return n?{res:a,usedKey:a,exactUsedKey:a,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(r)}:a}const h=this.resolve(e,r);let c=h&&h.res;const b=h&&h.usedKey||a,y=h&&h.exactUsedKey||a,x=Object.prototype.toString.apply(c),_=["[object Number]","[object Function]","[object RegExp]"],R=r.joinArrays!==void 0?r.joinArrays:this.options.joinArrays,P=!this.i18nFormat||this.i18nFormat.handleAsObject,J=!w(c)&&typeof c!="boolean"&&typeof c!="number";if(P&&c&&J&&_.indexOf(x)<0&&!(w(R)&&Array.isArray(c))){if(!r.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const L=this.options.returnedObjectHandler?this.options.returnedObjectHandler(b,c,{...r,ns:s}):`key '${a} (${this.language})' returned an object instead of string.`;return n?(h.res=L,h.usedParams=this.getUsedParamsDetails(r),h):L}if(o){const L=Array.isArray(c),F=L?[]:{},k=L?y:b;for(const A in c)if(Object.prototype.hasOwnProperty.call(c,A)){const ne=`${k}${o}${A}`;F[A]=this.translate(ne,{...r,joinArrays:!1,ns:s}),F[A]===ne&&(F[A]=c[A])}c=F}}else if(P&&w(R)&&Array.isArray(c))c=c.join(R),c&&(c=this.extendTranslation(c,e,r,i));else{let L=!1,F=!1;const k=r.count!==void 0&&!w(r.count),A=Pe.hasDefaultValue(r),ne=k?this.pluralResolver.getSuffix(d,r.count,r):"",H=r.ordinal&&k?this.pluralResolver.getSuffix(d,r.count,{ordinal:!1}):"",ye=k&&!r.ordinal&&r.count===0&&this.pluralResolver.shouldUseIntlApi(),Y=ye&&r[`defaultValue${this.options.pluralSeparator}zero`]||r[`defaultValue${ne}`]||r[`defaultValue${H}`]||r.defaultValue;!this.isValidLookup(c)&&A&&(L=!0,c=Y),this.isValidLookup(c)||(F=!0,c=a);const ke=(r.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&F?void 0:c,z=A&&Y!==c&&this.options.updateMissing;if(F||L||z){if(this.logger.log(z?"updateKey":"missingKey",d,l,a,z?Y:c),o){const S=this.resolve(a,{...r,keySeparator:!1});S&&S.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let p=[];const m=this.languageUtils.getFallbackCodes(this.options.fallbackLng,r.lng||this.language);if(this.options.saveMissingTo==="fallback"&&m&&m[0])for(let S=0;S<m.length;S++)p.push(m[S]);else this.options.saveMissingTo==="all"?p=this.languageUtils.toResolveHierarchy(r.lng||this.language):p.push(r.lng||this.language);const v=(S,O,E)=>{const Q=A&&E!==c?E:ke;this.options.missingKeyHandler?this.options.missingKeyHandler(S,l,O,Q,z,r):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(S,l,O,Q,z,r),this.emit("missingKey",S,l,O,c)};this.options.saveMissing&&(this.options.saveMissingPlurals&&k?p.forEach(S=>{const O=this.pluralResolver.getSuffixes(S,r);ye&&r[`defaultValue${this.options.pluralSeparator}zero`]&&O.indexOf(`${this.options.pluralSeparator}zero`)<0&&O.push(`${this.options.pluralSeparator}zero`),O.forEach(E=>{v([S],a+E,r[`defaultValue${E}`]||Y)})}):v(p,a,Y))}c=this.extendTranslation(c,e,r,h,i),F&&c===a&&this.options.appendNamespaceToMissingKey&&(c=`${l}:${a}`),(F||L)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?c=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${a}`:a,L?c:void 0):c=this.options.parseMissingKeyHandler(c))}return n?(h.res=c,h.usedParams=this.getUsedParamsDetails(r),h):c}extendTranslation(e,r,i,n,o){var a=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||n.usedLng,n.usedNS,n.usedKey,{resolved:n});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const d=w(e)&&(i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let f;if(d){const c=e.match(this.interpolator.nestingRegexp);f=c&&c.length}let h=i.replace&&!w(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(h={...this.options.interpolation.defaultVariables,...h}),e=this.interpolator.interpolate(e,h,i.lng||this.language||n.usedLng,i),d){const c=e.match(this.interpolator.nestingRegexp),b=c&&c.length;f<b&&(i.nest=!1)}!i.lng&&this.options.compatibilityAPI!=="v1"&&n&&n.res&&(i.lng=this.language||n.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var c=arguments.length,b=new Array(c),y=0;y<c;y++)b[y]=arguments[y];return o&&o[0]===b[0]&&!i.context?(a.logger.warn(`It seems you are nesting recursively key: ${b[0]} in key: ${r[0]}`),null):a.translate(...b,r)},i)),i.interpolation&&this.interpolator.reset()}const s=i.postProcess||this.options.postProcess,l=w(s)?[s]:s;return e!=null&&l&&l.length&&i.applyPostProcessor!==!1&&(e=Ht.handle(l,e,r,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...n,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,n,o,a,s;return w(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const d=this.extractFromKey(l,r),f=d.key;n=f;let h=d.namespaces;this.options.fallbackNS&&(h=h.concat(this.options.fallbackNS));const c=r.count!==void 0&&!w(r.count),b=c&&!r.ordinal&&r.count===0&&this.pluralResolver.shouldUseIntlApi(),y=r.context!==void 0&&(w(r.context)||typeof r.context=="number")&&r.context!=="",x=r.lngs?r.lngs:this.languageUtils.toResolveHierarchy(r.lng||this.language,r.fallbackLng);h.forEach(_=>{this.isValidLookup(i)||(s=_,!ht[`${x[0]}-${_}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(s)&&(ht[`${x[0]}-${_}`]=!0,this.logger.warn(`key "${n}" for languages "${x.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),x.forEach(R=>{if(this.isValidLookup(i))return;a=R;const P=[f];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(P,f,R,_,r);else{let L;c&&(L=this.pluralResolver.getSuffix(R,r.count,r));const F=`${this.options.pluralSeparator}zero`,k=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(c&&(P.push(f+L),r.ordinal&&L.indexOf(k)===0&&P.push(f+L.replace(k,this.options.pluralSeparator)),b&&P.push(f+F)),y){const A=`${f}${this.options.contextSeparator}${r.context}`;P.push(A),c&&(P.push(A+L),r.ordinal&&L.indexOf(k)===0&&P.push(A+L.replace(k,this.options.pluralSeparator)),b&&P.push(A+F))}}let J;for(;J=P.pop();)this.isValidLookup(i)||(o=J,i=this.getResource(R,_,J,r))}))})}),{res:i,usedKey:n,exactUsedKey:o,usedLng:a,usedNS:s}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,r,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,r,i,n):this.resourceStore.getResource(e,r,i,n)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const r=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!w(e.replace);let n=i?e.replace:e;if(i&&typeof e.count<"u"&&(n.count=e.count),this.options.interpolation.defaultVariables&&(n={...this.options.interpolation.defaultVariables,...n}),!i){n={...n};for(const o of r)delete n[o]}return n}static hasDefaultValue(e){const r="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&r===i.substring(0,r.length)&&e[i]!==void 0)return!0;return!1}}const Me=t=>t.charAt(0).toUpperCase()+t.slice(1);class mt{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=U.create("languageUtils")}getScriptPartFromCode(e){if(e=Le(e),!e||e.indexOf("-")<0)return null;const r=e.split("-");return r.length===2||(r.pop(),r[r.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(r.join("-"))}getLanguagePartFromCode(e){if(e=Le(e),!e||e.indexOf("-")<0)return e;const r=e.split("-");return this.formatLanguageCode(r[0])}formatLanguageCode(e){if(w(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let n=Intl.getCanonicalLocales(e)[0];if(n&&this.options.lowerCaseLng&&(n=n.toLowerCase()),n)return n}catch{}const r=["hans","hant","latn","cyrl","cans","mong","arab"];let i=e.split("-");return this.options.lowerCaseLng?i=i.map(n=>n.toLowerCase()):i.length===2?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),r.indexOf(i[1].toLowerCase())>-1&&(i[1]=Me(i[1].toLowerCase()))):i.length===3&&(i[0]=i[0].toLowerCase(),i[1].length===2&&(i[1]=i[1].toUpperCase()),i[0]!=="sgn"&&i[2].length===2&&(i[2]=i[2].toUpperCase()),r.indexOf(i[1].toLowerCase())>-1&&(i[1]=Me(i[1].toLowerCase())),r.indexOf(i[2].toLowerCase())>-1&&(i[2]=Me(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let r;return e.forEach(i=>{if(r)return;const n=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(n))&&(r=n)}),!r&&this.options.supportedLngs&&e.forEach(i=>{if(r)return;const n=this.getLanguagePartFromCode(i);if(this.isSupportedCode(n))return r=n;r=this.options.supportedLngs.find(o=>{if(o===n)return o;if(!(o.indexOf("-")<0&&n.indexOf("-")<0)&&(o.indexOf("-")>0&&n.indexOf("-")<0&&o.substring(0,o.indexOf("-"))===n||o.indexOf(n)===0&&n.length>1))return o})}),r||(r=this.getFallbackCodes(this.options.fallbackLng)[0]),r}getFallbackCodes(e,r){if(!e)return[];if(typeof e=="function"&&(e=e(r)),w(e)&&(e=[e]),Array.isArray(e))return e;if(!r)return e.default||[];let i=e[r];return i||(i=e[this.getScriptPartFromCode(r)]),i||(i=e[this.formatLanguageCode(r)]),i||(i=e[this.getLanguagePartFromCode(r)]),i||(i=e.default),i||[]}toResolveHierarchy(e,r){const i=this.getFallbackCodes(r||this.options.fallbackLng||[],e),n=[],o=a=>{a&&(this.isSupportedCode(a)?n.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return w(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&o(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&o(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&o(this.getLanguagePartFromCode(e))):w(e)&&o(this.formatLanguageCode(e)),i.forEach(a=>{n.indexOf(a)<0&&o(this.formatLanguageCode(a))}),n}}let tn=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],rn={1:t=>+(t>1),2:t=>+(t!=1),3:t=>0,4:t=>t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,5:t=>t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5,6:t=>t==1?0:t>=2&&t<=4?1:2,7:t=>t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,8:t=>t==1?0:t==2?1:t!=8&&t!=11?2:3,9:t=>+(t>=2),10:t=>t==1?0:t==2?1:t<7?2:t<11?3:4,11:t=>t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3,12:t=>+(t%10!=1||t%100==11),13:t=>+(t!==0),14:t=>t==1?0:t==2?1:t==3?2:3,15:t=>t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2,16:t=>t%10==1&&t%100!=11?0:t!==0?1:2,17:t=>t==1||t%10==1&&t%100!=11?0:1,18:t=>t==0?0:t==1?1:2,19:t=>t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3,20:t=>t==1?0:t==0||t%100>0&&t%100<20?1:2,21:t=>t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0,22:t=>t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3};const nn=["v1","v2","v3"],on=["v4"],bt={zero:0,one:1,two:2,few:3,many:4,other:5},an=()=>{const t={};return tn.forEach(e=>{e.lngs.forEach(r=>{t[r]={numbers:e.nr,plurals:rn[e.fc]}})}),t};class sn{constructor(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=r,this.logger=U.create("pluralResolver"),(!this.options.compatibilityJSON||on.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=an(),this.pluralRulesCache={}}addRule(e,r){this.rules[e]=r}clearCache(){this.pluralRulesCache={}}getRule(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const i=Le(e==="dev"?"en":e),n=r.ordinal?"ordinal":"cardinal",o=JSON.stringify({cleanedCode:i,type:n});if(o in this.pluralRulesCache)return this.pluralRulesCache[o];let a;try{a=new Intl.PluralRules(i,{type:n})}catch{if(!e.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(l,r)}return this.pluralRulesCache[o]=a,a}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,r);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}getPluralFormsOfKey(e,r){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(n=>`${r}${n}`)}getSuffixes(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,r);return i?this.shouldUseIntlApi()?i.resolvedOptions().pluralCategories.sort((n,o)=>bt[n]-bt[o]).map(n=>`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${n}`):i.numbers.map(n=>this.getSuffix(e,n,r)):[]}getSuffix(e,r){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const n=this.getRule(e,i);return n?this.shouldUseIntlApi()?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${n.select(r)}`:this.getSuffixRetroCompatible(n,r):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,r){const i=e.noAbs?e.plurals(r):e.plurals(Math.abs(r));let n=e.numbers[i];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(n===2?n="plural":n===1&&(n=""));const o=()=>this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString();return this.options.compatibilityJSON==="v1"?n===1?"":typeof n=="number"?`_plural_${n.toString()}`:o():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?o():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}shouldUseIntlApi(){return!nn.includes(this.options.compatibilityJSON)}}const yt=function(t,e,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,o=Ki(t,e,r);return!o&&n&&w(r)&&(o=ze(t,r,i),o===void 0&&(o=ze(e,r,i))),o},De=t=>t.replace(/\$/g,"$$$$");class ln{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=U.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(r=>r),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:r,escapeValue:i,useRawValueToEscape:n,prefix:o,prefixEscaped:a,suffix:s,suffixEscaped:l,formatSeparator:d,unescapeSuffix:f,unescapePrefix:h,nestingPrefix:c,nestingPrefixEscaped:b,nestingSuffix:y,nestingSuffixEscaped:x,nestingOptionsSeparator:_,maxReplaces:R,alwaysFormat:P}=e.interpolation;this.escape=r!==void 0?r:Xi,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=n!==void 0?n:!1,this.prefix=o?ae(o):a||"{{",this.suffix=s?ae(s):l||"}}",this.formatSeparator=d||",",this.unescapePrefix=f?"":h||"-",this.unescapeSuffix=this.unescapePrefix?"":f||"",this.nestingPrefix=c?ae(c):b||ae("$t("),this.nestingSuffix=y?ae(y):x||ae(")"),this.nestingOptionsSeparator=_||",",this.maxReplaces=R||1e3,this.alwaysFormat=P!==void 0?P:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(r,i)=>r&&r.source===i?(r.lastIndex=0,r):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,r,i,n){let o,a,s;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},d=b=>{if(b.indexOf(this.formatSeparator)<0){const R=yt(r,l,b,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(R,void 0,i,{...n,...r,interpolationkey:b}):R}const y=b.split(this.formatSeparator),x=y.shift().trim(),_=y.join(this.formatSeparator).trim();return this.format(yt(r,l,x,this.options.keySeparator,this.options.ignoreJSONStructure),_,i,{...n,...r,interpolationkey:x})};this.resetRegExp();const f=n&&n.missingInterpolationHandler||this.options.missingInterpolationHandler,h=n&&n.interpolation&&n.interpolation.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:b=>De(b)},{regex:this.regexp,safeValue:b=>this.escapeValue?De(this.escape(b)):De(b)}].forEach(b=>{for(s=0;o=b.regex.exec(e);){const y=o[1].trim();if(a=d(y),a===void 0)if(typeof f=="function"){const _=f(e,o,n);a=w(_)?_:""}else if(n&&Object.prototype.hasOwnProperty.call(n,y))a="";else if(h){a=o[0];continue}else this.logger.warn(`missed to pass in variable ${y} for interpolating ${e}`),a="";else!w(a)&&!this.useRawValueToEscape&&(a=dt(a));const x=b.safeValue(a);if(e=e.replace(o[0],x),h?(b.regex.lastIndex+=a.length,b.regex.lastIndex-=o[0].length):b.regex.lastIndex=0,s++,s>=this.maxReplaces)break}}),e}nest(e,r){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n,o,a;const s=(l,d)=>{const f=this.nestingOptionsSeparator;if(l.indexOf(f)<0)return l;const h=l.split(new RegExp(`${f}[ ]*{`));let c=`{${h[1]}`;l=h[0],c=this.interpolate(c,a);const b=c.match(/'/g),y=c.match(/"/g);(b&&b.length%2===0&&!y||y.length%2!==0)&&(c=c.replace(/'/g,'"'));try{a=JSON.parse(c),d&&(a={...d,...a})}catch(x){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,x),`${l}${f}${c}`}return a.defaultValue&&a.defaultValue.indexOf(this.prefix)>-1&&delete a.defaultValue,l};for(;n=this.nestingRegexp.exec(e);){let l=[];a={...i},a=a.replace&&!w(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let d=!1;if(n[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(n[1])){const f=n[1].split(this.formatSeparator).map(h=>h.trim());n[1]=f.shift(),l=f,d=!0}if(o=r(s.call(this,n[1].trim(),a),a),o&&n[0]===e&&!w(o))return o;w(o)||(o=dt(o)),o||(this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`),o=""),d&&(o=l.reduce((f,h)=>this.format(f,h,i.lng,{...i,interpolationkey:n[1].trim()}),o.trim())),e=e.replace(n[0],o),this.regexp.lastIndex=0}return e}}const cn=t=>{let e=t.toLowerCase().trim();const r={};if(t.indexOf("(")>-1){const i=t.split("(");e=i[0].toLowerCase().trim();const n=i[1].substring(0,i[1].length-1);e==="currency"&&n.indexOf(":")<0?r.currency||(r.currency=n.trim()):e==="relativetime"&&n.indexOf(":")<0?r.range||(r.range=n.trim()):n.split(";").forEach(a=>{if(a){const[s,...l]=a.split(":"),d=l.join(":").trim().replace(/^'+|'+$/g,""),f=s.trim();r[f]||(r[f]=d),d==="false"&&(r[f]=!1),d==="true"&&(r[f]=!0),isNaN(d)||(r[f]=parseInt(d,10))}})}return{formatName:e,formatOptions:r}},se=t=>{const e={};return(r,i,n)=>{let o=n;n&&n.interpolationkey&&n.formatParams&&n.formatParams[n.interpolationkey]&&n[n.interpolationkey]&&(o={...o,[n.interpolationkey]:void 0});const a=i+JSON.stringify(o);let s=e[a];return s||(s=t(Le(i),n),e[a]=s),s(r)}};class dn{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=U.create("formatter"),this.options=e,this.formats={number:se((r,i)=>{const n=new Intl.NumberFormat(r,{...i});return o=>n.format(o)}),currency:se((r,i)=>{const n=new Intl.NumberFormat(r,{...i,style:"currency"});return o=>n.format(o)}),datetime:se((r,i)=>{const n=new Intl.DateTimeFormat(r,{...i});return o=>n.format(o)}),relativetime:se((r,i)=>{const n=new Intl.RelativeTimeFormat(r,{...i});return o=>n.format(o,i.range||"day")}),list:se((r,i)=>{const n=new Intl.ListFormat(r,{...i});return o=>n.format(o)})},this.init(e)}init(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=r.interpolation.formatSeparator||","}add(e,r){this.formats[e.toLowerCase().trim()]=r}addCached(e,r){this.formats[e.toLowerCase().trim()]=se(r)}format(e,r,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=r.split(this.formatSeparator);if(o.length>1&&o[0].indexOf("(")>1&&o[0].indexOf(")")<0&&o.find(s=>s.indexOf(")")>-1)){const s=o.findIndex(l=>l.indexOf(")")>-1);o[0]=[o[0],...o.splice(1,s)].join(this.formatSeparator)}return o.reduce((s,l)=>{const{formatName:d,formatOptions:f}=cn(l);if(this.formats[d]){let h=s;try{const c=n&&n.formatParams&&n.formatParams[n.interpolationkey]||{},b=c.locale||c.lng||n.locale||n.lng||i;h=this.formats[d](s,b,{...f,...n,...c})}catch(c){this.logger.warn(c)}return h}else this.logger.warn(`there was no format function for ${d}`);return s},e)}}const un=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class pn extends Ie{constructor(e,r,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=r,this.services=i,this.languageUtils=i.languageUtils,this.options=n,this.logger=U.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=n.maxParallelReads||10,this.readingCalls=0,this.maxRetries=n.maxRetries>=0?n.maxRetries:5,this.retryTimeout=n.retryTimeout>=1?n.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(i,n.backend,n)}queueLoad(e,r,i,n){const o={},a={},s={},l={};return e.forEach(d=>{let f=!0;r.forEach(h=>{const c=`${d}|${h}`;!i.reload&&this.store.hasResourceBundle(d,h)?this.state[c]=2:this.state[c]<0||(this.state[c]===1?a[c]===void 0&&(a[c]=!0):(this.state[c]=1,f=!1,a[c]===void 0&&(a[c]=!0),o[c]===void 0&&(o[c]=!0),l[h]===void 0&&(l[h]=!0)))}),f||(s[d]=!0)}),(Object.keys(o).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:n}),{toLoad:Object.keys(o),pending:Object.keys(a),toLoadLanguages:Object.keys(s),toLoadNamespaces:Object.keys(l)}}loaded(e,r,i){const n=e.split("|"),o=n[0],a=n[1];r&&this.emit("failedLoading",o,a,r),!r&&i&&this.store.addResourceBundle(o,a,i,void 0,void 0,{skipCopy:!0}),this.state[e]=r?-1:2,r&&i&&(this.state[e]=0);const s={};this.queue.forEach(l=>{Wi(l.loaded,[o],a),un(l,e),r&&l.errors.push(r),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(d=>{s[d]||(s[d]={});const f=l.loaded[d];f.length&&f.forEach(h=>{s[d][h]===void 0&&(s[d][h]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",s),this.queue=this.queue.filter(l=>!l.done)}read(e,r,i){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:r,fcName:i,tried:n,wait:o,callback:a});return}this.readingCalls++;const s=(d,f)=>{if(this.readingCalls--,this.waitingReads.length>0){const h=this.waitingReads.shift();this.read(h.lng,h.ns,h.fcName,h.tried,h.wait,h.callback)}if(d&&f&&n<this.maxRetries){setTimeout(()=>{this.read.call(this,e,r,i,n+1,o*2,a)},o);return}a(d,f)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const d=l(e,r);d&&typeof d.then=="function"?d.then(f=>s(null,f)).catch(s):s(null,d)}catch(d){s(d)}return}return l(e,r,s)}prepareLoading(e,r){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),n&&n();w(e)&&(e=this.languageUtils.toResolveHierarchy(e)),w(r)&&(r=[r]);const o=this.queueLoad(e,r,i,n);if(!o.toLoad.length)return o.pending.length||n(),null;o.toLoad.forEach(a=>{this.loadOne(a)})}load(e,r,i){this.prepareLoading(e,r,{},i)}reload(e,r,i){this.prepareLoading(e,r,{reload:!0},i)}loadOne(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),n=i[0],o=i[1];this.read(n,o,"read",void 0,void 0,(a,s)=>{a&&this.logger.warn(`${r}loading namespace ${o} for language ${n} failed`,a),!a&&s&&this.logger.log(`${r}loaded namespace ${o} for language ${n}`,s),this.loaded(e,a,s)})}saveMissing(e,r,i,n,o){let a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},s=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(r)){this.logger.warn(`did not save key "${i}" as the namespace "${r}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if(this.backend&&this.backend.create){const l={...a,isUpdate:o},d=this.backend.create.bind(this.backend);if(d.length<6)try{let f;d.length===5?f=d(e,r,i,n,l):f=d(e,r,i,n),f&&typeof f.then=="function"?f.then(h=>s(null,h)).catch(s):s(null,f)}catch(f){s(f)}else d(e,r,i,n,s,l)}!e||!e[0]||this.store.addResource(e[0],r,i,n)}}}const xt=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),w(t[1])&&(e.defaultValue=t[1]),w(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const r=t[3]||t[2];Object.keys(r).forEach(i=>{e[i]=r[i]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),wt=t=>(w(t.ns)&&(t.ns=[t.ns]),w(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),w(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),ve=()=>{},fn=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(r=>{typeof t[r]=="function"&&(t[r]=t[r].bind(t))})};class he extends Ie{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;if(super(),this.options=wt(e),this.services={},this.logger=U,this.modules={external:[]},fn(this),r&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,r),this;setTimeout(()=>{this.init(e,r)},0)}}init(){var e=this;let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof r=="function"&&(i=r,r={}),!r.defaultNS&&r.defaultNS!==!1&&r.ns&&(w(r.ns)?r.defaultNS=r.ns:r.ns.indexOf("translation")<0&&(r.defaultNS=r.ns[0]));const n=xt();this.options={...n,...this.options,...wt(r)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...n.interpolation,...this.options.interpolation}),r.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=r.keySeparator),r.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=r.nsSeparator);const o=f=>f?typeof f=="function"?new f:f:null;if(!this.options.isClone){this.modules.logger?U.init(o(this.modules.logger),this.options):U.init(null,this.options);let f;this.modules.formatter?f=this.modules.formatter:typeof Intl<"u"&&(f=dn);const h=new mt(this.options);this.store=new gt(this.options.resources,this.options);const c=this.services;c.logger=U,c.resourceStore=this.store,c.languageUtils=h,c.pluralResolver=new sn(h,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),f&&(!this.options.interpolation.format||this.options.interpolation.format===n.interpolation.format)&&(c.formatter=o(f),c.formatter.init(c,this.options),this.options.interpolation.format=c.formatter.format.bind(c.formatter)),c.interpolator=new ln(this.options),c.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},c.backendConnector=new pn(o(this.modules.backend),c.resourceStore,c,this.options),c.backendConnector.on("*",function(b){for(var y=arguments.length,x=new Array(y>1?y-1:0),_=1;_<y;_++)x[_-1]=arguments[_];e.emit(b,...x)}),this.modules.languageDetector&&(c.languageDetector=o(this.modules.languageDetector),c.languageDetector.init&&c.languageDetector.init(c,this.options.detection,this.options)),this.modules.i18nFormat&&(c.i18nFormat=o(this.modules.i18nFormat),c.i18nFormat.init&&c.i18nFormat.init(this)),this.translator=new Pe(this.services,this.options),this.translator.on("*",function(b){for(var y=arguments.length,x=new Array(y>1?y-1:0),_=1;_<y;_++)x[_-1]=arguments[_];e.emit(b,...x)}),this.modules.external.forEach(b=>{b.init&&b.init(this)})}if(this.format=this.options.interpolation.format,i||(i=ve),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const f=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);f.length>0&&f[0]!=="dev"&&(this.options.lng=f[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(f=>{this[f]=function(){return e.store[f](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(f=>{this[f]=function(){return e.store[f](...arguments),e}});const l=de(),d=()=>{const f=(h,c)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(c),i(h,c)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return f(null,this.t.bind(this));this.changeLanguage(this.options.lng,f)};return this.options.resources||!this.options.initImmediate?d():setTimeout(d,0),l}loadResources(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ve;const n=w(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if(n&&n.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const o=[],a=s=>{if(!s||s==="cimode")return;this.services.languageUtils.toResolveHierarchy(s).forEach(d=>{d!=="cimode"&&o.indexOf(d)<0&&o.push(d)})};n?a(n):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>a(l)),this.options.preload&&this.options.preload.forEach(s=>a(s)),this.services.backendConnector.load(o,this.options.ns,s=>{!s&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(s)})}else i(null)}reloadResources(e,r,i){const n=de();return typeof e=="function"&&(i=e,e=void 0),typeof r=="function"&&(i=r,r=void 0),e||(e=this.languages),r||(r=this.options.ns),i||(i=ve),this.services.backendConnector.reload(e,r,o=>{n.resolve(),i(o)}),n}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&Ht.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let r=0;r<this.languages.length;r++){const i=this.languages[r];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,r){var i=this;this.isLanguageChangingTo=e;const n=de();this.emit("languageChanging",e);const o=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},a=(l,d)=>{d?(o(d),this.translator.changeLanguage(d),this.isLanguageChangingTo=void 0,this.emit("languageChanged",d),this.logger.log("languageChanged",d)):this.isLanguageChangingTo=void 0,n.resolve(function(){return i.t(...arguments)}),r&&r(l,function(){return i.t(...arguments)})},s=l=>{!e&&!l&&this.services.languageDetector&&(l=[]);const d=w(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);d&&(this.language||o(d),this.translator.language||this.translator.changeLanguage(d),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(d)),this.loadResources(d,f=>{a(f,d)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?s(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(s):this.services.languageDetector.detect(s):s(e),n}getFixedT(e,r,i){var n=this;const o=function(a,s){let l;if(typeof s!="object"){for(var d=arguments.length,f=new Array(d>2?d-2:0),h=2;h<d;h++)f[h-2]=arguments[h];l=n.options.overloadTranslationOptionHandler([a,s].concat(f))}else l={...s};l.lng=l.lng||o.lng,l.lngs=l.lngs||o.lngs,l.ns=l.ns||o.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||o.keyPrefix);const c=n.options.keySeparator||".";let b;return l.keyPrefix&&Array.isArray(a)?b=a.map(y=>`${l.keyPrefix}${c}${y}`):b=l.keyPrefix?`${l.keyPrefix}${c}${a}`:a,n.t(b,l)};return w(e)?o.lng=e:o.lngs=e,o.ns=r,o.keyPrefix=i,o}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=r.lng||this.resolvedLanguage||this.languages[0],n=this.options?this.options.fallbackLng:!1,o=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const a=(s,l)=>{const d=this.services.backendConnector.state[`${s}|${l}`];return d===-1||d===0||d===2};if(r.precheck){const s=r.precheck(this,a);if(s!==void 0)return s}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(i,e)&&(!n||a(o,e)))}loadNamespaces(e,r){const i=de();return this.options.ns?(w(e)&&(e=[e]),e.forEach(n=>{this.options.ns.indexOf(n)<0&&this.options.ns.push(n)}),this.loadResources(n=>{i.resolve(),r&&r(n)}),i):(r&&r(),Promise.resolve())}loadLanguages(e,r){const i=de();w(e)&&(e=[e]);const n=this.options.preload||[],o=e.filter(a=>n.indexOf(a)<0&&this.services.languageUtils.isSupportedCode(a));return o.length?(this.options.preload=n.concat(o),this.loadResources(a=>{i.resolve(),r&&r(a)}),i):(r&&r(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const r=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=this.services&&this.services.languageUtils||new mt(xt());return r.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;return new he(e,r)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ve;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const n={...this.options,...e,isClone:!0},o=new he(n);return(e.debug!==void 0||e.prefix!==void 0)&&(o.logger=o.logger.clone(e)),["store","services","language"].forEach(s=>{o[s]=this[s]}),o.services={...this.services},o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},i&&(o.store=new gt(this.store.data,n),o.services.resourceStore=o.store),o.translator=new Pe(o.services,n),o.translator.on("*",function(s){for(var l=arguments.length,d=new Array(l>1?l-1:0),f=1;f<l;f++)d[f-1]=arguments[f];o.emit(s,...d)}),o.init(n,r),o.translator.options=n,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Ut=he.createInstance();Ut.createInstance=he.createInstance;function qe(t){"@babel/helpers - typeof";return qe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qe(t)}function zt(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":qe(XMLHttpRequest))==="object"}function gn(t){return!!t&&typeof t.then=="function"}function hn(t){return gn(t)?t:Promise.resolve(t)}function mn(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ve={exports:{}},Se={exports:{}},vt;function bn(){return vt||(vt=1,function(t,e){var r=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof fe<"u"&&fe,i=function(){function o(){this.fetch=!1,this.DOMException=r.DOMException}return o.prototype=r,new o}();(function(o){(function(a){var s=typeof o<"u"&&o||typeof self<"u"&&self||typeof s<"u"&&s,l={searchParams:"URLSearchParams"in s,iterable:"Symbol"in s&&"iterator"in Symbol,blob:"FileReader"in s&&"Blob"in s&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in s,arrayBuffer:"ArrayBuffer"in s};function d(p){return p&&DataView.prototype.isPrototypeOf(p)}if(l.arrayBuffer)var f=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],h=ArrayBuffer.isView||function(p){return p&&f.indexOf(Object.prototype.toString.call(p))>-1};function c(p){if(typeof p!="string"&&(p=String(p)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(p)||p==="")throw new TypeError('Invalid character in header field name: "'+p+'"');return p.toLowerCase()}function b(p){return typeof p!="string"&&(p=String(p)),p}function y(p){var m={next:function(){var v=p.shift();return{done:v===void 0,value:v}}};return l.iterable&&(m[Symbol.iterator]=function(){return m}),m}function x(p){this.map={},p instanceof x?p.forEach(function(m,v){this.append(v,m)},this):Array.isArray(p)?p.forEach(function(m){this.append(m[0],m[1])},this):p&&Object.getOwnPropertyNames(p).forEach(function(m){this.append(m,p[m])},this)}x.prototype.append=function(p,m){p=c(p),m=b(m);var v=this.map[p];this.map[p]=v?v+", "+m:m},x.prototype.delete=function(p){delete this.map[c(p)]},x.prototype.get=function(p){return p=c(p),this.has(p)?this.map[p]:null},x.prototype.has=function(p){return this.map.hasOwnProperty(c(p))},x.prototype.set=function(p,m){this.map[c(p)]=b(m)},x.prototype.forEach=function(p,m){for(var v in this.map)this.map.hasOwnProperty(v)&&p.call(m,this.map[v],v,this)},x.prototype.keys=function(){var p=[];return this.forEach(function(m,v){p.push(v)}),y(p)},x.prototype.values=function(){var p=[];return this.forEach(function(m){p.push(m)}),y(p)},x.prototype.entries=function(){var p=[];return this.forEach(function(m,v){p.push([v,m])}),y(p)},l.iterable&&(x.prototype[Symbol.iterator]=x.prototype.entries);function _(p){if(p.bodyUsed)return Promise.reject(new TypeError("Already read"));p.bodyUsed=!0}function R(p){return new Promise(function(m,v){p.onload=function(){m(p.result)},p.onerror=function(){v(p.error)}})}function P(p){var m=new FileReader,v=R(m);return m.readAsArrayBuffer(p),v}function J(p){var m=new FileReader,v=R(m);return m.readAsText(p),v}function L(p){for(var m=new Uint8Array(p),v=new Array(m.length),S=0;S<m.length;S++)v[S]=String.fromCharCode(m[S]);return v.join("")}function F(p){if(p.slice)return p.slice(0);var m=new Uint8Array(p.byteLength);return m.set(new Uint8Array(p)),m.buffer}function k(){return this.bodyUsed=!1,this._initBody=function(p){this.bodyUsed=this.bodyUsed,this._bodyInit=p,p?typeof p=="string"?this._bodyText=p:l.blob&&Blob.prototype.isPrototypeOf(p)?this._bodyBlob=p:l.formData&&FormData.prototype.isPrototypeOf(p)?this._bodyFormData=p:l.searchParams&&URLSearchParams.prototype.isPrototypeOf(p)?this._bodyText=p.toString():l.arrayBuffer&&l.blob&&d(p)?(this._bodyArrayBuffer=F(p.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):l.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(p)||h(p))?this._bodyArrayBuffer=F(p):this._bodyText=p=Object.prototype.toString.call(p):this._bodyText="",this.headers.get("content-type")||(typeof p=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):l.searchParams&&URLSearchParams.prototype.isPrototypeOf(p)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},l.blob&&(this.blob=function(){var p=_(this);if(p)return p;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var p=_(this);return p||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else return this.blob().then(P)}),this.text=function(){var p=_(this);if(p)return p;if(this._bodyBlob)return J(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(L(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},l.formData&&(this.formData=function(){return this.text().then(ye)}),this.json=function(){return this.text().then(JSON.parse)},this}var A=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function ne(p){var m=p.toUpperCase();return A.indexOf(m)>-1?m:p}function H(p,m){if(!(this instanceof H))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');m=m||{};var v=m.body;if(p instanceof H){if(p.bodyUsed)throw new TypeError("Already read");this.url=p.url,this.credentials=p.credentials,m.headers||(this.headers=new x(p.headers)),this.method=p.method,this.mode=p.mode,this.signal=p.signal,!v&&p._bodyInit!=null&&(v=p._bodyInit,p.bodyUsed=!0)}else this.url=String(p);if(this.credentials=m.credentials||this.credentials||"same-origin",(m.headers||!this.headers)&&(this.headers=new x(m.headers)),this.method=ne(m.method||this.method||"GET"),this.mode=m.mode||this.mode||null,this.signal=m.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&v)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(v),(this.method==="GET"||this.method==="HEAD")&&(m.cache==="no-store"||m.cache==="no-cache")){var S=/([?&])_=[^&]*/;if(S.test(this.url))this.url=this.url.replace(S,"$1_="+new Date().getTime());else{var O=/\?/;this.url+=(O.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}H.prototype.clone=function(){return new H(this,{body:this._bodyInit})};function ye(p){var m=new FormData;return p.trim().split("&").forEach(function(v){if(v){var S=v.split("="),O=S.shift().replace(/\+/g," "),E=S.join("=").replace(/\+/g," ");m.append(decodeURIComponent(O),decodeURIComponent(E))}}),m}function Y(p){var m=new x,v=p.replace(/\r?\n[\t ]+/g," ");return v.split("\r").map(function(S){return S.indexOf(`
`)===0?S.substr(1,S.length):S}).forEach(function(S){var O=S.split(":"),E=O.shift().trim();if(E){var Q=O.join(":").trim();m.append(E,Q)}}),m}k.call(H.prototype);function N(p,m){if(!(this instanceof N))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');m||(m={}),this.type="default",this.status=m.status===void 0?200:m.status,this.ok=this.status>=200&&this.status<300,this.statusText=m.statusText===void 0?"":""+m.statusText,this.headers=new x(m.headers),this.url=m.url||"",this._initBody(p)}k.call(N.prototype),N.prototype.clone=function(){return new N(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new x(this.headers),url:this.url})},N.error=function(){var p=new N(null,{status:0,statusText:""});return p.type="error",p};var ke=[301,302,303,307,308];N.redirect=function(p,m){if(ke.indexOf(m)===-1)throw new RangeError("Invalid status code");return new N(null,{status:m,headers:{location:p}})},a.DOMException=s.DOMException;try{new a.DOMException}catch{a.DOMException=function(m,v){this.message=m,this.name=v;var S=Error(m);this.stack=S.stack},a.DOMException.prototype=Object.create(Error.prototype),a.DOMException.prototype.constructor=a.DOMException}function z(p,m){return new Promise(function(v,S){var O=new H(p,m);if(O.signal&&O.signal.aborted)return S(new a.DOMException("Aborted","AbortError"));var E=new XMLHttpRequest;function Q(){E.abort()}E.onload=function(){var M={status:E.status,statusText:E.statusText,headers:Y(E.getAllResponseHeaders()||"")};M.url="responseURL"in E?E.responseURL:M.headers.get("X-Request-URL");var xe="response"in E?E.response:E.responseText;setTimeout(function(){v(new N(xe,M))},0)},E.onerror=function(){setTimeout(function(){S(new TypeError("Network request failed"))},0)},E.ontimeout=function(){setTimeout(function(){S(new TypeError("Network request failed"))},0)},E.onabort=function(){setTimeout(function(){S(new a.DOMException("Aborted","AbortError"))},0)};function vr(M){try{return M===""&&s.location.href?s.location.href:M}catch{return M}}E.open(O.method,vr(O.url),!0),O.credentials==="include"?E.withCredentials=!0:O.credentials==="omit"&&(E.withCredentials=!1),"responseType"in E&&(l.blob?E.responseType="blob":l.arrayBuffer&&O.headers.get("Content-Type")&&O.headers.get("Content-Type").indexOf("application/octet-stream")!==-1&&(E.responseType="arraybuffer")),m&&typeof m.headers=="object"&&!(m.headers instanceof x)?Object.getOwnPropertyNames(m.headers).forEach(function(M){E.setRequestHeader(M,b(m.headers[M]))}):O.headers.forEach(function(M,xe){E.setRequestHeader(xe,M)}),O.signal&&(O.signal.addEventListener("abort",Q),E.onreadystatechange=function(){E.readyState===4&&O.signal.removeEventListener("abort",Q)}),E.send(typeof O._bodyInit>"u"?null:O._bodyInit)})}return z.polyfill=!0,s.fetch||(s.fetch=z,s.Headers=x,s.Request=H,s.Response=N),a.Headers=x,a.Request=H,a.Response=N,a.fetch=z,a})({})})(i),i.fetch.ponyfill=!0,delete i.fetch.polyfill;var n=r.fetch?r:i;e=n.fetch,e.default=n.fetch,e.fetch=n.fetch,e.Headers=n.Headers,e.Request=n.Request,e.Response=n.Response,t.exports=e}(Se,Se.exports)),Se.exports}(function(t,e){var r=typeof fetch=="function"?fetch:void 0;if(typeof fe<"u"&&fe.fetch?r=fe.fetch:typeof window<"u"&&window.fetch&&(r=window.fetch),typeof mn<"u"&&typeof window>"u"){var i=r||bn();i.default&&(i=i.default),e.default=i,t.exports=e.default}})(Ve,Ve.exports);var qt=Ve.exports;const Vt=ei(qt),St=_i({__proto__:null,default:Vt},[qt]);function $t(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,i)}return r}function _t(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?$t(Object(r),!0).forEach(function(i){yn(t,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):$t(Object(r)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(r,i))})}return t}function yn(t,e,r){return(e=xn(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function xn(t){var e=wn(t,"string");return ie(e)=="symbol"?e:e+""}function wn(t,e){if(ie(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var i=r.call(t,e);if(ie(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ie(t){"@babel/helpers - typeof";return ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ie(t)}var X=typeof fetch=="function"?fetch:void 0;typeof global<"u"&&global.fetch?X=global.fetch:typeof window<"u"&&window.fetch&&(X=window.fetch);var me;zt()&&(typeof global<"u"&&global.XMLHttpRequest?me=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(me=window.XMLHttpRequest));var je;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?je=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(je=window.ActiveXObject));!X&&St&&!me&&!je&&(X=Vt||St);typeof X!="function"&&(X=void 0);var We=function(e,r){if(r&&ie(r)==="object"){var i="";for(var n in r)i+="&"+encodeURIComponent(n)+"="+encodeURIComponent(r[n]);if(!i)return e;e=e+(e.indexOf("?")!==-1?"&":"?")+i.slice(1)}return e},Et=function(e,r,i,n){var o=function(l){if(!l.ok)return i(l.statusText||"Error",{status:l.status});l.text().then(function(d){i(null,{status:l.status,data:d})}).catch(i)};if(n){var a=n(e,r);if(a instanceof Promise){a.then(o).catch(i);return}}typeof fetch=="function"?fetch(e,r).then(o).catch(i):X(e,r).then(o).catch(i)},Ot=!1,vn=function(e,r,i,n){e.queryStringParams&&(r=We(r,e.queryStringParams));var o=_t({},typeof e.customHeaders=="function"?e.customHeaders():e.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(o["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),i&&(o["Content-Type"]="application/json");var a=typeof e.requestOptions=="function"?e.requestOptions(i):e.requestOptions,s=_t({method:i?"POST":"GET",body:i?e.stringify(i):void 0,headers:o},Ot?{}:a),l=typeof e.alternateFetch=="function"&&e.alternateFetch.length>=1?e.alternateFetch:void 0;try{Et(r,s,n,l)}catch(d){if(!a||Object.keys(a).length===0||!d.message||d.message.indexOf("not implemented")<0)return n(d);try{Object.keys(a).forEach(function(f){delete s[f]}),Et(r,s,n,l),Ot=!0}catch(f){n(f)}}},Sn=function(e,r,i,n){i&&ie(i)==="object"&&(i=We("",i).slice(1)),e.queryStringParams&&(r=We(r,e.queryStringParams));try{var o;me?o=new me:o=new je("MSXML2.XMLHTTP.3.0"),o.open(i?"POST":"GET",r,1),e.crossDomain||o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.withCredentials=!!e.withCredentials,i&&o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.overrideMimeType&&o.overrideMimeType("application/json");var a=e.customHeaders;if(a=typeof a=="function"?a():a,a)for(var s in a)o.setRequestHeader(s,a[s]);o.onreadystatechange=function(){o.readyState>3&&n(o.status>=400?o.statusText:null,{status:o.status,data:o.responseText})},o.send(i)}catch(l){console&&console.log(l)}},$n=function(e,r,i,n){if(typeof i=="function"&&(n=i,i=void 0),n=n||function(){},X&&r.indexOf("file:")!==0)return vn(e,r,i,n);if(zt()||typeof ActiveXObject=="function")return Sn(e,r,i,n);n(new Error("No fetch and no xhr implementation found!"))};function ce(t){"@babel/helpers - typeof";return ce=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ce(t)}function Tt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,i)}return r}function Be(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Tt(Object(r),!0).forEach(function(i){Wt(t,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Tt(Object(r)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(r,i))})}return t}function _n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function En(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,Kt(i.key),i)}}function On(t,e,r){return e&&En(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function Wt(t,e,r){return(e=Kt(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Kt(t){var e=Tn(t,"string");return ce(e)=="symbol"?e:e+""}function Tn(t,e){if(ce(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var i=r.call(t,e);if(ce(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}var Ln=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(r){return JSON.parse(r)},stringify:JSON.stringify,parsePayload:function(r,i,n){return Wt({},i,n||"")},parseLoadPayload:function(r,i){},request:$n,reloadInterval:typeof window<"u"?!1:60*60*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},Gt=function(){function t(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};_n(this,t),this.services=e,this.options=r,this.allOptions=i,this.type="backend",this.init(e,r,i)}return On(t,[{key:"init",value:function(r){var i=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.services=r,this.options=Be(Be(Be({},Ln()),this.options||{}),n),this.allOptions=o,this.services&&this.options.reloadInterval){var a=setInterval(function(){return i.reload()},this.options.reloadInterval);ce(a)==="object"&&typeof a.unref=="function"&&a.unref()}}},{key:"readMulti",value:function(r,i,n){this._readAny(r,r,i,i,n)}},{key:"read",value:function(r,i,n){this._readAny([r],r,[i],i,n)}},{key:"_readAny",value:function(r,i,n,o,a){var s=this,l=this.options.loadPath;typeof this.options.loadPath=="function"&&(l=this.options.loadPath(r,n)),l=hn(l),l.then(function(d){if(!d)return a(null,{});var f=s.services.interpolator.interpolate(d,{lng:r.join("+"),ns:n.join("+")});s.loadUrl(f,a,i,o)})}},{key:"loadUrl",value:function(r,i,n,o){var a=this,s=typeof n=="string"?[n]:n,l=typeof o=="string"?[o]:o,d=this.options.parseLoadPayload(s,l);this.options.request(this.options,r,d,function(f,h){if(h&&(h.status>=500&&h.status<600||!h.status))return i("failed loading "+r+"; status code: "+h.status,!0);if(h&&h.status>=400&&h.status<500)return i("failed loading "+r+"; status code: "+h.status,!1);if(!h&&f&&f.message){var c=f.message.toLowerCase(),b=["failed","fetch","network","load"].find(function(_){return c.indexOf(_)>-1});if(b)return i("failed loading "+r+": "+f.message,!0)}if(f)return i(f,!1);var y,x;try{typeof h.data=="string"?y=a.options.parse(h.data,n,o):y=h.data}catch{x="failed parsing "+r+" to json"}if(x)return i(x,!1);i(null,y)})}},{key:"create",value:function(r,i,n,o,a){var s=this;if(this.options.addPath){typeof r=="string"&&(r=[r]);var l=this.options.parsePayload(i,n,o),d=0,f=[],h=[];r.forEach(function(c){var b=s.options.addPath;typeof s.options.addPath=="function"&&(b=s.options.addPath(c,i));var y=s.services.interpolator.interpolate(b,{lng:c,ns:i});s.options.request(s.options,y,l,function(x,_){d+=1,f.push(x),h.push(_),d===r.length&&typeof a=="function"&&a(f,h)})})}}},{key:"reload",value:function(){var r=this,i=this.services,n=i.backendConnector,o=i.languageUtils,a=i.logger,s=n.language;if(!(s&&s.toLowerCase()==="cimode")){var l=[],d=function(h){var c=o.toResolveHierarchy(h);c.forEach(function(b){l.indexOf(b)<0&&l.push(b)})};d(s),this.allOptions.preload&&this.allOptions.preload.forEach(function(f){return d(f)}),l.forEach(function(f){r.allOptions.ns.forEach(function(h){n.read(f,h,"read",null,null,function(c,b){c&&a.warn("loading namespace ".concat(h," for language ").concat(f," failed"),c),!c&&b&&a.log("loaded namespace ".concat(h," for language ").concat(f),b),n.loaded("".concat(f,"|").concat(h),c,b)})})})}}}])}();Gt.type="backend";const Cn=JSON.parse(localStorage.getItem(Lr));Ut.use(ti).use(Gt).init({backend:{loadPath:"/lobe/locales/{{lng}}"},debug:!1,fallbackLng:"en_US",lng:Cn?.i18n||"en_US"});const Xt=t=>{g.useEffect(()=>{const e=gradioApp().querySelector(t);e&&(e.style.display="none")},[])},Pn=g.memo(({parentId:t})=>{const e=Cr(`${t} .infotext`,{subSelector:"p"});return Xt(`${t} .infotext`),u.jsx(Pr,{value:e})}),Jt="%[a-f0-9]{2}",Lt=new RegExp("("+Jt+")|([^%]+?)","gi"),Ct=new RegExp("("+Jt+")+","gi");function Ke(t,e){try{return[decodeURIComponent(t.join(""))]}catch{}if(t.length===1)return t;e=e||1;const r=t.slice(0,e),i=t.slice(e);return Array.prototype.concat.call([],Ke(r),Ke(i))}function jn(t){try{return decodeURIComponent(t)}catch{let e=t.match(Lt)||[];for(let r=1;r<e.length;r++)t=Ke(e,r).join(""),e=t.match(Lt)||[];return t}}function Rn(t){const e={"%FE%FF":"��","%FF%FE":"��"};let r=Ct.exec(t);for(;r;){try{e[r[0]]=decodeURIComponent(r[0])}catch{const n=jn(r[0]);n!==r[0]&&(e[r[0]]=n)}r=Ct.exec(t)}e["%C2"]="�";const i=Object.keys(e);for(const n of i)t=t.replace(new RegExp(n,"g"),e[n]);return t}function An(t){if(typeof t!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return decodeURIComponent(t)}catch{return Rn(t)}}function Fn(t,e){const r={};if(Array.isArray(e))for(const i of e){const n=Object.getOwnPropertyDescriptor(t,i);n?.enumerable&&Object.defineProperty(r,i,n)}else for(const i of Reflect.ownKeys(t)){const n=Object.getOwnPropertyDescriptor(t,i);if(n.enumerable){const o=t[i];e(i,o,t)&&Object.defineProperty(r,i,n)}}return r}function Yt(t,e){if(!(typeof t=="string"&&typeof e=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(t===""||e==="")return[];const r=t.indexOf(e);return r===-1?[]:[t.slice(0,r),t.slice(r+e.length)]}const In=t=>t==null,kn=t=>encodeURIComponent(t).replaceAll(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),Ge=Symbol("encodeFragmentIdentifier");function Nn(t){switch(t.arrayFormat){case"index":return e=>(r,i)=>{const n=r.length;return i===void 0||t.skipNull&&i===null||t.skipEmptyString&&i===""?r:i===null?[...r,[j(e,t),"[",n,"]"].join("")]:[...r,[j(e,t),"[",j(n,t),"]=",j(i,t)].join("")]};case"bracket":return e=>(r,i)=>i===void 0||t.skipNull&&i===null||t.skipEmptyString&&i===""?r:i===null?[...r,[j(e,t),"[]"].join("")]:[...r,[j(e,t),"[]=",j(i,t)].join("")];case"colon-list-separator":return e=>(r,i)=>i===void 0||t.skipNull&&i===null||t.skipEmptyString&&i===""?r:i===null?[...r,[j(e,t),":list="].join("")]:[...r,[j(e,t),":list=",j(i,t)].join("")];case"comma":case"separator":case"bracket-separator":{const e=t.arrayFormat==="bracket-separator"?"[]=":"=";return r=>(i,n)=>n===void 0||t.skipNull&&n===null||t.skipEmptyString&&n===""?i:(n=n===null?"":n,i.length===0?[[j(r,t),e,j(n,t)].join("")]:[[i,j(n,t)].join(t.arrayFormatSeparator)])}default:return e=>(r,i)=>i===void 0||t.skipNull&&i===null||t.skipEmptyString&&i===""?r:i===null?[...r,j(e,t)]:[...r,[j(e,t),"=",j(i,t)].join("")]}}function Mn(t){let e;switch(t.arrayFormat){case"index":return(r,i,n)=>{if(e=/\[(\d*)]$/.exec(r),r=r.replace(/\[\d*]$/,""),!e){n[r]=i;return}n[r]===void 0&&(n[r]={}),n[r][e[1]]=i};case"bracket":return(r,i,n)=>{if(e=/(\[])$/.exec(r),r=r.replace(/\[]$/,""),!e){n[r]=i;return}if(n[r]===void 0){n[r]=[i];return}n[r]=[...n[r],i]};case"colon-list-separator":return(r,i,n)=>{if(e=/(:list)$/.exec(r),r=r.replace(/:list$/,""),!e){n[r]=i;return}if(n[r]===void 0){n[r]=[i];return}n[r]=[...n[r],i]};case"comma":case"separator":return(r,i,n)=>{const o=typeof i=="string"&&i.includes(t.arrayFormatSeparator),a=typeof i=="string"&&!o&&V(i,t).includes(t.arrayFormatSeparator);i=a?V(i,t):i;const s=o||a?i.split(t.arrayFormatSeparator).map(l=>V(l,t)):i===null?i:V(i,t);n[r]=s};case"bracket-separator":return(r,i,n)=>{const o=/(\[])$/.test(r);if(r=r.replace(/\[]$/,""),!o){n[r]=i&&V(i,t);return}const a=i===null?[]:V(i,t).split(t.arrayFormatSeparator);if(n[r]===void 0){n[r]=a;return}n[r]=[...n[r],...a]};default:return(r,i,n)=>{if(n[r]===void 0){n[r]=i;return}n[r]=[...[n[r]].flat(),i]}}}function Qt(t){if(typeof t!="string"||t.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function j(t,e){return e.encode?e.strict?kn(t):encodeURIComponent(t):t}function V(t,e){return e.decode?An(t):t}function Zt(t){return Array.isArray(t)?t.sort():typeof t=="object"?Zt(Object.keys(t)).sort((e,r)=>Number(e)-Number(r)).map(e=>t[e]):t}function er(t){const e=t.indexOf("#");return e!==-1&&(t=t.slice(0,e)),t}function Dn(t){let e="";const r=t.indexOf("#");return r!==-1&&(e=t.slice(r)),e}function Pt(t,e,r){return r==="string"&&typeof t=="string"?t:typeof r=="function"&&typeof t=="string"?r(t):r==="boolean"&&t!==null&&(t.toLowerCase()==="true"||t.toLowerCase()==="false")?t.toLowerCase()==="true":r==="boolean"&&t!==null&&(t.toLowerCase()==="1"||t.toLowerCase()==="0")?t.toLowerCase()==="1":r==="string[]"&&e.arrayFormat!=="none"&&typeof t=="string"?[t]:r==="number[]"&&e.arrayFormat!=="none"&&!Number.isNaN(Number(t))&&typeof t=="string"&&t.trim()!==""?[Number(t)]:r==="number"&&!Number.isNaN(Number(t))&&typeof t=="string"&&t.trim()!==""?Number(t):e.parseBooleans&&t!==null&&(t.toLowerCase()==="true"||t.toLowerCase()==="false")?t.toLowerCase()==="true":e.parseNumbers&&!Number.isNaN(Number(t))&&typeof t=="string"&&t.trim()!==""?Number(t):t}function tt(t){t=er(t);const e=t.indexOf("?");return e===-1?"":t.slice(e+1)}function rt(t,e){e={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,types:Object.create(null),...e},Qt(e.arrayFormatSeparator);const r=Mn(e),i=Object.create(null);if(typeof t!="string"||(t=t.trim().replace(/^[?#&]/,""),!t))return i;for(const n of t.split("&")){if(n==="")continue;const o=e.decode?n.replaceAll("+"," "):n;let[a,s]=Yt(o,"=");a===void 0&&(a=o),s=s===void 0?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?s:V(s,e),r(V(a,e),s,i)}for(const[n,o]of Object.entries(i))if(typeof o=="object"&&o!==null&&e.types[n]!=="string")for(const[a,s]of Object.entries(o)){const l=e.types[n]?e.types[n].replace("[]",""):void 0;o[a]=Pt(s,e,l)}else typeof o=="object"&&o!==null&&e.types[n]==="string"?i[n]=Object.values(o).join(e.arrayFormatSeparator):i[n]=Pt(o,e,e.types[n]);return e.sort===!1?i:(e.sort===!0?Object.keys(i).sort():Object.keys(i).sort(e.sort)).reduce((n,o)=>{const a=i[o];return n[o]=a&&typeof a=="object"&&!Array.isArray(a)?Zt(a):a,n},Object.create(null))}function tr(t,e){if(!t)return"";e={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...e},Qt(e.arrayFormatSeparator);const r=a=>e.skipNull&&In(t[a])||e.skipEmptyString&&t[a]==="",i=Nn(e),n={};for(const[a,s]of Object.entries(t))r(a)||(n[a]=s);const o=Object.keys(n);return e.sort!==!1&&o.sort(e.sort),o.map(a=>{const s=t[a];return s===void 0?"":s===null?j(a,e):Array.isArray(s)?s.length===0&&e.arrayFormat==="bracket-separator"?j(a,e)+"[]":s.reduce(i(a),[]).join("&"):j(a,e)+"="+j(s,e)}).filter(a=>a.length>0).join("&")}function rr(t,e){e={decode:!0,...e};let[r,i]=Yt(t,"#");return r===void 0&&(r=t),{url:r?.split("?")?.[0]??"",query:rt(tt(t),e),...e&&e.parseFragmentIdentifier&&i?{fragmentIdentifier:V(i,e)}:{}}}function ir(t,e){e={encode:!0,strict:!0,[Ge]:!0,...e};const r=er(t.url).split("?")[0]||"",i=tt(t.url),n={...rt(i,{sort:!1,...e}),...t.query};let o=tr(n,e);o&&(o=`?${o}`);let a=Dn(t.url);if(typeof t.fragmentIdentifier=="string"){const s=new URL(r);s.hash=t.fragmentIdentifier,a=e[Ge]?s.hash:`#${t.fragmentIdentifier}`}return`${r}${o}${a}`}function nr(t,e,r){r={parseFragmentIdentifier:!0,[Ge]:!1,...r};const{url:i,query:n,fragmentIdentifier:o}=rr(t,r);return ir({url:i,query:Fn(n,e),fragmentIdentifier:o},r)}function Bn(t,e,r){const i=Array.isArray(e)?n=>!e.includes(n):(n,o)=>!e(n,o);return nr(t,i,r)}const Xe=Object.freeze({__proto__:null,exclude:Bn,extract:tt,parse:rt,parseUrl:rr,pick:nr,stringify:tr,stringifyUrl:ir}),Hn=()=>{try{return window.matchMedia("(prefers-color-scheme: dark)").matches}catch{return!1}},Un=()=>{const[t,e]=g.useState(Hn());return g.useEffect(()=>{const r=window.matchMedia("(prefers-color-scheme: dark)"),i=n=>{e(n.matches)};return r.addEventListener("change",i),()=>{r.removeEventListener("change",i)}},[]),t},it=g.memo(({children:t})=>{const{onSetThemeMode:e,themeMode:r}=B(a=>({onInit:a.onInit,onSetThemeMode:a.onSetThemeMode,themeMode:a.themeMode})),i=B(Fe.currentSetting,It),n=Un();g.useEffect(()=>{const a=String(Xe.parseUrl(window.location.href).query.__theme||"");a?(document.body.classList.add(a),e(a)):(document.body.classList.add(n?"dark":"light"),e(n?"dark":"light"))},[n]);const o=g.useCallback(()=>{let a={},s={};if(i.primaryColor)if(i.primaryColor==="kitchen")a=jr[r];else{const l=oi[i.primaryColor];a=ii({appearance:r,scale:l,type:"Primary"})}if(i.neutralColor)if(i.neutralColor==="kitchen")s=Rr[r];else{const l=si[i.neutralColor];s=ai({appearance:r,scale:l})}return{...a,...s}},[i.primaryColor,i.neutralColor,r]);return i&&u.jsx(ni,{customToken:o,enableWebfonts:i.enableWebFont,themeMode:r,children:t})}),zn=g.memo(({children:t})=>{const e=B(r=>r.loading);return u.jsx(it,{children:e===!1&&t})}),jt=(t,e)=>{if(document.querySelector(e))return;const r=document.createElement("div");r.id=e.replace("#",""),gradioApp().querySelector(t).append(r),Qe(r).render(u.jsx(g.StrictMode,{children:u.jsx(g.Suspense,{fallback:"loading...",children:u.jsx(zn,{children:u.jsx(Pn,{parentId:t})})})}))},qn=()=>{try{jt("#html_info_txt2img","#lobe_html_info_txt2img"),jt("#html_info_img2img","#lobe_html_info_img2img"),T.success("🤯 [module] inject - ImageInfo")}catch(t){T.error("🤯 [module] inject - ImageInfo",t)}},re=class re{constructor(){we(this,"listeners",new WeakMap);we(this,"globalListeners",new Map)}static getInstance(){return re.instance||(re.instance=new re),re.instance}addEventListener(e,r,i,n){if(e.addEventListener(r,i,n),e instanceof Element){this.listeners.has(e)||this.listeners.set(e,new Map);const o=this.listeners.get(e);o.has(r)||o.set(r,new Set),o.get(r).add(i)}else{const o=`${e.constructor.name}-${r}`;this.globalListeners.has(o)||this.globalListeners.set(o,new Set),this.globalListeners.get(o).add({listener:i,...n&&{options:n}})}return()=>{this.removeEventListener(e,r,i,n)}}removeEventListener(e,r,i,n){if(e.removeEventListener(r,i,n),e instanceof Element){const o=this.listeners.get(e);if(o){const a=o.get(r);a&&(a.delete(i),a.size===0&&o.delete(r),o.size===0&&this.listeners.delete(e))}}else{const o=`${e.constructor.name}-${r}`,a=this.globalListeners.get(o);if(a){for(const s of a)if(s.listener===i){a.delete(s);break}a.size===0&&this.globalListeners.delete(o)}}}cleanupElement(e){const r=this.listeners.get(e);if(r){for(const[i,n]of r.entries())for(const o of n)e.removeEventListener(i,o);this.listeners.delete(e)}}getStats(){let e=0;for(const r of this.globalListeners.values())e+=r.size;return{globalListenerTypes:this.globalListeners.size,note:"Element listeners are tracked via WeakMap for automatic cleanup",totalGlobalListeners:e}}dispose(){for(const[e,r]of this.globalListeners.entries()){const[i,n]=e.split("-");if(!n)continue;const o=i==="Window"?window:document;for(const{listener:a,options:s}of r)o.removeEventListener(n,a,s)}this.globalListeners.clear()}};we(re,"instance",null);let Je=re;const Vn=Je.getInstance(),Wn=(t,e)=>{const r=g.useRef([]);g.useEffect(()=>{if(t)return r.current.forEach(i=>i()),r.current=[],e.forEach(({type:i,listener:n,options:o})=>{const a=Vn.addEventListener(t,i,n,o);r.current.push(a)}),()=>{r.current.forEach(i=>i()),r.current=[]}},[t,e])},Kn=t=>{const[e,r]=g.useState(""),[i,n]=g.useState(null);g.useEffect(()=>{const a=document.querySelector(t);n(a),a&&r(a.value)},[t]);const o=()=>{if(i){const a=i.value;r(a)}};return Wn(i,[{listener:o,type:"input"},{listener:o,type:"change"},{listener:o,type:"keyup"},{listener:o,type:"paste"},{listener:o,type:"cut"}]),Ar(i,a=>{for(const s of a)s.type==="attributes"&&s.attributeName==="value"&&o()},{attributeFilter:["value"],attributes:!0,characterData:!0,childList:!0,subtree:!0},`textarea-observer-${t}`),e},or=()=>{const t=navigator.userAgent.toLowerCase(),e=t.includes("firefox"),r=t.includes("chrome")&&!t.includes("edge"),i=t.includes("safari")&&!t.includes("chrome"),n=t.includes("edge")||t.includes("edg/"),o=t.includes("webkit");let a="Unknown",s="";return e?(a="Firefox",s=t.match(/firefox\/(\d+)/)?.[1]||""):r?(a="Chrome",s=t.match(/chrome\/(\d+)/)?.[1]||""):i?(a="Safari",s=t.match(/version\/(\d+)/)?.[1]||""):n&&(a="Edge",s=t.match(/edg?\/(\d+)/)?.[1]||""),{isChrome:r,isEdge:n,isFirefox:e,isSafari:i,isWebkit:o,name:a,version:s}},ar=t=>{const e={cssProperties:{},offsetX:0,offsetY:0,subPixelX:0,subPixelY:0};return t.isFirefox?{...e,cssProperties:{MozOsxFontSmoothing:"grayscale","scrollbar-width":"none","text-rendering":"optimizeLegibility"},offsetY:-.5}:t.isSafari?{...e,cssProperties:{WebkitFontSmoothing:"antialiased",WebkitTextStroke:"0px transparent","text-rendering":"optimizeLegibility"},subPixelX:.5}:t.isEdge?{...e,cssProperties:{"font-smooth":"always","text-rendering":"optimizeLegibility"},subPixelY:.25}:t.isChrome||t.isWebkit?{...e,cssProperties:{WebkitFontSmoothing:"antialiased","text-rendering":"optimizeLegibility"}}:e},sr=t=>{document.querySelectorAll('[data-code-type="hybrid-highlighter"]').forEach(r=>{const i=r;i.style.setProperty("--highlight-offset-x",`${t.offsetX}px`),i.style.setProperty("--highlight-offset-y",`${t.offsetY}px`),i.style.setProperty("--highlight-sub-pixel-x",`${t.subPixelX}px`),i.style.setProperty("--highlight-sub-pixel-y",`${t.subPixelY}px`),Object.entries(t.cssProperties).forEach(([n,o])=>{i.style.setProperty(n,o)})}),$("🎯 Applied alignment adjustments:",t)},lr=()=>{const t=document.querySelectorAll('[data-code-type="hybrid-highlighter"]'),e=[];let r=0;return t.forEach((n,o)=>{const a=n,s=a.parentElement;if(!s){e.push(`Container ${o}: No parent element found`);return}const l=s.querySelector("textarea");if(!l){e.push(`Container ${o}: No textarea found`);return}const d=window.getComputedStyle(a),f=window.getComputedStyle(l),h=["fontSize","fontFamily","lineHeight","letterSpacing","wordSpacing","paddingTop","paddingLeft"];let c=0;h.forEach(y=>{d.getPropertyValue(y)===f.getPropertyValue(y)?c++:e.push(`Container ${o}: ${y} mismatch - Container: ${d.getPropertyValue(y)}, Textarea: ${f.getPropertyValue(y)}`)});const b=c/h.length*100;r+=b,$(`Container ${o} alignment accuracy: ${b.toFixed(1)}%`)}),{accuracy:t.length>0?r/t.length:0,issues:e}},cr=()=>{const t=window.devicePixelRatio||1;let e=t;return Math.abs(e-1.25)<.1?e=1.25:Math.abs(e-1.5)<.1?e=1.5:Math.abs(e-1.75)<.1?e=1.75:Math.abs(e-2)<.1&&(e=2),$(`🔍 Detected zoom level: ${e} (devicePixelRatio: ${t})`),e},dr=t=>{if(t<=1)return{};const e={};return t>=1.25&&(e.subPixelX=.25),t>=1.5&&(e.subPixelY=.5),t>=2&&(e.offsetX=1,e.offsetY=1),e},ur=()=>{const t=or(),e=cr(),r=ar(t),i=dr(e),n={...r,cssProperties:{...r.cssProperties,...i.cssProperties},offsetX:(r.offsetX||0)+(i.offsetX||0),offsetY:(r.offsetY||0)+(i.offsetY||0),subPixelX:(r.subPixelX||0)+(i.subPixelX||0),subPixelY:(r.subPixelY||0)+(i.subPixelY||0)};$(`🌐 Detected browser: ${t.name} ${t.version}`),$(`🔍 Detected zoom level: ${e}`),sr(n),setTimeout(()=>{const{accuracy:o,issues:a}=lr();$(`📊 Alignment accuracy after fixes: ${o.toFixed(1)}%`),a.length>0&&Ft("⚠️ Remaining alignment issues:",a)},200)};typeof window<"u"&&(window.detectBrowser=or,window.getBrowserAlignmentAdjustments=ar,window.applyAlignmentAdjustments=sr,window.testAlignmentAccuracy=lr,window.detectZoomLevel=cr,window.getZoomAlignmentAdjustments=dr,window.autoFixAlignment=ur);const pr=g.memo(({parentId:t})=>{const e=g.useRef(null),[r,i]=g.useState(""),{styles:n,theme:o}=Fr(),a=Kn(`${t} label textarea`),s=g.useMemo(()=>gradioApp().querySelector(`${t} label textarea`),[t]),l=li(s),d=ci(s);g.useEffect(()=>{s&&a!==void 0&&i(a)},[s,a]),g.useEffect(()=>{!s||!o||(s.style.color="transparent",s.style.caretColor=o.colorSuccess,s.style.background="transparent")},[s,o]),g.useEffect(()=>{e.current&&d&&(e.current.scrollTop=d.top||0,e.current.scrollLeft=d.left||0)},[d?.top,d?.left]),g.useEffect(()=>{if(!e.current||!s)return;const c=()=>{ur()},b=setTimeout(c,150),y=()=>{clearTimeout(b),setTimeout(c,100)};return window.addEventListener("resize",y),()=>{clearTimeout(b),window.removeEventListener("resize",y)}},[s]);const f=g.useMemo(()=>t.includes("txt2img_prompt")&&!t.includes("neg")?"high":"normal",[t]),h=g.useMemo(()=>{if(!s)return{};const c=window.getComputedStyle(s),b=navigator.userAgent.toLowerCase().includes("firefox"),y=navigator.userAgent.toLowerCase().includes("webkit"),x=navigator.userAgent.toLowerCase().includes("safari")&&!navigator.userAgent.toLowerCase().includes("chrome");return{MozOsxFontSmoothing:c.MozOsxFontSmoothing||"grayscale",MozTabSize:c.MozTabSize||"8",MozTextSizeAdjust:c.MozTextSizeAdjust||"100%",WebkitFontSmoothing:c.WebkitFontSmoothing||"antialiased",WebkitTextSizeAdjust:c.WebkitTextSizeAdjust||"100%",backfaceVisibility:"hidden",border:"none",borderRadius:c.borderRadius,boxSizing:c.boxSizing,fontFamily:c.fontFamily,fontFeatureSettings:c.fontFeatureSettings||"normal",fontKerning:c.fontKerning||"auto",fontSize:c.fontSize,fontSmooth:c.fontSmooth||"always",fontStretch:c.fontStretch,fontStyle:c.fontStyle,fontVariant:c.fontVariant,fontVariantNumeric:c.fontVariantNumeric||"normal",fontWeight:c.fontWeight,letterSpacing:c.letterSpacing,lineHeight:c.lineHeight,margin:c.margin,marginBottom:c.marginBottom,marginLeft:c.marginLeft,marginRight:c.marginRight,marginTop:c.marginTop,overflowWrap:c.overflowWrap,padding:c.padding,paddingBottom:c.paddingBottom,paddingLeft:c.paddingLeft,paddingRight:c.paddingRight,paddingTop:c.paddingTop,perspective:"1000px",tabSize:c.tabSize||"8",textAlign:c.textAlign,textIndent:c.textIndent,textRendering:c.textRendering,textSizeAdjust:c.textSizeAdjust||"100%",transform:"translateZ(0)",whiteSpace:c.whiteSpace,wordBreak:c.wordBreak,wordSpacing:c.wordSpacing,...b&&{MozUserSelect:"none",scrollbarWidth:"none"},...y&&{WebkitAppearance:"none",WebkitUserSelect:"none"},...x&&{WebkitTextStroke:"0px transparent"}}},[s,l]);return u.jsx("div",{className:n.container,"data-code-type":"hybrid-highlighter",ref:e,style:{height:l?.height||0,left:0,overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,userSelect:"none",width:l?.width||0,zIndex:1,...h},children:u.jsx(Ir,{maxLength:5e3,parentId:t,priority:f,children:r})})});pr.displayName="ReplacementHighlighter";const fr=g.memo(({parentId:t})=>u.jsx(pr,{parentId:t}));fr.displayName="PromptHighlightIndex";const Gn=g.memo(({children:t})=>{const e=B(r=>r.loading);return u.jsx(it,{children:e===!1&&t})}),$e=(t,e)=>{if(document.querySelector(e))return;const r=document.createElement("div");r.id=e.replace("#",""),gradioApp().querySelector(t).insertBefore(r,gradioApp().querySelector(t).firstChild),Qe(r).render(u.jsx(g.StrictMode,{children:u.jsx(g.Suspense,{fallback:"loading...",children:u.jsx(Gn,{children:u.jsx(fr,{parentId:t})})})}))},Xn=()=>{try{$e("#txt2img_prompt","#lobe_txt2img_prompt"),$e("#img2img_prompt","#lobe_img2img_prompt"),$e("#txt2img_neg_prompt","#lobe_txt2img_neg_prompt"),$e("#img2img_neg_prompt","#lobe_img2img_neg_prompt"),window.ignore_ids_for_localization.lobe_highlighter="SPAN",T.success("🤯 [module] inject - PromptHighlight")}catch(t){T.error("🤯 [module] inject - PromptHighlight",t)}},Jn=t=>C`
  html,
  body,
  #__next,
  .ant-app {
    position: relative;
    overscroll-behavior: none;

    ::-webkit-scrollbar {
      display: none;
      width: 0;
      height: 0;
    }
  }

  .ant-slider-track,
  .ant-tabs-ink-bar,
  .ant-switch-checked {
    background: ${t.colorPrimary} !important;
  }

  .ant-btn-primary:not(.ant-btn-dangerous) {
    color: ${le(t.colorPrimary)};
    background: ${t.colorPrimary};

    &:hover {
      color: ${le(t.colorPrimary)} !important;
      background: ${t.colorPrimaryHover} !important;
    }

    &:active {
      color: ${le(t.colorPrimaryActive)} !important;
      background: ${t.colorPrimaryActive} !important;
    }
  }
`,Yn=t=>te(t,"button-styles",e=>C`
  button {
    cursor: pointer;
    min-width: fit-content !important;

    &.gradio-button {
      &.tool:not(.hidden) {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 36px;
        min-width: 36px !important;
        max-width: 36px !important;
        height: ${e.controlHeight||36}px;
        min-height: var(--button-lg-tool-height) !important;
        max-height: var(--button-lg-tool-height);
        padding: 0;

        font-size: var(--text-md);
        line-height: 1;

        background: ${t.colorFillSecondary};
        border: 1px solid ${t.colorBorderSecondary};
        border-radius: ${t.borderRadius}px;

        &:hover {
          background: ${t.colorFill};
        }

        &.secondary,
        &.primary {
          overflow: hidden;
          flex: 1;

          font-size: var(--text-md);
          line-height: 1;
          text-overflow: ellipsis;

          &:active {
            box-shadow: ${t.boxShadowSecondary};
          }
        }
      }

      &.secondary {
        font-weight: 500;
        background: ${t.colorFillTertiary};
        border: 1px solid ${t.colorBorderSecondary};
        border-radius: ${t.borderRadius}px !important;

        &:hover {
          color: ${t.colorText};
          background: ${t.colorFill};
          border-color: ${t.colorBorder};
        }
      }

      &:not(.tool, .svelte-1p4r00v) {
        &.primary,
        &.secondary {
          &.lg {
            height: var(--button-lg-height) !important;
            min-height: var(--button-lg-height) !important;
            max-height: var(--button-lg-height) !important;
          }
        }
      }

      &[id$='_generate'] {
        height: var(--button-lg-height) !important;
        min-height: var(--button-lg-height) !important;
        max-height: var(--button-lg-height) !important;
      }

      &[id$='_interrupt'] {
        min-width: 0;

        color: var(--button-cancel-text-color) !important;

        background: ${t.colorError} !important;
        border: 1px solid ${t.colorError};
        border-right: none !important;
        border-radius: ${t.borderRadius}px 0 0 ${t.borderRadius}px !important;

        &:hover,
        &:active {
          background: ${t.colorErrorHover} !important;
          border: 1px solid ${t.colorErrorHover};
        }
      }

      &[id$='_skip'] {
        min-width: 0;
        background: ${t.colorBorderSecondary} !important;
        border-radius: 0 ${t.borderRadius}px ${t.borderRadius}px 0 !important;

        &:hover,
        &:active {
          background: ${t.colorBorder} !important;
        }
      }

      &#interrogate,
      &#deepbooru {
        height: auto !important;
        max-height: fit-content !important;

        font-size: 14px;
        line-height: inherit;
        white-space: break-spaces;
      }
    }
  }

  div[id^='image_buttons_'] {
    flex-wrap: wrap;

    button.gradio-button.tool {
      flex: 1;
      max-width: max(36px, 100%) !important;
      font-size: var(--text-md) !important;
    }
  }
  `),Qn=t=>C`
    .label-wrap {
      transition: padding 400ms ${t.motionEaseOut};

      > span:not(.icon) {
        display: flex;
        gap: 8px;
        align-items: center;

        font-size: var(--text-md);
        font-weight: 600;
        line-height: 1;

        transition: color 400ms ${t.motionEaseOut};

        &::before {
          content: '';

          display: block;

          width: 8px;
          height: 8px;

          background: ${t.colorPrimary};
          border-radius: 4px;
        }
      }

      &.open {
        padding-bottom: 16px;
        border-bottom: 1px dashed ${t.colorBorderSecondary};

        span {
          color: ${t.colorText};
        }
      }
    }
  `,Zn=t=>te(t,"container-styles",e=>C`
    .gradio-group,
    .gradio-row {
      gap: 12px !important;
    }

    &.gradio-box,
    &.gradio-accordion {
      &:not(.hidden):has(div) {
        margin: 0 !important;
        padding: 16px !important;
        border: 1px solid ${t.colorBorderSecondary} !important;
      }
    }

    .block.padded {
      &.gradio-box:not(.gradio-accordion) {
        padding: ${e.padding||16}px !important;
      }
    }

    .panel {
      margin: 0 !important;
      padding: 16px !important;
    }

    .compact,
    .wrap {
      gap: 12px !important;
    }

    #tabs > div {
      padding: unset;
      border: none;
    }

    #system_info {
      align-items: flex-start;
      justify-content: flex-start;
    }

    #img2img_results,
    #txt2img_results,
    #extras_results {
      position: sticky;
      top: 80px !important;
    }

    #context-menu {
      overflow: hidden;

      color: ${t.colorText};

      background: ${t.colorBgElevated} !important;
      border: 1px solid ${t.colorBorder} !important;
      border-radius: ${t.borderRadiusLG}px !important;
      box-shadow: ${t.boxShadow} !important;

      a {
        padding: 8px;
        font-weight: 400;
        color: ${t.colorText};

        &:hover {
          font-weight: 600;
          color: ${le(t.colorPrimary)};
          background: ${t.colorPrimary};
        }
      }
    }

    #tabs_extensions > .tabitem > .gap > .gradio-row {
      overflow: auto;
    }

    gradio-app #imageARPreview {
      background: ${t.colorError}4d;
      backdrop-filter: brightness(1.2);
      border-color: ${t.colorError};
      border-style: solid;
      border-width: 2px;
    }
  `),eo=t=>C`
    #root {
      /* sd-webui-prompt-all-in-one */
      .physton-highlight-prompt {
        color: ${t.colorPrimary} !important;

        -webkit-text-fill-color: ${t.colorPrimary} !important;
      }

      /* openOutpaint */
      #tab_openOutpaint {
        position: relative;
        height: 100vh;
        padding: 0 !important;

        #openoutpaint-iframe {
          width: 100% !important;
        }
      }

      /* autocomplete */
      .autocompleteResults {
        min-width: 400px;

        font-family: ${t.fontFamilyCode};
        font-size: 12px;

        background: ${t.colorBgElevated} !important;
        border-color: ${t.colorBorder} !important;
        border-radius: ${t.borderRadius}px !important;
        box-shadow: ${t.boxShadow};

        ul {
          padding: 0 !important;
        }

        li {
          border-bottom: 1px solid ${t.colorBorder};

          &:hover, &.selected {
            background: ${t.colorFillSecondary} !important;
          }

          &:nth-of-type(odd) {
            background: transparent !important;

            &:hover, &.selected {
              background: ${t.colorFillSecondary} !important;
            }
          }
        }
      }

      /* ADetailer */
      [id*='img_adetailer_ad_toprow_prompt'] {
        margin-bottom: var(--spacing-lg);
      }

      [id*='_adetailer_ad_detection_accordion'].block.padded.gradio-accordion,
      [id*='_adetailer_ad_mask_preprocessing_accordion'].block.padded.gradio-accordion,
      [id*='_adetailer_ad_inpainting_accordion'].block.padded.gradio-accordion {
        margin: var(--spacing-lg) 0 !important;

        .label-wrap.open {
          margin-bottom: 0;
          padding-bottom: 8px;
        }
      }

      /* ControlNet */
      [id$='img_controlnet'] {
        .cnet-badge.primary {
          font-size: var(--text-xs);
          line-height: 1.3;
          color: var(--body-background-fill);
          background-color: ${t.colorSuccess};
        }

        .tab-nav button {
          &.cnet-unit-active,
          &.selected.cnet-unit-active {
            color: ${t.colorSuccess} !important;
          }
        }

        .tabitem {
          .controlnet_image_controls {
            margin-top: 8px;
          }
        }
      }

      /* Aspect Ratio selector */
      [id$='2img_container_aspect_ratio'] {
        padding: 16px;
        background-color: ${t.colorBgContainer};
        border: 1px solid var(--block-border-color);
        border-radius: ${t.borderRadius}px;

        #arc_empty_space {
          display: none;
        }

        button[id$='_calculator_button'] {
          max-width: fit-content !important;
          height: var(--button-lg-tool-height) !important;
          min-height: var(--button-lg-tool-height) !important;
          max-height: var(--button-lg-tool-height) !important;
          padding: 0 1.25em !important;

          font-size: var(--text-md);
          font-weight: 500;

          border: none;
          border-radius: ${t.borderRadius}px;
        }

        #arc_panel {
          padding: 8px 0 0 !important;

          .block.gradio-markdown.padded.hide-container {
            .hide,
            .pending {
              display: none;
            }
          }

          .gradio-column:has([id$='_arc_tool_buttons']) {
            justify-content: space-between;
          }
        }
      }

      [id$='2img_container_aspect_ratio'],
      [id$='2img_row_resolutions'] {
        gap: 0.5em !important;
      }

      /* Inpaint Anything */
      #padding_btn {
        margin-top: auto;
      }

      /* Model Toolkit */
      #tab_checkpoint_toolkit {
        button {
          align-self: end;
        }
      }

      /* WebUI txt2img/img2img Extra options */
      .gr-group:has([id^='extra_options_'].gradio-accordion) {
        padding: 4px 0 !important;
      }

      .gr-group:has([id^='extra_options_'].gradio-group) {
        padding: 0 0 4px !important;
      }

      .gr-group:has([id^='extra_options_']) {
        background: transparent;

        [id^='extra_options_'] {
          &.gradio-accordion {
            background-color: ${t.colorBgContainer};
          }

          &.gradio-group {
            padding: 16px;
          }

          .styler,
          .gap,
          .form {
            gap: 16px;
          }
        }
      }

      /* WebUI Soft inpainting */
      .gr-group:has(#soft_inpainting_enabled) {
        padding: 0 !important;
        background: transparent;

        #soft_inpainting_enabled {
          &.gradio-accordion {
            background-color: ${t.colorBgContainer};
          }

          .styler {
            gap: 16px;
          }
        }
      }

      /* ComfyUI */
      #comfyui_webui_container {
        height: calc(100% - ${ee}px) !important;
      }
    }
  `,to=t=>{const e=C`
    background-color: ${t.colorBgContainer};
    background-image: linear-gradient(45deg, ${t.colorFillTertiary} 25%, transparent 25%),
      linear-gradient(-45deg, ${t.colorFillTertiary} 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, ${t.colorFillTertiary} 75%),
      linear-gradient(-45deg, transparent 75%, ${t.colorFillTertiary} 75%);
    background-position:
      0 0,
      0 10px,
      10px -10px,
      -10px 0;
    background-size: 20px 20px;
    border: 2px solid ${t.colorBorderSecondary} !important;
    border-radius: ${t.borderRadius}px !important;
  `;return C`
    .livePreview,
    .gradio-gallery,
    .gradio-image,
    .gradio-video,
    .gradio-file {
      ${e}
    }

    div.block {
      &.livePreview,
      &.gradio-gallery,
      &.gradio-image,
      &.gradio-video,
      &.gradio-file {
        ${e}
      }
    }

    div.svelte-awbtu4 {
      .livePreview,
      .gradio-gallery,
      .gradio-image,
      .gradio-video,
      .gradio-file {
        ${e}
      }
    }

    .block.gradio-gallery {
      .thumbnail-item {
        position: unset;
        background: ${t.colorBgContainer} !important;
        box-shadow: none;

        &.thumbnail-small {
          transform: none;
          border-radius: 4px;
          transition: var(--button-transition);
        }

        &.thumbnail-lg {
          border-radius: 5px;
          transition: var(--button-transition);
        }

        &:hover {
          transform: translateY(-2px);
          box-shadow:
            0 0 0 1px ${t.colorBorder},
            var(--thumbnail-shadow);
        }

        &.thumbnail-small:hover {
          transform: none;
          box-shadow: 0 0 0 1px ${t.colorBorder};
        }
      }

      > .grid-wrap {
        margin: -52px;
        padding: 60px;
      }
    }

    [id$='_gallery_container'] {
      min-height: 470px;

      > div:not([id$='_generate_box']) {
        flex-grow: 1;

        [id$='_gallery'] {
          flex-grow: 1;
        }
      }
    }
  `},ro=t=>C`
    .block.gradio-checkbox {
      margin: 0 !important;
    }

    .block.gradio-slider {
      input[type='number'] {
        margin-left: 12px;
      }
    }

    label:has(input[type='radio']),
    label:has(input[type='checkbox']) {
      border-radius: ${t.borderRadius}px !important;
    }

    input {
      &:not([type='range'], [type='checkbox'], [type='number'], [type='radio'], .border-none) {
        resize: none;

        overflow: hidden;

        width: 100%;
        height: var(--button-lg-tool-height) !important;

        text-overflow: ellipsis;
        white-space: nowrap;

        border-radius: ${t.borderRadius}px;
      }

      &[type='checkbox'],
      &[type='radio'] {
        cursor: pointer;

        flex: 0;

        width: ${t.fontSize}px;
        min-width: ${t.fontSize}px;
        max-width: ${t.fontSize}px;
        height: ${t.fontSize}px;
        min-height: ${t.fontSize}px;
        max-height: ${t.fontSize}px;

        appearance: none !important;
      }

      &[type='checkbox'] {
        --ring-color: transparent;

        position: relative;

        line-height: var(--line-sm);

        background-color: ${t.colorFillTertiary} !important;
        border: 1px solid ${t.colorBorder} !important;
        border-radius: ${t.borderRadiusSM}px !important;

        &:checked {
          background-color: ${t.colorPrimary} !important;
          background-image: var(--checkbox-check) !important;
          border-color: ${t.colorPrimaryBorder} !important;
        }
      }

      &[type='number'] {
        height: var(--button-lg-tool-height) !important;
        border-radius: ${t.borderRadius}px;
      }
    }
  `,io=()=>C`
    [id$='_settings'] {
      label.svelte-1ojmf70 {
        overflow: hidden;
        display: block !important;
      }
    }

    label {
      position: relative;
      min-width: 64px;
      text-overflow: ellipsis;
      white-space: nowrap;

      &.svelte-1pie7s6 {
        display: unset !important;
      }

      > span.svelte-1gfkn6j {
        overflow: hidden;
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  `,no=t=>C`
  #lightboxModal {
    background-color: var(--popup-overlay) !important;
    backdrop-filter: saturate(120%) blur(80px);
    outline: none;

    > img:not(.modalImageFullscreen) {
      box-shadow: var(--lightbox-img-shadow);
    }
  }

  .modalControls {
    transition: var(--button-transition) !important;

    &:hover {
      background-color: transparent !important;
    }

    .cursor {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;

      width: 32px !important;
      height: 32px !important;

      background-color: ${t.colorFillTertiary};
      backdrop-filter: saturate(120%) blur(80px);
      border-radius: ${t.borderRadius}px;

      > svg {
        width: 20px !important;
        height: 20px !important;
      }

      &:hover {
        color: ${t.colorPrimary} !important;
        background-color: ${t.colorFillSecondary} !important;
      }
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 32px !important;

      font-size: 35px !important;
      color: ${t.colorTextDescription} !important;
      text-align: center;
      text-shadow: none !important;

      transition: var(--button-transition);

      &:hover,
      &:focus {
        color: ${t.colorPrimary} !important;
      }
    }
  }

  .modalPrev,
  .modalNext {
    top: 0 !important;
    transform: translate(0, calc(50% + 63px)) !important;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 44px !important;
    height: 50%;
    padding: 8px !important;

    font-size: 20px !important;
    font-weight: 600 !important;
    color: ${t.colorTextDescription} !important;

    background-color: ${t.colorFillTertiary};
    border-radius: 0 ${t.borderRadius}px ${t.borderRadius}px 0 !important;

    transition: var(--button-transition) !important;

    svg {
      width: 20px !important;
      height: 20px !important;
    }
  }

  .modalNext {
    border-radius: ${t.borderRadius}px 0 0 ${t.borderRadius}px !important;
  }

  .modalPrev:hover,
  .modalNext:hover {
    color: ${t.colorPrimary} !important;
    background-color: ${t.colorFillSecondary} !important;
  }
`,oo=t=>C`
  .gradio-dropdown {
    .wrap,
    input {
      cursor: pointer;
    }

    .container .wrap {
      .wrap-inner input {
        font-size: var(--text-sm);
        line-height: 0;
      }
    }
  }

  .dropdown-arrow {
    margin: 0 !important;
  }

  ul.options {
    display: block !important;

    margin: 0 !important;
    padding: 4px !important;

    background: ${t.colorBgElevated} !important;
    border: 1px solid ${t.colorBorder} !important;
    border-radius: ${t.borderRadius}px !important;
    box-shadow: ${t.boxShadow};

    li {
      overflow: hidden;
      display: block !important;

      padding: 4px 8px !important;

      line-height: 1 !important;
      text-overflow: ellipsis;
      white-space: nowrap;

      border-radius: ${t.borderRadiusSM}px !important;

      &.selected {
        color: ${t.colorText} !important;
        background: ${t.colorFill} !important;
      }

      &.active:not(.selected) {
        color: black !important;
        background: ${t.yellow} !important;
      }

      &:hover {
        color: ${t.colorText} !important;
        background: ${t.colorFillSecondary} !important;
      }
    }
  }
`,ao=t=>C`
  .global-popup {
    .global-popup-close {
      background-color: ${t.colorBgMask} !important;
      backdrop-filter: blur(4px);

      &::before {
        font-size: 24px !important;
        line-height: 24px !important;
      }
    }

    .global-popup-inner {
      max-height: unset;

      > div {
        border-radius: ${t.borderRadiusLG}px !important;
        box-shadow: ${t.boxShadow} !important;
      }

      .popup-metadata {
        overflow: auto;

        width: 75vw;
        max-height: 85vh;
        padding: 32px;

        font-family: ${t.fontFamilyCode};
        color: ${t.colorText};
        word-break: break-word;

        background: ${t.colorBgLayout};
        border-radius: ${t.borderRadiusLG}px !important;
        border-radius: ${t.borderRadius}px;
        box-shadow: ${t.boxShadow} !important;
      }

      .edit-user-metadata {
        > div:not(.edit-user-metadata-buttons):not(:last-child) {
          margin: 0 0 8px;
        }

        .standalone-card-preview {
          cursor: default;
          display: contents;
          width: 100%;
          height: auto;

          > img {
            position: relative;
          }
        }
      }

      .popup-dialog,
      .edit-user-metadata {
        width: 50vw !important;
      }
    }
  }
`,so=di`
      0% {
        background-position: 0 0;
      }
      100% {
        background-position: 24px 24px;
      }
    `,lo=t=>C`
  .progress-container {
    flex-direction: column;
  }

  .eta-bar {
    overflow: hidden;

    opacity: 1 !important;
    background: ${t.colorFillQuaternary} !important;
    backdrop-filter: saturate(180%) blur(10px);
    border: 1px solid ${t.colorBorder};
    border-radius: ${t.borderRadius}px;
  }

  .wrap.svelte-j1gjts:has(div) {
    overflow: hidden;

    min-height: 36px;

    background: ${t.colorBgContainer} !important;
    border-radius: ${t.borderRadius}px;
    box-shadow: 0 0 0 2px ${t.colorBgContainer};

    .meta-text,
    .meta-text-center {
      font-size: 12px;
      color: ${t.colorTextDescription};
    }
  }

  .progressDiv {
    position: relative !important;
    top: 0 !important;
    overflow: hidden;
    background: ${t.colorFillSecondary} !important;

    > .progress {
      position: relative;

      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      font-family: var(--font-mono);
      font-size: var(--text-md);
      font-weight: 600 !important;
      text-shadow: 0 1px 4px rgb(0 0 0 / 80%);

      &::before {
        content: '';

        position: absolute;
        z-index: 1;
        inset: 0;

        overflow: hidden;

        background-image: linear-gradient(
          -45deg,
          rgba(255, 255, 255, 20%) 25%,
          transparent 25%,
          transparent 50%,
          rgba(255, 255, 255, 20%) 50%,
          rgba(255, 255, 255, 20%) 75%,
          transparent 75%,
          transparent
        );
        background-size: 24px 24px;

        animation: ${so} 2s linear infinite;
      }

      &::after {
        content: '';

        position: absolute;
        z-index: 1;
        inset: 0;

        overflow: hidden;

        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 40%), transparent 50%);
      }
    }
  }
`,co=t=>C`
  input[type='range'] {
    cursor: pointer;

    height: 3px;
    margin-top: 8px;

    appearance: none;
    background: ${t.colorTextQuaternary};
    border-radius: ${t.borderRadiusXS}px;
    outline: none;

    transition: var(--button-transition);

    &::-webkit-slider-thumb {
      width: 12px;
      height: 16px;

      appearance: none;
      background: ${t.colorPrimary};
      border: 1px solid ${t.colorPrimary};
      border-radius: ${t.borderRadiusSM}px;

      transition: var(--button-transition);

      &:hover,
      &:active {
        background: ${t.colorPrimaryHover};
        border-color: ${t.colorPrimaryHover};
      }
    }

    &:hover {
      background: ${t.colorPrimaryHover};
    }

    &:active {
      background: ${t.colorPrimaryHover};
    }
  }
`,uo=t=>C`
  table {
    overflow: auto;
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    padding: 12px !important;
    border: 1px solid ${t.colorBorderSecondary} !important;
  }

  th {
    background: ${t.colorFillQuaternary};
    border-bottom: 4px solid var(--color-border) !important;
  }

  tr {
    &:nth-of-type(odd) td {
      background: ${t.colorFillQuaternary};
    }

    &:hover td,
    &:nth-of-type(odd):hover td {
      background: ${t.colorFillSecondary};
    }
  }
`,po=t=>C`
  .tabitem,
  .gradio-tabitem {
    padding: 16px !important;
    background: ${t.colorBgContainer};
    border: none !important;
    border-radius: ${t.borderRadius}px;
  }

  #tabs {
    > .tabitem.gradio-tabitem {
      background: transparent !important;
    }
  }

  .tab-nav {
    gap: 8px;
    margin-bottom: 8px;
    border: none !important;

    button {
      cursor: pointer;

      display: block;
      flex: 1 !important;

      min-width: 100px;
      padding: 8px !important;

      font-size: var(--text-md);
      color: ${t.colorTextTertiary} !important;

      background: ${t.colorFillTertiary} !important;
      border: none !important;
      border-radius: 4px !important;

      transition: var(--button-transition);

      &:hover {
        color: ${t.colorText} !important;
        background: ${t.colorFill} !important;
        border: none !important;
      }

      &.selected {
        font-weight: 600;
        color: ${t.colorText} !important;

        background: ${t.colorFillSecondary} !important;
        border: none !important;
        border-bottom: 2px solid ${t.colorPrimary} !important;
        border-bottom-right-radius: 0 !important;
        border-bottom-left-radius: 0 !important;
      }
    }
  }

  #tab_settings {
    #settings .tab-nav {
      width: 15%;

      button {
        width: 100%;
        background: transparent !important;

        &.selected {
          color: ${t.colorPrimary} !important;
          background: transparent !important;
          border: none !important;
          border-radius: 0 !important;
        }
      }

      .settings-category {
        text-decoration: none;
        text-transform: uppercase;
      }

      #settings_show_all_pages {
        width: auto;
        background: ${t.colorFillTertiary} !important;
        border: 1px solid ${t.colorBorderSecondary};
        border-radius: ${t.borderRadius}px !important;

        &:hover {
          background: ${t.colorFill} !important;
          border-color: ${t.colorBorder} !important;
        }
      }
    }

    .tabitem {
      margin-left: 15%;
    }

    #settings_search {
      margin: 0 0 var(--spacing-xl);
    }
  }
`,fo=()=>C`
  @media (max-width: 575px) {
    #quicksettings {
      > div,
      > fieldset {
        flex: 1 !important;
        max-width: unset !important;
      }
    }

    .tabs {
      .tabitem,
      .gradio-tabitem {
        padding: 8px !important;
      }

      #img2img_results,
      #txt2img_results,
      #extras_results {
        position: relative;
        top: 0 !important;
        width: 100%;

        &.mobile {
          margin-top: 8px;
        }
      }

      [id$='_settings'] {
        width: 100%;
      }
    }

    #tab_settings {
      #settings .tab-nav {
        width: 35%;
      }

      .tabitem {
        margin-left: 35%;
      }
    }
  }
`,go=t=>C`
    :root,
    .dark {
      /* Core Color System - Consolidated from 22 to 8 tokens */
      --color-primary: ${t.colorPrimary};
      --color-primary-hover: ${t.colorPrimaryHover};
      --color-primary-active: ${t.colorPrimaryActive};
      --color-text: ${t.colorText};
      --color-text-secondary: ${t.colorTextSecondary};
      --color-text-tertiary: ${t.colorTextTertiary};
      --color-bg: ${t.colorBgContainer};
      --color-bg-elevated: ${t.colorBgElevated};

      /* Spacing System - Consolidated from 7 to 4 tokens */
      --spacing-sm: ${t.paddingSM}px;
      --spacing-md: ${t.paddingMD}px;
      --spacing-lg: ${t.paddingLG}px;
      --spacing-xl: ${t.paddingXL}px;

      /* Border Radius - Consolidated from 7 to 3 tokens */
      --radius-sm: ${t.borderRadiusSM}px;
      --radius-md: ${t.borderRadius}px;
      --radius-lg: ${t.borderRadiusLG}px;

      /* Typography - Consolidated from 7 to 4 tokens */
      --text-sm: ${t.fontSizeSM}px;
      --text-md: ${t.fontSize}px;
      --text-lg: ${t.fontSizeLG}px;
      --text-xl: ${t.fontSizeXL}px;
      --font-family: ${t.fontFamily};
      --font-family-mono: ${t.fontFamilyCode};

      /* Essential UI Tokens - Consolidated from 20 to 8 tokens */
      --bg-layout: ${t.colorBgLayout};
      --bg-container: ${t.colorBgContainer};
      --border-color: ${t.colorBorderSecondary};
      --border-color-accent: ${t.colorBorder};
      --link-color: ${t.colorInfoText};
      --link-color-hover: ${t.colorInfoTextHover};
      --shadow-base: ${t.boxShadowSecondary};
      --shadow-elevated: ${t.boxShadow};

      /* Component Tokens - Consolidated from 35 to 12 tokens */
      --block-bg: var(--bg-container);
      --block-border: 1px solid var(--border-color);
      --block-padding: var(--spacing-lg) var(--spacing-xl);
      --block-radius: var(--radius-md);
      --label-bg: ${t.colorFillSecondary};
      --label-text: var(--color-text);
      --label-padding: var(--spacing-sm) var(--spacing-lg);
      --container-radius: var(--radius-lg);
      --panel-bg: var(--bg-container);
      --form-gap: 1px;
      --layout-gap: var(--spacing-xl);
      --code-bg: var(--bg-container);

      /* Form Controls - Consolidated from 24 to 8 tokens */
      --checkbox-bg: ${t.colorFillTertiary};
      --checkbox-bg-hover: ${t.colorFillSecondary};
      --checkbox-bg-selected: var(--color-primary);
      --checkbox-border: 1px solid var(--border-color);
      --checkbox-border-selected: 1px solid var(--color-primary);
      --checkbox-radius: ${t.borderRadiusXS}px;
      --checkbox-label-padding: var(--spacing-md);
      --checkbox-label-text: var(--color-text);

      /* Input & Interactive Elements - Consolidated from 29 to 10 tokens */
      --error-bg: ${t.colorErrorBg};
      --error-border: 1px solid ${t.colorErrorBorder};
      --error-text: ${t.colorErrorText};
      --input-bg: ${t.colorFillTertiary};
      --input-bg-focus: ${t.colorFillSecondary};
      --input-border: 1px solid var(--border-color);
      --input-border-focus: 1px solid var(--border-color-accent);
      --input-padding: var(--spacing-lg);
      --input-placeholder: ${t.colorTextQuaternary};
      --input-radius: var(--radius-md);

      /* Button System - Consolidated from 36 to 12 tokens */
      --button-border: 1px solid var(--border-color);
      --button-primary-bg: var(--color-primary);
      --button-primary-bg-hover: var(--color-primary-hover);
      --button-primary-text: ${le(t.colorPrimary)};
      --button-secondary-bg: ${t.colorFillSecondary};
      --button-secondary-bg-hover: ${t.colorFill};
      --button-secondary-text: var(--color-text-secondary);
      --button-cancel-bg: ${t.colorError};
      --button-cancel-bg-hover: ${t.colorErrorHover};
      --button-cancel-text: ${le(t.colorError)};
      --button-padding: var(--spacing-md) var(--spacing-lg);
      --button-radius: var(--radius-md);

      /* Utility Tokens - Consolidated from remaining tokens */
      --transition-base: all 0.12s ${t.motionEaseInOut};
      --button-height-lg: 44px;
      --button-height-tool: 36px;
      --overlay-bg: ${t.colorBgMask};
      --shadow-thumbnail: var(--shadow-elevated);
      --shadow-lightbox: var(--shadow-base);
    }

    .dark {
      --checkbox-check: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
      --radio-circle: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
    }
  `,ho=ui(({theme:t})=>[go(t),Jn(t),Yn(t),Zn(t),to(t),ro(t),io(),Qn(t),oo(t),lo(t),co(t),uo(t),po(t),ao(t),eo(t),no(t),fo()]);function mo(t,e={}){const{preloadDelay:r,preloadTrigger:i}=e,n=g.lazy(t);if(n.preload=t,r&&r>0&&setTimeout(()=>{n.preload().catch(()=>{})},r),i){const o=()=>{i()?n.preload().catch(()=>{}):setTimeout(o,100)};setTimeout(o,0)}return n}const bo=new Map;function yo(t,e){const r=performance.now();return e().then(i=>{const n=performance.now()-r;return bo.set(t,n),i},i=>{throw performance.now()-r,i})}function nt(t,e,r={}){const{priority:i="medium",preloadOnFeatureEnabled:n=!0,...o}=r,s=mo(()=>yo(`feature-${t}`,e),o);return n&&setTimeout(()=>{setTimeout(()=>{s.preload().catch(()=>{})},i==="high"?1e3:i==="medium"?3e3:5e3)},500),s}const xo=g.memo(()=>(g.useEffect(()=>{try{const t=gradioApp().querySelector("#txt2img_toprow"),e=gradioApp().querySelector("#txt2img_settings"),r=gradioApp().querySelector("#txt2img_generate_box"),i=gradioApp().querySelector("#txt2img_gallery_container");t&&e&&r&&i&&(e.prepend(t),i.prepend(r));const n=gradioApp().querySelector("#img2img_toprow"),o=gradioApp().querySelector("#img2img_settings"),a=gradioApp().querySelector("#img2img_generate_box"),s=gradioApp().querySelector("#img2img_gallery_container");o&&n&&a&&s&&(o.prepend(n),s.prepend(a));const l=gradioApp().querySelector("#extras_generate"),d=gradioApp().querySelector("#extras_results");l&&d&&((d?.parentNode).id="#extras_gallery_container",d.prepend(l)),T.success("🤯 [layout] inject - Split Previewer")}catch(t){T.error("🤯 [layout] inject - Split Previewer",t)}},[]),null)),wo=()=>{const t=gradioApp().querySelectorAll('[id$="_prompt_container"] textarea');if(t)for(const e of t)e.classList.remove("scroll-hide"),e.style.height="auto"},_e=74,Ee=98,vo=be(({css:t,token:e,stylish:r,isDarkMode:i,responsive:n},{isPromptResizable:o,layoutSplitPreview:a})=>({container:t`
        position: relative;
        flex: 1;
        min-width: ${a?"200px":"0"};

        .app {
          padding: 0 !important;
        }

        .gap:has(#quicksettings):first-child {
          gap: 0;
        }

        .float {
          ${r.blur};
          border: none;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          border-bottom-left-radius: 0;
        }

        [id^='html_info_']:has(div.prose) {
          p {
            color: ${e.colorTextDescription} !important;
          }
        }

        [id^='html_info_']:has(div.prose),
        [id^='html_log_']:has(div.prose) {
          .pending {
            opacity: 1;
          }
        }

        #extras_generate {
          border-radius: ${e.borderRadius}px !important;
        }

        [id$='img_styles_dialog'] {
          label {
            white-space: normal;
          }

          .gradio-row:not(:first-child) {
            margin-top: 1em;
          }
        }

        .block.border_focus {
          border-color: ${e.colorPrimary} !important;
        }

        #txt2img_results,
        #img2img_results,
        #extras_results {
          padding: 0 !important;
          background: transparent !important;
        }

        #txt2img_render,
        #img2img_render {
          display: block !important;
          margin-top: 16px;
          padding: 0 !important;
          background: transparent;
        }

        .block.gradio-html:has(div.prose) {
          display: block;

          p {
            color: ${i?e.colorPrimaryText:e.colorPrimaryTextHover};

            b {
              color: ${i?e.colorPrimaryText:e.colorPrimaryTextHover};
            }
          }
        }

        #tab_pnginfo {
          #pnginfo_image {
            height: auto !important;
          }

          .block.gradio-html:has(div.prose) p {
            color: ${e.colorText};
          }
        }

        [id$='_override_settings_row']:has(div.hidden) {
          display: none;
        }

        .gradio-group:has(.gradio-group:has(div:empty)) {
          display: none;
        }

        ${n.mobile} {
          .gradio-row:has([id$='2img_results'], [id$='2img_results']) {
            flex-direction: column-reverse;
          }
        }

        .extra-networks {
          .tab-nav [id*='_extra_'] {
            margin: 0;
          }

          .gradio-button {
            &[id$='_extra_sortorder'],
            &[id$='_extra_refresh'] {
              align-self: center;
            }

            &.secondary.lg[id$='_extra_refresh'] {
              max-width: fit-content;
              height: var(--button-lg-tool-height) !important;
              min-height: var(--button-lg-tool-height) !important;
              max-height: var(--button-lg-tool-height) !important;

              font-size: var(--text-md);
            }
          }
        }

        .extra-network-cards .card {
          box-shadow: 0 0 0 3px ${e.colorFillSecondary};
          transition: var(--button-transition);

          &:hover {
            box-shadow: 0 0 0 3px ${e.colorPrimary};
          }

          .actions {
            background: rgb(0 0 0 / 30%);
            backdrop-filter: saturate(120%) blur(4px);
            box-shadow: none;

            .name {
              font-size: var(--text-lg);
              word-break: break-word;
              line-break: auto;
            }

            &:hover {
              .description {
                max-height: none;
              }
            }
          }
        }
      `,splitView:t`
        #txt2img_toprow,
        #img2img_toprow {
          flex-direction: column !important;
          padding: 0 !important;
          background: transparent !important;
        }
      `,textares:t`
        [id$='2img_prompt'],
        [id$='2img_neg_prompt'] {
          textarea {
            resize: ${o?"vertical":"none"};

            overflow-y: auto;

            padding: 8px !important;

            font-family: ${e.fontFamilyCode} !important;
            font-size: 13px !important;
            line-height: 1.5 !important;
            word-wrap: break-word !important;
            white-space: pre-wrap !important;

            transition:
              all 0.3s,
              height 0s;
          }
        }

        [id$='2img_prompt'] > label > textarea {
          color: ${e.colorSuccessTextHover};

          &:focus {
            color: ${e.colorSuccessText};
          }
        }

        [id$='2img_neg_prompt'] > label > textarea {
          color: ${e.colorErrorTextHover};

          &:focus {
            color: ${e.colorError};
          }
        }

        .block.token-counter {
          z-index: 10 !important;
          top: -14px;
          right: 4px;
          scale: 0.8;

          background: ${e.colorBgContainer} !important;
          border-radius: 0.4em !important;

          > .translucent {
            display: none;
          }

          span {
            display: inline-block;
            font-family: var(--font-mono);
            border: 2px solid ${e.colorFillSecondary} !important;
          }

          span,
          &.error span {
            box-shadow: none;
          }
        }

        #lobe_txt2img_prompt .prompt_editor {
          min-height: ${_e}px;
          max-height: ${o?"unset":`${_e}px`};
        }

        #lobe_img2img_prompt .prompt_editor {
          min-height: ${Ee}px;
          max-height: ${o?"unset":`${Ee}px`};
        }

        #txt2img_prompt,
        #txt2img_neg_prompt {
          textarea {
            min-height: ${_e}px;
            max-height: ${o?"unset":`${_e}px`};
          }
        }

        #img2img_prompt,
        #img2img_neg_prompt {
          textarea {
            min-height: ${Ee}px;
            max-height: ${o?"unset":`${Ee}px`};
          }
        }
      `,txt2img:t`
        button[id$='_generate'] {
          height: var(--button-lg-height) !important;
          min-height: var(--button-lg-height) !important;
          max-height: var(--button-lg-height) !important;
        }

        [id$='img_settings'],
        .gradio-column.compact {
          display: flex !important;
          flex-direction: column !important;
          gap: 12px !important;

          .gradio-column:has(#img2img_res_switch_btn, #txt2img_res_switch_btn) {
            min-width: min(36px, 100%) !important;
          }

          > div:not([id$='_script_container'], .gradio-tabs):has(div),
          > fieldset {
            gap: 12px;

            margin: 0 !important;
            padding: 16px !important;

            background-color: ${e.colorBgContainer};
            border-radius: ${e.borderRadius}px;
          }

          .gradio-tabitem:has(.gradio-image) {
            background: ${e.colorFillQuaternary};
          }

          [id$='_script_container'] {
            display: flex;
            flex-direction: column;
            gap: 12px;

            * {
              --layout-gap: 12px !important;
            }

            > div {
              display: flex;
              flex-direction: column;
              gap: 12px;

              > div.gr-group.gradio-group:has(.label-wrap) {
                gap: 12px !important;

                margin: 0 !important;
                padding: 16px !important;

                background-color: ${e.colorBgContainer}!important;
                border: 1px solid ${e.colorBorderSecondary} !important;
                border-radius: ${e.borderRadius}px !important;
              }
            }

            .gradio-accordion:not(.hidden):has(div) {
              padding: 0 !important;
              border: none !important;
            }

            #script_list,
            > .gradio-group:not(.hidden):has(div) {
              display: flex;
              flex-direction: column;

              margin: 0;
              padding: 16px;

              background-color: ${e.colorBgContainer} !important;
              border: 1px solid ${e.colorBorderSecondary} !important;
              border-radius: ${e.borderRadius}px !important;
              box-shadow: none;

              > .gradio-accordion {
                padding: 0 !important;
                border: none !important;
              }
            }

            #script_list {
              padding: 8px 16px 12px !important;
            }

            #axis_options {
              margin: 16px 0;
            }
          }
        }

        #txt2img_accordions,
        #img2img_accordions {
          flex-direction: column;
          padding: 0 !important;
          background: transparent !important;

          > div {
            background-color: ${e.colorBgContainer};
            border-radius: ${e.borderRadius}px !important;
          }

          span.icon {
            margin-right: 0;
          }
        }

        #img2img_toprow .interrogate-col {
          flex-direction: row !important;
          min-width: 100% !important;
        }

        #img2img_column_batch {
          min-width: 100% !important;
        }

        #tab_txt2img,
        #tab_img2img {
          [id$='_settings'] {
            min-width: 0 !important;

            [id^='img2img_tab_resize_'].tabitem.gradio-tabitem {
              padding: 16px 0 !important;
            }

            [id$='img_seed_extras'],
            #inpaint_controls {
              div {
                flex: 1;
              }
            }
          }

          #txt2img_gallery {
            overflow: hidden !important;
            border-radius: var(--border-radius) !important;
          }

          [id$='2img_tools'] > div {
            display: flex;
            justify-content: center;

            button {
              max-width: unset !important;
            }
          }

          .gradio-html[id^='img2img_label_copy_to'] {
            display: none;
          }

          .gradio-row[id^='img2img_copy_to'],
          .gap.compact,
          .image-buttons,
          .image_buttons_extras {
            gap: 8px !important;
          }
        }

        #npw {
          padding: 16px !important;

          background-color: ${e.colorBgContainer} !important;
          border: 1px solid ${e.colorBorderSecondary} !important;
          border-radius: ${e.borderRadius}px !important;
          box-shadow: none;
        }
      `})),So=t=>({layoutSplitPreview:t.setting.layoutSplitPreview,promptTextareaType:t.setting.promptTextareaType}),gr=g.memo(({className:t,...e})=>{const r=g.useRef(null),{mobile:i}=et(),{promptTextareaType:n,layoutSplitPreview:o}=B(So,Ze),a=g.useMemo(()=>({isPromptResizable:n==="resizable",layoutSplitPreview:o}),[n,o]),{cx:s,styles:l}=vo(a),d=g.useCallback(()=>{wo()},[]);Ye(r,".app",{debug:"[layout] inject - Content",onSuccess:d});const f=g.useMemo(()=>s(l.container,l.textares,l.txt2img,o&&l.splitView,t),[s,l,o,t]);return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:f,ref:r,...e}),o&&!i&&u.jsx(xo,{})]})});gr.displayName="Content";const $o="#5865F2",_o=g.forwardRef(function({title:e="Discord",color:r="currentColor",size:i=24,...n},o){return r==="default"&&(r=$o),u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,fill:r,viewBox:"0 0 24 24",ref:o,...n,children:[u.jsx("title",{children:e}),u.jsx("path",{d:"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"})]})}),Eo="#181717",Oo=g.forwardRef(function({title:e="GitHub",color:r="currentColor",size:i=24,...n},o){return r==="default"&&(r=Eo),u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,fill:r,viewBox:"0 0 24 24",ref:o,...n,children:[u.jsx("title",{children:e}),u.jsx("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]})}),To="#000000",Lo=g.forwardRef(function({title:e="Medium",color:r="currentColor",size:i=24,...n},o){return r==="default"&&(r=To),u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,fill:r,viewBox:"0 0 24 24",ref:o,...n,children:[u.jsx("title",{children:e}),u.jsx("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"})]})}),Co="#000000",Po=g.forwardRef(function({title:e="X",color:r="currentColor",size:i=24,...n},o){return r==="default"&&(r=Co),u.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,fill:r,viewBox:"0 0 24 24",ref:o,...n,children:[u.jsx("title",{children:e}),u.jsx("path",{d:"M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"})]})}),jo=be(({css:t,token:e})=>({icon:t`
      svg {
        fill: ${e.colorTextDescription};
      }

      &:hover {
        svg {
          fill: ${e.colorText};
        }
      }
    `})),Ro=g.memo(()=>{const{styles:t}=jo();return u.jsxs(kt,{gap:8,horizontal:!0,children:[u.jsx("a",{href:ue,rel:"noreferrer",target:"_blank",children:u.jsx(W,{className:t.icon,icon:Oo,title:"GitHub"})}),u.jsx("a",{href:At,rel:"noreferrer",target:"_blank",children:u.jsx(W,{className:t.icon,icon:Po,title:"X / Twitter"})}),u.jsx("a",{href:kr,rel:"noreferrer",target:"_blank",children:u.jsx(W,{className:t.icon,icon:_o,title:"Discord"})}),u.jsx("a",{href:Nr,rel:"noreferrer",target:"_blank",children:u.jsx(W,{className:t.icon,icon:Lo,title:"Medium"})})]})}),Ao=`© 2023-${new Date().getFullYear()} LobeHub, LLC`,Fo=be(({css:t,token:e})=>({container:t`
      font-size: 14px;
    `,description:t`
      color: ${e.colorTextDescription};
    `,logo:t`
      display: flex;
      flex: none;
      align-items: center;
      color: inherit !important;
    `,status:t`
      color-scheme: none;
      background: transparent;
      border: none !important;
    `})),Io=g.memo(()=>{const{styles:t}=Fo(),{isDarkMode:e}=pi();return u.jsxs(kt,{className:t.container,gap:16,children:[u.jsx("a",{className:t.logo,href:pe,children:u.jsx(fi,{type:"combine"})}),u.jsx("div",{children:"Empowering your AI dreams"}),u.jsx("div",{className:t.description,children:Ao}),u.jsx(Ro,{}),u.jsx("iframe",{className:t.status,height:"30",loading:"lazy",scrolling:"no",src:Oe(Mr,`badge?theme=${e?"dark":"light"}`),width:"250"})]})}),ko=[{description:"AUTOMATIC111",openExternal:!0,title:"Stable Diffusion Webui",url:"https://github.com/AUTOMATIC1111/stable-diffusion-webui"},{description:"WebUI extension",openExternal:!0,title:"Controlnet",url:"https://github.com/Mikubill/sd-webui-controlnet"},{description:"Art models",openExternal:!0,title:"Civitai",url:"https://civitai.com/"},{description:"Artist Inspired Styles",openExternal:!0,title:"Cheat Sheet",url:"https://supagruen.github.io/StableDiffusion-CheatSheet"},{description:"Image Resizing",openExternal:!0,title:"Birme",url:"https://www.birme.net/?target_width=512&target_height=512"}],No=[{icon:u.jsx(Dr,{size:16}),openExternal:!0,title:"GitHub",url:ue},{icon:u.jsx(Ne,{name:"file-clock",size:16}),openExternal:!0,title:"Changelog",url:`${ue}/blob/main/CHANGELOG.md`},{icon:u.jsx(Br,{size:16}),openExternal:!0,title:"Sponsor",url:"https://opencollective.com/lobehub"},{icon:u.jsx(Ne,{name:"bug",size:16}),openExternal:!0,title:"Report Bug",url:`${ue}/issues/new/choose`},{icon:u.jsx(Ne,{name:"git-fork",size:16}),openExternal:!0,title:"Request Feature",url:`${ue}/issues/new/choose`}],Mo=[{description:"Stable Diffusion Extension",openExternal:!0,title:"🤯 Lobe Theme",url:"https://github.com/lobehub/sd-webui-lobe-theme"},{description:"Minifier ExtraNetwork Covers",openExternal:!0,title:"✂️ Cover Minifier",url:"https://github.com/canisminor1990/sd-webui-cover-minifier"},{description:"OpenAI Chat Bot",openExternal:!0,title:"🤖 Lobe Chat",url:"https://chat.lobehub.com"},{description:"AIGC Components",openExternal:!0,title:"🍭 Lobe UI",url:"https://ui.lobehub.com"},{description:"I18n AI Workflow",openExternal:!0,title:"🌐 Lobe i18n",url:"https://github.com/lobehub/lobe-cli-toolbox"}],Do=be(({css:t})=>({footer:t`
    footer {
      display: block !important;
    }
  `})),hr=g.memo(({className:t,...e})=>{const r=B(Fe.currentSetting,It),{cx:i,styles:n}=Do(),{t:o}=Nt(),a=g.useRef(null),s=g.useCallback(b=>{if(a.current?.isConnected)return b.preventDefault(),b.returnValue="",""},[]),l=g.useCallback(b=>{r.confirmPageUnload&&window.addEventListener("beforeunload",s)},[r.confirmPageUnload,s]),d=g.useMemo(()=>({community:o("footer.community"),moreProducts:o("footer.moreProducts"),resources:o("footer.resources")}),[o]),f=g.useMemo(()=>r.layoutHideFooter?[]:[{title:u.jsx(Io,{})},{items:ko,title:d.resources},{items:No,title:d.community},{items:Mo,title:d.moreProducts}],[r.layoutHideFooter,d]),h=g.useMemo(()=>u.jsx("div",{ref:a}),[]),c=g.useMemo(()=>i(n.footer,t),[i,n.footer,t]);return Ye(a,"#footer",{debug:"[layout] inject - Footer",onSuccess:l}),u.jsx("div",{className:c,...e,children:u.jsx(gi,{bottom:h,columns:f,contentMaxWidth:1280})})});hr.displayName="Footer";const Bo=({size:t})=>u.jsx("svg",{fill:"currentColor",height:t,viewBox:"0 0 16 16",width:t,children:u.jsx("path",{d:"M2 4.5L8 1l6 3.5v7L8 15l-6-3.5v-7zm6-1.194L3.976 5.653v4.694L8 12.694l4.024-2.347V5.653L8 3.306zm0 1.589l2.662 1.552v.824H9.25L8 6.54l-1.25.73v1.458L8 9.46l1.25-.73h1.412v.824L8 11.105 5.338 9.553V6.447L8 4.895z"})}),mr=g.memo(()=>{const[t,e]=g.useState(!1),[r,i]=g.useState(!1),n=B(Fe.themeMode),{mobile:o}=et(),{t:a}=Nt(),s=g.useCallback(()=>{const R=n==="light"?"dark":"light",P=Xe.parseUrl(window.location.href);P.query.__theme=R,window.location.replace(Xe.stringifyUrl(P))},[n]),l=g.useCallback(()=>e(!0),[]),d=g.useCallback(()=>e(!1),[]),f=g.useCallback(()=>i(!0),[]),h=g.useCallback(()=>i(!1),[]),c=g.useMemo(()=>n==="light"?Hr:Ur,[n]),b=g.useMemo(()=>a("header.feedback"),[a]),y=g.useMemo(()=>a("header.switchTheme"),[a]),x=g.useMemo(()=>a("header.setting"),[a]),_=g.useMemo(()=>o?null:u.jsxs(u.Fragment,{children:[u.jsx("a",{href:"https://civitai.com/",rel:"noreferrer",target:"_blank",children:u.jsx(W,{icon:Bo,title:"Civitai"})}),u.jsx("a",{href:"https://supagruen.github.io/StableDiffusion-CheatSheet/",rel:"noreferrer",target:"_blank",children:u.jsx(W,{icon:zr,title:"Cheat Sheet"})}),u.jsx(W,{icon:qr,onClick:f,title:b})]}),[o,f,b]);return u.jsxs(u.Fragment,{children:[u.jsxs(hi.Compact,{children:[_,u.jsx(W,{icon:c,onClick:s,title:y}),u.jsx(W,{icon:Vr,onClick:l,title:x})]}),u.jsx(Wr,{onCancel:d,open:t}),u.jsx(Kr,{onCancel:h,open:r})]})});mr.displayName="HeaderActions";const Ho=()=>Array.prototype.slice.call(gradioApp().querySelectorAll('#tabs > [id^="tab_"]')),br=()=>Array.prototype.slice.call(gradioApp().querySelectorAll("#tabs > .tab-nav:first-of-type button")),Uo=()=>{const t=Ho(),e=br();return T.debug("🤯 [nav] generate nav list"),e.map((r,i)=>({id:t[i]?.id||`nav-${i}`,index:i,label:Gr(String(r.textContent))}))},zo=t=>{const[e,r]=g.useState([]),i=g.useMemo(()=>Uo(),[]),n=g.useCallback(o=>{T.debug("🤯 [nav] onClick",o);const a=i.find(l=>l.id===o)?.index||0;br()[a]?.click()},[i]);return Xt("#tabs > .tab-nav:first-of-type"),g.useEffect(()=>{try{const o=i.map(a=>({key:a.id,label:t?u.jsx("div",{onClick:()=>n(a.id),children:a.label}):a.label}));r(o.filter(Boolean)),T.success("🤯 [layout] inject - Header")}catch(o){T.error("🤯 [layout] inject - Header",o)}},[t]),{items:e,onChange:n}},yr=g.memo(()=>{const t=B(Fe.currentTab),{mobile:e}=et(),{items:r,onChange:i}=zo(e),[n,o]=g.useState(!1),a=g.useCallback(d=>o(d),[]),s=g.useMemo(()=>e?u.jsx(mi,{items:r,opened:n,setOpened:a}):null,[e,r,n,a]),l=g.useMemo(()=>e?null:u.jsx(bi,{activeKey:t,items:r||[],onChange:i}),[e,t,r,i]);return s||l});yr.displayName="HeaderNav";const qo=t=>({themeMode:t.themeMode,version:t.version}),xr=g.memo(({children:t})=>{const{themeMode:e,version:r}=B(qo,Ze),i=yi(),n=g.useMemo(()=>({alignItems:"center",color:i.colorText,display:"flex"}),[i.colorText]),o=g.useMemo(()=>`LobeTheme v${r}`,[r]),a=g.useMemo(()=>({flex:0}),[]),s=g.useMemo(()=>u.jsx("a",{href:pe,rel:"noreferrer",style:n,target:"_blank",children:u.jsx(xi,{title:o,children:u.jsx(Xr,{})})}),[n,o]),l=g.useMemo(()=>u.jsxs(u.Fragment,{children:[u.jsx(yr,{}),t]}),[t]);return u.jsx(wi,{actions:u.jsx(mr,{themeMode:e}),actionsStyle:a,logo:s,nav:l})});xr.displayName="Header";const Vo=be(({cx:t,css:e,stylish:r,token:i,isDarkMode:n},{headerHeight:o,isPrimaryColor:a})=>({background:t(r.gradientAnimation,a&&e`
          background-image: linear-gradient(
            -45deg,
            ${i.colorPrimary},
            ${at(45,i.colorPrimary)},
            ${i.colorPrimary},
            ${at(-45,i.colorPrimary)}
          );
        `,e`
        pointer-events: none;

        position: absolute !important;
        z-index: 0;
        right: -20vw;
        transform: rotate(4deg);

        width: 60vw;
        height: 200px;

        opacity: 0.2;
        filter: blur(100px);
      `),backgroundLite:e`
      pointer-events: none;

      position: absolute !important;
      top: -400px;
      left: 0;

      width: 100vw;
      height: 100%;

      opacity: ${a?n?.2:.05:n?.15:0};
      background: radial-gradient(
        circle 600px at calc(100% - 300px) 300px,
        ${i.colorPrimary},
        transparent
      );
    `,panel:e`
      .draggable-panel {
        border-style: dashed;
      }
    `,quicksettings:e`
      #quicksettings {
        align-items: start;
        padding: 16px !important;
      }
    `,sidebar:e`
      height: calc(100vh - ${o}px);
    `})),Wo=nt("share",()=>D(()=>import("./features-advanced-DPMTiOpX.js").then(t=>t.a0),__vite__mapDeps([0,1,2,3])),{preloadDelay:3e3,preloadOnHover:!0,priority:"low"}),Ko=nt("extra-network",()=>D(()=>import("./index-CvPJPX9X.js"),__vite__mapDeps([4,1,0,2,3])),{preloadDelay:1e3,preloadOnFeatureEnabled:!0,priority:"high"}),Go=nt("quick-settings",()=>D(()=>import("./index-Cbhr3QHU.js"),__vite__mapDeps([5,1,0,2,3])),{preloadDelay:500,preloadOnFeatureEnabled:!0,priority:"high"}),ee=64,Xo=()=>{try{return window.HIGHLIGHT_DEBUG_STATE?.get()||!1}catch{return!1}},I=(t,e)=>{Xo()&&(e?console.log(t,e):console.log(t))},Jo=t=>({enableExtraNetworkSidebar:t.setting.enableExtraNetworkSidebar,enableHighlight:t.setting.enableHighlight,enableImageInfo:t.setting.enableImageInfo,enableSidebar:t.setting.enableSidebar,liteAnimation:t.setting.liteAnimation,primaryColor:t.setting.primaryColor,svgIcon:t.setting.svgIcon}),wr=g.memo(()=>{const{enableSidebar:t,enableExtraNetworkSidebar:e,enableHighlight:r,enableImageInfo:i,svgIcon:n,liteAnimation:o,primaryColor:a}=B(Jo,Ze),{cx:s,styles:l}=Vo({headerHeight:ee,isPrimaryColor:!!a}),{getMetrics:d}=Ai("App"),f=Ni();return g.useEffect(()=>{I("🚀 App initialization started"),I("Current settings:",{enableExtraNetworkSidebar:e,enableHighlight:r,enableImageInfo:i,enableSidebar:t,svgIcon:n}),Jr(),r?(I("🔥 Highlighting enabled - triggering Shiki cache warming..."),Mt().catch(c=>{console.error("❌ Failed to warm Shiki cache:",c)})):(I("⚠️ Prompt highlighting is DISABLED in settings"),I("💡 Enable it in: Settings → Prompt Syntax Highlighting")),zi({borderRadius:6,colorBgContainer:"#ffffff",colorBgElevated:"#ffffff",colorPrimary:"#1677ff",colorPrimaryActive:"#0958d9",colorPrimaryHover:"#4096ff",colorText:"rgba(0, 0, 0, 0.88)",colorTextSecondary:"rgba(0, 0, 0, 0.65)",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',fontSize:14}),I("🎨 Style cache pre-warmed for better performance")},[r]),g.useEffect(()=>{I("🎨 LobeHub Theme initialized"),I("📖 Debug utilities available:"),I("  - debugShikiSetup() - Full diagnostics"),I("  - testBasicHighlighting() - Test core highlighting function"),I("  - testHighlightResponsiveness() - Test highlighting speed"),I("  - clearHighlightCache() - Clear cache for immediate updates"),I("  - forceRefreshHighlighting() - Force refresh all highlighting"),I("  - forceCompleteAllHighlighting() - EMERGENCY: Force stop all loading"),I("  - adjustHighlightAlignment(x, y) - Fine-tune positioning")},[]),g.useEffect(()=>{},[d,f]),g.useEffect(()=>{const h=[];r&&h.push(()=>Xn()),i&&h.push(()=>qn()),n&&h.push(()=>Qr()),h.length>0&&requestAnimationFrame(()=>{h.forEach(c=>{try{c()}catch(b){console.error("Failed to execute initialization task:",b)}})})},[r,i,n]),u.jsxs(Yr,{children:[u.jsx(Pi,{}),u.jsx(ho,{}),u.jsx(vi,{"aria-label":"Main navigation header",headerHeight:ee,role:"banner",children:u.jsx(Z,{feature:"Header",children:u.jsx(xr,{})})}),u.jsxs(Si,{"aria-label":"Main content area",role:"main",children:[u.jsx("div",{"aria-hidden":"true",className:o?l.backgroundLite:l.background}),t&&u.jsx(st,{"aria-label":"Quick settings sidebar",className:l.sidebar,headerHeight:ee,role:"complementary",style:{flex:0,zIndex:50},children:u.jsx(g.Suspense,{fallback:u.jsx("div",{style:{padding:"16px"},children:"Loading..."}),children:u.jsx(Z,{feature:"QuickSettingSidebar",children:u.jsx(Go,{headerHeight:ee})})})}),u.jsx(Z,{feature:"Content",children:u.jsx(gr,{className:s(!t&&l.quicksettings)})}),u.jsx(Z,{feature:"PromptFormator",children:u.jsx(Ri,{})}),u.jsx(g.Suspense,{fallback:null,children:u.jsx(Z,{feature:"Share",children:u.jsx(Wo,{})})}),e&&u.jsx(st,{"aria-label":"Extra networks sidebar",className:l.sidebar,headerHeight:ee,role:"complementary",style:{flex:0,zIndex:50},children:u.jsx(g.Suspense,{fallback:u.jsx("div",{style:{padding:"16px"},children:"Loading..."}),children:u.jsx(Z,{feature:"ExtraNetworkSidebar",children:u.jsx(Ko,{headerHeight:ee})})})})]}),u.jsx("footer",{"aria-label":"Application footer",role:"contentinfo",children:u.jsx(Z,{feature:"Footer",children:u.jsx(hr,{})})})]})});wr.displayName="App";const Yo=t=>{const e={background_color:"#000",description:Ae.description,display:"fullscreen",icons:[{purpose:"any",sizes:"192x192",src:t("assets/android-chrome-192x192.png"),type:"image/png"},{purpose:"maskable",sizes:"192x192",src:t("assets/android-chrome-maskable-192x192.png"),type:"image/png"},{purpose:"any",sizes:"512x512",src:t("assets/android-chrome-512x512.png"),type:"image/png"},{purpose:"maskable",sizes:"512x512",src:t("assets/android-chrome-maskable-512x512.png"),type:"image/png"}],id:"/",name:"Stable Diffusion",orientation:"portrait",scope:"/",short_name:"Stable Diffusion",splash_pages:null,start_url:location.origin,theme_color:"#000000"};return`data:application/manifest+json;base64,${btoa(JSON.stringify(e))}`},G="Stable Diffusion · LobeHub",He=Ae.description,Qo=g.memo(({children:t})=>{const[e,r]=g.useState(!0),{setCurrentTab:i,onInit:n,storeLoading:o}=B(l=>({onInit:l.onInit,setCurrentTab:l.setCurrentTab,storeLoading:l.loading})),a=$i(),s=g.useCallback(l=>a({path:l,pkg:"@lobehub/assets-favicons",version:"latest"}),[]);return g.useEffect(()=>{n(),onUiLoaded(()=>{r(!1),T.success("🤯 Lobe Theme loading")}),onUiTabChange(()=>{i()})},[]),u.jsxs(g.Suspense,{fallback:"loading...",children:[u.jsxs(ri,{children:[u.jsx("link",{href:s("assets/favicon.ico"),rel:"shortcut icon"}),u.jsx("link",{href:s("assets/apple-touch-icon.png"),rel:"apple-touch-icon",sizes:"180x180"}),u.jsx("link",{href:s("assets/favicon-32x32.png"),rel:"icon",sizes:"32x32",type:"image/png"}),u.jsx("link",{href:s("assets/favicon-16x16.png"),rel:"icon",sizes:"16x16",type:"image/png"}),u.jsx("meta",{content:"width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no",name:"viewport"}),u.jsx("title",{children:G}),u.jsx("meta",{content:G,name:"apple-mobile-web-app-title"}),u.jsx("meta",{content:G,name:"application-name"}),u.jsx("meta",{content:He,name:"description"}),u.jsx("meta",{content:"#000000",name:"msapplication-TileColor"}),u.jsx("meta",{content:"#fff",media:"(prefers-color-scheme: light)",name:"theme-color"}),u.jsx("meta",{content:"#000",media:"(prefers-color-scheme: dark)",name:"theme-color"}),u.jsx("meta",{content:"yes",name:"apple-mobile-web-app-capable"}),u.jsx("meta",{content:G,name:"apple-mobile-web-app-title"}),u.jsx("meta",{content:"black-translucent",name:"apple-mobile-web-app-status-bar-style"}),u.jsx("meta",{content:G,name:"apple-mobile-web-app-title"}),u.jsx("meta",{content:"yes",name:"apple-mobile-web-app-capable"}),u.jsx("meta",{content:"index,follow",name:"robots"}),u.jsx("link",{href:Yo(s),rel:"manifest"}),u.jsx("meta",{content:G,property:"og:title"}),u.jsx("meta",{content:He,property:"og:description"}),u.jsx("meta",{content:"https://github.com/lobehub/sd-webui-lobe-theme",property:"og:url"}),u.jsx("meta",{content:G,property:"og:site_name"}),u.jsx("meta",{content:"en-US",property:"og:locale"}),u.jsx("meta",{content:"https://repository-images.githubusercontent.com/606329910/7fd79db5-fd91-450c-9e95-8ccce8ffdc0b",property:"og:image"}),u.jsx("meta",{content:"website",property:"og:type"}),u.jsx("meta",{content:"summary_large_image",name:"twitter:card"}),u.jsx("meta",{content:"@lobehub",name:"twitter:site"}),u.jsx("meta",{content:G,name:"twitter:title"}),u.jsx("meta",{content:He,name:"twitter:description"}),u.jsx("meta",{content:"https://repository-images.githubusercontent.com/606329910/7fd79db5-fd91-450c-9e95-8ccce8ffdc0b",name:"twitter:image"}),u.jsx("link",{href:"https://github.com/lobehub/sd-webui-lobe-theme",rel:"canonical"})]}),u.jsx(it,{children:o===!1&&e===!1?t:u.jsx(Zr,{})})]})}),Zo=()=>u.jsx(Qo,{children:u.jsx(wr,{})}),Re=new Map;function ea(t,e){const r=Re.get(t),i=Date.now();r?(r.usage+=1,r.lastUsed=i):Re.set(t,{lastUsed:i,name:t,size:e,usage:1})}function Rt(t,e){const r=performance.now();return e.then(i=>{const n=performance.now()-r,o=Re.get(t);return o?o.loadTime=n:Re.set(t,{lastUsed:Date.now(),loadTime:n,name:t,usage:1}),i},i=>{throw performance.now()-r,i})}typeof window<"u"&&ea("main-bundle",0);const ta=async()=>{try{const{shikiWorkerManager:t}=await Rt("shikiWorkerManager",D(()=>import("./features-advanced-DPMTiOpX.js").then(i=>i.Y),__vite__mapDeps([0,1,2,3])));t.preWarm().catch(i=>{T.warn("Web Worker pre-warming failed, will use main thread fallback:",i)});const{ShikiEngineManager:e}=await Rt("useHighlight",D(()=>import("./features-advanced-DPMTiOpX.js").then(i=>i.$),__vite__mapDeps([0,1,2,3])));await e.getInstance().preWarm()}catch(t){T.warn("Failed to pre-warm Shiki engine:",t)}};window.global===void 0&&(window.global=window);const ra=window.location.href.includes("dev")&&!0;ra||document.addEventListener("DOMContentLoaded",()=>{T.start("🤯 Lobe Theme load in production"),setTimeout(()=>{ta()},1e3);const t=document.createElement("div");t.setAttribute("id","root");try{gradioApp()?.append(t)}catch{document.querySelector("gradio-app")?.append(t)}Qe(t).render(u.jsx(Zo,{}))},{once:!0});
