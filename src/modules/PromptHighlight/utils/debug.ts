// src/modules/PromptHighlight/utils/debug.ts
// Shared debug system for all highlight components

// =============================================================================
// CENTRALIZED DEBUG SYSTEM
// =============================================================================

// Global debug state - modify this to control ALL highlight debug messages
let HIGHLIGHT_DEBUG_ENABLED = false;

// Store the state globally so all modules can access it
if (typeof window !== 'undefined') {
  (window as any).HIGHLIGHT_DEBUG_STATE = {
    enabled: HIGHLIGHT_DEBUG_ENABLED,
    get: () => HIGHLIGHT_DEBUG_ENABLED,
    set: (value: boolean) => {
      HIGHLIGHT_DEBUG_ENABLED = value;
      (window as any).HIGHLIGHT_DEBUG_STATE.enabled = value;
    },
  };
}

// Debug utility functions that check the global state
export const debugLog = (message: string, ...args: any[]) => {
  if (process.env.NODE_ENV === 'development' && HIGHLIGHT_DEBUG_ENABLED) {
    console.log(message, ...args);
  }
};

export const debugWarn = (message: string, ...args: any[]) => {
  if (process.env.NODE_ENV === 'development' && HIGHLIGHT_DEBUG_ENABLED) {
    console.warn(message, ...args);
  }
};

export const debugError = (message: string, ...args: any[]) => {
  if (process.env.NODE_ENV === 'development' && HIGHLIGHT_DEBUG_ENABLED) {
    console.error(message, ...args);
  }
};

// Get current debug state
export const isDebugEnabled = (): boolean => {
  return HIGHLIGHT_DEBUG_ENABLED;
};

// Control functions
export const enableHighlightDebug = () => {
  HIGHLIGHT_DEBUG_ENABLED = true;
  if (typeof window !== 'undefined') {
    (window as any).HIGHLIGHT_DEBUG_STATE?.set(true);
  }
  console.log('🔧 Highlight debugging ENABLED');
  console.log('🔇 Use disableHighlightDebug() to turn off');
};

export const disableHighlightDebug = () => {
  HIGHLIGHT_DEBUG_ENABLED = false;
  if (typeof window !== 'undefined') {
    (window as any).HIGHLIGHT_DEBUG_STATE?.set(false);
  }
  console.log('🔇 Highlight debugging DISABLED');
  console.log('🔧 Use enableHighlightDebug() to turn on');
};

export const toggleHighlightDebug = () => {
  HIGHLIGHT_DEBUG_ENABLED = !HIGHLIGHT_DEBUG_ENABLED;
  if (typeof window !== 'undefined') {
    (window as any).HIGHLIGHT_DEBUG_STATE?.set(HIGHLIGHT_DEBUG_ENABLED);
  }
  console.log(`🔄 Highlight debugging ${HIGHLIGHT_DEBUG_ENABLED ? 'ENABLED' : 'DISABLED'}`);
  console.log(`💡 Current state: ${HIGHLIGHT_DEBUG_ENABLED ? 'ON' : 'OFF'}`);
};

// Initialize global functions
if (typeof window !== 'undefined') {
  (window as any).enableHighlightDebug = enableHighlightDebug;
  (window as any).disableHighlightDebug = disableHighlightDebug;
  (window as any).toggleHighlightDebug = toggleHighlightDebug;

  // Add a status check function
  (window as any).checkHighlightDebugStatus = () => {
    console.log(
      `🔍 Highlight debugging is currently: ${HIGHLIGHT_DEBUG_ENABLED ? '🟢 ENABLED' : '🔴 DISABLED'}`,
    );
    return HIGHLIGHT_DEBUG_ENABLED;
  };
}
