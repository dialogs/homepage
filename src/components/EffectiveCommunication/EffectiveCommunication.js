import React from 'react';
import { FormattedMessage } from 'react-intl';
import ImageFormatted from '../ImageFormatted';
import Image from 'gatsby-image';

import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';

import './EffectiveCommunication.css';

export function EffectiveCommunication({ image }) {
  return (
    <Section className="effective-communication">
      <div className="column column--image">
        <Heading level="2">
          <FormattedMessage id="EffectiveCommunication_effective_communications" />
        </Heading>
        <div className="image">
          <FormattedMessage id="EffectiveCommunication_effective_communications">
            {(alt) => (
              <Image fadeIn fluid={image.childImageSharp.fluid} alt={alt} />
            )}
          </FormattedMessage>
        </div>
      </div>
      <div className="column">
        <div className="item">
          <div className="item__title">
            <FormattedMessage id="EffectiveCommunication_increased_productivity" />
          </div>
          <ul className="list list--secondary">
            <li>
              <FormattedMessage id="EffectiveCommunication_increased_speed" />
            </li>
            <li>
              <FormattedMessage id="EffectiveCommunication_fast" />
            </li>
            <li>
              <FormattedMessage id="EffectiveCommunication_new" />
            </li>
          </ul>
        </div>
        <div className="item">
          <div className="item__title">
            <FormattedMessage id="EffectiveCommunication_decreasing" />
          </div>
          <ul className="list list--secondary">
            <li>
              <FormattedMessage id="EffectiveCommunication_combination" />
            </li>
            <li>
              <FormattedMessage id="EffectiveCommunication_viop" />
            </li>
            <li>
              <FormattedMessage id="EffectiveCommunication_teleconference" />
            </li>
            <li>
              <FormattedMessage id="EffectiveCommunication_calls_inside" />
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
