import { debugError, debugWarn } from '@/modules/PromptHighlight/utils/debug';

// =============================================================================
// SAFE DOM OPERATION UTILITIES
// =============================================================================

export interface SafeDomOptions {
  fallback?: () => void;
  onError?: (error: Error) => void;
  retries?: number;
  timeout?: number;
}

// =============================================================================
// SAFE ELEMENT SELECTION
// =============================================================================

/**
 * Safely query a single element with error handling and retries
 */
export const safeQuerySelector = <T extends Element = Element>(
  selector: string,
  parent: Document | Element = document,
  options: SafeDomOptions = {},
): T | null => {
  const { retries = 0, onError } = options;

  try {
    const element = parent.querySelector<T>(selector);
    return element;
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    debugWarn(`🚨 safeQuerySelector failed for "${selector}":`, err.message);
    onError?.(err);

    // Retry if specified
    if (retries > 0) {
      return safeQuerySelector<T>(selector, parent, { ...options, retries: retries - 1 });
    }

    return null;
  }
};

/**
 * Safely query multiple elements with error handling
 */
export const safeQuerySelectorAll = <T extends Element = Element>(
  selector: string,
  parent: Document | Element = document,
  options: SafeDomOptions = {},
): T[] => {
  const { onError } = options;

  try {
    const elements = Array.from(parent.querySelectorAll<T>(selector));
    return elements;
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    debugWarn(`🚨 safeQuerySelectorAll failed for "${selector}":`, err.message);
    onError?.(err);
    return [];
  }
};

// =============================================================================
// SAFE ELEMENT MANIPULATION
// =============================================================================

/**
 * Safely set element properties with validation
 */
export const safeSetProperty = (
  element: Element | null,
  property: string,
  value: any,
  options: SafeDomOptions = {},
): boolean => {
  const { onError } = options;

  if (!element) {
    debugWarn(`🚨 safeSetProperty: Element is null for property "${property}"`);
    return false;
  }

  try {
    (element as any)[property] = value;
    return true;
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    debugWarn(`🚨 safeSetProperty failed for "${property}":`, err.message);
    onError?.(err);
    return false;
  }
};

/**
 * Safely set element attributes with validation
 */
export const safeSetAttribute = (
  element: Element | null,
  attribute: string,
  value: string,
  options: SafeDomOptions = {},
): boolean => {
  const { onError } = options;

  if (!element) {
    debugWarn(`🚨 safeSetAttribute: Element is null for attribute "${attribute}"`);
    return false;
  }

  try {
    element.setAttribute(attribute, value);
    return true;
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    debugWarn(`🚨 safeSetAttribute failed for "${attribute}":`, err.message);
    onError?.(err);
    return false;
  }
};

/**
 * Safely append child elements with validation
 */
export const safeAppendChild = (
  parent: Element | null,
  child: Element | null,
  options: SafeDomOptions = {},
): boolean => {
  const { onError } = options;

  if (!parent || !child) {
    debugWarn('🚨 safeAppendChild: Parent or child element is null');
    return false;
  }

  try {
    parent.append(child);
    return true;
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    debugWarn('🚨 safeAppendChild failed:', err.message);
    onError?.(err);
    return false;
  }
};

/**
 * Safely remove element with validation
 */
export const safeRemoveElement = (
  element: Element | null,
  options: SafeDomOptions = {},
): boolean => {
  const { onError } = options;

  if (!element) {
    debugWarn('🚨 safeRemoveElement: Element is null');
    return false;
  }

  try {
    element.remove();
    return true;
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    debugWarn('🚨 safeRemoveElement failed:', err.message);
    onError?.(err);
    return false;
  }
};

// =============================================================================
// SAFE EVENT HANDLING
// =============================================================================

/**
 * Safely add event listeners with automatic cleanup
 */
