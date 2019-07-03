import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { Section } from '../Section/Section';
import { Text } from '../Text/Text';
import links from '../../constants/links';

import './RecommendEmployee.css';
export function RecommendEmployee({ className, children }) {
  return (
    <Section className="recommend" id="recommend">
      <div className="recommend__wrapper">
        <div className="recommend__left">
          <Text
            bold
            noPadding
            size="large"
            style={{ flex: '1 1 auto', fontWeight: 600 }}
          >
            <FormattedHTMLMessage id="jobs_recommend_title" />
          </Text>
          <div className="recommend__left__award">
            <img
              className="recommend__left__img"
              src="/images/jobs/jobs-money-icon.svg"
              alt=""
            />
            <FormattedMessage id="jobs_recommend_award" />
          </div>
        </div>
        <div className="recommend__right">
          <Text bold size="large" style={{ flex: '1 1 auto' }}>
            <FormattedHTMLMessage
              id="jobs_recommend_action"
              values={{
                email: links.email.hire,
              }}
            />
          </Text>
        </div>
      </div>
    </Section>
  );
}
