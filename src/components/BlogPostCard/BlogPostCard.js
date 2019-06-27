import React from 'react';
import { Link } from 'gatsby';
import removeMarkdown from 'remove-markdown';

import { Tag } from '../Tag/Tag';
import { removeServiceTags } from '../../utils/removeServiceTags';

export function BlogPostCard({
  title,
  slug,
  publishDate,
  featureImage,
  excerpt,
  tags,
  locale,
}) {
  const tagsToRender = removeServiceTags(tags);

  return (
    <div className="blog__roster-item">
      <Link to={`/${locale}/blog/${slug}`} className="blog__roster-item-link">
        <div className="blog__roster-image">
          <img src={featureImage} alt={title} />
        </div>
        <div className="blog__roster-date">
          {new Date(publishDate).toLocaleDateString(locale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
        <div className="blog__roster-name">{title}</div>
        <div className="blog__roster-short">{removeMarkdown(excerpt)}</div>
        {tagsToRender && (
          <div className="blog__roster-tags">
            {tagsToRender.map(({ name, id }) => (
              <Tag key={id} name={name} />
            ))}
          </div>
        )}
      </Link>
    </div>
  );
}
