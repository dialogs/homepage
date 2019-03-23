import React from 'react';
import { Link } from 'gatsby';
import removeMarkdown from 'remove-markdown';

import { Tag } from '../Tag/Tag';

export function BlogPostCard({
  title,
  slug,
  img,
  publishDate,
  featureImage,
  excerpt,
  tags,
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
        {tags && (
          <div className="blog__roster-tags">
            {tags.map(({ name, id }) => (
              <Tag key={id} name={name} />
            ))}
          </div>
        )}
      </Link>
    </div>
  );
}
