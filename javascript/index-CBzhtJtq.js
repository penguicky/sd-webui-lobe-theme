import{r as e,u,j as s,F as j,i as k}from"./core-jkSX95V2.js";import{u as W,R as v,j as C,s as E}from"./features-advanced-CuirTiI3.js";import{b as q,a4 as M,l as P,c as D,q as R,a5 as z,a6 as B,a7 as I,a8 as T}from"./ui-lib-DJDOGt1z.js";import"./heavy-utils-CnT3T5QD.js";const F=e.memo(()=>{const o=q(),[i,t]=e.useState("setting"),r=e.useRef(null),{t:n}=u();return W(r,"#quicksettings",{debug:"[layout] inject - QuickSettingSidebar"}),s.jsx(M,{children:s.jsxs(j,{gap:16,children:[s.jsx(P,{block:!0,onChange:a=>t(a),options:[{label:n("sidebar.quickSetting"),value:"setting"},{label:n("setting.promptEditor.title"),value:"prompt"}],style:{background:o.colorBgContainer,width:"100%"},value:i}),s.jsx("div",{ref:r,style:i==="setting"?{}:{display:"none"}}),i==="prompt"&&s.jsx(v,{})]})})}),N=D(({css:o},{headerHeight:i=64,width:t})=>({container:o`
      height: calc(100vh - ${i}px);

      ul.options {
        > li {
          max-width: ${t-48}px;
        }
      }

      #quicksettings {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: stretch;

        width: 100%;

        > * {
          flex: 1;

          width: 100% !important;
          min-width: unset !important;
          max-width: unset !important;
          margin: 0;
          padding: 0;
        }

        .head > label {
          min-width: unset;
          max-width: 60%;
          margin-right: 12px;
        }

        input[type='color'] {
          width: 100%;
        }

        input[type='number'],
        textarea {
          resize: none;
          box-sizing: border-box;
          height: 28px !important;
          padding: 4px !important;
        }

        textarea {
          width: 100%;
        }

        span {
          overflow: hidden;
          width: 100%;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .dropdown-arrow {
          min-width: 16px;
          min-height: 16px;
        }

        div.gradio-dropdown {
          min-width: unset !important;
        }
      }
    `})),Q=e.memo(({headerHeight:o})=>{const{mobile:i}=R(),t=C(E.currentSetting,k),[r,n]=e.useState(i?!1:t.sidebarExpand),[a,h]=e.useState(t.sidebarFixedMode==="fixed"),[m,g]=e.useState(t.sidebarWidth),{styles:x,theme:l}=N({headerHeight:o,width:m}),{t:c}=u();e.useEffect(()=>{i&&n(!1)},[i]);const d=e.useMemo(()=>i||a?"fixed":"float",[i,a]),b=e.useCallback(($,p)=>{p?.width&&g(Number.parseInt(String(p.width)))},[]),f=e.useMemo(()=>({width:t.sidebarWidth}),[t.sidebarWidth]),w=e.useMemo(()=>({display:"flex",flexDirection:"column"}),[]),S=e.useMemo(()=>d==="float"?{background:l.colorBgContainer,minWidth:t.sidebarWidth}:{minWidth:t.sidebarWidth},[d,l.colorBgContainer,t.sidebarWidth]),y=e.useMemo(()=>c("sidebar.quickSetting"),[c]);return s.jsx(z,{defaultSize:f,expand:r,minWidth:t.sidebarWidth,mode:d,onExpandChange:n,onSizeChange:b,pin:a,placement:"left",style:w,children:s.jsx(B,{children:s.jsxs(I,{className:x.container,style:S,children:[s.jsx(T,{pin:a,position:"left",setExpand:n,setPin:h,title:y}),s.jsx(F,{})]})})})});Q.displayName="QuickSettingSidebar";export{Q as default};
