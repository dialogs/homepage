import React from 'react';
import { FormattedMessage } from 'react-intl';

export function OptimizeCard({ image, title, text, alt }) {
  return (
    <div className="optimize__col optimize__col--card">
      <div className="optimize__card">
        <h3 className="optimize__title--card">
          <FormattedMessage id={title} />
        </h3>
        <span className="optimize__text--card">
          <FormattedMessage id={text} />
        </span>
        <img className="optimize__logo" src={image} alt={alt} />
      </div>
    </div>
  );
}
