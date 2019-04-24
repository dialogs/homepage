import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Section } from '../Section/Section';
import { PageHeader } from '../PageHeader/PageHeader';
import ImageFormatted from '../ImageFormatted';

import './Hero.css';

export function Hero({ openOfferModal }) {
  return (
    <Section className="hero">
      <div className="hero__wrapper">
        <div className="hero__content">
          <PageHeader>
            <FormattedMessage id="hero_header" />
          </PageHeader>
          <h4 className="hero__text">
            <FormattedMessage id="hero_subheader" />
          </h4>
          <button
            type="button"
            className="button button--default"
            onClick={openOfferModal}
          >
            <FormattedMessage id="button_get_offer" />
          </button>
        </div>
        <ImageFormatted
          imgClass="hero__image"
          src="/images/home/home-hero.png"
          srcSet="/images/home/home-hero@2x.png 2x"
          altLangId="alt_hero_header"
        />
      </div>
    </Section>
  );
}
