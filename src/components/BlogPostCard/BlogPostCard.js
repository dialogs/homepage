import React from 'react';
import { Link, graphql } from 'gatsby';
import removeMarkdown from 'remove-markdown';

export function BlogPostCard({
  title,
  slug,
  img,
  publishDate,
  featureImage,
  excerpt,
}) {
  return (
    <div className="blog__roster-item">
      <Link to={`/blog/${slug}`} className="blog__roster-item-link">
        <div className="blog__roster-image-box">
          <div className="blog__roster-image">
            <img src={featureImage} alt={title} />
          </div>
        </div>
        <div className="blog__roster-date">
          {new Date(publishDate).toLocaleDateString('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
        <div className="blog__roster-name">{title}</div>
        <div className="blog__roster-short">{removeMarkdown(excerpt)}</div>
        <div className="blog__roster-tags">
          <span>Инновационные технологии</span>
          <span>Новости</span>
        </div>
      </Link>
    </div>
  );
}
