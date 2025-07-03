import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token, cx, stylish, prefixCls }) => {
  const prefix = `${prefixCls}-highlighter`;
  return {
    container: css`
      /* CSS custom properties for micro-adjustments if needed */
      --highlight-offset-x: 0;
      --highlight-offset-y: 0;

      pointer-events: none !important;

      position: absolute;

      /* Fine-tune positioning to match textarea exactly */
      top: 0;
      left: 0;
      transform: translate(var(--highlight-offset-x), var(--highlight-offset-y));

      overflow: hidden auto;

      box-sizing: border-box;

      /* Remove hardcoded padding - will be set dynamically to match textarea */
      padding: 0;

      /* Ensure all child elements also don't capture events */
      * {
        pointer-events: none !important;
      }

      pre {
        margin: 0 !important;
        padding: 0 !important;

        /* Font properties will be inherited from parent container */

        /* which gets them dynamically from the textarea */
        font-family: inherit !important;
        font-size: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;

        /* Text layout properties */
        text-indent: 0 !important;
        letter-spacing: inherit !important;
        word-spacing: inherit !important;
        word-wrap: break-word !important;
        white-space: pre-wrap !important;
        vertical-align: bottom !important;
      }
    `,
    loading: cx(
      stylish.blur,
      css`
        /* Loading indicator should also not capture events */
        pointer-events: none !important;

        position: absolute;
        z-index: 10;
        top: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        height: 34px;
        padding: 0 8px;
        border-radius: ${token.borderRadius};

        font-family: ${token.fontFamilyCode};
        color: ${token.colorTextTertiary};

        * {
          pointer-events: none !important;
        }
      `,
    ),
    shiki: cx(
      `${prefix}-shiki`,
      css`
        pointer-events: none !important;
        margin: 0;
        padding: 0;

        /* Ensure all Shiki-generated content doesn't capture events */
        * {
          pointer-events: none !important;
        }

        .shiki {
          pointer-events: none !important;

          overflow-x: auto;

          margin: 0 !important;
          padding: 0 !important;

          /* Ensure exact positioning match */
          border: none !important;

          background: none !important;
          outline: none !important;

          /* Make sure all highlighted elements are non-interactive and aligned */
          code,
          code span,
          code *,
          span,
          span * {
            pointer-events: none !important;

            margin: 0 !important;
            padding: 0 !important;
            border: none !important;

            /* Inherit font properties from parent container */
            font-family: inherit !important;
            font-size: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            text-decoration: none !important;
            letter-spacing: inherit !important;
            word-spacing: inherit !important;

            background: transparent !important;
          }

          /* Ensure code elements don't add extra spacing */
          code {
            display: block !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            white-space: pre-wrap !important;
          }
        }
      `,
    ),
  };
});
