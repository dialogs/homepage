import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { styled } from 'astroturf';
import { SimpleBanner } from '../Banner/SimpleBanner';
import links from '../../constants/links';
import { Text } from '../Text/Text';

const IntegrationsBannerContent = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
`;

const IntegrationsBannerImage = styled.img`
  flex: 0 0 auto;
  margin-right: 30px;

  @media (--laptop-viewport) {
    margin-left: 40px;
  }
`;

const IntegrationsBannerText = styled.div`
  flex: 1 1 auto;

  & a {
    font-weight: 500;
  }
`;

export function IntegrationsBanner() {
  return (
    <SimpleBanner side="left" intent="secondary">
      <IntegrationsBannerContent>
        <IntegrationsBannerImage src="/images/integrations/invite_icon.svg" />
        <IntegrationsBannerText>
          <Text size="large" bold>
            <FormattedHTMLMessage
              id="invite_text"
              values={{ email: links.email.info }}
            />
          </Text>
        </IntegrationsBannerText>
      </IntegrationsBannerContent>
    </SimpleBanner>
  );
}
