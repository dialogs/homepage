import React, { useState } from 'react';
import classNames from 'classnames';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import ImageFormatted from '../ImageFormatted';

import { PageHeader } from '../PageHeader/PageHeader';
import { Section } from '../Section/Section';
import { Tabs, Tab } from '../Tabs';
import { PlatformIcon } from './PlatformIcon';
import { Collapsible } from '../Collapsible/Collapsible';
import './Platform.css';

export function Platform({ className }) {
  const [tab, setTab] = useState('messenger');
  const classes = classNames('platform', className);

  return (
    <Section className={classes}>
      <PageHeader className="platform__title">
        <FormattedHTMLMessage id="platform_header" />
      </PageHeader>
      <div className="platform__wrapper">
        <Tabs
          onChange={setTab}
          current={tab}
          vertical
          changeOnHover
          withSquares
          className="platform__tabs"
        >
          <Tab value="messenger">
            <FormattedMessage id="messenger" />
          </Tab>
          <Tab value="features">
            <FormattedMessage id="corporate_features" />
          </Tab>
          <Tab value="integrations">
            <FormattedMessage id="integrations" />
          </Tab>
        </Tabs>

        <div className="platform__box">
          <Collapsible
            className={classNames(
              'platform__box__item',
              tab === 'messenger' ? 'platform__box__item--visible' : null,
            )}
            openByDefault
            title={<FormattedMessage id="messenger" />}
          >
            <div className="platform__content__icons">
              <PlatformIcon
                type="messenger"
                image="/images/home/platform/icon-1-1.svg"
                text={<FormattedMessage id="platform_chats" />}
              />
              <PlatformIcon
                type="messenger"
                image="/images/home/platform/icon-1-2.svg"
                text={<FormattedMessage id="platform_free_calls" />}
              />
              <PlatformIcon
                type="messenger"
                image="/images/home/platform/icon-1-3.svg"
                text={<FormattedMessage id="platform_files_sharing" />}
              />
              <PlatformIcon
                type="messenger"
                image="/images/home/platform/icon-1-4.svg"
                text={<FormattedMessage id="platform_alert_channels" />}
              />
              <PlatformIcon
                type="messenger"
                image="/images/home/platform/icon-1-5.svg"
                text={<FormattedMessage id="platform_voice_messages" />}
              />
              <PlatformIcon
                type="messenger"
                image="/images/home/platform/icon-1-6.svg"
                text={<FormattedMessage id="platform_emojis_stickers" />}
              />
            </div>
            <div className="platform__content__links">
              <div className="platform__content__links__title">
                <FormattedHTMLMessage id="platform_availability" />
              </div>
              <div className="platform__content__links__list">
                <span>iOS</span>
                <span>Android</span>
                <span>Windows</span>
                <span>macOS</span>
                <span>Linux</span>
                <FormattedMessage id="avrora_sailfish" />
              </div>
            </div>
            <ImageFormatted
              imgClass="platform__content__image"
              src="/images/home/platform/platform-messenger-export.png"
              srcSet="/images/home/platform/platform-messenger-export@2x.png 2x"
              altLangId="alt_messenger"
            />
          </Collapsible>
          <Collapsible
            className={classNames(
              'platform__box__item',
              tab === 'features' ? 'platform__box__item--visible' : null,
            )}
            openByDefault
            title={<FormattedMessage id="corporate_features" />}
          >
            <div className="platform__content__icons">
              <PlatformIcon
                type="functions"
                image="/images/home/platform/icon-2-1.svg"
                text={<FormattedMessage id="platform_smart_chatbots" />}
              />
              <PlatformIcon
                type="functions"
                image="/images/home/platform/icon-2-2.svg"
                text={<FormattedMessage id="platform_ad_integration" />}
              />
              <PlatformIcon
                type="functions"
                image="/images/home/platform/icon-2-3.svg"
                text={<FormattedMessage id="admin_panel" />}
              />
              <PlatformIcon
                type="functions"
                image="/images/home/platform/icon-1-7.svg"
                text={<FormattedMessage id="screen_sharing" />}
              />
              <PlatformIcon
                type="functions"
                image="/images/home/platform/icon-2-4.svg"
                text={<FormattedMessage id="platform_secure_communication" />}
              />
              <PlatformIcon
                type="functions"
                image="/images/home/platform/icon-3-3.svg"
                text={<FormattedMessage id="platform_customization" />}
              />
            </div>
            <ImageFormatted
              imgClass="platform__content__image"
              src="/images/home/platform/platform-functions-export.png"
              srcSet="/images/home/platform/platform-functions-export@2x.png 2x"
              altLangId="alt_corporate_features"
            />
          </Collapsible>
          <Collapsible
            className={classNames(
              'platform__box__item',
              tab === 'integrations' ? 'platform__box__item--visible' : null,
            )}
            openByDefault
            title={<FormattedMessage id="integrations" />}
          >
            <div className="platform__content__icons">
              <PlatformIcon
                type="integrations"
                image="/images/home/platform/icon-3-1.svg"
                text={<FormattedMessage id="platform_api" />}
              />
              <PlatformIcon
                type="integrations"
                image="/images/home/platform/icon-3-2.svg"
                text={<FormattedMessage id="platform_bot_sdk" />}
              />
            </div>
            <ImageFormatted
              imgClass="platform__content__image platform__content__image--integrations"
              src="/images/home/platform/platform-integrations-export.png"
              srcSet="/images/home/platform/platform-integrations-export@2x.png 2x"
              altLangId="alt_integrations"
            />
          </Collapsible>
        </div>
      </div>
    </Section>
  );
}
