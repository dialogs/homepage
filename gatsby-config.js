const { isDev, ghost } = require('./server/config');

module.exports = {
  proxy: isDev
    ? {
        prefix: '/api/v1',
        url: 'http://127.0.0.1:3010',
      }
    : undefined,
  plugins: [
    {
      resolve: 'gatsby-plugin-express',
      options: {
        output: 'server/gatsby-express.json',
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/Layout`),
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('postcss-preset-env')({
            features: {
              'color-mod-function': true,
            },
          }),
          require('postcss-nested'),
          require('postcss-custom-media'),
        ],
      },
    },
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: ghost.endpoint,
        contentApiKey: ghost.apiKey,
      },
    },
  ],
};
