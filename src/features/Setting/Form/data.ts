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

export type PrimaryColor = keyof typeof primaryColors;

export type NeutralColor = keyof typeof neutralColors;

// Use the same test colors as main data.ts
export const primaryColorsSwatches = [
  '#ff0000', // red
  '#ff8800', // orange
  '#ffff00', // yellow
  '#88ff00', // lime
  '#00ff00', // green
  '#00ffff', // cyan
  '#0088ff', // blue
  '#0000ff', // blue
  '#8800ff', // purple
  '#ff00ff', // magenta
];

export const neutralColorsSwatches = [
  '#888888', // gray
  '#666666', // dark gray
  '#aaaaaa', // light gray
  '#999999', // medium gray
  '#777777', // darker gray
];

// Import findCustomThemeName separately to avoid potential issues
export { findCustomThemeName } from '@lobehub/ui/es/styles/customTheme';
