/**
 * Phase 3: Intelligent Preloading System
 * Implements smart resource preloading based on user behavior patterns
 */

interface UserBehaviorPattern {
  action: string;
  context: Record<string, any>;
  timestamp: number;
}

interface PreloadRule {
  components: string[];
  condition?: () => boolean;
  delay: number;
  probability: number;
  trigger: string;
}

interface PreloadingConfig {
  // Minimum probability to trigger preload
  maxConcurrentPreloads: number;
  maxPatterns: number; // Time window to consider patterns (ms)
  minProbability: number; 
  patternWindow: number;
}

class IntelligentPreloader {
  private patterns: UserBehaviorPattern[] = [];
  private preloadRules: PreloadRule[] = [];
  private config: PreloadingConfig;
  private activePreloads = new Set<string>();
  private preloadedComponents = new Set<string>();

  constructor(config: PreloadingConfig) {
    this.config = config;
    this.setupDefaultRules();
    this.startBehaviorTracking();
  }

  private setupDefaultRules(): void {
    this.preloadRules = [
      {
        components: ['settings-modal', 'settings-form'],
        delay: 500,
        probability: 0.7,
        trigger: 'hover-settings-button',
      },
      {
        components: ['share-modal', 'screenshot-utils'],
        delay: 300,
        probability: 0.8,
        trigger: 'hover-share-button',
      },
      {
        components: ['footer-social', 'version-tag'],
        delay: 1000,
        probability: 0.6,
        trigger: 'scroll-to-bottom',
      },
      {
        components: ['quick-settings-sidebar'],
        delay: 100,
        probability: 0.9,
        trigger: 'enable-sidebar',
      },
      // Phase 4: Extra Network Sidebar now loads directly - no longer needs preloading
      {
        components: ['prompt-editor-advanced', 'syntax-highlighter'],
        condition: () => window.innerWidth > 768,
        delay: 2000,
        probability: 0.5,
        trigger: 'focus-prompt-textarea', // Only on desktop
      },
    ];
  }

  private startBehaviorTracking(): void {
    // Track mouse movements and interactions
    this.trackMouseBehavior();
    this.trackScrollBehavior();
    this.trackClickBehavior();
    this.trackSettingsChanges();
  }

  private trackMouseBehavior(): void {
    let hoverTimer: number | null = null;

    document.addEventListener('mouseover', (event) => {
      const target = event.target as HTMLElement;
      
      // Clear previous timer
      if (hoverTimer) {
        clearTimeout(hoverTimer);
      }

      // Set new timer for hover detection
      hoverTimer = window.setTimeout(() => {
        this.recordPattern('hover', {
          className: target.className,
          element: target.tagName.toLowerCase(),
          id: target.id,
        });

        // Check for specific hover patterns
        if (target.closest('[data-testid*="settings"]') || target.textContent?.includes('Settings')) {
          this.recordPattern('hover-settings-button', {});
        }
        
        if (target.closest('[data-testid*="share"]') || target.textContent?.includes('Share')) {
          this.recordPattern('hover-share-button', {});
        }
      }, 500);
    });

    document.addEventListener('mouseout', () => {
      if (hoverTimer) {
        clearTimeout(hoverTimer);
        hoverTimer = null;
      }
    });
  }

