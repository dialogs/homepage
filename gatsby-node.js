const path = require('path');
const { ghost, languages, siteUrl } = require('./server/config');
const { createFilePath } = require('gatsby-source-filesystem');
const { fetchAllVacancies } = require('./utils/fetchAllVacancies');

// Page components
const blogPostTemplate = path.resolve(
  './src/components/BlogPostTemplate/BlogPostTemplate.js',
);
const careerPageTemplate = path.resolve(
  './src/components/CareerPage/CareerPage.js',
);
const vacancyPageTemplate = path.resolve(
  './src/components/VacancyTemplate/VacancyTemplate.js',
);

exports.createPages = async ({
  graphql,
  actions: { createPage },
  reporter,
}) => {
  // Create blogposts
  if (ghost.apiKey && ghost.endpoint) {
    async function createPosts(language) {
      const { errors, data } = await graphql(`
          {
            posts: allGhostPost(sort: { order: DESC, fields: [published_at] }, filter: { tags: {elemMatch: { name: {eq: "#${language}"} } } }) {
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
        `);

      if (errors || !data.posts) {
        return;
      }

      const posts = data.posts.edges;

      posts.forEach(async ({ post }) => {
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
    }

    languages.forEach(async (language) => {
      await createPosts(language);
    });
  }

  // Create vacancies
  async function createCareerPage() {
    const vacanciesResult = await fetchAllVacancies();

    if (vacanciesResult.error || !vacanciesResult.data) {
      reporter.panicOnBuild(`Error while fetching vacancies.`);
      return;
    }

    createPage({
      path: 'career',
      component: careerPageTemplate,
      context: {
        routed: true,
        siteUrl,
        vacancies: vacanciesResult.data,
      },
    });
  }

  async function createVacancyPages() {
    const { data, error } = await fetchAllVacancies();

    if (error) {
      return reject();
    }

    if (!data) {
      return resolve();
    }

    data.forEach((vacancy) => {
      const slug = `/${vacancy.slug}`;
      const originalPath = `career${slug}`;

      createPage({
        originalPath,
        path: originalPath,
        component: vacancyPageTemplate,
        context: {
          routed: true,
          originalPath,
          slug,
          siteUrl,
          vacancy,
        },
      });
    });
  }

  await createCareerPage();
  await createVacancyPages();
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
