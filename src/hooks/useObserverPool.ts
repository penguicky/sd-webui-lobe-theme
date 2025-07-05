import { useEffect, useRef } from 'react';

import {
  isIntersectionObserverSupported,
  isMutationObserverSupported,
} from '@/utils/browserCompat';

// Observer pool to prevent memory leaks and improve performance
class ObserverPool {
  private static instance: ObserverPool | null = null;
  private mutationObservers = new Map<string, MutationObserver>();
  private intersectionObservers = new Map<string, IntersectionObserver>();
  private resizeObservers = new Map<string, ResizeObserver>();
  private observerCallbacks = new Map<
    string,
    Set<MutationCallback | IntersectionObserverCallback | ResizeObserverCallback>
  >();
  private observedElements = new WeakMap<Element, Set<string>>();
  private debouncedCallbacks = new Map<string, Map<(..._args: any[]) => void, (..._args: any[]) => void>>();

  static getInstance(): ObserverPool {
    if (!ObserverPool.instance) {
      ObserverPool.instance = new ObserverPool();
    }
    return ObserverPool.instance;
  }

  // Create or reuse a MutationObserver
  getMutationObserver(
    key: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _options: MutationObserverInit,
    callback: MutationCallback,
  ): MutationObserver | null {
    if (!isMutationObserverSupported()) {
      console.warn('⚠️ MutationObserver is not supported in this browser');
      return null;
    }

    if (!this.mutationObservers.has(key)) {
      const observer = new MutationObserver((mutations, observer) => {
        const callbacks = this.observerCallbacks.get(key);
        if (callbacks) {
          callbacks.forEach((cb) => {
            try {
              (cb as MutationCallback)(mutations, observer);
            } catch (error) {
              console.warn('Observer callback error:', error);
            }
          });
        }
      });
      this.mutationObservers.set(key, observer);
      this.observerCallbacks.set(key, new Set());
    }

    const callbacks = this.observerCallbacks.get(key)!;
    callbacks.add(callback);

    return this.mutationObservers.get(key)!;
  }

  // Create or reuse an IntersectionObserver
  getIntersectionObserver(
    key: string,
    options: IntersectionObserverInit,
    callback: IntersectionObserverCallback,
    debounceMs?: number,
  ): IntersectionObserver | null {
    if (!isIntersectionObserverSupported()) {
      console.warn('⚠️ IntersectionObserver is not supported in this browser');
      return null;
    }

    if (!this.intersectionObservers.has(key)) {
      const observer = new IntersectionObserver((entries, observer) => {
        const callbacks = this.observerCallbacks.get(key);
        if (callbacks) {
          callbacks.forEach((cb) => {
            try {
              (cb as IntersectionObserverCallback)(entries, observer);
            } catch (error) {
              console.warn('Observer callback error:', error);
            }
          });
        }
      }, options);
      this.intersectionObservers.set(key, observer);
      this.observerCallbacks.set(key, new Set());
    }

    const callbacks = this.observerCallbacks.get(key)!;

    // Add debouncing if requested
    if (debounceMs && debounceMs > 0) {
      const debouncedCallback = this.getDebouncedCallback(key, callback, debounceMs);
      callbacks.add(debouncedCallback as IntersectionObserverCallback);
    } else {
      callbacks.add(callback);
    }

    return this.intersectionObservers.get(key)!;
  }

  // Create or reuse a ResizeObserver
  getResizeObserver(
    key: string,
    callback: ResizeObserverCallback,
    debounceMs?: number,
  ): ResizeObserver | null {
    if (!('ResizeObserver' in window)) {
      console.warn('⚠️ ResizeObserver is not supported in this browser');
      return null;
    }

    if (!this.resizeObservers.has(key)) {
      const observer = new ResizeObserver((entries, observer) => {
        const callbacks = this.observerCallbacks.get(key);
        if (callbacks) {
          callbacks.forEach((cb) => {
            try {
              (cb as ResizeObserverCallback)(entries, observer);
            } catch (error) {
              console.warn('Observer callback error:', error);
            }
          });
        }
      });
      this.resizeObservers.set(key, observer);
      this.observerCallbacks.set(key, new Set());
    }

    const callbacks = this.observerCallbacks.get(key)!;

    // Add debouncing if requested
    if (debounceMs && debounceMs > 0) {
      const debouncedCallback = this.getDebouncedCallback(key, callback, debounceMs);
      callbacks.add(debouncedCallback as ResizeObserverCallback);
    } else {
      callbacks.add(callback);
    }

    return this.resizeObservers.get(key)!;
  }

