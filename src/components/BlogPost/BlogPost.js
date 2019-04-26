import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import { Container } from '../Container/Container';
import { Article } from '../Article/Article';
import { BlogRoster } from '../BlogRoster/BlogRoster';
import { Subscribe } from '../Subscribe/Subscribe';
import './BlogPost.css';

export default ({
  data: { post, ruRecommended, enRecommended },
  pageContext: { locale, url, slug },
}) => {
  const fullUrl = `${url}/${locale}/blog/${slug}`;

  return (
    <Container className="blog_post">
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.featureImage} />
        <meta property="og:url" content={fullUrl} />
      </Helmet>
      <Article
        className="post__article"
        title={post.title}
        tags={post.tags}
        featureImage={post.featureImage}
        publishDate={post.publishDate}
        excerpt={post.excerpt}
        html={post.html}
        locale={locale}
      />
      <BlogRoster
        title={
          locale === 'ru' ? 'Рекомендованные статьи' : 'Recomended articles'
        }
        posts={locale === 'ru' ? ruRecommended.posts : enRecommended.posts}
        limit={6}
        locale={locale}
      />
      <Subscribe />
    </Container>
  );
};

export const postFragment = graphql`
  fragment PostFragment on GhostPost {
    id
    slug
    title
    excerpt
    publishDate: published_at
    featureImage: feature_image
    tags {
      ...PostTagsFragment
    }
    authors {
      id
      slug
      name
    }
  }
`;

export const pageQuery = graphql`
  query blogPostBySlug($slug: String!) {
    post: ghostPost(slug: { eq: $slug }) {
      ...PostFragment
      html
    }
    ruRecommended: allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      filter: { tags: { elemMatch: { name: { eq: "#recomended-ru" } } } }
      limit: 6
    ) {
      posts: nodes {
        ...PostFragment
      }
    }
    enRecommended: allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      filter: { tags: { elemMatch: { name: { eq: "#recomended-en" } } } }
      limit: 6
    ) {
      posts: nodes {
        ...PostFragment
      }
    }
  }
`;
