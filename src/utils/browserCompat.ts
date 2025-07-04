// Browser compatibility utilities
import { debugLog, debugWarn } from '@/modules/PromptHighlight/utils/debug';

/**
 * Check if Wake Lock API is supported
 */
export const isWakeLockSupported = (): boolean => {
  try {
    return 'wakeLock' in navigator && 'request' in navigator.wakeLock;
  } catch {
    return false;
  }
};

/**
 * Safely request wake lock with feature detection
 */
export const requestWakeLock = async (): Promise<WakeLockSentinel | null> => {
  if (!isWakeLockSupported()) {
    debugWarn('⚠️ Wake Lock API is not supported in this browser');
    return null;
  }

  try {
    const wakeLock = await navigator.wakeLock.request('screen');
    debugLog('🔒 Wake lock acquired successfully');
    return wakeLock;
  } catch (error) {
    debugWarn('⚠️ Failed to acquire wake lock:', error);
    return null;
  }
};

/**
 * Safely release wake lock
 */
export const releaseWakeLock = async (wakeLock: WakeLockSentinel | null): Promise<void> => {
  if (!wakeLock) return;

  try {
    await wakeLock.release();
    debugLog('🔓 Wake lock released successfully');
  } catch (error) {
    debugWarn('⚠️ Failed to release wake lock:', error);
  }
};

/**
 * Check if Intersection Observer is supported
 */
export const isIntersectionObserverSupported = (): boolean => {
  return typeof IntersectionObserver !== 'undefined';
};

/**
 * Check if MutationObserver is supported
 */
export const isMutationObserverSupported = (): boolean => {
  return typeof MutationObserver !== 'undefined';
};

/**
 * Check if Performance API is supported
 */
export const isPerformanceAPISupported = (): boolean => {
  return typeof performance !== 'undefined' && typeof performance.now === 'function';
};

/**
 * Check if localStorage is supported and accessible
 */
export const isLocalStorageSupported = (): boolean => {
  try {
    const testKey = '__test_localStorage__';
    localStorage.setItem(testKey, 'test');
    localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
};

/**
 * Get browser compatibility report
 */
export const getBrowserCompatibilityReport = () => {
  const report = {
    intersectionObserver: isIntersectionObserverSupported(),
    localStorage: isLocalStorageSupported(),
    mutationObserver: isMutationObserverSupported(),
    performanceAPI: isPerformanceAPISupported(),
    wakeLock: isWakeLockSupported(),
  };

  debugLog('🌐 Browser compatibility report:', report);
  return report;
};
