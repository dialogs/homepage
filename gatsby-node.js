const path = require('path');
const { ghost, languages, siteUrl } = require('./server/config');
const { createFilePath } = require('gatsby-source-filesystem');

// Page components
const blogPostTemplate = path.resolve(
  './src/components/BlogPostTemplate/BlogPostTemplate.js',
);
const vacancyPageTemplate = path.resolve(
  './src/components/VacancyTemplate/VacancyTemplate.js',
);

exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  if (node.internal.type === 'MarkdownRemark') {
    createNodeField({
      node,
      name: 'slug',
      value: createFilePath({ node, getNode }),
    });
  }
};

exports.createPages = ({ graphql, actions: { createPage } }) => {
  const promises = [];

  // Create blogposts
  if (ghost.apiKey && ghost.endpoint) {
    languages.forEach((language) => {
      const postsQuery = `
        {
          posts: allGhostPost(
            sort: { order: DESC, fields: [published_at] },
            filter: { tags: {elemMatch: { name: {eq: "#${language}"} } } }
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

      const createPosts = new Promise((resolve, reject) => {
        resolve(
          graphql(postsQuery).then(({ errors, data }) => {
            if (errors) {
              return reject(errors);
            }

            if (!data.posts) {
              return resolve();
            }

            const posts = data.posts.edges;

            posts.forEach(({ post }) => {
              post.url = `/blog/${post.slug}/`;

              createPage({
                path: post.url,
                component: blogPostTemplate,
                context: {
                  slug: post.slug,
                  isBlogPost: true,
                  postLanguage: language,
                },
              });
            });

            return resolve();
          }),
        );
      });

      promises.push(createPosts);
    });
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
          const { slug } = node.fields;
          const originalPath = `career${slug}`;

          createPage({
            originalPath,
            path: originalPath,
            component: vacancyPageTemplate,
            context: {
              routed: true,
              originalPath,
              slug: slug,
              siteUrl,
            },
          });
        });

        return resolve();
      }),
    );
  });

  promises.push(createVacancies);

  return Promise.all(promises);
};

exports.onCreatePage = async ({ page, actions: { deletePage } }) => {
  // Delete blog posts with incorrect language
  if (page.context.isBlogPost) {
    if (
      page.context.postLanguage !== page.context.intl.language ||
      page.path.indexOf(`/${page.context.postLanguage}/`) === -1
    ) {
      deletePage(page);
    }
  }
};
