import React, { useState } from 'react';
import classNames from 'classnames';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import { Section } from '../Section/Section';
import { PageHeading } from '../PageHeading/PageHeading';
import { Tabs, Tab } from '../Tabs';
import { Collapsible } from '../Collapsible/Collapsible';
import { IntegrationCard } from '../IntegrationCard/IntegrationCard';
import './IntegrationsCatalog.css';

export function IntegrationsCatalog() {
  const [tab, setTab] = useState('bots');

  return (
    <Section className="integrations">
      <PageHeading className="integrations__title">
        <FormattedMessage id="integrations_header" />
      </PageHeading>
      <div className="integrations__subtitle">
        <FormattedHTMLMessage id="integrations_subtitle" />
      </div>
      <div className="integrations__wrapper">
        <Tabs
          onChange={setTab}
          current={tab}
          vertical
          changeOnHover
          withSquares
          className="integrations__tabs"
        >
          <Tab value="bots">
            <FormattedMessage id="bots" />
          </Tab>
          <Tab value="marketing">
            <FormattedMessage id="marketing" />
          </Tab>
          <Tab value="design">
            <FormattedMessage id="design" />
          </Tab>
          <Tab value="communication">
            <FormattedMessage id="communication" />
          </Tab>
        </Tabs>

        <div className="integrations__box">
          <Collapsible
            className={classNames(
              'integrations__content',
              tab === 'bots' ? 'integrations__content--visible' : null,
            )}
            title={<FormattedMessage id="botsdk" />}
          >
            <div className="integrations__content__body">
              <IntegrationCard
                title={<FormattedMessage id="asana_title" />}
                description={<FormattedMessage id="asana_description" />}
                link={<FormattedMessage id="asana_link" />}
                image="/images/integrations/asana_icon.svg"
                category={<FormattedMessage id="asana_category" />}
                language={<FormattedMessage id="asana_language" />}
              />
              <IntegrationCard
                title={<FormattedMessage id="google_title" />}
                description={<FormattedMessage id="google_description" />}
                link={<FormattedMessage id="asana_link" />}
                image="/images/integrations/google_icon.svg"
                category={<FormattedMessage id="google_category" />}
                language={<FormattedMessage id="google_language" />}
              />
              <IntegrationCard
                title={<FormattedMessage id="reminder_title" />}
                description={<FormattedMessage id="reminder_description" />}
                link={<FormattedMessage id="asana_link" />}
                image="/images/integrations/reminder_icon.svg"
                category={<FormattedMessage id="reminder_category" />}
                language={<FormattedMessage id="reminder_language" />}
              />
              <IntegrationCard
                title={<FormattedMessage id="asana_title" />}
                description={<FormattedMessage id="asana_description" />}
                link={<FormattedMessage id="asana_link" />}
                image="/images/integrations/asana_icon.svg"
                category={<FormattedMessage id="asana_category" />}
                language={<FormattedMessage id="asana_language" />}
              />
            </div>
          </Collapsible>
          <Collapsible
            className={classNames(
              'integrations__content',
              tab === 'marketing' ? 'integrations__content--visible' : null,
            )}
            title={<FormattedMessage id="webhooks" />}
          >
            <div className="integrations__content__body">
              <IntegrationCard
                title={<FormattedMessage id="reminder_title" />}
                description={<FormattedMessage id="reminder_description" />}
                link={<FormattedMessage id="asana_link" />}
                image="/images/integrations/reminder_icon.svg"
                category={<FormattedMessage id="reminder_category" />}
                language={<FormattedMessage id="reminder_language" />}
              />
              <IntegrationCard
                title={<FormattedMessage id="asana_title" />}
                description={<FormattedMessage id="asana_description" />}
                link={<FormattedMessage id="asana_link" />}
                image="/images/integrations/asana_icon.svg"
                category={<FormattedMessage id="asana_category" />}
                language={<FormattedMessage id="asana_language" />}
              />
              <IntegrationCard
                title={<FormattedMessage id="google_title" />}
                description={<FormattedMessage id="google_description" />}
                link={<FormattedMessage id="asana_link" />}
                image="/images/integrations/google_icon.svg"
                category={<FormattedMessage id="google_category" />}
                language={<FormattedMessage id="google_language" />}
              />
              <IntegrationCard
                title={<FormattedMessage id="google_title" />}
                description={<FormattedMessage id="google_description" />}
                link={<FormattedMessage id="asana_link" />}
                image="/images/integrations/google_icon.svg"
                category={<FormattedMessage id="google_category" />}
                language={<FormattedMessage id="google_language" />}
              />
            </div>
          </Collapsible>
          <Collapsible
            className={classNames(
              'integrations__content',
              tab === 'design' ? 'integrations__content--visible' : null,
            )}
            title={<FormattedMessage id="zapier" />}
          >
            <div className="integrations__content__body">
              <IntegrationCard
                title={<FormattedMessage id="google_title" />}
                description={<FormattedMessage id="google_description" />}
                link={<FormattedMessage id="asana_link" />}
                image="/images/integrations/google_icon.svg"
                category={<FormattedMessage id="google_category" />}
                language={<FormattedMessage id="google_language" />}
              />
              <IntegrationCard
                title={<FormattedMessage id="google_title" />}
                description={<FormattedMessage id="google_description" />}
                link={<FormattedMessage id="asana_link" />}
                image="/images/integrations/google_icon.svg"
                category={<FormattedMessage id="google_category" />}
                language={<FormattedMessage id="google_language" />}
              />
              <IntegrationCard
                title={<FormattedMessage id="asana_title" />}
                description={<FormattedMessage id="asana_description" />}
                link={<FormattedMessage id="asana_link" />}
                image="/images/integrations/asana_icon.svg"
                category={<FormattedMessage id="asana_category" />}
                language={<FormattedMessage id="asana_language" />}
              />
              <IntegrationCard
                title={<FormattedMessage id="google_title" />}
                description={<FormattedMessage id="google_description" />}
                link={<FormattedMessage id="asana_link" />}
                image="/images/integrations/google_icon.svg"
                category={<FormattedMessage id="google_category" />}
                language={<FormattedMessage id="google_language" />}
              />
            </div>
          </Collapsible>
          <Collapsible
            className={classNames(
              'integrations__content',
              tab === 'communication' ? 'integrations__content--visible' : null,
            )}
            title={<FormattedMessage id="graphql" />}
          >
            <div className="integrations__content__body">
              <IntegrationCard
                title={<FormattedMessage id="google_title" />}
                description={<FormattedMessage id="google_description" />}
                link={<FormattedMessage id="asana_link" />}
                image="/images/integrations/google_icon.svg"
                category={<FormattedMessage id="google_category" />}
                language={<FormattedMessage id="google_language" />}
              />
              <IntegrationCard
                title={<FormattedMessage id="google_title" />}
                description={<FormattedMessage id="google_description" />}
                link={<FormattedMessage id="asana_link" />}
                image="/images/integrations/google_icon.svg"
                category={<FormattedMessage id="google_category" />}
                language={<FormattedMessage id="google_language" />}
              />
              <IntegrationCard
                title={<FormattedMessage id="asana_title" />}
                description={<FormattedMessage id="asana_description" />}
                link={<FormattedMessage id="asana_link" />}
                image="/images/integrations/asana_icon.svg"
                category={<FormattedMessage id="asana_category" />}
                language={<FormattedMessage id="asana_language" />}
              />
              <IntegrationCard
                title={<FormattedMessage id="google_title" />}
                description={<FormattedMessage id="google_description" />}
                link={<FormattedMessage id="asana_link" />}
                image="/images/integrations/google_icon.svg"
                category={<FormattedMessage id="google_category" />}
                language={<FormattedMessage id="google_language" />}
              />
            </div>
          </Collapsible>
        </div>
      </div>
    </Section>
  );
}
