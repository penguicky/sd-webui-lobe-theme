// Dynamic grammar system that updates based on API verification
import { isEmbeddingAPIAvailable, isValidEmbedding } from '@/services/embeddingService';

// Safe debug functions that work in both runtime and test environments
const debugLog = (msg: string, ...args: any[]) => {
  if (typeof window !== 'undefined' && (window as any).enableHighlightDebug) {
    console.log(msg, ...args);
  }
};

const debugWarn = (msg: string, ...args: any[]) => {
  if (typeof window !== 'undefined' && (window as any).enableHighlightDebug) {
    console.warn(msg, ...args);
  }
};

// Enable debug logging by default for now to help troubleshoot
if (typeof window !== 'undefined') {
  (window as any).enableHighlightDebug = true;
}

// Base grammar patterns (static)
const basePatterns = [
  {
    match: '[,]',
    name: 'comma',
  },
  {
    match: 'AND',
    name: 'and',
  },
  {
    match: 'BREAK',
    name: 'break',
  },
  {
    captures: {
      0: {
        name: 'model-bracket',
      },
      1: {
        name: 'model-type',
      },
      2: {
        name: 'model-name',
      },
      3: {
        name: 'number',
      },
    },
    match: '<([^:>\\s]+):([^:>\\s]+):([^>\\s]+)>',
  },
  {
    match: '[<|>]',
    name: 'model-bracket',
  },
  {
    match: '[()\\[\\]{}]',
    name: 'bracket',
  },
  {
    match: ':-?\\d*\\.?\\d+|:-?\\.\\d+',
    name: 'number',
  },
  {
    match: '[:|]',
    name: 'func',
  },
  {
    match: '__.*__',
    name: 'wildcards',
  },
  {
    match: '#.*',
    name: 'comment',
  },
];

// Cache for verified embeddings to avoid repeated API calls
const verifiedEmbeddings = new Map<string, boolean>();
const verificationPromises = new Map<string, Promise<boolean>>();

// Grammar cache to avoid regenerating identical grammars
const grammarCache = new Map<string, any>();
const GRAMMAR_CACHE_SIZE = 50; // Limit cache size to prevent memory issues

/**
 * Extract potential embedding terms from text
 * This function identifies words/terms that could be embeddings
 */
