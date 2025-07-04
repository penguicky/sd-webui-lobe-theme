// Test script to verify the theme configuration fix
// This script tests that the themeConfig function works correctly with boolean parameters

const { themeConfig } = require('./src/modules/PromptHighlight/features/promptTheme.ts');

console.log('🧪 Testing theme configuration fix...\n');

// Test all theme combinations
const testCases = [
  { expected: 'light', isDarkMode: false, isNegPrompt: false },
  { expected: 'light-neg-prompt', isDarkMode: false, isNegPrompt: true },
  { expected: 'dark', isDarkMode: true, isNegPrompt: false },
  { expected: 'dark-neg-prompt', isDarkMode: true, isNegPrompt: true },
];

let allTestsPassed = true;

testCases.forEach(({ isDarkMode, isNegPrompt, expected }, index) => {
  try {
    const theme = themeConfig(isDarkMode, isNegPrompt);
    const success = theme.name === expected;

    console.log(`Test ${index + 1}: ${success ? '✅' : '❌'}`);
    console.log(`  Input: isDarkMode=${isDarkMode}, isNegPrompt=${isNegPrompt}`);
    console.log(`  Expected: "${expected}"`);
    console.log(`  Actual: "${theme.name}"`);
    console.log(`  Type: "${theme.type}"`);
    console.log('');

    if (!success) {
      allTestsPassed = false;
    }
  } catch (error) {
    console.log(`Test ${index + 1}: ❌ ERROR`);
    console.log(`  Error: ${error.message}`);
    console.log('');
    allTestsPassed = false;
  }
});

console.log(
  `\n🎯 Overall Result: ${allTestsPassed ? '✅ ALL TESTS PASSED' : '❌ SOME TESTS FAILED'}`,
);

if (allTestsPassed) {
  console.log('\n🎉 Theme configuration fix is working correctly!');
  console.log('✨ Light theme syntax highlighting should now be visible.');
} else {
  console.log('\n⚠️  Theme configuration still has issues.');
}
