import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ArrowLink } from '../ArrowLink/ArrowLink';

export function NewsCard({ language, index, date }) {
  return (
    <div className="blog__roster-item">
      <a href="/404" className="blog__roster-item-link">
        <div className="blog__roster-image-box">
          <div className="blog__roster-image">
            <img src={'/images/home/news/image-' + index + '.png'} alt="" />
          </div>
        </div>
        <div className="blog__roster-date">
          {new Date(date).toLocaleDateString(language, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
        <div className="blog__roster-short">
          <FormattedMessage id={'news_text-' + index} />
        </div>
      </a>
    </div>
  );
}