  private trackScrollBehavior(): void {
    let scrollTimer: number | null = null;

    window.addEventListener('scroll', () => {
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }

      scrollTimer = window.setTimeout(() => {
        const scrollPercentage = (window.scrollY + window.innerHeight) / document.body.scrollHeight;
        
        if (scrollPercentage > 0.8) {
          this.recordPattern('scroll-to-bottom', { scrollPercentage });
        }
        
        if (scrollPercentage > 0.5) {
          this.recordPattern('scroll-middle', { scrollPercentage });
        }
      }, 200);
    });
  }

  private trackClickBehavior(): void {
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      
      this.recordPattern('click', {
        className: target.className,
        element: target.tagName.toLowerCase(),
        id: target.id,
      });

      // Track specific UI interactions
      if (target.closest('button')) {
        this.recordPattern('button-click', {
          buttonText: target.textContent?.trim(),
        });
      }
    });
  }

  private trackSettingsChanges(): void {
    // Listen for settings changes that might trigger component needs
    window.addEventListener('storage', (event) => {
      if (event.key?.includes('setting')) {
        this.recordPattern('settings-change', {
          key: event.key,
          newValue: event.newValue,
        });

        // Specific setting triggers
        if (event.key.includes('enableSidebar') && event.newValue === 'true') {
          this.recordPattern('enable-sidebar', {});
        }
        
        if (event.key.includes('enableExtraNetworkSidebar') && event.newValue === 'true') {
          this.recordPattern('enable-extra-network', {});
        }
      }
    });

    // Track focus on prompt textarea
    document.addEventListener('focusin', (event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'TEXTAREA' && target.id?.includes('prompt')) {
        this.recordPattern('focus-prompt-textarea', {});
      }
    });
  }

  private recordPattern(action: string, context: Record<string, any>): void {
    const pattern: UserBehaviorPattern = {
      action,
      context,
      timestamp: Date.now(),
    };

    this.patterns.push(pattern);

    // Limit pattern history
    if (this.patterns.length > this.config.maxPatterns) {
      this.patterns = this.patterns.slice(-this.config.maxPatterns);
    }

    // Check for preload opportunities
    this.evaluatePreloadOpportunity(action);
  }

  private evaluatePreloadOpportunity(action: string): void {
    const rule = this.preloadRules.find(r => r.trigger === action);
    if (!rule) return;

    // Check condition if specified
    if (rule.condition && !rule.condition()) {
      return;
    }

    // Calculate probability based on recent patterns
    const recentPatterns = this.patterns.filter(
      p => Date.now() - p.timestamp < this.config.patternWindow
    );
    
    const actionCount = recentPatterns.filter(p => p.action === action).length;
    const adjustedProbability = Math.min(rule.probability + (actionCount * 0.1), 1);

    if (adjustedProbability >= this.config.minProbability) {
      this.schedulePreload(rule, adjustedProbability);
    }
  }

  private schedulePreload(rule: PreloadRule, probability: number): void {
    setTimeout(() => {
      this.executePreload(rule, probability);
    }, rule.delay);
  }

  private async executePreload(rule: PreloadRule, probability: number): Promise<void> {
    if (this.activePreloads.size >= this.config.maxConcurrentPreloads) {
      console.log(`🚫 Max concurrent preloads reached, skipping ${rule.trigger}`);
      return;
    }

    console.log(`🔮 Preloading triggered by ${rule.trigger} (probability: ${(probability * 100).toFixed(1)}%)`);

    for (const componentName of rule.components) {
      if (this.preloadedComponents.has(componentName) || this.activePreloads.has(componentName)) {
        continue;
      }

      this.activePreloads.add(componentName);

      try {
        // Try to preload from tiered loading manager
        const tieredManager = (window as any).__tieredLoadingManager__;
        if (tieredManager) {
          await tieredManager.preloadComponent(componentName);
          this.preloadedComponents.add(componentName);
          console.log(`✅ Preloaded component: ${componentName}`);
        }
      } catch (error) {
        console.warn(`❌ Failed to preload component ${componentName}:`, error);
      } finally {
        this.activePreloads.delete(componentName);
      }
    }
  }

  public getPreloadingStats(): {
    activePreloads: number;
    preloadedComponents: number;
    recentPatterns: number;
    topActions: Array<{ action: string; count: number }>;
    totalPatterns: number;
  } {
    const recentPatterns = this.patterns.filter(
      p => Date.now() - p.timestamp < this.config.patternWindow
    );

    // Count action frequencies
    const actionCounts = new Map<string, number>();
    recentPatterns.forEach(p => {
      actionCounts.set(p.action, (actionCounts.get(p.action) || 0) + 1);
    });

    const topActions = Array.from(actionCounts.entries())
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([action, count]) => ({ action, count }));

    return {
      activePreloads: this.activePreloads.size,
      preloadedComponents: this.preloadedComponents.size,
      recentPatterns: recentPatterns.length,
      topActions,
      totalPatterns: this.patterns.length,
    };
  }

  public addCustomRule(rule: PreloadRule): void {
    this.preloadRules.push(rule);
  }

  public dispose(): void {
    this.patterns = [];
    this.preloadRules = [];
    this.activePreloads.clear();
    this.preloadedComponents.clear();
  }
}

// Default configuration
const defaultConfig: PreloadingConfig = {
  maxConcurrentPreloads: 3,
  
maxPatterns: 100, 
  // 5 minutes
minProbability: 0.3,
  patternWindow: 300_000,
};

// Global instance
let intelligentPreloader: IntelligentPreloader | null = null;

export function initIntelligentPreloading(config: PreloadingConfig = defaultConfig): IntelligentPreloader {
  if (!intelligentPreloader) {
    intelligentPreloader = new IntelligentPreloader(config);
    console.log('🔮 Intelligent preloading system initialized');
  }
  return intelligentPreloader;
}

export function getIntelligentPreloader(): IntelligentPreloader | null {
  return intelligentPreloader;
}

export { IntelligentPreloader, type PreloadingConfig, type PreloadRule };
