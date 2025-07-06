import { type Theme, css } from 'antd-style';
import { readableColor } from 'polished';

export default (token: Theme) => {
  return css`
    :root,
    .dark {
      /* Core Color System - Consolidated from 22 to 8 tokens */
      --color-primary: ${token.colorPrimary};
      --color-primary-hover: ${token.colorPrimaryHover};
      --color-primary-active: ${token.colorPrimaryActive};
      --color-text: ${token.colorText};
      --color-text-secondary: ${token.colorTextSecondary};
      --color-text-tertiary: ${token.colorTextTertiary};
      --color-bg: ${token.colorBgContainer};
      --color-bg-elevated: ${token.colorBgElevated};

      /* Spacing System - Consolidated from 7 to 4 tokens */
      --spacing-sm: ${token.paddingSM}px;
      --spacing-md: ${token.paddingMD}px;
      --spacing-lg: ${token.paddingLG}px;
      --spacing-xl: ${token.paddingXL}px;

      /* Border Radius - Consolidated from 7 to 3 tokens */
      --radius-sm: ${token.borderRadiusSM}px;
      --radius-md: ${token.borderRadius}px;
      --radius-lg: ${token.borderRadiusLG}px;

      /* Typography - Consolidated from 7 to 4 tokens */
      --text-sm: ${token.fontSizeSM}px;
      --text-md: ${token.fontSize}px;
      --text-lg: ${token.fontSizeLG}px;
      --text-xl: ${token.fontSizeXL}px;
      --font-family: ${token.fontFamily};
      --font-family-mono: ${token.fontFamilyCode};

      /* Essential UI Tokens - Consolidated from 20 to 8 tokens */
      --bg-layout: ${token.colorBgLayout};
      --bg-container: ${token.colorBgContainer};
      --border-color: ${token.colorBorderSecondary};
      --border-color-accent: ${token.colorBorder};
      --link-color: ${token.colorInfoText};
      --link-color-hover: ${token.colorInfoTextHover};
      --shadow-base: ${token.boxShadowSecondary};
      --shadow-elevated: ${token.boxShadow};

      /* Component Tokens - Consolidated from 35 to 12 tokens */
      --block-bg: var(--bg-container);
      --block-border: 1px solid var(--border-color);
      --block-padding: var(--spacing-lg) var(--spacing-xl);
      --block-radius: var(--radius-md);
      --label-bg: ${token.colorFillSecondary};
      --label-text: var(--color-text);
      --label-padding: var(--spacing-sm) var(--spacing-lg);
      --container-radius: var(--radius-lg);
      --panel-bg: var(--bg-container);
      --form-gap: 1px;
      --layout-gap: var(--spacing-xl);
      --code-bg: var(--bg-container);

      /* Form Controls - Consolidated from 24 to 8 tokens */
      --checkbox-bg: ${token.colorFillTertiary};
      --checkbox-bg-hover: ${token.colorFillSecondary};
      --checkbox-bg-selected: var(--color-primary);
      --checkbox-border: 1px solid var(--border-color);
      --checkbox-border-selected: 1px solid var(--color-primary);
      --checkbox-radius: ${token.borderRadiusXS}px;
      --checkbox-label-padding: var(--spacing-md);
      --checkbox-label-text: var(--color-text);

      /* Input & Interactive Elements - Consolidated from 29 to 10 tokens */
      --error-bg: ${token.colorErrorBg};
      --error-border: 1px solid ${token.colorErrorBorder};
      --error-text: ${token.colorErrorText};
      --input-bg: ${token.colorFillTertiary};
      --input-bg-focus: ${token.colorFillSecondary};
      --input-border: 1px solid var(--border-color);
      --input-border-focus: 1px solid var(--border-color-accent);
      --input-padding: var(--spacing-lg);
      --input-placeholder: ${token.colorTextQuaternary};
      --input-radius: var(--radius-md);

      /* Button System - Consolidated from 36 to 12 tokens */
      --button-border: 1px solid var(--border-color);
      --button-primary-bg: var(--color-primary);
      --button-primary-bg-hover: var(--color-primary-hover);
      --button-primary-text: ${readableColor(token.colorPrimary)};
      --button-secondary-bg: ${token.colorFillSecondary};
      --button-secondary-bg-hover: ${token.colorFill};
      --button-secondary-text: var(--color-text-secondary);
      --button-cancel-bg: ${token.colorError};
      --button-cancel-bg-hover: ${token.colorErrorHover};
      --button-cancel-text: ${readableColor(token.colorError)};
      --button-padding: var(--spacing-md) var(--spacing-lg);
      --button-radius: var(--radius-md);

      /* Utility Tokens - Consolidated from remaining tokens */
      --transition-base: all 0.12s ${token.motionEaseInOut};
      --button-height-lg: 44px;
      --button-height-tool: 36px;
      --overlay-bg: ${token.colorBgMask};
      --shadow-thumbnail: var(--shadow-elevated);
      --shadow-lightbox: var(--shadow-base);
    }

    .dark {
      --checkbox-check: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
      --radio-circle: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
    }
  `;
};
