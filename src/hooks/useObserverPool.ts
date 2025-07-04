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
  private observerCallbacks = new Map<
    string,
    Set<MutationCallback | IntersectionObserverCallback>
  >();
  private observedElements = new WeakMap<Element, Set<string>>();

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
    callbacks.add(callback);

    return this.intersectionObservers.get(key)!;
  }

  // Observe an element with a specific observer
  observe(
    observer: MutationObserver | IntersectionObserver | null,
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
  removeCallback(key: string, callback: MutationCallback | IntersectionObserverCallback): void {
    const callbacks = this.observerCallbacks.get(key);
    if (callbacks) {
      callbacks.delete(callback);

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

    if (mutationObserver) {
      mutationObserver.disconnect();
      this.mutationObservers.delete(key);
    }

    if (intersectionObserver) {
      intersectionObserver.disconnect();
      this.intersectionObservers.delete(key);
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
      intersectionObservers: this.intersectionObservers.size,
      mutationObservers: this.mutationObservers.size,
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

    this.mutationObservers.clear();
    this.intersectionObservers.clear();
    this.observerCallbacks.clear();
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
) => {
  const defaultOptions: MutationObserverInit = { attributes: true, childList: true, subtree: true };
  const callbackRef = useRef(callback);
  const observerKey = key || `mutation-${Math.random().toString(36).slice(2, 11)}`;

  // Update callback ref
  callbackRef.current = callback;

  useEffect(() => {
    if (!element) return;

    const finalOptions = options || defaultOptions;
    const observer = observerPool.getMutationObserver(
      observerKey,
      finalOptions,
      callbackRef.current,
    );

    if (observer) {
      observerPool.observe(observer, element, observerKey, finalOptions);
    }

    return () => {
      observerPool.removeCallback(observerKey, callbackRef.current);
      observerPool.unobserve(element, observerKey);
    };
  }, [element, observerKey, options, defaultOptions]);
};

// Hook for using pooled IntersectionObserver
export const usePooledIntersectionObserver = (
  element: Element | null,
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit,
  key?: string,
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
    );

    if (observer) {
      observerPool.observe(observer, element, observerKey);
    }

    return () => {
      observerPool.removeCallback(observerKey, callbackRef.current);
      observerPool.unobserve(element, observerKey);
    };
  }, [element, observerKey, options, defaultOptions]);
};

// Export pool for advanced usage
export { observerPool };
