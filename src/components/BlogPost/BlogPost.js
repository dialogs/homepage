import React from 'react';
import { Link, graphql } from 'gatsby';
import removeMarkdown from 'remove-markdown';

import { BlogRoster } from '../BlogRoster/BlogRoster';
import { Subscribe } from '../Subscribe/Subscribe';

export default ({ data: { post, recommended } }) => {
  console.log({ post, recommended });

  return (
    <section className="container">
      <article className="blog__article">
        <header className="blog__article__header">
          <div className="blog__article__header-item blog__article__header-item--left">
            <a href="#" className="link--back">
              <img src="/images/svg-icons/arrow-link.svg" alt="" className="" />
              <span>Назад</span>
            </a>
            <div className="blog__article-image">
              <img src={post.featureImage} alt={post.title} />
            </div>
          </div>
          <div className="blog__article__header-item blog__article__header-item--right">
            <div className="blog__article-date">
              {new Date(post.publishDate).toLocaleDateString('ru', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
            <h1 className="page__header">{post.title}</h1>
            <div className="blog__article-short">
              {removeMarkdown(post.excerpt)}
            </div>
            <div className="blog__article-tags">
              <span>Инновационные технологии</span>
            </div>
          </div>
        </header>
        <div
          className="blog__article__content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>

      <div className="blog__roster-section blog__recommended">
        <BlogRoster
          title="Рекомендованные статьи"
          posts={recommended}
          limit={6}
        />
      </div>

      <div className="blog__subscribe-section">
        <Subscribe />
      </div>
    </section>
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
