import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Link } from 'gatsby';
import removeMarkdown from 'remove-markdown';

import { Section } from '../Section/Section';
import { BlogTags } from '../BlogTags/BlogTags';
import { Tag } from '../Tag/Tag';
import { removeServiceTags } from '../../utils/removeServiceTags';

import './BlogHeader.css';

export function BlogHeader({ featured, tags }) {
  const [mainPost, ...otherPosts] = featured;

  return (
    <Section className="blog__top-section blog_header">
      <div className="blog__main box-block">
        <div className="blog__main-image">
          <img src={mainPost.featureImage} alt={mainPost.title} />
        </div>
        <div className="blog__main-date">
          {new Date(mainPost.publishDate).toLocaleDateString('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
        <div className="blog__main-title">
          <Link to={`/blog/${mainPost.slug}`}>{mainPost.title}</Link>
        </div>
        <div className="blog__main-short">
          {removeMarkdown(mainPost.excerpt)}
        </div>
        {tags && (
          <div className="blog__main-tags">
            {removeServiceTags(mainPost.tags).map(({ name, id }) => (
              <Tag key={id} name={name} />
            ))}
          </div>
        )}
      </div>

      <div className="blog__secondary">
        <section className="blog__popular box-block">
          <h2 className="blog__popular-title">
            {' '}
            <FormattedMessage id="blog_header_popular" />{' '}
          </h2>
          <div className="blog__popular-list">
            {otherPosts.map((post) => {
              return (
                <div className="blog__popular-item" key={post.id}>
                  <div className="blog__popular-image-box">
                    <div className="blog__popular-image">
                      <img src={post.featureImage} alt={post.title} />
                    </div>
                  </div>
                  <div className="blog__popular-info">
                    <div className="blog__popular-date">
                      {new Date(post.publishDate).toLocaleDateString('ru', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </div>
                    <div className="blog__popular-item-title">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="blog__popular-item-title-link"
                      >
                        {post.title}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        {false && <BlogTags tags={tags.nodes} />}
      </div>
    </Section>
  );
}
