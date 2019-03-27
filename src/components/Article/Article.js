import React from 'react';
import classnames from 'classnames';
import removeMarkdown from 'remove-markdown';

import { ArticleHeader } from '../ArticleHeader/ArticleHeader';
import { Tag } from '../Tag/Tag';
import { removeServiceTags } from '../../utils/removeServiceTags';
import './Article.css';

export function Article({
  title,
  tags,
  excerpt,
  publishDate,
  featureImage,
  className,
  html,
}) {
  const classes = classnames('article', className);

  return (
    <article className={classes}>
      <header className="article__header">
        <div className="article__header__block article__header__block--left">
          <button
            type="button"
            className="link--back"
            onClick={() => window.history.back()}
          >
            <img src="/images/svg-icons/arrow-link.svg" alt="" className="" />
            <span>Назад</span>
          </button>
          <div className="article-image">
            <img src={featureImage} alt={title} />
          </div>
        </div>
        <div className="article__header__block article__header__block--right">
          <div className="article__date">
            {new Date(publishDate).toLocaleDateString('ru', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
          <ArticleHeader>{title}</ArticleHeader>
          <div className="article__excerpt">{removeMarkdown(excerpt)}</div>
          {tags && (
            <div className="article__tags">
              <div className="blog__roster-tags">
                {removeServiceTags(tags).map(({ name, id }) => (
                  <Tag key={id} name={name} />
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
      <div
        className="article__content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}
