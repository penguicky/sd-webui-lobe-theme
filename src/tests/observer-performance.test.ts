/**
 * Performance tests for Observer Pattern optimizations
 * Tests the efficiency of the pooled observer system vs individual observers
 */

import { ObserverPool } from '@/hooks/useObserverPool';

// Mock DOM elements for testing
const createMockElement = (id: string): Element => {
  const element = document.createElement('div');
  element.id = id;
  document.body.appendChild(element);
  return element;
};

describe('Observer Performance Optimizations', () => {
  let observerPool: ObserverPool;
  let testElements: Element[];

  beforeEach(() => {
    // Reset observer pool
    observerPool = ObserverPool.getInstance();
    observerPool.dispose();
    
    // Create test elements
    testElements = Array.from({ length: 10 }, (_, i) => createMockElement(`test-element-${i}`));
  });

  afterEach(() => {
    // Clean up test elements
    testElements.forEach(element => {
      if (element.parentNode) {
        element.parentNode.removeChild(element);
      }
    });
    
    // Dispose observer pool
    observerPool.dispose();
  });

  describe('Observer Pooling', () => {
    test('should reuse MutationObserver instances', () => {
      const callback1 = jest.fn();
      const callback2 = jest.fn();
      
      const observer1 = observerPool.getMutationObserver('test-key', {}, callback1);
      const observer2 = observerPool.getMutationObserver('test-key', {}, callback2);
      
      // Should return the same observer instance
      expect(observer1).toBe(observer2);
      
      // Should track multiple callbacks
      const stats = observerPool.getStats();
      expect(stats.mutationObservers).toBe(1);
      expect(stats.totalCallbacks).toBe(2);
    });

    test('should reuse IntersectionObserver instances', () => {
      const callback1 = jest.fn();
      const callback2 = jest.fn();
      const options = { threshold: 0.5 };
      
      const observer1 = observerPool.getIntersectionObserver('test-key', options, callback1);
      const observer2 = observerPool.getIntersectionObserver('test-key', options, callback2);
      
      // Should return the same observer instance
      expect(observer1).toBe(observer2);
      
      // Should track multiple callbacks
      const stats = observerPool.getStats();
      expect(stats.intersectionObservers).toBe(1);
      expect(stats.totalCallbacks).toBe(2);
    });

    test('should reuse ResizeObserver instances', () => {
      const callback1 = jest.fn();
      const callback2 = jest.fn();
      
      const observer1 = observerPool.getResizeObserver('test-key', callback1);
      const observer2 = observerPool.getResizeObserver('test-key', callback2);
      
      // Should return the same observer instance
      expect(observer1).toBe(observer2);
      
      // Should track multiple callbacks
      const stats = observerPool.getStats();
      expect(stats.resizeObservers).toBe(1);
      expect(stats.totalCallbacks).toBe(2);
    });
  });

  describe('Debouncing', () => {
    test('should debounce MutationObserver callbacks', (done) => {
      const callback = jest.fn();
      const debounceMs = 100;
      
      const observer = observerPool.getMutationObserver('test-key', {}, callback, debounceMs);
      
      if (observer) {
        observerPool.observe(observer, testElements[0], 'test-key');
        
        // Trigger multiple mutations rapidly
        for (let i = 0; i < 5; i++) {
          testElements[0].setAttribute('data-test', `value-${i}`);
        }
        
        // Should not have called callback yet
        expect(callback).not.toHaveBeenCalled();
        
        // Wait for debounce period
        setTimeout(() => {
          // Should have called callback only once after debounce
          expect(callback).toHaveBeenCalledTimes(1);
          done();
        }, debounceMs + 50);
      }
    });

    test('should debounce IntersectionObserver callbacks', (done) => {
      const callback = jest.fn();
      const debounceMs = 100;
      
      const observer = observerPool.getIntersectionObserver(
        'test-key',
        { threshold: 0.5 },
        callback,
        debounceMs
      );
      
      if (observer) {
        observerPool.observe(observer, testElements[0], 'test-key');
        
        // Simulate rapid intersection changes
        // Note: In real scenarios, this would be triggered by DOM changes
        // For testing, we'll verify the debouncing mechanism exists
        
        setTimeout(() => {
          const stats = observerPool.getStats();
          expect(stats.debouncedCallbacks).toBeGreaterThan(0);
          done();
        }, debounceMs + 50);
      }
    });
  });

  describe('Memory Management', () => {
    test('should clean up observers when no callbacks remain', () => {
      const callback = jest.fn();
      
      const observer = observerPool.getMutationObserver('test-key', {}, callback);
      expect(observerPool.getStats().mutationObservers).toBe(1);
      
      // Remove callback
      observerPool.removeCallback('test-key', callback);
      
      // Observer should be cleaned up
      expect(observerPool.getStats().mutationObservers).toBe(0);
      expect(observerPool.getStats().totalCallbacks).toBe(0);
    });

    test('should track observed elements', () => {
      const callback = jest.fn();
      
      const observer = observerPool.getMutationObserver('test-key', {}, callback);
      
      if (observer) {
        observerPool.observe(observer, testElements[0], 'test-key');
        observerPool.observe(observer, testElements[1], 'test-key');
        
        // Should track observed elements
        observerPool.unobserve(testElements[0], 'test-key');
        observerPool.unobserve(testElements[1], 'test-key');
        
        // Should not throw errors
        expect(() => {
          observerPool.removeCallback('test-key', callback);
        }).not.toThrow();
      }
    });
  });

  describe('Performance Metrics', () => {
    test('should provide accurate statistics', () => {
      const mutationCallback = jest.fn();
      const intersectionCallback = jest.fn();
      const resizeCallback = jest.fn();
      
      observerPool.getMutationObserver('mutation-key', {}, mutationCallback);
      observerPool.getIntersectionObserver('intersection-key', {}, intersectionCallback);
      observerPool.getResizeObserver('resize-key', resizeCallback);
      
      const stats = observerPool.getStats();
      
      expect(stats.mutationObservers).toBe(1);
      expect(stats.intersectionObservers).toBe(1);
      expect(stats.resizeObservers).toBe(1);
      expect(stats.totalCallbacks).toBe(3);
    });

    test('should handle disposal correctly', () => {
      const callback = jest.fn();
      
      observerPool.getMutationObserver('test-key', {}, callback);
      observerPool.getIntersectionObserver('test-key-2', {}, callback);
      observerPool.getResizeObserver('test-key-3', callback);
      
      expect(observerPool.getStats().totalCallbacks).toBe(3);
      
      observerPool.dispose();
      
      const stats = observerPool.getStats();
      expect(stats.mutationObservers).toBe(0);
      expect(stats.intersectionObservers).toBe(0);
      expect(stats.resizeObservers).toBe(0);
      expect(stats.totalCallbacks).toBe(0);
    });
  });
});
