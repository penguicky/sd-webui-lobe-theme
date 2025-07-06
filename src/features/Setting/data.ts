import { neutralColors as nc, primaryColors as ps } from '@lobehub/ui/es/styles/customTheme';

import { kitchenNeutral, kitchenPrimary } from '@/styles/kitchenColors';

export const primaryColors = {
  kitchen: kitchenPrimary.dark.colorPrimary,
  ...ps,
};

// Filter out kitchen colors from swatches since they use incompatible hex format
// Kitchen colors will be handled separately in the UI logic

export const neutralColors = {
  kitchen: kitchenNeutral.dark.colorNeutral,
  ...nc,
};

// Filter out kitchen colors from swatches since they use incompatible hex format
// Kitchen colors will be handled separately in the UI logic

// Support both named colors and direct hex values
export type PrimaryColor = keyof typeof primaryColors | string;

export type NeutralColor = keyof typeof neutralColors | string;

// Create swatches from actual @lobehub/ui color values plus kitchen colors
export const primaryColorsSwatches = [
  '#007AFF', // kitchen primary
  ...Object.values(ps),
];

export const neutralColorsSwatches = [
  '#8E8E93', // kitchen neutral
  ...Object.values(nc),
];

// Helper function to check if a color value is a hex string
export const isHexColor = (color: string): boolean => {
  return /^#([\dA-Fa-f]{6}|[\dA-Fa-f]{3})$/.test(color);
};

// Import findCustomThemeName separately to avoid potential issues
export { findCustomThemeName } from '@lobehub/ui/es/styles/customTheme';
