/**
 * CSS Performance Optimization - Style Caching System
 * Reduces runtime CSS generation overhead by caching computed styles
 */

import { Theme, SerializedStyles, css } from 'antd-style';

// Cache for computed styles
const styleCache = new Map<string, SerializedStyles>();
const themeCache = new Map<string, any>();
const memoizedStyleCache = new Map<string, Record<string, string>>();

// Cache statistics for monitoring
let cacheHits = 0;
let cacheMisses = 0;

/**
 * Generate a cache key from theme properties and component props
 */
function generateCacheKey(theme: Theme, componentName: string, props?: Record<string, any>): string {
  const themeKey = `${theme.colorPrimary}-${theme.borderRadius}-${theme.fontSize}-${theme.colorBgContainer}`;
  const propsKey = props ? JSON.stringify(props) : '';
  return `${componentName}-${themeKey}-${propsKey}`;
}

/**
 * Cache computed styles to avoid recalculation
 */
export function getCachedStyle(
  theme: Theme,
  componentName: string,
  styleGenerator: (theme: Theme, props?: any) => SerializedStyles,
  props?: Record<string, any>
): SerializedStyles {
  const cacheKey = generateCacheKey(theme, componentName, props);
  
  if (styleCache.has(cacheKey)) {
    cacheHits++;
    return styleCache.get(cacheKey)!;
  }
  
  cacheMisses++;
  const computedStyle = styleGenerator(theme, props);
  styleCache.set(cacheKey, computedStyle);
  
  // Limit cache size to prevent memory leaks
  if (styleCache.size > 1000) {
    const firstKey = styleCache.keys().next().value;
    if (firstKey) {
      styleCache.delete(firstKey);
    }
  }
  
  return computedStyle;
}

/**
 * Cache theme calculations
 */
export function getCachedTheme(
  themeKey: string,
  themeGenerator: () => any
): any {
  if (themeCache.has(themeKey)) {
    cacheHits++;
    return themeCache.get(themeKey);
  }
  
  cacheMisses++;
  const computedTheme = themeGenerator();
  themeCache.set(themeKey, computedTheme);
  
  // Limit cache size
  if (themeCache.size > 100) {
    const firstKey = themeCache.keys().next().value;
    if (firstKey) {
      themeCache.delete(firstKey);
    }
  }
  
  return computedTheme;
}

/**
 * Clear style cache (useful for theme changes)
 */
export function clearStyleCache(): void {
  styleCache.clear();
  themeCache.clear();
  cacheHits = 0;
  cacheMisses = 0;
}

/**
 * Get cache statistics for performance monitoring
 */
export function getCacheStats(): {
  hitRate: number;
  hits: number;
  misses: number;
  stylesCached: number;
  themesCached: number;
} {
  const total = cacheHits + cacheMisses;
  return {
    hitRate: total > 0 ? (cacheHits / total) * 100 : 0,
    hits: cacheHits,
    misses: cacheMisses,
    stylesCached: styleCache.size,
    themesCached: themeCache.size,
  };
}

/**
 * Memoized style creator for frequently used patterns
 */
export function createMemoizedStyle<T extends Record<string, any>>(
  componentName: string,
  styleGenerator: (theme: Theme, props?: T) => Record<string, string>
) {
  return (theme: Theme, props?: T) => {
    const cacheKey = generateCacheKey(theme, componentName, props);

    if (memoizedStyleCache.has(cacheKey)) {
      cacheHits++;
      return memoizedStyleCache.get(cacheKey)!;
    }

    cacheMisses++;
    const styles = styleGenerator(theme, props);
    memoizedStyleCache.set(cacheKey, styles);

    // Limit cache size to prevent memory leaks
    if (memoizedStyleCache.size > 1000) {
      const firstKey = memoizedStyleCache.keys().next().value;
      if (firstKey) {
        memoizedStyleCache.delete(firstKey);
      }
    }

    return styles;
  };
}

/**
 * Pre-warm cache with common style combinations
 */
export function preWarmStyleCache(theme: Theme): void {
  // Pre-compute common button styles
  getCachedStyle(theme, 'button-primary', (t) => css`
    background: ${t.colorPrimary};
    border: 1px solid ${t.colorPrimary};
    border-radius: ${t.borderRadius}px;
  `);

  getCachedStyle(theme, 'button-secondary', (t) => css`
    background: ${t.colorFillTertiary};
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadius}px;
  `);

  // Pre-compute common container styles
  getCachedStyle(theme, 'container-base', (t) => css`
    background: ${t.colorBgContainer};
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadius}px;
    padding: 16px;
  `);

  // Pre-compute common text styles
  getCachedStyle(theme, 'text-primary', (t) => css`
    color: ${t.colorText};
    font-size: ${t.fontSize}px;
    font-family: ${t.fontFamily};
  `);

  getCachedStyle(theme, 'text-secondary', (t) => css`
    color: ${t.colorTextSecondary};
    font-size: ${t.fontSizeSM}px;
    font-family: ${t.fontFamily};
  `);
}

// Development-only cache monitoring
if (process.env.NODE_ENV === 'development') {
  // Log cache stats every 30 seconds
  setInterval(() => {
    const stats = getCacheStats();
    if (stats.hits + stats.misses > 0) {
      console.log('🎨 Style Cache Stats:', {
        cached: `${stats.stylesCached} styles, ${stats.themesCached} themes`,
        hitRate: `${stats.hitRate.toFixed(1)}%`,
        performance: stats.hitRate > 80 ? '🟢 Excellent' : stats.hitRate > 60 ? '🟡 Good' : '🔴 Needs optimization'
      });
    }
  }, 30_000);
}
