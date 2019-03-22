const { ghost } = require('./server/config');

module.exports = {
  siteMetadata: {
    title: `Title from siteMetadata`,
  },
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
