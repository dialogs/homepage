module.exports = {
  plugins: {
    'postcss-import': {
      skipDuplicates: true,
    },
    'postcss-nested': {},
    'postcss-preset-env': {
      stage: 3,
      features: {
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
