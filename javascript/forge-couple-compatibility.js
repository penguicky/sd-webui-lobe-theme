// Temporarily disable lobe-theme hiding during forge-couple setup
console.log('=== Fixing Lobe-Theme Interference ===');

// Store original useSelectorHide function
const originalHide = window.useSelectorHide || (() => {});

// Create a temporary override that doesn't hide forge-couple elements
window.useSelectorHideDisabled = true;

// Override any hiding mechanisms temporarily
const originalStyleSetter = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'style');
let isSettingDisplay = false;

// Temporarily prevent display:none on forge-couple related elements
Object.defineProperty(HTMLElement.prototype, 'style', {
  get: originalStyleSetter.get,
  set: function (value) {
    if (typeof value === 'string' && value.includes('display: none') && !isSettingDisplay) {
      // Check if this element is forge-couple related
      const isForgeElement =
        this.className.includes('fc_') ||
        this.innerHTML.includes('fc_') ||
        this.closest('[class*="fc_"]') !== null;

      if (isForgeElement) {
        console.log('Preventing hide of forge element during creation:', this);
        return; // Don't apply the style
      }
    }
    originalStyleSetter.set.call(this, value);
  },
});

// Force recreate the forge-couple interface
console.log('Forcing forge-couple recreation...');

// Try to trigger a full recreation by toggling the enable checkbox
const enableCheckboxes = document.querySelectorAll('input[type="checkbox"]');
enableCheckboxes.forEach((checkbox) => {
  if (checkbox.closest('#forge_couple_t2i, #forge_couple_i2i')) {
    console.log('Found forge-couple checkbox, toggling...');
    checkbox.checked = false;
    checkbox.dispatchEvent(new Event('change', { bubbles: true }));

    setTimeout(() => {
      checkbox.checked = true;
      checkbox.dispatchEvent(new Event('change', { bubbles: true }));
    }, 500);
  }
});

// Restore original behavior after a delay
setTimeout(() => {
  console.log('Restoring original style behavior...');
  Object.defineProperty(HTMLElement.prototype, 'style', originalStyleSetter);
  window.useSelectorHideDisabled = false;

  // Check results
  setTimeout(() => {
    console.log('Final check after restoration:');
    console.log('bg_btns elements:', document.querySelectorAll('.fc_bg_btns').length);
    console.log('bbox elements:', document.querySelectorAll('.fc_bbox').length);
  }, 1000);
}, 3000);
