import react from '@vitejs/plugin-react-swc';
import { consola } from 'consola';
import dotenv from 'dotenv';
import { resolve } from 'node:path';
import * as process from 'node:process';
import { type PluginOption, defineConfig } from 'vite';

dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';
const SD_HOST = process.env.SD_HOST || '127.0.0.1';
const SD_PORT = process.env.SD_PORT || 7860;

consola.info('Proxy:', `http://${SD_HOST}:${SD_PORT}`);

export default defineConfig({
  base: '/dev',
  build: {
    chunkSizeWarningLimit: 1000,
    cssMinify: 'esbuild',
    emptyOutDir: true,
    minify: 'esbuild',
    outDir: './javascript',

    reportCompressedSize: true,

    rollupOptions: {
      input: resolve(__dirname, 'src/main.tsx'),
      output: {
        assetFileNames: `[name].[hash].[ext]`,
        chunkFileNames: `[name]-[hash].js`,
        entryFileNames: `[name]-[hash].js`,

        // Manual chunks for better code splitting
        manualChunks: {
          'antd-vendor': ['antd', 'antd-style'],
          'i18n-vendor': ['i18next', 'react-i18next', 'i18next-http-backend'],
          'react-vendor': ['react', 'react-dom'],
          'state-vendor': ['zustand', 'zustand-utils', 'swr', 'ahooks'],
          'ui-vendor': ['@lobehub/ui', 'lucide-react'],
          'utils-vendor': ['lodash-es', 'dayjs', 'semver'],
        },
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
    exclude: ['fast-deep-equal'],
    include: [
      'react',
      'react-dom',
      'antd',
      'antd-style',
      '@lobehub/ui',
      'zustand',
      'lodash-es',
      'dayjs',
    ],
  },

  plugins: [
    react({
      devTarget: 'esnext',
      tsDecorators: true,
    }),

    // Development-only plugins
    ...(isProduction
      ? []
      : [
          {
            configureServer(server) {
              server.middlewares.use((req, res, next) => {
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
