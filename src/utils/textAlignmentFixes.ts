// Text alignment fixes for prompt highlighter across different browsers
import { debugLog, debugWarn } from '@/modules/PromptHighlight/utils/debug';

export interface BrowserInfo {
  isChrome: boolean;
  isEdge: boolean;
  isFirefox: boolean;
  isSafari: boolean;
  isWebkit: boolean;
  name: string;
  version: string;
}

export interface AlignmentAdjustments {
  cssProperties: Record<string, string>;
  offsetX: number;
  offsetY: number;
  subPixelX: number;
  subPixelY: number;
}

/**
 * Detect browser information for alignment adjustments
 */
export const detectBrowser = (): BrowserInfo => {
  const userAgent = navigator.userAgent.toLowerCase();
  
  const isFirefox = userAgent.includes('firefox');
  const isChrome = userAgent.includes('chrome') && !userAgent.includes('edge');
  const isSafari = userAgent.includes('safari') && !userAgent.includes('chrome');
  const isEdge = userAgent.includes('edge') || userAgent.includes('edg/');
  const isWebkit = userAgent.includes('webkit');
  
  let name = 'Unknown';
  let version = '';
  
  if (isFirefox) {
    name = 'Firefox';
    const match = userAgent.match(/firefox\/(\d+)/);
    version = match?.[1] || '';
  } else if (isChrome) {
    name = 'Chrome';
    const match = userAgent.match(/chrome\/(\d+)/);
    version = match?.[1] || '';
  } else if (isSafari) {
    name = 'Safari';
    const match = userAgent.match(/version\/(\d+)/);
    version = match?.[1] || '';
  } else if (isEdge) {
    name = 'Edge';
    const match = userAgent.match(/edg?\/(\d+)/);
    version = match?.[1] || '';
  }
  
  return {
    isChrome,
    isEdge,
    isFirefox,
    isSafari,
    isWebkit,
    name,
    version,
  };
};

/**
 * Get browser-specific alignment adjustments
 */
export const getBrowserAlignmentAdjustments = (browser: BrowserInfo): AlignmentAdjustments => {
  const baseAdjustments: AlignmentAdjustments = {
    cssProperties: {},
    offsetX: 0,
    offsetY: 0,
    subPixelX: 0,
    subPixelY: 0,
  };

  // Firefox-specific adjustments
  if (browser.isFirefox) {
    return {
      ...baseAdjustments,
      cssProperties: {
        'MozOsxFontSmoothing': 'grayscale',
        'scrollbar-width': 'none',
        'text-rendering': 'optimizeLegibility',
      },
      offsetY: -0.5,
    };
  }

  // Safari-specific adjustments
  if (browser.isSafari) {
    return {
      ...baseAdjustments,
      cssProperties: {
        'WebkitFontSmoothing': 'antialiased',
        'WebkitTextStroke': '0px transparent',
        'text-rendering': 'optimizeLegibility',
      },
      subPixelX: 0.5,
    };
  }

  // Edge-specific adjustments
  if (browser.isEdge) {
    return {
      ...baseAdjustments,
      cssProperties: {
        'font-smooth': 'always',
        'text-rendering': 'optimizeLegibility',
      },
      subPixelY: 0.25,
    };
  }

  // Chrome and other Webkit browsers
  if (browser.isChrome || browser.isWebkit) {
    return {
      ...baseAdjustments,
      cssProperties: {
        'WebkitFontSmoothing': 'antialiased',
        'text-rendering': 'optimizeLegibility',
      },
    };
  }

  return baseAdjustments;
};

/**
 * Apply alignment adjustments to highlighter containers
 */
export const applyAlignmentAdjustments = (adjustments: AlignmentAdjustments): void => {
  const containers = document.querySelectorAll('[data-code-type="hybrid-highlighter"]');
  
  containers.forEach((container) => {
    const element = container as HTMLElement;
    
    // Apply offset adjustments
    element.style.setProperty('--highlight-offset-x', `${adjustments.offsetX}px`);
    element.style.setProperty('--highlight-offset-y', `${adjustments.offsetY}px`);
    element.style.setProperty('--highlight-sub-pixel-x', `${adjustments.subPixelX}px`);
    element.style.setProperty('--highlight-sub-pixel-y', `${adjustments.subPixelY}px`);
    
    // Apply CSS properties
    Object.entries(adjustments.cssProperties).forEach(([property, value]) => {
      element.style.setProperty(property, value);
    });
  });
  
  debugLog(`🎯 Applied alignment adjustments:`, adjustments);
};

/**
 * Test alignment accuracy by measuring text metrics
 */
