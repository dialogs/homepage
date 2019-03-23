import React from 'react';
import { Link } from 'gatsby';

function removeSrviceTags(tags) {
  return tags.filter(({ tag: { name } }) => name.indexOf('#') === -1);
}

export function BlogTags({ tags }) {
  console.log(tags);
  return (
    <li className="blog__tags-item">
      {removeSrviceTags(tags).map(({ tag: { id, slug, name, postCount } }) => (
        <Link to={`/tag/${slug}`} key={id} className="blog__tags-link">
          <span className="blog__tags-name">{name}</span>
          <span className="blog__tags-amount">{postCount}</span>
        </Link>
      ))}
    </li>
  );
}
