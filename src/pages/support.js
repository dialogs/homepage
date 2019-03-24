import React from 'react';

import { Container } from '../components/Container/Container';
import { PageHeader } from '../components/PageHeader/PageHeader';
import { SupportForm } from '../components/SupportForm/SupportForm';

export default () => {
  return (
    <Container>
      <div className="support__sections">
        <section className="support__section support__section-form">
          <PageHeader>Обратная связь</PageHeader>
          <SupportForm />
        </section>

        <section className="support__section support__section-info">
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
        </section>
      </div>
    </Container>
  );
};
