/**
 * Type guards for runtime type checking and enhanced type safety
 */
import type { WebuiSetting } from '@/store/initialState';

/**
 * Type guard to check if a value is a valid theme mode
 */
export const isValidThemeMode = (mode: unknown): mode is 'light' | 'dark' => {
  return typeof mode === 'string' && ['light', 'dark'].includes(mode);
};

/**
 * Type guard to check if a value is a valid logo type
 */
export const isValidLogoType = (type: unknown): type is 'lobe' | 'kitchen' | 'custom' => {
  return typeof type === 'string' && ['lobe', 'kitchen', 'custom'].includes(type);
};

/**
 * Type guard to check if a value is a valid fixed mode
 */
export const isValidFixedMode = (mode: unknown): mode is 'fixed' | 'float' => {
  return typeof mode === 'string' && ['fixed', 'float'].includes(mode);
};

/**
 * Type guard to check if a value is a valid prompt textarea type
 */
export const isValidPromptTextareaType = (type: unknown): type is 'scroll' | 'resizable' => {
  return typeof type === 'string' && ['scroll', 'resizable'].includes(type);
};

/**
 * Type guard to check if a value is a valid WebUI setting
 */
export const isValidWebuiSetting = (setting: unknown): setting is WebuiSetting => {
  if (!setting || typeof setting !== 'object') {
    return false;
  }

  const s = setting as Record<string, unknown>;

  return (
    typeof s.confirmPageUnload === 'boolean' &&
    typeof s.enableExtraNetworkSidebar === 'boolean' &&
    typeof s.enableHighlight === 'boolean' &&
    typeof s.enableImageInfo === 'boolean' &&
    typeof s.enableSidebar === 'boolean' &&
    typeof s.enableWebFont === 'boolean' &&
    typeof s.extraNetworkCardSize === 'number' &&
    isValidFixedMode(s.extraNetworkFixedMode) &&
    typeof s.extraNetworkSidebarExpand === 'boolean' &&
    typeof s.extraNetworkSidebarWidth === 'number' &&
    typeof s.i18n === 'string' &&
    typeof s.layoutHideFooter === 'boolean' &&
    typeof s.layoutSplitPreview === 'boolean' &&
    typeof s.liteAnimation === 'boolean' &&
    (s.logoCustomTitle === undefined || typeof s.logoCustomTitle === 'string') &&
    (s.logoCustomUrl === undefined || typeof s.logoCustomUrl === 'string') &&
    isValidLogoType(s.logoType) &&
    (s.neutralColor === undefined || typeof s.neutralColor === 'string') &&
    (s.primaryColor === undefined || typeof s.primaryColor === 'string') &&
    typeof s.promptEditor === 'boolean' &&
    isValidPromptTextareaType(s.promptTextareaType) &&
    typeof s.sidebarExpand === 'boolean' &&
    isValidFixedMode(s.sidebarFixedMode) &&
    typeof s.sidebarWidth === 'number' &&
    typeof s.svgIcon === 'boolean'
  );
};

/**
 * Type guard to check if a value is a partial WebUI setting
 */
export const isValidPartialWebuiSetting = (setting: unknown): setting is Partial<WebuiSetting> => {
  if (!setting || typeof setting !== 'object') {
    return false;
  }

  const s = setting as Record<string, unknown>;

  // Check that all present properties are valid
  for (const [key, value] of Object.entries(s)) {
    switch (key) {
      case 'confirmPageUnload':
      case 'enableExtraNetworkSidebar':
      case 'enableHighlight':
      case 'enableImageInfo':
      case 'enableSidebar':
      case 'enableWebFont':
      case 'extraNetworkSidebarExpand':
      case 'layoutHideFooter':
      case 'layoutSplitPreview':
      case 'liteAnimation':
      case 'promptEditor':
      case 'sidebarExpand':
      case 'svgIcon': {
        if (typeof value !== 'boolean') return false;
        break;
      }
      case 'extraNetworkCardSize':
      case 'extraNetworkSidebarWidth':
      case 'sidebarWidth': {
        if (typeof value !== 'number') return false;
        break;
      }
      case 'extraNetworkFixedMode':
      case 'sidebarFixedMode': {
        if (!isValidFixedMode(value)) return false;
        break;
      }
      case 'i18n': {
        if (typeof value !== 'string') return false;
        break;
      }
      case 'logoCustomTitle':
      case 'logoCustomUrl':
      case 'neutralColor':
      case 'primaryColor': {
        if (value !== undefined && typeof value !== 'string') return false;
        break;
      }
      case 'logoType': {
        if (!isValidLogoType(value)) return false;
        break;
      }
      case 'promptTextareaType': {
        if (!isValidPromptTextareaType(value)) return false;
        break;
      }
      default: {
        // Unknown property
        return false;
      }
    }
  }

  return true;
};

/**
 * Type guard to check if a value is a non-null object
 */
export const isNonNullObject = (value: unknown): value is Record<string, unknown> => {
  return value !== null && typeof value === 'object';
};

/**
 * Type guard to check if a value is a string and not empty
 */
export const isNonEmptyString = (value: unknown): value is string => {
  return typeof value === 'string' && value.length > 0;
};

/**
 * Type guard to check if a value is a valid array index
 */
export const isValidArrayIndex = (value: unknown, arrayLength: number): value is number => {
  return typeof value === 'number' && value >= 0 && value < arrayLength && Number.isInteger(value);
};

/**
 * Safe array access with type guard
 */
export const safeArrayAccess = <T>(array: T[], index: number): T | undefined => {
  return isValidArrayIndex(index, array.length) ? array[index] : undefined;
};

/**
 * Safe object property access with type guard
 */
export const safeObjectAccess = <T>(
  obj: Record<string, T> | undefined | null,
  key: string,
): T | undefined => {
  return obj && typeof obj === 'object' && key in obj ? obj[key] : undefined;
};
