import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import { Section } from '../Section/Section';
import { PageHeading } from '../PageHeading/PageHeading';
import SupportForm from '../SupportForm';
import links from '../../constants/links';
import './Support.css';

export function Support({ language }) {
  return (
    <Section className="support">
      <div className="support__col support__section support__section-form">
        <PageHeading>
          <FormattedMessage id="support_header" />
        </PageHeading>
        <SupportForm className="support__form" language={language} />
      </div>

      <div className="support__col support__section support__section-info">
        <div className="support__corporate">
          <div className="support__corporate-title">
            <FormattedMessage id="support_corporate_title" />
          </div>
          <div className="support__corporate-text">
            <FormattedHTMLMessage
              id="support_corporate_text_before"
              values={{
                email: links.email.support,
              }}
            />
          </div>
        </div>
        <div className="support__mail-box">
          <p className="support__mail-text">
            <FormattedMessage id="support_connect" />
          </p>
          <p>
            <a href={`mailto:${links.email.support}`} className="link--default">
              {links.email.support}
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}
