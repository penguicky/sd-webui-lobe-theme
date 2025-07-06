import { consola } from 'consola';
import { createRoot } from 'react-dom/client';

import Page from './app/page';
import { trackProgressiveLoadingMetrics } from './hooks/usePerformanceMonitoring';
// Import critical CSS first for immediate rendering
import './styles/critical.css';
// Phase 4: Initialize critical resource prioritization FIRST
import './utils/criticalResourcePrioritizer';
import { initIntelligentPreloading } from './utils/intelligentPreloading';
import { initMemoryManagement } from './utils/memoryManagement';
import { initTieredLoading } from './utils/tieredLoading';

// Optimized Shiki engine pre-warming with Web Worker support and WebUI compatibility
const preWarmShiki = async () => {
  try {
    // Import Shiki worker manager directly (IIFE format)
    const { shikiWorkerManager } = await import('./utils/shikiWorkerManager');

    // Start worker pre-warming (don't await to avoid blocking)
    shikiWorkerManager.preWarm().catch((error: any) => {
      consola.warn('Web Worker pre-warming failed, will use main thread fallback:', error);
    });

    // Import main thread fallback directly (IIFE format)
    const { ShikiEngineManager } = await import('./hooks/useHighlight');
    const manager = ShikiEngineManager.getInstance();
    await manager.preWarm();
  } catch (error) {
    consola.warn('Failed to pre-warm Shiki engine:', error);
  }
};

if (window.global === undefined) window.global = window;

// Phase 3: Initialize progressive enhancement systems
if (process.env.NODE_ENV === 'development') {
  consola.info('🚀 Phase 3: Initializing progressive enhancement systems...');
}

// Initialize tiered loading system
const tieredManager = initTieredLoading();
if (process.env.NODE_ENV === 'development') {
  consola.info('✅ Tiered loading system initialized');
}

// Phase 4: Add progressive theme resources
const progressiveThemeResources = [
  // Tier 1: Secondary styles (load after critical)
  {
    content: `
      /* Secondary animation styles */
      .ant-btn { transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1); }
      .ant-card { transition: box-shadow 0.3s ease; }
      .ant-card:hover { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); }
      .ant-drawer { transition: transform 0.3s ease; }
      .ant-modal { transition: opacity 0.2s ease; }
    `,
    name: 'secondary-animations',
    priority: 'medium' as const,
    tier: 1,
    type: 'css' as const,
  },
  {
    content: `
      /* Component enhancement styles */
      .ant-input:focus, .ant-input-focused { border-color: var(--lobe-primary-color); box-shadow: 0 0 0 2px rgba(22, 119, 255, 0.2); }
      .ant-select:focus .ant-select-selector { border-color: var(--lobe-primary-color); box-shadow: 0 0 0 2px rgba(22, 119, 255, 0.2); }
      .ant-btn-primary { background: var(--lobe-primary-color); border-color: var(--lobe-primary-color); }
      .ant-btn-primary:hover { background: var(--lobe-primary-color); opacity: 0.8; }
    `,
    name: 'component-enhancements',
    priority: 'medium' as const,
    tier: 1,
    type: 'css' as const,
  },
  // Tier 2: Advanced features (load when idle)
  {
    condition: () => {
      const settings = localStorage.getItem('lobe-theme-settings');
      return settings ? JSON.parse(settings).svgIcon !== false : true;
    },
    content: `
      /* Advanced icon styles */
      .lucide { stroke-width: 1.5; }
      .lucide:hover { stroke-width: 2; transition: stroke-width 0.2s ease; }
      .icon-button { border-radius: 50%; transition: background-color 0.2s ease; }
      .icon-button:hover { background-color: rgba(0, 0, 0, 0.04); }
    `,
    name: 'advanced-icons',
    priority: 'low' as const,
    tier: 2,
    type: 'css' as const,
  },
  {
    condition: () => {
      const settings = localStorage.getItem('lobe-theme-settings');
      return settings ? JSON.parse(settings).enableSidebar !== false : true;
    },
    content: `
      /* Sidebar enhancement styles */
      .ant-layout-sider { backdrop-filter: blur(8px); }
      .ant-layout-sider-collapsed .ant-menu-item { text-align: center; }
      .ant-menu-item:hover { background-color: rgba(22, 119, 255, 0.06); }
      .ant-menu-item-selected { background-color: rgba(22, 119, 255, 0.1); }
    `,
    name: 'sidebar-enhancements',
    priority: 'medium' as const,
    tier: 2,
    type: 'css' as const,
  },
  // Tier 3: Background enhancements (load last)
  {
    content: `
      /* Visual polish styles */
      body { background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); }
      .ant-layout { background: transparent; }
      .ant-card { backdrop-filter: blur(10px); background: rgba(255, 255, 255, 0.8); }
      .glass-effect { backdrop-filter: blur(10px); background: rgba(255, 255, 255, 0.1); }
    `,
    name: 'visual-polish',
    priority: 'low' as const,
    tier: 3,
    type: 'css' as const,
  },
];

tieredManager.addProgressiveResources(progressiveThemeResources);
if (process.env.NODE_ENV === 'development') {
  consola.info('✅ Progressive theme resources configured');
}

// Initialize memory management
const memoryManager = initMemoryManagement();
if (process.env.NODE_ENV === 'development') {
  consola.info('✅ Memory management system initialized');
}

// Initialize progressive loading metrics
const progressiveMetrics = trackProgressiveLoadingMetrics();
if (process.env.NODE_ENV === 'development') {
  consola.info('✅ Progressive loading metrics initialized');
}

// Initialize intelligent preloading
const intelligentPreloader = initIntelligentPreloading();
if (process.env.NODE_ENV === 'development') {
  consola.info('✅ Intelligent preloading system initialized');
}

// Log performance improvements every 30 seconds in development
if (process.env.NODE_ENV === 'development') {
  setInterval(() => {
    const stats = memoryManager.getMemoryStats();
    const metrics = progressiveMetrics.getProgressiveMetrics();
    const preloadStats = intelligentPreloader.getPreloadingStats();
    consola.info('📊 Phase 3 Performance Stats:', {
      memory: stats,
      preloading: preloadStats,
      progressive: metrics,
    });
  }, 30_000);
}

const skipLoad = window.location.href.includes('dev') && process.env.NODE_ENV === 'production';

if (!skipLoad) {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      consola.start(`🤯 Lobe Theme load in ${process.env.NODE_ENV}`);

      // Pre-warm Shiki engine in background with delay to avoid blocking initial render
      setTimeout(() => {
        preWarmShiki();
      }, 1000); // Delay to allow initial UI to render first

      const root = document.createElement('div');
      root.setAttribute('id', 'root');
      try {
        gradioApp()?.append(root);
      } catch {
        document.querySelector('gradio-app')?.append(root);
      }
      const client = createRoot(root);
      client.render(<Page />);
    },
    { once: true },
  );
}
