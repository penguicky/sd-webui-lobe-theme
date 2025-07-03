// Service for managing embedding verification via WebUI API
import { debugError, debugLog, debugWarn } from '../modules/PromptHighlight/utils/debug';

// Types for embedding data from WebUI API
export interface EmbeddingInfo {
  sd_checkpoint: string;
  sd_checkpoint_name: string;
  shape: number;
  step: number;
  vectors: number;
}

export interface EmbeddingsResponse {
  loaded: Record<string, EmbeddingInfo>;
  skipped: Record<string, EmbeddingInfo>;
}

// Cache configuration
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const CACHE_KEY = 'webui_embeddings_cache';
const LAST_FETCH_KEY = 'webui_embeddings_last_fetch';

// Cache interface
interface EmbeddingCache {
  embeddings: Set<string>;
  timestamp: number;
}

// Global cache state
let embeddingCache: EmbeddingCache | null = null;
let fetchPromise: Promise<Set<string>> | null = null;

/**
 * Get the WebUI base URL from current page
 */
function getWebUIBaseUrl(): string {
  // Always use the current page's origin for Forge WebUI
  // This ensures we're connecting to the same server that served the page
  const currentUrl = window.location.origin;

  // Only log base URL on first call or when debug is explicitly enabled
  return currentUrl;
}

/**
 * Fetch embeddings from WebUI API
 */
async function fetchEmbeddingsFromAPI(): Promise<Set<string>> {
  const baseUrl = getWebUIBaseUrl();
  const apiUrl = `${baseUrl}/sdapi/v1/embeddings`;

  // Only log API calls when debug is enabled - this is very verbose

  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/json',
        'Cache-Control': 'no-cache',
      },
      method: 'GET',
      // Add timeout to prevent hanging
      signal: AbortSignal.timeout(15_000), // 15 second timeout for initial load
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data: EmbeddingsResponse = await response.json();

    // Extract embedding names from both loaded and skipped
    const embeddingNames = new Set<string>();

    // Add loaded embeddings
    Object.keys(data.loaded || {}).forEach((name) => {
      embeddingNames.add(name);
    });

    // Add skipped embeddings (they still exist, just not loaded)
    Object.keys(data.skipped || {}).forEach((name) => {
      embeddingNames.add(name);
    });

    // Only log success when debug is enabled - this is very verbose
    debugLog(`✅ Successfully fetched ${embeddingNames.size} embeddings from WebUI API`);

    return embeddingNames;
  } catch (error) {
    debugWarn('❌ Failed to fetch embeddings from API:', error);

    // Provide more specific error information
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      debugWarn('🔌 Network error - WebUI API may not be available or CORS issue');
    } else if (error instanceof DOMException && error.name === 'AbortError') {
      debugWarn('⏱️ Request timeout - WebUI API is taking too long to respond');
    }

    throw error;
  }
}

/**
 * Get cached embeddings or fetch from API
 */
