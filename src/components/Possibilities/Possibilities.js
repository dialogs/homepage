import React, { useState } from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { styled } from 'astroturf';
import { withProps } from 'astroturf/helpers';
import { UnderlineLink } from '../UnderlineLink/UnderlineLink';
import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';
import { Tabs, Tab } from '../Tabs';
import { Collapsible } from '../Collapsible/Collapsible';
import { PossibilityCard } from '../PossibilityCard/PossibilityCard';

import './Possibilities.css';

const PossibilityCardLink = withProps({
  direction: 'right',
  target: '_blank',
  rel: 'noopener noreferrer',
})(styled(UnderlineLink)`
  font-size: 18px;
  line-height: 24px;
  margin-right: 40px;
`);

export function Possibilities() {
  const [tab, setTab] = useState('botsdk');

  return (
    <Section className="possibilities">
      <Heading level="1">
        <FormattedMessage id="integrations.possibilities.header" />
      </Heading>

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
            <FormattedMessage id="integrations.possibilities.botsdk.title" />
          </Tab>
          <Tab value="webhooks">
            <FormattedMessage id="integrations.possibilities.webhooks.title" />
          </Tab>
          <Tab value="zapier">
            <FormattedMessage id="integrations.possibilities.zapier.title" />
          </Tab>
          <Tab value="graphql">
            <FormattedMessage id="integrations.possibilities.graphql.title" />
          </Tab>
          <Tab value="api">
            <FormattedMessage id="integrations.possibilities.api.title" />
          </Tab>
        </Tabs>

        <div className="possibilities__box">
          <Collapsible
            className={classNames(
              'possibilities__content',
              tab === 'botsdk' ? 'possibilities__content--visible' : null,
            )}
            title={
              <FormattedMessage id="integrations.possibilities.botsdk.title" />
            }
          >
            <PossibilityCard
              image="/images/integrations/botsdk_icon.svg"
              description={
                <>
                  <FormattedMessage id="integrations.possibilities.botsdk.description" />
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
                      <FormattedMessage id="integrations.docs" />
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
            title={
              <FormattedMessage id="integrations.possibilities.webhooks.title" />
            }
          >
            <PossibilityCard
              image="/images/integrations/webhooks_icon.svg"
              description={
                <FormattedMessage id="integrations.possibilities.webhooks.description" />
              }
            />
          </Collapsible>
          <Collapsible
            className={classNames(
              'possibilities__content',
              tab === 'zapier' ? 'possibilities__content--visible' : null,
            )}
            title={
              <FormattedMessage id="integrations.possibilities.zapier.title" />
            }
          >
            <PossibilityCard
              image="/images/integrations/zapier_icon.svg"
              description={
                <>
                  <FormattedMessage id="integrations.possibilities.zapier.description" />
                  <div style={{ marginTop: 20 }}>
                    <PossibilityCardLink href="https://zapier.com/app/editor/61180830/nodes/61180830/app">
                      <FormattedMessage id="integrations.possibilities.zapier.link" />
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
            title={
              <FormattedMessage id="integrations.possibilities.graphql.title" />
            }
          >
            <PossibilityCard
              image="/images/integrations/graphql_icon.svg"
              description={
                <FormattedMessage id="integrations.possibilities.graphql.description" />
              }
            />
          </Collapsible>
          <Collapsible
            className={classNames(
              'possibilities__content',
              tab === 'api' ? 'possibilities__content--visible' : null,
            )}
            title={
              <FormattedMessage id="integrations.possibilities.api.title" />
            }
          >
            <PossibilityCard
              image="/images/logotype.svg"
              description={
                <>
                  <FormattedMessage id="integrations.possibilities.api.description" />
                  <div style={{ marginTop: 20 }}>
                    <PossibilityCardLink href="https://dialogs.github.io/api-schema">
                      <FormattedMessage id="integrations.docs" />
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
          title={
            <FormattedMessage id="integrations.possibilities.botsdk.title" />
          }
          description={
            <>
              <FormattedMessage id="integrations.possibilities.botsdk.description" />
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
                  <FormattedMessage id="integrations.docs" />
                </PossibilityCardLink>
              </div>
            </>
          }
        />
        <PossibilityCard
          image="/images/integrations/webhooks_icon.svg"
          description={
            <FormattedMessage id="integrations.possibilities.webhooks.description" />
          }
          title={
            <FormattedMessage id="integrations.possibilities.webhooks.title" />
          }
        />
        <PossibilityCard
          image="/images/integrations/zapier_icon.svg"
          title={
            <FormattedMessage id="integrations.possibilities.zapier.title" />
          }
          description={
            <>
              <FormattedMessage id="integrations.possibilities.zapier.description" />
              <div style={{ marginTop: 20 }}>
                <PossibilityCardLink href="https://zapier.com/app/editor/61180830/nodes/61180830/app">
                  <FormattedMessage id="integrations.possibilities.zapier.link" />
                </PossibilityCardLink>
              </div>
            </>
          }
        />
        <PossibilityCard
          image="/images/integrations/graphql_icon.svg"
          description={
            <FormattedMessage id="integrations.possibilities.graphql.description" />
          }
          title={
            <FormattedMessage id="integrations.possibilities.graphql.title" />
          }
        />
        <PossibilityCard
          image="/images/logotype.svg"
          description={
            <>
              <FormattedMessage id="integrations.possibilities.api.description" />
              <div style={{ marginTop: 20 }}>
                <PossibilityCardLink href="https://dialogs.github.io/api-schema">
                  <FormattedMessage id="integrations.docs" />
                </PossibilityCardLink>
              </div>
            </>
          }
          title={<FormattedMessage id="integrations.possibilities.api.title" />}
        />
      </div>
    </Section>
  );
}