function extractPotentialEmbeddingTerms(text: string): string[] {
  // First, extract terms from weight syntax like (term:1.2) or [term:0.8]
  const weightSyntaxTerms: string[] = [];

  // Match weight syntax patterns and extract the term part
  const weightMatches = text.match(/[([]\s*([^():[\]]+)\s*:[^():[\]]*[)\]]/g);
  if (weightMatches) {
    for (const match of weightMatches) {
      // Extract the term part before the colon
      const termMatch = match.match(/[([]\s*([^():[\]]+)\s*:/);
      if (termMatch && termMatch[1]) {
        const term = termMatch[1].trim();
        if (term.length > 0) {
          weightSyntaxTerms.push(term);
        }
      }
    }
  }

  // Split text by common delimiters and clean up terms
  const regularTerms = text
    .split(/[\s,]+/) // Split by commas and whitespace
    .map((term) => term.trim())
    // Remove parentheses, brackets, and weight syntax from terms
    .map((term) => term.replaceAll(/^[([]+|[)\]]+$/g, '').replace(/:[^():[\]]*$/, ''))
    .filter((term) => term.length > 0);

  // Combine both sets of terms and remove duplicates
  const allTerms = [...new Set([...weightSyntaxTerms, ...regularTerms])];

  // Filter terms based on common criteria
  const filteredTerms = allTerms.filter((term) => {
    // Filter out common prompt terms that are unlikely to be embeddings
    const commonTerms = [
      'masterpiece',
      'best',
      'quality',
      'high',
      'ultra',
      'detailed',
      'beautiful',
      'amazing',
      'stunning',
      'perfect',
      'realistic',
      'photorealistic',
      'cinematic',
      'dramatic',
      'lighting',
      'shadows',
      'colors',
      'vibrant',
      'soft',
      'hard',
      'sharp',
      'blurry',
      'focus',
      'background',
      'foreground',
      'portrait',
      'landscape',
      'close-up',
      'wide',
      'angle',
      'shot',
      'view',
      'perspective',
      'composition',
      'framing',
      'depth',
      'field',
      'bokeh',
      'lens',
      'camera',
      'photo',
      'image',
      'picture',
      'art',
      'artwork',
      'painting',
      'drawing',
      'sketch',
      'illustration',
      'digital',
      'traditional',
      'style',
      'anime',
      'manga',
      'cartoon',
      'realistic',
      'abstract',
      'surreal',
      'fantasy',
      'sci-fi',
      'horror',
      'cute',
      'sexy',
      'elegant',
      'graceful',
      'powerful',
      'strong',
      'weak',
      'small',
      'large',
      'huge',
      'tiny',
      // Add common terms that were causing highlighting issues
      'girl',
      'boy',
      'man',
      'woman',
      'person',
      'people',
      'up',
      'down',
      'left',
      'right',
      'top',
      'bottom',
      'front',
      'back',
      'side',
      'center',
      'middle',
      'x',
      'y',
      'z',
      'a',
      'an',
      'the',
      'and',
      'or',
      'but',
      'in',
      'on',
      'at',
      'to',
      'for',
      'of',
      'with',
      'by',
      'from',
      'as',
      'is',
      'are',
      'was',
      'were',
      'be',
      'been',
      'being',
      'have',
      'has',
      'had',
      'do',
      'does',
      'did',
      'will',
      'would',
      'could',
      'should',
      'may',
      'might',
      'can',
      'must',
      'shall',
      'lora', // Add 'lora' as a common term to prevent it from being treated as an embedding
      'hair',
      'eyes',
      'face',
      'body',
      'hand',
      'hands',
      'arm',
      'arms',
      'leg',
      'legs',
      'foot',
      'feet',
      'head',
      'neck',
      'shoulder',
      'shoulders',
      'chest',
      'back',
      'waist',
      'hip',
      'hips',
      'long',
      'short',
      'tall',
      'big',
      'small',
      'red',
      'blue',
      'green',
      'yellow',
      'orange',
      'purple',
      'pink',
      'black',
      'white',
      'gray',
      'grey',
      'brown',
      'blonde',
      'brunette',
      'dark',
      'light',
      'bright',
      'dim',
      'full',
      'empty',
      'open',
      'closed',
      'new',
      'old',
      'young',
      'adult',
      'teen',
      'child',
      'baby',
    ];

    const lowerTerm = term.toLowerCase();

    // Skip very short terms (likely not embeddings)
    if (term.length < 3) return false;

    // Skip common terms
    if (commonTerms.includes(lowerTerm)) return false;

    // Skip pure numbers
    if (/^\d+$/.test(term)) return false;

    // Skip terms that are just punctuation or special characters
    if (/^\W+$/.test(term)) return false;

    // Note: We no longer skip terms with colons here since we've already
    // extracted terms from weight syntax properly above

    return true;
  });

  // Return the filtered terms
  return filteredTerms;
}

/**
 * Verify embedding terms and cache results
 */
async function verifyEmbeddingTerms(terms: string[]): Promise<Map<string, boolean>> {
  const results = new Map<string, boolean>();

  // Process each term
  for (const term of terms) {
    // Check cache first
    if (verifiedEmbeddings.has(term)) {
      results.set(term, verifiedEmbeddings.get(term)!);
      continue;
    }

    // Check if verification is already in progress
    if (verificationPromises.has(term)) {
      try {
        const result = await verificationPromises.get(term)!;
        results.set(term, result);
        continue;
      } catch (error) {
        debugWarn(`⚠️ Error waiting for embedding verification of "${term}":`, error);
        results.set(term, false);
        continue;
      }
    }

    // Start new verification
    const verificationPromise = isValidEmbedding(term);
    verificationPromises.set(term, verificationPromise);

    try {
      const isValid = await verificationPromise;

      // Cache the result
      verifiedEmbeddings.set(term, isValid);
      results.set(term, isValid);

      debugLog(`✅ Embedding "${term}" verification: ${isValid ? 'VALID' : 'INVALID'}`);
    } catch (error) {
      debugWarn(`⚠️ Error verifying embedding "${term}":`, error);
      verifiedEmbeddings.set(term, false);
      results.set(term, false);
    } finally {
      // Clean up promise
      verificationPromises.delete(term);
    }
  }

  return results;
}

/**
 * Generate dynamic grammar patterns based on verified embeddings
 */
function generateEmbeddingPatterns(verifiedTerms: Map<string, boolean>): any[] {
  const patterns: any[] = [];

  // Separate valid and invalid embeddings
  const validEmbeddings: string[] = [];
  const invalidEmbeddings: string[] = [];

  for (const [term, isValid] of verifiedTerms) {
    if (isValid) {
      validEmbeddings.push(term);
    } else {
      invalidEmbeddings.push(term);
    }
  }

  // Create pattern for valid embeddings (plain text and within weight syntax)
  if (validEmbeddings.length > 0) {
    const validTermsPattern = validEmbeddings
      .map((term) => term.replaceAll(/[$()*+.?[\\\]^{|}]/g, '\\$&')) // Escape regex special chars
      .join('|');

    // Pattern for plain embeddings
    patterns.push(
      {
        match: `\\b(${validTermsPattern})\\b`,
        name: 'embedding-valid',
      },
      {
        captures: {
          1: { name: 'bracket' }, // Opening bracket
          2: { name: 'embedding-valid' }, // Embedding name
          3: { name: 'func' }, // Colon
          4: { name: 'number' }, // Weight value
          5: { name: 'bracket' }, // Closing bracket
        },
        match: `([\\(\\[])\\s*(${validTermsPattern})\\s*(:)(-?[0-9]*\\.?[0-9]+)\\s*([\\)\\]])`,
      },
    );
  }

  // Note: Removed red highlighting for invalid embeddings
  // Invalid embeddings will now fall back to default green text color
  // This provides a cleaner user experience without distracting red strikethrough text

  return patterns;
}

/**
 * Create static grammar as fallback
 */
function createStaticGrammar(): any {
  return {
    $schema: 'https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json',
    fileTypes: ['prompt'],
    name: 'prompt',
    patterns: [
      ...basePatterns,
      // No static embedding patterns since we can't know which terms are embeddings without API verification
    ],
    repository: {},
    scopeName: 'source.prompt',
  };
}

/**
 * Cache grammar with size limit
 */
function cacheGrammar(key: string, grammar: any): void {
  // Implement LRU-like behavior by clearing oldest entries when cache is full
  if (grammarCache.size >= GRAMMAR_CACHE_SIZE) {
    const firstKey = grammarCache.keys().next().value;
    if (firstKey !== undefined) {
      grammarCache.delete(firstKey);
    }
  }

  grammarCache.set(key, grammar);
  debugLog(`📦 Cached grammar for key: ${key} (cache size: ${grammarCache.size})`);
}

/**
 * Create dynamic grammar based on text content
 */
export async function createDynamicGrammar(text: string): Promise<any> {
  try {
    // Create cache key based on potential embedding terms in text
    const embeddingTerms = extractPotentialEmbeddingTerms(text);
    const cacheKey = embeddingTerms.sort().join('|');

    // Check grammar cache first
    if (grammarCache.has(cacheKey)) {
      debugLog('📦 Using cached grammar for embedding terms:', embeddingTerms);
      return grammarCache.get(cacheKey);
    }

    if (embeddingTerms.length === 0) {
      // No embeddings found, use base grammar with static embedding pattern
      return createStaticGrammar();
    }

    debugLog(`🔍 Found ${embeddingTerms.length} embedding terms to verify:`, embeddingTerms);

    // Check if API is available before attempting verification
    const apiAvailable = await isEmbeddingAPIAvailable();
    if (!apiAvailable) {
      debugWarn('⚠️ Embedding API not available, using static grammar with unknown embeddings');
      return createStaticGrammar();
    }

    // Verify embedding terms
    const verifiedTerms = await verifyEmbeddingTerms(embeddingTerms);

    // Generate dynamic patterns
    const embeddingPatterns = generateEmbeddingPatterns(verifiedTerms);

    debugLog(`✅ Generated ${embeddingPatterns.length} dynamic embedding patterns`);

    const grammar = {
      $schema: 'https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json',
      fileTypes: ['prompt'],
      name: 'prompt',
      patterns: [...embeddingPatterns, ...basePatterns],
      repository: {},
      scopeName: 'source.prompt',
    };

    // Cache the generated grammar
    cacheGrammar(cacheKey, grammar);
    return grammar;
  } catch (error) {
    debugWarn('⚠️ Error creating dynamic grammar, falling back to static:', error);
    return createStaticGrammar();
  }
}

/**
 * Clear verification cache
 */
export function clearVerificationCache(): void {
  verifiedEmbeddings.clear();
  verificationPromises.clear();
  debugLog('🧹 Cleared embedding verification cache');
}

/**
 * Test function to debug the complete embedding detection pipeline
 * Usage: window.testEmbeddingPipeline("test text with 2b_Cosplay_HDA embedding")
 */
export async function testEmbeddingPipeline(testText: string): Promise<void> {
  console.log('🧪 Testing Embedding Detection Pipeline');
  console.log('📝 Test text:', testText);

  try {
    // Step 1: Extract potential terms
    console.log('\n🔍 Step 1: Extracting potential embedding terms...');
    const potentialTerms = extractPotentialEmbeddingTerms(testText);
    console.log('📝 Potential terms:', potentialTerms);

    if (potentialTerms.length === 0) {
      console.log('❌ No potential terms found - pipeline will use static grammar');
      return;
    }

    // Step 2: Check API availability
    console.log('\n🌐 Step 2: Checking API availability...');
    const apiAvailable = await isEmbeddingAPIAvailable();
    console.log('📡 API available:', apiAvailable);

    if (!apiAvailable) {
      console.log('❌ API not available - pipeline will use static grammar');
      return;
    }

    // Step 3: Verify embeddings
    console.log('\n🔍 Step 3: Verifying embeddings...');
    const verifiedTerms = await verifyEmbeddingTerms(potentialTerms);
    console.log('✅ Verification results:');
    for (const [term, isValid] of verifiedTerms) {
      console.log(`  - "${term}": ${isValid ? '✅ VALID' : '❌ INVALID'}`);
    }

    // Step 4: Generate patterns
    console.log('\n📋 Step 4: Generating grammar patterns...');
    const patterns = generateEmbeddingPatterns(verifiedTerms);
    console.log('🎯 Generated patterns:', patterns);

    // Step 5: Create complete grammar
    console.log('\n🏗️ Step 5: Creating dynamic grammar...');
    const grammar = await createDynamicGrammar(testText);
    console.log('📄 Grammar structure:', {
      patternNames: grammar.patterns.map((p: any) => p.name).filter(Boolean),
      totalPatterns: grammar.patterns.length,
    });

    console.log('\n✅ Pipeline test completed successfully!');

    // Summary
    const validEmbeddings = Array.from(verifiedTerms.entries())
      .filter(([, isValid]) => isValid)
      .map(([term]) => term);
    const invalidEmbeddings = Array.from(verifiedTerms.entries())
      .filter(([, isValid]) => !isValid)
      .map(([term]) => term);

    console.log('\n📊 Summary:');
    console.log(`  - Potential terms found: ${potentialTerms.length}`);
    console.log(`  - Valid embeddings: ${validEmbeddings.length}`, validEmbeddings);
    console.log(`  - Invalid terms: ${invalidEmbeddings.length}`, invalidEmbeddings);
    console.log(`  - Grammar patterns generated: ${patterns.length}`);
  } catch (error) {
    console.error('❌ Pipeline test failed:', error);
  }
}

// Make test function available globally
if (typeof window !== 'undefined') {
  (window as any).testEmbeddingPipeline = testEmbeddingPipeline;
}

/**
 * Clear grammar cache
 */
export function clearGrammarCache(): void {
  grammarCache.clear();
  debugLog('🧹 Cleared grammar cache');
}

/**
 * Clear all caches
 */
export function clearAllCaches(): void {
  clearVerificationCache();
  clearGrammarCache();
  debugLog('🧹 Cleared all dynamic grammar caches');
}

/**
 * Get performance statistics
 */
export function getDynamicGrammarStats(): {
  activeVerifications: number;
  grammarCacheSize: number;
  verificationCacheSize: number;
} {
  return {
    activeVerifications: verificationPromises.size,
    grammarCacheSize: grammarCache.size,
    verificationCacheSize: verifiedEmbeddings.size,
  };
}

/**
 * Log performance statistics
 */
export function logDynamicGrammarStats(): void {
  const stats = getDynamicGrammarStats();
  debugLog('📊 Dynamic Grammar Performance Stats:', stats);
}
