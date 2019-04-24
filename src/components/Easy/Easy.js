import React from 'react';
import { FormattedMessage } from 'react-intl';
import ImageFormatted from '../ImageFormatted';

import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';

import './Easy.css';

export function Easy() {
  return (
    <Section className="easy">
      <div className="easy__cols">
        <div className="easy__col easy__col--left">
          <Heading className="easy-title">
            <FormattedMessage id="easy_header" />
          </Heading>
          <div className="easy-image">
            <ImageFormatted
              imgClass="easy-img"
              src="/images/home/easy/easy-export@2x.png"
              srcSet="/images/home/easy/easy-export@2x.png 2x"
              altLangId="alt_easy"
            />
          </div>
        </div>
        <div className="easy__col easy__col--right">
          <div className="easy-info">
            <div className="easy-info-item">
              <div className="easy-info-title">
                <FormattedMessage id="easier_title" />
              </div>
              <div className="easy-info-text">
                <FormattedMessage id="easier_text" />
              </div>
            </div>
            <div className="easy-info-item">
              <div className="easy-info-title">
                <FormattedMessage id="more_efficient_title" />
              </div>
              <div className="easy-info-text">
                <FormattedMessage id="more_efficient_text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
