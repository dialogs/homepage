import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'astroturf';
import { withProps } from 'astroturf/helpers';

const PartnerCardContainer = styled.div`
  @import '../../styles/variables.css';

  display: flex;
  flex-direction: column;
  height: 320px;
  flex: 0 0 49%;
  margin-bottom: 20px;
  border: 1px solid color-mod(#000 alpha(17.5%));
  padding: 20px;

  @media (--mobile-viewport) {
    height: 320px;
    flex: 0 0 100%;
    margin-right: 0;
  }
`;

const PartnerCardHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const PartnerCardImage = styled.img`
  @import '../../styles/variables.css';

  max-width: 140px;
  height: 40px;
`;

const PartnerCardLink = withProps({
  target: '_blank',
  rel: 'noopener noreferrer',
})(styled.a`
  @import '../../styles/variables.css';

  display: inline-block;
  line-height: 18px;
  height: 18px;
  font-size: 14px;
  letter-spacing: 0.01em;
  position: relative;
  font-weight: 500;

  &:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background: #b9bbfa;
    background: var(--color-secondary);
    transition: width 150ms ease;
  }

  &:hover {
    &:before {
      width: 0;
    }
  }
`);

const PartnerCardBody = styled.div`
  flex: 1 1 auto;
  padding: 20px 0;
`;

const PartnerCardTitle = styled.h3`
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

const PartnerCardDescription = styled.div`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.01em;
  margin-top: 10px;
`;

const PartnerCardFooter = styled.footer`
  flex: 0 0 auto;
  display: flex;
  justify-content: flex-start;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.01em;
`;

const PartnerCardFooterBlock = styled.div`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.01em;
`;

const PartnerCardFooterBlockTitle = styled.div`
  display: block;
  font-weight: 500;
`;

const PartnerCardCountry = styled(PartnerCardFooterBlock)`
  flex: 0 0 auto;
  margin-right: 30px;
`;

const PartnerCardCategory = styled(PartnerCardFooterBlock)`
  flex: 1 1 auto;
`;

export function PartnerCard({
  title,
  description,
  link,
  image,
  country,
  category,
  https,
}) {
  return (
    <PartnerCardContainer key={title}>
      <PartnerCardHeader>
        <PartnerCardImage src={image} />
        <PartnerCardLink
          className="tab__link"
          href={`http${https ? 's' : ''}://${link}`}
        >
          {link}
        </PartnerCardLink>
      </PartnerCardHeader>
      <PartnerCardBody>
        <PartnerCardTitle>
          <FormattedMessage id={title} />
        </PartnerCardTitle>
        <PartnerCardDescription>
          <FormattedMessage id={description} />
        </PartnerCardDescription>
      </PartnerCardBody>
      <PartnerCardFooter>
        <PartnerCardCountry>
          <PartnerCardFooterBlockTitle>
            <FormattedMessage id="for_partners_tab_country" />
          </PartnerCardFooterBlockTitle>
          <FormattedMessage id={country} />
        </PartnerCardCountry>
        <PartnerCardCategory>
          <PartnerCardFooterBlockTitle>
            <FormattedMessage id="for_partners_tab_category" />
          </PartnerCardFooterBlockTitle>
          <FormattedMessage id={category} />
        </PartnerCardCategory>
      </PartnerCardFooter>
    </PartnerCardContainer>
  );
}
