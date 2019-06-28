import React from 'react';
import { FormattedMessage } from 'react-intl';
import { styled, css } from 'astroturf';
import { Heading } from '../Heading/Heading';
import { Section } from '../Section/Section';
import { PartnerCard } from '../PartnerCard/PartnerCard';
import { technological, business } from './partnersData';
import { Container } from '../Container/Container';
import Scrollspy from 'react-scrollspy';

const PartnersSection = styled(Section)`
  @import '../../styles/variables.css';

  padding-top: 0;
  padding-bottom: 0;

  &:before {
    content: '';
    position: absolute;
    height: 750px;
    z-index: -10;
    background-color: var(--color-secondary);
    display: none;

    @media (--laptop-viewport) {
      display: block;
      top: 0px;
      right: 0;
      left: calc(100% - var(--margin-container-side) + 80px);
    }

    @media (--desktop-viewport) {
      display: block;
      top: 0px;
      right: 0;
      left: calc(50% + 660px + 60px);
    }
  }
`;

const PartnersSectionHeading = styled(Heading)`
  @import '../../styles/variables.css';

  @media (--mobile-viewport) {
    padding-top: 25px;
    padding-bottom: 15px;
  }

  @media (--tablet-landscape-viewport) {
    padding-bottom: 0 !important;
  }
`;

const PartnersContainer = styled.div`
  @import '../../styles/variables.css';

  display: flex;
  flex-flow: row nowrap;
  padding-bottom: 40px;
`;

const PartnersNavWrapper = styled.div`
  @import '../../styles/variables.css';

  flex: 0 0 auto;
  display: none;

  @media (--tablet-landscape-viewport) {
    display: block;
    width: 280px;
  }

  @media (--laptop-viewport) {
    width: 350px;
  }

  @media (--desktop-viewport) {
    width: 420px;
  }
`;

const PartnersNav = styled.nav`
  padding-top: 60px;
  padding-bottom: 20px;
  position: sticky;
  top: 50px;
`;

const PartnersNavItem = styled.div`
  @import '../../styles/variables.css';

  @media (--tablet-landscape-viewport) {
    margin-bottom: 20px;
  }

  @media (--tablet-laptop-viewport) {
    margin-bottom: 0;
  }
`;

const PartnersNavLink = styled.a`
  @import '../../styles/variables.css';

  font-size: 24px;
  line-height: 30px;
  font-weight: 500;
  color: var(--text-color-main-03);
  position: relative;
  display: inline-block;

  @media (--laptop-viewport) {
    font-size: 32px;
    line-height: 42px;
  }

  &:before {
    content: '';
    display: none;
    width: 10px;
    height: 10px;
    background-color: #b9bbfa;
    position: absolute;
    left: -30px;
    top: 16px;

    @media (--tablet-landscape-viewport) {
      display: none;
    }

    @media (--laptop-viewport) {
      display: block;
    }
  }
`;

const PartnersBody = styled.div`
  @import '../../styles/variables.css';

  flex: 1 1 auto;

  @media (--tablet-landscape-viewport) {
    padding-top: 4px;
  }

  @media (--laptop-viewport) {
    padding-top: 8px;
  }
`;

const PartnersBodyContent = styled.div`
  padding-bottom: 20px;
`;

const PartnersBodyHeading = styled.div`
  @import '../../styles/variables.css';

  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  padding-bottom: 28px;

  @media (--tablet-landscape-viewport) {
    display: none;
  }
`;

const PartnersBodyDescription = styled.div`
  @import '../../styles/variables.css';

  font-size: 16px;
  line-height: 20px;
  padding-bottom: 28px;

  @media (--tablet-landscape-viewport) {
    padding-bottom: 60px;
    padding-top: 60px;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
  }

  @media (--laptop-viewport) {
    font-size: 24px;
    line-height: 30px;
    font-weight: 500;
  }
`;

const PartnersSectionCards = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-between;
`;

const styles = css`
  @import '../../styles/variables.css';

  .link {
    transition: color 200ms ease;
  }

  .scrollSpyActive {
    & .link {
      color: var(--text-color-main);
    }
  }
`;
export function Partners() {
  return (
    <Container fluid style={{ position: 'relative' }}>
      <Container>
        <PartnersSection>
          <PartnersSectionHeading>
            <FormattedMessage id="for_partners_title" />
          </PartnersSectionHeading>
          <PartnersContainer>
            <PartnersNavWrapper>
              <PartnersNav>
                <Scrollspy
                  items={['technological_partners', 'business_partners']}
                  currentClassName={styles.scrollSpyActive}
                  offset={-10}
                >
                  <PartnersNavItem>
                    <PartnersNavLink
                      href="#technological_partners"
                      className={styles.link}
                    >
                      <FormattedMessage id="partners_technological_nav_title" />
                    </PartnersNavLink>
                  </PartnersNavItem>
                  <PartnersNavItem>
                    <PartnersNavLink
                      href="#business_partners"
                      className={styles.link}
                    >
                      <FormattedMessage id="partners_business_nav_title" />
                    </PartnersNavLink>
                  </PartnersNavItem>
                </Scrollspy>
              </PartnersNav>
            </PartnersNavWrapper>
            <PartnersBody>
              <PartnersBodyContent id="technological_partners">
                <PartnersBodyHeading>
                  <FormattedMessage id="partners_technological_nav_title" />
                </PartnersBodyHeading>
                <PartnersBodyDescription>
                  <FormattedMessage id="partners_technological_text" />
                </PartnersBodyDescription>
                <PartnersSectionCards>
                  {technological.map(PartnerCard)}
                </PartnersSectionCards>
              </PartnersBodyContent>
              <PartnersBodyContent id="business_partners">
                <PartnersBodyHeading>
                  <FormattedMessage id="partners_business_nav_title" />
                </PartnersBodyHeading>
                <PartnersBodyDescription>
                  <FormattedMessage id="partners_business_text" />
                </PartnersBodyDescription>
                <PartnersSectionCards>
                  {business.map(PartnerCard)}
                </PartnersSectionCards>
              </PartnersBodyContent>
            </PartnersBody>
          </PartnersContainer>
        </PartnersSection>
      </Container>
    </Container>
  );
}
