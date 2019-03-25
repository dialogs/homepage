import React from 'react';
import { graphql } from 'gatsby';

import { Container } from '../components/Container/Container';
import { BlogHeader } from '../components/BlogHeader/BlogHeader';
import { BlogRoster } from '../components/BlogRoster/BlogRoster';
import { Subscribe } from '../components/Subscribe/Subscribe';

export default ({ data: { featured, allPosts, tags } }) => {
  return (
    <Container>
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
