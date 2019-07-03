import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'astroturf';
import { withProps } from 'astroturf/helpers';
import { UnderlineLink } from '../UnderlineLink/UnderlineLink';

const IntegrationCardContainer = styled.div`
  @import '../../styles/variables.css';

  display: flex;
  flex-direction: column;
  height: 220px;
  margin-bottom: 20px;
  border: 1px solid color-mod(#000 alpha(17.5%));
  padding: 20px;
  flex: 1 1 100%;

  @media (--tablet-viewport) {
    flex: 0 0 49%;
  }

  @media (--tablet-landscape-viewport) {
    flex: 0 0 32%;
    margin-right: 2%;

    &:nth-child(3n) {
      margin-right: 0;
    }
  }
`;

const IntegrationCardHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const IntegrationCardImage = styled.img`
  @import '../../styles/variables.css';

  max-width: 140px;
  height: 40px;
`;

const IntegrationCardBody = styled.div`
  flex: 1 1 auto;
  padding: 20px 0;
`;

const IntegrationCardTitle = styled.h3`
  @import '../../styles/variables.css';

  font-size: 18px;
  line-height: 23px;
  margin: 0;
  color: #000;

  @media (--mobile-viewport) {
    font-size: 16px;
    line-height: 20px;
  }
`;

const IntegrationCardDescription = styled.div`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.01em;
  margin-top: 10px;
`;

const IntegrationCardFooter = styled.footer`
  flex: 0 0 auto;
  display: flex;
  justify-content: flex-start;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.01em;
`;

const IntegrationCardFooterBlock = styled.div`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.01em;
`;

const IntegrationCardFooterBlockTitle = styled.div`
  display: block;
  font-weight: 500;
`;

const IntegrationCardCountry = styled(IntegrationCardFooterBlock)`
  flex: 0 0 auto;
  margin-right: 30px;
`;

const IntegrationCardCategory = styled(IntegrationCardFooterBlock)`
  flex: 1 1 auto;
`;

const IntegrationCardLink = withProps({
  direction: 'right',
  target: '_blank',
  rel: 'noopener noreferrer',
})(styled(UnderlineLink)`
  font-size: 14px;
  line-height: 20px;
`);

export function IntegrationCard({
  title,
  description,
  link,
  image,
  country,
  category,
}) {
  return (
    <IntegrationCardContainer key={link}>
      <IntegrationCardHeader>
        <IntegrationCardImage src={image} />
        {link ? (
          <div>
            <IntegrationCardLink href={link}>
              <FormattedMessage id="new_integrations.source_code" />
            </IntegrationCardLink>
          </div>
        ) : null}
      </IntegrationCardHeader>
      <IntegrationCardBody>
        <IntegrationCardTitle>
          <FormattedMessage id={title} />
        </IntegrationCardTitle>
        <IntegrationCardDescription>
          <FormattedMessage id={description} />
        </IntegrationCardDescription>
      </IntegrationCardBody>
      <IntegrationCardFooter>
        <IntegrationCardCountry>
          <IntegrationCardFooterBlockTitle>
            <FormattedMessage id="integrations_card_language" />
          </IntegrationCardFooterBlockTitle>
          <FormattedMessage id={country} />
        </IntegrationCardCountry>
        <IntegrationCardCategory>
          <IntegrationCardFooterBlockTitle>
            <FormattedMessage id="integrations_card_category" />
          </IntegrationCardFooterBlockTitle>
          <FormattedMessage id={category} />
        </IntegrationCardCategory>
      </IntegrationCardFooter>
    </IntegrationCardContainer>
  );
}
