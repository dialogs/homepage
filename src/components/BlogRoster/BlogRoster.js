import React, { useState } from 'react';

import { Section } from '../Section/Section';
import { BlogPostCard } from '../BlogPostCard/BlogPostCard';

const DEFAULT_LIMIT = 6;

export function BlogRoster({ title, posts, limit = DEFAULT_LIMIT }) {
  const [visibleCount, updateVisibleCount] = useState(limit);

  function handleLoadMoreClick() {
    updateVisibleCount((prevVisibleCount) => prevVisibleCount + limit);
  }

  return (
    <Section className="blog__roster-section">
      <div className="blog__roster">
        <div className="blog__roster-title">{title}</div>
        <div className="blog__roster-list">
          {posts.slice(0, visibleCount).map((post) => {
            return (
              <BlogPostCard
                key={post.id}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                tags={post.tags}
                publishDate={post.publishDate}
                featureImage={post.featureImage}
              />
            );
          })}
        </div>
        {visibleCount < posts.length && (
          <button
            className="button button--pale blog__button-more"
            onClick={handleLoadMoreClick}
          >
            Смотреть еще
          </button>
        )}
      </div>
    </Section>
  );
}
