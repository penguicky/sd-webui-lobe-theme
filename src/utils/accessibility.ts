import { consola } from 'consola';
import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Comprehensive accessibility utilities for React components
 */

// =============================================================================
// ARIA LABELS AND SEMANTIC ATTRIBUTES
// =============================================================================

/**
 * Generate accessible ARIA labels for common UI elements
 */
export const ariaLabels = {
  breadcrumb: 'Breadcrumb navigation',
  close: 'Close',
  colorPicker: 'Select color',
  error: 'Error message',
  extraNetworks: 'Extra networks panel',
  filter: 'Filter options',
  imageInfo: 'Image information',
  info: 'Information message',
  invalid: 'Invalid input',
  loading: 'Loading content',
  mainNavigation: 'Main navigation',
  maximize: 'Maximize',
  menu: 'Open menu',
  minimize: 'Minimize',
  optional: 'Optional field',
  pagination: 'Pagination navigation',
  promptEditor: 'Prompt editor',
  required: 'Required field',
  search: 'Search',
  settings: 'Open settings',
  sidebarToggle: 'Toggle sidebar',
  sort: 'Sort options',
  success: 'Success message',
  themeToggle: 'Toggle theme mode',
  valid: 'Valid input',
  warning: 'Warning message',
};

/**
 * Generate dynamic ARIA labels with context
 */
export const generateAriaLabel = {
  button: (action: string, context?: string) => (context ? `${action} ${context}` : action),

  input: (label: string, required = false, invalid = false) => {
    let aria = label;
    if (required) aria += ', required';
    if (invalid) aria += ', invalid input';
    return aria;
  },

  modal: (title: string) => `${title} dialog`,

  tab: (name: string, selected = false) => `${name} tab${selected ? ', selected' : ''}`,
};

/**
 * Semantic HTML roles for accessibility
 */
export const semanticRoles = {
  alert: 'alert',
  article: 'article',
  banner: 'banner',
  button: 'button',
  checkbox: 'checkbox',
  complementary: 'complementary',
  contentinfo: 'contentinfo',
  dialog: 'dialog',
  form: 'form',
  heading: 'heading',
  link: 'link',
  list: 'list',
  listitem: 'listitem',
  log: 'log',
  main: 'main',
  menu: 'menu',
  menuitem: 'menuitem',
  navigation: 'navigation',
  option: 'option',
  radio: 'radio',
  region: 'region',
  search: 'search',
  slider: 'slider',
  status: 'status',
  tab: 'tab',
  tablist: 'tablist',
  tabpanel: 'tabpanel',
  textbox: 'textbox',
};

/**
 * Standard keyboard keys for navigation
 */
export const keyboardKeys = {
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_UP: 'ArrowUp',
  ENTER: 'Enter',
  ESCAPE: 'Escape',
  HOME: 'Home',
  PAGE_DOWN: 'PageDown',
  PAGE_UP: 'PageUp',
  SPACE: ' ',
  TAB: 'Tab',
} as const;

/**
 * Keyboard event handlers for common patterns
 */
export const keyboardHandlers = {
  arrowNavigation: (
    event: KeyboardEvent,
    callbacks: {
      down?: () => void;
      left?: () => void;
      right?: () => void;
      up?: () => void;
    },
  ) => {
    switch (event.key) {
      case keyboardKeys.ARROW_DOWN: {
        event.preventDefault();
        callbacks.down?.();
        break;
      }
      case keyboardKeys.ARROW_UP: {
        event.preventDefault();
        callbacks.up?.();
        break;
      }
      case keyboardKeys.ARROW_LEFT: {
        event.preventDefault();
        callbacks.left?.();
        break;
      }
      case keyboardKeys.ARROW_RIGHT: {
        event.preventDefault();
        callbacks.right?.();
        break;
      }
    }
  },

  enter: (event: KeyboardEvent, callback: () => void) => {
    if (event.key === keyboardKeys.ENTER) {
      event.preventDefault();
      callback();
    }
  },

  escape: (event: KeyboardEvent, callback: () => void) => {
    if (event.key === keyboardKeys.ESCAPE) {
      event.preventDefault();
      callback();
    }
  },

  space: (event: KeyboardEvent, callback: () => void) => {
    if (event.key === keyboardKeys.SPACE) {
      event.preventDefault();
      callback();
    }
  },
};

