import React from 'react';
import Image from 'gatsby-image';

import { Section } from '../Section/Section';
import { PageHeader } from '../PageHeader/PageHeader';
import './Hero.css';

export function Hero({ openOfferModal, heroImage, intl: { formatMessage } }) {
  return (
    <Section className="hero">
      <div className="hero__wrapper">
        <div className="hero__content">
          <PageHeader>{formatMessage({ id: 'hero_header' })}</PageHeader>
          <h4 className="hero__text">
            {formatMessage({ id: 'hero_subheader' })}
          </h4>
          <button
            type="button"
            className="button button--default"
            onClick={openOfferModal}
          >
            {formatMessage({ id: 'button_get_offer' })}
          </button>
        </div>
        <div className="hero__image">
          <Image
            fadeIn
            fluid={heroImage.childImageSharp.fluid}
            alt={formatMessage({ id: 'alt_hero_header' })}
          />
        </div>
      </div>
    </Section>
  );
}
