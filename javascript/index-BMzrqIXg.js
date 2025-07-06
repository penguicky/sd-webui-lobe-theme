import{r as m,i as L,j as c,F as U,u as W}from"./core-jkSX95V2.js";import{c as E,T as Z,u as q,j as $,s as A,Z as G,U as X}from"./features-advanced-CuirTiI3.js";import{c as Y,a4 as K,e as V,a9 as J,A as Q,aa as ee,q as te,a5 as re,a6 as oe,a7 as ie,a8 as ae}from"./ui-lib-DJDOGt1z.js";import"./heavy-utils-CnT3T5QD.js";const D=Y(({css:e,token:t},{headerHeight:r=64,size:a=86})=>({body:e`
      height: 100%;
      padding: 0;

      .hide {
        display: none;
      }

      #txt2img_extra_search,
      #img2img_extra_search {
        width: 100% !important;
        max-width: unset !important;

        textarea {
          height: unset !important;
        }
      }

      #txt2img-extra-network-sidebar,
      #img2img-extra-network-sidebar {
        button.lg.secondary.gradio-button,
        #txt2img_extra_sort,
        #img2img_extra_sort {
          height: 34px !important;
          min-height: 34px !important;
        }

        .tabitem {
          position: relative;
          padding: 0 !important;
          background: transparent;
        }
      }

      .extra-network-pane {
        resize: none;
        height: 100%;
      }

      .extra-network-cards {
        overflow: hidden auto;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(${a}px, 1fr));
        flex: none !important;
        gap: 8px;

        max-height: 100%;
        padding: 16px;

        border: unset !important;

        .name {
          background: unset !important;
        }

        .additional {
          position: relative !important;
        }

        &:has(.nocards) {
          display: flex;
          flex-direction: column;
        }
      }

      .extra-network-dirs {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        padding-inline: 16px;

        > button.lg.secondary.gradio-button {
          padding: 4px 8px;
          font-size: 12px;
          line-height: 1;
        }
      }

      .extra-networks {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100%;

        .pending {
          opacity: 1 !important;
        }

        .wrap.center.full.translucent {
          display: none !important;
        }

        .tab-nav {
          align-items: center;
          margin: 0;
          padding: 16px;

          > button {
            font-size: 14px !important;

            &:first-child {
              display: none;
            }
          }

          .extra-networks-controls-div {
            height: unset !important;
          }

          .extra-network-control {
            position: relative;
            flex: none;
            flex-wrap: wrap;
            gap: 8px;

            .extra-network-control--search {
              width: 100%;
            }

            small {
              display: none;
            }

            > div:has(i) {
              position: relative;

              display: flex;
              flex: none;

              height: 32px;

              background: ${t.colorFillTertiary};
              border-radius: ${t.borderRadius}px;
            }
          }
        }

        .extra-network-subdirs {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          align-items: center;

          margin-bottom: 12px;
          padding: 0 !important;

          > button {
            cursor: pointer;

            zoom: 0.8;

            flex: 1;

            min-width: 100px;
            margin: 0;
          }
        }

        .actions {
          background: rgb(0 0 0 / 30%);
          backdrop-filter: saturate(120%) blur(4px);
          box-shadow: none !important;

          .name {
            overflow: hidden;
            display: block;

            font-weight: bold;
            text-overflow: ellipsis;
            text-shadow: 0 1px 1px rgb(0 0 0 / 90%);
            white-space: nowrap;
          }

          .additional {
            position: absolute;
            display: none;

            > ul {
              display: flex;
              align-items: center;
              justify-content: center;

              margin: 0;
              padding: 0;

              a {
                margin: 0 !important;
                padding: 0 !important;

                font-size: var(--text-md) !important;
                color: #fff;
                text-overflow: ellipsis;
                text-shadow: 1px 1px black;
                white-space: nowrap;
              }
            }
          }

          .description {
            a:hover {
              color: var(--link-text-color-hover);
            }
          }
        }

        .card {
          overflow: hidden;

          width: 100% !important;
          height: ${a*1.5}px !important;
          margin: 0 !important;

          background-size: cover;
          border: 1px solid ${t.colorBorderSecondary};
          border-radius: ${t.borderRadiusSM}px;
          outline: none;

          transition:
            box-shadow 200ms ${t.motionEaseOut},
            scale 400ms ${t.motionEaseOut};

          .name {
            font-size: var(--text-sm) !important;
          }

          &:hover {
            border-color: ${t.colorPrimary};
            box-shadow: 0 0 0 1px ${t.colorPrimary};

            .additional {
              display: flex !important;
            }

            .name {
              word-break: break-word;
              line-break: auto;
              white-space: unset;
            }
          }

          &:active {
            scale: 0.9;
          }
        }

        .button-row {
          padding: 0 4px;
          background: rgba(0, 0, 0, 50%);
          border-bottom-left-radius: ${t.borderRadius}px;

          > div {
            font-size: var(--text-md) !important;
            text-shadow: none !important;
          }
        }

        .metadata-button {
          &::before {
            content: 'ℹ️' !important;
          }
        }
      }

      div#txt2img_extra_networks,
      div#img2img_extra_networks {
        display: block !important;

        .tabitem.gradio-tabitem.svelte-19hvt5v {
          padding: 0 !important;
          background: transparent;
        }

        .search {
          box-sizing: border-box;
          width: 100%;
          max-width: 100%;
          max-height: var(--button-lg-tool-height) !important;
          padding: 8px;
        }

        button {
          height: 32px !important;
        }
      }

      textarea {
        resize: none;
        overflow-y: hidden !important;
        font-family: ${t.fontFamily};
      }
    `,container:e`
      height: calc(100vh - ${r}px);
    `})),R=["txt2img","img2img"],F=["textual_inversion","hypernetworks","checkpoints","lora","lycoris"],ne={checkpoints:"ckp",hypernetworks:"hyper",lora:"lora",lycoris:"lycoris",textual_inversion:"ti"},se="cards",le="0",ce="15px",de="100%",pe="inline",me="static",ue="none",xe="rgba(0, 0, 0, 0.8)",ge=new Set(["🌐","💡","🏷️"]),he="lobe",I=`${he}Done`,j="1",k=(e,t)=>{t?(e.style.display=pe,e.style.fontSize=de,e.style.position=me,e.style.backgroundImage=ue):(e.style.fontSize=ce,e.style.margin=le)};function N(e){return e==null}const fe=()=>{if(!document.querySelector("#tab_civitai_helper"))return;const e=getTranslation("replace preview")||"replace preview",t=document.querySelector("#ch_always_display_ckb input"),r=document.querySelector("#ch_show_btn_on_thumb_ckb input"),a=t?.checked||!1,n=r?.checked||!1;let s,i,l,d,p,o,_,g="",f,S,B=!1,h=!1;const T=[];for(const O of R)for(const v of F){if(f=ne[v],s=`${O}_${v}_${se}`,i=document.querySelector(`#${s}`),N(i))continue;h=i.classList.contains("extra-network-thumbs"),S=i.querySelectorAll(".card");const C=!!document.querySelector(`#${s}_html .pending`);if(!S?.length||C){!C&&i.querySelector(".nocards")&&T.push(v);continue}T.push(v);for(const u of S){if(u.dataset[I]===j)break;if(u.dataset[I]=j,u.querySelectorAll(".actions .additional a").length>2)continue;if(l=u.querySelector(".metadata-button"),d=u.querySelector(".actions .additional"),o=u.querySelector(".actions .additional ul"),N(o)&&(o=document.createElement("ul"),d.append(o)),p=u.querySelector(".actions .additional a"),N(p)&&(p=document.createElement("a"),d.append(p)),o.querySelector("br")?.remove(),h&&d)if(d.style.display=void 0,n)o.style.background=xe;else{o.style.background=void 0;const M=o.querySelectorAll("a");if(!M?.length)continue;for(const x of M)x.style.display=void 0,ge.has(x.innerHTML)?x.remove():(x.innerHTML=e,x.style.display=void 0,x.style.fontSize=void 0,x.style.position=void 0,x.style.backgroundImage=void 0);continue}else d.style.display=a?"block":void 0;if(p.innerHTML!=="🖼️"&&(B=!0,p.innerHTML="🖼️",k(p,h)),!B)continue;if(_=u.querySelector(".actions .additional .search_term"),!_)return;if(g=_.innerHTML,!g)continue;const b=document.createElement("a");b.href="#",b.innerHTML="🌐",k(b,h),b.title="Open this model's civitai url",b.setAttribute("onclick",`open_model_url(event, '${f}', '${g}')`);const y=document.createElement("a");y.href="#",y.innerHTML="💡",k(y,h),y.title="Add trigger words to prompt",y.setAttribute("onclick",`add_trigger_words(event, '${f}', '${g}')`);const w=document.createElement("a");w.href="#",w.innerHTML="🏷️",k(w,h),w.title="Use prompt from preview image",w.setAttribute("onclick",`use_preview_prompt(event, '${f}', '${g}')`),o.append(b),h&&l&&o.append(document.createElement("br")),o.append(y),o.append(w)}}return T},P=()=>{let e,t=0;const r=()=>{const a=()=>setTimeout(r,500);let n=0;const s=setInterval(()=>{E.info("🤯 [civitai helper] update card for civitai");const i=document.querySelector("#txt2img_lora_cards");if(i||n>5){if(e!==i){t=0,e=i;for(const d of R){const p=document.querySelectorAll(`#${d}_extra_tabs .tab-nav button`);if(p)for(const o of p)o.removeEventListener("click",a),o.addEventListener("click",a)}}const l=fe()?.length;Z(l)&&l<t&&(t=l),(n>5||!i||l>=F.length||l>t)&&(clearInterval(s),t=l??t)}n++},500)};return r()},H=e=>{document.querySelector(`#${e}2img_extra_refresh`).click();const r=document.querySelector(`#${e}2img_extra_refresh`)?.nextSibling;r&&(r.onclick=P)},be=({onStart:e,onSuccess:t,debug:r,timeout:a=500}={})=>{const[n,s]=m.useState(!0),i=m.useRef(!1);return m.useEffect(()=>{if(i.current)return;e?.();const l=!!document.querySelector("#tab_civitai_helper")&&!!document.querySelector("#txt2img_extra_refresh");let d;if(l)try{d=setTimeout(()=>{H("txt"),H("img"),P()},a)}catch(p){s(!1),r&&E.success(`🤯 ${r}`,p)}return t?.(),i.current=!0,s(!1),r&&E.success(`🤯 ${r}`),()=>{d&&clearTimeout(d)}},[]),{isLoading:n}},ye=e=>m.useRef(gradioApp().querySelector(e)),we=e=>{document.querySelectorAll(`#${e}2img_extra_tabs > .tab-nav > button`)[1]?.click();const r=Array.from(document.querySelectorAll(`#${e}2img_extra_tabs button.search-all`));for(const a of r)a.click()},z=e=>{const t=ye(`div#tab_${e}2img`),r=m.useRef(null);return q(r,`div#${e}2img_extra_tabs`),q(t,"div.tabitem.gradio-tabitem",{id:`${e}2img_render`,onSuccess:()=>{we(e)},parent:`div#${e}2img_extra_tabs`}),r},_e=m.memo(()=>{const e=z("txt"),t=z("img"),r=$(A.currentSetting,L),a=$(A.currentTab),[n,s]=m.useState(r.extraNetworkCardSize||86),{styles:i}=D({size:n}),{isLoading:l}=be({debug:"[layout] inject - ExtraNetworkSidebar"});return c.jsxs(c.Fragment,{children:[c.jsxs(K,{className:i.body,children:[l&&c.jsx(U,{padding:16,width:"100%",children:c.jsx(V,{active:!0})}),c.jsxs("div",{style:l?{display:"none"}:{},children:[c.jsx("div",{id:"txt2img-extra-network-sidebar",ref:e,style:a==="tab_img2img"?{display:"none"}:{height:"100%",overflow:"hidden",position:"relative"}}),c.jsx("div",{id:"img2img-extra-network-sidebar",ref:t,style:a==="tab_img2img"?{height:"100%"}:{display:"none",overflow:"hidden",position:"relative"}})]})]}),c.jsxs(J,{children:[c.jsx(Q,{icon:r.extraNetworkCardSize<n?G:X,onClick:()=>s(r.extraNetworkCardSize),size:{blockSize:24,fontSize:16}}),c.jsx(ee,{defaultValue:n,max:256,min:64,onChange:s,step:8,style:{flex:1},value:n})]})]})}),ve=m.memo(({headerHeight:e})=>{const{mobile:t}=te(),r=$(A.currentSetting,L),[a,n]=m.useState(t?!1:r.extraNetworkSidebarExpand),[s,i]=m.useState(r.extraNetworkFixedMode==="fixed"),{styles:l,theme:d}=D({headerHeight:e}),{t:p}=W();m.useEffect(()=>{t&&n(!1)},[t]);const o=m.useMemo(()=>t||s?"fixed":"float",[t,s]),_=m.useMemo(()=>({width:r.extraNetworkSidebarWidth}),[r.extraNetworkSidebarWidth]),g=m.useMemo(()=>o==="float"?{background:d.colorBgContainer,minWidth:r.extraNetworkSidebarWidth}:{minWidth:r.extraNetworkSidebarWidth},[o,d.colorBgContainer,r.extraNetworkSidebarWidth]),f=m.useMemo(()=>p("sidebar.extraNetwork"),[p]);return c.jsx(re,{defaultSize:_,expand:a,minWidth:r.extraNetworkSidebarWidth,mode:o,onExpandChange:n,pin:s,placement:"right",children:c.jsx(oe,{children:c.jsxs(ie,{className:l.container,style:g,children:[c.jsx(ae,{pin:s,position:"right",setExpand:n,setPin:i,title:f}),c.jsx(_e,{})]})})})});ve.displayName="ExtraNetworkSidebar";export{ve as default};
