module.exports = {
  plugins: {
    'postcss-import': {
      skipDuplicates: true,
    },
    'postcss-nested': {},
    'postcss-preset-env': {
      stage: 3,
      features: {
        // 'nesting-rules': true,
        'custom-properties': true,
        'custom-media-queries': true,
        'color-mod-function': { unresolved: 'warn' },
      },
    },
    cssnano: {
      preset: 'default',
    },
  },
};
