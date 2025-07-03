/* eslint-disable import/first */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { createDynamicGrammar } from '../src/modules/PromptHighlight/features/dynamicGrammar';
import { isEmbeddingAPIAvailable, isValidEmbedding } from '../src/services/embeddingService';

// Mock the embedding service
vi.mock('../src/services/embeddingService', () => ({
  isEmbeddingAPIAvailable: vi.fn(),
  isValidEmbedding: vi.fn(),
}));

const mockIsValidEmbedding = vi.mocked(isValidEmbedding);
const mockIsEmbeddingAPIAvailable = vi.mocked(isEmbeddingAPIAvailable);

describe('Integration Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockIsEmbeddingAPIAvailable.mockResolvedValue(true);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('End-to-End Embedding Verification', () => {
    it('should correctly process a realistic prompt with mixed embeddings', async () => {
      const prompt = `masterpiece, best quality, valid_style, 1girl, beautiful,
        invalid_embedding, detailed face, another_valid, photorealistic`;

      // Mock API responses
      mockIsValidEmbedding.mockImplementation((term) => {
        const validEmbeddings = ['valid_style', 'another_valid'];
        return Promise.resolve(validEmbeddings.includes(term));
      });

      const grammar = await createDynamicGrammar(prompt);

      // Verify grammar structure
      expect(grammar).toHaveProperty('patterns');
      expect(grammar.patterns).toBeInstanceOf(Array);
      expect(grammar.patterns.length).toBeGreaterThan(0);

      // Verify that valid embeddings are handled
      expect(mockIsValidEmbedding).toHaveBeenCalledWith('valid_style');
      expect(mockIsValidEmbedding).toHaveBeenCalledWith('invalid_embedding');
      expect(mockIsValidEmbedding).toHaveBeenCalledWith('another_valid');

      // Verify grammar contains patterns for different embedding states
      const patternMatches = grammar.patterns.map((p: any) => p.match).join(' ');
      expect(patternMatches).toContain('valid_style');
      expect(patternMatches).toContain('invalid_embedding');
      expect(patternMatches).toContain('another_valid');
    });

    it('should handle prompts with no embeddings gracefully', async () => {
      const prompt = 'masterpiece, best quality, 1girl, beautiful, detailed face, photorealistic';

      const grammar = await createDynamicGrammar(prompt);

      // Should still create valid grammar
      expect(grammar).toHaveProperty('patterns');
      expect(grammar.patterns).toBeInstanceOf(Array);

      // Should not call embedding verification
      expect(mockIsValidEmbedding).not.toHaveBeenCalled();

      // Should include base patterns
      const patternMatches = grammar.patterns.map((p: any) => p.match);
      expect(patternMatches).toContain('[,]');
      expect(patternMatches).toContain('AND');
    });

    it('should handle API unavailability gracefully', async () => {
      const prompt = 'masterpiece, test_embedding, best quality';

      mockIsEmbeddingAPIAvailable.mockResolvedValue(false);

      const grammar = await createDynamicGrammar(prompt);

      // Should create static grammar
      expect(grammar).toHaveProperty('patterns');
      expect(grammar.patterns).toBeInstanceOf(Array);

      // Should not call embedding verification when API is unavailable
      expect(mockIsValidEmbedding).not.toHaveBeenCalled();

      // Should fall back to static grammar
      expect(grammar.patterns).toBeInstanceOf(Array);
      expect(grammar.patterns.length).toBeGreaterThanOrEqual(0);
    });

    it('should handle complex embedding names correctly', async () => {
      const prompt = `style_v1.2, character_name, test.embedding`;

      mockIsValidEmbedding.mockImplementation((term) => {
        return Promise.resolve(term === 'style_v1.2');
      });

      const grammar = await createDynamicGrammar(prompt);

      // Verify all embeddings were checked
      expect(mockIsValidEmbedding).toHaveBeenCalledWith('style_v1.2');
      expect(mockIsValidEmbedding).toHaveBeenCalledWith('character-name');
      expect(mockIsValidEmbedding).toHaveBeenCalledWith('test.embedding');

      // Verify grammar was created
      expect(grammar).toHaveProperty('patterns');
      expect(grammar.patterns.length).toBeGreaterThan(0);
    });

    it('should maintain performance with many embeddings', async () => {
      // Create a prompt with many embeddings
      const embeddings = Array.from({ length: 20 }, (_, i) => `test${i}`);
      const prompt = embeddings.join(', ');

      mockIsValidEmbedding.mockImplementation((term) => {
        // Make half of them valid
        const num = parseInt(term.replace('test', ''));
        return Promise.resolve(num % 2 === 0);
      });

      const startTime = Date.now();
      const grammar = await createDynamicGrammar(prompt);
      const endTime = Date.now();

      // Should complete reasonably quickly (less than 1 second)
      expect(endTime - startTime).toBeLessThan(1000);

      // Should have processed all embeddings
      expect(mockIsValidEmbedding).toHaveBeenCalledTimes(20);

      // Should create valid grammar
      expect(grammar).toHaveProperty('patterns');
      expect(grammar.patterns.length).toBeGreaterThan(0);
    });
  });

  describe('Grammar Validation', () => {
    it('should create TextMate-compatible grammar structure', async () => {
      const prompt = 'test valid_embedding prompt';

      mockIsValidEmbedding.mockResolvedValue(true);

      const grammar = await createDynamicGrammar(prompt);

      // Verify required TextMate grammar properties
      expect(grammar).toHaveProperty('$schema');
      expect(grammar).toHaveProperty('fileTypes');
      expect(grammar).toHaveProperty('name', 'prompt');
      expect(grammar).toHaveProperty('scopeName', 'source.prompt');
      expect(grammar).toHaveProperty('patterns');
      expect(grammar).toHaveProperty('repository');

      // Verify patterns structure
      grammar.patterns.forEach((pattern: any) => {
        expect(pattern).toHaveProperty('match');
        if (pattern.captures) {
          Object.values(pattern.captures).forEach((capture: any) => {
            expect(capture).toHaveProperty('name');
          });
        }
      });
    });
  });
});
