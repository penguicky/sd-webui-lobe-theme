import { Skeleton } from 'antd';
import { type ComponentType, type ReactNode, Suspense, memo, useEffect, useState } from 'react';

import { trackChunkLoad } from '@/utils/lazyOptimized';
import { getMemoryManager } from '@/utils/memoryManagement';

interface ProgressiveLoaderProps {
  // Chunk name for tracking
  chunkName?: string;
  // Component to load
  component: () => Promise<{ default: ComponentType<any> }>;
  // Props to pass to the loaded component
  componentProps?: Record<string, any>;
  // Error fallback
  errorFallback?: ReactNode;
  // Fallback component while loading
  fallback?: ReactNode;
  // Minimum loading time to prevent flash
  minLoadingTime?: number;
  // Loading strategy
  strategy?: 'immediate' | 'visible' | 'interaction' | 'idle';
}

/**
 * Progressive loader with multiple loading strategies
 * Phase 2: Advanced lazy loading implementation
 */
export const ProgressiveLoader = memo<ProgressiveLoaderProps>(({
  component,
  fallback,
  errorFallback,
  strategy = 'immediate',
  chunkName = 'unknown',
  componentProps = {},
  minLoadingTime = 200,
}) => {
  const [shouldLoad, setShouldLoad] = useState(strategy === 'immediate');
  const [isLoading, setIsLoading] = useState(false);
  const [LoadedComponent, setLoadedComponent] = useState<ComponentType<any> | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loadStartTime, setLoadStartTime] = useState<number | null>(null);

  // Intersection Observer for 'visible' strategy
  useEffect(() => {
    if (strategy !== 'visible' || shouldLoad) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    // Create a placeholder element to observe
    const placeholder = document.createElement('div');
    placeholder.style.height = '1px';
    document.body.append(placeholder);
    observer.observe(placeholder);

    return () => {
      observer.disconnect();
      placeholder.remove();
    };
  }, [strategy, shouldLoad]);

  // Idle loading strategy
  useEffect(() => {
    if (strategy !== 'idle' || shouldLoad) return;

    const idleCallback = () => {
      setShouldLoad(true);
    };

    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(idleCallback, { timeout: 5000 });
      return () => {
        cancelIdleCallback(id);
      };
    } else {
      // Fallback for browsers without requestIdleCallback
      const timeout = setTimeout(idleCallback, 2000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [strategy, shouldLoad]);

  // Interaction-based loading
  useEffect(() => {
    if (strategy !== 'interaction' || shouldLoad) return;

    const handleInteraction = () => {
      setShouldLoad(true);
    };

    const events = ['mouseenter', 'focus', 'touchstart', 'click'];
    events.forEach(event => {
      document.addEventListener(event, handleInteraction, { once: true, passive: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleInteraction);
      });
    };
  }, [strategy, shouldLoad]);

  // Load component when shouldLoad becomes true
  useEffect(() => {
    if (!shouldLoad || LoadedComponent || isLoading) return;

    setIsLoading(true);
    setLoadStartTime(Date.now());
    setError(null);

    const loadComponent = async () => {
      try {
        const result = await trackChunkLoad(chunkName, component);

        // Ensure minimum loading time to prevent flash
        const loadTime = Date.now() - (loadStartTime || 0);
        if (loadTime < minLoadingTime) {
          await new Promise(resolve => {
            setTimeout(() => {
              resolve(undefined);
            }, minLoadingTime - loadTime);
          });
        }

        // Phase 3: Register component with memory manager
        const memoryManager = getMemoryManager();
        if (memoryManager) {
          const estimatedSize = strategy === 'immediate' ? 100 : 50; // Immediate components likely larger
          memoryManager.registerComponent(chunkName, result.default, estimatedSize);
        }

        // Track progressive loading metrics
        window.dispatchEvent(new CustomEvent('progressive-component-loaded', {
          detail: {
            componentName: chunkName,
            loadTime: Date.now() - (loadStartTime || 0),
            strategy,
          }
        }));

        setLoadedComponent(() => result.default);
      } catch (error_) {
        setError(error_ instanceof Error ? error_ : new Error('Failed to load component'));
      } finally {
        setIsLoading(false);
      }
    };

    loadComponent();
  }, [shouldLoad, LoadedComponent, isLoading, component, chunkName, minLoadingTime, loadStartTime]);

  // Error state
  if (error) {
    return (
      <div style={{ color: '#ff4d4f', padding: '16px', textAlign: 'center' }}>
        {errorFallback || (
          <div>
            <div>Failed to load component</div>
            <button
              onClick={() => {
                setError(null);
                setShouldLoad(true);
              }}
              style={{ marginTop: '8px', padding: '4px 8px' }}
              type="button"
            >
              Retry
            </button>
          </div>
        )}
      </div>
    );
  }

  // Loading state
  if (isLoading || !LoadedComponent) {
    return (
      <div>
        {fallback || (
          <Skeleton 
            active 
            paragraph={{ rows: 3 }} 
            title={{ width: '60%' }}
          />
        )}
      </div>
    );
  }

  // Render loaded component
  return <LoadedComponent {...componentProps} />;
});

ProgressiveLoader.displayName = 'ProgressiveLoader';

/**
 * Higher-order component for progressive loading
 */
export function withProgressiveLoading<P extends Record<string, any>>(
  component: () => Promise<{ default: ComponentType<P> }>,
  options: Omit<ProgressiveLoaderProps, 'component' | 'componentProps'> = {}
) {
  return memo<P>((props) => (
    <ProgressiveLoader
      component={component}
      componentProps={props}
      {...options}
    />
  ));
}

/**
 * Suspense wrapper with enhanced fallback
 */
export const SuspenseLoader = memo<{
  children: ReactNode;
  fallback?: ReactNode;
  minHeight?: number;
}>(({ children, fallback, minHeight = 100 }) => (
  <Suspense
    fallback={
      <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', minHeight: `${minHeight}px` }}>
        {fallback || <Skeleton active paragraph={{ rows: 2 }} />}
      </div>
    }
  >
    {children}
  </Suspense>
));

SuspenseLoader.displayName = 'SuspenseLoader';
