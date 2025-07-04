import { consola } from 'consola';

/**
 * Automated accessibility testing utilities for development and CI/CD
 */

// =============================================================================
// ACCESSIBILITY TEST SUITE
// =============================================================================

interface AccessibilityTestResult {
  component: string;
  issues: string[];
  passed: boolean;
  score: number;
  warnings: string[]; // 0-100
}

interface AccessibilityTestSuite {
  name: string;
  tests: AccessibilityTest[];
}

interface AccessibilityTest {
  name: string;
  required: boolean;
  selector: string;
  test: (element: Element) => { issues: string[]; passed: boolean; warnings: string[] };
}

/**
 * Core accessibility tests
 */
const coreAccessibilityTests: AccessibilityTest[] = [
  {
    name: 'Interactive elements have accessible names',
    required: true,
    selector: 'button, input, select, textarea, a[href]',
    test: (element) => {
      const issues: string[] = [];
      const warnings: string[] = [];

      const hasAccessibleName =
        element.hasAttribute('aria-label') ||
        element.hasAttribute('aria-labelledby') ||
        element.hasAttribute('title') ||
        element.textContent?.trim() ||
        (element.tagName === 'INPUT' && element.hasAttribute('placeholder'));

      if (!hasAccessibleName) {
        issues.push(`${element.tagName.toLowerCase()} missing accessible name`);
      }

      return { issues, passed: issues.length === 0, warnings };
    },
  },
  {
    name: 'Images have alt text',
    required: true,
    selector: 'img',
    test: (element) => {
      const issues: string[] = [];
      const warnings: string[] = [];

      if (!element.hasAttribute('alt')) {
        issues.push('Image missing alt attribute');
      } else if (element.getAttribute('alt') === '') {
        // Empty alt is valid for decorative images
        warnings.push('Image has empty alt text (ensure it is decorative)');
      }

      return { issues, passed: issues.length === 0, warnings };
    },
  },
  {
    name: 'Form inputs have labels',
    required: true,
    selector: 'input:not([type="hidden"]), select, textarea',
    test: (element) => {
      const issues: string[] = [];
      const warnings: string[] = [];

      const hasLabel =
        element.hasAttribute('aria-label') ||
        element.hasAttribute('aria-labelledby') ||
        document.querySelector(`label[for="${element.id}"]`) ||
        element.closest('label');

      if (!hasLabel) {
        issues.push(`Form input missing label`);
      }

      return { issues, passed: issues.length === 0, warnings };
    },
  },
  {
    name: 'Headings follow proper hierarchy',
    required: false,
    selector: 'h1, h2, h3, h4, h5, h6',
    test: (element) => {
      const issues: string[] = [];
      const warnings: string[] = [];

      const level = parseInt(element.tagName.charAt(1));
      const allHeadings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
      const currentIndex = allHeadings.indexOf(element);

      if (currentIndex > 0) {
        const prevHeading = allHeadings[currentIndex - 1];
        if (prevHeading) {
          const prevLevel = parseInt(prevHeading.tagName.charAt(1));

          if (level > prevLevel + 1) {
            warnings.push(`Heading level ${level} skips level ${prevLevel + 1}`);
          }
        }
      }

      return { issues, passed: issues.length === 0, warnings };
    },
  },
  {
    name: 'Interactive elements are keyboard accessible',
    required: true,
    selector: 'button, input, select, textarea, a[href], [role="button"], [role="tab"]',
    test: (element) => {
      const issues: string[] = [];
      const warnings: string[] = [];

      const tabIndex = element.getAttribute('tabindex');
      const isNativelyFocusable = ['button', 'input', 'select', 'textarea', 'a'].includes(
        element.tagName.toLowerCase(),
      );

      if (!isNativelyFocusable && tabIndex === '-1') {
        warnings.push('Interactive element may not be keyboard accessible');
      }

      return { issues, passed: issues.length === 0, warnings };
    },
  },
  {
    name: 'ARIA roles are valid',
    required: true,
    selector: '[role]',
    test: (element) => {
      const issues: string[] = [];
      const warnings: string[] = [];

      const validRoles = [
        'alert',
        'alertdialog',
        'application',
        'article',
        'banner',
        'button',
        'cell',
        'checkbox',
        'columnheader',
        'combobox',
        'complementary',
        'contentinfo',
        'definition',
        'dialog',
        'directory',
        'document',
        'feed',
        'figure',
        'form',
        'grid',
        'gridcell',
        'group',
        'heading',
        'img',
        'link',
        'list',
        'listbox',
        'listitem',
        'log',
        'main',
        'marquee',
        'math',
        'menu',
        'menubar',
        'menuitem',
        'menuitemcheckbox',
        'menuitemradio',
        'navigation',
        'none',
        'note',
        'option',
        'presentation',
        'progressbar',
        'radio',
        'radiogroup',
        'region',
        'row',
        'rowgroup',
        'rowheader',
        'scrollbar',
        'search',
        'searchbox',
        'separator',
        'slider',
        'spinbutton',
        'status',
        'switch',
        'tab',
        'table',
        'tablist',
        'tabpanel',
        'term',
        'textbox',
        'timer',
        'toolbar',
        'tooltip',
        'tree',
        'treegrid',
        'treeitem',
      ];

      const role = element.getAttribute('role');
      if (role && !validRoles.includes(role)) {
        issues.push(`Invalid ARIA role: ${role}`);
      }

      return { issues, passed: issues.length === 0, warnings };
    },
  },
];

