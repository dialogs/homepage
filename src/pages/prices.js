import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Page } from '../components/Page/Page';
import { Container } from '../components/Container/Container';
import { PageHeader } from '../components/PageHeader/PageHeader';
import { Section } from '../components/Section/Section';
import { Heading } from '../components/Heading/Heading';
import { Offer } from '../components/Offer/Offer';

import '../styles/prices.css';

export default () => {
  return (
    <Page>
      <Container>
        <div className="price__header">
          <PageHeader>
            <FormattedMessage id="prices_pageheader" />
          </PageHeader>
          <div className="value">
            <FormattedMessage id="prices_price" />
          </div>
        </div>
        <div className="price__subtitle">
          <FormattedMessage id="prices_subtitle" />
        </div>
        <Section className="prices">
          <div className="prices__description">
            <FormattedMessage id="prices__description" />
          </div>
          <div className="item">
            <Heading level="3" className="item__title">
              <FormattedMessage id="prices_item_title" />
            </Heading>
            <ul className="list list--secondary">
              <li>
                <FormattedMessage id="prices_personal_chats" />
              </li>
              <li>
                <FormattedMessage id="prices_group_open_closed_chats" />
              </li>
              <li>
                <FormattedMessage id="prices_open_closed_channels" />
              </li>
              <li>
                <FormattedMessage id="prices_stickers_smiles_reactions" />
              </li>
              <li>
                <FormattedMessage id="prices_statuses" />
              </li>
              <li>
                <FormattedMessage id="prices_voice_messages" />
              </li>
              <li>
                <FormattedMessage id="prices_starred_chats_and_contacts" />
              </li>
              <li>
                <FormattedMessage id="prices_address_book" />
              </li>
              <li>
                <FormattedMessage id="prices_search" />
              </li>
              <li>
                <FormattedMessage id="prices_mentions" />
              </li>
              <li>
                <FormattedMessage id="prices_view_all_media" />
              </li>
              <li>
                <FormattedMessage id="prices_cites" />
              </li>
              <li>
                <FormattedMessage id="prices_geolocation" />
              </li>
              <li>
                <FormattedMessage id="prices_contact_in_chat" />
              </li>
              <li>
                <FormattedMessage id="prices_disable_notification" />
              </li>
            </ul>
          </div>
          <div className="item">
            <Heading level="3" className="item__title">
              <FormattedMessage id="prices_corporate_fuctions" />
            </Heading>
            <ul className="list list--secondary">
              <li>
                <FormattedMessage id="prices_exchange_documents" />
              </li>
              <li>
                <FormattedMessage id="prices_chatbots" />
              </li>
              <li>
                <FormattedMessage id="prices_audio_video_conference" />
              </li>
              <li>
                <FormattedMessage id="prices_discovery" />
              </li>
              <li>
                <FormattedMessage id="prices_policy_management" />
              </li>
              <li>
                <FormattedMessage id="prices_admin_panel" />
              </li>
              <li>
                <FormattedMessage id="prices_custom_data_in_profile" />
              </li>
              <li>
                <FormattedMessage id="prices_screensahring" />
              </li>
              <li>
                <FormattedMessage id="prices_interface_customization" />
              </li>
            </ul>
          </div>
          <div className="item">
            <Heading level="3" className="item__title">
              <FormattedMessage id="prices_integrations" />
            </Heading>
            <ul className="list list--secondary">
              <li>
                <FormattedMessage id="prices_email_integration" />
              </li>
              <li>
                <FormattedMessage id="prices_video_conference_integrations" />
              </li>
              <li>
                <FormattedMessage id="prices_ats" />
              </li>
              <li>
                <FormattedMessage id="prices_open_api" />
              </li>
              <li>
                <FormattedMessage id="prices_ad_ldap" />
              </li>
              <li>
                <FormattedMessage id="prices_security_infrastructure" />
                Интеграции с инфраструктурой безопасности (SIEM, DLP, IDM,
                Антивирус)
              </li>
              <li>
                <FormattedMessage id="prices_bot_sdk" />
              </li>
            </ul>
          </div>
        </Section>
        <Offer />
      </Container>
    </Page>
  );
};