async function getEmbeddings(): Promise<Set<string>> {
  const now = Date.now();

  // Check if we have valid cached data
  if (embeddingCache && now - embeddingCache.timestamp < CACHE_DURATION) {
    // Only log cache usage when debug is enabled
    debugLog('📦 Using cached embeddings data');
    return embeddingCache.embeddings;
  }

  // Prevent multiple simultaneous fetches
  if (fetchPromise) {
    // Only log waiting when debug is enabled
    debugLog('⏳ Waiting for ongoing embeddings fetch...');
    return fetchPromise;
  }

  // Start new fetch with retry logic
  fetchPromise = (async () => {
    let lastError: Error | null = null;
    const maxRetries = 2;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        // Only log retry attempts when debug is enabled
        debugLog(`🔄 Fetching embeddings from API (attempt ${attempt}/${maxRetries})`);
        const embeddings = await fetchEmbeddingsFromAPI();

        // Update cache
        embeddingCache = {
          embeddings,
          timestamp: now,
        };

        // Store in localStorage for persistence across page reloads
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify(Array.from(embeddings)));
          localStorage.setItem(LAST_FETCH_KEY, now.toString());
        } catch (storageError) {
          debugWarn('⚠️ Failed to store embeddings in localStorage:', storageError);
        }

        // Only log success when debug is enabled
        debugLog(`✅ Successfully fetched and cached ${embeddings.size} embeddings`);
        return embeddings;
      } catch (error) {
        lastError = error as Error;
        debugWarn(`❌ Attempt ${attempt} failed:`, error);

        // Wait before retry (except on last attempt)
        if (attempt < maxRetries) {
          await new Promise((resolve) => {
            setTimeout(resolve, 1000 * attempt); // Progressive delay
          });
        }
      }
    }

    // All attempts failed - check for fallback options
    debugWarn('⚠️ All API attempts failed, checking fallback options');

    // Try to use expired cache if available
    if (embeddingCache) {
      debugLog('📦 Using expired cached embeddings as fallback');
      return embeddingCache.embeddings;
    }

    // Try localStorage as last resort
    try {
      const cachedData = localStorage.getItem(CACHE_KEY);
      if (cachedData) {
        const parsedData = JSON.parse(cachedData) as string[];
        const embeddings = new Set<string>(parsedData);
        debugLog(`📦 Using localStorage fallback with ${embeddings.size} embeddings`);
        return embeddings;
      }
    } catch (storageError) {
      debugWarn('⚠️ Failed to read localStorage fallback:', storageError);
    }

    // Log the final error for debugging
    debugError('💥 No embeddings available - API failed and no cache:', lastError);

    // Return empty set as last resort
    return new Set<string>();
  })().finally(() => {
    // Clear the promise so future calls can make new requests
    fetchPromise = null;
  });

  return fetchPromise!; // We know it's not null because we just assigned it
}

/**
 * Initialize embeddings cache from localStorage if available
 */
function initializeCache(): void {
  try {
    const cachedData = localStorage.getItem(CACHE_KEY);
    const lastFetch = localStorage.getItem(LAST_FETCH_KEY);

    if (cachedData && lastFetch) {
      const timestamp = parseInt(lastFetch, 10);
      const now = Date.now();

      // Only use cached data if it's still valid
      if (now - timestamp < CACHE_DURATION) {
        const embeddingArray: string[] = JSON.parse(cachedData);
        embeddingCache = {
          embeddings: new Set(embeddingArray),
          timestamp,
        };
        debugLog(`📦 Initialized embeddings cache with ${embeddingArray.length} entries`);
      }
    }
  } catch (error) {
    debugWarn('⚠️ Failed to initialize embeddings cache from localStorage:', error);
  }
}

/**
 * Check if a term is a valid embedding
 */
export async function isValidEmbedding(term: string): Promise<boolean> {
  try {
    const embeddings = await getEmbeddings();
    const isValid = embeddings.has(term);

    // Only log individual verifications when debug is enabled - this is extremely verbose
    // debugLog(`🔍 Embedding verification for "${term}": ${isValid ? 'VALID' : 'INVALID'}`);

    return isValid;
  } catch (error) {
    debugError('❌ Error during embedding verification:', error);
    // On error, return false (graceful degradation)
    return false;
  }
}

/**
 * Get all available embeddings
 */
export async function getAllEmbeddings(): Promise<string[]> {
  try {
    const embeddings = await getEmbeddings();
    return Array.from(embeddings).sort();
  } catch (error) {
    debugError('❌ Error getting all embeddings:', error);
    return [];
  }
}

/**
 * Force refresh embeddings cache
 */
export async function refreshEmbeddings(): Promise<void> {
  debugLog('🔄 Force refreshing embeddings cache...');

  // Clear current cache
  embeddingCache = null;
  fetchPromise = null;

  // Clear localStorage
  try {
    localStorage.removeItem(CACHE_KEY);
    localStorage.removeItem(LAST_FETCH_KEY);
  } catch (error) {
    debugWarn('⚠️ Failed to clear embeddings cache from localStorage:', error);
  }

  // Fetch fresh data
  await getEmbeddings();
}

/**
 * Check if embeddings API is available
 */
export async function isEmbeddingAPIAvailable(): Promise<boolean> {
  const baseUrl = getWebUIBaseUrl();
  const apiUrl = `${baseUrl}/sdapi/v1/embeddings`;

  try {
    // Use GET request since HEAD is not supported by Forge WebUI
    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/json',
        'Cache-Control': 'no-cache',
      },
      method: 'GET',
      signal: AbortSignal.timeout(5000), // 5 second timeout
    });

    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Get embedding service health status
 */
