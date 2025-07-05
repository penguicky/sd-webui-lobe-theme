import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token, cx, stylish, prefixCls }) => {
  const prefix = `${prefixCls}-highlighter`;
  return {
    container: css`
      /* CSS custom properties for micro-adjustments if needed */
      --highlight-offset-x: 0;
      --highlight-offset-y: 0;
      --highlight-sub-pixel-x: 0;
      --highlight-sub-pixel-y: 0;

      pointer-events: none !important;

      position: absolute;

      /* Enhanced positioning for pixel-perfect alignment */
      top: 0;
      left: 0;
      transform: translate(
        calc(var(--highlight-offset-x) + var(--highlight-sub-pixel-x)),
        calc(var(--highlight-offset-y) + var(--highlight-sub-pixel-y))
      );

      /* Critical: Force hardware acceleration and prevent sub-pixel issues */
      will-change: transform;
      transform-style: preserve-3d;
      backface-visibility: hidden;

      /* Ensure consistent rendering across browsers */
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-smooth: always;
      text-rendering: optimizeLegibility;

      /* Allow content to be visible even if it extends beyond container */
      overflow: visible;

      box-sizing: border-box;

      /* Remove hardcoded padding and margins - will be set dynamically to match textarea */
      margin: 0;
      padding: 0;

      /* Ensure perfect text baseline alignment */
      vertical-align: baseline;

      /* Prevent text selection and interaction issues */
      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;

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
        font-style: inherit !important;
        font-variant: inherit !important;
        font-stretch: inherit !important;
        line-height: inherit !important;
        hyphens: inherit !important;
        text-align: inherit !important;

        /* Text layout properties - inherit from parent to match textarea exactly */
        text-indent: inherit !important;
        text-transform: inherit !important;
        text-rendering: inherit !important;
        letter-spacing: inherit !important;
        word-break: inherit !important;
        word-spacing: inherit !important;
        word-wrap: inherit !important;
        overflow-wrap: inherit !important;

        /* Tab size */
        tab-size: inherit !important;
        tab-size: inherit !important;

        /* Critical: inherit wrapping behavior from parent instead of forcing */
        white-space: inherit !important;

        /* Vertical alignment */
        vertical-align: inherit !important;
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

          /* Enhanced text rendering for pixel-perfect alignment */
          -webkit-font-smoothing: inherit;
          -moz-osx-font-smoothing: inherit;
          font-smooth: inherit;
          text-rendering: inherit;

          /* Prevent sub-pixel positioning issues */
          transform: translateZ(0);
          will-change: auto;

          /* Ensure consistent text metrics */
          font-variant-ligatures: inherit;
          font-variant-numeric: inherit;
          font-feature-settings: inherit;
          font-kerning: inherit;

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

            /* Inherit ALL font and text properties from parent container */
            font-family: inherit !important;
            font-size: inherit !important;
            font-weight: inherit !important;
            font-style: inherit !important;
            font-variant: inherit !important;
            font-stretch: inherit !important;
            line-height: inherit !important;
            hyphens: inherit !important;
            text-align: inherit !important;
            text-decoration: none !important;
            text-indent: inherit !important;
            text-transform: inherit !important;
            text-rendering: inherit !important;
            letter-spacing: inherit !important;
            word-break: inherit !important;
            word-spacing: inherit !important;
            word-wrap: inherit !important;
            overflow-wrap: inherit !important;

            /* Tab size */
            tab-size: inherit !important;
            tab-size: inherit !important;

            /* Inherit wrapping behavior */
            white-space: inherit !important;

            /* Vertical alignment */
            vertical-align: inherit !important;

            background: transparent !important;
          }

          /* Ensure code elements don't add extra spacing and inherit all layout */
          code {
            display: block !important;

            word-break: inherit !important;
            word-wrap: inherit !important;
            overflow-wrap: inherit !important;

            /* Critical: inherit wrapping behavior instead of forcing */
            white-space: inherit !important;
          }
        }
      `,
    ),
  };
});
