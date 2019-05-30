import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Section } from '../Section/Section';
import { PageHeader } from '../PageHeader/PageHeader';
import SupportForm from '../SupportForm';

import './ApplyForJob.css';

export function ApplyForJob() {
  return (
    <Section className="apply">
      <div
        className="support__col support__section support__section-form"
        id="form"
      >
        <PageHeader>
          <FormattedMessage id="job_apply_header" />
        </PageHeader>
        <span>
          <FormattedMessage id="job_apply_message" />
        </span>
        <SupportForm className="support__form" />
      </div>

      <div className="support__col support__section support__section-info">
        <div className="support__corporate">
          <div className="support__corporate-title">
            <FormattedMessage id="support_corporate_title" />
          </div>
          <div className="support__corporate-text">
            <FormattedMessage id="support_corporate_text_before" />
          </div>
        </div>
        <div className="support__mail-box">
          <p className="support__mail-text">
            <FormattedMessage id="support_connect" />
          </p>
          <p>
            <a href="mailto:support@dlg.ru" className="link--default">
              support@dlg.ru
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}
