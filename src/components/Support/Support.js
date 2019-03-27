import React from 'react';

import { Section } from '../Section/Section';
import { PageHeader } from '../PageHeader/PageHeader';
import SupportForm from '../SupportForm';

import './Support.css';

export function Support() {
  return (
    <Section className="support">
      <div className="support__col support__section support__section-form">
        <PageHeader>Обратная связь</PageHeader>
        <SupportForm className="support__form" />
      </div>

      <div className="support__col support__section support__section-info">
        <div className="support__corporate">
          <div className="support__corporate-title">
            Обратитесь в службу поддержки
          </div>
          <div className="support__corporate-text">
            Если вы пользователь dialog Enterprise, воспользуйтесь{' '}
            <a
              href="https://support.dlg.im"
              className="link--default support__corporate__link-enterprise"
            >
              центром поддержки
            </a>{' '}
            для корпоративных клиентов.
          </div>
        </div>
        <div className="support__mail-box">
          <p className="support__mail-text">
            Связаться со службой поддержки можно также по e-mail:
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
