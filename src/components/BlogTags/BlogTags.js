import React from 'react';
import { Link } from 'gatsby';
import { removeServiceTags } from '../../utils/removeServiceTags';

export function BlogTags({ tags }) {
  if (!tags) {
    return null;
  }

  const tagsToRender = removeServiceTags(tags);
  console.log({ tagsToRender });

  return (
    <section className="blog__tags box-block">
      <h2 className="blog__tags-title">Теги</h2>
      <ul className="blog__tags-list">
        {tagsToRender.map(({ id, slug, name, postCount }) => (
          <li className="blog__tags-item" key={id}>
            <Link to={`/tag/${slug}`} className="blog__tags-link">
              <span className="blog__tags-name">{name}</span>
              <span className="blog__tags-amount">{postCount}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
