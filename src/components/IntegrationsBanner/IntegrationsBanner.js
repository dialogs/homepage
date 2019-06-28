import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { styled } from 'astroturf';
import { SimpleBanner } from '../Banner/SimpleBanner';
import { Text } from '../Text/Text';

const IntegrationsBannerContent = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
`;

const IntegrationsBannerImage = styled.img`
  @import '../../styles/variables.css';

  flex: 0 0 auto;
  margin-right: 30px;

  @media (--laptop-viewport) {
    margin-left: 40px;
  }
`;

const IntegrationsBannerText = styled.div`
  @import '../../styles/variables.css';

  flex: 1 1 auto;

  @media (--tablet-landscape-viewport) {
    flex: 0 0 60%;
  }

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
          <Text>
            <FormattedHTMLMessage id="invite_text" />
          </Text>
        </IntegrationsBannerText>
      </IntegrationsBannerContent>
    </SimpleBanner>
  );
}
