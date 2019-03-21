import React from 'react';
import { Link, graphql } from 'gatsby';

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
              <img
                src="/assets/images/svg-icons/arrow-link.svg"
                alt=""
                className=""
              />
              <span>Назад</span>
            </a>
            <div className="blog__article-image">
              <img src={post.featureImage} alt="" />
            </div>
          </div>
          <div className="blog__article__header-item blog__article__header-item--right">
            <div className="blog__article-date">12 сентября 2018</div>
            <h1 className="page__header">{post.title}</h1>
            <div className="blog__article-short">
              Созданные ускорять принятие решений в компании, повышать
              продуктивность и прозрачность работы, массовые мессенджеры могут
              стать источником дополнительных трудностей
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
      title
      html
      featureImage: feature_image
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
          publishDate: published_at
          featureImage: feature_image
        }
      }
    }
  }
`;