export function getEmbeddingServiceStatus(): {
  cacheAge: number | null;
  cacheSize: number;
  isHealthy: boolean;
  lastFetch: number | null;
} {
  const now = Date.now();
  const lastFetch = embeddingCache?.timestamp || null;
  const cacheAge = lastFetch ? now - lastFetch : null;

  return {
    cacheAge,
    cacheSize: embeddingCache?.embeddings.size || 0,
    isHealthy: cacheAge !== null && cacheAge < CACHE_DURATION,
    lastFetch,
  };
}

/**
 * Monitor embedding service performance
 */
export function logEmbeddingServiceStats(): void {
  const status = getEmbeddingServiceStatus();
  debugLog('📊 Embedding Service Status:', {
    cacheAgeMinutes: status.cacheAge ? Math.round(status.cacheAge / 60_000) : null,
    cacheSize: status.cacheSize,
    isHealthy: status.isHealthy,
    lastFetch: status.lastFetch ? new Date(status.lastFetch).toISOString() : null,
  });
}

/**
 * Test function to verify API endpoint works - can be called from browser console
 * Usage: window.testEmbeddingAPI()
 */
export async function testEmbeddingAPI(): Promise<void> {
  const baseUrl = getWebUIBaseUrl();
  const apiUrl = `${baseUrl}/sdapi/v1/embeddings`;

  console.log('🧪 Testing Embedding API...');
  console.log('📍 API URL:', apiUrl);

  try {
    const response = await fetch(apiUrl, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    });

    console.log('📊 Response Status:', response.status, response.statusText);
    console.log('📋 Response Headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('✅ API Response:', data);
    console.log('📈 Loaded Embeddings:', Object.keys(data.loaded || {}).length);
    console.log('📈 Skipped Embeddings:', Object.keys(data.skipped || {}).length);
    console.log(
      '🎯 Total Embeddings:',
      Object.keys(data.loaded || {}).length + Object.keys(data.skipped || {}).length,
    );

    if (Object.keys(data.loaded || {}).length > 0) {
      console.log('📝 Sample Embeddings:', Object.keys(data.loaded).slice(0, 5));
    }
  } catch (error) {
    console.error('❌ API Test Failed:', error);

    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      console.error('🔌 Network Error - Check if WebUI is running and accessible');
    } else if (error instanceof DOMException && error.name === 'AbortError') {
      console.error('⏱️ Request Timeout');
    }
  }
}

/**
 * Test function to verify LoRA API endpoint - can be called from browser console
 * Usage: window.testLoRAAPI()
 */
export async function testLoRAAPI(): Promise<void> {
  const baseUrl = getWebUIBaseUrl();
  const apiUrl = `${baseUrl}/sdapi/v1/loras`;

  console.log('🧪 Testing LoRA API...');
  console.log('📍 API URL:', apiUrl);

  try {
    const response = await fetch(apiUrl, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    });

    console.log('📊 Response Status:', response.status, response.statusText);
    console.log('📋 Response Headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('✅ LoRA API Response:', data);

    if (Array.isArray(data)) {
      console.log('📈 Total LoRAs:', data.length);
      if (data.length > 0) {
        console.log('📝 Sample LoRAs:', data.slice(0, 5));
        console.log('🔍 LoRA Structure:', data[0]);
      }
    } else {
      console.log('📋 LoRA Data Structure:', data);
    }
  } catch (error) {
    console.error('❌ LoRA API Test Failed:', error);

    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      console.error('🔌 Network Error - Check if WebUI is running and accessible');
    } else if (error instanceof DOMException && error.name === 'AbortError') {
      console.error('⏱️ Request Timeout');
    }
  }
}

// Initialize cache on module load
initializeCache();

// Make test functions available globally for debugging
(window as any).testEmbeddingAPI = testEmbeddingAPI;
(window as any).testLoRAAPI = testLoRAAPI;

// Log initial status in development
if (process.env.NODE_ENV === 'development') {
  setTimeout(() => {
    logEmbeddingServiceStats();
  }, 1000);
}
