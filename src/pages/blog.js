import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import { Container } from '../components/Container/Container';
import { BlogHeader } from '../components/BlogHeader/BlogHeader';
import { BlogRoster } from '../components/BlogRoster/BlogRoster';
import { Subscribe } from '../components/Subscribe/Subscribe';

export default ({
  data: { featured, allPosts, tags },
  pageContext: { locale },
}) => {
  const metaData = {
    title: locale === 'ru' ? 'Блог | dialog' : 'Blog | dialog',
    description:
      locale === 'ru'
        ? 'это корпоративный мессенджер с возможностью установки на внутренний сервер организации'
        : 'handy and feature-rich enterprise multi-device messenger available for server or cloud – Slack-like, but not Slack-limited',
  };

  return (
    <Container>
      <Helmet>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
      </Helmet>

      <BlogHeader featured={featured.posts} tags={tags} />
      <BlogRoster title="Последние статьи" posts={allPosts.posts} />
      <Subscribe />
    </Container>
  );
};

export const query = graphql`
  {
    featured: allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      limit: 4
    ) {
      posts: nodes {
        ...PostFragment
      }
    }
    allPosts: allGhostPost(sort: { order: DESC, fields: [published_at] }) {
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
