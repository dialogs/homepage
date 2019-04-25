import React from 'react';
import FormattedMetaTags from '../components/FormattedMetaTags';
import FormattedOpenGraph from '../components/FormattedOpenGraph';
import { graphql } from 'gatsby';

import { Container } from '../components/Container/Container';
import { BlogHeader } from '../components/BlogHeader/BlogHeader';
import { BlogRoster } from '../components/BlogRoster/BlogRoster';
import { Subscribe } from '../components/Subscribe/Subscribe';

export default ({
  data: { featured, allPosts, tags, ruFeatured, enFeatured, ruPosts, enPosts },
  pageContext: { locale, url, originalPath },
}) => {
  return (
    <Container>
      <FormattedMetaTags
        titleId="meta_title_blog"
        descriptionId="meta_description_blog"
      />
      <FormattedOpenGraph
        idOgTitle="meta_title_blog"
        url={url}
        path={`/${locale}${originalPath}`}
      />

      <BlogHeader
        featured={locale === 'ru' ? ruFeatured.posts : enFeatured.posts}
        tags={tags}
      />
      <BlogRoster
        title={locale === 'ru' ? 'Последние статьи' : 'Latest articles'}
        posts={locale === 'ru' ? ruPosts.posts : enPosts.posts}
      />
      <Subscribe />
    </Container>
  );
};

export const query = graphql`
  {
    enFeatured: allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      filter: { tags: { elemMatch: { name: { eq: "#featured-en" } } } }
      limit: 4
    ) {
      posts: nodes {
        ...PostFragment
      }
    }
    enPosts: allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      filter: { tags: { elemMatch: { name: { eq: "#en" } } } }
    ) {
      posts: nodes {
        ...PostFragment
      }
    }
    ruFeatured: allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      filter: { tags: { elemMatch: { name: { eq: "#featured-ru" } } } }
      limit: 4
    ) {
      posts: nodes {
        ...PostFragment
      }
    }
    ruPosts: allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      filter: { tags: { elemMatch: { name: { eq: "#ru" } } } }
    ) {
      posts: nodes {
        ...PostFragment
      }
    }
    tags: allGhostTag(sort: { order: DESC, fields: [postCount] }) {
      totalCount
      nodes {
        ...TagFragment
        postCount
      }
    }
  }
`;
