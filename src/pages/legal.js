import React from 'react';
import { graphql } from 'gatsby';
import FormattedMetaTags from '../components/FormattedMetaTags';
import FormattedOpenGraph from '../components/FormattedOpenGraph';
import { FormattedMessage } from 'react-intl';
import { Container } from '../components/Container/Container';

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
    <Container>
      <FormattedMetaTags
        titleId="meta_title_legal"
        descriptionId="meta_description_legal"
      />
      <FormattedOpenGraph
        idOgTitle="meta_title_legal"
        url={siteUrl}
        path={`/${language}${originalPath}`}
      />

      <article className="legal">
        <h1>
          <FormattedMessage id="legal_policy" />
        </h1>
        <p>
          <FormattedMessage id="legal_this_policy" />
        </p>
        <p>
          <FormattedMessage id="legal_our_company" />
        </p>
        <p>
          <FormattedMessage id="legal_personal_data" />
        </p>
        <p>
          <FormattedMessage id="legal_if_you_use" />
        </p>
        <p>
          <FormattedMessage id="legal_upon_registration" />
        </p>
        <p>
          <FormattedMessage id="legal_upon_registration_user" />
        </p>
        <p>
          <FormattedMessage id="legal_dialog_is_required" />
        </p>
        <p>
          <FormattedMessage id="legal_in_case" />
        </p>
        <h2>
          <FormattedMessage id="legal_we_use_cookie" />
        </h2>
        <p>
          <FormattedMessage id="legal_cookie_files" />
        </p>
        <p>
          <FormattedMessage id="legal_cookie_cintains" />
        </p>
        <p>
          <FormattedMessage id="legal_we_do_not" />
        </p>
        <p>
          <FormattedMessage id="legal_upon_registration_cookie" />
        </p>
        <h2>
          <FormattedMessage id="legal_additional_rights" />
        </h2>
        <p>
          <FormattedMessage id="legal_user_entitled" />
        </p>
        <ul>
          <li>
            <FormattedMessage id="legal_request_the_removal" />
          </li>
          <li>
            <FormattedMessage id="legal_request_data" />
          </li>
          <li>
            <FormattedMessage id="legal_request_information" />
          </li>
          <li>
            <FormattedMessage id="legal_withdraw_consent" />
          </li>
        </ul>
        <p>
          <FormattedMessage id="legal_granted_rights" />
        </p>
        <p>
          <FormattedMessage id="legal_dialog_software" />
        </p>
        <p>
          <FormattedMessage id="legal_if_you_are" />
        </p>
      </article>
    </Container>
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
