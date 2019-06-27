import React, { useState } from 'react';
import classNames from 'classnames';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import { Section } from '../Section/Section';
import { PageHeading } from '../PageHeading/PageHeading';
import { Tabs, Tab } from '../Tabs';
import { Collapsible } from '../Collapsible/Collapsible';
import { PossibilityCard } from '../PossibilityCard/PossibilityCard';
import './Possibilities.css';

export function Possibilities() {
  const [tab, setTab] = useState('botsdk');

  return (
    <Section className="possibilities">
      <PageHeading className="possibilities__title">
        <FormattedMessage id="possibilities_header" />
      </PageHeading>
      <div className="possibilities__subtitle">
        <FormattedHTMLMessage id="possibilities_subtitle" />
      </div>
      <div className="possibilities__wrapper">
        <Tabs
          onChange={setTab}
          current={tab}
          vertical
          changeOnHover
          withSquares
          className="possibilities__tabs"
        >
          <Tab value="botsdk">
            <FormattedMessage id="botsdk" />
          </Tab>
          <Tab value="webhooks">
            <FormattedMessage id="webhooks" />
          </Tab>
          <Tab value="zapier">
            <FormattedMessage id="zapier" />
          </Tab>
          <Tab value="graphql">
            <FormattedMessage id="graphql" />
          </Tab>
          <Tab value="api">
            <FormattedMessage id="api" />
          </Tab>
        </Tabs>

        <div className="possibilities__box">
          <Collapsible
            className={classNames(
              'possibilities__content',
              tab === 'botsdk' ? 'possibilities__content--visible' : null,
            )}
            title={<FormattedMessage id="botsdk" />}
          >
            <PossibilityCard
              image="/images/integrations/botsdk_icon.svg"
              description={<FormattedMessage id="botsdk_description" />}
              category1={<FormattedMessage id="botsdk_category1" />}
              category2={<FormattedMessage id="botsdk_category2" />}
              category3={<FormattedMessage id="botsdk_category3" />}
              category4={<FormattedMessage id="botsdk_category4" />}
            />
          </Collapsible>
          <Collapsible
            className={classNames(
              'possibilities__content',
              tab === 'webhooks' ? 'possibilities__content--visible' : null,
            )}
            title={<FormattedMessage id="webhooks" />}
          >
            <PossibilityCard
              image="/images/integrations/webhooks_icon.svg"
              description={<FormattedMessage id="webhooks_description" />}
            />
          </Collapsible>
          <Collapsible
            className={classNames(
              'possibilities__content',
              tab === 'zapier' ? 'possibilities__content--visible' : null,
            )}
            title={<FormattedMessage id="zapier" />}
          >
            <PossibilityCard
              image="/images/integrations/zapier_icon.svg"
              description={<FormattedMessage id="zapier_description" />}
              category1={<FormattedMessage id="zapier_category1" />}
            />
          </Collapsible>
          <Collapsible
            className={classNames(
              'possibilities__content',
              tab === 'graphql' ? 'possibilities__content--visible' : null,
            )}
            title={<FormattedMessage id="graphql" />}
          >
            <PossibilityCard
              image="/images/integrations/graphql_icon.svg"
              description={<FormattedMessage id="graphql_description" />}
            />
          </Collapsible>
          <Collapsible
            className={classNames(
              'possibilities__content',
              tab === 'api' ? 'possibilities__content--visible' : null,
            )}
            title={<FormattedMessage id="api" />}
          >
            <PossibilityCard
              image="/images/integrations/api_icon.svg"
              description={<FormattedMessage id="api_description" />}
              category1={<FormattedMessage id="api_category1" />}
            />
          </Collapsible>
        </div>
      </div>
      <div className="possibilities__wrapper__mobile">
        <PossibilityCard
          image="/images/integrations/botsdk_icon.svg"
          description={<FormattedMessage id="botsdk_description" />}
          category1={<FormattedMessage id="botsdk_category1" />}
          category2={<FormattedMessage id="botsdk_category2" />}
          category3={<FormattedMessage id="botsdk_category3" />}
          category4={<FormattedMessage id="botsdk_category4" />}
          title={<FormattedMessage id="botsdk" />}
        />
        <PossibilityCard
          image="/images/integrations/webhooks_icon.svg"
          description={<FormattedMessage id="webhooks_description" />}
          title={<FormattedMessage id="webhooks" />}
        />
        <PossibilityCard
          image="/images/integrations/zapier_icon.svg"
          description={<FormattedMessage id="zapier_description" />}
          category1={<FormattedMessage id="zapier_category1" />}
          title={<FormattedMessage id="zapier" />}
        />
        <PossibilityCard
          image="/images/integrations/graphql_icon.svg"
          description={<FormattedMessage id="graphql_description" />}
          title={<FormattedMessage id="graphql" />}
        />
        <PossibilityCard
          image="/images/integrations/api_icon.svg"
          description={<FormattedMessage id="api_description" />}
          category1={<FormattedMessage id="api_category1" />}
          title={<FormattedMessage id="api" />}
        />
      </div>
    </Section>
  );
}
