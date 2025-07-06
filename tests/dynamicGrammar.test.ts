/* eslint-disable import/first */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import {
  clearGrammarCache,
  clearVerificationCache,
  createDynamicGrammar,
  getDynamicGrammarStats,
} from '../src/modules/PromptHighlight/features/dynamicGrammar';
import { isEmbeddingAPIAvailable, isValidEmbedding } from '../src/services/embeddingService';

// Mock the embedding service - must be before imports
vi.mock('../src/services/embeddingService', () => ({
  isEmbeddingAPIAvailable: vi.fn(),
  isValidEmbedding: vi.fn(),
}));

// Mock the debug functions - must be before imports
vi.mock('../src/hooks/useHighlight', () => ({
  debugLog: vi.fn(),
  debugWarn: vi.fn(),
}));

const mockIsValidEmbedding = vi.mocked(isValidEmbedding);
const mockIsEmbeddingAPIAvailable = vi.mocked(isEmbeddingAPIAvailable);

describe('DynamicGrammar', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    clearVerificationCache();
    clearGrammarCache();

    // Default mocks
    mockIsEmbeddingAPIAvailable.mockResolvedValue(true);
    mockIsValidEmbedding.mockResolvedValue(false);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('createDynamicGrammar', () => {
    it('should create static grammar when no potential embeddings are found', async () => {
      const text = 'masterpiece, best quality, beautiful';
      const grammar = await createDynamicGrammar(text);

      expect(grammar).toHaveProperty('patterns');
      expect(grammar.patterns).toBeInstanceOf(Array);

      // Should not call embedding verification for common terms
      expect(mockIsValidEmbedding).not.toHaveBeenCalled();
    });

    it('should create dynamic grammar with valid embeddings', async () => {
      const text = 'masterpiece, my_custom_embedding, best quality';

      mockIsValidEmbedding.mockImplementation((term) => {
        return Promise.resolve(term === 'my_custom_embedding');
      });

      const grammar = await createDynamicGrammar(text);

      expect(grammar).toHaveProperty('patterns');
      expect(mockIsValidEmbedding).toHaveBeenCalledWith('my_custom_embedding');

      // Should contain pattern for valid embeddings
      const validPattern = grammar.patterns.find((p: any) => p.name === 'embedding-valid');
      expect(validPattern).toBeDefined();
      expect(validPattern.match).toContain('my_custom_embedding');
    });

    it('should create dynamic grammar with invalid embeddings', async () => {
      const text = 'masterpiece, invalid_embedding, best quality';

      mockIsValidEmbedding.mockImplementation((term) => {
        return Promise.resolve(term !== 'invalid_embedding');
      });

      const grammar = await createDynamicGrammar(text);

      expect(grammar).toHaveProperty('patterns');
      expect(mockIsValidEmbedding).toHaveBeenCalledWith('invalid_embedding');

      // Should contain pattern for invalid embeddings
      const invalidPattern = grammar.patterns.find((p: any) => p.name === 'embedding-invalid');
      expect(invalidPattern).toBeDefined();
      expect(invalidPattern.match).toContain('invalid_embedding');
    });

    it('should handle mixed valid and invalid embeddings', async () => {
      const text = 'masterpiece, valid_embedding, invalid_embedding, best quality';

      mockIsValidEmbedding.mockImplementation((term) => {
        return Promise.resolve(term === 'valid_embedding');
      });

      const grammar = await createDynamicGrammar(text);

      expect(grammar).toHaveProperty('patterns');
      expect(mockIsValidEmbedding).toHaveBeenCalledWith('valid_embedding');
      expect(mockIsValidEmbedding).toHaveBeenCalledWith('invalid_embedding');

      // Should contain patterns for both valid and invalid embeddings
      const validPattern = grammar.patterns.find((p: any) => p.name === 'embedding-valid');
      const invalidPattern = grammar.patterns.find((p: any) => p.name === 'embedding-invalid');

      expect(validPattern).toBeDefined();
      expect(invalidPattern).toBeDefined();
      expect(validPattern.match).toContain('valid_embedding');
      expect(invalidPattern.match).toContain('invalid_embedding');
    });

    it('should fall back to static grammar when API is unavailable', async () => {
      const text = 'masterpiece, some_embedding, best quality';

      mockIsEmbeddingAPIAvailable.mockResolvedValue(false);

      const grammar = await createDynamicGrammar(text);

      expect(grammar).toHaveProperty('patterns');
      expect(mockIsEmbeddingAPIAvailable).toHaveBeenCalled();
      expect(mockIsValidEmbedding).not.toHaveBeenCalled();

      // Should use static grammar without embedding patterns
      expect(grammar.patterns).toBeInstanceOf(Array);
    });

    it('should handle duplicate embeddings correctly', async () => {
      const text = 'masterpiece, duplicate_embedding, duplicate_embedding, best quality';

      mockIsValidEmbedding.mockImplementation((term) => {
        return Promise.resolve(term === 'duplicate_embedding');
      });

      const grammar = await createDynamicGrammar(text);

      expect(grammar).toHaveProperty('patterns');
      // Should only call verification once for duplicate terms
      expect(mockIsValidEmbedding).toHaveBeenCalledTimes(1);
      expect(mockIsValidEmbedding).toHaveBeenCalledWith('duplicate_embedding');
    });

    it('should escape regex special characters in embedding names', async () => {
      const text = 'masterpiece, test.special+chars*, best quality';

      mockIsValidEmbedding.mockImplementation((term) => {
        return Promise.resolve(term === 'test.special+chars*');
      });

      const grammar = await createDynamicGrammar(text);

      expect(grammar).toHaveProperty('patterns');
      expect(mockIsValidEmbedding).toHaveBeenCalledWith('test.special+chars*');

      const validPattern = grammar.patterns.find((p: any) => p.name === 'embedding-valid');
      expect(validPattern).toBeDefined();
      // Should escape special regex characters
      expect(validPattern.match).toContain('test\\.special\\+chars\\*');
    });

    it('should cache grammar results', async () => {
      const text = 'masterpiece, cached_test, best quality';

      mockIsValidEmbedding.mockResolvedValue(true);

      // First call
      const grammar1 = await createDynamicGrammar(text);
      expect(mockIsValidEmbedding).toHaveBeenCalledTimes(1);

      // Second call with same text should use cache
      const grammar2 = await createDynamicGrammar(text);
      expect(mockIsValidEmbedding).toHaveBeenCalledTimes(1); // No additional calls

      expect(grammar1).toEqual(grammar2);
    });

    it('should handle API errors gracefully', async () => {
      const text = 'masterpiece, error_test, best quality';

      mockIsValidEmbedding.mockRejectedValue(new Error('API Error'));

      const grammar = await createDynamicGrammar(text);

      expect(grammar).toHaveProperty('patterns');
      // Should fall back to static grammar on error
      expect(grammar.patterns).toBeInstanceOf(Array);
    });
  });

  describe('cache management', () => {
    it('should track cache statistics', async () => {
      const text = 'masterpiece, stats_test, best quality';

      mockIsValidEmbedding.mockResolvedValue(true);

      await createDynamicGrammar(text);

      const stats = getDynamicGrammarStats();
      expect(stats.verificationCacheSize).toBeGreaterThan(0);
      expect(stats.grammarCacheSize).toBeGreaterThan(0);
      expect(stats.activeVerifications).toBe(0);
    });

    it('should clear caches when requested', async () => {
      const text = 'masterpiece, clear_test, best quality';

      mockIsValidEmbedding.mockResolvedValue(true);

      await createDynamicGrammar(text);

      let stats = getDynamicGrammarStats();
      expect(stats.verificationCacheSize).toBeGreaterThan(0);
      expect(stats.grammarCacheSize).toBeGreaterThan(0);

      clearVerificationCache();
      clearGrammarCache();

      stats = getDynamicGrammarStats();
      expect(stats.verificationCacheSize).toBe(0);
      expect(stats.grammarCacheSize).toBe(0);
    });
  });

  describe('grammar structure', () => {
    it('should include all base patterns', async () => {
      const text = 'simple text without embeddings';
      const grammar = await createDynamicGrammar(text);

      expect(grammar).toHaveProperty('$schema');
      expect(grammar).toHaveProperty('fileTypes', ['prompt']);
      expect(grammar).toHaveProperty('name', 'prompt');
      expect(grammar).toHaveProperty('scopeName', 'source.prompt');
      expect(grammar).toHaveProperty('repository', {});
      expect(grammar).toHaveProperty('patterns');

      // Should include base patterns like comma, AND, BREAK, etc.
      const patternMatches = grammar.patterns.map((p: any) => p.match);
      expect(patternMatches).toContain('[,]');
      expect(patternMatches).toContain('AND');
      expect(patternMatches).toContain('BREAK');
    });
  });
});
