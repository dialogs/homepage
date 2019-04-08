const path = require(`path`);
const config = require('./server/config');
const { languages } = require('./src/i18n/locales');

const postsQuery = `
  {
    posts: allGhostPost(sort: { order: DESC, fields: [published_at] }, limit: 1000) {
      edges {
        post: node {
          slug
        }
      }
    }
  }
`;

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if (page.path.includes('404')) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const redirect = path.resolve('./src/i18n/redirect.js');
    const redirectPage = {
      ...page,
      component: redirect,
      context: {
        languages,
        locale: '',
        routed: false,
        redirectPage: page.path,
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
        },
      };
      createPage(localePage);
    });

    resolve();
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const promises = [];

  if (config.ghost.apiKey && config.ghost.endpoint) {
    const postsQuery = `
      {
        posts: allGhostPost(sort: { order: DESC, fields: [published_at] }, limit: 1000) {
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
    const createPosts = new Promise((resolve, reject) => {
      const blogPost = path.resolve(`./src/components/BlogPost/BlogPost.js`);

      resolve(
        graphql(postsQuery).then((result) => {
          if (result.errors) {
            return reject(result.errors);
          }

          if (!result.data.posts) {
            return resolve();
          }

          const posts = result.data.posts.edges;

          posts.forEach(({ post }) => {
            post.url = `/blog/${post.slug}/`;

            createPage({
              path: post.url,
              component: path.resolve(blogPost),
              context: {
                slug: post.slug,
              },
            });
          });

          return resolve();
        }),
      );
    });

    promises.push(createPosts);
  }

  return Promise.all(promises);
};