/**
 * Lobe Theme specific accessibility tests
 */
const lobeThemeTests: AccessibilityTest[] = [
  {
    name: 'Theme toggle has accessible state',
    required: false,
    selector: '[data-testid="theme-toggle"], .theme-toggle',
    test: (element) => {
      const issues: string[] = [];
      const warnings: string[] = [];

      if (!element.hasAttribute('aria-pressed') && !element.hasAttribute('aria-checked')) {
        warnings.push('Theme toggle missing state indication');
      }

      return { issues, passed: issues.length === 0, warnings };
    },
  },
  {
    name: 'Prompt editor has proper labeling',
    required: true,
    selector: 'textarea[placeholder*="prompt"], .prompt-editor textarea',
    test: (element) => {
      const issues: string[] = [];
      const warnings: string[] = [];

      const hasLabel =
        element.hasAttribute('aria-label') ||
        element.hasAttribute('aria-labelledby') ||
        element.hasAttribute('placeholder');

      if (!hasLabel) {
        issues.push('Prompt editor missing accessible label');
      }

      return { issues, passed: issues.length === 0, warnings };
    },
  },
  {
    name: 'Settings panels have proper headings',
    required: false,
    selector: '.settings-panel, [role="tabpanel"]',
    test: (element) => {
      const issues: string[] = [];
      const warnings: string[] = [];

      const hasHeading = element.querySelector('h1, h2, h3, h4, h5, h6, [role="heading"]');
      if (!hasHeading) {
        warnings.push('Settings panel missing heading');
      }

      return { issues, passed: issues.length === 0, warnings };
    },
  },
];

/**
 * Accessibility test runner
 */
export class AccessibilityTestRunner {
  private testSuites: AccessibilityTestSuite[] = [
    { name: 'Core Accessibility', tests: coreAccessibilityTests },
    { name: 'Lobe Theme Specific', tests: lobeThemeTests },
  ];

  /**
   * Run all accessibility tests
   */
  async runAllTests(container: Element = document.body): Promise<AccessibilityTestResult[]> {
    const results: AccessibilityTestResult[] = [];

    for (const suite of this.testSuites) {
      consola.info(`🧪 Running ${suite.name} tests...`);

      for (const test of suite.tests) {
        const elements = container.querySelectorAll(test.selector);

        if (elements.length === 0 && test.required) {
          results.push({
            component: test.name,
            issues: [`No elements found for required test: ${test.selector}`],
            passed: false,
            score: 0,
            warnings: [],
          });
          continue;
        }

        for (const element of elements) {
          const testResult = test.test(element);
          const score = this.calculateScore(testResult, test.required);

          results.push({
            component: `${test.name} (${element.tagName.toLowerCase()})`,
            issues: testResult.issues,
            passed: testResult.passed,
            score,
            warnings: testResult.warnings,
          });
        }
      }
    }

    return results;
  }