export const testAlignmentAccuracy = (): { accuracy: number; issues: string[] } => {
  const containers = document.querySelectorAll('[data-code-type="hybrid-highlighter"]');
  const issues: string[] = [];
  let totalAccuracy = 0;
  
  containers.forEach((container, index) => {
    const element = container as HTMLElement;
    const parentElement = element.parentElement;
    
    if (!parentElement) {
      issues.push(`Container ${index}: No parent element found`);
      return;
    }
    
    // Find the corresponding textarea
    const textarea = parentElement.querySelector('textarea') as HTMLTextAreaElement;
    if (!textarea) {
      issues.push(`Container ${index}: No textarea found`);
      return;
    }
    
    // Compare computed styles
    const containerStyle = window.getComputedStyle(element);
    const textareaStyle = window.getComputedStyle(textarea);
    
    const criticalProperties = [
      'fontSize',
      'fontFamily',
      'lineHeight',
      'letterSpacing',
      'wordSpacing',
      'paddingTop',
      'paddingLeft',
    ];
    
    let matchingProperties = 0;
    criticalProperties.forEach((prop) => {
      if (containerStyle.getPropertyValue(prop) === textareaStyle.getPropertyValue(prop)) {
        matchingProperties++;
      } else {
        issues.push(`Container ${index}: ${prop} mismatch - Container: ${containerStyle.getPropertyValue(prop)}, Textarea: ${textareaStyle.getPropertyValue(prop)}`);
      }
    });
    
    const accuracy = (matchingProperties / criticalProperties.length) * 100;
    totalAccuracy += accuracy;
    
    debugLog(`Container ${index} alignment accuracy: ${accuracy.toFixed(1)}%`);
  });
  
  const overallAccuracy = containers.length > 0 ? totalAccuracy / containers.length : 0;
  
  return {
    accuracy: overallAccuracy,
    issues,
  };
};

/**
 * Detect zoom level and apply zoom-specific adjustments
 */
export const detectZoomLevel = (): number => {
  // Using devicePixelRatio (most reliable method)
  const devicePixelRatio = window.devicePixelRatio || 1;

  // Use the most reliable method
  let zoomLevel = devicePixelRatio;

  // Adjust for common zoom levels
  if (Math.abs(zoomLevel - 1.25) < 0.1) zoomLevel = 1.25;
  else if (Math.abs(zoomLevel - 1.5) < 0.1) zoomLevel = 1.5;
  else if (Math.abs(zoomLevel - 1.75) < 0.1) zoomLevel = 1.75;
  else if (Math.abs(zoomLevel - 2) < 0.1) zoomLevel = 2;

  debugLog(`🔍 Detected zoom level: ${zoomLevel} (devicePixelRatio: ${devicePixelRatio})`);
  return zoomLevel;
};

/**
 * Get zoom-specific alignment adjustments
 */
export const getZoomAlignmentAdjustments = (zoomLevel: number): Partial<AlignmentAdjustments> => {
  if (zoomLevel <= 1) return {};

  // Adjust for common zoom levels
  const zoomAdjustments: Partial<AlignmentAdjustments> = {};

  if (zoomLevel >= 1.25) {
    zoomAdjustments.subPixelX = 0.25;
  }

  if (zoomLevel >= 1.5) {
    zoomAdjustments.subPixelY = 0.5;
  }

  if (zoomLevel >= 2) {
    zoomAdjustments.offsetX = 1;
    zoomAdjustments.offsetY = 1;
  }

  return zoomAdjustments;
};

/**
 * Auto-detect and fix alignment issues
 */
export const autoFixAlignment = (): void => {
  const browser = detectBrowser();
  const zoomLevel = detectZoomLevel();

  const browserAdjustments = getBrowserAlignmentAdjustments(browser);
  const zoomAdjustments = getZoomAlignmentAdjustments(zoomLevel);

  // Combine browser and zoom adjustments
  const finalAdjustments: AlignmentAdjustments = {
    ...browserAdjustments,
    cssProperties: {
      ...browserAdjustments.cssProperties,
      ...zoomAdjustments.cssProperties,
    },
    offsetX: (browserAdjustments.offsetX || 0) + (zoomAdjustments.offsetX || 0),
    offsetY: (browserAdjustments.offsetY || 0) + (zoomAdjustments.offsetY || 0),
    subPixelX: (browserAdjustments.subPixelX || 0) + (zoomAdjustments.subPixelX || 0),
    subPixelY: (browserAdjustments.subPixelY || 0) + (zoomAdjustments.subPixelY || 0),
  };

  debugLog(`🌐 Detected browser: ${browser.name} ${browser.version}`);
  debugLog(`🔍 Detected zoom level: ${zoomLevel}`);

  applyAlignmentAdjustments(finalAdjustments);

  // Test accuracy after applying fixes
  setTimeout(() => {
    const { accuracy, issues } = testAlignmentAccuracy();
    debugLog(`📊 Alignment accuracy after fixes: ${accuracy.toFixed(1)}%`);

    if (issues.length > 0) {
      debugWarn(`⚠️ Remaining alignment issues:`, issues);
    }
  }, 200);
};

// Make utilities globally available for debugging
if (typeof window !== 'undefined') {
  (window as any).detectBrowser = detectBrowser;
  (window as any).getBrowserAlignmentAdjustments = getBrowserAlignmentAdjustments;
  (window as any).applyAlignmentAdjustments = applyAlignmentAdjustments;
  (window as any).testAlignmentAccuracy = testAlignmentAccuracy;
  (window as any).detectZoomLevel = detectZoomLevel;
  (window as any).getZoomAlignmentAdjustments = getZoomAlignmentAdjustments;
  (window as any).autoFixAlignment = autoFixAlignment;
}
