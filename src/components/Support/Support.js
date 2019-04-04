import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Section } from '../Section/Section';
import { PageHeader } from '../PageHeader/PageHeader';
import SupportForm from '../SupportForm';

import './Support.css';

export function Support() {
  return (
    <Section className="support">
      <div className="support__col support__section support__section-form">
        <PageHeader>
          <FormattedMessage id="support_header" />
        </PageHeader>
        <SupportForm className="support__form" />
      </div>

      <div className="support__col support__section support__section-info">
        <div className="support__corporate">
          <div className="support__corporate-title">
            <FormattedMessage id="support_corporate_title" />
          </div>
          <div className="support__corporate-text">
            <FormattedMessage id="support_corporate_text_before" />
            <a
              href="https://support.dlg.im"
              className="link--default support__corporate__link-enterprise"
            >
              <FormattedMessage id="support_corporate_text_link" />
            </a>{' '}
            <FormattedMessage id="support_corporate_text_after" />
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
