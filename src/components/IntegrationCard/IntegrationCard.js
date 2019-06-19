import React from 'react';
import { FormattedMessage } from 'react-intl';

import './IntegrationCard.css';

export function IntegrationCard({
  title,
  description,
  link,
  image,
  category,
  href,
  language,
}) {
  return (
    <div className="integration__card">
      <div className="card__header">
        <img className="card__icon" src={image} alt="" />
        <a className="card__link" href={href}>
          {link}
        </a>
      </div>
      <div className="card__text">
        <h1 className="card__title">{title}</h1>
        <p className="card__description">{description}</p>
      </div>
      <div className="card__footer">
        <div className="card__language">
          <FormattedMessage id="for_partners_tab_country" />
          <p className="card__language__info">{language}</p>
        </div>
        <div className="card__category">
          <FormattedMessage id="for_partners_tab_category" />
          <p className="card__category__info">{category}</p>
        </div>
      </div>
    </div>
  );
}
