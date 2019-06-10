import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { Section } from '../Section/Section';

import './RecommendEmployee.css';
export function RecommendEmployee({ className, children }) {
  return (
    <Section className="recommend">
      <div className="recommend__wrapper">
        <div className="recommend__left">
          <div className="recommend__left__title">
            <FormattedHTMLMessage id="jobs_recommend_title" />
          </div>
          <div className="recommend__left__award">
            <img
              className="recommend__left__img"
              src="/images/jobs/jobs-icon1.png"
              alt=""
            />
            <FormattedMessage id="jobs_recommend_award" />
          </div>
        </div>
        <div className="recommend__right">
          <div className="recommend__right__action">
            <FormattedHTMLMessage id="jobs_recommend_action" />
          </div>
        </div>
      </div>
    </Section>
  );
}