/**
 * Focus management utilities
 */
export const FocusManager = {
  /**
   * Create a focus trap for a container
   */
  createFocusTrap(container: Element): () => void {
    const handleKeyDown = (event: Event) => {
      if (event instanceof KeyboardEvent) {
        this.trapFocus(container, event);
      }
    };

    container.addEventListener('keydown', handleKeyDown);

    return () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  },

  /**
   * Focus the first focusable element in container
   */
  focusFirst(container: Element): void {
    const focusable = this.getFocusableElements(container);
    if (focusable.length > 0) {
      (focusable[0] as HTMLElement).focus();
    }
  },

  /**
   * Focus the last focusable element in container
   */
  focusLast(container: Element): void {
    const focusable = this.getFocusableElements(container);
    if (focusable.length > 0) {
      (focusable.at(-1) as HTMLElement).focus();
    }
  },

  /**
   * Get all focusable elements within a container
   */
  getFocusableElements(container: Element): Element[] {
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]',
    ].join(', ');

    return Array.from(container.querySelectorAll(focusableSelectors));
  },

  /**
   * Trap focus within a container (for modals, dropdowns)
   */
  trapFocus(container: Element, event: KeyboardEvent): void {
    if (event.key !== keyboardKeys.TAB) return;

    const focusable = this.getFocusableElements(container);
    if (focusable.length === 0) return;

    const firstFocusable = focusable[0] as HTMLElement;
    const lastFocusable = focusable.at(-1) as HTMLElement;

    if (event.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      }
    } else {
      // Tab
      if (document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    }
  },
};

/**
 * Accessibility testing utilities
 */
export const AccessibilityTester = {
  /**
   * Run comprehensive accessibility audit on element
   */
  auditElement(element: Element): {
    issues: string[];
    passed: boolean;
    warnings: string[];
  } {
    const issues: string[] = [];
    const warnings: string[] = [];

    // Check ARIA labels
    const ariaCheck = this.checkAriaLabels(element);
    if (!ariaCheck.passed) {
      issues.push(...ariaCheck.issues);
    }

    return {
      issues,
      passed: issues.length === 0,
      warnings,
    };
  },

  /**
   * Check if element has proper ARIA labels
   */
  checkAriaLabels(element: Element): { issues: string[]; passed: boolean } {
    const issues: string[] = [];
    const tagName = element.tagName.toLowerCase();

    // Interactive elements should have accessible names
    const interactiveElements = ['button', 'input', 'select', 'textarea', 'a'];
    if (interactiveElements.includes(tagName)) {
      const hasAccessibleName =
        element.hasAttribute('aria-label') ||
        element.hasAttribute('aria-labelledby') ||
        element.hasAttribute('title') ||
        element.textContent?.trim() ||
        (tagName === 'input' && element.hasAttribute('placeholder'));

      if (!hasAccessibleName) {
        issues.push(`${tagName} element missing accessible name`);
      }
    }

    return { issues, passed: issues.length === 0 };
  },
};

/**
 * Accessibility testing hook for development
 */
export const useAccessibilityTesting = (enabled = process.env.NODE_ENV === 'development') => {
  const auditComponent = (element: Element | null, componentName?: string) => {
    if (!enabled || !element) return;

    // Delay audit to allow component to fully render
    setTimeout(() => {
      const results = AccessibilityTester.auditElement(element);
      const name = componentName || element.tagName.toLowerCase();

      if (results.passed && results.warnings.length === 0) {
        consola.success(`♿ ${name}: Accessibility audit passed`);
      } else {
        if (results.issues.length > 0) {
          consola.error(`♿ ${name}: Accessibility issues found:`, results.issues);
        }
        if (results.warnings.length > 0) {
          consola.warn(`♿ ${name}: Accessibility warnings:`, results.warnings);
        }
      }
    }, 100);
  };

  return { auditComponent };
};

/**
 * Hook for comprehensive accessibility features in components
 */
