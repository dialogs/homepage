import React from 'react';
import { graphql } from 'gatsby';

import { Container } from '../Container/Container';
import { Article } from '../Article/Article';
import { BlogRoster } from '../BlogRoster/BlogRoster';
import { Subscribe } from '../Subscribe/Subscribe';
import './BlogPost.css';

export default ({ data: { post, recommended } }) => {
  // console.log({ post, recommended });

  return (
    <Container className="blog_post">
      <Article
        className="post__article"
        title={post.title}
        featureImage={post.featureImage}
        publishDate={post.publishDate}
        excerpt={post.excerpt}
        html={post.html}
      />

      <div className="blog_post__recommended">
        <BlogRoster
          title="Рекомендованные статьи"
          posts={recommended}
          limit={6}
        />
      </div>

      <div className="blog_post__subscribe">
        <Subscribe />
      </div>
    </Container>
  );
};

export const pageQuery = graphql`
  query blogPostBySlug($slug: String!) {
    post: ghostPost(slug: { eq: $slug }) {
      id
      slug
      title
      excerpt
      html
      featureImage: feature_image
      publishDate: published_at
    }
    recommended: allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      limit: 12
    ) {
      edges {
        post: node {
          id
          slug
          title
          excerpt
          publishDate: published_at
          featureImage: feature_image
        }
      }
    }
  }
`;
