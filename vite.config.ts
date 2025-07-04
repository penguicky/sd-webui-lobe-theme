import react from '@vitejs/plugin-react-swc';
import { consola } from 'consola';
import dotenv from 'dotenv';
import { resolve } from 'node:path';
import process from 'node:process';
import { visualizer } from 'rollup-plugin-visualizer';
import { type PluginOption, defineConfig } from 'vite';

dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';
const SD_HOST = process.env.SD_HOST || '127.0.0.1';
const SD_PORT = process.env.SD_PORT || 7860;

consola.info('Proxy:', `http://${SD_HOST}:${SD_PORT}`);

export default defineConfig({
  base: '/dev',
  build: {
    chunkSizeWarningLimit: 2000,
    cssMinify: 'esbuild',
    emptyOutDir: true,
    minify: 'esbuild',
    outDir: './javascript',
    reportCompressedSize: true,

    rollupOptions: {
      // External dependencies that should not be bundled (if any)
      external: [],

      input: resolve(__dirname, 'src/main.tsx'),

      output: {
        // Single file output - no code splitting for compatibility
        assetFileNames: `[name].[ext]`,
        chunkFileNames: `[name].js`,
        // Force everything into a single bundle
compact: true,
        
entryFileNames: `[name].js`,
        
        // Aggressive minification settings
generatedCode: {
          arrowFunctions: true,
          constBindings: true,
          objectShorthand: true,
        },
        
        inlineDynamicImports: true,
      },

      // Enhanced tree-shaking configuration
      treeshake: {
        moduleSideEffects: (id): boolean => {
          // Preserve side effects only for critical initialization modules
          if (
            id.includes('src/locales/config') ||
            id.includes('i18next-http-backend') ||
            id.includes('react-i18next') ||
            id.includes('antd/es/config-provider') ||
            id.includes('antd-style') ||
            id.includes('@lobehub/ui')
          ) {
            return true;
          }

          // Aggressive tree-shaking for large libraries
          if (
            id.includes('lodash-es') ||
            id.includes('lucide-react') ||
            id.includes('lucide-static') ||
            id.includes('@icons-pack/react-simple-icons')
          ) {
            return false;
          }

          return false;
        },
        // More aggressive tree-shaking options
preset: 'smallest',
        
propertyReadSideEffects: false,
        
tryCatchDeoptimization: false,
        
        unknownGlobalSideEffects: false,
      },
    },
    sourcemap: !isProduction,
    target: 'es2020',
  },

  define: {
    '__DEV__': !isProduction,
    'process.env': process.env,
  },

  optimizeDeps: {
    // Exclude problematic dependencies that should be bundled at build time
    exclude: [
      'fast-deep-equal',
      'shiki', // Large WebAssembly dependency - better to bundle at build time
      '@lobehub/ui/node_modules/shiki', // Nested shiki dependency
    ],
    include: [
      // Core React dependencies
      'react',
      'react-dom',
      'react/jsx-runtime',

      // UI and styling libraries
      'antd-style',
      '@lobehub/ui',

      // State management
      'zustand',
      'zustand/shallow',

      // Utilities (tree-shakeable)
      'lodash-es',
      'dayjs',
      'consola',

      // Specific antd components for better tree-shaking
      'antd/es/button',
      'antd/es/input',
      'antd/es/select',
      'antd/es/switch',
      'antd/es/segmented',
      'antd/es/space',
      'antd/es/skeleton',
      'antd/es/slider',
      'antd/es/tag',
      'antd/es/menu',
      'antd/es/config-provider',
      'antd/es/input-number',
      'antd/es/popconfirm',
      'antd/es/notification',
      'antd/es/form',
      'antd/es/modal',
      'antd/es/drawer',
      'antd/es/tooltip',
      'antd/es/dropdown',

      // Lucide icons (commonly used)
      'lucide-react',
    ],
  },

  plugins: [
    react({
      devTarget: 'esnext',
      tsDecorators: true,
    }),

    // Bundle analyzer for production builds
    ...(isProduction
      ? [
          visualizer({
            brotliSize: true,
            filename: 'javascript/bundle-analysis.html',
            gzipSize: true,
            open: false,
            template: 'treemap', // 'treemap', 'sunburst', 'network'
          }) as PluginOption,
        ]
      : []),

    // Development-only plugins
    ...(isProduction
      ? []
      : [
          {
            configureServer(server) {
              server.middlewares.use((_req, res, next) => {
                res.setHeader('Cross-Origin-Embedder-Policy', 'unsafe-none');
                res.setHeader('Cross-Origin-Opener-Policy', 'unsafe-non');
                next();
              });
            },
            name: 'configure-response-headers',
          } as PluginOption,

          {
            configureServer(server) {
              server.middlewares.use(async (req, res, next) => {
                if (
                  req.originalUrl === '/dev' ||
                  req.originalUrl === '/dev?__theme=dark' ||
                  req.originalUrl === '/dev?__theme=light'
                ) {
                  try {
                    const response = await fetch(`http://${SD_HOST}:${SD_PORT}/`);
                    let updatedResponse = await response.text();

                    const toAdd = `
                  <script type="module" src="/dev/src/_react_refresh.js"></script>
                  <script type="module" src="/dev/src/main.tsx"></script>
                `;
                    updatedResponse = updatedResponse.replace('</body>', `</body>${toAdd}`);
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    res.setHeader('charset', 'utf8');
                    res.end(updatedResponse);
                    return;
                  } catch (error) {
                    consola.error('Failed to proxy request:', error);
                    res.statusCode = 500;
                    res.end('Internal Server Error');
                    return;
                  }
                }
                next();
              });
            },
            name: 'route-default-to-index',
          } as PluginOption,
        ]),
  ],

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },

  server: {
    host: '127.0.0.1',
    port: 8000,
    proxy: {
      '/queue/join': {
        target: `ws://${SD_HOST}:${SD_PORT}`,
        ws: true,
      },
      '^(?!.*dev).*$': `http://${SD_HOST}:${SD_PORT}`,
    },
  },
});
