import React from 'react';
import { graphql } from 'gatsby';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import FormattedMetaTags from '../components/FormattedMetaTags';
import FormattedOpenGraph from '../components/FormattedOpenGraph';
import { Page } from '../components/Page/Page';
import { Container } from '../components/Container/Container';
import { PageHeader } from '../components/PageHeader/PageHeader';
import { Section } from '../components/Section/Section';
import { Heading } from '../components/Heading/Heading';
import { Offer } from '../components/Offer/Offer';

export default ({
  pageContext: {
    intl: { language, originalPath },
  },
  data: {
    site: {
      siteMetadata: { siteUrl },
    },
  },
}) => {
  return (
    <Page>
      <FormattedMetaTags
        titleId="meta_title_pricing"
        descriptionId="meta_description_pricing"
      />
      <FormattedOpenGraph
        idOgTitle="meta_title_pricing"
        url={siteUrl}
        path={`/${language}${originalPath}`}
      />

      <Container>
        <div className="price__header">
          <PageHeader>
            <FormattedMessage id="prices_pageheader" />
          </PageHeader>
        </div>
        <div className="price__subtitle">
          <FormattedHTMLMessage id="prices_go_to_form" />
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
              </li>
              <li>
                <FormattedMessage id="prices_bot_sdk" />
              </li>
            </ul>
          </div>
        </Section>
        <div id="prices_offer_form">
          <Offer language={language} />
        </div>
      </Container>
    </Page>
  );
};

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
