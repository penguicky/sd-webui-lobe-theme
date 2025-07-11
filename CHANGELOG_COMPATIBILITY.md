# Changelog - sd-forge-couple Compatibility Fix

## [4.1.0] - 2025-07-11

### Added
- **Compatibility System**: Comprehensive compatibility layer for sd-forge-couple extension
- **Protected Selector System**: Smart element protection in `useSelectorHide` hook
- **CSS Compatibility Rules**: Explicit visibility rules for forge-couple UI components
- **Runtime Protection Script**: DOM mutation monitoring and automatic visibility restoration
- **Build Integration**: Automated script copying during build process
- **Documentation**: Complete compatibility guide (`FORGE_COUPLE_COMPATIBILITY.md`)
- **Test Suite**: Compatibility testing page (`test-compatibility.html`)

### Changed
- **useSelectorHide Hook** (`src/hooks/useSelectorHide.ts`):
  - Added `PROTECTED_SELECTORS` array for extension compatibility
  - Implemented `isElementProtected()` function with comprehensive checking
  - Added protection for elements, parents, and children
  - Included console logging for debugging protected elements

- **Extension Styles** (`src/styles/components/extensions.ts`):
  - Added forge-couple specific CSS compatibility rules
  - Force visibility with `!important` declarations for all forge-couple containers
  - Ensured proper table display modes for mapping interface
  - Maintained absolute positioning for interactive bounding boxes
  - Guaranteed button visibility and interaction

- **Build Process** (`package.json`):
  - Modified build script to include compatibility script copying
  - Added `copy-compatibility` npm script for manual execution
  - Integrated automatic script deployment in build pipeline

### Fixed
- **UI Element Hiding**: Resolved issue where lobe-theme was hiding essential forge-couple UI elements
- **Advanced Mode Functionality**: Restored full functionality of forge-couple's visual mapping interface
- **Interactive Components**: Fixed visibility of control buttons (🆕, ❌, 📂, ⏏, 🗑)
- **Bounding Box Display**: Ensured proper rendering of interactive rectangular masks
- **Build Persistence**: Compatibility script now survives build processes

### Technical Details

#### Protected Elements
The following sd-forge-couple selectors are now protected from being hidden:
- `#forge_couple_t2i`, `#forge_couple_i2i` - Main containers
- `.fc_mapping`, `.fc_mapping_btns` - Visual mapping interface
- `.fc_row_btns`, `.fc_bg_btns` - Control buttons
- `.fc_preview_img`, `.fc_preview_res` - Preview components
- `.fc_bbox`, `.fc_adv`, `.fc_bsc`, `.fc_msk` - Interactive elements

#### Implementation Architecture
1. **TypeScript/React Level**: Pre-emptive protection in UI component logic
2. **CSS Level**: Explicit styling rules with high specificity
3. **Runtime Level**: JavaScript monitoring and automatic restoration

#### Build Safety
- **Source Location**: `scripts/forge-couple-compatibility.js` (permanent)
- **Target Location**: `javascript/forge-couple-compatibility.js` (auto-loaded)
- **Build Integration**: Automatic copying via npm scripts
- **Manual Override**: `npm run copy-compatibility` available

### Migration Notes
- No breaking changes for existing functionality
- Automatic compatibility - no user action required
- Both extensions can be enabled simultaneously
- All existing lobe-theme features preserved

### Files Modified
- `src/hooks/useSelectorHide.ts` - Added protection system
- `src/styles/components/extensions.ts` - Added compatibility CSS
- `package.json` - Updated build process
- `javascript/main.js` - Rebuilt with new changes

### Files Added
- `scripts/forge-couple-compatibility.js` - Source compatibility script
- `javascript/forge-couple-compatibility.js` - Deployed compatibility script
- `FORGE_COUPLE_COMPATIBILITY.md` - Complete documentation
- `test-compatibility.html` - Testing interface

### Compatibility
- **WebUI**: Compatible with Forge WebUI and standard WebUI
- **Extensions**: Specifically tested with sd-forge-couple v1.x
- **Browsers**: All modern browsers supported
- **Build Tools**: Vite 7.x, Node.js 18+

### Future Extensibility
The compatibility system is designed to support additional extensions:
- Modify `PROTECTED_SELECTORS` arrays in source files
- Add extension-specific CSS rules to `extensions.ts`
- Update compatibility script with new selectors
- Follow the same three-layer protection approach

---

**Breaking Changes**: None
**Migration Required**: None - automatic compatibility
**Testing**: Verified with both extensions enabled simultaneously