export const safeAddEventListener = <K extends keyof HTMLElementEventMap>(
  element: Element | null,
  type: K,
  listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
  options: AddEventListenerOptions & SafeDomOptions = {},
): (() => void) | null => {
  const { onError, ...eventOptions } = options;

  if (!element) {
    debugWarn(`🚨 safeAddEventListener: Element is null for event "${type}"`);
    return null;
  }

  try {
    element.addEventListener(type, listener as EventListener, eventOptions);

    // Return cleanup function
    return () => {
      try {
        element.removeEventListener(type, listener as EventListener, eventOptions);
      } catch (cleanupError) {
        debugWarn(`🚨 Event listener cleanup failed for "${type}":`, cleanupError);
      }
    };
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    debugWarn(`🚨 safeAddEventListener failed for "${type}":`, err.message);
    onError?.(err);
    return null;
  }
};

// =============================================================================
// SAFE ASYNC DOM OPERATIONS
// =============================================================================

/**
 * Wait for element to exist with timeout and retries
 */
export const waitForElement = <T extends Element = Element>(
  selector: string,
  parent: Document | Element = document,
  options: SafeDomOptions & { interval?: number } = {},
): Promise<T | null> => {
  const { timeout = 5000, interval = 100, retries = 0, onError } = options;

  return new Promise((resolve) => {
    let attempts = 0;
    const maxAttempts = Math.ceil(timeout / interval);

    const checkElement = () => {
      try {
        const element = parent.querySelector<T>(selector);
        if (element) {
          resolve(element);
          return;
        }

        attempts++;
        if (attempts >= maxAttempts) {
          debugWarn(`🚨 waitForElement timeout for "${selector}" after ${timeout}ms`);

          // Try retries if specified
          if (retries > 0) {
            waitForElement<T>(selector, parent, { ...options, retries: retries - 1 }).then(resolve);
            return;
          }

          resolve(null);
          return;
        }

        setTimeout(checkElement, interval);
      } catch (error) {
        const err = error instanceof Error ? error : new Error(String(error));
        debugWarn(`🚨 waitForElement error for "${selector}":`, err.message);
        onError?.(err);
        resolve(null);
      }
    };

    checkElement();
  });
};

/**
 * Safely execute DOM operations with error boundaries
 */
export const safeDomOperation = async <T>(
  operation: () => T | Promise<T>,
  options: SafeDomOptions = {},
): Promise<T | null> => {
  const { retries = 0, timeout = 5000, fallback, onError } = options;

  try {
    // Handle both sync and async operations
    const result = await Promise.race([
      Promise.resolve(operation()),
      new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error('Operation timeout')), timeout);
      }),
    ]);

    return result;
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    debugError('🚨 safeDomOperation failed:', err.message);
    onError?.(err);

    // Execute fallback if provided
    fallback?.();

    // Retry if specified
    if (retries > 0) {
      debugWarn(`🔄 Retrying DOM operation (${retries} attempts remaining)`);
      return safeDomOperation(operation, { ...options, retries: retries - 1 });
    }

    return null;
  }
};

// =============================================================================
// GRADIO-SPECIFIC SAFE OPERATIONS
// =============================================================================

/**
 * Safely get gradio app element
 */
export const safeGradioApp = (): Element | null => {
  return safeQuerySelector('gradio-app') || safeQuerySelector('#root') || document.body;
};

/**
 * Safely get current UI tab content
 */
export const safeGetUiCurrentTabContent = (): Element | null => {
  try {
    // Try the global function first if available
    if (typeof get_uiCurrentTabContent === 'function') {
      return get_uiCurrentTabContent();
    }
  } catch {
    debugWarn('🚨 get_uiCurrentTabContent not available, using fallback');
  }

  // Fallback to manual selection
  return (
    safeQuerySelector('.tab-content:not([style*="display: none"])') ||
    safeQuerySelector('.tab-content') ||
    safeGradioApp()
  );
};

export default {
  safeAddEventListener,
  safeAppendChild,
  safeDomOperation,
  safeGetUiCurrentTabContent,
  safeGradioApp,
  safeQuerySelector,
  safeQuerySelectorAll,
  safeRemoveElement,
  safeSetAttribute,
  safeSetProperty,
  waitForElement,
};
