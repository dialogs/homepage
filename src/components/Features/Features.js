import React, { useState } from 'react';
import classNames from 'classnames';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

// import { Page } from '../Page/Page';
import { Heading } from '../Heading/Heading';
import { Section } from '../Section/Section';
import { Tabs, Tab } from '../Tabs';
import { Collapsible } from '../Collapsible/Collapsible';
import './Features.css';

export function Features() {
  const [tab, setTab] = useState('messenger');
  const [slideTab1, setSlideTab1] = useState('calls');
  const [slideTab2, setSlideTab2] = useState('chatbots');
  const [slideTab3, setSlideTab3] = useState('api');
  const sectionClassName = classNames('features', {
    'features--secondary': tab === 'messenger',
    'features--primary': tab === 'business',
    'features--transparent': tab === 'integrations',
  });

  return (
    <Section className={sectionClassName}>
      <Heading>
        <FormattedMessage id="what_dialog_can" />
      </Heading>
      <Tabs
        onChange={setTab}
        current={tab}
        className="features__tabs  features__tabs--top"
      >
        <Tab value="messenger">
          <FormattedMessage id="messenger" />
        </Tab>
        <Tab value="business">
          <FormattedMessage id="corporate_features" />
        </Tab>
        <Tab value="integrations">
          <FormattedMessage id="integrations" />
        </Tab>
      </Tabs>
      <div className="features__content">
        <div
          className={classNames(
            'features__content__block',
            tab === 'messenger' ? 'features__content__block--visible' : null,
          )}
        >
          <div className="feature_block">
            <Tabs
              onChange={setSlideTab1}
              current={slideTab1}
              className="features__tabs"
              vertical
              changeOnHover
            >
              <Tab value="calls">
                <FormattedMessage id="feature_audio_video" />
              </Tab>
              <Tab value="files">
                <FormattedMessage id="feature_files" />
              </Tab>
              <Tab value="chats">
                <FormattedMessage id="feature_chats" />
              </Tab>
              <Tab value="audio">
                <FormattedMessage id="feature_audio_messages" />
              </Tab>
              <Tab value="channels">
                <FormattedMessage id="feature_channels" />
              </Tab>
              <Tab value="sharing">
                <FormattedMessage id="feature_screen_sharing" />
              </Tab>
              <Tab value="crossplatform">
                <FormattedMessage id="feature_any_platform" />
              </Tab>
            </Tabs>
            <div className="feature_block__slides">
              <div className="feature_block__slides__heading">
                <FormattedMessage id="messenger" />
              </div>
              <Collapsible
                title={<FormattedMessage id="feature_audio_video" />}
                contentClassName={classNames(
                  'feature_block__slide',
                  slideTab1 === 'calls' ? 'feature_block__slide--active' : null,
                )}
              >
                <div className="feature_block__slide__text">
                  <FormattedHTMLMessage id="feature_audio_video_content" />
                </div>
                <img
                  src="/images/features/messenger-audio.png"
                  srcSet="/images/features/messenger-audio@2x.png 2x"
                  alt="Аудио/Видеовызовы"
                  className="feature_block__image feature_block__image--mobile"
                />
              </Collapsible>
              <Collapsible
                title={<FormattedMessage id="feature_files" />}
                contentClassName={classNames(
                  'feature_block__slide',
                  slideTab1 === 'files' ? 'feature_block__slide--active' : null,
                )}
              >
                <div className="feature_block__slide__text">
                  <FormattedHTMLMessage id="feature_files_content" />
                </div>
                <img
                  src="/images/features/messenger-sending.png"
                  srcSet="/images/features/messenger-sending@2x.png 2x"
                  alt="Обмен файлами любого типа"
                  className="feature_block__image feature_block__image--mobile"
                />
              </Collapsible>
              <Collapsible
                title={<FormattedMessage id="feature_chats" />}
                contentClassName={classNames(
                  'feature_block__slide',
                  slideTab1 === 'chats' ? 'feature_block__slide--active' : null,
                )}
              >
                <div className="feature_block__slide__text">
                  <FormattedHTMLMessage id="feature_chats_content" />
                </div>
                <img
                  src="/images/features/messenger-chats.png"
                  srcSet="/images/features/messenger-chats@2x.png 2x"
                  alt="Личные и групповые чаты"
                  className="feature_block__image feature_block__image--mobile"
                />
              </Collapsible>
              <Collapsible
                title={<FormattedMessage id="feature_audio_messages" />}
                contentClassName={classNames(
                  'feature_block__slide',
                  slideTab1 === 'audio' ? 'feature_block__slide--active' : null,
                )}
              >
                <div className="feature_block__slide__text">
                  <FormattedHTMLMessage id="feature_audio_messages_content" />
                </div>
                <img
                  src="/images/features/messenger-audio-message.png"
                  srcSet="/images/features/messenger-audio-message@2x.png 2x"
                  alt="Аудио-сообщения"
                  className="feature_block__image feature_block__image--mobile"
                />
              </Collapsible>
              <Collapsible
                title={<FormattedMessage id="feature_channels" />}
                contentClassName={classNames(
                  'feature_block__slide',
                  slideTab1 === 'channels'
                    ? 'feature_block__slide--active'
                    : null,
                )}
              >
                <div className="feature_block__slide__text">
                  <FormattedHTMLMessage id="feature_channels_content" />
                </div>
                <img
                  src="/images/features/messenger-channels.png"
                  srcSet="/images/features/messenger-channels@2x.png 2x"
                  alt="Каналы"
                  className="feature_block__image feature_block__image--mobile"
                />
              </Collapsible>
              <Collapsible
                title={<FormattedMessage id="feature_screen_sharing" />}
                contentClassName={classNames(
                  'feature_block__slide',
                  slideTab1 === 'sharing'
                    ? 'feature_block__slide--active'
                    : null,
                )}
              >
                <div className="feature_block__slide__text">
                  <FormattedHTMLMessage id="feature_screen_sharing_content" />
                </div>
                <img
                  src="/images/features/messenger-screen.png"
                  srcSet="/images/features/messenger-screen@2x.png 2x"
                  alt="Демонстрация экрана"
                  className="feature_block__image feature_block__image--laptop"
                />
              </Collapsible>
              <Collapsible
                title={<FormattedMessage id="feature_any_platform" />}
                contentClassName={classNames(
                  'feature_block__slide',
                  slideTab1 === 'crossplatform'
                    ? 'feature_block__slide--active'
                    : null,
                )}
              >
                <div className="feature_block__slide__text">
                  <FormattedHTMLMessage id="feature_any_platform_content" />
                </div>
                <img
                  src="/images/features/messenger-platform.png"
                  srcSet="/images/features/messenger-platform@2x.png 2x"
                  alt="Всегда на связи"
                  className="feature_block__image feature_block__image--laptop"
                />
              </Collapsible>
            </div>
          </div>
        </div>
        <div
          className={classNames(
            'features__content__block',
            tab === 'business' ? 'features__content__block--visible' : null,
          )}
        >
          <div className="feature_block">
            <Tabs
              onChange={setSlideTab2}
              current={slideTab2}
              className="features__tabs"
              vertical
              changeOnHover
            >
              <Tab value="chatbots">
                <FormattedMessage id="feature_chatbots" />
              </Tab>
              <Tab value="dashboard">
                <FormattedMessage id="feature_dashboard" />
              </Tab>
              <Tab value="ad">
                <FormattedMessage id="feature_ad" />
              </Tab>
            </Tabs>
            <div className="feature_block__slides">
              <div className="feature_block__slides__heading">
                <FormattedMessage id="corporate_features" />
              </div>
              <Collapsible
                title={<FormattedMessage id="feature_chatbots" />}
                contentClassName={classNames(
                  'feature_block__slide',
                  slideTab2 === 'chatbots'
                    ? 'feature_block__slide--active'
                    : null,
                )}
              >
                <div className="feature_block__slide__text">
                  <FormattedHTMLMessage id="feature_chatbots_content" />
                </div>
                <img
                  src="/images/features/business-chatbots.png"
                  srcSet="/images/features/business-chatbots@2x.png 2x"
                  alt="Автоматизируйте процессы"
                  className="feature_block__image feature_block__image--mobile"
                />
              </Collapsible>
              <Collapsible
                title={<FormattedMessage id="feature_dashboard" />}
                contentClassName={classNames(
                  'feature_block__slide',
                  slideTab2 === 'dashboard'
                    ? 'feature_block__slide--active'
                    : null,
                )}
              >
                <div className="feature_block__slide__text">
                  <FormattedHTMLMessage id="feature_dashboard_content" />
                </div>
                <img
                  src="/images/features/business-administrator.png"
                  srcSet="/images/features/business-administrator@2x.png 2x"
                  alt="Управляйте доступами"
                  className="feature_block__image feature_block__image--laptop"
                />
              </Collapsible>
              <Collapsible
                title={<FormattedMessage id="feature_ad" />}
                contentClassName={classNames(
                  'feature_block__slide',
                  slideTab2 === 'ad' ? 'feature_block__slide--active' : null,
                )}
              >
                <div className="feature_block__slide__text">
                  <FormattedHTMLMessage id="feature_ad_content" />
                </div>
                <img
                  src="/images/features/business-ad.png"
                  srcSet="/images/features/business-ad@2x.png 2x"
                  alt="Active Directory (AD)"
                  className="feature_block__image feature_block__image--laptop feature_block__image--ad"
                />
              </Collapsible>
            </div>
          </div>
        </div>
        <div
          className={classNames(
            'features__content__block',
            tab === 'integrations' ? 'features__content__block--visible' : null,
          )}
        >
          <div className="feature_block">
            <Tabs
              onChange={setSlideTab3}
              current={slideTab3}
              className="features__tabs"
              vertical
              changeOnHover
            >
              <Tab value="api">
                <FormattedMessage id="feature_api" />
              </Tab>
              <Tab value="botsdk">
                <FormattedMessage id="feature_botsdk" />
              </Tab>
              <Tab value="whitelabel">
                <FormattedMessage id="feature_whitelabel" />
              </Tab>
            </Tabs>
            <div className="feature_block__slides">
              <div className="feature_block__slides__heading">
                <FormattedMessage id="integrations" />
              </div>
              <Collapsible
                title={<FormattedMessage id="feature_api" />}
                contentClassName={classNames(
                  'feature_block__slide',
                  slideTab3 === 'api' ? 'feature_block__slide--active' : null,
                )}
              >
                <div className="feature_block__slide__text">
                  <FormattedHTMLMessage id="feature_api_content" />
                </div>
                <img
                  src="/images/features/integration-api.png"
                  srcSet="/images/features/integration-api@2x.png 2x"
                  alt="API dialog"
                  className="feature_block__image feature_block__image--printscreen feature_block__image--api"
                />
              </Collapsible>
              <Collapsible
                title={<FormattedMessage id="feature_botsdk" />}
                contentClassName={classNames(
                  'feature_block__slide',
                  slideTab3 === 'botsdk'
                    ? 'feature_block__slide--active'
                    : null,
                )}
              >
                <div className="feature_block__slide__text">
                  <FormattedHTMLMessage id="feature_botsdk_content" />
                  <div className="feature_block__slide__links">
                    <a
                      href="https://github.com/dialogs/python-bot-sdk/"
                      className="link--default"
                    >
                      Python
                    </a>
                    <a
                      href="https://github.com/dialogs/java-bot-sdk/"
                      className="link--default"
                    >
                      Java
                    </a>
                    <a
                      href="https://github.com/dialogs/js-bot-sdk"
                      className="link--default"
                    >
                      JavaScript
                    </a>
                    <a
                      href="https://dialogs.github.io/bots-docs/#/README"
                      className="link--default"
                    >
                      Docs
                    </a>
                  </div>
                </div>
                <img
                  src="/images/features/integration-bot-sdk.png"
                  srcSet="/images/features/integration-bot-sdk@2x.png 2x"
                  alt="Bot SDK"
                  className="feature_block__image feature_block__image--printscreen"
                />
              </Collapsible>
              <Collapsible
                title={<FormattedMessage id="feature_whitelabel" />}
                contentClassName={classNames(
                  'feature_block__slide',
                  slideTab3 === 'whitelabel'
                    ? 'feature_block__slide--active'
                    : null,
                )}
              >
                <div className="feature_block__slide__text">
                  <FormattedHTMLMessage id="feature_whitelabel_content" />
                </div>
                <img
                  src="/images/features/integration-branding.png"
                  srcSet="/images/features/integration-branding@2x.png 2x"
                  alt="Брендинг компании-заказчика"
                  className="feature_block__image feature_block__image--laptop feature_block__image--whitelabel"
                />
              </Collapsible>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
