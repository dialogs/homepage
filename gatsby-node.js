const path = require('path');
const config = require('./server/config');
const { languages } = require('./src/i18n/locales');
const { createFilePath } = require('gatsby-source-filesystem');
const {
  siteMetadata: { siteUrl },
} = require('./gatsby-config');

// Page components
const blogPostTemplate = path.resolve(
  './src/components/BlogPostTemplate/BlogPostTemplate.js',
);
const vacancyPageTemplate = path.resolve(
  './src/components/VacancyTemplate/VacancyTemplate.js',
);
const redirect = path.resolve('./src/i18n/redirect.js');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

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

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const promises = [];
  // Create blogposts
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
              component: blogPostTemplate,
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
              component: blogPostTemplate,
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

  // Create vacancies
  const createVacancies = new Promise((resolve, reject) => {
    const vacanciesQuery = `
{
  vacancies: allMarkdownRemark {
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

    resolve(
      graphql(vacanciesQuery).then(({ errors, data }) => {
        if (errors) {
          return reject(errors);
        }

        if (!data.vacancies) {
          return resolve();
        }

        data.vacancies.edges.forEach(({ node }) => {
          languages.forEach(({ value }) => {
            createPage({
              originalPath: `career${node.fields.slug}`,
              path: `${value}/career${node.fields.slug}`,
              component: vacancyPageTemplate,
              context: {
                languages,
                locale: value,
                routed: true,
                originalPath: `career${node.fields.slug}`,
                slug: node.fields.slug,
                url: siteUrl,
              },
            });
          });
        });

        return resolve();
      }),
    );
  });

  promises.push(createVacancies);

  return Promise.all(promises);
};
