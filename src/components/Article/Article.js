import React from 'react';
import classnames from 'classnames';
import removeMarkdown from 'remove-markdown';

import { ArticleHeader } from '../ArticleHeader/ArticleHeader';
import './Article.css';

export function Article(props) {
  const className = classnames('article', props.className);

  return (
    <article className={className}>
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
            <img src={props.featureImage} alt={props.title} />
          </div>
        </div>
        <div className="article__header__block article__header__block--right">
          <div className="article__date">
            {new Date(props.publishDate).toLocaleDateString('ru', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
          <ArticleHeader>{props.title}</ArticleHeader>
          <div className="article__excerpt">
            {removeMarkdown(props.excerpt)}
          </div>
          <div className="article__tags">
            <span>Инновационные технологии</span>
          </div>
        </div>
      </header>
      <div
        className="article__content"
        dangerouslySetInnerHTML={{ __html: props.html }}
      />
    </article>
  );
}
