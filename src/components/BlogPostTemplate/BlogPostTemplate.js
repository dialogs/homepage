import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import { Container } from '../Container/Container';
import { Article } from '../Article/Article';
import { BlogRoster } from '../BlogRoster/BlogRoster';
import { Subscribe } from '../Subscribe/Subscribe';
import './BlogPostTemplate.css';

export default ({
  data: {
    post,
    ruRecommended,
    enRecommended,
    site: {
      siteMetadata: { siteUrl },
    },
  },
  pageContext: {
    slug,
    intl: { language },
  },
}) => {
  const fullUrl = `${siteUrl}/${language}/blog/${slug}`;

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
        locale={language}
      />
      <BlogRoster
        title={
          language === 'ru' ? 'Рекомендованные статьи' : 'Recomended articles'
        }
        posts={language === 'ru' ? ruRecommended.posts : enRecommended.posts}
        limit={6}
        locale={language}
      />
      <Subscribe language={language} />
    </Container>
  );
};

export const blogPostFragment = graphql`
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
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
