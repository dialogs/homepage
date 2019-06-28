import React, { useState } from 'react';
import classNames from 'classnames';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { styled } from 'astroturf';
import { withProps } from 'astroturf/helpers';
import { UnderlineLink } from '../UnderlineLink/UnderlineLink';
import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';
import { Tabs, Tab } from '../Tabs';
import { Collapsible } from '../Collapsible/Collapsible';
import { PossibilityCard } from '../PossibilityCard/PossibilityCard';
import { Text } from '../Text/Text';

import './Possibilities.css';

const PossibilityCardLink = withProps({
  direction: 'right',
  target: '_blank',
  rel: 'noopener noreferrer',
})(styled(UnderlineLink)`
  font-size: 16px;
  line-height: 24px;
  margin-right: 40px;
`);

export function Possibilities() {
  const [tab, setTab] = useState('botsdk');

  return (
    <Section className="possibilities">
      <Heading>
        <FormattedMessage id="possibilities_header" />
      </Heading>
      <Text size="large" bold>
        <FormattedHTMLMessage id="possibilities_subtitle" />
      </Text>

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
              description={
                <>
                  <FormattedMessage id="botsdk_description" />
                  <div style={{ marginTop: 20 }}>
                    <PossibilityCardLink href="https://github.com/dialogs/python-bot-sdk">
                      Python
                    </PossibilityCardLink>
                    <PossibilityCardLink href="https://github.com/dialogs/java-bot-sdk">
                      Java
                    </PossibilityCardLink>
                    <PossibilityCardLink href="https://github.com/dialogs/js-bot-sdk">
                      JavaScript
                    </PossibilityCardLink>
                    <PossibilityCardLink href="https://dialogs.github.io/bots-docs">
                      <FormattedMessage id="new_integrations.docs" />
                    </PossibilityCardLink>
                  </div>
                </>
              }
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
              description={
                <>
                  <FormattedMessage id="zapier_description" />
                  <div style={{ marginTop: 20 }}>
                    <PossibilityCardLink href="https://zapier.com/app/editor/61180830/nodes/61180830/app">
                      <FormattedMessage id="new_integrations.zapier" />
                    </PossibilityCardLink>
                  </div>
                </>
              }
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
              image="/images/logotype.svg"
              description={
                <>
                  <FormattedMessage id="api_description" />
                  <div style={{ marginTop: 20 }}>
                    <PossibilityCardLink href="https://dialogs.github.io/api-schema">
                      <FormattedMessage id="new_integrations.docs" />
                    </PossibilityCardLink>
                  </div>
                </>
              }
            />
          </Collapsible>
        </div>
      </div>
      <div className="possibilities__wrapper__mobile">
        <PossibilityCard
          image="/images/integrations/botsdk_icon.svg"
          description={
            <>
              <FormattedMessage id="botsdk_description" />
              <div style={{ marginTop: 20 }}>
                <PossibilityCardLink href="https://github.com/dialogs/python-bot-sdk">
                  Python
                </PossibilityCardLink>
                <PossibilityCardLink href="https://github.com/dialogs/java-bot-sdk">
                  Java
                </PossibilityCardLink>
                <PossibilityCardLink href="https://github.com/dialogs/js-bot-sdk">
                  JavaScript
                </PossibilityCardLink>
                <PossibilityCardLink href="https://dialogs.github.io/bots-docs">
                  <FormattedMessage id="new_integrations.docs" />
                </PossibilityCardLink>
              </div>
            </>
          }
        />
        <PossibilityCard
          image="/images/integrations/webhooks_icon.svg"
          description={<FormattedMessage id="webhooks_description" />}
          title={<FormattedMessage id="webhooks" />}
        />
        <PossibilityCard
          image="/images/integrations/zapier_icon.svg"
          description={
            <>
              <FormattedMessage id="zapier_description" />
              <div style={{ marginTop: 20 }}>
                <PossibilityCardLink href="https://zapier.com/app/editor/61180830/nodes/61180830/app">
                  <FormattedMessage id="new_integrations.zapier" />
                </PossibilityCardLink>
              </div>
            </>
          }
          title={<FormattedMessage id="zapier" />}
        />
        <PossibilityCard
          image="/images/integrations/graphql_icon.svg"
          description={<FormattedMessage id="graphql_description" />}
          title={<FormattedMessage id="graphql" />}
        />
        <PossibilityCard
          image="/images/logotype.svg"
          description={
            <>
              <FormattedMessage id="api_description" />
              <div style={{ marginTop: 20 }}>
                <PossibilityCardLink href="https://dialogs.github.io/api-schema">
                  <FormattedMessage id="new_integrations.docs" />
                </PossibilityCardLink>
              </div>
            </>
          }
          title={<FormattedMessage id="api" />}
        />
      </div>
    </Section>
  );
}
