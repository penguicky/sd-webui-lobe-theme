// PostCSS configuration optimized for antd-style CSS-in-JS
// Since we use antd-style (CSS-in-JS), we focus on optimizing static CSS files only

module.exports = {
  plugins: [
    // Only process static CSS files in production
    ...(process.env.NODE_ENV === 'production'
      ? [
          // CSS optimization plugins for static files
          require('autoprefixer'),
          require('cssnano')({
            preset: ['default', {
              // Preserve CSS custom properties (CSS variables)
              cssDeclarationSorter: false,
              normalizeWhitespace: { exclude: false },
              // Don't remove unused CSS since we use CSS-in-JS
              discardUnused: false,
              // Preserve important comments
              discardComments: { removeAll: false },
            }],
          }),
        ]
      : []),
  ],
};

