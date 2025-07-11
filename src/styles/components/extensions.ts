import { Theme, css } from 'antd-style';

import { HEADER_HEIGHT } from '../../app/index';

export default (token: Theme) => {
  return css`
    #root {
      /* sd-webui-prompt-all-in-one */
      .physton-highlight-prompt {
        color: ${token.colorPrimary} !important;

        -webkit-text-fill-color: ${token.colorPrimary} !important;
      }

      /* sd-forge-couple compatibility fixes */
      /* Main containers - only protect when not hidden by Gradio accordion */
      #forge_couple_t2i:not(.hidden),
      #forge_couple_i2i:not(.hidden) {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
      }

      /* Only protect core UI elements that should never be hidden */
      .fc_mapping,
      .fc_mapping_btns,
      .fc_bg_btns,
      .fc_preview_img,
      .fc_preview_res,
      .fc_bbox {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
      }

      /*
       * DO NOT force visibility on mode containers (.fc_adv, .fc_bsc, .fc_msk)
       * These must be controlled by Gradio's mode switching logic
       * DO NOT force visibility on .fc_row_btns - controlled by JavaScript
       */

      /* Ensure advanced mode table is properly displayed */
      .fc_mapping table {
        display: table !important;
      }

      .fc_mapping tbody {
        display: table-row-group !important;
      }

      .fc_mapping tr {
        display: table-row !important;
      }

      .fc_mapping td,
      .fc_mapping th {
        display: table-cell !important;
      }

      /* Ensure bounding boxes are positioned correctly */
      .fc_bbox {
        position: absolute !important;
        pointer-events: none !important;
      }

      /* Ensure buttons are properly displayed */
      .fc_row_btns button,
      .fc_bg_btns button,
      .fc_mapping_btns button {
        display: inline-block !important;
        visibility: visible !important;
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

        font-family: ${token.fontFamilyCode};
        font-size: 12px;

        background: ${token.colorBgElevated} !important;
        border-color: ${token.colorBorder} !important;
        border-radius: ${token.borderRadius}px !important;
        box-shadow: ${token.boxShadow};

        ul {
          padding: 0 !important;
        }

        li {
          border-bottom: 1px solid ${token.colorBorder};

          &:hover,
          &.selected {
            background: ${token.colorFillSecondary} !important;
          }

          &:nth-of-type(odd) {
            background: transparent !important;

            &:hover,
            &.selected {
              background: ${token.colorFillSecondary} !important;
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
          background-color: ${token.colorSuccess};
        }

        .tab-nav button {
          &.cnet-unit-active,
          &.selected.cnet-unit-active {
            color: ${token.colorSuccess} !important;
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
        background-color: ${token.colorBgContainer};
        border: 1px solid var(--block-border-color);
        border-radius: ${token.borderRadius}px;

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
          border-radius: ${token.borderRadius}px;
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
            background-color: ${token.colorBgContainer};
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
            background-color: ${token.colorBgContainer};
          }

          .styler {
            gap: 16px;
          }
        }
      }

      /* ComfyUI */
      #comfyui_webui_container {
        height: calc(100% - ${HEADER_HEIGHT}px) !important;
      }
    }
  `;
};