  // Helper method to create debounced callbacks
  getDebouncedCallback(key: string, callback: (..._args: any[]) => void, debounceMs: number): (..._args: any[]) => void {
    if (!this.debouncedCallbacks.has(key)) {
      this.debouncedCallbacks.set(key, new Map());
    }

    const keyCallbacks = this.debouncedCallbacks.get(key)!;

    if (!keyCallbacks.has(callback)) {
      let timeoutId: NodeJS.Timeout;
      const debouncedFn = (...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => callback(...args), debounceMs);
      };
      keyCallbacks.set(callback, debouncedFn);
    }

    return keyCallbacks.get(callback)!;
  }

  // Observe an element with a specific observer
  observe(
    observer: MutationObserver | IntersectionObserver | ResizeObserver | null,
    element: Element,
    key: string,
    options?: MutationObserverInit,
  ): void {
    if (!observer) {
      console.warn('⚠️ Cannot observe element: observer is null (browser compatibility issue)');
      return;
    }

    if (observer instanceof MutationObserver) {
      observer.observe(element, options);
    } else {
      observer.observe(element);
    }

    // Track which elements are being observed by which keys
    if (!this.observedElements.has(element)) {
      this.observedElements.set(element, new Set());
    }
    this.observedElements.get(element)!.add(key);
  }

  // Remove a callback from an observer
  removeCallback(key: string, callback: MutationCallback | IntersectionObserverCallback | ResizeObserverCallback): void {
    const callbacks = this.observerCallbacks.get(key);
    if (callbacks) {
      // Remove both original and debounced callbacks
      callbacks.delete(callback);

      // Clean up debounced callback if it exists
      const keyCallbacks = this.debouncedCallbacks.get(key);
      if (keyCallbacks && keyCallbacks.has(callback)) {
        const debouncedCallback = keyCallbacks.get(callback);
        callbacks.delete(debouncedCallback as any);
        keyCallbacks.delete(callback);

        if (keyCallbacks.size === 0) {
          this.debouncedCallbacks.delete(key);
        }
      }

      // If no more callbacks, clean up the observer
      if (callbacks.size === 0) {
        this.cleanupObserver(key);
      }
    }
  }

  // Clean up an observer when no longer needed
  private cleanupObserver(key: string): void {
    const mutationObserver = this.mutationObservers.get(key);
    const intersectionObserver = this.intersectionObservers.get(key);
    const resizeObserver = this.resizeObservers.get(key);

    if (mutationObserver) {
      mutationObserver.disconnect();
      this.mutationObservers.delete(key);
    }

    if (intersectionObserver) {
      intersectionObserver.disconnect();
      this.intersectionObservers.delete(key);
    }

    if (resizeObserver) {
      resizeObserver.disconnect();
      this.resizeObservers.delete(key);
    }

    this.observerCallbacks.delete(key);
  }

  // Unobserve an element
  unobserve(element: Element, key: string): void {
    const observerKeys = this.observedElements.get(element);
    if (observerKeys) {
      observerKeys.delete(key);

      if (observerKeys.size === 0) {
        this.observedElements.delete(element);
      }
    }

    // Unobserve from the specific observer
    const mutationObserver = this.mutationObservers.get(key);
    const intersectionObserver = this.intersectionObservers.get(key);

    if (mutationObserver) {
      mutationObserver.disconnect();
      // Re-observe other elements if needed
      this.reobserveOtherElements(key, mutationObserver);
    }

    if (intersectionObserver) {
      intersectionObserver.unobserve(element);
    }
  }

  // Re-observe other elements after disconnecting
  // Note: WeakMap doesn't support iteration, so we'll need to track elements differently
  // For now, we'll disconnect and let the hooks re-establish observers as needed
  private reobserveOtherElements(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _key: string,
    observer: MutationObserver,
  ): void {
    // WeakMap doesn't support iteration, so we can't re-observe other elements
    // The hooks will re-establish observers as needed when elements are accessed
    observer.disconnect();
  }

  // Get statistics for debugging
  getStats() {
    return {
      debouncedCallbacks: this.debouncedCallbacks.size,
      intersectionObservers: this.intersectionObservers.size,
      mutationObservers: this.mutationObservers.size,
      resizeObservers: this.resizeObservers.size,
      totalCallbacks: Array.from(this.observerCallbacks.values()).reduce(
        (sum, set) => sum + set.size,
        0,
      ),
    };
  }

  // Clean up all observers (for testing or emergency cleanup)
  dispose(): void {
    this.mutationObservers.forEach((observer) => observer.disconnect());
    this.intersectionObservers.forEach((observer) => observer.disconnect());
    this.resizeObservers.forEach((observer) => observer.disconnect());

    this.mutationObservers.clear();
    this.intersectionObservers.clear();
    this.resizeObservers.clear();
    this.observerCallbacks.clear();
    this.debouncedCallbacks.clear();
    // WeakMap doesn't need manual clearing
  }
}

