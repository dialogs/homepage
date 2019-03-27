import React from 'react';
import { graphql } from 'gatsby';

export function Tag({ name }) {
  return <span className="tag">{name}</span>;
}

export const tagFragment = graphql`
  fragment TagFragment on GhostTag {
    id
    name
    slug
  }
`;

export const postTagFragment = graphql`
  fragment PostTagsFragment on GhostPostTags {
    id
    name
    slug
  }
`;
