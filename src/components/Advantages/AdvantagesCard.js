import React from 'react';
import { FormattedMessage } from 'react-intl';

export function AdvantagesCard({ image, heading, description }) {
  return (
    <div className="advantages__card">
      <img className="advantages__icon" src={image} alt="" />
      <h3 className="advantages__title--card">
        <FormattedMessage id={heading} />
      </h3>
      <span className="advantages__text">
        <FormattedMessage id={description} />
      </span>
    </div>
  );
}
