/**
 * Lobe Theme - Shared Resources Integration
 * 
 * This script loads the shared resources system and provides integration
 * utilities specifically for the lobe-theme extension.
 */

(function() {
    'use strict';
    
    console.log('[LobeTheme] Initializing shared resources integration...');
    
    // Configuration
    const INTEGRATION_CONFIG = {
        loadTimeout: 10000,
        retryAttempts: 3,
        retryDelay: 1000,
        enablePerformanceMonitoring: true,
        enableEventCommunication: true
    };
    
    // State tracking
    let integrationState = {
        loaded: false,
        loading: false,
        error: null,
        retryCount: 0,
        startTime: Date.now()
    };
    
    /**
     * Load shared resources with retry logic
     */
    function loadSharedResources() {
        return new Promise((resolve, reject) => {
            if (integrationState.loading) {
                console.log('[LobeTheme] Already loading shared resources...');
                return;
            }
            
            if (window.forgeShared) {
                console.log('[LobeTheme] Shared resources already available');
                resolve();
                return;
            }
            
            integrationState.loading = true;
            
            const loaderScript = document.createElement('script');
            loaderScript.src = '/file=extensions/shared/loader.js';
            loaderScript.async = false;
            
            const timeout = setTimeout(() => {
                integrationState.error = 'Timeout loading shared resources';
                reject(new Error(integrationState.error));
            }, INTEGRATION_CONFIG.loadTimeout);
            
            loaderScript.onload = () => {
                console.log('[LobeTheme] Shared resources loader loaded');
                
                // Wait for shared resources ready event
                const readyHandler = () => {
                    clearTimeout(timeout);
                    document.removeEventListener('forge:shared-ready', readyHandler);
                    integrationState.loaded = true;
                    integrationState.loading = false;
                    
                    const loadTime = Date.now() - integrationState.startTime;
                    console.log(`[LobeTheme] Shared resources ready in ${loadTime}ms`);
                    
                    resolve();
                };
                
                document.addEventListener('forge:shared-ready', readyHandler);
                
                // Also check if already ready
                if (window.forgeShared) {
                    clearTimeout(timeout);
                    readyHandler();
                }
            };
            
            loaderScript.onerror = () => {
                clearTimeout(timeout);
                integrationState.error = 'Failed to load shared resources loader';
                integrationState.loading = false;
                
                if (integrationState.retryCount < INTEGRATION_CONFIG.retryAttempts) {
                    integrationState.retryCount++;
                    console.warn(`[LobeTheme] Retrying shared resources load (${integrationState.retryCount}/${INTEGRATION_CONFIG.retryAttempts})`);
                    
                    setTimeout(() => {
                        loadSharedResources().then(resolve).catch(reject);
                    }, INTEGRATION_CONFIG.retryDelay * integrationState.retryCount);
                } else {
                    reject(new Error(integrationState.error));
                }
            };
            
            document.head.appendChild(loaderScript);
        });
    }
    
    /**
     * Setup lobe-theme specific integrations
     */
    function setupLobeThemeIntegration() {
        if (!window.forgeShared) {
            console.warn('[LobeTheme] Shared resources not available for integration');
            return;
        }
        
        console.log('[LobeTheme] Setting up theme-specific integrations...');
        
        // Setup performance monitoring
        if (INTEGRATION_CONFIG.enablePerformanceMonitoring) {
            setupPerformanceMonitoring();
        }
        
        // Setup event communication
        if (INTEGRATION_CONFIG.enableEventCommunication) {
            setupEventCommunication();
        }
        
        // Setup theme change notifications
        setupThemeChangeNotifications();
        
        // Emit theme ready event
        window.forgeShared.emit('lobe-theme:initialized', {
            timestamp: Date.now(),
            loadTime: Date.now() - integrationState.startTime,
            version: getLobeThemeVersion()
        });
        
        console.log('[LobeTheme] Integration setup complete');
    }
    
    /**
     * Setup performance monitoring for lobe-theme
     */
    function setupPerformanceMonitoring() {
        // Monitor React component render times
        if (window.React && window.React.Profiler) {
            console.log('[LobeTheme] React Profiler monitoring enabled');
        }
        
        // Monitor DOM injection performance
        const originalConsoleLog = console.log;
        console.log = function(...args) {
            if (args[0] && args[0].includes && args[0].includes('🤯')) {
                // This is a lobe-theme debug message, extract timing if available
                const message = args.join(' ');
                const timeMatch = message.match(/(\d+\.\d+)ms/);
                if (timeMatch && window.forgeShared) {
                    const time = parseFloat(timeMatch[1]);
                    window.forgeShared.recordMetric('lobe-theme-debug-timing', time);
                }
            }
            originalConsoleLog.apply(console, args);
        };
        
        console.log('[LobeTheme] Performance monitoring setup complete');
    }
    
    /**
     * Setup event communication with other extensions
     */
    function setupEventCommunication() {
        // Listen for theme change requests from other extensions
        window.forgeShared.on('theme:change-request', (event) => {
            console.log('[LobeTheme] Theme change requested:', event.detail);
            handleThemeChangeRequest(event.detail);
        });
        
        // Listen for UI ready events
        window.forgeShared.on('ui:ready', (event) => {
            console.log('[LobeTheme] UI ready event received:', event.detail);
            handleUIReady(event.detail);
        });
        
        // Listen for extension initialization events
        window.forgeShared.on('extension-initialized', (event) => {
            console.log('[LobeTheme] Extension initialized:', event.detail.name);
        });
        
        console.log('[LobeTheme] Event communication setup complete');
    }
    
    /**
     * Setup theme change notifications
     */
    function setupThemeChangeNotifications() {
        // Monitor for theme changes in the UI with debouncing
        if (window.forgeShared) {
            let lastTheme = null;
            let themeChangeTimeout = null;
            const THEME_CHANGE_DEBOUNCE = 1000; // 1 second debounce

            const themeObserverId = window.forgeShared.registerObserver('body', (mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const bodyClasses = document.body.className;

                    if (bodyClasses.includes('dark') || bodyClasses.includes('light')) {
                        const currentTheme = bodyClasses.includes('dark') ? 'dark' : 'light';

                        // Only emit if theme actually changed
                        if (currentTheme !== lastTheme) {
                            // Clear any pending theme change
                            if (themeChangeTimeout) {
                                clearTimeout(themeChangeTimeout);
                            }

                            // Debounce theme changes to prevent rapid-fire events
                            themeChangeTimeout = setTimeout(() => {
                                lastTheme = currentTheme;

                                window.forgeShared.emit('lobe-theme:theme-changed', {
                                    theme: currentTheme,
                                    timestamp: Date.now(),
                                    source: 'lobe-theme'
                                });

                                console.log(`[LobeTheme] Theme changed to: ${currentTheme}`);
                            }, THEME_CHANGE_DEBOUNCE);
                        }
                    }
                }
            });

            // Initialize current theme
            const initialBodyClasses = document.body.className;
            if (initialBodyClasses.includes('dark') || initialBodyClasses.includes('light')) {
                lastTheme = initialBodyClasses.includes('dark') ? 'dark' : 'light';
                console.log(`[LobeTheme] Initial theme detected: ${lastTheme}`);
            }

            console.log('[LobeTheme] Theme change monitoring setup complete (with debouncing)');
        }
    }
    
    /**
     * Handle theme change requests
     */
    function handleThemeChangeRequest(request) {
        // Implementation would depend on how lobe-theme handles theme changes
        console.log('[LobeTheme] Processing theme change request:', request);
        
        // Example: trigger theme change in lobe-theme
        if (request.theme && (request.theme === 'dark' || request.theme === 'light')) {
            // This would need to integrate with lobe-theme's actual theme changing mechanism
            document.body.classList.remove('dark', 'light');
            document.body.classList.add(request.theme);
        }
    }
    
    /**
     * Handle UI ready events
     */
    function handleUIReady(data) {
        // Perform any UI-related setup when other components are ready
        console.log('[LobeTheme] Handling UI ready event');
    }
    
    /**
     * Get lobe-theme version (placeholder)
     */
    function getLobeThemeVersion() {
        // This would need to be implemented based on how lobe-theme stores version info
        return 'unknown';
    }
    
    /**
     * Expose integration utilities
     */
    function exposeIntegrationUtilities() {
        window.lobeThemeIntegration = {
            getState: () => integrationState,
            getConfig: () => INTEGRATION_CONFIG,
            
            // Performance utilities
            getPerformanceStats: () => {
                if (window.forgeShared) {
                    return window.forgeShared.getAllPerformanceStats();
                }
                return null;
            },
            
            // Event utilities
            emitThemeChange: (theme) => {
                if (window.forgeShared) {
                    window.forgeShared.emit('lobe-theme:theme-changed', {
                        theme: theme,
                        timestamp: Date.now(),
                        source: 'manual'
                    });
                }
            },
            
            // Debug utilities
            testIntegration: () => {
                if (window.forgeShared) {
                    console.log('Testing lobe-theme integration...');
                    
                    // Test DOM caching
                    const start = performance.now();
                    const body = window.forgeShared.querySelector('body');
                    const time = performance.now() - start;
                    console.log(`DOM query test: ${time.toFixed(3)}ms`);
                    
                    // Test event system
                    window.forgeShared.emit('lobe-theme:test-event', { test: true });
                    
                    // Show stats
                    console.log('Performance stats:', window.forgeShared.getAllPerformanceStats());
                    console.log('System status:', window.forgeShared.getStatus());
                    
                    return true;
                } else {
                    console.error('Shared resources not available');
                    return false;
                }
            }
        };
        
        console.log('[LobeTheme] Integration utilities exposed at window.lobeThemeIntegration');
    }
    
    /**
     * Initialize integration
     */
    function initialize() {
        console.log('[LobeTheme] Starting shared resources integration...');
        
        loadSharedResources()
            .then(() => {
                setupLobeThemeIntegration();
                exposeIntegrationUtilities();
                
                console.log('[LobeTheme] Shared resources integration complete! 🎉');
            })
            .catch((error) => {
                console.error('[LobeTheme] Failed to integrate with shared resources:', error);
                console.log('[LobeTheme] Continuing without shared resources optimization');
                
                // Still expose utilities for debugging
                exposeIntegrationUtilities();
            });
    }
    
    // Start initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }
    
})();
