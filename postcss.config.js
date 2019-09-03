module.exports = {
  plugins: {
    'postcss-import': {
      skipDuplicates: true,
    },
    'postcss-nested': {},
    'postcss-preset-env': {
      stage: 3,
      features: {
        'custom-properties': {
          importFrom: 'src/styles/variables.css',
        },
        'custom-media-queries': {
          importFrom: 'src/styles/variables.css',
        },
        'color-mod-function': {
          unresolved: 'warn',
          importFrom: 'src/styles/variables.css',
        },
      },
    },
    cssnano: {
      preset: 'default',
    },
  },
};
