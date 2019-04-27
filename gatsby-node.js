const path = require(`path`);
const config = require('./server/config');
const {
  siteMetadata: { siteUrl },
} = require('./gatsby-config');
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
      const blogPost = path.resolve(`./src/components/BlogPost/BlogPost.js`);

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
              component: path.resolve(blogPost),
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
      const blogPost = path.resolve(`./src/components/BlogPost/BlogPost.js`);

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
              component: path.resolve(blogPost),
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
  return Promise.all(promises);
};
