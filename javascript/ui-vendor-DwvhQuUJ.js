var ms=Object.defineProperty;var bs=(t,e,n)=>e in t?ms(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var v=(t,e,n)=>bs(t,typeof e!="symbol"?e+"":e,n);import{r as w,b as Ds,g as Xo,R as ee}from"./react-vendor-BZruHSil.js";import{_ as N,j as m,c as ys,a as vs,b as O,d as I,k as Qo,e as b,f as ie,T as xs,A as Cs,s as Fs,g as ws,h as ks,i as Ss,l as Es,m as fe,n as Xn,D as Zo,M as _s,o as $,p as oe,C as Jo,u as ei,q as ti,r as Et,t as As,v as kn,w as Bs,x as Ns,y as dn,z as Rs,B as js,F as Sn,E as En,G as Ts,H as Os,I as zs,J as Ps,S as Ls,K as $s,L as Is}from"./antd-vendor-DIb3yAmS.js";import{c as ni,i as ri,a as Ms}from"./utils-vendor-DgXxfcaA.js";import{u as Hs}from"./state-vendor-C5NnsjC7.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Gs=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),Qn=t=>{const e=Gs(t);return e.charAt(0).toUpperCase()+e.slice(1)},ai=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim(),Us=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qs={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs=w.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:o,iconNode:i,...s},l)=>w.createElement("svg",{ref:l,...qs,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:ai("lucide",a),...!o&&!Us(s)&&{"aria-hidden":"true"},...s},[...i.map(([u,c])=>w.createElement(u,c)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=(t,e)=>{const n=w.forwardRef(({className:r,...a},o)=>w.createElement(Vs,{ref:o,iconNode:e,className:ai(`lucide-${Ws(Qn(t))}`,`lucide-${t}`,r),...a}));return n.displayName=Qn(t),n};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ys=K("check",Ks);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],_n=K("chevron-down",Xs);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Zs=K("chevron-left",Qs);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],oi=K("chevron-right",Js);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],tl=K("chevron-up",el);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],rl=K("circle-check-big",nl);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],ol=K("circle-x",al);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],sl=K("copy",il);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ll=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],ul=K("info",ll);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],dl=K("loader-circle",cl);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],fl=K("maximize-2",hl);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],gl=K("menu",pl);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],bl=K("minimize-2",ml);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]],yl=K("panel-left",Dl);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89",key:"znwnzq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11",key:"c9qhm2"}]],xl=K("pin-off",vl);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],Fl=K("pin",Cl);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],kl=K("triangle-alert",wl);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],_t=K("x",Sl);function F(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var ii=function(e){return e||"layoutkit"},si=function(e,n){if(n)return"row";switch(e){case"horizontal":return"row";case"horizontal-reverse":return"row-reverse";case"vertical":default:return"column";case"vertical-reverse":return"column-reverse"}},El=function(e){if(e)return["space-between","space-around","space-evenly"].includes(e)},_l=function(e,n){return si(e,n)==="row"},Me=function(e){return typeof e=="number"?"".concat(e,"px"):e},Zn,Al=["visible","flex","gap","direction","horizontal","align","justify","distribution","height","width","padding","paddingInline","paddingBlock","as","internalClassName","className","children","wrap"];function Jn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function er(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Jn(Object(n),!0).forEach(function(r){O(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Jn(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}var An=w.forwardRef(function(t,e){var n=t.visible,r=t.flex,a=t.gap,o=t.direction,i=t.horizontal,s=t.align,l=t.justify,u=t.distribution,c=t.height,d=t.width,p=t.padding,h=t.paddingInline,f=t.paddingBlock,D=t.as,g=D===void 0?"div":D,x=t.internalClassName,C=t.className,y=t.children,S=t.wrap,E=N(t,Al),_=l||u,T=w.useMemo(function(){return _l(o,i)&&!d&&El(_)?"100%":Me(d)},[o,i,_,d]);return m.jsx(g,er(er({ref:e},E),{},{className:ys(x,vs(Zn||(Zn=F([`
            // 是否显示
            display: `,`;

            flex: `,`;

            flex-direction: `,`;
            flex-wrap: `,`;

            justify-content: `,`;
            align-items: `,`;

            width: `,`;
            height: `,`;

            padding: `,`;

            padding-inline: `,`;
            padding-block: `,`;

            gap: `,`;
          `])),n===!1?"none":"flex",r,si(o,i),S,_,s,T,Me(c),Me(p),Me(h),Me(f),Me(a)),C),children:y}))});An.displayName="FlexBasic";var Bl=["children","className","prefixCls"];function tr(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function nr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?tr(Object(n),!0).forEach(function(r){O(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):tr(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}var rt=w.forwardRef(function(t,e){var n=t.children,r=t.className,a=t.prefixCls,o=N(t,Bl);return m.jsx(An,nr(nr({ref:e,internalClassName:"".concat(ii(a),"-center"),className:r},o),{},{align:"center",justify:"center",children:n}))});rt.displayName="Center";var Nl=["className","prefixCls","children"];function rr(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function ar(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?rr(Object(n),!0).forEach(function(r){O(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):rr(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}var R=w.forwardRef(function(t,e){var n=t.className,r=t.prefixCls,a=t.children,o=N(t,Nl);return m.jsx(An,ar(ar({ref:e},o),{},{internalClassName:"".concat(ii(r),"-flexbox"),className:n,children:a}))});R.displayName="Flexbox";var Rl=function(e){var n,r;switch(e){case"large":{n=24,r=2;break}case"normal":{n=20,r=2;break}case"small":{n=14,r=1.5;break}default:{e?(n=e?.fontSize||24,r=e?.strokeWidth||2):(n="1em",r=2);break}}return{fontSize:n,strokeWidth:r}},or,ir,jl=I(function(t){var e=t.css,n=Qo(or||(or=F([`
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
  `])));return{spin:e(ir||(ir=F([`
      animation: `,` 1s linear infinite;
    `])),n)}}),Tl=["icon","size","color","fill","className","focusable","spin","fillRule","fillOpacity"],Ol=["fontSize"],Ve=w.forwardRef(function(t,e){var n=t.icon,r=t.size,a=t.color,o=t.fill,i=o===void 0?"transparent":o,s=t.className,l=t.focusable,u=t.spin,c=t.fillRule,d=t.fillOpacity,p=N(t,Tl),h=jl(),f=h.styles,D=h.cx,g=n,x=w.useMemo(function(){return Rl(r)},[r]),C=x.fontSize,y=N(x,Ol);return m.jsx("span",b(b({className:D("anticon",u&&f.spin,s),role:"img"},p),{},{children:m.jsx(g,b({color:a,fill:i,fillOpacity:d,fillRule:c,focusable:l,height:C,ref:e,size:C,width:C},y))}))}),sr,zl=I(function(t,e){var n,r,a=t.css,o=t.token,i=t.isDarkMode,s=e.offset,l=e.outside,u=e.size,c=((n=s?.x)!==null&&n!==void 0?n:0)+"px",d=((r=s?.y)!==null&&r!==void 0?r:0)+"px",p=l?"0":".1",h=u+"px";return a(sr||(sr=F([`
      pointer-events: none;

      position: absolute;
      z-index: 1;
      inset: 0;

      opacity: `,`;
      background: radial-gradient(
        `," circle at "," ",`,
        `,`,
        `,`
      );
      border-radius: inherit;

      transition: all 0.2s;
    `])),p,h,c,d,i?o.colorText:"#fff",i?"transparent":o.colorTextQuaternary)}),Pl=["className","size"],Ll=function(){var e=w.useState(),n=ie(e,2),r=n[0],a=n[1],o=w.useState(!0),i=ie(o,2),s=i[0],l=i[1],u=w.useRef();return w.useEffect(function(){if(u.current&&u.current.parentElement){var c=u.current.parentElement,d=function(f){var D=c.getBoundingClientRect();a({x:f.clientX-D.x,y:f.clientY-D.y}),l(!1)},p=function(){l(!0)};return c.addEventListener("mousemove",d),c.addEventListener("mouseleave",p),function(){c.removeEventListener("mousemove",d),c.removeEventListener("mouseleave",p)}}},[]),[r,s,u]},$l=w.memo(function(t){var e=t.className,n=t.size,r=n===void 0?64:n,a=N(t,Pl),o=Ll(),i=ie(o,3),s=i[0],l=i[1],u=i[2],c=zl({offset:s,outside:l,size:r}),d=c.styles,p=c.cx;return m.jsx("div",b({className:p(d,e),ref:u},a))}),lr,Il=I(function(t){var e=t.css,n=t.token,r=t.prefixCls;return{tooltip:e(lr||(lr=F([`
      .`,`-tooltip-inner {
        display: flex;
        align-items: center;
        justify-content: center;

        min-height: unset;
        padding-block: 4px;
        padding-inline: 8px;

        color: `,`;
        word-break: break-all;

        background-color: `,`;
        border-radius: `,`px;
      }

      .`,`-tooltip-arrow {
        &::before,
        &::after {
          background: `,`;
        }
      }
    `])),r,n.colorBgLayout,n.colorText,n.borderRadiusSM,r,n.colorText)}}),Ml=["className","arrow"],Hl=w.memo(function(t){var e=t.className,n=t.arrow,r=n===void 0?!1:n,a=N(t,Ml),o=Il(),i=o.styles,s=o.cx;return m.jsx(xs,b({arrow:r,overlayClassName:s(i.tooltip,e)},a))}),Wl=function(e){var n,r;switch(e){case"large":{n=44,r=8;break}case"normal":{n=36,r=5;break}case"small":{n=24,r=5;break}case"site":{n=34,r=5;break}default:{n=e?.blockSize||36,r=e?.borderRadius||5;break}}return{blockSize:n,borderRadius:r}},ur,cr,dr,hr,Gl=I(function(t,e){var n=t.css,r=t.token,a=t.stylish,o=t.cx,i=e.active,s=e.glass;return{block:o(s&&a.blur,n(ur||(ur=F([`
          position: relative;

          flex: none;

          color: `,`;

          background: `,`;

          transition:
            color 600ms `,`,
            scale 400ms `,`,
            background-color 100ms `,`;
        `])),i?r.colorText:r.colorTextTertiary,i?r.colorFillTertiary:"transparent",r.motionEaseOut,r.motionEaseOut,r.motionEaseOut)),disabled:n(cr||(cr=F([`
        cursor: not-allowed;
        opacity: 0.5;
      `]))),icon:n(dr||(dr=F([`
        transition: scale 400ms `,`;

        &:active {
          scale: 0.8;
        }
      `])),r.motionEaseOut),normal:n(hr||(hr=F([`
        cursor: pointer;

        &:hover {
          color: `,`;
          background-color: `,`;
        }

        &:active {
          color: `,`;
          background-color: `,`;
        }
      `])),r.colorText,r.colorFillSecondary,r.colorText,r.colorFill)}}),Ul=["color","fill","className","active","icon","size","style","glass","title","placement","arrow","spotlight","onClick","children","loading","tooltipDelay","fillOpacity","fillRule","focusable","disable","spin"],_e=w.forwardRef(function(t,e){var n=t.color,r=t.fill,a=t.className,o=t.active,i=t.icon,s=t.size,l=s===void 0?"normal":s,u=t.style,c=t.glass,d=t.title,p=t.placement,h=t.arrow,f=h===void 0?!1:h,D=t.spotlight,g=t.onClick,x=t.children,C=t.loading,y=t.tooltipDelay,S=y===void 0?.5:y,E=t.fillOpacity,_=t.fillRule,T=t.focusable,M=t.disable,Z=t.spin,ae=N(t,Ul),W=Gl({active:!!o,glass:!!c}),j=W.styles,H=W.cx,z=w.useMemo(function(){return Wl(l)},[l]),L=z.blockSize,G=z.borderRadius,ge={color:n,fill:r,fillOpacity:E,fillRule:_,focusable:T,size:l==="site"?"normal":l},xe=i&&m.jsx(Ve,b(b({className:j.icon,icon:i},ge),{},{spin:Z})),Ce=m.jsx(Ve,b(b({icon:dl},ge),{},{spin:!0})),Se=m.jsxs(R,b(b({align:"center",className:H(j.block,M?j.disabled:j.normal,a),horizontal:!0,justify:"center",onClick:C||M?void 0:g,ref:e,style:b({borderRadius:G,height:L,width:L},u)},ae),{},{children:[D&&m.jsx($l,{}),C?Ce:xe,x]}));return d?m.jsx(Hl,{arrow:f,mouseEnterDelay:S,overlayStyle:{pointerEvents:"none"},placement:p,title:d,children:Se}):Se}),fr,pr,gr,mr,br,Dr,yr,vr,xr,Cr,Fr,wr,kr,ql=I(function(t,e){var n=t.cx,r=t.token,a=t.css,o=t.prefixCls,i=e.closable,s=e.hasTitle,l=e.showIcon,u=s?16:8,c=s?16:12;return{banner:a(fr||(fr=F([`
        border: none;
        border-radius: 0;
      `]))),colorfulText:a(pr||(pr=F([`
        .`,"-alert-message,.",`-alert-description {
          color: inherit;
        }
      `])),o,o),container:n(a(gr||(gr=F([`
          position: relative;

          display: flex;
          flex-direction: row;
          gap: `,`px;
          align-items: flex-start;

          max-width: 100%;
          padding-block: `,`px;
          padding-inline: `,`px
            `,`px;

          .`,`-alert-message {
            font-weight: `,`;
            line-height: 24px;
            word-break: break-all;
          }
          .`,`-alert-icon {
            display: flex;
            align-items: center;
            height: 24px;
            margin: 0;
          }
          .`,`-alert-close-icon {
            display: flex;
            align-items: center;
            height: 24px;
            margin: 0;
          }
        `])),s?12:8,u,l?c:c*1.5,i?c:c*1.5,o,s?600:400,o,o),s&&a(mr||(mr=F([`
            .`,`-alert-description {
              line-height: 1.5;
              word-break: break-all;
              opacity: 0.75;
            }
          `])),o)),expandText:a(br||(br=F([`
        &:hover {
          cursor: pointer;
        }
      `]))),extra:a(Dr||(Dr=F([`
        position: relative;

        overflow: hidden;

        max-width: 100%;

        border: 1px solid;
        border-block-start: none;
        border-end-start-radius: `,`px;
        border-end-end-radius: `,`px;
      `])),r.borderRadiusLG,r.borderRadiusLG),extraBody:a(yr||(yr=F([`
        overflow-x: auto;
        width: 100%;
        padding-block: `,`px;
        padding-inline: `,`px;
      `])),u,c),extraHeader:a(vr||(vr=F([`
        padding-block: `,`px;
        padding-inline: `,`px;
        border-block-start: 1px dashed;
      `])),u*.75,c*.75),hasExtra:a(xr||(xr=F([`
        border-block-end: none;
        border-end-start-radius: 0;
        border-end-end-radius: 0;
      `]))),variantBlock:a(Cr||(Cr=F([`
        border: none;
      `]))),variantGhost:a(Fr||(Fr=F([`
        background: transparent !important;
      `]))),variantPure:a(wr||(wr=F([`
        padding: 0 !important;
        background: transparent !important;
        border: none;
      `]))),variantPureExtraHeader:a(kr||(kr=F([`
        margin-block-start: `,`px;
        margin-inline-start: `,`px;
        padding-inline: 0;
      `])),u,-c*.25)}}),Vl=["closeIcon","closable","description","showIcon","type","variant","icon","colorfulText","style","extra","classNames","text","extraDefaultExpand","extraIsolate","banner"],Kl={error:ol,info:ul,success:rl,warning:kl},Ne=function(e){for(var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"info",r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];return e[ni(["color",n].concat(a).join("-"))]},Jp=w.memo(function(t){var e=t.closeIcon,n=t.closable,r=n===void 0?!1:n,a=t.description,o=t.showIcon,i=o===void 0?!0:o,s=t.type,l=s===void 0?"info":s,u=t.variant,c=t.icon,d=t.colorfulText,p=d===void 0?!0:d,h=t.style,f=t.extra,D=t.classNames,g=t.text,x=t.extraDefaultExpand,C=x===void 0?!1:x,y=t.extraIsolate,S=t.banner,E=N(t,Vl),_=w.useState(C),T=ie(_,2),M=T[0],Z=T[1],ae=ql({closable:!!r,hasTitle:!!a,showIcon:!!i}),W=ae.theme,j=ae.styles,H=ae.cx,z=!y&&!!f,L=m.jsx(Cs,b({banner:S,className:H(j.container,p&&j.colorfulText,!!z&&j.hasExtra,u==="block"&&j.variantBlock,u==="ghost"&&j.variantGhost,u==="pure"&&j.variantPure,D?.alert,!z&&j.container),closable:r,closeIcon:e||m.jsx(_e,{color:Ne(W,l),icon:_t,size:"small"}),description:a,icon:m.jsx(Ve,{icon:Kl[l]||c,size:{fontSize:a?24:18}}),showIcon:i,style:b({color:p?Ne(W,l):void 0},h),type:l},E));return f?y?m.jsxs(R,{className:D?.container,gap:8,children:[L,f]}):m.jsxs(R,{className:D?.container,children:[L,m.jsxs(R,{className:H(j.extra,S&&j.banner,u==="block"&&j.variantBlock,u==="ghost"&&j.variantGhost,u==="pure"&&j.variantPure),style:{background:Ne(W,l,"bg"),borderColor:Ne(W,l,"border"),color:Ne(W,l),fontSize:a?14:12},children:[m.jsxs(R,{align:"center",className:H(j.extraHeader,u==="pure"&&j.variantPureExtraHeader),gap:Fs?6:10,horizontal:!0,style:{borderColor:Ne(W,l,"border")},children:[m.jsx(_e,{color:p?Ne(W,l):void 0,icon:M?_n:oi,onClick:function(){return Z(!M)},size:{blockSize:24,fontSize:18}}),m.jsx("div",{className:H(j.expandText),onClick:function(){return Z(!M)},children:g?.detail||"Show Details"})]}),M&&m.jsx("div",{className:H(j.extraBody,u==="pure"&&j.variantPure),children:f})]})]}):L});function Yl(t){var e=[];if(t.length===0)return"";if(typeof t[0]!="string")throw new TypeError("Url must be a string. Received "+t[0]);if(t[0].match(/^[^/:]+:\/*$/)&&t.length>1){var n=t.shift();t[0]=n+t[0]}t[0].match(/^file:\/\/\//)?t[0]=t[0].replace(/^([^/:]+):\/*/,"$1:///"):t[0]=t[0].replace(/^([^/:]+):\/*/,"$1://");for(var r=0;r<t.length;r++){var a=t[r];if(typeof a!="string")throw new TypeError("Url must be a string. Received "+a);a!==""&&(r>0&&(a=a.replace(/^[\/]+/,"")),r<t.length-1?a=a.replace(/[\/]+$/,""):a=a.replace(/[\/]+$/,"/"),e.push(a))}var o=e.join("/");o=o.replace(/\/(\?|&|#[^!])/g,"$1");var i=o.split("?");return o=i.shift()+(i.length>0?"?":"")+i.join("&"),o}function Sr(){var t;return typeof arguments[0]=="object"?t=arguments[0]:t=[].slice.call(arguments),Yl(t)}var Xl="https://unpkg.com",Ql="https://registry.npmmirror.com",li=function(e){var n=e.pkg,r=e.version,a=r===void 0?"latest":r,o=e.path,i=e.proxy;switch(i){case"unpkg":return Sr(Xl,"".concat(n,"@").concat(a),o);default:return Sr(Ql,n,a,"files",o)}},ui=w.createContext(null),Er=function(e){var n=e.pkg,r=e.version,a=e.path;return li({path:a,pkg:n,proxy:"aliyun",version:r})},Bn=function(){var e=w.useContext(ui);return e?e?.proxy!=="custom"?function(n){var r=n.pkg,a=n.version,o=n.path;return li({path:o,pkg:r,proxy:e.proxy,version:a})}:e?.customCdnFn||Er:Er},Zl=["unoptimized"],Jl=function(e){return w.forwardRef(function(n,r){return w.createElement(e,b(b({},n),{},{ref:r}))})},Ge=w.forwardRef(function(t,e){var n=t.unoptimized,r=N(t,Zl),a=w.useContext(ui),o=a?.imgAs||"img",i=w.useMemo(function(){return Jl(o)},[o]);return m.jsx(i,b({ref:e,unoptimized:n===void 0?a?.imgUnoptimized:n},r))}),_r,eu=I(function(t){var e=t.css;return{container:e(_r||(_r=F([`
      position: relative;
      line-height: 1;
      text-align: center;
    `])))}});function We(t){return ws(t).map(function(e){var n;return e==null||(n=e.codePointAt(0))===null||n===void 0?void 0:n.toString(16)}).join("-")}function tu(t){var e=We(t).split("-")[0];return e<"1f469"?"@lobehub/fluent-emoji-anim-1":e>="1f469"&&e<"1f620"?"@lobehub/fluent-emoji-anim-2":e>="1f620"&&e<"1f9a0"?"@lobehub/fluent-emoji-anim-3":"@lobehub/fluent-emoji-anim-4"}var nu=function(e,n){var r=["anim","3d"].includes(n)?"webp":"svg";switch(n){case"pure":return null;case"anim":return{path:"assets/".concat(We(e),".").concat(r),pkg:tu(e),version:"1.0.0"};case"3d":return{path:"assets/".concat(We(e),".").concat(r),pkg:"@lobehub/fluent-emoji-3d",version:"1.1.0"};case"flat":return{path:"assets/".concat(We(e),".").concat(r),pkg:"@lobehub/fluent-emoji-flat",version:"1.1.0"};case"modern":return{path:"assets/".concat(We(e),".").concat(r),pkg:"@lobehub/fluent-emoji-modern",version:"1.0.0"};case"mono":return{path:"assets/".concat(We(e),".").concat(r),pkg:"@lobehub/fluent-emoji-mono",version:"1.1.0"}}},ru=w.memo(function(t){var e=t.emoji,n=t.className,r=t.style,a=t.type,o=a===void 0?"3d":a,i=t.size,s=i===void 0?40:i,l=t.unoptimized,u=w.useState(!1),c=ie(u,2),d=c[0],p=c[1],h=Bn(),f=eu(),D=f.cx,g=f.styles,x=w.useMemo(function(){return nu(e,o)},[o,e]);return o==="pure"||!x||d?m.jsx(rt,{className:D(g.container,n),flex:"none",height:s,style:b({fontSize:s*.9},r),width:s,children:e}):m.jsx(Ge,{alt:e,className:n,height:s,loading:"lazy",onError:function(){return p(!0)},src:h(x),style:b({flex:"none"},r),unoptimized:l,width:s})});const au=()=>/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;var ou=function(e){var n,r=au(),a=(n=e.match(r))===null||n===void 0?void 0:n[0];return a};function iu(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,ks(t,e)}var ve=function(t){iu(e,t);function e(n){var r;return r=t.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+n+" for more information.")||this,Ss(r)}return e}(Es(Error));function Qt(t){return Math.round(t*255)}function su(t,e,n){return Qt(t)+","+Qt(e)+","+Qt(n)}function At(t,e,n,r){if(r===void 0&&(r=su),e===0)return r(n,n,n);var a=(t%360+360)%360/60,o=(1-Math.abs(2*n-1))*e,i=o*(1-Math.abs(a%2-1)),s=0,l=0,u=0;a>=0&&a<1?(s=o,l=i):a>=1&&a<2?(s=i,l=o):a>=2&&a<3?(l=o,u=i):a>=3&&a<4?(l=i,u=o):a>=4&&a<5?(s=i,u=o):a>=5&&a<6&&(s=o,u=i);var c=n-o/2,d=s+c,p=l+c,h=u+c;return r(d,p,h)}var Ar={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function lu(t){if(typeof t!="string")return t;var e=t.toLowerCase();return Ar[e]?"#"+Ar[e]:t}var uu=/^#[a-fA-F0-9]{6}$/,cu=/^#[a-fA-F0-9]{8}$/,du=/^#[a-fA-F0-9]{3}$/,hu=/^#[a-fA-F0-9]{4}$/,Zt=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,fu=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,pu=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,gu=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function $e(t){if(typeof t!="string")throw new ve(3);var e=lu(t);if(e.match(uu))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(cu)){var n=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:n}}if(e.match(du))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(hu)){var r=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:r}}var a=Zt.exec(e);if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10)};var o=fu.exec(e.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])>1?parseFloat(""+o[4])/100:parseFloat(""+o[4])};var i=pu.exec(e);if(i){var s=parseInt(""+i[1],10),l=parseInt(""+i[2],10)/100,u=parseInt(""+i[3],10)/100,c="rgb("+At(s,l,u)+")",d=Zt.exec(c);if(!d)throw new ve(4,e,c);return{red:parseInt(""+d[1],10),green:parseInt(""+d[2],10),blue:parseInt(""+d[3],10)}}var p=gu.exec(e.substring(0,50));if(p){var h=parseInt(""+p[1],10),f=parseInt(""+p[2],10)/100,D=parseInt(""+p[3],10)/100,g="rgb("+At(h,f,D)+")",x=Zt.exec(g);if(!x)throw new ve(4,e,g);return{red:parseInt(""+x[1],10),green:parseInt(""+x[2],10),blue:parseInt(""+x[3],10),alpha:parseFloat(""+p[4])>1?parseFloat(""+p[4])/100:parseFloat(""+p[4])}}throw new ve(5)}function mu(t){var e=t.red/255,n=t.green/255,r=t.blue/255,a=Math.max(e,n,r),o=Math.min(e,n,r),i=(a+o)/2;if(a===o)return t.alpha!==void 0?{hue:0,saturation:0,lightness:i,alpha:t.alpha}:{hue:0,saturation:0,lightness:i};var s,l=a-o,u=i>.5?l/(2-a-o):l/(a+o);switch(a){case e:s=(n-r)/l+(n<r?6:0);break;case n:s=(r-e)/l+2;break;default:s=(e-n)/l+4;break}return s*=60,t.alpha!==void 0?{hue:s,saturation:u,lightness:i,alpha:t.alpha}:{hue:s,saturation:u,lightness:i}}function Ae(t){return mu($e(t))}var bu=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},hn=bu;function je(t){var e=t.toString(16);return e.length===1?"0"+e:e}function Jt(t){return je(Math.round(t*255))}function Du(t,e,n){return hn("#"+Jt(t)+Jt(e)+Jt(n))}function ci(t,e,n){return At(t,e,n,Du)}function yu(t,e,n){if(typeof t=="object"&&e===void 0&&n===void 0)return ci(t.hue,t.saturation,t.lightness);throw new ve(1)}function vu(t,e,n,r){if(typeof t=="object"&&e===void 0&&n===void 0&&r===void 0)return t.alpha>=1?ci(t.hue,t.saturation,t.lightness):"rgba("+At(t.hue,t.saturation,t.lightness)+","+t.alpha+")";throw new ve(2)}function di(t,e,n){if(typeof t=="number"&&typeof e=="number"&&typeof n=="number")return hn("#"+je(t)+je(e)+je(n));if(typeof t=="object"&&e===void 0&&n===void 0)return hn("#"+je(t.red)+je(t.green)+je(t.blue));throw new ve(6)}function te(t,e,n,r){if(typeof t=="string"&&typeof e=="number"){var a=$e(t);return"rgba("+a.red+","+a.green+","+a.blue+","+e+")"}else if(typeof t=="object"&&e===void 0&&n===void 0&&r===void 0)return t.alpha>=1?di(t.red,t.green,t.blue):"rgba("+t.red+","+t.green+","+t.blue+","+t.alpha+")";throw new ve(7)}var xu=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},Cu=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},Fu=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},wu=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"};function Be(t){if(typeof t!="object")throw new ve(8);if(Cu(t))return te(t);if(xu(t))return di(t);if(wu(t))return vu(t);if(Fu(t))return yu(t);throw new ve(8)}function hi(t,e,n){return function(){var a=n.concat(Array.prototype.slice.call(arguments));return a.length>=e?t.apply(this,a):hi(t,e,a)}}function ue(t){return hi(t,t.length,[])}function ku(t,e){if(e==="transparent")return e;var n=Ae(e);return Be(fe({},n,{hue:n.hue+parseFloat(t)}))}var Su=ue(ku),e0=Su;function Ye(t,e,n){return Math.max(t,Math.min(e,n))}function Eu(t,e){if(e==="transparent")return e;var n=Ae(e);return Be(fe({},n,{lightness:Ye(0,1,n.lightness-parseFloat(t))}))}ue(Eu);function _u(t,e){if(e==="transparent")return e;var n=Ae(e);return Be(fe({},n,{saturation:Ye(0,1,n.saturation-parseFloat(t))}))}ue(_u);function fn(t){if(t==="transparent")return 0;var e=$e(t),n=Object.keys(e).map(function(i){var s=e[i]/255;return s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4)}),r=n[0],a=n[1],o=n[2];return parseFloat((.2126*r+.7152*a+.0722*o).toFixed(3))}function Au(t,e){var n=fn(t),r=fn(e);return parseFloat((n>r?(n+.05)/(r+.05):(r+.05)/(n+.05)).toFixed(2))}function Bu(t,e){if(e==="transparent")return e;var n=Ae(e);return Be(fe({},n,{lightness:Ye(0,1,n.lightness+parseFloat(t))}))}var Nu=ue(Bu),Ru=Nu;function ju(t,e,n){if(e==="transparent")return n;if(n==="transparent")return e;if(t===0)return n;var r=$e(e),a=fe({},r,{alpha:typeof r.alpha=="number"?r.alpha:1}),o=$e(n),i=fe({},o,{alpha:typeof o.alpha=="number"?o.alpha:1}),s=a.alpha-i.alpha,l=parseFloat(t)*2-1,u=l*s===-1?l:l+s,c=1+l*s,d=(u/c+1)/2,p=1-d,h={red:Math.floor(a.red*d+i.red*p),green:Math.floor(a.green*d+i.green*p),blue:Math.floor(a.blue*d+i.blue*p),alpha:a.alpha*parseFloat(t)+i.alpha*(1-parseFloat(t))};return te(h)}var Tu=ue(ju),fi=Tu;function Ou(t,e){if(e==="transparent")return e;var n=$e(e),r=typeof n.alpha=="number"?n.alpha:1,a=fe({},n,{alpha:Ye(0,1,(r*100+parseFloat(t)*100)/100)});return te(a)}ue(Ou);var Br="#000",Nr="#fff";function Oe(t,e,n,r){e===void 0&&(e=Br),n===void 0&&(n=Nr),r===void 0&&(r=!0);var a=fn(t)>.179,o=a?e:n;return!r||Au(t,o)>=4.5?o:a?Br:Nr}function zu(t,e){if(e==="transparent")return e;var n=Ae(e);return Be(fe({},n,{saturation:Ye(0,1,n.saturation+parseFloat(t))}))}ue(zu);function Pu(t,e){return e==="transparent"?e:Be(fe({},Ae(e),{hue:parseFloat(t)}))}ue(Pu);function Lu(t,e){return e==="transparent"?e:Be(fe({},Ae(e),{lightness:parseFloat(t)}))}ue(Lu);function $u(t,e){return e==="transparent"?e:Be(fe({},Ae(e),{saturation:parseFloat(t)}))}ue($u);function Iu(t,e){return e==="transparent"?e:fi(parseFloat(t),"rgb(0, 0, 0)",e)}ue(Iu);function Mu(t,e){return e==="transparent"?e:fi(parseFloat(t),"rgb(255, 255, 255)",e)}ue(Mu);function Hu(t,e){if(e==="transparent")return e;var n=$e(e),r=typeof n.alpha=="number"?n.alpha:1,a=fe({},n,{alpha:Ye(0,1,+(r*100-parseFloat(t)*100).toFixed(2)/100)});return te(a)}ue(Hu);var Rr,Wu=I(function(t,e){var n=t.css,r=t.token,a=t.prefixCls,o=e.background,i=e.size,s=e.isEmoji,l=o??r.colorBgContainer,u=Oe(l);return{avatar:n(Rr||(Rr=F([`
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;

        background: `,`;
        border: 1px solid `,`;

        > .`,`-avatar-string {
          font-size: `,`px;
          font-weight: 700;
          line-height: 1 !important;
          color: `,`;
        }

        > * {
          cursor: pointer;
        }
      `])),l,o?"transparent":r.colorSplit,a,i*(s?.7:.5),u)}}),Gu=["className","avatar","title","animation","size","shape","background","style","unoptimized"],t0=w.forwardRef(function(t,e){var n=t.className,r=t.avatar,a=t.title,o=t.animation,i=t.size,s=i===void 0?40:i,l=t.shape,u=l===void 0?"circle":l,c=t.background,d=c===void 0?"rgba(0,0,0,0)":c,p=t.style,h=t.unoptimized,f=N(t,Gu),D=typeof r=="string",g=!!(r&&(["/","http","data:"].some(function(T){return D&&r.startsWith(T)})||w.isValidElement(r))),x=w.useMemo(function(){return r&&!g&&D&&ou(r)},[r]),C=Wu({background:d,isEmoji:!!x,size:s}),y=C.styles,S=C.cx,E=String(g?a:r),_=b({className:S(y.avatar,n),shape:u,size:s,style:f!=null&&f.onClick?p:b({cursor:"default"},p)},f);return g?m.jsx(Xn,b({ref:e,src:typeof r=="string"?m.jsx(Ge,{alt:_.alt||a,height:s,loading:"lazy",src:r,width:s}):r},_)):m.jsx(Xn,b(b({ref:e},_),{},{children:x?m.jsx(ru,{emoji:x,size:s*.8,type:o?"anim":"3d",unoptimized:h}):E?.toUpperCase().slice(0,2)}))});function n0(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),a,o=[],i;try{for(;(e===void 0||e-- >0)&&!(a=r.next()).done;)o.push(a.value)}catch(s){i={error:s}}finally{try{a&&!a.done&&(n=r.return)&&n.call(r)}finally{if(i)throw i.error}}return o}var jr,Tr,Or,zr,Pr,Uu=I(function(t,e){var n=t.token,r=t.css,a=t.stylish,o=t.prefixCls,i=e.fullscreen,s=e.headerHeight;return{container:r(jr||(jr=F([`
        cursor: pointer;
        width: `,`px;
        height: `,`px;
        border-radius: `,`px;
      `])),n.controlHeight,n.controlHeight,n.borderRadius),drawer:r(Tr||(Tr=F([`
        &.`,`-drawer-content {
          background: transparent;
        }

        .`,`-drawer-body {
          display: flex;
          flex-direction: column;
        }
      `])),o,o),drawerRoot:r(Or||(Or=F([`
        inset-block-start: `,`px;

        :focus-visible {
          outline: none;
        }

        .`,`-drawer {
          &-mask {
            `,`;
            background-color: `,`;
          }

          &-content-wrapper {
            box-shadow: none;
          }
        }
      `])),i?0:s+1,o,a.blur,te(n.colorBgLayout,.5)),fillRect:r(zr||(zr=F([`
        flex: 1;
        width: 100%;
        border-block-start: none;
      `]))),menu:r(Pr||(Pr=F([`
        padding-block-start: `,`px;
        background: transparent;
        border-inline-end: transparent !important;

        > .`,"-menu-item-only-child, .",`-menu-submenu-title {
          width: 100%;
          margin: 0 !important;
          border-block-start: none;
          border-radius: 0;

          &:active {
            color: `,`;
            background-color: `,`;
          }
        }

        .`,`-menu-item-only-child:first-child {
          border-block-start: none;
        }

        .`,`-menu-submenu-title[aria-expanded='true'] {
          a {
            font-weight: 600;
            color: `,` !important;
          }
        }

        .`,`-menu-item-group-title {
          padding-block: 8px;

          font-size: 12px;
          font-weight: 500;
          line-height: 1;
          text-overflow: ellipsis;
          text-transform: uppercase;
          white-space: nowrap;

          background: `,`;
        }

        .`,`-menu-item {
          width: calc(100% - 16px) !important;
          margin: 8px !important;
          border-radius: `,`px;

          &:hover,
          &:active {
            color: `,` !important;
            background: `,` !important;
          }
        }

        .`,`-menu-item-active {
          width: calc(100% - 16px) !important;
          margin: 8px !important;
          background: `,`;
          border-radius: `,`px;
        }

        .`,`-menu-item-selected {
          font-weight: 600;
          color: `,`;
          background: `,`;

          &:hover,
          &:active {
            color: `,` !important;
            background: `,` !important;
          }
        }
      `])),i?s:0,o,o,n.colorText,n.colorFill,o,o,n.colorText,o,n.colorFillSecondary,o,n.borderRadius,n.colorText,n.colorFillSecondary,o,n.colorFillSecondary,n.borderRadius,o,n.colorBgLayout,n.colorText,n.colorBgLayout,n.colorText)}}),qu=["items","openKeys","selectedKeys","opened","setOpened","className","headerHeight","onClick","iconProps","rootClassName","fullscreen","drawerProps"],r0=w.memo(function(t){var e=t.items,n=t.openKeys,r=t.selectedKeys,a=t.opened,o=t.setOpened,i=t.className,s=t.headerHeight,l=s===void 0?64:s,u=t.onClick,c=t.iconProps,d=t.rootClassName,p=t.fullscreen,h=t.drawerProps,f=N(t,qu),D=Uu({fullscreen:p,headerHeight:l}),g=D.cx,x=D.styles;return m.jsxs(rt,b(b({className:g(x.container,i),onClick:function(){o(!a)}},f),{},{children:[m.jsx(_e,b({icon:a?_t:gl,size:"site"},c)),m.jsxs(Zo,b(b({closeIcon:void 0,open:a,placement:"left",width:"100vw"},h),{},{className:x.drawer,rootClassName:g(x.drawerRoot,d),styles:{body:{padding:0},header:{display:"none"}},children:[m.jsx(_s,{className:x.menu,items:e,mode:"inline",onClick:u,openKeys:n,selectedKeys:r}),m.jsx("div",{className:x.fillRect})]}))]}))}),U=function(){return U=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},U.apply(this,arguments)},Lr={width:"100%",height:"10px",top:"0px",left:"0px",cursor:"row-resize"},$r={width:"10px",height:"100%",top:"0px",left:"0px",cursor:"col-resize"},ft={width:"20px",height:"20px",position:"absolute",zIndex:1},Vu={top:U(U({},Lr),{top:"-5px"}),right:U(U({},$r),{left:void 0,right:"-5px"}),bottom:U(U({},Lr),{top:void 0,bottom:"-5px"}),left:U(U({},$r),{left:"-5px"}),topRight:U(U({},ft),{right:"-10px",top:"-10px",cursor:"ne-resize"}),bottomRight:U(U({},ft),{right:"-10px",bottom:"-10px",cursor:"se-resize"}),bottomLeft:U(U({},ft),{left:"-10px",bottom:"-10px",cursor:"sw-resize"}),topLeft:U(U({},ft),{left:"-10px",top:"-10px",cursor:"nw-resize"})},Ku=w.memo(function(t){var e=t.onResizeStart,n=t.direction,r=t.children,a=t.replaceStyles,o=t.className,i=w.useCallback(function(u){e(u,n)},[e,n]),s=w.useCallback(function(u){e(u,n)},[e,n]),l=w.useMemo(function(){return U(U({position:"absolute",userSelect:"none"},Vu[n]),a??{})},[a,n]);return m.jsx("div",{className:o||void 0,style:l,onMouseDown:i,onTouchStart:s,children:r})}),Yu=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,a){r.__proto__=a}||function(r,a){for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(r[o]=a[o])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),ye=function(){return ye=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},ye.apply(this,arguments)},Xu={width:"auto",height:"auto"},pt=function(t,e,n){return Math.max(Math.min(t,n),e)},Ir=function(t,e,n){var r=Math.round(t/e);return r*e+n*(r-1)},He=function(t,e){return new RegExp(t,"i").test(e)},gt=function(t){return!!(t.touches&&t.touches.length)},Qu=function(t){return!!((t.clientX||t.clientX===0)&&(t.clientY||t.clientY===0))},Mr=function(t,e,n){n===void 0&&(n=0);var r=e.reduce(function(o,i,s){return Math.abs(i-t)<Math.abs(e[o]-t)?s:o},0),a=Math.abs(e[r]-t);return n===0||a<n?e[r]:t},en=function(t){return t=t.toString(),t==="auto"||t.endsWith("px")||t.endsWith("%")||t.endsWith("vh")||t.endsWith("vw")||t.endsWith("vmax")||t.endsWith("vmin")?t:"".concat(t,"px")},mt=function(t,e,n,r){if(t&&typeof t=="string"){if(t.endsWith("px"))return Number(t.replace("px",""));if(t.endsWith("%")){var a=Number(t.replace("%",""))/100;return e*a}if(t.endsWith("vw")){var a=Number(t.replace("vw",""))/100;return n*a}if(t.endsWith("vh")){var a=Number(t.replace("vh",""))/100;return r*a}}return t},Zu=function(t,e,n,r,a,o,i){return r=mt(r,t.width,e,n),a=mt(a,t.height,e,n),o=mt(o,t.width,e,n),i=mt(i,t.height,e,n),{maxWidth:typeof r>"u"?void 0:Number(r),maxHeight:typeof a>"u"?void 0:Number(a),minWidth:typeof o>"u"?void 0:Number(o),minHeight:typeof i>"u"?void 0:Number(i)}},Ju=function(t){return Array.isArray(t)?t:[t,t]},ec=["as","ref","style","className","grid","gridGap","snap","bounds","boundsByDirection","size","defaultSize","minWidth","minHeight","maxWidth","maxHeight","lockAspectRatio","lockAspectRatioExtraWidth","lockAspectRatioExtraHeight","enable","handleStyles","handleClasses","handleWrapperStyle","handleWrapperClass","children","onResizeStart","onResize","onResizeStop","handleComponent","scale","resizeRatio","snapGap"],Hr="__resizable_base__",tc=function(t){Yu(e,t);function e(n){var r,a,o,i,s=t.call(this,n)||this;return s.ratio=1,s.resizable=null,s.parentLeft=0,s.parentTop=0,s.resizableLeft=0,s.resizableRight=0,s.resizableTop=0,s.resizableBottom=0,s.targetLeft=0,s.targetTop=0,s.delta={width:0,height:0},s.appendBase=function(){if(!s.resizable||!s.window)return null;var l=s.parentNode;if(!l)return null;var u=s.window.document.createElement("div");return u.style.width="100%",u.style.height="100%",u.style.position="absolute",u.style.transform="scale(0, 0)",u.style.left="0",u.style.flex="0 0 100%",u.classList?u.classList.add(Hr):u.className+=Hr,l.appendChild(u),u},s.removeBase=function(l){var u=s.parentNode;u&&u.removeChild(l)},s.state={isResizing:!1,width:(a=(r=s.propsSize)===null||r===void 0?void 0:r.width)!==null&&a!==void 0?a:"auto",height:(i=(o=s.propsSize)===null||o===void 0?void 0:o.height)!==null&&i!==void 0?i:"auto",direction:"right",original:{x:0,y:0,width:0,height:0},backgroundStyle:{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0)",cursor:"auto",opacity:0,position:"fixed",zIndex:9999,top:"0",left:"0",bottom:"0",right:"0"},flexBasis:void 0},s.onResizeStart=s.onResizeStart.bind(s),s.onMouseMove=s.onMouseMove.bind(s),s.onMouseUp=s.onMouseUp.bind(s),s}return Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.resizable?this.resizable.parentNode:null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"window",{get:function(){return!this.resizable||!this.resizable.ownerDocument?null:this.resizable.ownerDocument.defaultView},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"propsSize",{get:function(){return this.props.size||this.props.defaultSize||Xu},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){var n=0,r=0;if(this.resizable&&this.window){var a=this.resizable.offsetWidth,o=this.resizable.offsetHeight,i=this.resizable.style.position;i!=="relative"&&(this.resizable.style.position="relative"),n=this.resizable.style.width!=="auto"?this.resizable.offsetWidth:a,r=this.resizable.style.height!=="auto"?this.resizable.offsetHeight:o,this.resizable.style.position=i}return{width:n,height:r}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sizeStyle",{get:function(){var n=this,r=this.props.size,a=function(s){var l;if(typeof n.state[s]>"u"||n.state[s]==="auto")return"auto";if(n.propsSize&&n.propsSize[s]&&(!((l=n.propsSize[s])===null||l===void 0)&&l.toString().endsWith("%"))){if(n.state[s].toString().endsWith("%"))return n.state[s].toString();var u=n.getParentSize(),c=Number(n.state[s].toString().replace("px","")),d=c/u[s]*100;return"".concat(d,"%")}return en(n.state[s])},o=r&&typeof r.width<"u"&&!this.state.isResizing?en(r.width):a("width"),i=r&&typeof r.height<"u"&&!this.state.isResizing?en(r.height):a("height");return{width:o,height:i}},enumerable:!1,configurable:!0}),e.prototype.getParentSize=function(){if(!this.parentNode)return this.window?{width:this.window.innerWidth,height:this.window.innerHeight}:{width:0,height:0};var n=this.appendBase();if(!n)return{width:0,height:0};var r=!1,a=this.parentNode.style.flexWrap;a!=="wrap"&&(r=!0,this.parentNode.style.flexWrap="wrap"),n.style.position="relative",n.style.minWidth="100%",n.style.minHeight="100%";var o={width:n.offsetWidth,height:n.offsetHeight};return r&&(this.parentNode.style.flexWrap=a),this.removeBase(n),o},e.prototype.bindEvents=function(){this.window&&(this.window.addEventListener("mouseup",this.onMouseUp),this.window.addEventListener("mousemove",this.onMouseMove),this.window.addEventListener("mouseleave",this.onMouseUp),this.window.addEventListener("touchmove",this.onMouseMove,{capture:!0,passive:!1}),this.window.addEventListener("touchend",this.onMouseUp))},e.prototype.unbindEvents=function(){this.window&&(this.window.removeEventListener("mouseup",this.onMouseUp),this.window.removeEventListener("mousemove",this.onMouseMove),this.window.removeEventListener("mouseleave",this.onMouseUp),this.window.removeEventListener("touchmove",this.onMouseMove,!0),this.window.removeEventListener("touchend",this.onMouseUp))},e.prototype.componentDidMount=function(){if(!(!this.resizable||!this.window)){var n=this.window.getComputedStyle(this.resizable);this.setState({width:this.state.width||this.size.width,height:this.state.height||this.size.height,flexBasis:n.flexBasis!=="auto"?n.flexBasis:void 0})}},e.prototype.componentWillUnmount=function(){this.window&&this.unbindEvents()},e.prototype.createSizeForCssProperty=function(n,r){var a=this.propsSize&&this.propsSize[r];return this.state[r]==="auto"&&this.state.original[r]===n&&(typeof a>"u"||a==="auto")?"auto":n},e.prototype.calculateNewMaxFromBoundary=function(n,r){var a=this.props.boundsByDirection,o=this.state.direction,i=a&&He("left",o),s=a&&He("top",o),l,u;if(this.props.bounds==="parent"){var c=this.parentNode;c&&(l=i?this.resizableRight-this.parentLeft:c.offsetWidth+(this.parentLeft-this.resizableLeft),u=s?this.resizableBottom-this.parentTop:c.offsetHeight+(this.parentTop-this.resizableTop))}else this.props.bounds==="window"?this.window&&(l=i?this.resizableRight:this.window.innerWidth-this.resizableLeft,u=s?this.resizableBottom:this.window.innerHeight-this.resizableTop):this.props.bounds&&(l=i?this.resizableRight-this.targetLeft:this.props.bounds.offsetWidth+(this.targetLeft-this.resizableLeft),u=s?this.resizableBottom-this.targetTop:this.props.bounds.offsetHeight+(this.targetTop-this.resizableTop));return l&&Number.isFinite(l)&&(n=n&&n<l?n:l),u&&Number.isFinite(u)&&(r=r&&r<u?r:u),{maxWidth:n,maxHeight:r}},e.prototype.calculateNewSizeFromDirection=function(n,r){var a=this.props.scale||1,o=Ju(this.props.resizeRatio||1),i=o[0],s=o[1],l=this.state,u=l.direction,c=l.original,d=this.props,p=d.lockAspectRatio,h=d.lockAspectRatioExtraHeight,f=d.lockAspectRatioExtraWidth,D=c.width,g=c.height,x=h||0,C=f||0;return He("right",u)&&(D=c.width+(n-c.x)*i/a,p&&(g=(D-C)/this.ratio+x)),He("left",u)&&(D=c.width-(n-c.x)*i/a,p&&(g=(D-C)/this.ratio+x)),He("bottom",u)&&(g=c.height+(r-c.y)*s/a,p&&(D=(g-x)*this.ratio+C)),He("top",u)&&(g=c.height-(r-c.y)*s/a,p&&(D=(g-x)*this.ratio+C)),{newWidth:D,newHeight:g}},e.prototype.calculateNewSizeFromAspectRatio=function(n,r,a,o){var i=this.props,s=i.lockAspectRatio,l=i.lockAspectRatioExtraHeight,u=i.lockAspectRatioExtraWidth,c=typeof o.width>"u"?10:o.width,d=typeof a.width>"u"||a.width<0?n:a.width,p=typeof o.height>"u"?10:o.height,h=typeof a.height>"u"||a.height<0?r:a.height,f=l||0,D=u||0;if(s){var g=(p-f)*this.ratio+D,x=(h-f)*this.ratio+D,C=(c-D)/this.ratio+f,y=(d-D)/this.ratio+f,S=Math.max(c,g),E=Math.min(d,x),_=Math.max(p,C),T=Math.min(h,y);n=pt(n,S,E),r=pt(r,_,T)}else n=pt(n,c,d),r=pt(r,p,h);return{newWidth:n,newHeight:r}},e.prototype.setBoundingClientRect=function(){var n=1/(this.props.scale||1);if(this.props.bounds==="parent"){var r=this.parentNode;if(r){var a=r.getBoundingClientRect();this.parentLeft=a.left*n,this.parentTop=a.top*n}}if(this.props.bounds&&typeof this.props.bounds!="string"){var o=this.props.bounds.getBoundingClientRect();this.targetLeft=o.left*n,this.targetTop=o.top*n}if(this.resizable){var i=this.resizable.getBoundingClientRect(),s=i.left,l=i.top,u=i.right,c=i.bottom;this.resizableLeft=s*n,this.resizableRight=u*n,this.resizableTop=l*n,this.resizableBottom=c*n}},e.prototype.onResizeStart=function(n,r){if(!(!this.resizable||!this.window)){var a=0,o=0;if(n.nativeEvent&&Qu(n.nativeEvent)?(a=n.nativeEvent.clientX,o=n.nativeEvent.clientY):n.nativeEvent&&gt(n.nativeEvent)&&(a=n.nativeEvent.touches[0].clientX,o=n.nativeEvent.touches[0].clientY),this.props.onResizeStart&&this.resizable){var i=this.props.onResizeStart(n,r,this.resizable);if(i===!1)return}this.props.size&&(typeof this.props.size.height<"u"&&this.props.size.height!==this.state.height&&this.setState({height:this.props.size.height}),typeof this.props.size.width<"u"&&this.props.size.width!==this.state.width&&this.setState({width:this.props.size.width})),this.ratio=typeof this.props.lockAspectRatio=="number"?this.props.lockAspectRatio:this.size.width/this.size.height;var s,l=this.window.getComputedStyle(this.resizable);if(l.flexBasis!=="auto"){var u=this.parentNode;if(u){var c=this.window.getComputedStyle(u).flexDirection;this.flexDir=c.startsWith("row")?"row":"column",s=l.flexBasis}}this.setBoundingClientRect(),this.bindEvents();var d={original:{x:a,y:o,width:this.size.width,height:this.size.height},isResizing:!0,backgroundStyle:ye(ye({},this.state.backgroundStyle),{cursor:this.window.getComputedStyle(n.target).cursor||"auto"}),direction:r,flexBasis:s};this.setState(d)}},e.prototype.onMouseMove=function(n){var r=this;if(!(!this.state.isResizing||!this.resizable||!this.window)){if(this.window.TouchEvent&&gt(n))try{n.preventDefault(),n.stopPropagation()}catch{}var a=this.props,o=a.maxWidth,i=a.maxHeight,s=a.minWidth,l=a.minHeight,u=gt(n)?n.touches[0].clientX:n.clientX,c=gt(n)?n.touches[0].clientY:n.clientY,d=this.state,p=d.direction,h=d.original,f=d.width,D=d.height,g=this.getParentSize(),x=Zu(g,this.window.innerWidth,this.window.innerHeight,o,i,s,l);o=x.maxWidth,i=x.maxHeight,s=x.minWidth,l=x.minHeight;var C=this.calculateNewSizeFromDirection(u,c),y=C.newHeight,S=C.newWidth,E=this.calculateNewMaxFromBoundary(o,i);this.props.snap&&this.props.snap.x&&(S=Mr(S,this.props.snap.x,this.props.snapGap)),this.props.snap&&this.props.snap.y&&(y=Mr(y,this.props.snap.y,this.props.snapGap));var _=this.calculateNewSizeFromAspectRatio(S,y,{width:E.maxWidth,height:E.maxHeight},{width:s,height:l});if(S=_.newWidth,y=_.newHeight,this.props.grid){var T=Ir(S,this.props.grid[0],this.props.gridGap?this.props.gridGap[0]:0),M=Ir(y,this.props.grid[1],this.props.gridGap?this.props.gridGap[1]:0),Z=this.props.snapGap||0,ae=Z===0||Math.abs(T-S)<=Z?T:S,W=Z===0||Math.abs(M-y)<=Z?M:y;S=ae,y=W}var j={width:S-h.width,height:y-h.height};if(this.delta=j,f&&typeof f=="string"){if(f.endsWith("%")){var H=S/g.width*100;S="".concat(H,"%")}else if(f.endsWith("vw")){var z=S/this.window.innerWidth*100;S="".concat(z,"vw")}else if(f.endsWith("vh")){var L=S/this.window.innerHeight*100;S="".concat(L,"vh")}}if(D&&typeof D=="string"){if(D.endsWith("%")){var H=y/g.height*100;y="".concat(H,"%")}else if(D.endsWith("vw")){var z=y/this.window.innerWidth*100;y="".concat(z,"vw")}else if(D.endsWith("vh")){var L=y/this.window.innerHeight*100;y="".concat(L,"vh")}}var G={width:this.createSizeForCssProperty(S,"width"),height:this.createSizeForCssProperty(y,"height")};this.flexDir==="row"?G.flexBasis=G.width:this.flexDir==="column"&&(G.flexBasis=G.height);var ge=this.state.width!==G.width,xe=this.state.height!==G.height,Ce=this.state.flexBasis!==G.flexBasis,Se=ge||xe||Ce;Se&&Ds.flushSync(function(){r.setState(G)}),this.props.onResize&&Se&&this.props.onResize(n,p,this.resizable,j)}},e.prototype.onMouseUp=function(n){var r,a,o=this.state,i=o.isResizing,s=o.direction;o.original,!(!i||!this.resizable)&&(this.props.onResizeStop&&this.props.onResizeStop(n,s,this.resizable,this.delta),this.props.size&&this.setState({width:(r=this.props.size.width)!==null&&r!==void 0?r:"auto",height:(a=this.props.size.height)!==null&&a!==void 0?a:"auto"}),this.unbindEvents(),this.setState({isResizing:!1,backgroundStyle:ye(ye({},this.state.backgroundStyle),{cursor:"auto"})}))},e.prototype.updateSize=function(n){var r,a;this.setState({width:(r=n.width)!==null&&r!==void 0?r:"auto",height:(a=n.height)!==null&&a!==void 0?a:"auto"})},e.prototype.renderResizer=function(){var n=this,r=this.props,a=r.enable,o=r.handleStyles,i=r.handleClasses,s=r.handleWrapperStyle,l=r.handleWrapperClass,u=r.handleComponent;if(!a)return null;var c=Object.keys(a).map(function(d){return a[d]!==!1?m.jsx(Ku,{direction:d,onResizeStart:n.onResizeStart,replaceStyles:o&&o[d],className:i&&i[d],children:u&&u[d]?u[d]:null},d):null});return m.jsx("div",{className:l,style:s,children:c})},e.prototype.render=function(){var n=this,r=Object.keys(this.props).reduce(function(i,s){return ec.indexOf(s)!==-1||(i[s]=n.props[s]),i},{}),a=ye(ye(ye({position:"relative",userSelect:this.state.isResizing?"none":"auto"},this.props.style),this.sizeStyle),{maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight,minWidth:this.props.minWidth,minHeight:this.props.minHeight,boxSizing:"border-box",flexShrink:0});this.state.flexBasis&&(a.flexBasis=this.state.flexBasis);var o=this.props.as||"div";return m.jsxs(o,ye({style:a,className:this.props.className},r,{ref:function(i){i&&(n.resizable=i)},children:[this.state.isResizing&&m.jsx("div",{style:this.state.backgroundStyle}),this.props.children,this.renderResizer()]}))},e.defaultProps={as:"div",onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},enable:{top:!0,right:!0,bottom:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},style:{},grid:[1,1],gridGap:[0,0],lockAspectRatio:!1,lockAspectRatioExtraWidth:0,lockAspectRatioExtraHeight:0,scale:1,resizeRatio:1,snapGap:0},e}(w.PureComponent),Wr,Gr,Ur,qr,Vr,Kr,Yr,Xr,Qr,Zr,Jr,ea,ta,na,ra,aa,oa,ia,sa,la,bt=16,Dt=40,Re=16,ne="draggable-panel",nc=I(function(t,e){var n=t.token,r=e.headerHeight,a=e.showHandlerWideArea,o=$(Wr||(Wr=F([`
      position: relative;

      &::before {
        content: '';
        position: absolute;
        z-index: 50;
        transition: all 0.2s `,`;
      }

      &:hover,
      &:active {
        &::before {
          background: `,` !important;
        }
      }
    `])),n.motionEaseOut,n.colorPrimary),i=$(Gr||(Gr=F([`
      pointer-events: `,`;

      position: absolute;
      z-index: 10;

      opacity: 0;

      transition: all 0.2s `,`;

      &:hover {
        opacity: 1 !important;
      }

      &:active {
        opacity: 1 !important;
      }

      > div {
        pointer-events: all;
        cursor: pointer;

        position: absolute;

        color: `,`;

        background: `,`;
        border-color: `,`;
        border-style: solid;
        border-width: 1px;
        border-radius: 4px;

        transition: all 0.2s `,`;

        &:hover {
          color: `,`;
          background: `,`;
        }

        &:active {
          color: `,`;
          background: `,`;
        }
      }
    `])),a?"all":"none",n.motionEaseOut,n.colorTextTertiary,n.colorFillTertiary,n.colorBorderSecondary,n.motionEaseOut,n.colorTextSecondary,n.colorFillSecondary,n.colorText,n.colorFill),s=$(Ur||(Ur=F([`
      position: absolute;
      z-index: 200;
    `])));return{bottomFloat:oe(s,$(qr||(qr=F([`
          inset-block-end: 0;
          inset-inline: 0 0;
          width: 100%;
        `])))),bottomHandle:oe("".concat(ne,"-bottom-handle"),$(Vr||(Vr=F([`
          `,`;

          &::before {
            inset-block-end: 50%;
            width: 100%;
            height: 2px;
          }
        `])),o)),container:oe(ne,$(Kr||(Kr=F([`
          flex-shrink: 0;
          border: 0 solid `,`;

          &:hover {
            .`,`-toggle {
              opacity: 1;
            }
          }
        `])),n.colorBorderSecondary,ne)),fixed:$(Yr||(Yr=F([`
        position: relative;
      `]))),fullscreen:$(Xr||(Xr=F([`
        position: absolute;
        inset-block: `,`px 0;
        inset-inline: 0;

        width: 100%;
        height: calc(100% - `,`px);

        background: `,`;
      `])),r,r,n.colorBgLayout),handlerIcon:$(Qr||(Qr=F([`
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s `,`;
      `])),n.motionEaseOut),leftFloat:oe(s,$(Zr||(Zr=F([`
          inset-block: `,`px 0;
          inset-inline-start: 0;
          height: calc(100% - `,`px);
        `])),r,r)),leftHandle:oe($(Jr||(Jr=F([`
          `,`;

          &::before {
            inset-inline-start: 50%;
            width: 2px;
            height: 100%;
          }
        `])),o),"".concat(ne,"-left-handle")),panel:oe("".concat(ne,"-fixed"),$(ea||(ea=F([`
          overflow: hidden;
          transition: all 0.2s `,`;
        `])),n.motionEaseOut)),rightFloat:oe(s,$(ta||(ta=F([`
          inset-block: `,`px 0;
          inset-inline-end: 0;
          height: calc(100% - `,`px);
        `])),r,r)),rightHandle:oe($(na||(na=F([`
          `,`;
          &::before {
            inset-inline-end: 50%;
            width: 2px;
            height: 100%;
          }
        `])),o),"".concat(ne,"-right-handle")),toggleBottom:oe("".concat(ne,"-toggle"),"".concat(ne,"-toggle-bottom"),i,$(ra||(ra=F([`
          inset-block-end: -`,`px;
          width: 100%;
          height: `,`px;

          > div {
            inset-inline-start: 50%;

            width: `,`px;
            height: 16px;
            margin-inline-start: -20px;

            border-radius: 0 0 4px 4px;
          }
        `])),bt,Re,Dt)),toggleLeft:oe("".concat(ne,"-toggle"),"".concat(ne,"-toggle-left"),i,$(aa||(aa=F([`
          inset-inline-start: -`,`px;
          width: `,`px;
          height: 100%;

          > div {
            inset-block-start: 50%;

            width: `,`px;
            height: `,`px;
            margin-block-start: -20px;

            border-radius: 4px 0 0 4px;
          }
        `])),bt,Re,Re,Dt)),toggleRight:oe("".concat(ne,"-toggle"),"".concat(ne,"-toggle-right"),i,$(oa||(oa=F([`
          inset-inline-end: -`,`px;
          width: `,`px;
          height: 100%;

          > div {
            inset-block-start: 50%;

            width: `,`px;
            height: `,`px;
            margin-block-start: -20px;

            border-radius: 0 4px 4px 0;
          }
        `])),bt,Re,Re,Dt)),toggleTop:oe("".concat(ne,"-toggle"),"".concat(ne,"-toggle-top"),i,$(ia||(ia=F([`
          inset-block-start: -`,`px;
          width: 100%;
          height: `,`px;

          > div {
            inset-inline-start: 50%;

            width: `,`px;
            height: `,`px;
            margin-inline-start: -20px;

            border-radius: 4px 4px 0 0;
          }
        `])),bt,Re,Dt,Re)),topFloat:oe(s,$(sa||(sa=F([`
          inset-block-start: `,`px;
          inset-inline: 0 0;
          width: 100%;
        `])),r)),topHandle:oe("".concat(ne,"-top-handle"),$(la||(la=F([`
          `,`;

          &::before {
            inset-block-start: 50%;
            width: 100%;
            height: 2px;
          }
        `])),o))}}),tn=function(e){switch(e){case"bottom":return"top";case"top":return"bottom";case"right":return"left";case"left":return"right"}},rc=180,ac=280,a0=w.memo(function(t){var e=t.headerHeight,n=e===void 0?0:e,r=t.fullscreen,a=t.maxHeight,o=t.pin,i=o===void 0?!0:o,s=t.mode,l=s===void 0?"fixed":s,u=t.children,c=t.placement,d=c===void 0?"right":c,p=t.resize,h=t.style,f=t.showHandlerWideArea,D=f===void 0?!0:f,g=t.size,x=t.defaultSize,C=t.minWidth,y=t.minHeight,S=t.maxWidth,E=t.onSizeChange,_=t.onSizeDragging,T=t.expandable,M=T===void 0?!0:T,Z=t.expand,ae=t.defaultExpand,W=ae===void 0?!0:ae,j=t.onExpandChange,H=t.className,z=t.showHandlerWhenUnexpand,L=t.destroyOnClose,G=t.hanlderStyle,ge=t.classNames,xe=ge===void 0?{}:ge,Ce=t.dir,Se=w.useRef(),dt=Hs(Se),qt=d==="top"||d==="bottom",es=w.useContext(Jo.ConfigContext),ts=es.direction,ns=Ce??ts,Fe=d;ns==="rtl"&&["left","right"].includes(d)&&(Fe=Fe==="left"?"right":"left");var Mn=nc({headerHeight:n,showHandlerWideArea:D}),Ee=Mn.styles,ht=Mn.cx,rs=ei(W,{onChange:j,value:Z}),Hn=ie(rs,2),me=Hn[0],Vt=Hn[1];w.useEffect(function(){i||(dt&&!me?Vt(!0):!dt&&me&&Vt(!1))},[i,dt,me]);var as=w.useState(!0),Wn=ie(as,2),os=Wn[0],Gn=Wn[1],is=w.useState(!1),Un=ie(is,2),ss=Un[0],qn=Un[1],Kt=p!==!1&&me,ls=w.useMemo(function(){return Kt?O({},tn(Fe),Ee["".concat(tn(Fe),"Handle")]):{}},[Kt,Fe]),us=b(O({bottom:!1,bottomLeft:!1,bottomRight:!1,left:!1,right:!1,top:!1,topLeft:!1,topRight:!1},tn(Fe),!0),p),cs=w.useMemo(function(){return qt?b({height:rc,width:"100%"},x):b({height:"100%",width:ac},x)},[qt]),ds=me?{defaultSize:cs,maxHeight:typeof a=="number"?Math.max(a,0):a,maxWidth:typeof S=="number"?Math.max(S,0):S,minHeight:typeof y=="number"?Math.max(y,0):y,minWidth:typeof C=="number"?Math.max(C,0):C,size:g}:qt?{minHeight:0,size:{height:0}}:{minWidth:0,size:{width:0}},Vn=w.useMemo(function(){switch(Fe){case"top":return{Arrow:_n,className:"Bottom"};case"bottom":return{Arrow:tl,className:"Top"};case"right":return{Arrow:Zs,className:"Left"};case"left":return{Arrow:oi,className:"Right"}}},[Ee,Fe]),hs=Vn.Arrow,Kn=Vn.className,fs=m.jsx(rt,{className:ht(Ee["toggle".concat(Kn)],xe.handle),style:{opacity:me?i?void 0:0:z?1:0},children:m.jsx(rt,{onClick:function(){Vt(!me)},style:G,children:m.jsx("div",{className:Ee.handlerIcon,style:{transform:"rotate(".concat(me?180:0,"deg)")},children:m.jsx(hs,{size:16,strokeWidth:1.5})})})}),Yn=m.jsx(tc,b(b({},ds),{},{className:ht(Ee.panel,xe.content),enable:Kt?us:void 0,handleClasses:ls,onResize:function(ps,gs,Ze,Xt){_?.(Xt,{height:Ze.style.height,width:Ze.style.width})},onResizeStart:function(){qn(!0),Gn(!1)},onResizeStop:function(ps,gs,Ze,Xt){qn(!1),Gn(!0),E?.(Xt,{height:Ze.style.height,width:Ze.style.width})},style:b({transition:ss?"unset":void 0},h),children:u}));return r?m.jsx("div",{className:ht(Ee.fullscreen,H),children:u}):m.jsxs("aside",{className:ht(Ee.container,Ee[l==="fixed"?"fixed":"".concat(Fe,"Float")],H),dir:Ce,ref:Se,style:me?O({},"border".concat(Kn,"Width"),1):{},children:[M&&os&&fs,L?me&&Yn:Yn]})}),pi={exports:{}},oc="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ic=oc,sc=ic;function gi(){}function mi(){}mi.resetWarningCache=gi;var lc=function(){function t(r,a,o,i,s,l){if(l!==sc){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:mi,resetWarningCache:gi};return n.PropTypes=n,n};pi.exports=lc();var uc=pi.exports;const o0=Xo(uc);function cc(t){return t.join(" ").trim()}function dc(t,e){const n=e||{};return(t[t.length-1]===""?[...t,""]:t).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const ua={}.hasOwnProperty;function hc(t,e){const n=e||{};function r(a,...o){let i=r.invalid;const s=r.handlers;if(a&&ua.call(a,t)){const l=String(a[t]);i=ua.call(s,l)?s[l]:r.unknown}if(i)return i.call(this,a,...o)}return r.handlers=n.handlers||{},r.invalid=n.invalid,r.unknown=n.unknown,r}const fc=["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"];function ca(t,e){const n=String(t);if(typeof e!="string")throw new TypeError("Expected character");let r=0,a=n.indexOf(e);for(;a!==-1;)r++,a=n.indexOf(e,a+e.length);return r}let Le=class extends Error{constructor(e){super(e),this.name="ShikiError"}},Nn=class extends Error{constructor(e){super(e),this.name="ShikiError"}};function pc(){return 2147483648}function gc(){return typeof performance<"u"?performance.now():Date.now()}const mc=(t,e)=>t+(e-t%e)%e;async function bc(t){let e,n;const r={};function a(h){n=h,r.HEAPU8=new Uint8Array(h),r.HEAPU32=new Uint32Array(h)}function o(h,f,D){r.HEAPU8.copyWithin(h,f,f+D)}function i(h){try{return e.grow(h-n.byteLength+65535>>>16),a(e.buffer),1}catch{}}function s(h){const f=r.HEAPU8.length;h=h>>>0;const D=pc();if(h>D)return!1;for(let g=1;g<=4;g*=2){let x=f*(1+.2/g);x=Math.min(x,h+100663296);const C=Math.min(D,mc(Math.max(h,x),65536));if(i(C))return!0}return!1}const l=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function u(h,f,D=1024){const g=f+D;let x=f;for(;h[x]&&!(x>=g);)++x;if(x-f>16&&h.buffer&&l)return l.decode(h.subarray(f,x));let C="";for(;f<x;){let y=h[f++];if(!(y&128)){C+=String.fromCharCode(y);continue}const S=h[f++]&63;if((y&224)===192){C+=String.fromCharCode((y&31)<<6|S);continue}const E=h[f++]&63;if((y&240)===224?y=(y&15)<<12|S<<6|E:y=(y&7)<<18|S<<12|E<<6|h[f++]&63,y<65536)C+=String.fromCharCode(y);else{const _=y-65536;C+=String.fromCharCode(55296|_>>10,56320|_&1023)}}return C}function c(h,f){return h?u(r.HEAPU8,h,f):""}const d={emscripten_get_now:gc,emscripten_memcpy_big:o,emscripten_resize_heap:s,fd_write:()=>0};async function p(){const f=await t({env:d,wasi_snapshot_preview1:d});e=f.memory,a(e.buffer),Object.assign(r,f),r.UTF8ToString=c}return await p(),r}var Dc=Object.defineProperty,yc=(t,e,n)=>e in t?Dc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,V=(t,e,n)=>(yc(t,typeof e!="symbol"?e+"":e,n),n);let X=null;function vc(t){throw new Nn(t.UTF8ToString(t.getLastOnigError()))}class It{constructor(e){V(this,"utf16Length"),V(this,"utf8Length"),V(this,"utf16Value"),V(this,"utf8Value"),V(this,"utf16OffsetToUtf8"),V(this,"utf8OffsetToUtf16");const n=e.length,r=It._utf8ByteLength(e),a=r!==n,o=a?new Uint32Array(n+1):null;a&&(o[n]=r);const i=a?new Uint32Array(r+1):null;a&&(i[r]=n);const s=new Uint8Array(r);let l=0;for(let u=0;u<n;u++){const c=e.charCodeAt(u);let d=c,p=!1;if(c>=55296&&c<=56319&&u+1<n){const h=e.charCodeAt(u+1);h>=56320&&h<=57343&&(d=(c-55296<<10)+65536|h-56320,p=!0)}a&&(o[u]=l,p&&(o[u+1]=l),d<=127?i[l+0]=u:d<=2047?(i[l+0]=u,i[l+1]=u):d<=65535?(i[l+0]=u,i[l+1]=u,i[l+2]=u):(i[l+0]=u,i[l+1]=u,i[l+2]=u,i[l+3]=u)),d<=127?s[l++]=d:d<=2047?(s[l++]=192|(d&1984)>>>6,s[l++]=128|(d&63)>>>0):d<=65535?(s[l++]=224|(d&61440)>>>12,s[l++]=128|(d&4032)>>>6,s[l++]=128|(d&63)>>>0):(s[l++]=240|(d&1835008)>>>18,s[l++]=128|(d&258048)>>>12,s[l++]=128|(d&4032)>>>6,s[l++]=128|(d&63)>>>0),p&&u++}this.utf16Length=n,this.utf8Length=r,this.utf16Value=e,this.utf8Value=s,this.utf16OffsetToUtf8=o,this.utf8OffsetToUtf16=i}static _utf8ByteLength(e){let n=0;for(let r=0,a=e.length;r<a;r++){const o=e.charCodeAt(r);let i=o,s=!1;if(o>=55296&&o<=56319&&r+1<a){const l=e.charCodeAt(r+1);l>=56320&&l<=57343&&(i=(o-55296<<10)+65536|l-56320,s=!0)}i<=127?n+=1:i<=2047?n+=2:i<=65535?n+=3:n+=4,s&&r++}return n}createString(e){const n=e.omalloc(this.utf8Length);return e.HEAPU8.set(this.utf8Value,n),n}}const be=class{constructor(t){if(V(this,"id",++be.LAST_ID),V(this,"_onigBinding"),V(this,"content"),V(this,"utf16Length"),V(this,"utf8Length"),V(this,"utf16OffsetToUtf8"),V(this,"utf8OffsetToUtf16"),V(this,"ptr"),!X)throw new Nn("Must invoke loadWasm first.");this._onigBinding=X,this.content=t;const e=new It(t);this.utf16Length=e.utf16Length,this.utf8Length=e.utf8Length,this.utf16OffsetToUtf8=e.utf16OffsetToUtf8,this.utf8OffsetToUtf16=e.utf8OffsetToUtf16,this.utf8Length<1e4&&!be._sharedPtrInUse?(be._sharedPtr||(be._sharedPtr=X.omalloc(1e4)),be._sharedPtrInUse=!0,X.HEAPU8.set(e.utf8Value,be._sharedPtr),this.ptr=be._sharedPtr):this.ptr=e.createString(X)}convertUtf8OffsetToUtf16(t){return this.utf8OffsetToUtf16?t<0?0:t>this.utf8Length?this.utf16Length:this.utf8OffsetToUtf16[t]:t}convertUtf16OffsetToUtf8(t){return this.utf16OffsetToUtf8?t<0?0:t>this.utf16Length?this.utf8Length:this.utf16OffsetToUtf8[t]:t}dispose(){this.ptr===be._sharedPtr?be._sharedPtrInUse=!1:this._onigBinding.ofree(this.ptr)}};let lt=be;V(lt,"LAST_ID",0);V(lt,"_sharedPtr",0);V(lt,"_sharedPtrInUse",!1);class xc{constructor(e){if(V(this,"_onigBinding"),V(this,"_ptr"),!X)throw new Nn("Must invoke loadWasm first.");const n=[],r=[];for(let s=0,l=e.length;s<l;s++){const u=new It(e[s]);n[s]=u.createString(X),r[s]=u.utf8Length}const a=X.omalloc(4*e.length);X.HEAPU32.set(n,a/4);const o=X.omalloc(4*e.length);X.HEAPU32.set(r,o/4);const i=X.createOnigScanner(a,o,e.length);for(let s=0,l=e.length;s<l;s++)X.ofree(n[s]);X.ofree(o),X.ofree(a),i===0&&vc(X),this._onigBinding=X,this._ptr=i}dispose(){this._onigBinding.freeOnigScanner(this._ptr)}findNextMatchSync(e,n,r){let a=0;if(typeof r=="number"&&(a=r),typeof e=="string"){e=new lt(e);const o=this._findNextMatchSync(e,n,!1,a);return e.dispose(),o}return this._findNextMatchSync(e,n,!1,a)}_findNextMatchSync(e,n,r,a){const o=this._onigBinding,i=o.findNextOnigScannerMatch(this._ptr,e.id,e.ptr,e.utf8Length,e.convertUtf16OffsetToUtf8(n),a);if(i===0)return null;const s=o.HEAPU32;let l=i/4;const u=s[l++],c=s[l++],d=[];for(let p=0;p<c;p++){const h=e.convertUtf8OffsetToUtf16(s[l++]),f=e.convertUtf8OffsetToUtf16(s[l++]);d[p]={start:h,end:f,length:f-h}}return{index:u,captureIndices:d}}}function Cc(t){return typeof t.instantiator=="function"}function Fc(t){return typeof t.default=="function"}function wc(t){return typeof t.data<"u"}function kc(t){return typeof Response<"u"&&t instanceof Response}function Sc(t){return typeof ArrayBuffer<"u"&&(t instanceof ArrayBuffer||ArrayBuffer.isView(t))||typeof Buffer<"u"&&Buffer.isBuffer?.(t)||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer||typeof Uint32Array<"u"&&t instanceof Uint32Array}let yt;function Ec(t){if(yt)return yt;async function e(){X=await bc(async n=>{let r=t;return r=await r,typeof r=="function"&&(r=await r(n)),typeof r=="function"&&(r=await r(n)),Cc(r)?r=await r.instantiator(n):Fc(r)?r=await r.default(n):(wc(r)&&(r=r.data),kc(r)?typeof WebAssembly.instantiateStreaming=="function"?r=await _c(r)(n):r=await Ac(r)(n):Sc(r)?r=await nn(r)(n):r instanceof WebAssembly.Module?r=await nn(r)(n):"default"in r&&r.default instanceof WebAssembly.Module&&(r=await nn(r.default)(n))),"instance"in r&&(r=r.instance),"exports"in r&&(r=r.exports),r})}return yt=e(),yt}function nn(t){return e=>WebAssembly.instantiate(t,e)}function _c(t){return e=>WebAssembly.instantiateStreaming(t,e)}function Ac(t){return async e=>{const n=await t.arrayBuffer();return WebAssembly.instantiate(n,e)}}let Bc;function Nc(){return Bc}async function Rc(t){return t&&await Ec(t),{createScanner(e){return new xc(e.map(n=>typeof n=="string"?n:n.source))},createString(e){return new lt(e)}}}function jc(t){return Rn(t)}function Rn(t){return Array.isArray(t)?Tc(t):t instanceof RegExp?t:typeof t=="object"?Oc(t):t}function Tc(t){let e=[];for(let n=0,r=t.length;n<r;n++)e[n]=Rn(t[n]);return e}function Oc(t){let e={};for(let n in t)e[n]=Rn(t[n]);return e}function bi(t,...e){return e.forEach(n=>{for(let r in n)t[r]=n[r]}),t}function Di(t){const e=~t.lastIndexOf("/")||~t.lastIndexOf("\\");return e===0?t:~e===t.length-1?Di(t.substring(0,t.length-1)):t.substr(~e+1)}var rn=/\$(\d+)|\${(\d+):\/(downcase|upcase)}/g,vt=class{static hasCaptures(t){return t===null?!1:(rn.lastIndex=0,rn.test(t))}static replaceCaptures(t,e,n){return t.replace(rn,(r,a,o,i)=>{let s=n[parseInt(a||o,10)];if(s){let l=e.substring(s.start,s.end);for(;l[0]===".";)l=l.substring(1);switch(i){case"downcase":return l.toLowerCase();case"upcase":return l.toUpperCase();default:return l}}else return r})}};function yi(t,e){return t<e?-1:t>e?1:0}function vi(t,e){if(t===null&&e===null)return 0;if(!t)return-1;if(!e)return 1;let n=t.length,r=e.length;if(n===r){for(let a=0;a<n;a++){let o=yi(t[a],e[a]);if(o!==0)return o}return 0}return n-r}function da(t){return!!(/^#[0-9a-f]{6}$/i.test(t)||/^#[0-9a-f]{8}$/i.test(t)||/^#[0-9a-f]{3}$/i.test(t)||/^#[0-9a-f]{4}$/i.test(t))}function xi(t){return t.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g,"\\$&")}var Ci=class{constructor(t){v(this,"cache",new Map);this.fn=t}get(t){if(this.cache.has(t))return this.cache.get(t);const e=this.fn(t);return this.cache.set(t,e),e}},Bt=class{constructor(t,e,n){v(this,"_cachedMatchRoot",new Ci(t=>this._root.match(t)));this._colorMap=t,this._defaults=e,this._root=n}static createFromRawTheme(t,e){return this.createFromParsedTheme(Lc(t),e)}static createFromParsedTheme(t,e){return Ic(t,e)}getColorMap(){return this._colorMap.getColorMap()}getDefaults(){return this._defaults}match(t){if(t===null)return this._defaults;const e=t.scopeName,r=this._cachedMatchRoot.get(e).find(a=>zc(t.parent,a.parentScopes));return r?new Fi(r.fontStyle,r.foreground,r.background):null}},an=class kt{constructor(e,n){this.parent=e,this.scopeName=n}static push(e,n){for(const r of n)e=new kt(e,r);return e}static from(...e){let n=null;for(let r=0;r<e.length;r++)n=new kt(n,e[r]);return n}push(e){return new kt(this,e)}getSegments(){let e=this;const n=[];for(;e;)n.push(e.scopeName),e=e.parent;return n.reverse(),n}toString(){return this.getSegments().join(" ")}extends(e){return this===e?!0:this.parent===null?!1:this.parent.extends(e)}getExtensionIfDefined(e){const n=[];let r=this;for(;r&&r!==e;)n.push(r.scopeName),r=r.parent;return r===e?n.reverse():void 0}};function zc(t,e){if(e.length===0)return!0;for(let n=0;n<e.length;n++){let r=e[n],a=!1;if(r===">"){if(n===e.length-1)return!1;r=e[++n],a=!0}for(;t&&!Pc(t.scopeName,r);){if(a)return!1;t=t.parent}if(!t)return!1;t=t.parent}return!0}function Pc(t,e){return e===t||t.startsWith(e)&&t[e.length]==="."}var Fi=class{constructor(t,e,n){this.fontStyle=t,this.foregroundId=e,this.backgroundId=n}};function Lc(t){if(!t)return[];if(!t.settings||!Array.isArray(t.settings))return[];let e=t.settings,n=[],r=0;for(let a=0,o=e.length;a<o;a++){let i=e[a];if(!i.settings)continue;let s;if(typeof i.scope=="string"){let d=i.scope;d=d.replace(/^[,]+/,""),d=d.replace(/[,]+$/,""),s=d.split(",")}else Array.isArray(i.scope)?s=i.scope:s=[""];let l=-1;if(typeof i.settings.fontStyle=="string"){l=0;let d=i.settings.fontStyle.split(" ");for(let p=0,h=d.length;p<h;p++)switch(d[p]){case"italic":l=l|1;break;case"bold":l=l|2;break;case"underline":l=l|4;break;case"strikethrough":l=l|8;break}}let u=null;typeof i.settings.foreground=="string"&&da(i.settings.foreground)&&(u=i.settings.foreground);let c=null;typeof i.settings.background=="string"&&da(i.settings.background)&&(c=i.settings.background);for(let d=0,p=s.length;d<p;d++){let f=s[d].trim().split(" "),D=f[f.length-1],g=null;f.length>1&&(g=f.slice(0,f.length-1),g.reverse()),n[r++]=new $c(D,g,a,l,u,c)}}return n}var $c=class{constructor(t,e,n,r,a,o){this.scope=t,this.parentScopes=e,this.index=n,this.fontStyle=r,this.foreground=a,this.background=o}},ke=(t=>(t[t.NotSet=-1]="NotSet",t[t.None=0]="None",t[t.Italic=1]="Italic",t[t.Bold=2]="Bold",t[t.Underline=4]="Underline",t[t.Strikethrough=8]="Strikethrough",t))(ke||{});function Ic(t,e){t.sort((l,u)=>{let c=yi(l.scope,u.scope);return c!==0||(c=vi(l.parentScopes,u.parentScopes),c!==0)?c:l.index-u.index});let n=0,r="#000000",a="#ffffff";for(;t.length>=1&&t[0].scope==="";){let l=t.shift();l.fontStyle!==-1&&(n=l.fontStyle),l.foreground!==null&&(r=l.foreground),l.background!==null&&(a=l.background)}let o=new Mc(e),i=new Fi(n,o.getId(r),o.getId(a)),s=new Wc(new pn(0,null,-1,0,0),[]);for(let l=0,u=t.length;l<u;l++){let c=t[l];s.insert(0,c.scope,c.parentScopes,c.fontStyle,o.getId(c.foreground),o.getId(c.background))}return new Bt(o,i,s)}var Mc=class{constructor(t){v(this,"_isFrozen");v(this,"_lastColorId");v(this,"_id2color");v(this,"_color2id");if(this._lastColorId=0,this._id2color=[],this._color2id=Object.create(null),Array.isArray(t)){this._isFrozen=!0;for(let e=0,n=t.length;e<n;e++)this._color2id[t[e]]=e,this._id2color[e]=t[e]}else this._isFrozen=!1}getId(t){if(t===null)return 0;t=t.toUpperCase();let e=this._color2id[t];if(e)return e;if(this._isFrozen)throw new Error(`Missing color in color map - ${t}`);return e=++this._lastColorId,this._color2id[t]=e,this._id2color[e]=t,e}getColorMap(){return this._id2color.slice(0)}},Hc=Object.freeze([]),pn=class wi{constructor(e,n,r,a,o){v(this,"scopeDepth");v(this,"parentScopes");v(this,"fontStyle");v(this,"foreground");v(this,"background");this.scopeDepth=e,this.parentScopes=n||Hc,this.fontStyle=r,this.foreground=a,this.background=o}clone(){return new wi(this.scopeDepth,this.parentScopes,this.fontStyle,this.foreground,this.background)}static cloneArr(e){let n=[];for(let r=0,a=e.length;r<a;r++)n[r]=e[r].clone();return n}acceptOverwrite(e,n,r,a){this.scopeDepth>e?console.log("how did this happen?"):this.scopeDepth=e,n!==-1&&(this.fontStyle=n),r!==0&&(this.foreground=r),a!==0&&(this.background=a)}},Wc=class gn{constructor(e,n=[],r={}){v(this,"_rulesWithParentScopes");this._mainRule=e,this._children=r,this._rulesWithParentScopes=n}static _cmpBySpecificity(e,n){if(e.scopeDepth!==n.scopeDepth)return n.scopeDepth-e.scopeDepth;let r=0,a=0;for(;e.parentScopes[r]===">"&&r++,n.parentScopes[a]===">"&&a++,!(r>=e.parentScopes.length||a>=n.parentScopes.length);){const o=n.parentScopes[a].length-e.parentScopes[r].length;if(o!==0)return o;r++,a++}return n.parentScopes.length-e.parentScopes.length}match(e){if(e!==""){let r=e.indexOf("."),a,o;if(r===-1?(a=e,o=""):(a=e.substring(0,r),o=e.substring(r+1)),this._children.hasOwnProperty(a))return this._children[a].match(o)}const n=this._rulesWithParentScopes.concat(this._mainRule);return n.sort(gn._cmpBySpecificity),n}insert(e,n,r,a,o,i){if(n===""){this._doInsertHere(e,r,a,o,i);return}let s=n.indexOf("."),l,u;s===-1?(l=n,u=""):(l=n.substring(0,s),u=n.substring(s+1));let c;this._children.hasOwnProperty(l)?c=this._children[l]:(c=new gn(this._mainRule.clone(),pn.cloneArr(this._rulesWithParentScopes)),this._children[l]=c),c.insert(e+1,u,r,a,o,i)}_doInsertHere(e,n,r,a,o){if(n===null){this._mainRule.acceptOverwrite(e,r,a,o);return}for(let i=0,s=this._rulesWithParentScopes.length;i<s;i++){let l=this._rulesWithParentScopes[i];if(vi(l.parentScopes,n)===0){l.acceptOverwrite(e,r,a,o);return}}r===-1&&(r=this._mainRule.fontStyle),a===0&&(a=this._mainRule.foreground),o===0&&(o=this._mainRule.background),this._rulesWithParentScopes.push(new pn(e,n,r,a,o))}},Ke=class de{static toBinaryStr(e){return e.toString(2).padStart(32,"0")}static print(e){const n=de.getLanguageId(e),r=de.getTokenType(e),a=de.getFontStyle(e),o=de.getForeground(e),i=de.getBackground(e);console.log({languageId:n,tokenType:r,fontStyle:a,foreground:o,background:i})}static getLanguageId(e){return(e&255)>>>0}static getTokenType(e){return(e&768)>>>8}static containsBalancedBrackets(e){return(e&1024)!==0}static getFontStyle(e){return(e&30720)>>>11}static getForeground(e){return(e&16744448)>>>15}static getBackground(e){return(e&4278190080)>>>24}static set(e,n,r,a,o,i,s){let l=de.getLanguageId(e),u=de.getTokenType(e),c=de.containsBalancedBrackets(e)?1:0,d=de.getFontStyle(e),p=de.getForeground(e),h=de.getBackground(e);return n!==0&&(l=n),r!==8&&(u=r),a!==null&&(c=a?1:0),o!==-1&&(d=o),i!==0&&(p=i),s!==0&&(h=s),(l<<0|u<<8|c<<10|d<<11|p<<15|h<<24)>>>0}};function Nt(t,e){const n=[],r=Gc(t);let a=r.next();for(;a!==null;){let l=0;if(a.length===2&&a.charAt(1)===":"){switch(a.charAt(0)){case"R":l=1;break;case"L":l=-1;break;default:console.log(`Unknown priority ${a} in scope selector`)}a=r.next()}let u=i();if(n.push({matcher:u,priority:l}),a!==",")break;a=r.next()}return n;function o(){if(a==="-"){a=r.next();const l=o();return u=>!!l&&!l(u)}if(a==="("){a=r.next();const l=s();return a===")"&&(a=r.next()),l}if(ha(a)){const l=[];do l.push(a),a=r.next();while(ha(a));return u=>e(l,u)}return null}function i(){const l=[];let u=o();for(;u;)l.push(u),u=o();return c=>l.every(d=>d(c))}function s(){const l=[];let u=i();for(;u&&(l.push(u),a==="|"||a===",");){do a=r.next();while(a==="|"||a===",");u=i()}return c=>l.some(d=>d(c))}}function ha(t){return!!t&&!!t.match(/[\w\.:]+/)}function Gc(t){let e=/([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g,n=e.exec(t);return{next:()=>{if(!n)return null;const r=n[0];return n=e.exec(t),r}}}function ki(t){typeof t.dispose=="function"&&t.dispose()}var at=class{constructor(t){this.scopeName=t}toKey(){return this.scopeName}},Uc=class{constructor(t,e){this.scopeName=t,this.ruleName=e}toKey(){return`${this.scopeName}#${this.ruleName}`}},qc=class{constructor(){v(this,"_references",[]);v(this,"_seenReferenceKeys",new Set);v(this,"visitedRule",new Set)}get references(){return this._references}add(t){const e=t.toKey();this._seenReferenceKeys.has(e)||(this._seenReferenceKeys.add(e),this._references.push(t))}},Vc=class{constructor(t,e){v(this,"seenFullScopeRequests",new Set);v(this,"seenPartialScopeRequests",new Set);v(this,"Q");this.repo=t,this.initialScopeName=e,this.seenFullScopeRequests.add(this.initialScopeName),this.Q=[new at(this.initialScopeName)]}processQueue(){const t=this.Q;this.Q=[];const e=new qc;for(const n of t)Kc(n,this.initialScopeName,this.repo,e);for(const n of e.references)if(n instanceof at){if(this.seenFullScopeRequests.has(n.scopeName))continue;this.seenFullScopeRequests.add(n.scopeName),this.Q.push(n)}else{if(this.seenFullScopeRequests.has(n.scopeName)||this.seenPartialScopeRequests.has(n.toKey()))continue;this.seenPartialScopeRequests.add(n.toKey()),this.Q.push(n)}}};function Kc(t,e,n,r){const a=n.lookup(t.scopeName);if(!a){if(t.scopeName===e)throw new Error(`No grammar provided for <${e}>`);return}const o=n.lookup(e);t instanceof at?St({baseGrammar:o,selfGrammar:a},r):mn(t.ruleName,{baseGrammar:o,selfGrammar:a,repository:a.repository},r);const i=n.injections(t.scopeName);if(i)for(const s of i)r.add(new at(s))}function mn(t,e,n){if(e.repository&&e.repository[t]){const r=e.repository[t];Rt([r],e,n)}}function St(t,e){t.selfGrammar.patterns&&Array.isArray(t.selfGrammar.patterns)&&Rt(t.selfGrammar.patterns,{...t,repository:t.selfGrammar.repository},e),t.selfGrammar.injections&&Rt(Object.values(t.selfGrammar.injections),{...t,repository:t.selfGrammar.repository},e)}function Rt(t,e,n){for(const r of t){if(n.visitedRule.has(r))continue;n.visitedRule.add(r);const a=r.repository?bi({},e.repository,r.repository):e.repository;Array.isArray(r.patterns)&&Rt(r.patterns,{...e,repository:a},n);const o=r.include;if(!o)continue;const i=Si(o);switch(i.kind){case 0:St({...e,selfGrammar:e.baseGrammar},n);break;case 1:St(e,n);break;case 2:mn(i.ruleName,{...e,repository:a},n);break;case 3:case 4:const s=i.scopeName===e.selfGrammar.scopeName?e.selfGrammar:i.scopeName===e.baseGrammar.scopeName?e.baseGrammar:void 0;if(s){const l={baseGrammar:e.baseGrammar,selfGrammar:s,repository:a};i.kind===4?mn(i.ruleName,l,n):St(l,n)}else i.kind===4?n.add(new Uc(i.scopeName,i.ruleName)):n.add(new at(i.scopeName));break}}}var Yc=class{constructor(){v(this,"kind",0)}},Xc=class{constructor(){v(this,"kind",1)}},Qc=class{constructor(t){v(this,"kind",2);this.ruleName=t}},Zc=class{constructor(t){v(this,"kind",3);this.scopeName=t}},Jc=class{constructor(t,e){v(this,"kind",4);this.scopeName=t,this.ruleName=e}};function Si(t){if(t==="$base")return new Yc;if(t==="$self")return new Xc;const e=t.indexOf("#");if(e===-1)return new Zc(t);if(e===0)return new Qc(t.substring(1));{const n=t.substring(0,e),r=t.substring(e+1);return new Jc(n,r)}}var ed=/\\(\d+)/,fa=/\\(\d+)/g,td=-1,Ei=-2;var ut=class{constructor(t,e,n,r){v(this,"$location");v(this,"id");v(this,"_nameIsCapturing");v(this,"_name");v(this,"_contentNameIsCapturing");v(this,"_contentName");this.$location=t,this.id=e,this._name=n||null,this._nameIsCapturing=vt.hasCaptures(this._name),this._contentName=r||null,this._contentNameIsCapturing=vt.hasCaptures(this._contentName)}get debugName(){const t=this.$location?`${Di(this.$location.filename)}:${this.$location.line}`:"unknown";return`${this.constructor.name}#${this.id} @ ${t}`}getName(t,e){return!this._nameIsCapturing||this._name===null||t===null||e===null?this._name:vt.replaceCaptures(this._name,t,e)}getContentName(t,e){return!this._contentNameIsCapturing||this._contentName===null?this._contentName:vt.replaceCaptures(this._contentName,t,e)}},nd=class extends ut{constructor(e,n,r,a,o){super(e,n,r,a);v(this,"retokenizeCapturedWithRuleId");this.retokenizeCapturedWithRuleId=o}dispose(){}collectPatterns(e,n){throw new Error("Not supported!")}compile(e,n){throw new Error("Not supported!")}compileAG(e,n,r,a){throw new Error("Not supported!")}},rd=class extends ut{constructor(e,n,r,a,o){super(e,n,r,null);v(this,"_match");v(this,"captures");v(this,"_cachedCompiledPatterns");this._match=new ot(a,this.id),this.captures=o,this._cachedCompiledPatterns=null}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null)}get debugMatchRegExp(){return`${this._match.source}`}collectPatterns(e,n){n.push(this._match)}compile(e,n){return this._getCachedCompiledPatterns(e).compile(e)}compileAG(e,n,r,a){return this._getCachedCompiledPatterns(e).compileAG(e,r,a)}_getCachedCompiledPatterns(e){return this._cachedCompiledPatterns||(this._cachedCompiledPatterns=new it,this.collectPatterns(e,this._cachedCompiledPatterns)),this._cachedCompiledPatterns}},pa=class extends ut{constructor(e,n,r,a,o){super(e,n,r,a);v(this,"hasMissingPatterns");v(this,"patterns");v(this,"_cachedCompiledPatterns");this.patterns=o.patterns,this.hasMissingPatterns=o.hasMissingPatterns,this._cachedCompiledPatterns=null}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null)}collectPatterns(e,n){for(const r of this.patterns)e.getRule(r).collectPatterns(e,n)}compile(e,n){return this._getCachedCompiledPatterns(e).compile(e)}compileAG(e,n,r,a){return this._getCachedCompiledPatterns(e).compileAG(e,r,a)}_getCachedCompiledPatterns(e){return this._cachedCompiledPatterns||(this._cachedCompiledPatterns=new it,this.collectPatterns(e,this._cachedCompiledPatterns)),this._cachedCompiledPatterns}},bn=class extends ut{constructor(e,n,r,a,o,i,s,l,u,c){super(e,n,r,a);v(this,"_begin");v(this,"beginCaptures");v(this,"_end");v(this,"endHasBackReferences");v(this,"endCaptures");v(this,"applyEndPatternLast");v(this,"hasMissingPatterns");v(this,"patterns");v(this,"_cachedCompiledPatterns");this._begin=new ot(o,this.id),this.beginCaptures=i,this._end=new ot(s||"￿",-1),this.endHasBackReferences=this._end.hasBackReferences,this.endCaptures=l,this.applyEndPatternLast=u||!1,this.patterns=c.patterns,this.hasMissingPatterns=c.hasMissingPatterns,this._cachedCompiledPatterns=null}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null)}get debugBeginRegExp(){return`${this._begin.source}`}get debugEndRegExp(){return`${this._end.source}`}getEndWithResolvedBackReferences(e,n){return this._end.resolveBackReferences(e,n)}collectPatterns(e,n){n.push(this._begin)}compile(e,n){return this._getCachedCompiledPatterns(e,n).compile(e)}compileAG(e,n,r,a){return this._getCachedCompiledPatterns(e,n).compileAG(e,r,a)}_getCachedCompiledPatterns(e,n){if(!this._cachedCompiledPatterns){this._cachedCompiledPatterns=new it;for(const r of this.patterns)e.getRule(r).collectPatterns(e,this._cachedCompiledPatterns);this.applyEndPatternLast?this._cachedCompiledPatterns.push(this._end.hasBackReferences?this._end.clone():this._end):this._cachedCompiledPatterns.unshift(this._end.hasBackReferences?this._end.clone():this._end)}return this._end.hasBackReferences&&(this.applyEndPatternLast?this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length()-1,n):this._cachedCompiledPatterns.setSource(0,n)),this._cachedCompiledPatterns}},jt=class extends ut{constructor(e,n,r,a,o,i,s,l,u){super(e,n,r,a);v(this,"_begin");v(this,"beginCaptures");v(this,"whileCaptures");v(this,"_while");v(this,"whileHasBackReferences");v(this,"hasMissingPatterns");v(this,"patterns");v(this,"_cachedCompiledPatterns");v(this,"_cachedCompiledWhilePatterns");this._begin=new ot(o,this.id),this.beginCaptures=i,this.whileCaptures=l,this._while=new ot(s,Ei),this.whileHasBackReferences=this._while.hasBackReferences,this.patterns=u.patterns,this.hasMissingPatterns=u.hasMissingPatterns,this._cachedCompiledPatterns=null,this._cachedCompiledWhilePatterns=null}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null),this._cachedCompiledWhilePatterns&&(this._cachedCompiledWhilePatterns.dispose(),this._cachedCompiledWhilePatterns=null)}get debugBeginRegExp(){return`${this._begin.source}`}get debugWhileRegExp(){return`${this._while.source}`}getWhileWithResolvedBackReferences(e,n){return this._while.resolveBackReferences(e,n)}collectPatterns(e,n){n.push(this._begin)}compile(e,n){return this._getCachedCompiledPatterns(e).compile(e)}compileAG(e,n,r,a){return this._getCachedCompiledPatterns(e).compileAG(e,r,a)}_getCachedCompiledPatterns(e){if(!this._cachedCompiledPatterns){this._cachedCompiledPatterns=new it;for(const n of this.patterns)e.getRule(n).collectPatterns(e,this._cachedCompiledPatterns)}return this._cachedCompiledPatterns}compileWhile(e,n){return this._getCachedCompiledWhilePatterns(e,n).compile(e)}compileWhileAG(e,n,r,a){return this._getCachedCompiledWhilePatterns(e,n).compileAG(e,r,a)}_getCachedCompiledWhilePatterns(e,n){return this._cachedCompiledWhilePatterns||(this._cachedCompiledWhilePatterns=new it,this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences?this._while.clone():this._while)),this._while.hasBackReferences&&this._cachedCompiledWhilePatterns.setSource(0,n||"￿"),this._cachedCompiledWhilePatterns}},_i=class J{static createCaptureRule(e,n,r,a,o){return e.registerRule(i=>new nd(n,i,r,a,o))}static getCompiledRuleId(e,n,r){return e.id||n.registerRule(a=>{if(e.id=a,e.match)return new rd(e.$vscodeTextmateLocation,e.id,e.name,e.match,J._compileCaptures(e.captures,n,r));if(typeof e.begin>"u"){e.repository&&(r=bi({},r,e.repository));let o=e.patterns;return typeof o>"u"&&e.include&&(o=[{include:e.include}]),new pa(e.$vscodeTextmateLocation,e.id,e.name,e.contentName,J._compilePatterns(o,n,r))}return e.while?new jt(e.$vscodeTextmateLocation,e.id,e.name,e.contentName,e.begin,J._compileCaptures(e.beginCaptures||e.captures,n,r),e.while,J._compileCaptures(e.whileCaptures||e.captures,n,r),J._compilePatterns(e.patterns,n,r)):new bn(e.$vscodeTextmateLocation,e.id,e.name,e.contentName,e.begin,J._compileCaptures(e.beginCaptures||e.captures,n,r),e.end,J._compileCaptures(e.endCaptures||e.captures,n,r),e.applyEndPatternLast,J._compilePatterns(e.patterns,n,r))}),e.id}static _compileCaptures(e,n,r){let a=[];if(e){let o=0;for(const i in e){if(i==="$vscodeTextmateLocation")continue;const s=parseInt(i,10);s>o&&(o=s)}for(let i=0;i<=o;i++)a[i]=null;for(const i in e){if(i==="$vscodeTextmateLocation")continue;const s=parseInt(i,10);let l=0;e[i].patterns&&(l=J.getCompiledRuleId(e[i],n,r)),a[s]=J.createCaptureRule(n,e[i].$vscodeTextmateLocation,e[i].name,e[i].contentName,l)}}return a}static _compilePatterns(e,n,r){let a=[];if(e)for(let o=0,i=e.length;o<i;o++){const s=e[o];let l=-1;if(s.include){const u=Si(s.include);switch(u.kind){case 0:case 1:l=J.getCompiledRuleId(r[s.include],n,r);break;case 2:let c=r[u.ruleName];c&&(l=J.getCompiledRuleId(c,n,r));break;case 3:case 4:const d=u.scopeName,p=u.kind===4?u.ruleName:null,h=n.getExternalGrammar(d,r);if(h)if(p){let f=h.repository[p];f&&(l=J.getCompiledRuleId(f,n,h.repository))}else l=J.getCompiledRuleId(h.repository.$self,n,h.repository);break}}else l=J.getCompiledRuleId(s,n,r);if(l!==-1){const u=n.getRule(l);let c=!1;if((u instanceof pa||u instanceof bn||u instanceof jt)&&u.hasMissingPatterns&&u.patterns.length===0&&(c=!0),c)continue;a.push(l)}}return{patterns:a,hasMissingPatterns:(e?e.length:0)!==a.length}}},ot=class Ai{constructor(e,n){v(this,"source");v(this,"ruleId");v(this,"hasAnchor");v(this,"hasBackReferences");v(this,"_anchorCache");if(e&&typeof e=="string"){const r=e.length;let a=0,o=[],i=!1;for(let s=0;s<r;s++)if(e.charAt(s)==="\\"&&s+1<r){const u=e.charAt(s+1);u==="z"?(o.push(e.substring(a,s)),o.push("$(?!\\n)(?<!\\n)"),a=s+2):(u==="A"||u==="G")&&(i=!0),s++}this.hasAnchor=i,a===0?this.source=e:(o.push(e.substring(a,r)),this.source=o.join(""))}else this.hasAnchor=!1,this.source=e;this.hasAnchor?this._anchorCache=this._buildAnchorCache():this._anchorCache=null,this.ruleId=n,typeof this.source=="string"?this.hasBackReferences=ed.test(this.source):this.hasBackReferences=!1}clone(){return new Ai(this.source,this.ruleId)}setSource(e){this.source!==e&&(this.source=e,this.hasAnchor&&(this._anchorCache=this._buildAnchorCache()))}resolveBackReferences(e,n){if(typeof this.source!="string")throw new Error("This method should only be called if the source is a string");let r=n.map(a=>e.substring(a.start,a.end));return fa.lastIndex=0,this.source.replace(fa,(a,o)=>xi(r[parseInt(o,10)]||""))}_buildAnchorCache(){if(typeof this.source!="string")throw new Error("This method should only be called if the source is a string");let e=[],n=[],r=[],a=[],o,i,s,l;for(o=0,i=this.source.length;o<i;o++)s=this.source.charAt(o),e[o]=s,n[o]=s,r[o]=s,a[o]=s,s==="\\"&&o+1<i&&(l=this.source.charAt(o+1),l==="A"?(e[o+1]="￿",n[o+1]="￿",r[o+1]="A",a[o+1]="A"):l==="G"?(e[o+1]="￿",n[o+1]="G",r[o+1]="￿",a[o+1]="G"):(e[o+1]=l,n[o+1]=l,r[o+1]=l,a[o+1]=l),o++);return{A0_G0:e.join(""),A0_G1:n.join(""),A1_G0:r.join(""),A1_G1:a.join("")}}resolveAnchors(e,n){return!this.hasAnchor||!this._anchorCache||typeof this.source!="string"?this.source:e?n?this._anchorCache.A1_G1:this._anchorCache.A1_G0:n?this._anchorCache.A0_G1:this._anchorCache.A0_G0}},it=class{constructor(){v(this,"_items");v(this,"_hasAnchors");v(this,"_cached");v(this,"_anchorCache");this._items=[],this._hasAnchors=!1,this._cached=null,this._anchorCache={A0_G0:null,A0_G1:null,A1_G0:null,A1_G1:null}}dispose(){this._disposeCaches()}_disposeCaches(){this._cached&&(this._cached.dispose(),this._cached=null),this._anchorCache.A0_G0&&(this._anchorCache.A0_G0.dispose(),this._anchorCache.A0_G0=null),this._anchorCache.A0_G1&&(this._anchorCache.A0_G1.dispose(),this._anchorCache.A0_G1=null),this._anchorCache.A1_G0&&(this._anchorCache.A1_G0.dispose(),this._anchorCache.A1_G0=null),this._anchorCache.A1_G1&&(this._anchorCache.A1_G1.dispose(),this._anchorCache.A1_G1=null)}push(t){this._items.push(t),this._hasAnchors=this._hasAnchors||t.hasAnchor}unshift(t){this._items.unshift(t),this._hasAnchors=this._hasAnchors||t.hasAnchor}length(){return this._items.length}setSource(t,e){this._items[t].source!==e&&(this._disposeCaches(),this._items[t].setSource(e))}compile(t){if(!this._cached){let e=this._items.map(n=>n.source);this._cached=new ga(t,e,this._items.map(n=>n.ruleId))}return this._cached}compileAG(t,e,n){return this._hasAnchors?e?n?(this._anchorCache.A1_G1||(this._anchorCache.A1_G1=this._resolveAnchors(t,e,n)),this._anchorCache.A1_G1):(this._anchorCache.A1_G0||(this._anchorCache.A1_G0=this._resolveAnchors(t,e,n)),this._anchorCache.A1_G0):n?(this._anchorCache.A0_G1||(this._anchorCache.A0_G1=this._resolveAnchors(t,e,n)),this._anchorCache.A0_G1):(this._anchorCache.A0_G0||(this._anchorCache.A0_G0=this._resolveAnchors(t,e,n)),this._anchorCache.A0_G0):this.compile(t)}_resolveAnchors(t,e,n){let r=this._items.map(a=>a.resolveAnchors(e,n));return new ga(t,r,this._items.map(a=>a.ruleId))}},ga=class{constructor(t,e,n){v(this,"scanner");this.regExps=e,this.rules=n,this.scanner=t.createOnigScanner(e)}dispose(){typeof this.scanner.dispose=="function"&&this.scanner.dispose()}toString(){const t=[];for(let e=0,n=this.rules.length;e<n;e++)t.push("   - "+this.rules[e]+": "+this.regExps[e]);return t.join(`
`)}findNextMatchSync(t,e,n){const r=this.scanner.findNextMatchSync(t,e,n);return r?{ruleId:this.rules[r.index],captureIndices:r.captureIndices}:null}},on=class{constructor(t,e){this.languageId=t,this.tokenType=e}},we,ad=(we=class{constructor(e,n){v(this,"_defaultAttributes");v(this,"_embeddedLanguagesMatcher");v(this,"_getBasicScopeAttributes",new Ci(e=>{const n=this._scopeToLanguage(e),r=this._toStandardTokenType(e);return new on(n,r)}));this._defaultAttributes=new on(e,8),this._embeddedLanguagesMatcher=new od(Object.entries(n||{}))}getDefaultAttributes(){return this._defaultAttributes}getBasicScopeAttributes(e){return e===null?we._NULL_SCOPE_METADATA:this._getBasicScopeAttributes.get(e)}_scopeToLanguage(e){return this._embeddedLanguagesMatcher.match(e)||0}_toStandardTokenType(e){const n=e.match(we.STANDARD_TOKEN_TYPE_REGEXP);if(!n)return 8;switch(n[1]){case"comment":return 1;case"string":return 2;case"regex":return 3;case"meta.embedded":return 0}throw new Error("Unexpected match for standard token type!")}},v(we,"_NULL_SCOPE_METADATA",new on(0,0)),v(we,"STANDARD_TOKEN_TYPE_REGEXP",/\b(comment|string|regex|meta\.embedded)\b/),we),od=class{constructor(t){v(this,"values");v(this,"scopesRegExp");if(t.length===0)this.values=null,this.scopesRegExp=null;else{this.values=new Map(t);const e=t.map(([n,r])=>xi(n));e.sort(),e.reverse(),this.scopesRegExp=new RegExp(`^((${e.join(")|(")}))($|\\.)`,"")}}match(t){if(!this.scopesRegExp)return;const e=t.match(this.scopesRegExp);if(e)return this.values.get(e[1])}},ma=class{constructor(t,e){this.stack=t,this.stoppedEarly=e}};function Bi(t,e,n,r,a,o,i,s){const l=e.content.length;let u=!1,c=-1;if(i){const h=id(t,e,n,r,a,o);a=h.stack,r=h.linePos,n=h.isFirstLine,c=h.anchorPosition}const d=Date.now();for(;!u;){if(s!==0&&Date.now()-d>s)return new ma(a,!0);p()}return new ma(a,!1);function p(){const h=sd(t,e,n,r,a,c);if(!h){o.produce(a,l),u=!0;return}const f=h.captureIndices,D=h.matchedRuleId,g=f&&f.length>0?f[0].end>r:!1;if(D===td){const x=a.getRule(t);o.produce(a,f[0].start),a=a.withContentNameScopesList(a.nameScopesList),tt(t,e,n,a,o,x.endCaptures,f),o.produce(a,f[0].end);const C=a;if(a=a.parent,c=C.getAnchorPos(),!g&&C.getEnterPos()===r){a=C,o.produce(a,l),u=!0;return}}else{const x=t.getRule(D);o.produce(a,f[0].start);const C=a,y=x.getName(e.content,f),S=a.contentNameScopesList.pushAttributed(y,t);if(a=a.push(D,r,c,f[0].end===l,null,S,S),x instanceof bn){const E=x;tt(t,e,n,a,o,E.beginCaptures,f),o.produce(a,f[0].end),c=f[0].end;const _=E.getContentName(e.content,f),T=S.pushAttributed(_,t);if(a=a.withContentNameScopesList(T),E.endHasBackReferences&&(a=a.withEndRule(E.getEndWithResolvedBackReferences(e.content,f))),!g&&C.hasSameRuleAs(a)){a=a.pop(),o.produce(a,l),u=!0;return}}else if(x instanceof jt){const E=x;tt(t,e,n,a,o,E.beginCaptures,f),o.produce(a,f[0].end),c=f[0].end;const _=E.getContentName(e.content,f),T=S.pushAttributed(_,t);if(a=a.withContentNameScopesList(T),E.whileHasBackReferences&&(a=a.withEndRule(E.getWhileWithResolvedBackReferences(e.content,f))),!g&&C.hasSameRuleAs(a)){a=a.pop(),o.produce(a,l),u=!0;return}}else if(tt(t,e,n,a,o,x.captures,f),o.produce(a,f[0].end),a=a.pop(),!g){a=a.safePop(),o.produce(a,l),u=!0;return}}f[0].end>r&&(r=f[0].end,n=!1)}}function id(t,e,n,r,a,o){let i=a.beginRuleCapturedEOL?0:-1;const s=[];for(let l=a;l;l=l.pop()){const u=l.getRule(t);u instanceof jt&&s.push({rule:u,stack:l})}for(let l=s.pop();l;l=s.pop()){const{ruleScanner:u,findOptions:c}=cd(l.rule,t,l.stack.endRule,n,r===i),d=u.findNextMatchSync(e,r,c);if(d){if(d.ruleId!==Ei){a=l.stack.pop();break}d.captureIndices&&d.captureIndices.length&&(o.produce(l.stack,d.captureIndices[0].start),tt(t,e,n,l.stack,o,l.rule.whileCaptures,d.captureIndices),o.produce(l.stack,d.captureIndices[0].end),i=d.captureIndices[0].end,d.captureIndices[0].end>r&&(r=d.captureIndices[0].end,n=!1))}else{a=l.stack.pop();break}}return{stack:a,linePos:r,anchorPosition:i,isFirstLine:n}}function sd(t,e,n,r,a,o){const i=ld(t,e,n,r,a,o),s=t.getInjections();if(s.length===0)return i;const l=ud(s,t,e,n,r,a,o);if(!l)return i;if(!i)return l;const u=i.captureIndices[0].start,c=l.captureIndices[0].start;return c<u||l.priorityMatch&&c===u?l:i}function ld(t,e,n,r,a,o){const i=a.getRule(t),{ruleScanner:s,findOptions:l}=Ni(i,t,a.endRule,n,r===o),u=s.findNextMatchSync(e,r,l);return u?{captureIndices:u.captureIndices,matchedRuleId:u.ruleId}:null}function ud(t,e,n,r,a,o,i){let s=Number.MAX_VALUE,l=null,u,c=0;const d=o.contentNameScopesList.getScopeNames();for(let p=0,h=t.length;p<h;p++){const f=t[p];if(!f.matcher(d))continue;const D=e.getRule(f.ruleId),{ruleScanner:g,findOptions:x}=Ni(D,e,null,r,a===i),C=g.findNextMatchSync(n,a,x);if(!C)continue;const y=C.captureIndices[0].start;if(!(y>=s)&&(s=y,l=C.captureIndices,u=C.ruleId,c=f.priority,s===a))break}return l?{priorityMatch:c===-1,captureIndices:l,matchedRuleId:u}:null}function Ni(t,e,n,r,a){return{ruleScanner:t.compileAG(e,n,r,a),findOptions:0}}function cd(t,e,n,r,a){return{ruleScanner:t.compileWhileAG(e,n,r,a),findOptions:0}}function tt(t,e,n,r,a,o,i){if(o.length===0)return;const s=e.content,l=Math.min(o.length,i.length),u=[],c=i[0].end;for(let d=0;d<l;d++){const p=o[d];if(p===null)continue;const h=i[d];if(h.length===0)continue;if(h.start>c)break;for(;u.length>0&&u[u.length-1].endPos<=h.start;)a.produceFromScopes(u[u.length-1].scopes,u[u.length-1].endPos),u.pop();if(u.length>0?a.produceFromScopes(u[u.length-1].scopes,h.start):a.produce(r,h.start),p.retokenizeCapturedWithRuleId){const D=p.getName(s,i),g=r.contentNameScopesList.pushAttributed(D,t),x=p.getContentName(s,i),C=g.pushAttributed(x,t),y=r.push(p.retokenizeCapturedWithRuleId,h.start,-1,!1,null,g,C),S=t.createOnigString(s.substring(0,h.end));Bi(t,S,n&&h.start===0,h.start,y,a,!1,0),ki(S);continue}const f=p.getName(s,i);if(f!==null){const g=(u.length>0?u[u.length-1].scopes:r.contentNameScopesList).pushAttributed(f,t);u.push(new dd(g,h.end))}}for(;u.length>0;)a.produceFromScopes(u[u.length-1].scopes,u[u.length-1].endPos),u.pop()}var dd=class{constructor(t,e){v(this,"scopes");v(this,"endPos");this.scopes=t,this.endPos=e}};function hd(t,e,n,r,a,o,i,s){return new pd(t,e,n,r,a,o,i,s)}function ba(t,e,n,r,a){const o=Nt(e,Tt),i=_i.getCompiledRuleId(n,r,a.repository);for(const s of o)t.push({debugSelector:e,matcher:s.matcher,ruleId:i,grammar:a,priority:s.priority})}function Tt(t,e){if(e.length<t.length)return!1;let n=0;return t.every(r=>{for(let a=n;a<e.length;a++)if(fd(e[a],r))return n=a+1,!0;return!1})}function fd(t,e){if(!t)return!1;if(t===e)return!0;const n=e.length;return t.length>n&&t.substr(0,n)===e&&t[n]==="."}var pd=class{constructor(t,e,n,r,a,o,i,s){v(this,"_rootId");v(this,"_lastRuleId");v(this,"_ruleId2desc");v(this,"_includedGrammars");v(this,"_grammarRepository");v(this,"_grammar");v(this,"_injections");v(this,"_basicScopeAttributesProvider");v(this,"_tokenTypeMatchers");if(this._rootScopeName=t,this.balancedBracketSelectors=o,this._onigLib=s,this._basicScopeAttributesProvider=new ad(n,r),this._rootId=-1,this._lastRuleId=0,this._ruleId2desc=[null],this._includedGrammars={},this._grammarRepository=i,this._grammar=Da(e,null),this._injections=null,this._tokenTypeMatchers=[],a)for(const l of Object.keys(a)){const u=Nt(l,Tt);for(const c of u)this._tokenTypeMatchers.push({matcher:c.matcher,type:a[l]})}}get themeProvider(){return this._grammarRepository}dispose(){for(const t of this._ruleId2desc)t&&t.dispose()}createOnigScanner(t){return this._onigLib.createOnigScanner(t)}createOnigString(t){return this._onigLib.createOnigString(t)}getMetadataForScope(t){return this._basicScopeAttributesProvider.getBasicScopeAttributes(t)}_collectInjections(){const t={lookup:a=>a===this._rootScopeName?this._grammar:this.getExternalGrammar(a),injections:a=>this._grammarRepository.injections(a)},e=[],n=this._rootScopeName,r=t.lookup(n);if(r){const a=r.injections;if(a)for(let i in a)ba(e,i,a[i],this,r);const o=this._grammarRepository.injections(n);o&&o.forEach(i=>{const s=this.getExternalGrammar(i);if(s){const l=s.injectionSelector;l&&ba(e,l,s,this,s)}})}return e.sort((a,o)=>a.priority-o.priority),e}getInjections(){return this._injections===null&&(this._injections=this._collectInjections()),this._injections}registerRule(t){const e=++this._lastRuleId,n=t(e);return this._ruleId2desc[e]=n,n}getRule(t){return this._ruleId2desc[t]}getExternalGrammar(t,e){if(this._includedGrammars[t])return this._includedGrammars[t];if(this._grammarRepository){const n=this._grammarRepository.lookup(t);if(n)return this._includedGrammars[t]=Da(n,e&&e.$base),this._includedGrammars[t]}}tokenizeLine(t,e,n=0){const r=this._tokenize(t,e,!1,n);return{tokens:r.lineTokens.getResult(r.ruleStack,r.lineLength),ruleStack:r.ruleStack,stoppedEarly:r.stoppedEarly}}tokenizeLine2(t,e,n=0){const r=this._tokenize(t,e,!0,n);return{tokens:r.lineTokens.getBinaryResult(r.ruleStack,r.lineLength),ruleStack:r.ruleStack,stoppedEarly:r.stoppedEarly}}_tokenize(t,e,n,r){this._rootId===-1&&(this._rootId=_i.getCompiledRuleId(this._grammar.repository.$self,this,this._grammar.repository),this.getInjections());let a;if(!e||e===Dn.NULL){a=!0;const u=this._basicScopeAttributesProvider.getDefaultAttributes(),c=this.themeProvider.getDefaults(),d=Ke.set(0,u.languageId,u.tokenType,null,c.fontStyle,c.foregroundId,c.backgroundId),p=this.getRule(this._rootId).getName(null,null);let h;p?h=nt.createRootAndLookUpScopeName(p,d,this):h=nt.createRoot("unknown",d),e=new Dn(null,this._rootId,-1,-1,!1,null,h,h)}else a=!1,e.reset();t=t+`
`;const o=this.createOnigString(t),i=o.content.length,s=new md(n,t,this._tokenTypeMatchers,this.balancedBracketSelectors),l=Bi(this,o,a,0,e,s,!0,r);return ki(o),{lineLength:i,lineTokens:s,ruleStack:l.stack,stoppedEarly:l.stoppedEarly}}};function Da(t,e){return t=jc(t),t.repository=t.repository||{},t.repository.$self={$vscodeTextmateLocation:t.$vscodeTextmateLocation,patterns:t.patterns,name:t.scopeName},t.repository.$base=e||t.repository.$self,t}var nt=class De{constructor(e,n,r){this.parent=e,this.scopePath=n,this.tokenAttributes=r}static fromExtension(e,n){let r=e,a=e?.scopePath??null;for(const o of n)a=an.push(a,o.scopeNames),r=new De(r,a,o.encodedTokenAttributes);return r}static createRoot(e,n){return new De(null,new an(null,e),n)}static createRootAndLookUpScopeName(e,n,r){const a=r.getMetadataForScope(e),o=new an(null,e),i=r.themeProvider.themeMatch(o),s=De.mergeAttributes(n,a,i);return new De(null,o,s)}get scopeName(){return this.scopePath.scopeName}toString(){return this.getScopeNames().join(" ")}equals(e){return De.equals(this,e)}static equals(e,n){do{if(e===n||!e&&!n)return!0;if(!e||!n||e.scopeName!==n.scopeName||e.tokenAttributes!==n.tokenAttributes)return!1;e=e.parent,n=n.parent}while(!0)}static mergeAttributes(e,n,r){let a=-1,o=0,i=0;return r!==null&&(a=r.fontStyle,o=r.foregroundId,i=r.backgroundId),Ke.set(e,n.languageId,n.tokenType,null,a,o,i)}pushAttributed(e,n){if(e===null)return this;if(e.indexOf(" ")===-1)return De._pushAttributed(this,e,n);const r=e.split(/ /g);let a=this;for(const o of r)a=De._pushAttributed(a,o,n);return a}static _pushAttributed(e,n,r){const a=r.getMetadataForScope(n),o=e.scopePath.push(n),i=r.themeProvider.themeMatch(o),s=De.mergeAttributes(e.tokenAttributes,a,i);return new De(e,o,s)}getScopeNames(){return this.scopePath.getSegments()}getExtensionIfDefined(e){const n=[];let r=this;for(;r&&r!==e;)n.push({encodedTokenAttributes:r.tokenAttributes,scopeNames:r.scopePath.getExtensionIfDefined(r.parent?.scopePath??null)}),r=r.parent;return r===e?n.reverse():void 0}},he,Dn=(he=class{constructor(e,n,r,a,o,i,s,l){v(this,"_stackElementBrand");v(this,"_enterPos");v(this,"_anchorPos");v(this,"depth");this.parent=e,this.ruleId=n,this.beginRuleCapturedEOL=o,this.endRule=i,this.nameScopesList=s,this.contentNameScopesList=l,this.depth=this.parent?this.parent.depth+1:1,this._enterPos=r,this._anchorPos=a}equals(e){return e===null?!1:he._equals(this,e)}static _equals(e,n){return e===n?!0:this._structuralEquals(e,n)?nt.equals(e.contentNameScopesList,n.contentNameScopesList):!1}static _structuralEquals(e,n){do{if(e===n||!e&&!n)return!0;if(!e||!n||e.depth!==n.depth||e.ruleId!==n.ruleId||e.endRule!==n.endRule)return!1;e=e.parent,n=n.parent}while(!0)}clone(){return this}static _reset(e){for(;e;)e._enterPos=-1,e._anchorPos=-1,e=e.parent}reset(){he._reset(this)}pop(){return this.parent}safePop(){return this.parent?this.parent:this}push(e,n,r,a,o,i,s){return new he(this,e,n,r,a,o,i,s)}getEnterPos(){return this._enterPos}getAnchorPos(){return this._anchorPos}getRule(e){return e.getRule(this.ruleId)}toString(){const e=[];return this._writeString(e,0),"["+e.join(",")+"]"}_writeString(e,n){return this.parent&&(n=this.parent._writeString(e,n)),e[n++]=`(${this.ruleId}, ${this.nameScopesList?.toString()}, ${this.contentNameScopesList?.toString()})`,n}withContentNameScopesList(e){return this.contentNameScopesList===e?this:this.parent.push(this.ruleId,this._enterPos,this._anchorPos,this.beginRuleCapturedEOL,this.endRule,this.nameScopesList,e)}withEndRule(e){return this.endRule===e?this:new he(this.parent,this.ruleId,this._enterPos,this._anchorPos,this.beginRuleCapturedEOL,e,this.nameScopesList,this.contentNameScopesList)}hasSameRuleAs(e){let n=this;for(;n&&n._enterPos===e._enterPos;){if(n.ruleId===e.ruleId)return!0;n=n.parent}return!1}toStateStackFrame(){return{ruleId:this.ruleId,beginRuleCapturedEOL:this.beginRuleCapturedEOL,endRule:this.endRule,nameScopesList:this.nameScopesList?.getExtensionIfDefined(this.parent?.nameScopesList??null)??[],contentNameScopesList:this.contentNameScopesList?.getExtensionIfDefined(this.nameScopesList)??[]}}static pushFrame(e,n){const r=nt.fromExtension(e?.nameScopesList??null,n.nameScopesList);return new he(e,n.ruleId,n.enterPos??-1,n.anchorPos??-1,n.beginRuleCapturedEOL,n.endRule,r,nt.fromExtension(r,n.contentNameScopesList))}},v(he,"NULL",new he(null,0,0,0,!1,null,null,null)),he),gd=class{constructor(t,e){v(this,"balancedBracketScopes");v(this,"unbalancedBracketScopes");v(this,"allowAny",!1);this.balancedBracketScopes=t.flatMap(n=>n==="*"?(this.allowAny=!0,[]):Nt(n,Tt).map(r=>r.matcher)),this.unbalancedBracketScopes=e.flatMap(n=>Nt(n,Tt).map(r=>r.matcher))}get matchesAlways(){return this.allowAny&&this.unbalancedBracketScopes.length===0}get matchesNever(){return this.balancedBracketScopes.length===0&&!this.allowAny}match(t){for(const e of this.unbalancedBracketScopes)if(e(t))return!1;for(const e of this.balancedBracketScopes)if(e(t))return!0;return this.allowAny}},md=class{constructor(t,e,n,r){v(this,"_emitBinaryTokens");v(this,"_lineText");v(this,"_tokens");v(this,"_binaryTokens");v(this,"_lastTokenEndIndex");v(this,"_tokenTypeOverrides");this.balancedBracketSelectors=r,this._emitBinaryTokens=t,this._tokenTypeOverrides=n,this._lineText=null,this._tokens=[],this._binaryTokens=[],this._lastTokenEndIndex=0}produce(t,e){this.produceFromScopes(t.contentNameScopesList,e)}produceFromScopes(t,e){if(this._lastTokenEndIndex>=e)return;if(this._emitBinaryTokens){let r=t?.tokenAttributes??0,a=!1;if(this.balancedBracketSelectors?.matchesAlways&&(a=!0),this._tokenTypeOverrides.length>0||this.balancedBracketSelectors&&!this.balancedBracketSelectors.matchesAlways&&!this.balancedBracketSelectors.matchesNever){const o=t?.getScopeNames()??[];for(const i of this._tokenTypeOverrides)i.matcher(o)&&(r=Ke.set(r,0,i.type,null,-1,0,0));this.balancedBracketSelectors&&(a=this.balancedBracketSelectors.match(o))}if(a&&(r=Ke.set(r,0,8,a,-1,0,0)),this._binaryTokens.length>0&&this._binaryTokens[this._binaryTokens.length-1]===r){this._lastTokenEndIndex=e;return}this._binaryTokens.push(this._lastTokenEndIndex),this._binaryTokens.push(r),this._lastTokenEndIndex=e;return}const n=t?.getScopeNames()??[];this._tokens.push({startIndex:this._lastTokenEndIndex,endIndex:e,scopes:n}),this._lastTokenEndIndex=e}getResult(t,e){return this._tokens.length>0&&this._tokens[this._tokens.length-1].startIndex===e-1&&this._tokens.pop(),this._tokens.length===0&&(this._lastTokenEndIndex=-1,this.produce(t,e),this._tokens[this._tokens.length-1].startIndex=0),this._tokens}getBinaryResult(t,e){this._binaryTokens.length>0&&this._binaryTokens[this._binaryTokens.length-2]===e-1&&(this._binaryTokens.pop(),this._binaryTokens.pop()),this._binaryTokens.length===0&&(this._lastTokenEndIndex=-1,this.produce(t,e),this._binaryTokens[this._binaryTokens.length-2]=0);const n=new Uint32Array(this._binaryTokens.length);for(let r=0,a=this._binaryTokens.length;r<a;r++)n[r]=this._binaryTokens[r];return n}},bd=class{constructor(t,e){v(this,"_grammars",new Map);v(this,"_rawGrammars",new Map);v(this,"_injectionGrammars",new Map);v(this,"_theme");this._onigLib=e,this._theme=t}dispose(){for(const t of this._grammars.values())t.dispose()}setTheme(t){this._theme=t}getColorMap(){return this._theme.getColorMap()}addGrammar(t,e){this._rawGrammars.set(t.scopeName,t),e&&this._injectionGrammars.set(t.scopeName,e)}lookup(t){return this._rawGrammars.get(t)}injections(t){return this._injectionGrammars.get(t)}getDefaults(){return this._theme.getDefaults()}themeMatch(t){return this._theme.match(t)}grammarForScopeName(t,e,n,r,a){if(!this._grammars.has(t)){let o=this._rawGrammars.get(t);if(!o)return null;this._grammars.set(t,hd(t,o,e,n,r,a,this,this._onigLib))}return this._grammars.get(t)}},Dd=class{constructor(e){v(this,"_options");v(this,"_syncRegistry");v(this,"_ensureGrammarCache");this._options=e,this._syncRegistry=new bd(Bt.createFromRawTheme(e.theme,e.colorMap),e.onigLib),this._ensureGrammarCache=new Map}dispose(){this._syncRegistry.dispose()}setTheme(e,n){this._syncRegistry.setTheme(Bt.createFromRawTheme(e,n))}getColorMap(){return this._syncRegistry.getColorMap()}loadGrammarWithEmbeddedLanguages(e,n,r){return this.loadGrammarWithConfiguration(e,n,{embeddedLanguages:r})}loadGrammarWithConfiguration(e,n,r){return this._loadGrammar(e,n,r.embeddedLanguages,r.tokenTypes,new gd(r.balancedBracketSelectors||[],r.unbalancedBracketSelectors||[]))}loadGrammar(e){return this._loadGrammar(e,0,null,null,null)}_loadGrammar(e,n,r,a,o){const i=new Vc(this._syncRegistry,e);for(;i.Q.length>0;)i.Q.map(s=>this._loadSingleGrammar(s.scopeName)),i.processQueue();return this._grammarForScopeName(e,n,r,a,o)}_loadSingleGrammar(e){this._ensureGrammarCache.has(e)||(this._doLoadSingleGrammar(e),this._ensureGrammarCache.set(e,!0))}_doLoadSingleGrammar(e){const n=this._options.loadGrammar(e);if(n){const r=typeof this._options.getInjections=="function"?this._options.getInjections(e):void 0;this._syncRegistry.addGrammar(n,r)}}addGrammar(e,n=[],r=0,a=null){return this._syncRegistry.addGrammar(e,n),this._grammarForScopeName(e.scopeName,r,a)}_grammarForScopeName(e,n=0,r=null,a=null,o=null){return this._syncRegistry.grammarForScopeName(e,n,r,a,o)}},yn=Dn.NULL;class ct{constructor(e,n,r){this.normal=n,this.property=e,r&&(this.space=r)}}ct.prototype.normal={};ct.prototype.property={};ct.prototype.space=void 0;function Ri(t,e){const n={},r={};for(const a of t)Object.assign(n,a.property),Object.assign(r,a.normal);return new ct(n,r,e)}function vn(t){return t.toLowerCase()}class se{constructor(e,n){this.attribute=n,this.property=e}}se.prototype.attribute="";se.prototype.booleanish=!1;se.prototype.boolean=!1;se.prototype.commaOrSpaceSeparated=!1;se.prototype.commaSeparated=!1;se.prototype.defined=!1;se.prototype.mustUseProperty=!1;se.prototype.number=!1;se.prototype.overloadedBoolean=!1;se.prototype.property="";se.prototype.spaceSeparated=!1;se.prototype.space=void 0;let yd=0;const A=Ie(),q=Ie(),xn=Ie(),k=Ie(),P=Ie(),Ue=Ie(),le=Ie();function Ie(){return 2**++yd}const Cn=Object.freeze(Object.defineProperty({__proto__:null,boolean:A,booleanish:q,commaOrSpaceSeparated:le,commaSeparated:Ue,number:k,overloadedBoolean:xn,spaceSeparated:P},Symbol.toStringTag,{value:"Module"})),sn=Object.keys(Cn);class jn extends se{constructor(e,n,r,a){let o=-1;if(super(e,n),ya(this,"space",a),typeof r=="number")for(;++o<sn.length;){const i=sn[o];ya(this,sn[o],(r&Cn[i])===Cn[i])}}}jn.prototype.defined=!0;function ya(t,e,n){n&&(t[e]=n)}function Xe(t){const e={},n={};for(const[r,a]of Object.entries(t.properties)){const o=new jn(r,t.transform(t.attributes||{},r),a,t.space);t.mustUseProperty&&t.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),e[r]=o,n[vn(r)]=r,n[vn(o.attribute)]=r}return new ct(e,n,t.space)}const ji=Xe({properties:{ariaActiveDescendant:null,ariaAtomic:q,ariaAutoComplete:null,ariaBusy:q,ariaChecked:q,ariaColCount:k,ariaColIndex:k,ariaColSpan:k,ariaControls:P,ariaCurrent:null,ariaDescribedBy:P,ariaDetails:null,ariaDisabled:q,ariaDropEffect:P,ariaErrorMessage:null,ariaExpanded:q,ariaFlowTo:P,ariaGrabbed:q,ariaHasPopup:null,ariaHidden:q,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:P,ariaLevel:k,ariaLive:null,ariaModal:q,ariaMultiLine:q,ariaMultiSelectable:q,ariaOrientation:null,ariaOwns:P,ariaPlaceholder:null,ariaPosInSet:k,ariaPressed:q,ariaReadOnly:q,ariaRelevant:null,ariaRequired:q,ariaRoleDescription:P,ariaRowCount:k,ariaRowIndex:k,ariaRowSpan:k,ariaSelected:q,ariaSetSize:k,ariaSort:null,ariaValueMax:k,ariaValueMin:k,ariaValueNow:k,ariaValueText:null,role:null},transform(t,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()}});function Ti(t,e){return e in t?t[e]:e}function Oi(t,e){return Ti(t,e.toLowerCase())}const vd=Xe({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Ue,acceptCharset:P,accessKey:P,action:null,allow:null,allowFullScreen:A,allowPaymentRequest:A,allowUserMedia:A,alt:null,as:null,async:A,autoCapitalize:null,autoComplete:P,autoFocus:A,autoPlay:A,blocking:P,capture:null,charSet:null,checked:A,cite:null,className:P,cols:k,colSpan:null,content:null,contentEditable:q,controls:A,controlsList:P,coords:k|Ue,crossOrigin:null,data:null,dateTime:null,decoding:null,default:A,defer:A,dir:null,dirName:null,disabled:A,download:xn,draggable:q,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:A,formTarget:null,headers:P,height:k,hidden:xn,high:k,href:null,hrefLang:null,htmlFor:P,httpEquiv:P,id:null,imageSizes:null,imageSrcSet:null,inert:A,inputMode:null,integrity:null,is:null,isMap:A,itemId:null,itemProp:P,itemRef:P,itemScope:A,itemType:P,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:A,low:k,manifest:null,max:null,maxLength:k,media:null,method:null,min:null,minLength:k,multiple:A,muted:A,name:null,nonce:null,noModule:A,noValidate:A,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:A,optimum:k,pattern:null,ping:P,placeholder:null,playsInline:A,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:A,referrerPolicy:null,rel:P,required:A,reversed:A,rows:k,rowSpan:k,sandbox:P,scope:null,scoped:A,seamless:A,selected:A,shadowRootClonable:A,shadowRootDelegatesFocus:A,shadowRootMode:null,shape:null,size:k,sizes:null,slot:null,span:k,spellCheck:q,src:null,srcDoc:null,srcLang:null,srcSet:null,start:k,step:null,style:null,tabIndex:k,target:null,title:null,translate:null,type:null,typeMustMatch:A,useMap:null,value:q,width:k,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:P,axis:null,background:null,bgColor:null,border:k,borderColor:null,bottomMargin:k,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:A,declare:A,event:null,face:null,frame:null,frameBorder:null,hSpace:k,leftMargin:k,link:null,longDesc:null,lowSrc:null,marginHeight:k,marginWidth:k,noResize:A,noHref:A,noShade:A,noWrap:A,object:null,profile:null,prompt:null,rev:null,rightMargin:k,rules:null,scheme:null,scrolling:q,standby:null,summary:null,text:null,topMargin:k,valueType:null,version:null,vAlign:null,vLink:null,vSpace:k,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:A,disableRemotePlayback:A,prefix:null,property:null,results:k,security:null,unselectable:null},space:"html",transform:Oi}),xd=Xe({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:le,accentHeight:k,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:k,amplitude:k,arabicForm:null,ascent:k,attributeName:null,attributeType:null,azimuth:k,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:k,by:null,calcMode:null,capHeight:k,className:P,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:k,diffuseConstant:k,direction:null,display:null,dur:null,divisor:k,dominantBaseline:null,download:A,dx:null,dy:null,edgeMode:null,editable:null,elevation:k,enableBackground:null,end:null,event:null,exponent:k,externalResourcesRequired:null,fill:null,fillOpacity:k,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Ue,g2:Ue,glyphName:Ue,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:k,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:k,horizOriginX:k,horizOriginY:k,id:null,ideographic:k,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:k,k,k1:k,k2:k,k3:k,k4:k,kernelMatrix:le,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:k,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:k,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:k,overlineThickness:k,paintOrder:null,panose1:null,path:null,pathLength:k,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:P,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:k,pointsAtY:k,pointsAtZ:k,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:le,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:le,rev:le,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:le,requiredFeatures:le,requiredFonts:le,requiredFormats:le,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:k,specularExponent:k,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:k,strikethroughThickness:k,string:null,stroke:null,strokeDashArray:le,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:k,strokeOpacity:k,strokeWidth:null,style:null,surfaceScale:k,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:le,tabIndex:k,tableValues:null,target:null,targetX:k,targetY:k,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:le,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:k,underlineThickness:k,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:k,values:null,vAlphabetic:k,vMathematical:k,vectorEffect:null,vHanging:k,vIdeographic:k,version:null,vertAdvY:k,vertOriginX:k,vertOriginY:k,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:k,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Ti}),zi=Xe({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(t,e){return"xlink:"+e.slice(5).toLowerCase()}}),Pi=Xe({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Oi}),Li=Xe({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(t,e){return"xml:"+e.slice(3).toLowerCase()}}),Cd=/[A-Z]/g,va=/-[a-z]/g,Fd=/^data[-\w.:]+$/i;function wd(t,e){const n=vn(e);let r=e,a=se;if(n in t.normal)return t.property[t.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Fd.test(e)){if(e.charAt(4)==="-"){const o=e.slice(5).replace(va,Sd);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=e.slice(4);if(!va.test(o)){let i=o.replace(Cd,kd);i.charAt(0)!=="-"&&(i="-"+i),e="data"+i}}a=jn}return new a(r,e)}function kd(t){return"-"+t.toLowerCase()}function Sd(t){return t.charAt(1).toUpperCase()}const Ed=Ri([ji,vd,zi,Pi,Li],"html"),$i=Ri([ji,xd,zi,Pi,Li],"svg"),_d=/["&'<>`]/g,Ad=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Bd=/[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,Nd=/[|\\{}()[\]^$+*?.]/g,xa=new WeakMap;function Rd(t,e){if(t=t.replace(e.subset?jd(e.subset):_d,r),e.subset||e.escapeOnly)return t;return t.replace(Ad,n).replace(Bd,r);function n(a,o,i){return e.format((a.charCodeAt(0)-55296)*1024+a.charCodeAt(1)-56320+65536,i.charCodeAt(o+2),e)}function r(a,o,i){return e.format(a.charCodeAt(0),i.charCodeAt(o+1),e)}}function jd(t){let e=xa.get(t);return e||(e=Td(t),xa.set(t,e)),e}function Td(t){const e=[];let n=-1;for(;++n<t.length;)e.push(t[n].replace(Nd,"\\$&"));return new RegExp("(?:"+e.join("|")+")","g")}const Od=/[\dA-Fa-f]/;function zd(t,e,n){const r="&#x"+t.toString(16).toUpperCase();return n&&e&&!Od.test(String.fromCharCode(e))?r:r+";"}const Pd=/\d/;function Ld(t,e,n){const r="&#"+String(t);return n&&e&&!Pd.test(String.fromCharCode(e))?r:r+";"}const $d=["AElig","AMP","Aacute","Acirc","Agrave","Aring","Atilde","Auml","COPY","Ccedil","ETH","Eacute","Ecirc","Egrave","Euml","GT","Iacute","Icirc","Igrave","Iuml","LT","Ntilde","Oacute","Ocirc","Ograve","Oslash","Otilde","Ouml","QUOT","REG","THORN","Uacute","Ucirc","Ugrave","Uuml","Yacute","aacute","acirc","acute","aelig","agrave","amp","aring","atilde","auml","brvbar","ccedil","cedil","cent","copy","curren","deg","divide","eacute","ecirc","egrave","eth","euml","frac12","frac14","frac34","gt","iacute","icirc","iexcl","igrave","iquest","iuml","laquo","lt","macr","micro","middot","nbsp","not","ntilde","oacute","ocirc","ograve","ordf","ordm","oslash","otilde","ouml","para","plusmn","pound","quot","raquo","reg","sect","shy","sup1","sup2","sup3","szlig","thorn","times","uacute","ucirc","ugrave","uml","uuml","yacute","yen","yuml"],ln={nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",fnof:"ƒ",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",bull:"•",hellip:"…",prime:"′",Prime:"″",oline:"‾",frasl:"⁄",weierp:"℘",image:"ℑ",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",lang:"〈",rang:"〉",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦",quot:'"',amp:"&",lt:"<",gt:">",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",circ:"ˆ",tilde:"˜",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",permil:"‰",lsaquo:"‹",rsaquo:"›",euro:"€"},Id=["cent","copy","divide","gt","lt","not","para","times"],Ii={}.hasOwnProperty,Fn={};let xt;for(xt in ln)Ii.call(ln,xt)&&(Fn[ln[xt]]=xt);const Md=/[^\dA-Za-z]/;function Hd(t,e,n,r){const a=String.fromCharCode(t);if(Ii.call(Fn,a)){const o=Fn[a],i="&"+o;return n&&$d.includes(o)&&!Id.includes(o)&&(!r||e&&e!==61&&Md.test(String.fromCharCode(e)))?i:i+";"}return""}function Wd(t,e,n){let r=zd(t,e,n.omitOptionalSemicolons),a;if((n.useNamedReferences||n.useShortestReferences)&&(a=Hd(t,e,n.omitOptionalSemicolons,n.attribute)),(n.useShortestReferences||!a)&&n.useShortestReferences){const o=Ld(t,e,n.omitOptionalSemicolons);o.length<r.length&&(r=o)}return a&&(!n.useShortestReferences||a.length<r.length)?a:r}function qe(t,e){return Rd(t,Object.assign({format:Wd},e))}const Gd=/^>|^->|<!--|-->|--!>|<!-$/g,Ud=[">"],qd=["<",">"];function Vd(t,e,n,r){return r.settings.bogusComments?"<?"+qe(t.value,Object.assign({},r.settings.characterReferences,{subset:Ud}))+">":"<!--"+t.value.replace(Gd,a)+"-->";function a(o){return qe(o,Object.assign({},r.settings.characterReferences,{subset:qd}))}}function Kd(t,e,n,r){return"<!"+(r.settings.upperDoctype?"DOCTYPE":"doctype")+(r.settings.tightDoctype?"":" ")+"html>"}const Yd=/[ \t\n\f\r]/g;function Tn(t){return typeof t=="object"?t.type==="text"?Ca(t.value):!1:Ca(t)}function Ca(t){return t.replace(Yd,"")===""}const Y=Hi(1),Mi=Hi(-1),Xd=[];function Hi(t){return e;function e(n,r,a){const o=n?n.children:Xd;let i=(r||0)+t,s=o[i];if(!a)for(;s&&Tn(s);)i+=t,s=o[i];return s}}const Qd={}.hasOwnProperty;function Wi(t){return e;function e(n,r,a){return Qd.call(t,n.tagName)&&t[n.tagName](n,r,a)}}const On=Wi({body:Jd,caption:un,colgroup:un,dd:rh,dt:nh,head:un,html:Zd,li:th,optgroup:ah,option:oh,p:eh,rp:Fa,rt:Fa,tbody:sh,td:wa,tfoot:lh,th:wa,thead:ih,tr:uh});function un(t,e,n){const r=Y(n,e,!0);return!r||r.type!=="comment"&&!(r.type==="text"&&Tn(r.value.charAt(0)))}function Zd(t,e,n){const r=Y(n,e);return!r||r.type!=="comment"}function Jd(t,e,n){const r=Y(n,e);return!r||r.type!=="comment"}function eh(t,e,n){const r=Y(n,e);return r?r.type==="element"&&(r.tagName==="address"||r.tagName==="article"||r.tagName==="aside"||r.tagName==="blockquote"||r.tagName==="details"||r.tagName==="div"||r.tagName==="dl"||r.tagName==="fieldset"||r.tagName==="figcaption"||r.tagName==="figure"||r.tagName==="footer"||r.tagName==="form"||r.tagName==="h1"||r.tagName==="h2"||r.tagName==="h3"||r.tagName==="h4"||r.tagName==="h5"||r.tagName==="h6"||r.tagName==="header"||r.tagName==="hgroup"||r.tagName==="hr"||r.tagName==="main"||r.tagName==="menu"||r.tagName==="nav"||r.tagName==="ol"||r.tagName==="p"||r.tagName==="pre"||r.tagName==="section"||r.tagName==="table"||r.tagName==="ul"):!n||!(n.type==="element"&&(n.tagName==="a"||n.tagName==="audio"||n.tagName==="del"||n.tagName==="ins"||n.tagName==="map"||n.tagName==="noscript"||n.tagName==="video"))}function th(t,e,n){const r=Y(n,e);return!r||r.type==="element"&&r.tagName==="li"}function nh(t,e,n){const r=Y(n,e);return!!(r&&r.type==="element"&&(r.tagName==="dt"||r.tagName==="dd"))}function rh(t,e,n){const r=Y(n,e);return!r||r.type==="element"&&(r.tagName==="dt"||r.tagName==="dd")}function Fa(t,e,n){const r=Y(n,e);return!r||r.type==="element"&&(r.tagName==="rp"||r.tagName==="rt")}function ah(t,e,n){const r=Y(n,e);return!r||r.type==="element"&&r.tagName==="optgroup"}function oh(t,e,n){const r=Y(n,e);return!r||r.type==="element"&&(r.tagName==="option"||r.tagName==="optgroup")}function ih(t,e,n){const r=Y(n,e);return!!(r&&r.type==="element"&&(r.tagName==="tbody"||r.tagName==="tfoot"))}function sh(t,e,n){const r=Y(n,e);return!r||r.type==="element"&&(r.tagName==="tbody"||r.tagName==="tfoot")}function lh(t,e,n){return!Y(n,e)}function uh(t,e,n){const r=Y(n,e);return!r||r.type==="element"&&r.tagName==="tr"}function wa(t,e,n){const r=Y(n,e);return!r||r.type==="element"&&(r.tagName==="td"||r.tagName==="th")}const ch=Wi({body:fh,colgroup:ph,head:hh,html:dh,tbody:gh});function dh(t){const e=Y(t,-1);return!e||e.type!=="comment"}function hh(t){const e=new Set;for(const r of t.children)if(r.type==="element"&&(r.tagName==="base"||r.tagName==="title")){if(e.has(r.tagName))return!1;e.add(r.tagName)}const n=t.children[0];return!n||n.type==="element"}function fh(t){const e=Y(t,-1,!0);return!e||e.type!=="comment"&&!(e.type==="text"&&Tn(e.value.charAt(0)))&&!(e.type==="element"&&(e.tagName==="meta"||e.tagName==="link"||e.tagName==="script"||e.tagName==="style"||e.tagName==="template"))}function ph(t,e,n){const r=Mi(n,e),a=Y(t,-1,!0);return n&&r&&r.type==="element"&&r.tagName==="colgroup"&&On(r,n.children.indexOf(r),n)?!1:!!(a&&a.type==="element"&&a.tagName==="col")}function gh(t,e,n){const r=Mi(n,e),a=Y(t,-1);return n&&r&&r.type==="element"&&(r.tagName==="thead"||r.tagName==="tbody")&&On(r,n.children.indexOf(r),n)?!1:!!(a&&a.type==="element"&&a.tagName==="tr")}const Ct={name:[[`	
\f\r &/=>`.split(""),`	
\f\r "&'/=>\``.split("")],[`\0	
\f\r "&'/<=>`.split(""),`\0	
\f\r "&'/<=>\``.split("")]],unquoted:[[`	
\f\r &>`.split(""),`\0	
\f\r "&'<=>\``.split("")],[`\0	
\f\r "&'<=>\``.split(""),`\0	
\f\r "&'<=>\``.split("")]],single:[["&'".split(""),"\"&'`".split("")],["\0&'".split(""),"\0\"&'`".split("")]],double:[['"&'.split(""),"\"&'`".split("")],['\0"&'.split(""),"\0\"&'`".split("")]]};function mh(t,e,n,r){const a=r.schema,o=a.space==="svg"?!1:r.settings.omitOptionalTags;let i=a.space==="svg"?r.settings.closeEmptyElements:r.settings.voids.includes(t.tagName.toLowerCase());const s=[];let l;a.space==="html"&&t.tagName==="svg"&&(r.schema=$i);const u=bh(r,t.properties),c=r.all(a.space==="html"&&t.tagName==="template"?t.content:t);return r.schema=a,c&&(i=!1),(u||!o||!ch(t,e,n))&&(s.push("<",t.tagName,u?" "+u:""),i&&(a.space==="svg"||r.settings.closeSelfClosing)&&(l=u.charAt(u.length-1),(!r.settings.tightSelfClosing||l==="/"||l&&l!=='"'&&l!=="'")&&s.push(" "),s.push("/")),s.push(">")),s.push(c),!i&&(!o||!On(t,e,n))&&s.push("</"+t.tagName+">"),s.join("")}function bh(t,e){const n=[];let r=-1,a;if(e){for(a in e)if(e[a]!==null&&e[a]!==void 0){const o=Dh(t,a,e[a]);o&&n.push(o)}}for(;++r<n.length;){const o=t.settings.tightAttributes?n[r].charAt(n[r].length-1):void 0;r!==n.length-1&&o!=='"'&&o!=="'"&&(n[r]+=" ")}return n.join("")}function Dh(t,e,n){const r=wd(t.schema,e),a=t.settings.allowParseErrors&&t.schema.space==="html"?0:1,o=t.settings.allowDangerousCharacters?0:1;let i=t.quote,s;if(r.overloadedBoolean&&(n===r.attribute||n==="")?n=!0:(r.boolean||r.overloadedBoolean)&&(typeof n!="string"||n===r.attribute||n==="")&&(n=!!n),n==null||n===!1||typeof n=="number"&&Number.isNaN(n))return"";const l=qe(r.attribute,Object.assign({},t.settings.characterReferences,{subset:Ct.name[a][o]}));return n===!0||(n=Array.isArray(n)?(r.commaSeparated?dc:cc)(n,{padLeft:!t.settings.tightCommaSeparatedLists}):String(n),t.settings.collapseEmptyAttributes&&!n)?l:(t.settings.preferUnquoted&&(s=qe(n,Object.assign({},t.settings.characterReferences,{attribute:!0,subset:Ct.unquoted[a][o]}))),s!==n&&(t.settings.quoteSmart&&ca(n,i)>ca(n,t.alternative)&&(i=t.alternative),s=i+qe(n,Object.assign({},t.settings.characterReferences,{subset:(i==="'"?Ct.single:Ct.double)[a][o],attribute:!0}))+i),l+(s&&"="+s))}const yh=["<","&"];function Gi(t,e,n,r){return n&&n.type==="element"&&(n.tagName==="script"||n.tagName==="style")?t.value:qe(t.value,Object.assign({},r.settings.characterReferences,{subset:yh}))}function vh(t,e,n,r){return r.settings.allowDangerousHtml?t.value:Gi(t,e,n,r)}function xh(t,e,n,r){return r.all(t)}const Ch=hc("type",{invalid:Fh,unknown:wh,handlers:{comment:Vd,doctype:Kd,element:mh,raw:vh,root:xh,text:Gi}});function Fh(t){throw new Error("Expected node, not `"+t+"`")}function wh(t){const e=t;throw new Error("Cannot compile unknown node `"+e.type+"`")}const kh={},Sh={},Eh=[];function _h(t,e){const n=kh,r=n.quote||'"',a=r==='"'?"'":'"';if(r!=='"'&&r!=="'")throw new Error("Invalid quote `"+r+"`, expected `'` or `\"`");return{one:Ah,all:Bh,settings:{omitOptionalTags:n.omitOptionalTags||!1,allowParseErrors:n.allowParseErrors||!1,allowDangerousCharacters:n.allowDangerousCharacters||!1,quoteSmart:n.quoteSmart||!1,preferUnquoted:n.preferUnquoted||!1,tightAttributes:n.tightAttributes||!1,upperDoctype:n.upperDoctype||!1,tightDoctype:n.tightDoctype||!1,bogusComments:n.bogusComments||!1,tightCommaSeparatedLists:n.tightCommaSeparatedLists||!1,tightSelfClosing:n.tightSelfClosing||!1,collapseEmptyAttributes:n.collapseEmptyAttributes||!1,allowDangerousHtml:n.allowDangerousHtml||!1,voids:n.voids||fc,characterReferences:n.characterReferences||Sh,closeSelfClosing:n.closeSelfClosing||!1,closeEmptyElements:n.closeEmptyElements||!1},schema:n.space==="svg"?$i:Ed,quote:r,alternative:a}.one(Array.isArray(t)?{type:"root",children:t}:t,void 0,void 0)}function Ah(t,e,n){return Ch(t,e,n,this)}function Bh(t){const e=[],n=t&&t.children||Eh;let r=-1;for(;++r<n.length;)e[r]=this.one(n[r],r,t);return e.join("")}function Nh(t){return Array.isArray(t)?t:[t]}function Mt(t,e=!1){const n=t.split(/(\r?\n)/g);let r=0;const a=[];for(let o=0;o<n.length;o+=2){const i=e?n[o]+(n[o+1]||""):n[o];a.push([i,r]),r+=n[o].length,r+=n[o+1]?.length||0}return a}function zn(t){return!t||["plaintext","txt","text","plain"].includes(t)}function Rh(t){return t==="ansi"||zn(t)}function Pn(t){return t==="none"}function jh(t){return Pn(t)}function Ui(t,e){var r;if(!e)return t;t.properties||(t.properties={}),(r=t.properties).class||(r.class=[]),typeof t.properties.class=="string"&&(t.properties.class=t.properties.class.split(/\s+/g)),Array.isArray(t.properties.class)||(t.properties.class=[]);const n=Array.isArray(e)?e:e.split(/\s+/g);for(const a of n)a&&!t.properties.class.includes(a)&&t.properties.class.push(a);return t}function Th(t,e){let n=0;const r=[];for(const a of e)a>n&&r.push({...t,content:t.content.slice(n,a),offset:t.offset+n}),n=a;return n<t.content.length&&r.push({...t,content:t.content.slice(n),offset:t.offset+n}),r}function Oh(t,e){const n=Array.from(e instanceof Set?e:new Set(e)).sort((r,a)=>r-a);return n.length?t.map(r=>r.flatMap(a=>{const o=n.filter(i=>a.offset<i&&i<a.offset+a.content.length).map(i=>i-a.offset).sort((i,s)=>i-s);return o.length?Th(a,o):a})):t}async function qi(t){return Promise.resolve(typeof t=="function"?t():t).then(e=>e.default||e)}function Ot(t,e){const n=typeof t=="string"?{}:{...t.colorReplacements},r=typeof t=="string"?t:t.name;for(const[a,o]of Object.entries(e?.colorReplacements||{}))typeof o=="string"?n[a]=o:a===r&&Object.assign(n,o);return n}function ze(t,e){return t&&(e?.[t?.toLowerCase()]||t)}function Vi(t){const e={};return t.color&&(e.color=t.color),t.bgColor&&(e["background-color"]=t.bgColor),t.fontStyle&&(t.fontStyle&ke.Italic&&(e["font-style"]="italic"),t.fontStyle&ke.Bold&&(e["font-weight"]="bold"),t.fontStyle&ke.Underline&&(e["text-decoration"]="underline")),e}function zh(t){return typeof t=="string"?t:Object.entries(t).map(([e,n])=>`${e}:${n}`).join(";")}function Ph(t){const e=Mt(t,!0).map(([a])=>a);function n(a){if(a===t.length)return{line:e.length-1,character:e[e.length-1].length};let o=a,i=0;for(const s of e){if(o<s.length)break;o-=s.length,i++}return{line:i,character:o}}function r(a,o){let i=0;for(let s=0;s<a;s++)i+=e[s].length;return i+=o,i}return{lines:e,indexToPos:n,posToIndex:r}}class re extends Error{constructor(e){super(e),this.name="ShikiError"}}const Ki=new WeakMap;function Ht(t,e){Ki.set(t,e)}function st(t){return Ki.get(t)}class Qe{constructor(...e){v(this,"_stacks",{});v(this,"lang");if(e.length===2){const[n,r]=e;this.lang=r,this._stacks=n}else{const[n,r,a]=e;this.lang=r,this._stacks={[a]:n}}}get themes(){return Object.keys(this._stacks)}get theme(){return this.themes[0]}get _stack(){return this._stacks[this.theme]}static initial(e,n){return new Qe(Object.fromEntries(Nh(n).map(r=>[r,yn])),e)}getInternalStack(e=this.theme){return this._stacks[e]}get scopes(){return ka(this._stacks[this.theme])}getScopes(e=this.theme){return ka(this._stacks[e])}toJSON(){return{lang:this.lang,theme:this.theme,themes:this.themes,scopes:this.scopes}}}function ka(t){const e=[],n=new Set;function r(a){if(n.has(a))return;n.add(a);const o=a?.nameScopesList?.scopeName;o&&e.push(o),a.parent&&r(a.parent)}return r(t),e}function Lh(t,e){if(!(t instanceof Qe))throw new re("Invalid grammar state");return t.getInternalStack(e)}function $h(){const t=new WeakMap;function e(n){if(!t.has(n.meta)){let r=function(i){if(typeof i=="number"){if(i<0||i>n.source.length)throw new re(`Invalid decoration offset: ${i}. Code length: ${n.source.length}`);return{...a.indexToPos(i),offset:i}}else{const s=a.lines[i.line];if(s===void 0)throw new re(`Invalid decoration position ${JSON.stringify(i)}. Lines length: ${a.lines.length}`);if(i.character<0||i.character>s.length)throw new re(`Invalid decoration position ${JSON.stringify(i)}. Line ${i.line} length: ${s.length}`);return{...i,offset:a.posToIndex(i.line,i.character)}}};const a=Ph(n.source),o=(n.options.decorations||[]).map(i=>({...i,start:r(i.start),end:r(i.end)}));Ih(o),t.set(n.meta,{decorations:o,converter:a,source:n.source})}return t.get(n.meta)}return{name:"shiki:decorations",tokens(n){if(!this.options.decorations?.length)return;const a=e(this).decorations.flatMap(i=>[i.start.offset,i.end.offset]);return Oh(n,a)},code(n){if(!this.options.decorations?.length)return;const r=e(this),a=Array.from(n.children).filter(c=>c.type==="element"&&c.tagName==="span");if(a.length!==r.converter.lines.length)throw new re(`Number of lines in code element (${a.length}) does not match the number of lines in the source (${r.converter.lines.length}). Failed to apply decorations.`);function o(c,d,p,h){const f=a[c];let D="",g=-1,x=-1;if(d===0&&(g=0),p===0&&(x=0),p===Number.POSITIVE_INFINITY&&(x=f.children.length),g===-1||x===-1)for(let y=0;y<f.children.length;y++)D+=Yi(f.children[y]),g===-1&&D.length===d&&(g=y+1),x===-1&&D.length===p&&(x=y+1);if(g===-1)throw new re(`Failed to find start index for decoration ${JSON.stringify(h.start)}`);if(x===-1)throw new re(`Failed to find end index for decoration ${JSON.stringify(h.end)}`);const C=f.children.slice(g,x);if(!h.alwaysWrap&&C.length===f.children.length)s(f,h,"line");else if(!h.alwaysWrap&&C.length===1&&C[0].type==="element")s(C[0],h,"token");else{const y={type:"element",tagName:"span",properties:{},children:C};s(y,h,"wrapper"),f.children.splice(g,C.length,y)}}function i(c,d){a[c]=s(a[c],d,"line")}function s(c,d,p){const h=d.properties||{},f=d.transform||(D=>D);return c.tagName=d.tagName||"span",c.properties={...c.properties,...h,class:c.properties.class},d.properties?.class&&Ui(c,d.properties.class),c=f(c,p)||c,c}const l=[],u=r.decorations.sort((c,d)=>d.start.offset-c.start.offset);for(const c of u){const{start:d,end:p}=c;if(d.line===p.line)o(d.line,d.character,p.character,c);else if(d.line<p.line){o(d.line,d.character,Number.POSITIVE_INFINITY,c);for(let h=d.line+1;h<p.line;h++)l.unshift(()=>i(h,c));o(p.line,0,p.character,c)}}l.forEach(c=>c())}}}function Ih(t){for(let e=0;e<t.length;e++){const n=t[e];if(n.start.offset>n.end.offset)throw new re(`Invalid decoration range: ${JSON.stringify(n.start)} - ${JSON.stringify(n.end)}`);for(let r=e+1;r<t.length;r++){const a=t[r],o=n.start.offset<a.start.offset&&a.start.offset<n.end.offset,i=n.start.offset<a.end.offset&&a.end.offset<n.end.offset,s=a.start.offset<n.start.offset&&n.start.offset<a.end.offset,l=a.start.offset<n.end.offset&&n.end.offset<a.end.offset;if(o||i||s||l){if(i&&i||s&&l)continue;throw new re(`Decorations ${JSON.stringify(n.start)} and ${JSON.stringify(a.start)} intersect.`)}}}}function Yi(t){return t.type==="text"?t.value:t.type==="element"?t.children.map(Yi).join(""):""}const Mh=[$h()];function zt(t){return[...t.transformers||[],...Mh]}var Pe=["black","red","green","yellow","blue","magenta","cyan","white","brightBlack","brightRed","brightGreen","brightYellow","brightBlue","brightMagenta","brightCyan","brightWhite"],cn={1:"bold",2:"dim",3:"italic",4:"underline",7:"reverse",9:"strikethrough"};function Hh(t,e){const n=t.indexOf("\x1B[",e);if(n!==-1){const r=t.indexOf("m",n);return{sequence:t.substring(n+2,r).split(";"),startPosition:n,position:r+1}}return{position:t.length}}function Sa(t,e){let n=1;const r=t[e+n++];let a;if(r==="2"){const o=[t[e+n++],t[e+n++],t[e+n]].map(i=>Number.parseInt(i));o.length===3&&!o.some(i=>Number.isNaN(i))&&(a={type:"rgb",rgb:o})}else if(r==="5"){const o=Number.parseInt(t[e+n]);Number.isNaN(o)||(a={type:"table",index:Number(o)})}return[n,a]}function Wh(t){const e=[];for(let n=0;n<t.length;n++){const r=t[n],a=Number.parseInt(r);if(!Number.isNaN(a))if(a===0)e.push({type:"resetAll"});else if(a<=9)cn[a]&&e.push({type:"setDecoration",value:cn[a]});else if(a<=29){const o=cn[a-20];o&&e.push({type:"resetDecoration",value:o})}else if(a<=37)e.push({type:"setForegroundColor",value:{type:"named",name:Pe[a-30]}});else if(a===38){const[o,i]=Sa(t,n);i&&e.push({type:"setForegroundColor",value:i}),n+=o}else if(a===39)e.push({type:"resetForegroundColor"});else if(a<=47)e.push({type:"setBackgroundColor",value:{type:"named",name:Pe[a-40]}});else if(a===48){const[o,i]=Sa(t,n);i&&e.push({type:"setBackgroundColor",value:i}),n+=o}else a===49?e.push({type:"resetBackgroundColor"}):a>=90&&a<=97?e.push({type:"setForegroundColor",value:{type:"named",name:Pe[a-90+8]}}):a>=100&&a<=107&&e.push({type:"setBackgroundColor",value:{type:"named",name:Pe[a-100+8]}})}return e}function Gh(){let t=null,e=null,n=new Set;return{parse(r){const a=[];let o=0;do{const i=Hh(r,o),s=i.sequence?r.substring(o,i.startPosition):r.substring(o);if(s.length>0&&a.push({value:s,foreground:t,background:e,decorations:new Set(n)}),i.sequence){const l=Wh(i.sequence);for(const u of l)u.type==="resetAll"?(t=null,e=null,n.clear()):u.type==="resetForegroundColor"?t=null:u.type==="resetBackgroundColor"?e=null:u.type==="resetDecoration"&&n.delete(u.value);for(const u of l)u.type==="setForegroundColor"?t=u.value:u.type==="setBackgroundColor"?e=u.value:u.type==="setDecoration"&&n.add(u.value)}o=i.position}while(o<r.length);return a}}}var Uh={black:"#000000",red:"#bb0000",green:"#00bb00",yellow:"#bbbb00",blue:"#0000bb",magenta:"#ff00ff",cyan:"#00bbbb",white:"#eeeeee",brightBlack:"#555555",brightRed:"#ff5555",brightGreen:"#00ff00",brightYellow:"#ffff55",brightBlue:"#5555ff",brightMagenta:"#ff55ff",brightCyan:"#55ffff",brightWhite:"#ffffff"};function qh(t=Uh){function e(s){return t[s]}function n(s){return`#${s.map(l=>Math.max(0,Math.min(l,255)).toString(16).padStart(2,"0")).join("")}`}let r;function a(){if(r)return r;r=[];for(let u=0;u<Pe.length;u++)r.push(e(Pe[u]));let s=[0,95,135,175,215,255];for(let u=0;u<6;u++)for(let c=0;c<6;c++)for(let d=0;d<6;d++)r.push(n([s[u],s[c],s[d]]));let l=8;for(let u=0;u<24;u++,l+=10)r.push(n([l,l,l]));return r}function o(s){return a()[s]}function i(s){switch(s.type){case"named":return e(s.name);case"rgb":return n(s.rgb);case"table":return o(s.index)}}return{value:i}}function Vh(t,e,n){const r=Ot(t,n),a=Mt(e),o=qh(Object.fromEntries(Pe.map(s=>[s,t.colors?.[`terminal.ansi${s[0].toUpperCase()}${s.substring(1)}`]]))),i=Gh();return a.map(s=>i.parse(s[0]).map(l=>{let u,c;l.decorations.has("reverse")?(u=l.background?o.value(l.background):t.bg,c=l.foreground?o.value(l.foreground):t.fg):(u=l.foreground?o.value(l.foreground):t.fg,c=l.background?o.value(l.background):void 0),u=ze(u,r),c=ze(c,r),l.decorations.has("dim")&&(u=Kh(u));let d=ke.None;return l.decorations.has("bold")&&(d|=ke.Bold),l.decorations.has("italic")&&(d|=ke.Italic),l.decorations.has("underline")&&(d|=ke.Underline),{content:l.value,offset:s[1],color:u,bgColor:c,fontStyle:d}}))}function Kh(t){const e=t.match(/#([0-9a-f]{3})([0-9a-f]{3})?([0-9a-f]{2})?/);if(e)if(e[3]){const r=Math.round(Number.parseInt(e[3],16)/2).toString(16).padStart(2,"0");return`#${e[1]}${e[2]}${r}`}else return e[2]?`#${e[1]}${e[2]}80`:`#${Array.from(e[1]).map(r=>`${r}${r}`).join("")}80`;const n=t.match(/var\((--[\w-]+-ansi-[\w-]+)\)/);return n?`var(${n[1]}-dim)`:t}function Ln(t,e,n={}){const{lang:r="text",theme:a=t.getLoadedThemes()[0]}=n;if(zn(r)||Pn(a))return Mt(e).map(l=>[{content:l[0],offset:l[1]}]);const{theme:o,colorMap:i}=t.setTheme(a);if(r==="ansi")return Vh(o,e,n);const s=t.getLanguage(r);if(n.grammarState){if(n.grammarState.lang!==s.name)throw new Le(`Grammar state language "${n.grammarState.lang}" does not match highlight language "${s.name}"`);if(!n.grammarState.themes.includes(o.name))throw new Le(`Grammar state themes "${n.grammarState.themes}" do not contain highlight theme "${o.name}"`)}return Xh(e,s,o,i,n)}function Yh(...t){if(t.length===2)return st(t[1]);const[e,n,r={}]=t,{lang:a="text",theme:o=e.getLoadedThemes()[0]}=r;if(zn(a)||Pn(o))throw new Le("Plain language does not have grammar state");if(a==="ansi")throw new Le("ANSI language does not have grammar state");const{theme:i,colorMap:s}=e.setTheme(o),l=e.getLanguage(a);return new Qe(Pt(n,l,i,s,r).stateStack,l.name,i.name)}function Xh(t,e,n,r,a){const o=Pt(t,e,n,r,a),i=new Qe(Pt(t,e,n,r,a).stateStack,e.name,n.name);return Ht(o.tokens,i),o.tokens}function Pt(t,e,n,r,a){const o=Ot(n,a),{tokenizeMaxLineLength:i=0,tokenizeTimeLimit:s=500}=a,l=Mt(t);let u=a.grammarState?Lh(a.grammarState,n.name)??yn:a.grammarContextCode!=null?Pt(a.grammarContextCode,e,n,r,{...a,grammarState:void 0,grammarContextCode:void 0}).stateStack:yn,c=[];const d=[];for(let p=0,h=l.length;p<h;p++){const[f,D]=l[p];if(f===""){c=[],d.push([]);continue}if(i>0&&f.length>=i){c=[],d.push([{content:f,offset:D,color:"",fontStyle:0}]);continue}let g,x,C;a.includeExplanation&&(g=e.tokenizeLine(f,u),x=g.tokens,C=0);const y=e.tokenizeLine2(f,u,s),S=y.tokens.length/2;for(let E=0;E<S;E++){const _=y.tokens[2*E],T=E+1<S?y.tokens[2*E+2]:f.length;if(_===T)continue;const M=y.tokens[2*E+1],Z=ze(r[Ke.getForeground(M)],o),ae=Ke.getFontStyle(M),W={content:f.substring(_,T),offset:D+_,color:Z,fontStyle:ae};if(a.includeExplanation){const j=[];if(a.includeExplanation!=="scopeName")for(const z of n.settings){let L;switch(typeof z.scope){case"string":L=z.scope.split(/,/).map(G=>G.trim());break;case"object":L=z.scope;break;default:continue}j.push({settings:z,selectors:L.map(G=>G.split(/ /))})}W.explanation=[];let H=0;for(;_+H<T;){const z=x[C],L=f.substring(z.startIndex,z.endIndex);H+=L.length,W.explanation.push({content:L,scopes:a.includeExplanation==="scopeName"?Qh(z.scopes):Zh(j,z.scopes)}),C+=1}}c.push(W)}d.push(c),c=[],u=y.ruleStack}return{tokens:d,stateStack:u}}function Qh(t){return t.map(e=>({scopeName:e}))}function Zh(t,e){const n=[];for(let r=0,a=e.length;r<a;r++){const o=e[r];n[r]={scopeName:o,themeMatches:ef(t,o,e.slice(0,r))}}return n}function Ea(t,e){return t===e||e.substring(0,t.length)===t&&e[t.length]==="."}function Jh(t,e,n){if(!Ea(t[t.length-1],e))return!1;let r=t.length-2,a=n.length-1;for(;r>=0&&a>=0;)Ea(t[r],n[a])&&(r-=1),a-=1;return r===-1}function ef(t,e,n){const r=[];for(const{selectors:a,settings:o}of t)for(const i of a)if(Jh(i,e,n)){r.push(o);break}return r}function Xi(t,e,n){const r=Object.entries(n.themes).filter(l=>l[1]).map(l=>({color:l[0],theme:l[1]})),a=r.map(l=>{const u=Ln(t,e,{...n,theme:l.theme}),c=st(u),d=typeof l.theme=="string"?l.theme:l.theme.name;return{tokens:u,state:c,theme:d}}),o=tf(...a.map(l=>l.tokens)),i=o[0].map((l,u)=>l.map((c,d)=>{const p={content:c.content,variants:{},offset:c.offset};return"includeExplanation"in n&&n.includeExplanation&&(p.explanation=c.explanation),o.forEach((h,f)=>{const{content:D,explanation:g,offset:x,...C}=h[u][d];p.variants[r[f].color]=C}),p})),s=a[0].state?new Qe(Object.fromEntries(a.map(l=>[l.theme,l.state?.getInternalStack(l.theme)])),a[0].state.lang):void 0;return s&&Ht(i,s),i}function tf(...t){const e=t.map(()=>[]),n=t.length;for(let r=0;r<t[0].length;r++){const a=t.map(l=>l[r]),o=e.map(()=>[]);e.forEach((l,u)=>l.push(o[u]));const i=a.map(()=>0),s=a.map(l=>l[0]);for(;s.every(l=>l);){const l=Math.min(...s.map(u=>u.content.length));for(let u=0;u<n;u++){const c=s[u];c.content.length===l?(o[u].push(c),i[u]+=1,s[u]=a[u][i[u]]):(o[u].push({...c,content:c.content.slice(0,l)}),s[u]={...c,content:c.content.slice(l),offset:c.offset+l})}}}return e}function Lt(t,e,n){let r,a,o,i,s,l;if("themes"in n){const{defaultColor:u="light",cssVariablePrefix:c="--shiki-"}=n,d=Object.entries(n.themes).filter(g=>g[1]).map(g=>({color:g[0],theme:g[1]})).sort((g,x)=>g.color===u?-1:x.color===u?1:0);if(d.length===0)throw new Le("`themes` option must not be empty");const p=Xi(t,e,n);if(l=st(p),u&&!d.find(g=>g.color===u))throw new Le(`\`themes\` option must contain the defaultColor key \`${u}\``);const h=d.map(g=>t.getTheme(g.theme)),f=d.map(g=>g.color);o=p.map(g=>g.map(x=>nf(x,f,c,u))),l&&Ht(o,l);const D=d.map(g=>Ot(g.theme,n));a=d.map((g,x)=>(x===0&&u?"":`${c+g.color}:`)+(ze(h[x].fg,D[x])||"inherit")).join(";"),r=d.map((g,x)=>(x===0&&u?"":`${c+g.color}-bg:`)+(ze(h[x].bg,D[x])||"inherit")).join(";"),i=`shiki-themes ${h.map(g=>g.name).join(" ")}`,s=u?void 0:[a,r].join(";")}else if("theme"in n){const u=Ot(n.theme,n);o=Ln(t,e,n);const c=t.getTheme(n.theme);r=ze(c.bg,u),a=ze(c.fg,u),i=c.name,l=st(o)}else throw new Le("Invalid options, either `theme` or `themes` must be provided");return{tokens:o,fg:a,bg:r,themeName:i,rootStyle:s,grammarState:l}}function nf(t,e,n,r){const a={content:t.content,explanation:t.explanation,offset:t.offset},o=e.map(l=>Vi(t.variants[l])),i=new Set(o.flatMap(l=>Object.keys(l))),s={};return o.forEach((l,u)=>{for(const c of i){const d=l[c]||"inherit";if(u===0&&r)s[c]=d;else{const p=c==="color"?"":c==="background-color"?"-bg":`-${c}`,h=n+e[u]+(c==="color"?"":p);s[h]=d}}}),a.htmlStyle=s,a}function $t(t,e,n,r={meta:{},options:n,codeToHast:(a,o)=>$t(t,a,o),codeToTokens:(a,o)=>Lt(t,a,o)}){let a=e;for(const h of zt(n))a=h.preprocess?.call(r,a,n)||a;let{tokens:o,fg:i,bg:s,themeName:l,rootStyle:u,grammarState:c}=Lt(t,a,n);const{mergeWhitespaces:d=!0}=n;d===!0?o=af(o):d==="never"&&(o=of(o));const p={...r,get source(){return a}};for(const h of zt(n))o=h.tokens?.call(p,o)||o;return rf(o,{...n,fg:i,bg:s,themeName:l,rootStyle:u},p,c)}function rf(t,e,n,r=st(t)){const a=zt(e),o=[],i={type:"root",children:[]},{structure:s="classic",tabindex:l="0"}=e;let u={type:"element",tagName:"pre",properties:{class:`shiki ${e.themeName||""}`,style:e.rootStyle||`background-color:${e.bg};color:${e.fg}`,...l!==!1&&l!=null?{tabindex:l.toString()}:{},...Object.fromEntries(Array.from(Object.entries(e.meta||{})).filter(([f])=>!f.startsWith("_")))},children:[]},c={type:"element",tagName:"code",properties:{},children:o};const d=[],p={...n,structure:s,addClassToHast:Ui,get source(){return n.source},get tokens(){return t},get options(){return e},get root(){return i},get pre(){return u},get code(){return c},get lines(){return d}};if(t.forEach((f,D)=>{D&&(s==="inline"?i.children.push({type:"element",tagName:"br",properties:{},children:[]}):s==="classic"&&o.push({type:"text",value:`
`}));let g={type:"element",tagName:"span",properties:{class:"line"},children:[]},x=0;for(const C of f){let y={type:"element",tagName:"span",properties:{...C.htmlAttrs},children:[{type:"text",value:C.content}]};C.htmlStyle;const S=zh(C.htmlStyle||Vi(C));S&&(y.properties.style=S);for(const E of a)y=E?.span?.call(p,y,D+1,x,g,C)||y;s==="inline"?i.children.push(y):s==="classic"&&g.children.push(y),x+=C.content.length}if(s==="classic"){for(const C of a)g=C?.line?.call(p,g,D+1)||g;d.push(g),o.push(g)}}),s==="classic"){for(const f of a)c=f?.code?.call(p,c)||c;u.children.push(c);for(const f of a)u=f?.pre?.call(p,u)||u;i.children.push(u)}let h=i;for(const f of a)h=f?.root?.call(p,h)||h;return r&&Ht(h,r),h}function af(t){return t.map(e=>{const n=[];let r="",a=0;return e.forEach((o,i)=>{const l=!(o.fontStyle&&o.fontStyle&ke.Underline);l&&o.content.match(/^\s+$/)&&e[i+1]?(a||(a=o.offset),r+=o.content):r?(l?n.push({...o,offset:a,content:r+o.content}):n.push({content:r,offset:a},o),a=0,r=""):n.push(o)}),n})}function of(t){return t.map(e=>e.flatMap(n=>{if(n.content.match(/^\s+$/))return n;const r=n.content.match(/^(\s*)(.*?)(\s*)$/);if(!r)return n;const[,a,o,i]=r;if(!a&&!i)return n;const s=[{...n,offset:n.offset+a.length,content:o}];return a&&s.unshift({content:a,offset:n.offset}),i&&s.push({content:i,offset:n.offset+a.length+o.length}),s}))}function sf(t,e,n){const r={meta:{},options:n,codeToHast:(o,i)=>$t(t,o,i),codeToTokens:(o,i)=>Lt(t,o,i)};let a=_h($t(t,e,n,r));for(const o of zt(n))a=o.postprocess?.call(r,a,n)||a;return a}const _a={light:"#333333",dark:"#bbbbbb"},Aa={light:"#fffffe",dark:"#1e1e1e"},Ba="__shiki_resolved";function $n(t){if(t?.[Ba])return t;const e={...t};e.tokenColors&&!e.settings&&(e.settings=e.tokenColors,delete e.tokenColors),e.type||(e.type="dark"),e.colorReplacements={...e.colorReplacements},e.settings||(e.settings=[]);let{bg:n,fg:r}=e;if(!n||!r){const s=e.settings?e.settings.find(l=>!l.name&&!l.scope):void 0;s?.settings?.foreground&&(r=s.settings.foreground),s?.settings?.background&&(n=s.settings.background),!r&&e?.colors?.["editor.foreground"]&&(r=e.colors["editor.foreground"]),!n&&e?.colors?.["editor.background"]&&(n=e.colors["editor.background"]),r||(r=e.type==="light"?_a.light:_a.dark),n||(n=e.type==="light"?Aa.light:Aa.dark),e.fg=r,e.bg=n}e.settings[0]&&e.settings[0].settings&&!e.settings[0].scope||e.settings.unshift({settings:{foreground:e.fg,background:e.bg}});let a=0;const o=new Map;function i(s){if(o.has(s))return o.get(s);a+=1;const l=`#${a.toString(16).padStart(8,"0").toLowerCase()}`;return e.colorReplacements?.[`#${l}`]?i(s):(o.set(s,l),l)}e.settings=e.settings.map(s=>{const l=s.settings?.foreground&&!s.settings.foreground.startsWith("#"),u=s.settings?.background&&!s.settings.background.startsWith("#");if(!l&&!u)return s;const c={...s,settings:{...s.settings}};if(l){const d=i(s.settings.foreground);e.colorReplacements[d]=s.settings.foreground,c.settings.foreground=d}if(u){const d=i(s.settings.background);e.colorReplacements[d]=s.settings.background,c.settings.background=d}return c});for(const s of Object.keys(e.colors||{}))if((s==="editor.foreground"||s==="editor.background"||s.startsWith("terminal.ansi"))&&!e.colors[s]?.startsWith("#")){const l=i(e.colors[s]);e.colorReplacements[l]=e.colors[s],e.colors[s]=l}return Object.defineProperty(e,Ba,{enumerable:!1,writable:!1,value:!0}),e}async function Qi(t){return Array.from(new Set((await Promise.all(t.filter(e=>!Rh(e)).map(async e=>await qi(e).then(n=>Array.isArray(n)?n:[n])))).flat()))}async function Zi(t){return(await Promise.all(t.map(async n=>jh(n)?null:$n(await qi(n))))).filter(n=>!!n)}class lf extends Dd{constructor(n,r,a,o={}){super(n);v(this,"_resolvedThemes",new Map);v(this,"_resolvedGrammars",new Map);v(this,"_langMap",new Map);v(this,"_langGraph",new Map);v(this,"_textmateThemeCache",new WeakMap);v(this,"_loadedThemesCache",null);v(this,"_loadedLanguagesCache",null);this._resolver=n,this._themes=r,this._langs=a,this._alias=o,this._themes.map(i=>this.loadTheme(i)),this.loadLanguages(this._langs)}getTheme(n){return typeof n=="string"?this._resolvedThemes.get(n):this.loadTheme(n)}loadTheme(n){const r=$n(n);return r.name&&(this._resolvedThemes.set(r.name,r),this._loadedThemesCache=null),r}getLoadedThemes(){return this._loadedThemesCache||(this._loadedThemesCache=[...this._resolvedThemes.keys()]),this._loadedThemesCache}setTheme(n){let r=this._textmateThemeCache.get(n);r||(r=Bt.createFromRawTheme(n),this._textmateThemeCache.set(n,r)),this._syncRegistry.setTheme(r)}getGrammar(n){if(this._alias[n]){const r=new Set([n]);for(;this._alias[n];){if(n=this._alias[n],r.has(n))throw new re(`Circular alias \`${Array.from(r).join(" -> ")} -> ${n}\``);r.add(n)}}return this._resolvedGrammars.get(n)}loadLanguage(n){if(this.getGrammar(n.name))return;const r=new Set([...this._langMap.values()].filter(i=>i.embeddedLangsLazy?.includes(n.name)));this._resolver.addLanguage(n);const a={balancedBracketSelectors:n.balancedBracketSelectors||["*"],unbalancedBracketSelectors:n.unbalancedBracketSelectors||[]};this._syncRegistry._rawGrammars.set(n.scopeName,n);const o=this.loadGrammarWithConfiguration(n.scopeName,1,a);if(o.name=n.name,this._resolvedGrammars.set(n.name,o),n.aliases&&n.aliases.forEach(i=>{this._alias[i]=n.name}),this._loadedLanguagesCache=null,r.size)for(const i of r)this._resolvedGrammars.delete(i.name),this._loadedLanguagesCache=null,this._syncRegistry?._injectionGrammars?.delete(i.scopeName),this._syncRegistry?._grammars?.delete(i.scopeName),this.loadLanguage(this._langMap.get(i.name))}dispose(){super.dispose(),this._resolvedThemes.clear(),this._resolvedGrammars.clear(),this._langMap.clear(),this._langGraph.clear(),this._loadedThemesCache=null}loadLanguages(n){for(const o of n)this.resolveEmbeddedLanguages(o);const r=Array.from(this._langGraph.entries()),a=r.filter(([o,i])=>!i);if(a.length){const o=r.filter(([i,s])=>s&&s.embeddedLangs?.some(l=>a.map(([u])=>u).includes(l))).filter(i=>!a.includes(i));throw new re(`Missing languages ${a.map(([i])=>`\`${i}\``).join(", ")}, required by ${o.map(([i])=>`\`${i}\``).join(", ")}`)}for(const[o,i]of r)this._resolver.addLanguage(i);for(const[o,i]of r)this.loadLanguage(i)}getLoadedLanguages(){return this._loadedLanguagesCache||(this._loadedLanguagesCache=[...new Set([...this._resolvedGrammars.keys(),...Object.keys(this._alias)])]),this._loadedLanguagesCache}resolveEmbeddedLanguages(n){if(this._langMap.set(n.name,n),this._langGraph.set(n.name,n),n.embeddedLangs)for(const r of n.embeddedLangs)this._langGraph.set(r,this._langMap.get(r))}}class uf{constructor(e,n){v(this,"_langs",new Map);v(this,"_scopeToLang",new Map);v(this,"_injections",new Map);v(this,"_onigLib");this._onigLib={createOnigScanner:r=>e.createScanner(r),createOnigString:r=>e.createString(r)},n.forEach(r=>this.addLanguage(r))}get onigLib(){return this._onigLib}getLangRegistration(e){return this._langs.get(e)}loadGrammar(e){return this._scopeToLang.get(e)}addLanguage(e){this._langs.set(e.name,e),e.aliases&&e.aliases.forEach(n=>{this._langs.set(n,e)}),this._scopeToLang.set(e.scopeName,e),e.injectTo&&e.injectTo.forEach(n=>{this._injections.get(n)||this._injections.set(n,[]),this._injections.get(n).push(e.scopeName)})}getInjections(e){const n=e.split(".");let r=[];for(let a=1;a<=n.length;a++){const o=n.slice(0,a).join(".");r=[...r,...this._injections.get(o)||[]]}return r}}let Je=0;function cf(t){Je+=1,t.warnings!==!1&&Je>=10&&Je%10===0&&console.warn(`[Shiki] ${Je} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`);let e=!1;if(!t.engine)throw new re("`engine` option is required for synchronous mode");const n=(t.langs||[]).flat(1),r=(t.themes||[]).flat(1).map($n),a=new uf(t.engine,n),o=new lf(a,r,n,t.langAlias);let i;function s(C){g();const y=o.getGrammar(typeof C=="string"?C:C.name);if(!y)throw new re(`Language \`${C}\` not found, you may need to load it first`);return y}function l(C){if(C==="none")return{bg:"",fg:"",name:"none",settings:[],type:"dark"};g();const y=o.getTheme(C);if(!y)throw new re(`Theme \`${C}\` not found, you may need to load it first`);return y}function u(C){g();const y=l(C);i!==C&&(o.setTheme(y),i=C);const S=o.getColorMap();return{theme:y,colorMap:S}}function c(){return g(),o.getLoadedThemes()}function d(){return g(),o.getLoadedLanguages()}function p(...C){g(),o.loadLanguages(C.flat(1))}async function h(...C){return p(await Qi(C))}function f(...C){g();for(const y of C.flat(1))o.loadTheme(y)}async function D(...C){return g(),f(await Zi(C))}function g(){if(e)throw new re("Shiki instance has been disposed")}function x(){e||(e=!0,o.dispose(),Je-=1)}return{setTheme:u,getTheme:l,getLanguage:s,getLoadedThemes:c,getLoadedLanguages:d,loadLanguage:h,loadLanguageSync:p,loadTheme:D,loadThemeSync:f,dispose:x,[Symbol.dispose]:x}}async function df(t={}){t.loadWasm;const[e,n,r]=await Promise.all([Zi(t.themes||[]),Qi(t.langs||[]),t.engine||Rc(t.loadWasm||Nc())]);return cf({...t,themes:e,langs:n,engine:r})}async function hf(t={}){const e=await df(t);return{getLastGrammarState:(...n)=>Yh(e,...n),codeToTokensBase:(n,r)=>Ln(e,n,r),codeToTokensWithThemes:(n,r)=>Xi(e,n,r),codeToTokens:(n,r)=>Lt(e,n,r),codeToHast:(n,r)=>$t(e,n,r),codeToHtml:(n,r)=>sf(e,n,r),...e,getInternalContext:()=>e}}function u0(t={}){return hf(t)}const ff="modulepreload",pf=function(t){return"/dev/"+t},Na={},gf=function(e,n,r){let a=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),s=i?.nonce||i?.getAttribute("nonce");a=Promise.allSettled(n.map(l=>{if(l=pf(l),l in Na)return;Na[l]=!0;const u=l.endsWith(".css"),c=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${c}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":ff,u||(d.as="script"),d.crossOrigin="",d.href=l,s&&d.setAttribute("nonce",s),document.head.appendChild(d),u)return new Promise((p,h)=>{d.addEventListener("load",p),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return a.then(i=>{for(const s of i||[])s.status==="rejected"&&o(s.reason);return e().catch(o)})};var Ra=Object.prototype.hasOwnProperty;function ja(t,e){var n,r;if(t===e)return!0;if(t&&e&&(n=t.constructor)===e.constructor){if(n===Date)return t.getTime()===e.getTime();if(n===RegExp)return t.toString()===e.toString();if(n===Array){if((r=t.length)===e.length)for(;r--&&ja(t[r],e[r]););return r===-1}if(!n||typeof t=="object"){r=0;for(n in t)if(Ra.call(t,n)&&++r&&!Ra.call(e,n)||!(n in e)||!ja(t[n],e[n]))return!1;return Object.keys(e).length===r}}return t!==t&&e!==e}var B={blue:{dark:["#000506","#002126","#00363f","#004e59","#006675","#008093","#159ab0","#47b3ca","#6acde4","#8ae8ff","#b8f0ff","#def7ff","#ffffff"],darkA:["rgba(0, 167, 200, 0.03)","rgba(0, 220, 253, 0.15)","rgba(0, 216, 252, 0.25)","rgba(0, 223, 254, 0.35)","rgba(0, 222, 254, 0.46)","rgba(0, 221, 253, 0.58)","rgba(30, 223, 255, 0.69)","rgba(89, 224, 252, 0.8)","rgba(118, 228, 253, 0.9)","#8ae8ff","#b8f0ff","#def7ff","#ffffff"],light:["#ffffff","#fbfeff","#f4fcff","#eafaff","#dff7ff","#d3f5ff","#c4f2ff","#b4efff","#a1ecff","#8ae8ff","#159ab0","#004e59","#000506"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 205, 255, 0.02)","rgba(35, 195, 255, 0.05)","rgba(22, 199, 255, 0.09)","rgba(9, 193, 255, 0.13)","rgba(11, 199, 255, 0.18)","rgba(9, 201, 255, 0.24)","rgba(5, 202, 255, 0.3)","rgba(1, 204, 255, 0.37)","rgba(1, 205, 255, 0.46)","rgba(1, 145, 169, 0.92)","#004e59","#000506"]},bnw:{dark:["#000000","#111111","#333333","#555555","#666666","#888888","#aaaaaa","#cccccc","#dddddd","#eeeeee","#ffffff","#ffffff","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.08)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.22)","rgba(255, 255, 255, 0.36)","rgba(255, 255, 255, 0.48)","rgba(255, 255, 255, 0.6)","rgba(255, 255, 255, 0.72)","rgba(255, 255, 255, 0.84)","rgba(255, 255, 255, 0.88)","rgba(255, 255, 255, 0.92)","rgba(255, 255, 255, 0.96)","rgba(255, 255, 255, 0.98)"],light:["#ffffff","#f5f5f5","#eeeeee","#cccccc","#aaaaaa","#888888","#666666","#444444","#333333","#222222","#111111","#111111","#111111"],lightA:["rgba(0, 0, 0, 0.02)","rgba(0, 0, 0, 0.08)","rgba(0, 0, 0, 0.16)","rgba(0, 0, 0, 0.22)","rgba(0, 0, 0, 0.36)","rgba(0, 0, 0, 0.48)","rgba(0, 0, 0, 0.6)","rgba(0, 0, 0, 0.72)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.88)","rgba(0, 0, 0, 0.92)","rgba(0, 0, 0, 0.96)","rgba(0, 0, 0, 0.98)"]},cyan:{dark:["#000503","#00221c","#003930","#005245","#006c5b","#008772","#2fa28a","#55bca4","#75d7be","#95f3d9","#bdf7e4","#dffcf0","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 243, 200, 0.14)","rgba(0, 248, 209, 0.23)","rgba(0, 248, 209, 0.33)","rgba(0, 251, 212, 0.43)","rgba(0, 255, 215, 0.53)","rgba(73, 253, 216, 0.64)","rgba(115, 254, 222, 0.74)","rgba(138, 253, 224, 0.85)","rgba(155, 253, 226, 0.96)","rgba(195, 255, 235, 0.97)","rgba(225, 255, 242, 0.99)","#ffffff"],light:["#ffffff","#f9fffb","#effff8","#e3fff4","#d8fef0","#ccfcec","#c0fae8","#b3f8e3","#a5f6de","#95f3d9","#2fa28a","#005245","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(55, 255, 122, 0.03)","rgba(26, 255, 155, 0.07)","rgba(0, 255, 155, 0.11)","rgba(11, 249, 161, 0.16)","rgba(0, 240, 160, 0.2)","rgba(3, 235, 163, 0.25)","rgba(2, 232, 162, 0.3)","rgba(5, 230, 163, 0.36)","rgba(3, 226, 165, 0.42)","rgba(1, 142, 112, 0.82)","#005245","#000503"]},geekblue:{dark:["#000216","#001343","#00225c","#003176","#00418f","#0052a8","#0264c1","#1877d5","#288aea","#369eff","#88bffb","#c5dffd","#ffffff"],darkA:["rgba(0, 22, 244, 0.09)","rgba(0, 70, 248, 0.27)","rgba(0, 92, 249, 0.37)","rgba(0, 104, 251, 0.47)","rgba(0, 116, 255, 0.56)","rgba(0, 124, 255, 0.66)","rgba(3, 132, 254, 0.76)","rgba(29, 142, 254, 0.84)","rgba(43, 150, 254, 0.92)","#369eff","rgba(137, 193, 254, 0.99)","#c5dffd","#ffffff"],light:["#ffffff","#f8faff","#eaf3ff","#daeaff","#c7e0ff","#b1d5ff","#9ac9ff","#7fbcff","#60aeff","#369eff","#0264c1","#003176","#000216"],lightA:["rgba(255, 255, 255, 0.01)","rgba(22, 88, 255, 0.03)","rgba(22, 122, 255, 0.09)","rgba(8, 115, 255, 0.15)","rgba(0, 114, 255, 0.22)","rgba(3, 120, 255, 0.31)","rgba(3, 120, 255, 0.4)","rgba(4, 124, 255, 0.51)","rgba(3, 126, 255, 0.63)","rgba(1, 132, 255, 0.79)","#0264c1","#003176","#000216"]},gold:{dark:["#070300","#271a00","#3f2c00","#593f00","#745400","#906a00","#ac8100","#c99811","#e4b12f","#ffcb47","#ffdd90","#ffeecd","#ffffff"],darkA:["rgba(233, 100, 0, 0.03)","rgba(244, 163, 0, 0.16)","rgba(252, 176, 0, 0.25)","rgba(254, 180, 0, 0.35)","rgba(252, 183, 0, 0.46)","rgba(253, 186, 0, 0.57)","rgba(253, 190, 0, 0.68)","rgba(254, 192, 22, 0.79)","rgba(253, 197, 52, 0.9)","#ffcb47","#ffdd90","#ffeecd","#ffffff"],light:["#ffffff","#fffcff","#fff8f2","#fff4e2","#ffefd0","#ffe9bb","#ffe3a4","#ffdb8b","#ffd46d","#ffcb47","#ac8100","#593f00","#070300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 138, 38, 0.06)","rgba(255, 163, 13, 0.12)","rgba(255, 171, 8, 0.19)","rgba(255, 174, 3, 0.27)","rgba(255, 177, 2, 0.36)","rgba(255, 177, 3, 0.46)","rgba(255, 181, 3, 0.58)","rgba(255, 184, 3, 0.73)","#ac8100","#593f00","#070300"]},gray:{dark:["#000000","#111111","#222222","#2d2d2d","#333333","#444444","#555555","#666666","#6f6f6f","#777777","#aaaaaa","#dddddd","#ffffff"],darkA:["rgba(255, 255, 255, 0.02)","rgba(255, 255, 255, 0.06)","rgba(255, 255, 255, 0.10)","rgba(255, 255, 255, 0.16)","rgba(255, 255, 255, 0.24)","rgba(255, 255, 255, 0.28)","rgba(255, 255, 255, 0.32)","rgba(255, 255, 255, 0.38)","rgba(255, 255, 255, 0.44)","rgba(255, 255, 255, 0.5)","rgba(255, 255, 255, 0.66)","rgba(255, 255, 255, 0.84)","#ffffff"],light:["#ffffff","#f8f8f8","#eeeeee","#e3e3e3","#dddddd","#cccccc","#bbbbbb","#aaaaaa","#999999","#888888","#666666","#333333","#080808"],lightA:["rgba(0, 0, 0, 0.015)","rgba(0, 0, 0, 0.03)","rgba(0, 0, 0, 0.06)","rgba(0, 0, 0, 0.12)","rgba(0, 0, 0, 0.18)","rgba(0, 0, 0, 0.24)","rgba(0, 0, 0, 0.32)","rgba(0, 0, 0, 0.38)","rgba(0, 0, 0, 0.44)","rgba(0, 0, 0, 0.5)","rgba(0, 0, 0, 0.68)","rgba(0, 0, 0, 0.84)","rgba(0, 0, 0, 0.98)"]},green:{dark:["#000503","#001d12","#002d1d","#003f28","#005232","#00653c","#007944","#1b8d4d","#3ba05a","#55b467","#96cd92","#cde6c3","#ffffff"],darkA:["rgba(0, 250, 150, 0.02)","rgba(0, 242, 150, 0.12)","rgba(0, 250, 161, 0.18)","rgba(0, 252, 160, 0.25)","rgba(0, 248, 152, 0.33)","rgba(0, 252, 150, 0.4)","rgba(0, 252, 142, 0.48)","rgba(48, 252, 137, 0.56)","rgba(94, 254, 143, 0.63)","rgba(120, 254, 145, 0.71)","rgba(185, 253, 180, 0.81)","rgba(225, 253, 214, 0.91)","#ffffff"],light:["#ffffff","#f4fdeb","#e7f8dd","#d8f2ce","#c7eabd","#b4e1ac","#a0d79b","#89cc8a","#71c179","#55b467","#007944","#003f28","#000503"],lightA:["rgba(255, 255, 255, 0.01)","rgba(117, 230, 5, 0.08)","rgba(84, 205, 12, 0.14)","rgba(60, 190, 10, 0.2)","rgba(40, 174, 1, 0.26)","rgba(28, 164, 3, 0.33)","rgba(18, 155, 5, 0.4)","rgba(4, 146, 6, 0.47)","rgba(1, 144, 16, 0.56)","rgba(1, 143, 28, 0.67)","#007944","#003f28","#000503"]},lime:{dark:["#020400","#142100","#253700","#374f00","#4b6800","#608200","#769d00","#8fb81b","#a9d42f","#c4f042","#daf685","#eefbbe","#ffffff"],darkA:["rgba(100, 200, 0, 0.02)","rgba(154, 254, 0, 0.13)","rgba(168, 250, 0, 0.22)","rgba(177, 255, 0, 0.31)","rgba(183, 254, 0, 0.41)","rgba(188, 255, 0, 0.51)","rgba(190, 253, 0, 0.62)","rgba(196, 252, 37, 0.73)","rgba(204, 255, 57, 0.83)","rgba(209, 255, 70, 0.94)","rgba(225, 254, 137, 0.97)","rgba(240, 254, 192, 0.99)","#ffffff"],light:["#ffffff","#feffeb","#f9ffd8","#f2ffc1","#ebfdaf","#e4fc9b","#ddf987","#d5f773","#cdf35c","#c4f042","#769d00","#374f00","#020400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(242, 255, 5, 0.08)","rgba(218, 255, 11, 0.16)","rgba(203, 255, 7, 0.25)","rgba(193, 249, 5, 0.32)","rgba(187, 247, 5, 0.4)","rgba(183, 242, 0, 0.47)","rgba(179, 240, 0, 0.55)","rgba(177, 236, 0, 0.64)","rgba(175, 235, 0, 0.74)","#769d00","#374f00","#020400"]},magenta:{dark:["#100002","#350011","#4b001e","#63002d","#79093f","#8e1752","#a32466","#b8317b","#ce3e91","#e34ba9","#f38bcb","#fec5e8","#ffffff"],darkA:["rgba(229, 0, 29, 0.07)","rgba(252, 0, 81, 0.21)","rgba(250, 0, 100, 0.3)","rgba(254, 0, 115, 0.39)","rgba(252, 19, 131, 0.48)","rgba(254, 41, 146, 0.56)","rgba(255, 56, 159, 0.64)","rgba(252, 67, 168, 0.73)","rgba(254, 77, 179, 0.81)","rgba(255, 84, 190, 0.89)","rgba(253, 145, 211, 0.96)","#fec5e8","#ffffff"],light:["#ffffff","#fff7f9","#ffeaf4","#ffdaee","#ffc7e7","#ffb2df","#ff99d6","#f980ca","#ef67ba","#e34ba9","#a32466","#63002d","#100002"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 105, 0.04)","rgba(255, 22, 133, 0.09)","rgba(255, 8, 142, 0.15)","rgba(255, 0, 146, 0.22)","rgba(255, 7, 152, 0.31)","rgba(255, 0, 153, 0.4)","rgba(243, 1, 149, 0.5)","rgba(228, 2, 140, 0.6)","rgba(216, 1, 134, 0.71)","rgba(148, 0, 77, 0.86)","#63002d","#100002"]},orange:{dark:["#080300","#271400","#3d2000","#552d00","#6f3a00","#8a4700","#a75400","#c66100","#e37013","#ff802b","#ffae87","#ffd7c8","#ffffff"],darkA:["rgba(200, 75, 0, 0.04)","rgba(244, 125, 0, 0.16)","rgba(254, 133, 0, 0.24)","rgba(250, 132, 0, 0.34)","rgba(252, 132, 0, 0.44)","rgba(251, 129, 0, 0.55)","rgba(253, 127, 0, 0.66)","rgba(254, 124, 0, 0.78)","rgba(255, 126, 21, 0.89)","#ff802b","#ffae87","#ffd7c8","#ffffff"],light:["#ffffff","#fff9f8","#fff0ec","#ffe6dd","#ffd9ca","#ffcbb5","#ffbb9c","#ffaa7f","#ff975c","#ff802b","#a75400","#552d00","#080300"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 22, 0.03)","rgba(255, 67, 17, 0.08)","rgba(255, 76, 12, 0.14)","rgba(255, 74, 3, 0.21)","rgba(255, 76, 0, 0.29)","rgba(255, 81, 1, 0.39)","rgba(255, 88, 4, 0.51)","rgba(255, 93, 0, 0.64)","rgba(255, 102, 0, 0.83)","#a75400","#552d00","#080300"]},purple:{dark:["#0d000b","#2e002a","#42003e","#560053","#670e66","#781e78","#892b8a","#9a399e","#ab46b2","#bd54c6","#d590da","#edc7ee","#ffffff"],darkA:["rgba(217, 0, 183, 0.06)","rgba(242, 0, 221, 0.19)","rgba(254, 0, 238, 0.26)","rgba(253, 0, 244, 0.34)","rgba(251, 34, 249, 0.41)","rgba(255, 64, 255, 0.47)","rgba(249, 78, 251, 0.55)","rgba(248, 92, 255, 0.62)","rgba(244, 100, 254, 0.7)","rgba(242, 108, 254, 0.78)","rgba(248, 167, 253, 0.86)","rgba(252, 212, 253, 0.94)","#ffffff"],light:["#ffffff","#fff6fb","#ffe7fd","#fdd6fe","#f6c4f8","#eeb1f1","#e49ce8","#d886de","#cb6ed2","#bd54c6","#892b8a","#560053","#0d000b"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 30, 155, 0.04)","rgba(255, 15, 235, 0.1)","rgba(243, 14, 249, 0.17)","rgba(218, 9, 226, 0.24)","rgba(200, 3, 210, 0.31)","rgba(186, 1, 196, 0.39)","rgba(174, 3, 186, 0.48)","rgba(164, 1, 176, 0.57)","rgba(156, 0, 170, 0.67)","rgba(113, 0, 114, 0.83)","#560053","#0d000b"]},red:{dark:["#0f0006","#34001d","#4b002b","#640039","#7a0c46","#911b53","#a72860","#bf356e","#d7427b","#f04f88","#ff8eab","#ffc9d3","#ffffff"],darkA:["rgba(250, 0, 100, 0.06)","rgba(248, 0, 138, 0.21)","rgba(250, 0, 143, 0.3)","rgba(250, 0, 142, 0.4)","rgba(254, 25, 146, 0.48)","rgba(254, 47, 146, 0.57)","rgba(253, 61, 145, 0.66)","rgba(255, 71, 147, 0.75)","rgba(253, 78, 145, 0.85)","rgba(255, 84, 145, 0.94)","#ff8eab","#ffc9d3","#ffffff"],light:["#ffffff","#fff7f7","#ffeced","#ffdde2","#ffccd5","#ffb8c7","#ffa2b8","#ff88a8","#fe6998","#f04f88","#a72860","#640039","#0f0006"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 55, 0.04)","rgba(255, 17, 30, 0.08)","rgba(255, 12, 48, 0.14)","rgba(255, 0, 45, 0.2)","rgba(255, 1, 55, 0.28)","rgba(255, 4, 63, 0.37)","rgba(255, 2, 70, 0.47)","rgba(253, 1, 80, 0.59)","rgba(233, 0, 83, 0.69)","rgba(151, 2, 68, 0.85)","#640039","#0f0006"]},volcano:{dark:["#0c0100","#2f0a00","#451200","#5d1900","#762000","#8e2a07","#a53716","#bc4424","#d45132","#ec5e41","#ff9480","#ffcbc3","#ffffff"],darkA:["rgba(240, 20, 0, 0.05)","rgba(247, 53, 0, 0.19)","rgba(246, 64, 0, 0.28)","rgba(251, 68, 0, 0.37)","rgba(251, 68, 0, 0.47)","rgba(254, 75, 12, 0.56)","rgba(254, 85, 34, 0.65)","rgba(254, 92, 49, 0.74)","rgba(255, 98, 60, 0.83)","rgba(254, 101, 70, 0.93)","#ff9480","#ffcbc3","#ffffff"],light:["#ffffff","#fff7f6","#ffece9","#ffded9","#ffcec5","#ffbbaf","#ffa695","#ff8e78","#fb745a","#ec5e41","#a53716","#5d1900","#0c0100"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 55, 30, 0.04)","rgba(255, 44, 11, 0.09)","rgba(255, 35, 2, 0.15)","rgba(255, 42, 3, 0.23)","rgba(255, 43, 5, 0.32)","rgba(255, 43, 3, 0.42)","rgba(255, 42, 0, 0.53)","rgba(249, 41, 1, 0.65)","rgba(230, 40, 2, 0.75)","rgba(157, 38, 2, 0.92)","#5d1900","#0c0100"]},yellow:{dark:["#050400","#251d00","#3e3300","#584a00","#736300","#8e7d00","#ab9800","#c7b426","#e3d142","#ffef5c","#fff594","#fffad3","#ffffff"],darkA:["rgba(250, 200, 0, 0.02)","rgba(247, 193, 0, 0.15)","rgba(248, 204, 0, 0.25)","rgba(251, 211, 0, 0.35)","rgba(250, 215, 0, 0.46)","rgba(254, 223, 0, 0.56)","rgba(255, 227, 0, 0.67)","rgba(255, 231, 49, 0.78)","rgba(255, 235, 74, 0.89)","#ffef5c","#fff594","#fffad3","#ffffff"],light:["#ffffff","#fffeff","#fffcff","#fffbf1","#fffada","#fff9c2","#fff7aa","#fff592","#fff279","#ffef5c","#ab9800","#584a00","#050400"],lightA:["rgba(255, 255, 255, 0.01)","rgba(255, 155, 255, 0.01)","rgba(255, 105, 255, 0.02)","rgba(255, 188, 22, 0.06)","rgba(255, 222, 8, 0.15)","rgba(255, 230, 1, 0.24)","rgba(255, 231, 5, 0.34)","rgba(255, 232, 2, 0.43)","rgba(255, 230, 2, 0.53)","rgba(255, 230, 0, 0.64)","#ab9800","#584a00","#050400"]}},mf=function(){var e=w.useState(!1),n=ie(e,2),r=n[0],a=n[1];w.useEffect(function(){if(r){var i=setTimeout(function(){a(!1)},2e3);return function(){clearTimeout(i)}}},[r]);var o=w.useCallback(function(){return a(!0)},[]);return w.useMemo(function(){return{copied:r,setCopied:o}},[r])},bf=function(){var t=ti(Et().mark(function e(n){var r;return Et().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,navigator.clipboard.writeText(n);case 3:o.next=14;break;case 5:o.prev=5,o.t0=o.catch(0),r=document.createElement("textarea"),r.value=n,document.body.append(r),r.focus(),r.select(),document.execCommand("copy"),r.remove();case 14:case"end":return o.stop()}},e,null,[[0,5]])}));return function(n){return t.apply(this,arguments)}}(),Df=["content","placement","size","icon","glass","onClick"],c0=w.memo(function(t){var e=t.content,n=t.placement,r=n===void 0?"right":n,a=t.size,o=a===void 0?"site":a,i=t.icon,s=t.glass,l=s===void 0?!0:s,u=t.onClick,c=N(t,Df),d=mf(),p=d.copied,h=d.setCopied,f=i||sl;return m.jsx(_e,b(b({glass:l},c),{},{active:p,icon:p?Ys:f,onClick:function(){var D=ti(Et().mark(function g(x){return Et().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,bf(e);case 2:h(),u?.(x);case 4:case"end":return y.stop()}},g)}));return function(g){return D.apply(this,arguments)}}(),placement:r,size:o,title:"Copy"}))}),yf=["icon","children","size"],Ta,Oa,vf=I(function(t){var e=t.cx,n=t.css,r=t.token;return{small:n(Ta||(Ta=F([`
    padding-block: 2px;
    padding-inline: 6px;
    line-height: 1;
  `]))),tag:e(n(Oa||(Oa=F([`
    user-select: none;
    color: `,` !important;
    background: `,`;
    border: `,`px;

    &:hover {
      color: `,`;
      background: `,`;
    }
  `])),r.colorTextSecondary,r.colorFillSecondary,r.borderRadius,r.colorText,r.colorFill))}}),xf=w.memo(function(t){var e=t.icon,n=t.children,r=t.size,a=r===void 0?"default":r,o=N(t,yf),i=vf(),s=i.styles,l=i.cx;return m.jsx(As,b(b({bordered:!1,className:l(s.tag,a==="small"&&s.small)},o),{},{children:m.jsxs(R,{align:"center",gap:4,horizontal:!0,children:[e,n]})}))}),Cf=["allowFullscreen","children","title","className","wrapClassName","width","onCancel","open","destroyOnClose","paddings","maxHeight","enableResponsive","footer","styles"],Ff=["body"],za,Pa,La,$a,wf=56,kf=68,Sf=I(function(t,e){var n=t.cx,r=t.css,a=t.token,o=t.prefixCls,i=e.maxHeight;return{content:n(i&&r(za||(za=F([`
            .`,`-modal-body {
              overflow: auto;
              max-height: `,`;
            }
          `])),o,i),r(Pa||(Pa=F([`
          .`,`-modal-footer {
            margin: 0;
            padding: 16px;
          }
          .`,`-modal-header {
            display: flex;
            gap: 4px;
            align-items: center;
            justify-content: center;

            height: 56px;
            margin-block-end: 0;
            padding: 16px;
          }
          .`,`-modal-content {
            overflow: hidden;
            padding: 0;
            border: 1px solid `,`;
            border-radius: `,`px;
          }
        `])),o,o,o,a.colorSplit,a.borderRadiusLG)),drawerContent:r(La||(La=F([`
        .`,`-drawer-close {
          padding: 0;
        }
        .`,`-drawer-wrapper-body {
          background: linear-gradient(to bottom, `,", ",`);
        }
        .`,`-drawer-header {
          padding: 8px;
        }

        .`,`-drawer-footer {
          display: flex;
          align-items: center;
          justify-content: flex-end;

          padding: 16px;

          border: none;
        }
      `])),o,o,a.colorBgContainer,a.colorBgLayout,o,o),wrap:r($a||($a=F([`
        overflow: hidden auto;
        backdrop-filter: blur(2px);
      `])))}}),d0=w.memo(function(t){var e,n,r=t.allowFullscreen,a=t.children,o=t.title,i=o===void 0?" ":o,s=t.className,l=t.wrapClassName,u=t.width,c=u===void 0?700:u,d=t.onCancel,p=t.open,h=t.destroyOnClose,f=t.paddings,D=t.maxHeight,g=D===void 0?"75dvh":D,x=t.enableResponsive,C=x===void 0?!0:x,y=t.footer,S=t.styles,E=S===void 0?{}:S,_=N(t,Cf),T=w.useState(!1),M=ie(T,2),Z=M[0],ae=M[1],W=kn(),j=W.mobile,H=Sf({maxHeight:g?"calc(".concat(ri(g)?"".concat(g,"px"):g," - ").concat(wf+(y?kf:0),"px)"):void 0}),z=H.styles,L=H.cx,G=H.theme,ge=E.body,xe=N(E,Ff);return C&&j?m.jsx(Zo,b(b({className:L(z.drawerContent,s),closeIcon:m.jsx(_e,{icon:_t}),destroyOnClose:h,extra:r&&m.jsx(_e,{icon:Z?bl:fl,onClick:function(){return ae(!Z)}}),footer:y,height:Z?"calc(100% - env(safe-area-inset-top))":g||"75vh",maskClassName:L(z.wrap,l),onClose:d,open:p,placement:"bottom",styles:b({body:b({paddingBlock:"16px ".concat(y?0:"16px"),paddingInline:(e=f?.desktop)!==null&&e!==void 0?e:16},ge)},xe),title:i},_),{},{children:a})):m.jsx(Jo,{theme:{token:{colorBgElevated:Ru(.005,G.colorBgContainer)}},children:m.jsx(Bs,b(b({className:L(z.content,s),closable:!0,closeIcon:m.jsx(Ve,{icon:_t,size:{fontSize:20}}),destroyOnClose:h,footer:y,maskClosable:!0,onCancel:d,open:p,styles:b({body:b({paddingBlock:"0 ".concat(y===null?"16px":0),paddingInline:(n=f?.desktop)!==null&&n!==void 0?n:16},ge)},xe),title:i,width:c,wrapClassName:L(z.wrap,l)},_),{},{children:a}))})}),Ia,Ma,Ha,Wa,Wt=I(function(t){var e=t.css,n=t.token;return{body:e(Ia||(Ia=F([`
    overflow: hidden auto;
    padding: 16px;
  `]))),container:e(Ma||(Ma=F([`
    position: relative;
    overflow: hidden;
  `]))),footer:e(Ha||(Ha=F([`
    padding-block: 8px;
    padding-inline: 16px;
    border-block-start: 1px solid `,`;
  `])),n.colorBorderSecondary),header:e(Wa||(Wa=F([`
    padding-block: 8px;
    padding-inline: 16px;
    font-weight: 500;
    border-block-end: 1px solid `,`;
  `])),n.colorBorderSecondary)}}),Ef=["className"],h0=w.memo(function(t){var e=t.className,n=N(t,Ef),r=Wt(),a=r.cx,o=r.styles;return m.jsx(R,b({className:a(o.body,e),flex:1},n))}),_f=["className"],f0=w.memo(function(t){var e=t.className,n=N(t,_f),r=Wt(),a=r.cx,o=r.styles;return m.jsx(R,b({className:a(o.container,e)},n))}),Af=["className"],p0=w.memo(function(t){var e=t.className,n=N(t,Af),r=Wt(),a=r.cx,o=r.styles;return m.jsx(R,b({align:"center",className:a(o.footer,e),flex:"none",gap:8,horizontal:!0,justify:"flex-start"},n))}),Bf=["pin","setPin","className","setExpand","title","position"],g0=w.memo(function(t){var e=t.pin,n=t.setPin,r=t.className,a=t.setExpand,o=t.title,i=t.position,s=i===void 0?"left":i,l=N(t,Bf),u=Wt(),c=u.cx,d=u.styles,p=ei(!1,{onChange:n,value:e}),h=ie(p,2),f=h[0],D=h[1],g=m.jsx(_e,{icon:yl,onClick:function(){return a?.(!1)},size:{blockSize:24,fontSize:14}}),x=m.jsx(_e,{active:e,icon:e?Fl:xl,onClick:function(){return D(!f)},size:{blockSize:24,fontSize:14}});return m.jsxs(R,b(b({align:"center",className:c(d.header,r),flex:"none",gap:8,horizontal:!0,justify:"space-between"},l),{},{children:[s==="left"?g:x,o,s==="left"?x:g]}))}),Nf=function t(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var r,a,o;if(Array.isArray(e)){if(r=e.length,r!=n.length)return!1;for(a=r;a--!==0;)if(!t(e[a],n[a]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(o=Object.keys(e),r=o.length,r!==Object.keys(n).length)return!1;for(a=r;a--!==0;)if(!Object.prototype.hasOwnProperty.call(n,o[a]))return!1;for(a=r;a--!==0;){var i=o[a];if(!t(e[i],n[i]))return!1}return!0}return e!==e&&n!==n};const m0=Xo(Nf);function Ga(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Ns(t))||e){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(u){throw u},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,i=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var u=n.next();return i=u.done,u},e:function(u){s=!0,o=u},f:function(){try{i||n.return==null||n.return()}finally{if(s)throw o}}}}var Rf=function(e){var n=document.createElement("link");return n.rel="stylesheet",n.href=e,n},jf=w.memo(function(t){var e=t.url,n=w.useRef(!1);return w.useEffect(function(){if(!n.current){n.current=!0;var r=Rf(e);document.head.append(r)}},[]),null}),Tf=function(e){var n=e.prefixCls,r=e.icon,a=e.title,o=e.items,i=o===void 0?[]:o,s=e.style,l=e.className;return ee.createElement("div",{className:dn("".concat(n,"-column"),l),style:s},(a||r)&&ee.createElement("h2",null,r&&ee.createElement("span",{className:"".concat(n,"-column-icon")},r),a),i.map(function(u,c){var d=u.LinkComponent||"a";return ee.createElement("div",{className:dn("".concat(n,"-item"),u.className),style:u.style,key:c},ee.createElement(d,{href:u.url,to:typeof d!="string"?u.url:void 0,target:u.openExternal?"_blank":void 0,rel:u.openExternal?"noopener noreferrer":void 0},u.icon&&ee.createElement("span",{className:"".concat(n,"-item-icon")},u.icon),u.title),u.description&&ee.createElement(ee.Fragment,null,ee.createElement("span",{className:"".concat(n,"-item-separator")},"-"),ee.createElement("span",{className:"".concat(n,"-item-description")},u.description)))}))},Of=["prefixCls","className","style","bottom","columns","maxColumnsPerRow","backgroundColor","columnLayout","theme"],zf=function(e){var n=e.prefixCls,r=n===void 0?"rc-footer":n,a=e.className,o=e.style,i=e.bottom,s=e.columns,l=e.maxColumnsPerRow,u=e.backgroundColor,c=e.columnLayout,d=e.theme,p=d===void 0?"dark":d,h=N(e,Of),f=dn("".concat(r),a,O({},"".concat(r,"-").concat(p),!!p)),D=typeof l=="number"&&l>0;return ee.createElement("footer",b(b({},h),{},{className:f,style:b(b({},o),{},{backgroundColor:u})}),ee.createElement("section",{className:"".concat(r,"-container")},s&&s.length>0&&ee.createElement("section",{className:"".concat(r,"-columns"),style:{justifyContent:c,flexWrap:D?"wrap":void 0}},s.map(function(g,x){var C=g.title,y=g.icon,S=g.style,E=g.className,_=g.items,T=_===void 0?[]:_,M=b({},S);return D&&(M.flex="0 0 ".concat(100/(l+1)+.1,"%")),ee.createElement(Tf,{key:x,prefixCls:r,title:C,icon:y,items:T,style:M,className:E})}))),i&&ee.createElement("section",{className:"".concat(r,"-bottom")},ee.createElement("div",{className:"".concat(r,"-bottom-container")},i)))},Ua,qa,Pf=I(function(t,e){var n=t.css,r=t.responsive,a=t.token,o=e.isEmpty,i=e.contentMaxWidth,s="rc-footer";return{container:n(Ua||(Ua=F([`
        grid-area: footer;
        align-self: stretch;

        color: `,`;
        text-align: center;

        border-block-start: 1px solid `,`;

        `,` {
          flex-direction: column;
          border: none;
        }
      `])),a.colorTextDescription,a.colorSplit,r.mobile),footer:n(qa||(qa=F([`
        font-size: 14px;
        line-height: 1.5;
        color: `,`;
        background-color: `,`;

        &.`,` {
          a {
            color: `,`;
            text-decoration: none;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .`,` {
          &-container {
            width: 100%;
            max-width: `,`px;
            margin: auto;
            padding: `,`;
          }

          &-columns {
            display: flex;
            justify-content: space-around;
          }

          &-column {
            text-align: start;

            h2 {
              position: relative;

              margin-block: 0;
              margin-inline: auto;

              font-size: 16px;
              font-weight: 500;
              color: `,`;
            }

            &-icon {
              position: relative;
              inset-block-start: -1px;

              display: inline-block;

              width: 22px;
              margin-inline-end: 0.5em;

              text-align: center;
              vertical-align: middle;

              > span,
              > svg,
              img {
                display: block;
                width: 100%;
              }
            }
          }

          &-item {
            margin-block: 12px;
            margin-inline: 0;

            &-icon {
              position: relative;
              inset-block-start: -1px;

              display: inline-block;

              width: 16px;
              margin-inline-end: 0.4em;

              text-align: center;
              vertical-align: middle;

              > span,
              > svg,
              img {
                display: block;
                width: 100%;
              }
            }

            &-separator {
              margin-block: 0;
              margin-inline: 0.3em;
            }
          }

          &-bottom {
            color: `,`;

            &-container {
              width: 100%;
              max-width: `,`px;
              margin-block: 0;
              margin-inline: auto;
              padding-block: 16px;
              padding-inline: 0;

              line-height: 32px;
              text-align: center;
            }
          }

          &-light {
            color: rgba(0, 0, 0, 85%);
            background-color: transparent;

            h2,
            a {
              color: rgba(0, 0, 0, 85%);
            }
          }

          &-light &-bottom-container {
            border-block-start-color: #e8e8e8;
          }

          &-light &-item-separator,
          &-light &-item-description {
            color: rgba(0, 0, 0, 45%);
          }
        }

        `,` {
          .`,` {
            &-container {
              padding-block: 40px;
              padding-inline: 0;
            }

            &-columns {
              display: block;
            }

            &-column {
              display: block;
              margin-block-end: 40px;
              text-align: center;

              &:last-child {
                margin-block-end: 0;
              }
            }
          }
        }
      `])),a.colorTextSecondary,a.colorBgLayout,s,a.colorTextTertiary,a.colorLinkHover,s,i,o?"0":"60px 0 20px",a.colorText,a.colorTextDescription,i,r.mobile,s)}}),b0=w.memo(function(t){var e=t.columns,n=t.bottom,r=t.theme,a=t.contentMaxWidth,o=a===void 0?960:a,i=!e||e?.length===0,s=Pf({contentMaxWidth:o,isEmpty:i}),l=s.styles;return m.jsx("section",{className:l.container,children:m.jsx(zf,{bottom:n,className:l.footer,columns:e,theme:r})})}),Lf=["className","children"],$f=w.memo(function(t){var e=t.className,n=t.children,r=N(t,Lf);return m.jsx(R,b(b({className:e,gap:8,justify:"flex-end"},r),{},{horizontal:!0,children:n}))}),If=["className","icon","title","children","extra","itemsType","variant","defaultActive"],Va,Ka,Ya,Xa,Qa,Za,Ja,eo,to,no,ro,ao,oo,Mf=I(function(t){var e=t.css,n=t.cx,r=t.token,a=t.isDarkMode,o=t.responsive,i=t.prefixCls,s=e(Va||(Va=F([`
    background: transparent;
    border: none;
    border-radius: 0;

    .`,`-collapse-header {
      padding-block: 0 20px !important;
      padding-inline: 2px !important;
      background: transparent !important;
      border-radius: 0 !important;
    }

    .`,`-collapse-content {
      background: transparent;
      border-color: `,`;
    }

    .`,`-collapse-content-box {
      padding-inline: 2px !important;
      background: transparent;
      border-radius: 0;
    }
  `])),i,i,r.colorFillSecondary,i),l=e(Ka||(Ka=F([`
    background: `,`;
    border: none;
    border-radius: `,`px;

    .`,`-collapse-content {
      border: none !important;
    }
  `])),r.colorFillQuaternary,r.borderRadiusLG,i),u=e(Ya||(Ya=F([`
    background: transparent;
    border: 1px solid `,`;
    .`,`-collapse-header {
      background: transparent !important;
    }

    .`,`-collapse-content-box {
      background: transparent;
    }
  `])),r.colorBorderSecondary,i,i),c=e(Xa||(Xa=F([`
    background: `,`;
    border: 1px solid `,`;
    border-radius: `,`px;
  `])),r.colorFillQuaternary,r.colorBorderSecondary,r.borderRadiusLG);return{blockStyle:l,defaultStyle:c,flatGroup:e(Qa||(Qa=F([`
      overflow: hidden;
      padding-inline: 16px;
    `]))),ghostStyle:u,group:n(a&&e(Za||(Za=F([`
          .`,`-collapse-content {
            background: transparent;
            border-color: `,`;
          }

          .`,`-collapse-header {
            background: `,`;
          }
        `])),i,r.colorBorderSecondary,i,r.colorFillTertiary),e(Ja||(Ja=F([`
        overflow: hidden;
        flex: none;

        .`,`-collapse-item {
          border: none;
        }

        .`,`-collapse-header {
          align-items: center !important;
          border-radius: 0 !important;
        }

        .`,`-collapse-content-box {
          padding-block: 0 !important;
        }

        .`,`-form-item-label {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      `])),i,i,i,i)),icon:e(eo||(eo=F([`
      transition: all 100ms `,`;
    `])),r.motionEaseOut),mobileFlatGroup:e(to||(to=F([`
      border-radius: `,`px;
    `])),r.borderRadiusLG),mobileGroupBody:e(no||(no=F([`
      padding-block: 0;
      padding-inline: 16px;
      background: `,`;
    `])),r.colorBgContainer),mobileGroupHeader:e(ro||(ro=F([`
      padding: 16px;
      background: `,`;
    `])),r.colorBgLayout),pureStyle:s,pureTitle:e(ao||(ao=F([`
      font-size: 18px;
      font-weight: 700;
      line-height: 24px;
    `]))),title:e(oo||(oo=F([`
      align-items: center;
      font-size: 16px;
      font-weight: 600;

      .anticon {
        color: `,`;
      }

      `,` {
        font-size: 14px;
        font-weight: 400;
        opacity: 0.5;
      }
    `])),r.colorPrimary,o.mobile)}}),wn=w.memo(function(t){var e=t.className,n=t.icon,r=t.title,a=t.children,o=t.extra,i=t.itemsType,s=t.variant,l=s===void 0?"default":s,u=t.defaultActive,c=u===void 0?!0:u,d=N(t,If),p=kn(),h=p.mobile,f=Mf(l),D=f.cx,g=f.styles,x=D(l==="default"&&g.defaultStyle,l==="block"&&g.blockStyle,l==="ghost"&&g.ghostStyle,l==="pure"&&g.pureStyle),C=m.jsxs(R,{className:D(g.title,l==="pure"&&g.pureTitle),gap:8,horizontal:!0,children:[n&&m.jsx(Ve,{icon:n}),r]});return i==="flat"?h?m.jsx(R,{className:D(g.mobileFlatGroup,g.mobileGroupBody,e),children:a}):m.jsx(R,{className:D(g.flatGroup,x,e),children:a}):h?m.jsxs(R,{className:e,children:[m.jsxs(R,{className:g.mobileGroupHeader,horizontal:!0,justify:"space-between",children:[C,o]}),m.jsx("div",{className:g.mobileGroupBody,children:a})]}):m.jsx(Rs,b({className:D(g.group,x,e),defaultActiveKey:c?[1]:void 0,expandIcon:function(S){var E=S.isActive;return l==="pure"?null:m.jsx(Ve,{className:g.icon,icon:_n,size:{fontSize:16},style:E?{}:{rotate:"-90deg"}})},items:[{children:a,extra:o,key:1,label:C}]},d),1)}),Hf=["style"],Wf=w.memo(function(t){var e=t.style,n=N(t,Hf);return m.jsx(js,b({style:b({margin:0,opacity:.66},e)},n))}),io,Gf=I(function(t){var e=t.css,n=t.token,r=t.prefixCls;return{formTitle:e(io||(io=F([`
    position: relative;
    text-align: start;

    > div {
      font-weight: 500;
      line-height: 1;
    }

    > small {
      display: block;

      line-height: 1.2;
      color: `,`;
      word-wrap: break-word;
      white-space: pre-wrap;
    }

    .`,`-tag {
      font-family: `,`;
    }
  `])),n.colorTextDescription,r,n.fontFamilyCode)}}),Uf=w.memo(function(t){var e=t.className,n=t.tag,r=t.title,a=t.desc,o=t.avatar,i=Gf(),s=i.cx,l=i.styles,u=m.jsxs(R,{className:s(l.formTitle,e),gap:6,children:[m.jsxs(R,{align:"center",direction:"horizontal",gap:8,children:[r,n&&m.jsx(xf,{children:n})]}),a&&m.jsx("small",{children:a})]});return o?m.jsxs(R,{align:"center",gap:8,horizontal:!0,children:[o,u]}):u}),qf=["desc","tag","minWidth","avatar","className","label","children","divider"],so,lo,uo,Vf=Sn.Item,Kf=I(function(t,e){var n=t.css,r=t.responsive,a=t.prefixCls;return{item:n(so||(so=F([`
      &.`,`-form-item {
        padding-block: 16px;
        padding-inline: 0;

        .`,`-row {
          gap: 12px;
          justify-content: space-between;

          > div {
            flex: unset;
            flex-grow: unset;
          }
        }

        .`,`-form-item-required::before {
          align-self: flex-start;
        }

        `,` {
          .`,`-row {
            flex-direction: column;
            align-items: stretch;

            > div {
              width: 100%;
            }
          }
        }

        `,` {
          padding-block: 16px;
          padding-inline: 0;

          .`,`-row {
            flex-wrap: wrap;
            gap: 4px;
          }
        }
      }
    `])),a,a,a,r.md,a,r.mobile,a),itemMinWidth:n(lo||(lo=F([`
      .`,`-form-item-control {
        width: `,`;
      }
      `,` {
        .`,`-row {
          flex-direction: column;
          gap: 4px;
        }

        .`,`-form-item-control {
          flex: 1;
          width: 100%;
        }
      }
    `])),a,ri(e)?"".concat(e,"px"):e,r.mobile,a,a),itemNoDivider:n(uo||(uo=F([`
      &:not(:first-child) {
        padding-block-start: 0;
      }
    `])))}}),Ji=w.memo(function(t){var e=t.desc,n=t.tag,r=t.minWidth,a=t.avatar,o=t.className,i=t.label,s=t.children,l=t.divider,u=N(t,qf),c=Kf(r),d=c.cx,p=c.styles;return m.jsxs(m.Fragment,{children:[l&&m.jsx(Wf,{}),m.jsx(Vf,b(b({className:d(p.item,!!r&&p.itemMinWidth,!l&&p.itemNoDivider,o),label:m.jsx(Uf,{avatar:a,desc:e,tag:n,title:i})},u),{},{children:s}))]})}),co,ho,Yf=I(function(t){var e=t.css,n=t.token,r=t.prefixCls,a=t.responsive;return{form:e(co||(co=F([`
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 100%;

    `,` {
      gap: 0;
    }

    .`,`-form-item {
      margin: 0 !important;
    }

    .`,"-form-item .",`-form-item-label > label {
      height: unset;
    }

    .`,`-row {
      position: relative;
      flex-wrap: nowrap;
    }

    .`,`-form-item-label {
      position: relative;
      flex: 1;
      max-width: 100%;
    }

    .`,`-form-item-row {
      align-items: center;
      `,` {
        align-items: stretch;
      }
    }

    .`,`-form-item-control {
      position: relative;
      flex: 0;
      min-width: unset !important;
    }

    .`,`-collapse-item {
      overflow: hidden !important;
      border-radius: `,`px !important;
    }
  `])),a.mobile,r,r,r,r,r,r,a.mobile,r,r,n.borderRadius),pure:e(ho||(ho=F([`
    gap: 64px;
  `])))}}),Xf=["className","itemMinWidth","footer","form","items","children","itemsType","variant"],Qf=w.forwardRef(function(t,e){var n=t.className,r=t.itemMinWidth,a=t.footer,o=t.form,i=t.items,s=i===void 0?[]:i,l=t.children,u=t.itemsType,c=u===void 0?"group":u,d=t.variant,p=d===void 0?"default":d,h=N(t,Xf),f=Yf(),D=f.cx,g=f.styles,x=function(S,E){return m.jsx(Ji,b({divider:E!==0,minWidth:r},S),E)},C=function(S,E){return m.jsx(wn,{defaultActive:S?.defaultActive,extra:S?.extra,icon:S?.icon,title:S.title,variant:p,children:Array.isArray(S.children)?S.children.filter(function(_){return!_.hidden}).map(function(_,T){return x(_,T)}):S.children},E)};return m.jsxs(Sn,b(b({className:D(g.form,p==="pure"&&g.pure,n),colon:!1,form:o,layout:"horizontal",ref:e},h),{},{children:[s?.length>0?c==="group"?s?.map(function(y,S){return C(y,S)}):m.jsx(wn,{itemsType:"flat",variant:p,children:s?.filter(function(y){return!y.hidden}).map(function(y,S){return x(y,S)})}):null,l,a&&m.jsx($f,{children:a})]}))}),In=Qf;In.Item=Ji;In.Group=wn;In.useForm=Sn.useForm;function Zf({id:t,host:e,repo:n,repoId:r,category:a,categoryId:o,mapping:i,term:s,strict:l,reactionsEnabled:u,emitMetadata:c,inputPosition:d,theme:p,lang:h,loading:f}){const[D,g]=w.useState(!1);return w.useEffect(()=>{D||gf(()=>import("./giscus-Ci9LqPcC-cvwcBf5t.js"),[]).then(()=>g(!0))},[]),D?m.jsx("giscus-widget",{id:t,host:e,repo:n,repoid:r,category:a,categoryid:o,mapping:i,term:s,strict:l,reactionsenabled:u,emitmetadata:c,inputposition:d,theme:p,lang:h,loading:f}):null}var fo,Jf=function(e,n){var r=n?"dark":"light",a=B.gray[r][11],o=B.gray[r][10],i=B.gray[r][7],s=n?B.red[r][9]:B.volcano[r][9],l=n?B.gold[r][9]:B.orange[r][9],u=n?B.lime[r][9]:B.green[r][9],c=n?B.blue[r][9]:B.geekblue[r][9],d=n?"https://github.com/images/modules/pulls/progressive-disclosure-line-dark.svg":"https://github.com/images/modules/pulls/progressive-disclosure-line.svg",p=n?"https://github.githubassets.com/images/mona-loading-dark.gif":"https://github.githubassets.com/images/mona-loading-default.gif";return $(fo||(fo=F([`
    main {
      --color-prettylights-syntax-comment: `,`;
      --color-prettylights-syntax-constant: `,`;
      --color-prettylights-syntax-entity: `,`;
      --color-prettylights-syntax-storage-modifier-import: `,`;
      --color-prettylights-syntax-entity-tag: `,`;
      --color-prettylights-syntax-keyword: `,`;
      --color-prettylights-syntax-string: `,`;
      --color-prettylights-syntax-variable: `,`;
      --color-prettylights-syntax-brackethighlighter-unmatched: `,`;
      --color-prettylights-syntax-invalid-illegal-text: `,`;
      --color-prettylights-syntax-invalid-illegal-bg: `,`;
      --color-prettylights-syntax-carriage-return-text: `,`;
      --color-prettylights-syntax-carriage-return-bg: `,`;
      --color-prettylights-syntax-string-regexp: `,`;
      --color-prettylights-syntax-markup-list: `,`;
      --color-prettylights-syntax-markup-heading: `,`;
      --color-prettylights-syntax-markup-italic: `,`;
      --color-prettylights-syntax-markup-bold: `,`;
      --color-prettylights-syntax-markup-deleted-text: `,`;
      --color-prettylights-syntax-markup-deleted-bg: `,`;
      --color-prettylights-syntax-markup-inserted-text: `,`;
      --color-prettylights-syntax-markup-inserted-bg: `,`;
      --color-prettylights-syntax-markup-changed-text: `,`;
      --color-prettylights-syntax-markup-changed-bg: `,`;
      --color-prettylights-syntax-markup-ignored-text: `,`;
      --color-prettylights-syntax-markup-ignored-bg: `,`;
      --color-prettylights-syntax-meta-diff-range: `,`;
      --color-prettylights-syntax-brackethighlighter-angle: `,`;
      --color-prettylights-syntax-sublimelinter-gutter-mark: `,`;
      --color-prettylights-syntax-constant-other-reference-link: `,`;
      --color-btn-text: `,`;
      --color-btn-bg: `,`;
      --color-btn-border: `,`;
      --color-btn-shadow: 0 0 transparent;
      --color-btn-inset-shadow: 0 0 transparent;
      --color-btn-hover-bg: `,`;
      --color-btn-hover-border: `,`;
      --color-btn-active-bg: `,`;
      --color-btn-active-border: `,`;
      --color-btn-selected-bg: `,`;
      --color-btn-primary-text: `,`;
      --color-btn-primary-bg: `,`;
      --color-btn-primary-border: `,`;
      --color-btn-primary-shadow: 0 0 transparent;
      --color-btn-primary-inset-shadow: 0 0 transparent;
      --color-btn-primary-hover-bg: `,`;
      --color-btn-primary-hover-border: `,`;
      --color-btn-primary-selected-bg: `,`;
      --color-btn-primary-selected-shadow: 0 0 transparent;
      --color-btn-primary-disabled-text: `,`;
      --color-btn-primary-disabled-bg: `,`;
      --color-btn-primary-disabled-border: `,`;
      --color-action-list-item-default-hover-bg: `,`;
      --color-segmented-control-bg: `,`;
      --color-segmented-control-button-bg: transparent;
      --color-segmented-control-button-selected-border: `,`;
      --color-fg-default: `,`;
      --color-fg-muted: `,`;
      --color-fg-subtle: `,`;
      --color-canvas-default: transparent;
      --color-canvas-overlay: `,`;
      --color-canvas-inset: transparent;
      --color-canvas-subtle: `,`;
      --color-border-default: `,`;
      --color-border-muted: `,`;
      --color-neutral-muted: `,`;
      --color-neutral-subtle: `,`;
      --color-accent-fg: `,`;
      --color-accent-emphasis: `,`;
      --color-accent-muted: `,`;
      --color-accent-subtle: `,`;
      --color-success-fg: `,`;
      --color-attention-fg: `,`;
      --color-attention-muted: `,`;
      --color-attention-subtle: `,`;
      --color-danger-fg: `,`;
      --color-danger-muted: `,`;
      --color-danger-subtle: `,`;
      --color-primer-shadow-inset: 0 0 transparent;
      --color-scale-gray-7: `,`;
      --color-scale-blue-8: `,`;
      --color-social-reaction-bg-hover: `,`;
      --color-social-reaction-bg-reacted-hover: `,`;

      .markdown pre {
        color: `,`;
      }

      .pagination-loader-container {
        background-image: url(`,`);
      }

      .gsc-pagination-button {
        background-color: var(--color-btn-bg);
      }

      .gsc-reactions-popover {
        width: 170px;

        > .m-2 {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
      }

      .gsc-emoji-button.has-reacted {
        border-color: `,`;
        border-radius: `,`px;
      }

      .gsc-loading-image {
        background-image: url(`,`);
      }
    }
  `])),i,u,l,s,c,c,u,s,s,o,te(s,.4),o,te(s,.6),u,l,c,o,o,o,te(s,.2),u,te(u,.2),l,te(s,.2),o,te(c,.2),l,o,i,c,e.colorText,e.colorFillTertiary,e.colorBorderSecondary,e.colorFillSecondary,e.colorBorder,e.colorFillSecondary,e.colorBorder,e.colorFillSecondary,Oe(e.colorPrimary),e.colorPrimary,e.colorPrimaryBorder,e.colorPrimaryHover,e.colorPrimaryBorderHover,e.colorPrimaryActive,te(Oe(e.colorPrimary),.5),te(e.colorPrimary,.5),te(e.colorPrimaryBorder,.5),e.colorFillQuaternary,e.colorFillTertiary,e.colorBorder,e.colorText,e.colorTextSecondary,e.colorTextQuaternary,e.colorBgElevated,e.colorFillQuaternary,e.colorBorder,e.colorBorderSecondary,e.colorFillQuaternary,e.colorFillTertiary,e.colorInfo,e.colorInfoBorderHover,e.colorInfoBorder,e.colorInfoBg,e.colorSuccess,e.colorWarning,e.colorWarningBorder,e.colorWarningBg,e.colorError,e.colorErrorBorder,e.colorErrorBg,e.colorBgContainer,e.colorInfoBg,e.colorFillSecondary,e.colorInfoBgHover,a,d,e.colorInfoBorderHover,e.borderRadius,p)},ep=function(e){return["zh_CN","zh_TW"].includes(e)?e.replace("_","-"):e==="zh_HK"?"zh-TW":e.split("_")[0]},tp=["style","className","reactionsEnabled","mapping","lang","inputPosition","id","loading","emitMetadata"],D0=w.memo(function(t){var e=t.style,n=t.className,r=t.reactionsEnabled,a=r===void 0?"1":r,o=t.mapping,i=o===void 0?"title":o,s=t.lang,l=s===void 0?"en_US":s,u=t.inputPosition,c=u===void 0?"top":u,d=t.id,p=d===void 0?"giscus":d,h=t.loading,f=h===void 0?"lazy":h,D=t.emitMetadata,g=D===void 0?"0":D,x=N(t,tp),C=En(),y=Ts(),S=y.isDarkMode,E=w.useMemo(function(){return btoa(Jf(C,S).styles)},[S,C]);return m.jsx("div",{className:n,style:e,children:m.jsx(Zf,b({emitMetadata:g,id:p,inputPosition:c,lang:ep(l),loading:f,mapping:i,reactionsEnabled:a,theme:"data:text/css;base64,".concat(E)},x))})}),po,go,np=I(function(t,e){var n=t.cx,r=t.css,a=t.token,o=t.isDarkMode,i=t.stylish,s;switch(e){case"large":{s=a.borderRadiusLG;break}case"middle":{s=a.borderRadius;break}case"small":{s=a.borderRadiusSM;break}default:{s=a.borderRadius;break}}return{button:n(i.gradientAnimation,r(po||(po=F([`
          position: relative;
          z-index: 1;
          border: none;
          border-radius: `,`px !important;

          &::before {
            content: '';

            position: absolute;
            z-index: -1;
            inset-block-start: 1px;
            inset-inline-start: 1px;

            width: calc(100% - 2px);
            height: calc(100% - 2px);

            background: `,`;
            border-radius: `,`px;
          }

          &:hover {
            background: `,` !important;
          }
        `])),s,a.colorBgLayout,s-1,a.colorPrimary)),glow:r(go||(go=F([`
        `,`
        position: absolute;
        z-index: -2;
        inset-block-start: 0;
        inset-inline-start: 0;

        width: 100%;
        height: 100%;

        opacity: `,`;
        filter: blur(`,`em);
        border-radius: inherit;
      `])),i.gradientAnimation,o?.5:.3,o?1.5:1)}}),rp=["glow","children","className","size"],y0=w.memo(function(t){var e=t.glow,n=e===void 0?!0:e,r=t.children,a=t.className,o=t.size,i=o===void 0?"large":o,s=N(t,rp),l=np(i),u=l.styles,c=l.cx;return m.jsxs(Os,b(b({className:c(u.button,a),size:i},s),{},{children:[n&&m.jsx("div",{className:u.glow}),r]}))}),mo,bo,Do,yo,ap=I(function(t){var e=t.css,n=t.responsive,r=t.token,a=t.cx;return{content:e(mo||(mo=F([`
    height: 64px;
    padding-block: 0;
    padding-inline: 24px;

    background-color: `,`;
    border-block-end: 1px solid `,`;

    `,` {
      padding-block: 0;
      padding-inline: 12px;
    }
  `])),te(r.colorBgLayout,.4),r.colorSplit,n.mobile),header:a(e(bo||(bo=F([`
    grid-area: head;
    align-self: stretch;
    width: 100%;
  `])))),left:e(Do||(Do=F([`
    z-index: 10;
  `]))),right:e(yo||(yo=F([`
    z-index: 10;

    &-aside {
      display: flex;
      align-items: center;

      `,` {
        justify-content: center;

        margin-block: 8px;
        margin-inline: 16px;
        padding-block-start: 24px;

        border-block-start: 1px solid `,`;
      }
    }
  `])),n.mobile,r.colorBorder)}}),op=["actionsClassName","navClassName","logoClassName","nav","logo","actions","actionsStyle","logoStyle","navStyle","className"],v0=w.memo(function(t){var e=t.actionsClassName,n=t.navClassName,r=t.logoClassName,a=t.nav,o=t.logo,i=t.actions,s=t.actionsStyle,l=t.logoStyle,u=t.navStyle,c=t.className,d=N(t,op),p=kn(),h=p.mobile,f=ap(),D=f.cx,g=f.styles;return m.jsx("section",b(b({className:D(g.header,c)},d),{},{children:m.jsx(R,{align:"center",className:g.content,distribution:"space-between",horizontal:!0,width:"auto",children:h?m.jsxs(m.Fragment,{children:[m.jsx(R,{className:e,style:b({flex:0},u),children:a}),m.jsx(R,{className:D(g.left,r),horizontal:!0,style:b({flex:1,overflow:"hidden"},l),children:o}),m.jsx(R,{className:e,style:b({flex:0},s),children:i})]}):m.jsxs(m.Fragment,{children:[m.jsx(R,{className:D(g.left,r),horizontal:!0,style:b({flex:0},l),children:o}),m.jsx(R,{className:n,style:b({flex:1,marginLeft:48,overflow:"hidden"},u),children:a}),m.jsxs(R,{className:D(g.right,e),flex:1,horizontal:!0,justify:"space-between",style:s,children:[m.jsx("div",{}),m.jsx(R,{align:"center",gap:8,horizontal:!0,children:i})]})]})})}))}),ip=K("Discord",[["path",{d:"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z",key:"18tl5t"}]]),x0=function(e){return m.jsx(ip,b({style:{overflow:"visible"}},e))},vo,xo,Co,Fo,wo,ko,So,Eo,_o,Ao,Gt=I(function(t,e){var n=t.css,r=t.stylish,a=t.responsive,o=n(vo||(vo=F([`
    pointer-events: none;
    content: '';
    user-select: none;

    position: absolute;
    z-index: -1;
    inset-block: -1px `,`;
    inset-inline: 0;
  `])),a.mobile?"-25%":"-50%");return{app:n(xo||(xo=F([`
      overflow: hidden auto;
      height: 100dvh;
    `]))),aside:n(Co||(Co=F([`
      position: sticky;
      z-index: 2;
      height: 100%;
    `]))),asideInner:n(Fo||(Fo=F([`
      overflow: hidden auto;
      width: 100%;
      height: calc(100dvh - `,`px);
    `])),e),content:n(wo||(wo=F([`
      position: relative;
      flex: 1;
      max-width: 100%;
    `]))),footer:n(ko||(ko=F([`
      position: relative;
      max-width: 100%;
    `]))),glass:n(So||(So=F([`
      z-index: 0;

      &::before {
        `,`;
        `,`;
        mask-image: linear-gradient(to bottom, black `,`px, transparent);
      }

      &::after {
        `,`;
      }
    `])),r.blur,o,e,o),header:n(Eo||(Eo=F([`
      position: sticky;
      z-index: 999;
      inset-block-start: 0;
      max-width: 100%;
    `]))),main:n(_o||(_o=F([`
      position: relative;
      display: flex;
      align-items: stretch;
      max-width: 100vw;
    `]))),toc:n(Ao||(Ao=F([""])))}}),sp=["headerHeight","children","className","style"],lp=["children","className"],up=["headerHeight","children","className","style"],cp=["headerHeight","children","className"],C0=w.memo(function(t){var e=t.headerHeight,n=t.children,r=t.className,a=t.style,o=N(t,sp),i=Gt(e),s=i.cx,l=i.styles;return m.jsxs("header",b(b({className:s(l.header,r),style:b({height:e},a)},o),{},{children:[m.jsx("div",{className:l.glass}),n]}))}),F0=w.memo(function(t){var e=t.children,n=t.className,r=N(t,lp),a=Gt(),o=a.cx,i=a.styles;return m.jsx("main",b(b({className:o(i.main,n)},r),{},{children:e}))}),w0=w.memo(function(t){var e=t.headerHeight,n=t.children,r=t.className,a=t.style,o=N(t,up),i=Gt(e),s=i.cx,l=i.styles;return m.jsx("aside",b(b({className:s(l.aside,r),style:b({top:e},a)},o),{},{children:n}))}),k0=w.memo(function(t){var e=t.headerHeight,n=t.children,r=t.className,a=N(t,cp),o=Gt(e),i=o.cx,s=o.styles;return m.jsx("div",b(b({className:i(s.asideInner,r)},a),{},{children:n}))}),dp=["size","style"],hp=w.memo(function(t){var e=t.size,n=e===void 0?"1em":e,r=t.style,a=N(t,dp);return m.jsx("svg",b(b({fill:"none",height:n,shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",style:b({flex:"none",lineHeight:1},r),viewBox:"0 0 24 24",width:n},a),{},{children:m.jsx("path",{d:"M16.88 3.549L7.12 20.451"})}))}),fp=["size","style"],Bo=w.memo(function(t){var e=t.size,n=e===void 0?"1em":e,r=t.style,a=N(t,fp);return m.jsxs("svg",b(b({fill:"currentColor",fillRule:"evenodd",height:n,style:b({flex:"none",lineHeight:1},r),viewBox:"0 0 940 320",xmlns:"http://www.w3.org/2000/svg"},a),{},{children:[m.jsx("title",{children:"LobeHub"}),m.jsx("path",{d:"M15 240.035V87.172h39.24V205.75h66.192v34.285H15zM183.731 242c-11.759 0-22.196-2.621-31.313-7.862-9.116-5.241-16.317-12.447-21.601-21.619-5.153-9.317-7.729-19.945-7.729-31.883 0-11.937 2.576-22.492 7.729-31.664 5.164-8.963 12.159-15.98 20.982-21.05l.619-.351c9.117-5.241 19.554-7.861 31.313-7.861s22.196 2.62 31.313 7.861c9.248 5.096 16.449 12.229 21.601 21.401 5.153 9.172 7.729 19.727 7.729 31.664 0 11.938-2.576 22.566-7.729 31.883-5.152 9.172-12.353 16.378-21.601 21.619-9.117 5.241-19.554 7.862-31.313 7.862zm0-32.975c4.36 0 8.191-1.092 11.494-3.275 3.436-2.184 6.144-5.387 8.126-9.609 1.982-4.367 2.973-9.536 2.973-15.505 0-5.968-.991-10.991-2.973-15.067-1.906-4.06-4.483-7.177-7.733-9.352l-.393-.257c-3.303-2.184-7.134-3.276-11.494-3.276-4.228 0-8.059 1.092-11.495 3.276-3.303 2.184-6.011 5.387-8.125 9.609-1.982 4.076-2.973 9.099-2.973 15.067 0 5.969.991 11.138 2.973 15.505 2.114 4.222 4.822 7.425 8.125 9.609 3.436 2.183 7.267 3.275 11.495 3.275zM295.508 78l-.001 54.042a34.071 34.071 0 016.541-5.781c6.474-4.367 14.269-6.551 23.385-6.551 9.777 0 18.629 2.475 26.557 7.424 7.872 4.835 14.105 11.684 18.7 20.546l.325.637c4.756 9.026 7.135 19.799 7.135 32.319 0 12.666-2.379 23.585-7.135 32.757-4.624 9.026-10.966 16.087-19.025 21.182-7.928 4.95-16.78 7.425-26.557 7.425-9.644 0-17.704-2.184-24.178-6.551-2.825-1.946-5.336-4.355-7.532-7.226l.001 11.812h-35.87V78h37.654zm21.998 74.684c-4.228 0-8.059 1.092-11.494 3.276-3.303 2.184-6.012 5.387-8.126 9.609-1.982 4.076-2.972 9.099-2.972 15.067 0 5.969.99 11.138 2.972 15.505 2.114 4.222 4.823 7.425 8.126 9.609 3.435 2.183 7.266 3.275 11.494 3.275s7.994-1.092 11.297-3.275c3.435-2.184 6.143-5.387 8.125-9.609 2.114-4.367 3.171-9.536 3.171-15.505 0-5.968-1.057-10.991-3.171-15.067-1.906-4.06-4.483-7.177-7.732-9.352l-.393-.257c-3.303-2.184-7.069-3.276-11.297-3.276zm105.335 38.653l.084.337a27.857 27.857 0 002.057 5.559c2.246 4.222 5.417 7.498 9.513 9.827 4.096 2.184 8.984 3.276 14.665 3.276 5.285 0 9.777-.801 13.477-2.403 3.579-1.632 7.1-4.025 10.564-7.182l.732-.679 19.818 22.711c-5.153 6.26-11.494 11.064-19.025 14.413-7.531 3.203-16.449 4.804-26.755 4.804-12.683 0-23.782-2.621-33.294-7.862-9.381-5.386-16.713-12.665-21.998-21.837-5.153-9.317-7.729-19.872-7.729-31.665 0-11.792 2.51-22.274 7.53-31.446 5.036-9.105 11.902-16.195 20.596-21.268l.61-.351c8.984-5.241 19.091-7.861 30.322-7.861 10.311 0 19.743 2.286 28.294 6.859l.64.347c8.72 4.659 15.656 11.574 20.809 20.746 5.153 9.172 7.729 20.309 7.729 33.411 0 1.294-.052 2.761-.156 4.4l-.042.623-.17 2.353c-.075 1.01-.151 1.973-.227 2.888h-78.044zm21.365-42.147c-4.492 0-8.456 1.092-11.891 3.276-3.303 2.184-5.879 5.314-7.729 9.39a26.04 26.04 0 00-1.117 2.79 30.164 30.164 0 00-1.121 4.499l-.058.354h43.96l-.015-.106c-.401-2.638-1.122-5.055-2.163-7.252l-.246-.503c-1.776-3.774-4.282-6.742-7.519-8.906l-.409-.266c-3.303-2.184-7.2-3.276-11.692-3.276zm111.695-62.018l-.001 57.432h53.51V87.172h39.24v152.863h-39.24v-59.617H555.9l.001 59.617h-39.24V87.172h39.24zM715.766 242c-8.72 0-16.581-1.893-23.583-5.678-6.87-3.785-12.287-9.681-16.251-17.688-3.832-8.153-5.747-18.417-5.747-30.791v-66.168h37.654v59.398c0 9.172 1.519 15.723 4.558 19.654 3.171 3.931 7.597 5.896 13.278 5.896 3.7 0 7.069-.946 10.108-2.839 3.038-1.892 5.483-4.877 7.332-8.953 1.85-4.222 2.775-9.609 2.775-16.16v-56.996h37.654v118.36h-35.871l.004-12.38c-2.642 3.197-5.682 5.868-9.12 8.012-7.002 4.222-14.599 6.333-22.791 6.333zM841.489 78l-.001 54.041a34.1 34.1 0 016.541-5.78c6.474-4.367 14.269-6.551 23.385-6.551 9.777 0 18.629 2.475 26.556 7.424 7.873 4.835 14.106 11.684 18.701 20.546l.325.637c4.756 9.026 7.134 19.799 7.134 32.319 0 12.666-2.378 23.585-7.134 32.757-4.624 9.026-10.966 16.087-19.026 21.182-7.927 4.95-16.779 7.425-26.556 7.425-9.645 0-17.704-2.184-24.178-6.551-2.825-1.946-5.336-4.354-7.531-7.224v11.81h-35.87V78h37.654zm21.998 74.684c-4.228 0-8.059 1.092-11.495 3.276-3.303 2.184-6.011 5.387-8.125 9.609-1.982 4.076-2.973 9.099-2.973 15.067 0 5.969.991 11.138 2.973 15.505 2.114 4.222 4.822 7.425 8.125 9.609 3.436 2.183 7.267 3.275 11.495 3.275 4.228 0 7.993-1.092 11.296-3.275 3.435-2.184 6.144-5.387 8.126-9.609 2.114-4.367 3.171-9.536 3.171-15.505 0-5.968-1.057-10.991-3.171-15.067-1.906-4.06-4.484-7.177-7.733-9.352l-.393-.257c-3.303-2.184-7.068-3.276-11.296-3.276z"})]}))}),No,pp={path:"assets/logo-3d.webp",pkg:"@lobehub/assets-logo",version:"1.2.0"},gp=I(function(t){var e=t.css;return{extraTitle:e(No||(No=F([`
      font-weight: 300;
      white-space: nowrap;
    `])))}}),mp=["type","size","style","extra","className"],S0=w.memo(function(t){var e=t.type,n=e===void 0?"3d":e,r=t.size,a=r===void 0?32:r,o=t.style,i=t.extra,s=t.className,l=N(t,mp),u=Bn(),c=En(),d=gp(),p=d.styles,h;switch(n){case"3d":{h=m.jsx(Ge,b({alt:"LobeHub",height:a,src:"https://hub-apac-1.lobeobjects.space/logo-3d.webp",style:o,width:a},l));break}case"flat":{h=m.jsx(Ge,{alt:"LobeHub",height:a,src:"https://hub-apac-1.lobeobjects.space/logo-flat.svg",style:o,width:a});break}case"mono":{h=m.jsx(Ge,{alt:"LobeHub",height:a,src:"https://hub-apac-1.lobeobjects.space/logo-mono.svg",style:o,width:a});break}case"text":{h=m.jsx(Bo,b({className:s,size:a,style:o},l));break}case"combine":{h=m.jsxs(m.Fragment,{children:[m.jsx(Ge,{alt:"LobeHub",height:a,src:u(pp),width:a}),m.jsx(Bo,{size:a,style:{marginLeft:Math.round(a/4)}})]}),i||(h=m.jsx(R,{align:"center",className:s,flex:"none",horizontal:!0,style:o,children:h}));break}}if(!i)return h;var f=Math.round(a/3*1.9);return m.jsxs(R,b(b({align:"center",className:s,flex:"none",horizontal:!0,style:o},l),{},{children:[h,m.jsx(hp,{size:f,style:{color:c.colorFill}}),m.jsx("div",{className:p.extraTitle,style:{fontSize:f},children:i})]}))}),pe=function(e){var n=e.type,r=e.scale,a=e.appearance,o=Ms(n),i=a==="dark";return O(O(O(O(O(O(O(O(O(O({},"color".concat(o,"Bg"),r[a][1]),"color".concat(o,"BgHover"),r[a][2]),"color".concat(o,"Border"),r[a][4]),"color".concat(o,"BorderHover"),r[a][i?5:3]),"color".concat(o,"Hover"),r[a][i?10:8]),"color".concat(o),r[a][9]),"color".concat(o,"Active"),r[a][i?7:10]),"color".concat(o,"TextHover"),r[a][i?10:8]),"color".concat(o,"Text"),r[a][9]),"color".concat(o,"TextActive"),r[a][i?7:10])},Ut=function(e){var n=e.scale,r=e.appearance;return{colorBgContainer:r==="dark"?n[r][1]:n[r][0],colorBgElevated:r==="dark"?n[r][2]:n[r][0],colorBgLayout:r==="dark"?n[r][0]:n[r][1],colorBgMask:n.lightA[8],colorBgSpotlight:n[r][5],colorBorder:n[r][4],colorBorderSecondary:n[r][3],colorFill:n["".concat(r,"A")][3],colorFillQuaternary:n["".concat(r,"A")][0],colorFillSecondary:n["".concat(r,"A")][2],colorFillTertiary:n["".concat(r,"A")][1],colorText:n[r][12],colorTextQuaternary:n[r][6],colorTextSecondary:n[r][10],colorTextTertiary:n[r][8]}},Te={mauve:{dark:["#1c1b1e","#252528","#2f2f32","#3a393d","#454448","#504f53","#5b5a5f","#67666a","#737177","#7f7d83","#bbb9bd","#fcf8fb","#ffffff"],darkA:["rgba(233, 225, 250, 0.12)","rgba(231, 231, 250, 0.16)","rgba(235, 235, 250, 0.2)","rgba(242, 237, 254, 0.24)","rgba(238, 234, 248, 0.29)","rgba(242, 239, 252, 0.33)","rgba(239, 237, 250, 0.38)","rgba(245, 243, 252, 0.42)","rgba(245, 240, 253, 0.47)","rgba(244, 240, 252, 0.52)","rgba(253, 250, 255, 0.74)","rgba(255, 251, 254, 0.99)","#ffffff"],light:["#fcf8fb","#edeaed","#dfdcdf","#d1ced2","#c2c0c4","#b4b2b7","#a7a4a9","#99979c","#8c8a90","#7f7d83","#4a494d","#1c1b1e","#111"],lightA:["rgba(155, 22, 122, 0.03)","rgba(55, 22, 55, 0.09)","rgba(26, 5, 26, 0.14)","rgba(25, 10, 30, 0.2)","rgba(11, 3, 19, 0.25)","rgba(13, 7, 23, 0.31)","rgba(11, 2, 16, 0.36)","rgba(6, 1, 14, 0.41)","rgba(5, 1, 14, 0.46)","rgba(4, 0, 12, 0.51)","rgba(4, 2, 8, 0.72)","rgba(3, 2, 5, 0.9)","#111"]},olive:{dark:["#1a1c1b","#232624","#2d302e","#383a38","#424542","#4d504d","#585c58","#646763","#70736e","#7c7f79","#b9bab5","#faf9f4","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 240, 0.15)","rgba(237, 253, 242, 0.19)","rgba(243, 252, 243, 0.23)","rgba(236, 246, 236, 0.28)","rgba(241, 250, 241, 0.32)","rgba(238, 249, 238, 0.37)","rgba(244, 251, 241, 0.41)","rgba(243, 250, 239, 0.46)","rgba(248, 254, 242, 0.5)","rgba(253, 255, 248, 0.73)","rgba(255, 254, 249, 0.98)","#ffffff"],light:["#faf9f4","#ecebe6","#ddddd7","#cfcfc9","#c0c1bb","#b2b4ae","#a4a6a0","#969993","#898c86","#7c7f79","#484b48","#1a1c1b","#111"],lightA:["rgba(155, 135, 35, 0.05)","rgba(65, 55, 5, 0.1)","rgba(43, 43, 5, 0.16)","rgba(37, 37, 10, 0.22)","rgba(22, 25, 3, 0.27)","rgba(14, 21, 2, 0.32)","rgba(16, 21, 5, 0.38)","rgba(11, 18, 4, 0.43)","rgba(9, 15, 3, 0.48)","rgba(8, 13, 2, 0.53)","rgba(1, 5, 1, 0.72)","rgba(1, 3, 2, 0.9)","#111"]},sage:{dark:["#1a1c1b","#232625","#2d302f","#373a39","#424543","#4d504e","#585c59","#636765","#6f7370","#7a7f7c","#b8bab7","#f9f9f7","#ffffff"],darkA:["rgba(236, 255, 245, 0.11)","rgba(233, 253, 247, 0.15)","rgba(237, 253, 247, 0.19)","rgba(239, 252, 248, 0.23)","rgba(236, 246, 239, 0.28)","rgba(241, 250, 244, 0.32)","rgba(238, 249, 241, 0.37)","rgba(241, 251, 246, 0.41)","rgba(241, 250, 243, 0.46)","rgba(244, 254, 248, 0.5)","rgba(252, 255, 251, 0.73)","rgba(254, 254, 252, 0.98)","#ffffff"],light:["#f9f9f7","#eaebe8","#dcddda","#cdcfcc","#bfc1be","#b1b4b0","#a3a6a3","#959996","#888c89","#7a7f7c","#474b49","#1a1c1b","#111"],lightA:["rgba(105, 105, 55, 0.04)","rgba(45, 55, 25, 0.1)","rgba(22, 28, 8, 0.15)","rgba(5, 15, 0, 0.2)","rgba(9, 17, 5, 0.26)","rgba(3, 13, 0, 0.31)","rgba(6, 14, 6, 0.37)","rgba(3, 12, 5, 0.42)","rgba(2, 10, 4, 0.47)","rgba(4, 13, 8, 0.53)","rgba(3, 8, 6, 0.73)","rgba(1, 3, 2, 0.9)","#111"]},sand:{dark:["#1c1c18","#262521","#30302b","#3a3a35","#45453f","#505049","#5c5b54","#67675f","#73726a","#7f7e76","#bcbab2","#fcf9f3","#ffffff"],darkA:["rgba(255, 255, 218, 0.11)","rgba(253, 247, 220, 0.15)","rgba(253, 253, 226, 0.19)","rgba(252, 252, 230, 0.23)","rgba(246, 246, 225, 0.28)","rgba(250, 250, 228, 0.32)","rgba(249, 246, 227, 0.37)","rgba(251, 251, 232, 0.41)","rgba(250, 248, 230, 0.46)","rgba(254, 252, 236, 0.5)","rgba(254, 251, 241, 0.74)","rgba(255, 252, 245, 0.99)","#ffffff"],light:["#fcf9f3","#edebe4","#dfddd5","#d1cfc7","#c3c1b9","#b5b3ab","#a7a69d","#999890","#8c8b83","#7f7e76","#4b4a44","#1c1c18","#111"],lightA:["rgba(195, 135, 15, 0.05)","rgba(91, 73, 10, 0.11)","rgba(67, 55, 8, 0.17)","rgba(46, 37, 0, 0.22)","rgba(41, 34, 5, 0.28)","rgba(31, 25, 0, 0.33)","rgba(29, 27, 4, 0.39)","rgba(23, 21, 3, 0.44)","rgba(20, 18, 2, 0.49)","rgba(18, 16, 1, 0.54)","rgba(12, 10, 2, 0.74)","rgba(6, 6, 1, 0.91)","#111"]},slate:{dark:["#1b1c1d","#242527","#2e2f32","#383a3c","#434547","#4e5052","#595b5e","#64676a","#707276","#7b7e82","#b8babc","#f9f9fa","#ffffff"],darkA:["rgba(225, 233, 242, 0.12)","rgba(225, 231, 244, 0.16)","rgba(230, 235, 250, 0.2)","rgba(233, 242, 250, 0.24)","rgba(239, 246, 254, 0.28)","rgba(236, 242, 248, 0.33)","rgba(241, 246, 254, 0.37)","rgba(238, 245, 252, 0.42)","rgba(238, 243, 251, 0.47)","rgba(241, 247, 255, 0.51)","rgba(249, 251, 254, 0.74)","rgba(254, 254, 255, 0.98)","#ffffff"],light:["#f9f9fa","#ebebec","#dcddde","#cecfd0","#bfc1c3","#b1b3b5","#a4a6a8","#96989b","#898b8e","#7b7e82","#484a4d","#1b1c1d","#111"],lightA:["rgba(55, 55, 88, 0.03)","rgba(5, 5, 17, 0.08)","rgba(5, 12, 19, 0.14)","rgba(10, 15, 20, 0.2)","rgba(9, 17, 24, 0.26)","rgba(3, 10, 16, 0.31)","rgba(2, 8, 13, 0.36)","rgba(5, 10, 17, 0.42)","rgba(4, 8, 15, 0.47)","rgba(1, 7, 15, 0.52)","rgba(1, 4, 8, 0.72)","rgba(2, 3, 4, 0.9)","#111"]}},ce={blue:B.blue.dark[9],cyan:B.cyan.dark[9],geekblue:B.geekblue.dark[9],gold:B.gold.dark[9],green:B.green.dark[9],lime:B.lime.dark[9],magenta:B.magenta.dark[9],orange:B.orange.dark[9],purple:B.purple.dark[9],red:B.red.dark[9],volcano:B.volcano.dark[9],yellow:B.yellow.dark[9]},E0=[ce.red,ce.orange,ce.gold,ce.yellow,ce.lime,ce.green,ce.cyan,ce.blue,ce.geekblue,ce.purple,ce.magenta,ce.volcano],et={mauve:Te.mauve.dark[9],olive:Te.olive.dark[9],sage:Te.sage.dark[9],sand:Te.sand.dark[9],slate:Te.slate.dark[9]},_0=[et.mauve,et.slate,et.sage,et.olive,et.sand],Ro,jo,To,Oo,zo,Po,Lo,$o,bp=function(e){var n=e.css,r=e.token,a=e.isDarkMode,o=Qo(Ro||(Ro=F([`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `])));return{blur:n(jo||(jo=F([`
      backdrop-filter: saturate(180%) blur(10px);
    `]))),blurStrong:n(To||(To=F([`
      backdrop-filter: blur(36px);
    `]))),bottomScrollbar:n(Oo||(Oo=F([`
      ::-webkit-scrollbar {
        width: 0;
        height: 4px;
        background-color: transparent;

        &-thumb {
          background-color: `,`;
          border-radius: 4px;
          transition: background-color 500ms `,`;
        }

        &-corner {
          display: none;
          width: 0;
          height: 0;
        }
      }
    `])),r.colorFill,r.motionEaseOut),gradientAnimation:n(zo||(zo=F([`
      background-image: linear-gradient(
        -45deg,
        `,`,
        `,`,
        `,`,
        `,`
      );
      background-size: 400% 400%;
      border-radius: inherit;
      animation: 5s `,` 5s ease infinite;
    `])),r.gold,r.magenta,r.geekblue,r.cyan,o),markdown:n(Po||(Po=F([`
      --lobe-markdown-font-size: 16px;
      --lobe-markdown-header-multiple: 1;
      --lobe-markdown-margin-multiple: 1.5;

      position: relative;

      width: 100%;

      font-size: var(--lobe-markdown-font-size);
      line-height: 1.6;
      word-break: break-word;

      p {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
        line-height: 1.6;
        letter-spacing: 0.02em;
      }

      h1,
      h2,
      h3,
      h4,
      h5 {
        margin-block: max(
          calc(var(--lobe-markdown-header-multiple) * var(--lobe-markdown-margin-multiple) * 0.5em),
          var(--lobe-markdown-font-size)
        );
        font-weight: 600;
      }

      h1 {
        font-size: calc(
          var(--lobe-markdown-font-size) * (1 + 1.5 * var(--lobe-markdown-header-multiple))
        );
      }

      h2 {
        font-size: calc(
          var(--lobe-markdown-font-size) * (1 + var(--lobe-markdown-header-multiple))
        );
      }

      h3 {
        font-size: calc(
          var(--lobe-markdown-font-size) * (1 + 0.5 * var(--lobe-markdown-header-multiple))
        );
      }

      h4 {
        font-size: calc(
          var(--lobe-markdown-font-size) * (1 + 0.25 * var(--lobe-markdown-header-multiple))
        );
      }

      h5 {
        font-size: calc(var(--lobe-markdown-font-size) * 1);
      }

      li {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      }

      ul,
      ol {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
        margin-inline-start: 1em;
        list-style-position: outside;

        li {
          margin-inline-start: 1em;
        }
      }

      ol {
        li {
          &::marker {
            color: `,`;
          }
        }
      }

      ul {
        list-style-type: none;

        li {
          &::before {
            content: '-';
            display: inline-block;
            margin-inline: -1em 0.5em;
            color: `,`;
          }
        }
      }

      strong {
        font-weight: 600;
      }

      code:not(:has(span)) {
        display: inline-block;

        padding-block: 0.2em;
        padding-inline: 0.4em;

        font-family: `,`;
        font-size: 0.875em;
        line-height: 1;
        word-break: break-word;

        background: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;
      }

      kbd {
        cursor: default;
        user-select: none;

        transform: translateY(-0.2em);

        display: inline-block;

        min-width: 1em;
        margin-inline: 0.25em;
        padding-block: 0.2em;
        padding-inline: 0.4em;

        font-family: `,`;
        font-size: 0.875em;
        font-weight: 500;
        line-height: 1;
        color: `,`;
        text-align: center;

        background: `,`;
        border: 1px solid `,`;
        border-radius: 0.25em;
        box-shadow: 0 2px 0 1px `,`;

        &:hover {
          transform: translateY(0);
          box-shadow: none;
        }
      }

      blockquote {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
        margin-inline: 0;
        padding-block: 0;
        padding-inline: 1em;

        color: `,`;

        border-inline-start: solid 4px `,`;
      }

      hr {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1.5em);

        border-color: `,`;
        border-style: dashed;
        border-width: 1px;
        border-block-start: none;
        border-inline-start: none;
        border-inline-end: none;
      }

      details {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
        padding-block: 0.75em;
        padding-inline: 1em;

        background: `,`;
        border: 1px solid `,`;
        border-radius: `,`px;

        summary {
          cursor: pointer;
          display: flex;
          align-items: center;
          list-style: none;

          &::before {
            content: '';

            position: absolute;
            inset-inline-end: 1.25em;
            transform: rotateZ(-45deg);

            display: block;

            width: 0.4em;
            height: 0.4em;

            font-family: `,`;

            border-block-end: 1.5px solid `,`;
            border-inline-end: 1.5px solid `,`;

            transition: transform 200ms `,`;
          }
        }

        &[open] {
          padding-block-end: 0;

          summary {
            padding-block-end: 12px;
            border-block-end: 1px dashed `,`;

            &::before {
              transform: rotateZ(45deg);
            }
          }
        }
      }

      img,
      video {
        max-width: 100%;
      }

      table {
        overflow: hidden;
        display: table;
        border-spacing: 0;
        border-collapse: collapse;

        box-sizing: border-box;
        width: 100%;
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);

        text-align: start;
        overflow-wrap: break-word;

        background: `,`;
        border-radius: `,`px;
        box-shadow: inset 0 0 0 1px `,`;
      }

      thead {
        background: `,`;
      }

      tr {
        box-shadow: inset 0 -1px 0 `,`;
      }

      th,
      td {
        padding-block: 0.75em;
        padding-inline: 1em;
        text-align: start;
        vertical-align: top;
      }

      pre,
      [data-code-type='highlighter'] {
        border: none;

        > code {
          padding: 0 !important;

          font-family: `,`;
          font-size: 0.875em;
          line-height: 1.6;

          border: none !important;
        }
      }
    `])),r.colorTextSecondary,r.colorTextDescription,r.fontFamilyCode,r.colorFillSecondary,r.colorBorderSecondary,r.borderRadius,r.fontFamily,r.colorBgLayout,a?r.colorText:"#333",a?r.colorTextSecondary:"#000",a?r.colorTextSecondary:"#000",r.colorTextSecondary,r.colorBorder,r.colorBorderSecondary,r.colorFillTertiary,r.colorBorderSecondary,r.borderRadius,r.fontFamily,r.colorTextSecondary,r.colorTextSecondary,r.motionEaseOut,r.colorBorder,r.colorFillTertiary,r.borderRadius,r.colorBorderSecondary,r.colorFillQuaternary,r.colorBorderSecondary,r.fontFamilyCode),noScrollbar:n(Lo||(Lo=F([`
      ::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
        background-color: transparent;
      }
    `]))),resetLinkColor:n($o||($o=F([`
      cursor: pointer;
      color: `,`;

      &:hover {
        color: `,`;
      }
    `])),r.colorTextSecondary,r.colorText)}},Dp=function(e){var n,r=e.name,a=e.scale,o=e.appearance;return n={},O(O(O(O(O(O(O(O(O(O(n,"".concat(r,"Bg"),a["".concat(o,"A")][1]),"".concat(r,"BgHover"),a["".concat(o,"A")][2]),"".concat(r,"Border"),a[o][4]),"".concat(r,"BorderSecondary"),a[o][3]),"".concat(r,"BorderHover"),a[o][5]),"".concat(r,"Hover"),a[o][10]),"".concat(r),a[o][9]),"".concat(r,"Active"),a[o][7]),"".concat(r,"TextHover"),a["".concat(o,"A")][10]),"".concat(r,"Text"),a["".concat(o,"A")][9]),O(n,"".concat(r,"TextActive"),a["".concat(o,"A")][7])},yp=function(e){var n=e.name,r=e.scale,a=e.appearance,o={},i=Ga(r[a].entries()),s;try{for(i.s();!(s=i.n()).done;){var l=ie(s.value,2),u=l[0],c=l[1];u===0||u===12||(o["".concat(n).concat(u)]=c)}}catch(g){i.e(g)}finally{i.f()}var d=Ga(r["".concat(a,"A")].entries()),p;try{for(d.s();!(p=d.n()).done;){var h=ie(p.value,2),f=h[0],D=h[1];f===0||f===12||(o["".concat(n).concat(f,"A")]=D)}}catch(g){d.e(g)}finally{d.f()}return b(b({},o),Dp({appearance:a,name:n,scale:r}))},vp=function(e){for(var n=e.isDarkMode,r={},a=0,o=Object.entries(B);a<o.length;a++){var i=ie(o[a],2),s=i[0],l=i[1];r=b(b({},r),yp({appearance:n?"dark":"light",name:ni(s),scale:l}))}return r},Io,Mo,xp=I(function(t,e){var n=t.css,r=t.token;return{active:n(Io||(Io=F([`
      box-shadow: 0 0 0 2px `,`;
    `])),r.colorTextTertiary),container:n(Mo||(Mo=F([`
      cursor: pointer;

      width: `,`px;
      height: `,`px;

      background: `,`;
      border-radius: 50%;
      box-shadow: inset 0 0 0 2px `,`;

      transition:
        scale 400ms `,`,
        box-shadow 100ms `,`;

      &:hover {
        box-shadow: 0 0 0 3px `,`;
      }

      &:active {
        scale: 0.8;
      }
    `])),e,e,r.colorBgContainer,r.colorSplit,r.motionEaseOut,r.motionEaseOut,r.colorText)}}),A0=w.memo(function(t){var e=t.colors,n=t.activeColor,r=t.onSelect,a=t.size,o=a===void 0?24:a,i=En(),s=xp(o),l=s.cx,u=s.styles;return m.jsxs(R,{gap:8,horizontal:!0,style:{flexWrap:"wrap"},children:[m.jsx(R,{className:l(u.container,!n&&u.active),onClick:function(){r?.()},style:{background:i.colorBgContainer}}),e.map(function(c){var d=c===n;return m.jsx(R,{className:l(u.container,d&&u.active),onClick:function(){r?.(c)},style:{background:c}},c)})]})}),Ho,Wo,Cp=I(function(t){var e=t.css,n=t.token,r=t.prefixCls,a=".".concat(r,"-tabs"),o=16,i=6;return{compact:e(Ho||(Ho=F([`
      .`,`-tabs-tab {
        margin: 4px !important;

        + .`,`-tabs-tab {
          margin: 4px !important;
        }
      }
    `])),r,r),tabs:e(Wo||(Wo=F([`
      `,"-tab + ",`-tab {
        margin-block: `,`px !important;
        margin-inline: 4px !important;
        padding-block: 0 !important;
        padding-inline: 12px !important;
      }

      `,`-tab {
        color: `,`;
        transition: background-color 100ms ease-out;

        &:first-child {
          margin-block: `,`px;
          margin-inline: 0 4px;
          padding-block: `,`px !important;
          padding-inline: 12px !important;
        }

        &:hover {
          color: `,` !important;
          background: `,`;
          border-radius: `,`px;
        }
      }

      `,`-nav {
        margin-block-end: 0;

        &::before {
          display: none;
        }
      }
    `])),a,a,o,a,n.colorTextSecondary,o,i,n.colorText,n.colorFillTertiary,n.borderRadius,a)}}),Fp=["className","variant"],B0=w.memo(function(t){var e=t.className,n=t.variant,r=N(t,Fp),a=Cp(),o=a.styles,i=a.cx;return m.jsx(zs,b({className:i(o.tabs,n==="compact"&&o.compact,e)},r))}),wp=pe({appearance:"dark",scale:B.bnw,type:"Primary"}),Go=Ut({appearance:"dark",scale:B.gray}),kp=pe({appearance:"dark",scale:B.lime,type:"Success"}),Sp=pe({appearance:"dark",scale:B.gold,type:"Warning"}),Ep=pe({appearance:"dark",scale:B.red,type:"Error"}),Ft=pe({appearance:"dark",scale:B.blue,type:"Info"}),_p=b(b(b(b(b(b(b({},wp),Go),kp),Sp),Ep),Ft),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:Ft.colorInfoText,colorLinkActive:Ft.colorInfoTextActive,colorLinkHover:Ft.colorInfoTextHover,colorTextLightSolid:Go.colorBgLayout}),Ap=function(e,n){var r=e.primaryColor,a=e.neutralColor,o={},i={},s=B[r];s&&(o=pe({appearance:"dark",scale:s,type:"Primary"}));var l=Te[a];return l&&(i=Ut({appearance:"dark",scale:l})),b(b(b(b({},n),_p),o),i)},Bp=pe({appearance:"light",scale:B.bnw,type:"Primary"}),Uo=Ut({appearance:"light",scale:B.gray}),Np=pe({appearance:"light",scale:B.green,type:"Success"}),Rp=pe({appearance:"light",scale:B.orange,type:"Warning"}),jp=pe({appearance:"light",scale:B.volcano,type:"Error"}),wt=pe({appearance:"light",scale:B.geekblue,type:"Info"}),Tp=b(b(b(b(b(b(b({},Bp),Uo),Np),Rp),jp),wt),{},{boxShadow:"0 20px 20px -8px rgba(0, 0, 0, 0.24)",boxShadowSecondary:"0 8px 16px -4px rgba(0, 0, 0, 0.2)",boxShadowTertiary:"0 3px 1px -1px rgba(26, 26, 26, 0.06)",colorLink:wt.colorInfoText,colorLinkActive:wt.colorInfoTextActive,colorLinkHover:wt.colorInfoTextHover,colorTextLightSolid:Uo.colorBgLayout}),Op=function(e,n){var r=e.primaryColor,a=e.neutralColor,o={},i={},s=B[r];s&&(o=pe({appearance:"light",scale:s,type:"Primary"}));var l=Te[a];return l&&(i=Ut({appearance:"light",scale:l})),b(b(b(b({},n),Tp),o),i)},qo='"Segoe UI Emoji","Segoe UI Symbol","Apple Color Emoji","Twemoji Mozilla","Noto Color Emoji","Android Emoji"',zp='"HarmonyOS Sans","Segoe UI","SF Pro Display",-apple-system,BlinkMacSystemFont,Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif',Vo='"HarmonyOS Sans SC","PingFang SC","Hiragino Sans GB","Microsoft Yahei UI","Microsoft Yahei","Source Han Sans CN",sans-serif',Pp="Hack,ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace",Lp={borderRadius:5,borderRadiusLG:8,borderRadiusSM:3,borderRadiusXS:3,controlHeight:36,fontFamily:[zp,Vo,qo].join(","),fontFamilyCode:[Pp,Vo,qo].join(",")},$p=function(e){var n=e.neutralColor,r=e.appearance,a=e.primaryColor,o=r==="dark";return{algorithm:o?Ap:Op,token:b(b({},Lp),{},{neutralColor:n,primaryColor:a})}},Ko;const Ip=function(t){return $(Ko||(Ko=F([`
  .`,`-checkbox-inner:after {
    border-color: `,` !important;
  }

  .`,`-btn {
    box-shadow: none;
  }

  .`,`-btn-primary:not(:disabled) {
    color: `,` !important;

    &:hover {
      color: `,` !important;
    }

    &:active {
      color: `,` !important;
    }
  }

  .`,`-tooltip-inner {
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: unset;
    padding-block: 4px;
    padding-inline: 8px;

    color: `,` !important;

    background-color: `,` !important;
    border-radius: `,`px !important;
  }

  .`,`-tooltip-arrow {
    &::before,
    &::after {
      background: `,` !important;
    }
  }

  .`,`-switch-handle::before {
    background: `,` !important;
  }

  .`,`-image-preview-close,
    .`,"-image-preview-switch-right,.",`-image-preview-switch-left {
    `,`;
    border-radius: `,`px;
    background: `,`;

    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;
  }

  .`,`-popover-inner {
    border: 1px solid `,`;
    box-shadow: `,`;
  }

  ul.`,`-dropdown-menu {
    border: 1px solid `,`;
    border-radius: `,`px !important;
    box-shadow: `,`;
  }

  @media (max-width: 575px) {
    .`,`-tooltip {
      display: none !important;
    }
  }
`])),t.prefixCls,Oe(t.colorPrimary),t.prefixCls,t.prefixCls,Oe(t.colorPrimary),Oe(t.colorPrimary),Oe(t.colorPrimaryActive),t.prefixCls,t.colorBgLayout,t.colorText,t.borderRadiusSM,t.prefixCls,t.colorText,t.prefixCls,t.colorBgContainer,t.prefixCls,t.prefixCls,t.prefixCls,t.stylish.blur,t.borderRadiusLG,te(t.colorBgMask,.1),t.prefixCls,t.colorBorderSecondary,t.boxShadowSecondary,t.prefixCls,t.colorBorderSecondary,t.borderRadius,t.boxShadowSecondary,t.prefixCls)};var Yo;const Mp=function(t){return $(Yo||(Yo=F([`
  :root {
    --font-settings: 'cv01', 'tnum', 'kern';
    --font-variations: 'opsz' auto, tabular-nums;
  }

  html {
    overscroll-behavior: none;
    color-scheme: `,`;
  }

  body {
    overflow: hidden auto;

    min-height: 100vh;
    margin: 0;
    padding: 0;

    font-family: `,`;
    font-size: `,`px;
    font-feature-settings: var(--font-settings);
    font-variation-settings: var(--font-variations);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1;
    color: `,`;
    text-size-adjust: none;
    text-rendering: optimizelegibility;
    word-wrap: break-word;
    vertical-align: baseline;

    background-color: `,`;

    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: transparent;
  }

  code {
    font-family: `,` !important;

    span {
      font-family: `,` !important;
    }
  }

  ::selection {
    color: #000;
    background: `,`;

    -webkit-text-fill-color: unset !important;
  }

  * {
    scrollbar-color: `,` transparent;
    scrollbar-width: thin;
    box-sizing: border-box;
    vertical-align: baseline;
  }
`])),t.isDarkMode?"dark":"light",t.fontFamily,t.fontSize,t.colorTextBase,t.colorBgLayout,t.fontFamilyCode,t.fontFamilyCode,t.yellow9,t.colorFill)};var Hp=Ps(function(t){var e=t.theme;return[Mp(e),Ip(e)]}),Wp=["children","customStylish","customToken","enableWebfonts","enableGlobalStyle","webfonts","customTheme","className","style"],Gp=w.memo(function(t){var e=t.children,n=t.customStylish,r=t.customToken,a=t.enableWebfonts,o=a===void 0?!0:a,i=t.enableGlobalStyle,s=i===void 0?!0:i,l=t.webfonts,u=t.customTheme,c=u===void 0?{}:u,d=t.className,p=t.style,h=N(t,Wp),f=Bn(),D=l||[f({path:"css/index.css",pkg:"@lobehub/webfont-mono",version:"1.0.0"}),f({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans",version:"1.0.0"}),f({path:"css/index.css",pkg:"@lobehub/webfont-harmony-sans-sc",version:"1.0.0"}),f({path:"dist/katex.min.css",pkg:"katex",version:"0.16.8"})],g=w.useCallback(function(y){return b(b({},bp(y)),n?.(y))},[n]),x=w.useCallback(function(y){return b(b({},vp(y)),r?.(y))},[r]),C=w.useCallback(function(y){return $p({appearance:y,neutralColor:c.neutralColor,primaryColor:c.primaryColor})},[c.primaryColor,c.neutralColor]);return m.jsxs(m.Fragment,{children:[o&&D?.length>0&&D.map(function(y){return m.jsx(jf,{url:y},y)}),m.jsx(Ls,{speedy:!0,children:m.jsxs($s,b(b({customStylish:g,customToken:x},h),{},{theme:C,children:[s&&m.jsx(Hp,{}),m.jsx(Is,{className:d,style:b({minHeight:"inherit",width:"inherit"},p),children:e})]}))})]})});Gp.displayName="LobeThemeProvider";var Up={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const qp=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Vp=(t,e)=>{const n=w.forwardRef(({color:r="currentColor",size:a=24,strokeWidth:o=2,absoluteStrokeWidth:i,children:s,...l},u)=>w.createElement("svg",{ref:u,...Up,width:a,height:a,stroke:r,strokeWidth:i?Number(o)*24/Number(a):o,className:`lucide lucide-${qp(t)}`,...l},[...e.map(([c,d])=>w.createElement(c,d)),...(Array.isArray(s)?s:[s])||[]]));return n.displayName=`${t}`,n};var Q=Vp;const N0=Q("Brush",[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",key:"1styjt"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",key:"z0l1mu"}]]),R0=Q("Bug",[["rect",{width:"8",height:"14",x:"8",y:"6",rx:"4",key:"hq8nra"}],["path",{d:"m19 7-3 2",key:"fmg8ec"}],["path",{d:"m5 7 3 2",key:"dkxqes"}],["path",{d:"m19 19-3-2",key:"1hbhi4"}],["path",{d:"m5 19 3-2",key:"dvt2ee"}],["path",{d:"M20 13h-4",key:"1agfp2"}],["path",{d:"M4 13h4",key:"1bwh8b"}],["path",{d:"m10 4 1 2",key:"1pot59"}],["path",{d:"m14 4-1 2",key:"m8sn0o"}]]),j0=Q("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),T0=Q("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),O0=Q("FileClock",[["path",{d:"M16 22h2c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3",key:"9lo3o3"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["circle",{cx:"8",cy:"16",r:"6",key:"10v15b"}],["path",{d:"M9.5 17.5 8 16.25V14",key:"1o80t2"}]]),z0=Q("FlaskConical",[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",key:"pzvekw"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h10",key:"wp8him"}]]),P0=Q("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9",key:"c89w8i"}],["path",{d:"M12 12v3",key:"158kv8"}]]),L0=Q("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),$0=Q("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),I0=Q("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]),M0=Q("Layout",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9",key:"1vqk6q"}],["line",{x1:"9",x2:"9",y1:"21",y2:"9",key:"wpwpyp"}]]),H0=Q("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),W0=Q("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]),G0=Q("PanelRight",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"15",x2:"15",y1:"3",y2:"21",key:"1hpv9i"}]]),U0=Q("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),q0=Q("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),V0=Q("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),K0=Q("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);export{W0 as $,_e as A,R0 as B,rt as C,h0 as D,ru as E,R as F,L0 as G,$0 as H,Ve as I,uc as J,ce as K,H0 as L,d0 as M,E0 as N,et as O,_0 as P,In as Q,N0 as R,A0 as S,Gp as T,M0 as U,G0 as V,z0 as W,I0 as X,q0 as Y,K0 as Z,n0 as _,j0 as a,U0 as a0,r0 as a1,B0 as a2,v0 as a3,Hl as a4,Jp as a5,t0 as a6,e0 as a7,C0 as a8,F0 as a9,w0 as aa,o0 as ab,Bn as ac,T0 as b,B as c,ja as d,c0 as e,pe as f,u0 as g,Ut as h,m0 as i,p0 as j,V0 as k,a0 as l,k0 as m,Te as n,f0 as o,g0 as p,S0 as q,Oe as r,O0 as s,P0 as t,Sr as u,b0 as v,x0 as w,y0 as x,D0 as y,ou as z};
