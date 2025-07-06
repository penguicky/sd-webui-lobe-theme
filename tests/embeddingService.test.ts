import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import {
  getAllEmbeddings,
  getEmbeddingServiceStatus,
  isEmbeddingAPIAvailable,
  isValidEmbedding,
  refreshEmbeddings,
} from '../src/services/embeddingService';

// Mock fetch globally
const mockFetch = vi.fn();
global.fetch = mockFetch;

// Mock localStorage
const mockLocalStorage = {
  clear: vi.fn(),
  getItem: vi.fn(),
  removeItem: vi.fn(),
  setItem: vi.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
});

// Mock window.location
Object.defineProperty(window, 'location', {
  value: {
    hostname: 'localhost',
    origin: 'http://localhost:7860',
    port: '7860',
  },
  writable: true,
});

describe('EmbeddingService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockLocalStorage.getItem.mockReturnValue(null);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('isEmbeddingAPIAvailable', () => {
    it('should return true when API is available', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
      });

      const result = await isEmbeddingAPIAvailable();
      expect(result).toBe(true);
      expect(mockFetch).toHaveBeenCalledWith(
        'http://localhost:7860/sdapi/v1/embeddings',
        expect.objectContaining({
          method: 'HEAD',
        }),
      );
    });

    it('should return false when API is not available', async () => {
      mockFetch.mockRejectedValueOnce(new Error('Network error'));

      const result = await isEmbeddingAPIAvailable();
      expect(result).toBe(false);
    });

    it('should return false when API returns error status', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 404,
      });

      const result = await isEmbeddingAPIAvailable();
      expect(result).toBe(false);
    });
  });

  describe('isValidEmbedding', () => {
    const mockEmbeddingsResponse = {
      loaded: {
        'another-embedding': {
          sd_checkpoint: 'test2.ckpt',
          sd_checkpoint_name: 'test2',
          shape: 768,
          step: 2000,
          vectors: 1,
        },
        'test-embedding': {
          sd_checkpoint: 'test.ckpt',
          sd_checkpoint_name: 'test',
          shape: 768,
          step: 1000,
          vectors: 1,
        },
      },
      skipped: {
        'skipped-embedding': {
          sd_checkpoint: 'skipped.ckpt',
          sd_checkpoint_name: 'skipped',
          shape: 768,
          step: 500,
          vectors: 1,
        },
      },
    };

    it('should return true for valid loaded embedding', async () => {
      mockFetch.mockResolvedValueOnce({
        json: () => Promise.resolve(mockEmbeddingsResponse),
        ok: true,
      });

      const result = await isValidEmbedding('test-embedding');
      expect(result).toBe(true);
    });

    it('should return true for valid skipped embedding', async () => {
      mockFetch.mockResolvedValueOnce({
        json: () => Promise.resolve(mockEmbeddingsResponse),
        ok: true,
      });

      const result = await isValidEmbedding('skipped-embedding');
      expect(result).toBe(true);
    });

    it('should return false for invalid embedding', async () => {
      mockFetch.mockResolvedValueOnce({
        json: () => Promise.resolve(mockEmbeddingsResponse),
        ok: true,
      });

      const result = await isValidEmbedding('nonexistent-embedding');
      expect(result).toBe(false);
    });

    it('should return false when API call fails', async () => {
      mockFetch.mockRejectedValueOnce(new Error('Network error'));

      const result = await isValidEmbedding('test-embedding');
      expect(result).toBe(false);
    });

    it('should cache results to avoid duplicate API calls', async () => {
      mockFetch.mockResolvedValueOnce({
        json: () => Promise.resolve(mockEmbeddingsResponse),
        ok: true,
      });

      // First call
      const result1 = await isValidEmbedding('test-embedding');
      expect(result1).toBe(true);

      // Second call should use cache
      const result2 = await isValidEmbedding('test-embedding');
      expect(result2).toBe(true);

      // Should only have made one API call
      expect(mockFetch).toHaveBeenCalledTimes(1);
    });
  });

  describe('getAllEmbeddings', () => {
    const mockEmbeddingsResponse = {
      loaded: {
        'embedding-a': {},
        'embedding-b': {},
      },
      skipped: {
        'embedding-c': {},
      },
    };

    it('should return all embeddings sorted alphabetically', async () => {
      mockFetch.mockResolvedValueOnce({
        json: () => Promise.resolve(mockEmbeddingsResponse),
        ok: true,
      });

      const result = await getAllEmbeddings();
      expect(result).toEqual(['embedding-a', 'embedding-b', 'embedding-c']);
    });

    it('should return empty array when API fails', async () => {
      mockFetch.mockRejectedValueOnce(new Error('Network error'));

      const result = await getAllEmbeddings();
      expect(result).toEqual([]);
    });
  });

  describe('caching', () => {
    it('should use localStorage cache when available and valid', async () => {
      const cachedEmbeddings = ['cached-embedding-1', 'cached-embedding-2'];
      const cacheTimestamp = Date.now() - 60_000; // 1 minute ago (within 5 minute cache)

      mockLocalStorage.getItem.mockImplementation((key) => {
        if (key === 'webui_embeddings_cache') {
          return JSON.stringify(cachedEmbeddings);
        }
        if (key === 'webui_embeddings_last_fetch') {
          return cacheTimestamp.toString();
        }
        return null;
      });

      const result = await isValidEmbedding('cached-embedding-1');
      expect(result).toBe(true);

      // Should not have made any API calls
      expect(mockFetch).not.toHaveBeenCalled();
    });

    it('should ignore expired cache', async () => {
      const cachedEmbeddings = ['cached-embedding-1'];
      const expiredTimestamp = Date.now() - 10 * 60 * 1000; // 10 minutes ago (expired)

      mockLocalStorage.getItem.mockImplementation((key) => {
        if (key === 'webui_embeddings_cache') {
          return JSON.stringify(cachedEmbeddings);
        }
        if (key === 'webui_embeddings_last_fetch') {
          return expiredTimestamp.toString();
        }
        return null;
      });

      mockFetch.mockResolvedValueOnce({
        json: () => Promise.resolve({ loaded: {}, skipped: {} }),
        ok: true,
      });

      const result = await isValidEmbedding('cached-embedding-1');
      expect(result).toBe(false);

      // Should have made API call due to expired cache
      expect(mockFetch).toHaveBeenCalledTimes(1);
    });
  });

  describe('refreshEmbeddings', () => {
    it('should clear cache and fetch fresh data', async () => {
      const mockEmbeddingsResponse = {
        loaded: { 'fresh-embedding': {} },
        skipped: {},
      };

      mockFetch.mockResolvedValueOnce({
        json: () => Promise.resolve(mockEmbeddingsResponse),
        ok: true,
      });

      await refreshEmbeddings();

      expect(mockLocalStorage.removeItem).toHaveBeenCalledWith('webui_embeddings_cache');
      expect(mockLocalStorage.removeItem).toHaveBeenCalledWith('webui_embeddings_last_fetch');
      expect(mockFetch).toHaveBeenCalledWith(
        'http://localhost:7860/sdapi/v1/embeddings',
        expect.objectContaining({
          method: 'GET',
        }),
      );
    });
  });

  describe('getEmbeddingServiceStatus', () => {
    it('should return correct status information', async () => {
      // First, populate cache
      mockFetch.mockResolvedValueOnce({
        json: () =>
          Promise.resolve({
            loaded: { 'test-embedding': {} },
            skipped: {},
          }),
        ok: true,
      });

      await isValidEmbedding('test-embedding');

      const status = getEmbeddingServiceStatus();
      expect(status.cacheSize).toBe(1);
      expect(status.isHealthy).toBe(true);
      expect(status.lastFetch).toBeTypeOf('number');
      expect(status.cacheAge).toBeTypeOf('number');
    });
  });
});
