import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import './PartnerTab.css';

export function PartnerTab({
  title,
  description,
  link,
  image,
  country,
  category,
  href,
}) {
  return (
    <div className="for-partners__tab">
      <div className="tab__header">
        <img className="tab_icon" src={image} />
        <a href={href}>{link}</a>
      </div>
      <div className="tab__text">
        <h1 className="tab__title">{title}</h1>
        <p className="tab__description">{description}</p>
      </div>
      <div className="tab__footer">
        <div className="tab__country">
          <FormattedMessage id="for_partners_tab_country" />
          <p className="tab__country__info">{country}</p>
        </div>
        <div className="tab__category">
          <FormattedMessage id="for_partners_tab_category" />
          <p className="tab__category__info">{category}</p>
        </div>
      </div>
    </div>
  );
}
