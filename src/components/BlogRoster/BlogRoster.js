import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { styled } from 'astroturf';
import { Section } from '../Section/Section';
import { BlogPostCard } from '../BlogPostCard/BlogPostCard';
import { Button } from '../Button/Button';
import { Heading } from '../Heading/Heading';

const DEFAULT_LIMIT = 6;

const BlogRosterList = styled.div`
  @import '../../styles/variables.css';

  margin-bottom: 2rem;

  @media (--tablet-viewport) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const BlogRosterCard = styled(BlogPostCard)`
  @import '../../styles/variables.css';

  @media (--tablet-viewport) {
    margin-top: 40px;
    flex: 0 0 47%;
  }

  @media (--tablet-landscape-viewport) {
    margin-top: 60px;
    flex: 0 0 28%;
  }
`;

export function BlogRoster({ title, posts, limit = DEFAULT_LIMIT, locale }) {
  const [visibleCount, updateVisibleCount] = useState(limit);

  function handleLoadMoreClick() {
    updateVisibleCount((prevVisibleCount) => prevVisibleCount + limit);
  }

  return (
    <Section>
      <Heading>{title}</Heading>
      <BlogRosterList>
        {posts.slice(0, visibleCount).map((post) => (
          <BlogRosterCard
            key={post.id}
            slug={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            tags={post.tags}
            publishDate={post.publishDate}
            featureImage={post.featureImage}
            locale={locale}
          />
        ))}
      </BlogRosterList>
      {visibleCount < posts.length && (
        <Button theme="pale" wide onClick={handleLoadMoreClick}>
          <FormattedMessage id="blog_roster_see_more" />
        </Button>
      )}
    </Section>
  );
}
