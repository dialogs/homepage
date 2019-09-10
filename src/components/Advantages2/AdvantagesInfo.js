import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';

export function AdvantagesInfo({ index, row }) {
  let rowClass = row
    ? 'advantages2__row advantages2__row--' + row
    : 'advantages2__row';

  return (
    <div className="advantages2__item">
      <Heading level="2" className="advantages2__title">
        <FormattedMessage id={'advantages2_title_' + index} />
      </Heading>

      <div className={rowClass}>
        <div className="advantages2__col advantages2__col--icon">
          <img
            className="advantages2__icon"
            src={'/images/home/advantages2/icon-' + index + '.svg'}
            alt=""
          />
          <p className="advantages2__text">
            <FormattedMessage id={'advantages2_text_' + index} />
          </p>
        </div>

        <div className="advantages2__col advantages2__col--phone">
          <img
            className="advantages2__image"
            src={'/images/home/advantages2/phone-' + index + '.png'}
            alt=""
          />
        </div>

        <div className="advantages2__col advantages2__col--card">
          <p className="advantages2__text">
            <FormattedMessage id={'advantages2_text_card_' + index} />
          </p>
        </div>
      </div>
    </div>
  );
}