// Global observer pool instance
const observerPool = ObserverPool.getInstance();

// Hook for using pooled MutationObserver
export const usePooledMutationObserver = (
  element: Element | null,
  callback: MutationCallback,
  options?: MutationObserverInit,
  key?: string,
  debounceMs?: number,
) => {
  const defaultOptions: MutationObserverInit = { attributes: true, childList: true, subtree: true };
  const callbackRef = useRef(callback);
  const observerKey = key || `mutation-${Math.random().toString(36).slice(2, 11)}`;

  // Update callback ref
  callbackRef.current = callback;

  useEffect(() => {
    if (!element) return;

    const finalOptions = options || defaultOptions;

    // Apply debouncing if requested
    const finalCallback = debounceMs && debounceMs > 0
      ? observerPool.getDebouncedCallback(observerKey, callbackRef.current, debounceMs) as MutationCallback
      : callbackRef.current;

    const observer = observerPool.getMutationObserver(
      observerKey,
      finalOptions,
      finalCallback,
    );

    if (observer) {
      observerPool.observe(observer, element, observerKey, finalOptions);
    }

    return () => {
      observerPool.removeCallback(observerKey, finalCallback);
      observerPool.unobserve(element, observerKey);
    };
  }, [element, observerKey, options, defaultOptions, debounceMs]);
};

// Hook for using pooled IntersectionObserver
export const usePooledIntersectionObserver = (
  element: Element | null,
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit,
  key?: string,
  debounceMs?: number,
) => {
  const defaultOptions: IntersectionObserverInit = { threshold: 0.1 };
  const callbackRef = useRef(callback);
  const observerKey = key || `intersection-${Math.random().toString(36).slice(2, 11)}`;

  // Update callback ref
  callbackRef.current = callback;

  useEffect(() => {
    if (!element) return;

    const finalOptions = options || defaultOptions;
    const observer = observerPool.getIntersectionObserver(
      observerKey,
      finalOptions,
      callbackRef.current,
      debounceMs,
    );

    if (observer) {
      observerPool.observe(observer, element, observerKey);
    }

    return () => {
      observerPool.removeCallback(observerKey, callbackRef.current);
      observerPool.unobserve(element, observerKey);
    };
  }, [element, observerKey, options, defaultOptions, debounceMs]);
};

// Hook for using pooled ResizeObserver
export const usePooledResizeObserver = (
  element: Element | null,
  callback: ResizeObserverCallback,
  key?: string,
  debounceMs?: number,
) => {
  const callbackRef = useRef(callback);
  const observerKey = key || `resize-${Math.random().toString(36).slice(2, 11)}`;

  // Update callback ref
  callbackRef.current = callback;

  useEffect(() => {
    if (!element) return;

    const observer = observerPool.getResizeObserver(
      observerKey,
      callbackRef.current,
      debounceMs,
    );

    if (observer) {
      observerPool.observe(observer, element, observerKey);
    }

    return () => {
      observerPool.removeCallback(observerKey, callbackRef.current);
      observerPool.unobserve(element, observerKey);
    };
  }, [element, observerKey, debounceMs]);
};

// Export pool for advanced usage
export { observerPool };
