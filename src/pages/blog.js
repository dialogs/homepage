import React from 'react';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import { Container } from '../components/Container/Container';
import { BlogHeader } from '../components/BlogHeader/BlogHeader';
import { BlogRoster } from '../components/BlogRoster/BlogRoster';
import { Subscribe } from '../components/Subscribe/Subscribe';

export default ({ data: { featured, allPosts, tags } }) => {
  return (
    <Container>
      <FormattedMessage id="meta_title_blog">
        {(title) => (
          <FormattedMessage id="meta_description_blog">
            {(description) => (
              <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
              </Helmet>
            )}
          </FormattedMessage>
        )}
      </FormattedMessage>

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
