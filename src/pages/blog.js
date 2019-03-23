import React from 'react';
import { graphql } from 'gatsby';

import { Container } from '../components/Container/Container';
import { BlogRoster } from '../components/BlogRoster/BlogRoster';
import { Subscribe } from '../components/Subscribe/Subscribe';
import { BlogTags } from '../components/BlogTags/BlogTags';

export default ({ data: { posts, tags } }, pageContext) => {
  return (
    <Container>
      <div className="blog__top-section">
        <div className="blog__main box-block">
          <div className="blog__main-image">
            <img
              src="https://dialog-2.ghost.io/content/images/2018/12/5---------1.png"
              alt=""
            />
          </div>
          <div className="blog__main-date"> 12 сентября 2018 </div>
          <div className="blog__main-title">
            <a href="/404">Какой ущерб могут нанести массовые мессенджеры</a>
          </div>
          <div className="blog__main-short">
            Созданные ускорять принятие решений в компании, повышать
            продуктивность и прозрачность работы, массовые мессенджеры могут
            стать источником дополнительных трудностей
          </div>
          <div className="blog__main-tags">
            <span>Инновационные технологии</span>
          </div>
        </div>

        <div className="blog__secondary">
          <section className="blog__popular box-block">
            <h2 className="blog__popular-title"> Популярные статьи </h2>
            <div className="blog__popular-list">
              <div className="blog__popular-item">
                <div className="blog__popular-image-box">
                  <div className="blog__popular-image">
                    <img src="/images/blog/blog1.png" alt="" />
                  </div>
                </div>
                <div className="blog__popular-info">
                  <div className="blog__popular-date"> 15 августа 2018 </div>
                  <div className="blog__popular-item-title">
                    <a href="/404" className="blog__popular-item-title-link">
                      Поколение Х, миллениалы, беби - бумеры: как люди разных
                      поколений используют мессенджер в работе
                    </a>
                  </div>
                </div>
              </div>

              <div className="blog__popular-item">
                <div className="blog__popular-image-box">
                  <div className="blog__popular-image">
                    <img src="/images/blog/blog-table-1.png" alt="" />
                  </div>
                </div>
                <div className="blog__popular-info">
                  <div className="blog__popular-date"> 23 сентября 2018 </div>
                  <div className="blog__popular-item-title">
                    <a href="/404" className="blog__popular-item-title-link">
                      12 правил делового общения в мессенджерах
                    </a>
                  </div>
                </div>
              </div>
              <div className="blog__popular-item">
                <div className="blog__popular-image-box">
                  <div className="blog__popular-image">
                    <img src="/images/blog/curent-site-1.jpg" alt="" />
                  </div>
                </div>
                <div className="blog__popular-info">
                  <div className="blog__popular-date"> 2 марта 2019 </div>
                  <div className="blog__popular-item-title">
                    <a href="/404" className="blog__popular-item-title-link">
                      Статья блога с текущего сайта с изображением оттуда
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {tags && <BlogTags tags={tags.nodes} />}
        </div>
      </div>
      <section className="blog__roster-section">
        <BlogRoster title="Последние статьи" posts={posts} />
      </section>
      <section className="blog__subscribe-section">
        <Subscribe />
      </section>
    </Container>
  );
};

export const query = graphql`
  {
    posts: allGhostPost(sort: { order: DESC, fields: [published_at] }) {
      edges {
        post: node {
          id
          slug
          title
          excerpt
          publishDate: published_at
          featureImage: feature_image
          tags {
            id
            slug
            name
          }
          authors {
            id
            slug
            name
          }
        }
      }
    }
    tags: allGhostTag(sort: { order: DESC, fields: [postCount] }) {
      totalCount
      nodes {
        id
        name
        slug
        postCount
      }
    }
  }
`;