export const useAccessibilityFeatures = (componentName: string, enabled = true) => {
  const componentRef = useRef<HTMLElement>(null);
  const [accessibilityState, setAccessibilityState] = useState({
    hasKeyboardFocus: false,
    isHighContrast: false,
    reducedMotion: false,
  });

  // Detect accessibility preferences
  useEffect(() => {
    if (!enabled) return;

    const updateAccessibilityState = () => {
      setAccessibilityState({
        hasKeyboardFocus: document.activeElement === componentRef.current,
        isHighContrast: window.matchMedia('(prefers-contrast: high)').matches,
        reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      });
    };

    // Initial check
    updateAccessibilityState();

    // Listen for changes
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    contrastQuery.addEventListener('change', updateAccessibilityState);
    motionQuery.addEventListener('change', updateAccessibilityState);

    // Focus tracking
    const handleFocus = () => updateAccessibilityState();
    const handleBlur = () => updateAccessibilityState();

    document.addEventListener('focusin', handleFocus);
    document.addEventListener('focusout', handleBlur);

    return () => {
      contrastQuery.removeEventListener('change', updateAccessibilityState);
      motionQuery.removeEventListener('change', updateAccessibilityState);
      document.removeEventListener('focusin', handleFocus);
      document.removeEventListener('focusout', handleBlur);
    };
  }, [enabled]);

  // Keyboard navigation handler
  const handleKeyboardNavigation = useCallback(
    (event: KeyboardEvent) => {
      if (!enabled || !componentRef.current) return;

      switch (event.key) {
        case keyboardKeys.ESCAPE: {
          // Handle escape key - can be overridden by component
          break;
        }
        case keyboardKeys.TAB: {
          // Handle tab navigation within component
          FocusManager.trapFocus(componentRef.current, event);
          break;
        }
        case keyboardKeys.ARROW_UP:
        case keyboardKeys.ARROW_DOWN:
        case keyboardKeys.ARROW_LEFT:
        case keyboardKeys.ARROW_RIGHT: {
          // Handle arrow navigation - can be overridden by component
          break;
        }
      }
    },
    [enabled],
  );

  // Accessibility audit
  const auditAccessibility = useCallback(async () => {
    if (!enabled || !componentRef.current) return null;

    const result = AccessibilityTester.auditElement(componentRef.current);

    if (process.env.NODE_ENV === 'development') {
      if (!result.passed) {
        consola.warn(`♿ ${componentName} accessibility issues:`, result.issues);
      }

      if (result.warnings.length > 0) {
        consola.info(`♿ ${componentName} accessibility warnings:`, result.warnings);
      }
    }

    return result;
  }, [enabled, componentName]);

  // Generate ARIA attributes for common patterns
  const getAriaAttributes = useCallback(
    (type: 'button' | 'input' | 'modal' | 'tab', options: any = {}) => {
      switch (type) {
        case 'button': {
          return {
            'aria-disabled': options.disabled,
            'aria-expanded': options.expanded,
            'aria-label': options.label,
            'aria-pressed': options.pressed,
            'role': 'button',
            'tabIndex': options.disabled ? -1 : 0,
          };
        }
        case 'input': {
          return {
            'aria-describedby': options.describedBy,
            'aria-invalid': options.invalid,
            'aria-label': options.label,
            'aria-required': options.required,
          };
        }
        case 'modal': {
          return {
            'aria-describedby': options.describedBy,
            'aria-label': options.label,
            'aria-modal': true,
            'role': 'dialog',
          };
        }
        case 'tab': {
          return {
            'aria-controls': options.controls,
            'aria-selected': options.selected,
            'role': 'tab',
            'tabIndex': options.selected ? 0 : -1,
          };
        }
        default: {
          return {};
        }
      }
    },
    [],
  );

  return {
    accessibilityState,
    auditAccessibility,
    componentRef,

    createFocusTrap: () =>
      componentRef.current && FocusManager.createFocusTrap(componentRef.current),

    // Utility functions
    focusFirst: () => componentRef.current && FocusManager.focusFirst(componentRef.current),

    focusLast: () => componentRef.current && FocusManager.focusLast(componentRef.current),
    getAriaAttributes,
    handleKeyboardNavigation,
  };
};
