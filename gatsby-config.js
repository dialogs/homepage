const { isDev, ghost, languages, siteUrl, sentry } = require('./server/config');
const package = require('./package.json');

function getProxy() {
  if (isDev) {
    return {
      prefix: '/api/v1',
      url: 'http://127.0.0.1:3010',
    };
  }

  return undefined;
}

function getPlugins() {
  const plugins = [
    { resolve: 'gatsby-plugin-react-helmet' },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-M3KJBNM',
        includeInDevelopment: true,
      },
    },
    {
      resolve: 'gatsby-plugin-facebook-pixel',
      options: {
        pixelId: '1326090010797850',
      },
    },
    {
      resolve: 'gatsby-plugin-yandex-metrika',
      options: {
        trackingId: '47364889',
        webvisor: true,
        trackHash: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'dialog — коммуникационная платформа для компаний',
        short_name: 'dlg.im',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#b9bbfa',
        display: 'standalone',
        icon: 'static/images/icon.png',
        include_favicon: true,
      },
    },
    { resolve: 'gatsby-transformer-sharp' },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [
          {
            userAgent: '*',
            allow: ['/'],
            disallow: ['/@joinchat', '/@/joinchat', '/joinchat'],
          },
        ],
        sitemap: `${siteUrl}/sitemap.xml`,
      },
    },
    { resolve: 'gatsby-plugin-advanced-sitemap' },
    {
      resolve: 'gatsby-plugin-express',
      options: {
        output: 'server/gatsby-express.json',
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/Layout/Layout'),
      },
    },
    { resolve: 'gatsby-plugin-postcss' },
    { resolve: 'gatsby-plugin-astroturf' },
    {
      resolve: 'gatsby-source-ghost',
      options: {
        apiUrl: ghost.endpoint,
        contentApiKey: ghost.apiKey,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'vacancies',
        path: `${__dirname}/src/vacancies`,
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/i18n`,
        languages: languages,
        defaultLanguage: 'ru',
        redirect: true,
      },
    },
    { resolve: `gatsby-transformer-remark` },
    { resolve: 'gatsby-plugin-offline' },
  ];

  if (sentry.dsnPublic) {
    plugins.push({
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: sentry.dsnPublic,
        environment: isDev ? 'development' : 'production',
        release: package.version,
      },
    });
  }

  return plugins;
}

module.exports = {
  siteMetadata: {
    siteUrl,
  },
  proxy: getProxy(),
  plugins: getPlugins(),
};