  /**
   * Run tests on specific component
   */
  async testComponent(
    componentElement: Element,
    componentName: string,
  ): Promise<AccessibilityTestResult> {
    const allResults = await this.runAllTests(componentElement);

    const totalScore = allResults.reduce((sum, result) => sum + result.score, 0);
    const averageScore = allResults.length > 0 ? totalScore / allResults.length : 100;

    const allIssues = allResults.flatMap((r) => r.issues);
    const allWarnings = allResults.flatMap((r) => r.warnings);

    return {
      component: componentName,
      issues: allIssues,
      passed: allIssues.length === 0,
      score: Math.round(averageScore),
      warnings: allWarnings,
    };
  }

  /**
   * Calculate accessibility score
   */
  private calculateScore(
    result: { issues: string[]; passed: boolean; warnings: string[] },
    required: boolean,
  ): number {
    if (result.passed && result.warnings.length === 0) return 100;
    if (result.passed && result.warnings.length > 0) return 80;
    if (!result.passed && !required) return 60;
    return 0; // Failed required test
  }

  /**
   * Generate accessibility report
   */
  generateReport(results: AccessibilityTestResult[]): string {
    const totalTests = results.length;
    const passedTests = results.filter((r) => r.passed).length;
    const totalIssues = results.reduce((sum, r) => sum + r.issues.length, 0);
    const totalWarnings = results.reduce((sum, r) => sum + r.warnings.length, 0);
    const averageScore = results.reduce((sum, r) => sum + r.score, 0) / totalTests;

    let report = `
# Accessibility Test Report

## Summary
- **Total Tests**: ${totalTests}
- **Passed**: ${passedTests} (${((passedTests / totalTests) * 100).toFixed(1)}%)
- **Issues**: ${totalIssues}
- **Warnings**: ${totalWarnings}
- **Overall Score**: ${Math.round(averageScore)}/100

## Detailed Results
`;

    results.forEach((result) => {
      report += `
### ${result.component}
- **Status**: ${result.passed ? '✅ PASS' : '❌ FAIL'}
- **Score**: ${result.score}/100
`;

      if (result.issues.length > 0) {
        report += `- **Issues**:\n${result.issues.map((issue) => `  - ${issue}`).join('\n')}\n`;
      }

      if (result.warnings.length > 0) {
        report += `- **Warnings**:\n${result.warnings.map((warning) => `  - ${warning}`).join('\n')}\n`;
      }
    });

    return report;
  }

  /**
   * Log test results to console
   */
  logResults(results: AccessibilityTestResult[]): void {
    const report = this.generateReport(results);
    consola.info(report);

    // Also log individual issues and warnings
    results.forEach((result) => {
      if (!result.passed) {
        consola.error(`♿ ${result.component}: Failed accessibility test`);
        result.issues.forEach((issue) => consola.error(`  - ${issue}`));
      }

      if (result.warnings.length > 0) {
        consola.warn(`♿ ${result.component}: Accessibility warnings`);
        result.warnings.forEach((warning) => consola.warn(`  - ${warning}`));
      }
    });
  }
}

/**
 * Global accessibility test runner instance
 */
export const accessibilityTestRunner = new AccessibilityTestRunner();

/**
 * Quick accessibility audit function for development
 */
export const auditAccessibility = async (container?: Element) => {
  const results = await accessibilityTestRunner.runAllTests(container);
  accessibilityTestRunner.logResults(results);
  return results;
};

/**
 * Make accessibility testing available globally in development
 */
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  (window as any).auditAccessibility = auditAccessibility;
  (window as any).accessibilityTestRunner = accessibilityTestRunner;

  consola.info('🧪 Accessibility testing utilities available:');
  consola.info('  - auditAccessibility() - Run full accessibility audit');
  consola.info(
    '  - accessibilityTestRunner.testComponent(element, name) - Test specific component',
  );
}
