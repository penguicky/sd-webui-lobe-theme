# sd-forge-couple Compatibility Fix

This document describes the compatibility fixes implemented to ensure sd-webui-lobe-theme works properly with the sd-forge-couple extension.

## Problem Description

The sd-webui-lobe-theme extension was hiding UI elements that are essential for sd-forge-couple's advanced mode functionality. This was caused by:

1. The `useSelectorHide` hook aggressively hiding UI elements
2. Global CSS styles that could interfere with extension-specific elements
3. Lack of protection for extension-specific UI components

## Solution Overview

The compatibility fix consists of three main components:

### 1. Protected Selector System (`useSelectorHide.ts`)

Modified the `useSelectorHide` hook to check for protected elements before hiding them:

- Added a list of protected selectors for sd-forge-couple elements
- Implemented `isElementProtected()` function that checks:
  - The element itself for protected classes/IDs
  - Parent elements for protected classes/IDs
  - Child elements for protected classes/IDs
- Skips hiding elements that are protected

### 2. CSS Compatibility Rules (`extensions.ts`)

Added specific CSS rules to ensure sd-forge-couple elements remain visible:

- Force display/visibility for all forge-couple containers
- Ensure proper table display for the mapping interface
- Maintain absolute positioning for bounding boxes
- Guarantee button visibility and interaction

### 3. JavaScript Compatibility Script (`forge-couple-compatibility.js`)

Runtime protection against UI element hiding:

- Monitors DOM mutations for style changes
- Automatically restores visibility of forge-couple elements
- Provides periodic checks during initialization
- Includes cleanup mechanisms
- **Build Integration**: Automatically copied from `scripts/` to `javascript/` directory during build process

## Protected Elements

The following sd-forge-couple selectors are protected from being hidden:

- `#forge_couple_t2i` - Main txt2img container
- `#forge_couple_i2i` - Main img2img container
- `.fc_mapping` - Visual mapping container
- `.fc_mapping_btns` - Mapping control buttons
- `.fc_row_btns` - Row manipulation buttons
- `.fc_bg_btns` - Background image buttons
- `.fc_preview_img` - Preview image container
- `.fc_preview_res` - Preview resolution input
- `.fc_bbox` - Interactive bounding boxes
- `.fc_adv` - Advanced mode container
- `.fc_bsc` - Basic mode container
- `.fc_msk` - Mask mode container

## Features Preserved

This compatibility fix ensures the following sd-forge-couple features remain functional:

✅ **Visual Mapping Interface**

- Interactive rectangle creation and editing
- Draggable bounding boxes
- Row selection and highlighting

✅ **Control Buttons**

- Insert new rows (🆕 button)
- Delete selected rows (❌ button)
- Background image controls (📂, ⏏, 🗑 buttons)

✅ **Advanced Mode Features**

- Coordinate input/editing
- Weight adjustment (0.0-5.0 range)
- Prompt synchronization
- Preset save/load functionality

✅ **Visual Feedback**

- Bounding box highlighting
- Color-coded regions
- Real-time preview updates

## Testing

To verify the compatibility fix is working:

1. Enable both sd-webui-lobe-theme and sd-forge-couple extensions
2. Navigate to txt2img or img2img tab
3. Look for the "Forge Couple" section
4. Switch to "Advanced" mode
5. Verify all UI elements are visible and functional:
   - Mapping table with editable cells
   - Control buttons (🆕, ❌, 📂, ⏏, 🗑)
   - Interactive bounding boxes on preview image
   - Row selection and highlighting

## Troubleshooting

If sd-forge-couple elements are still not visible:

1. Check browser console for compatibility messages
2. Verify both extensions are properly loaded
3. Try refreshing the page
4. Check if other extensions might be interfering

## Build Process

The compatibility fix is integrated into the build process:

1. **Source Location**: The compatibility script is stored in `scripts/forge-couple-compatibility.js`
2. **Build Integration**: The `npm run build` command automatically copies the script to `javascript/`
3. **Auto-Loading**: WebUI automatically loads all JavaScript files from the `javascript/` directory
4. **Build-Safe**: The script survives build processes since it's copied after each build

### Manual Copy

If you need to manually copy the compatibility script:

```bash
npm run copy-compatibility
```

## Future Extensions

To add compatibility for other extensions, modify the `PROTECTED_SELECTORS` array in:

- `src/hooks/useSelectorHide.ts`
- `src/styles/components/extensions.ts`
- `scripts/forge-couple-compatibility.js` (source file)

Add the extension's specific CSS selectors to prevent them from being hidden by the lobe-theme.
