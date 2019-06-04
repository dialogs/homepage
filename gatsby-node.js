const path = require(`path`);
const config = require('./server/config');
const {
  siteMetadata: { siteUrl },
} = require('./gatsby-config');
const { languages } = require('./src/i18n/locales');

// Page components
const blogPost = path.resolve(`./src/components/BlogPost/BlogPost.js`);
const redirect = path.resolve('./src/i18n/redirect.js');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if (page.path.includes('404')) {
    return new Promise((resolve) => {
      languages.forEach(({ value }) => {
        const localePage = {
          ...page,
          originalPath: page.path,
          path: `/${value}${page.path}`,
          context: {
            languages,
            locale: value,
            routed: true,
            originalPath: page.path,
            url: siteUrl,
          },
        };
        createPage(localePage);
      });

      resolve();
    });
  }

  return new Promise((resolve) => {
    const redirectPage = {
      ...page,
      component: redirect,
      context: {
        languages,
        locale: '',
        routed: false,
        redirectPage: page.path,
        url: siteUrl,
      },
    };
    deletePage(page);
    createPage(redirectPage);

    languages.forEach(({ value }) => {
      const localePage = {
        ...page,
        originalPath: page.path,
        path: `/${value}${page.path}`,
        context: {
          languages,
          locale: value,
          routed: true,
          originalPath: page.path,
          url: siteUrl,
        },
      };
      createPage(localePage);
    });

    resolve();
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const promises = [];

  if (config.ghost.apiKey && config.ghost.endpoint) {
    const postsQueryRu = `
    { 
      posts: allGhostPost(
        sort: { order: DESC, fields: [published_at] }, 
        filter: { tags: {elemMatch: { name: {eq: "#ru"} } } }
      )
        {
        edges {
          post: node {
            id
            slug
            title
            html
            publishDate: published_at
            featureImage: feature_image
          }
        }
      }
    }
    `;
    const postsQueryEn = `
    { 
      posts: allGhostPost(
        sort: { order: DESC, fields: [published_at] }, 
        filter: { tags: {elemMatch: { name: {eq: "#en"} } } }
      )
        {
        edges {
          post: node {
            id
            slug
            title
            html
            publishDate: published_at
            featureImage: feature_image
          }
        }
      }
    }
    `;
    const createPostsRu = new Promise((resolve, reject) => {
      resolve(
        graphql(postsQueryRu).then((result) => {
          if (result.errors) {
            return reject(result.errors);
          }

          if (!result.data.posts) {
            return resolve();
          }

          const posts = result.data.posts.edges;

          posts.forEach(({ post }) => {
            post.url = `/ru/blog/${post.slug}/`;

            createPage({
              path: post.url,
              component: blogPost,
              context: {
                locale: 'ru',
                slug: post.slug,
                url: siteUrl,
              },
            });
          });

          return resolve();
        }),
      );
    });
    const createPostsEn = new Promise((resolve, reject) => {
      resolve(
        graphql(postsQueryEn).then((result) => {
          if (result.errors) {
            return reject(result.errors);
          }

          if (!result.data.posts) {
            return resolve();
          }

          const posts = result.data.posts.edges;

          posts.forEach(({ post }) => {
            post.url = `/en/blog/${post.slug}/`;

            createPage({
              path: post.url,
              component: blogPost,
              context: {
                locale: 'en',
                slug: post.slug,
                url: siteUrl,
              },
            });
          });
          return resolve();
        }),
      );
    });
    promises.push(createPostsRu);
    promises.push(createPostsEn);
  }

  const allVacancies = `
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `;

  const createAllVacancies = new Promise((resolve, reject) => {
    resolve(
      graphql(allVacancies).then((result) => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          const lang = node.fields.slug.indexOf('/ru/') >= 0 ? 'ru' : 'en';
          console.log('vacancy lang', lang);
          console.log('vacancy lang', node.fields.slug);
          createPage({
            path: node.fields.slug,
            component: path.resolve(
              `./src/components/VacancyLayout/VacancyLayout.js`,
            ),
            context: {
              // Data passed to context is available
              // in page queries as GraphQL variables.
              locale: lang,
              originalPath: node.fields.slug,
              slug: node.fields.slug,
              url: siteUrl,
            },
          });
        });

        return resolve();
      }),
    );
  });

  promises.push(createAllVacancies);

  return Promise.all(promises);
};
