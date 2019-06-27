import React from 'react';
import { FormattedMessage } from 'react-intl';
import { styled } from 'astroturf';
import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';
import { List, ListItem } from '../List/List';
import { Container } from '../Container/Container';

const PartnerAvailablesHeading = styled(Heading)`
  @import '../../styles/variables.css';

  @media (--mobile-viewport) {
    padding: 20px 0 10px !important;
  }

  @media (--tablet-viewport) {
    padding: 0 0 20px !important;
  }
`;

const PartnerAvailablesContainer = styled.div`
  @import '../../styles/variables.css';

  display: flex;
  justify-content: space-between;

  @media (--mobile-viewport) {
    display: flex;
    flex-direction: column;
  }
`;

const PartnerAvailablesContent = styled.div`
  @import '../../styles/variables.css';

  @media (--tablet-landscape-viewport) {
    padding-right: 40px;
  }
`;

const PartnerAvailablesImage = styled.img`
  @import '../../styles/variables.css';

  z-index: 10;

  @media (--mobile-viewport) {
    width: 100%;
  }

  @media (--tablet-viewport) {
    width: 310px;
  }

  @media (--tablet-landscape-viewport) {
    width: 360px;
    margin-right: -24px;
  }

  @media (--laptop-viewport) {
    width: 494px;
    margin-right: -140px;
  }

  @media (--desktop-viewport) {
    margin-right: -110px;
  }
`;

const PartnerAvailablesImageWrapper = styled.div`
  @import '../../styles/variables.css';

  display: flex;
  flex-direction: column-reverse;

  &:before {
    content: '';
    position: absolute;
    right: 0px;
    height: 132px;
    z-index: 1;
    background-color: var(--color-secondary);

    height: 80px;
    bottom: 0;
    left: 0px;

    @media (--tablet-viewport) {
      height: 80px;
      bottom: 40px;
      left: calc(100% - 330px);
    }

    @media (--tablet-landscape-viewport) {
      left: calc(100% - 350px);
      height: 110px;
    }

    @media (--laptop-viewport) {
      left: calc(100% - 370px);
      bottom: -10px;
      height: 130px;
    }

    @media (--desktop-viewport) {
      left: calc(50% + 660px - 240px);
    }
  }
`;

export function PartnerAvailables() {
  return (
    <Container fluid style={{ position: 'relative' }}>
      <Container>
        <Section>
          <PartnerAvailablesHeading>
            <FormattedMessage id="partners_available_title" />
          </PartnerAvailablesHeading>
          <PartnerAvailablesContainer>
            <PartnerAvailablesContent>
              <List>
                <ListItem>
                  <FormattedMessage id="partners_available_materials" />
                </ListItem>
                <ListItem>
                  <FormattedMessage id="partners_available_access" />
                </ListItem>
                <ListItem>
                  <FormattedMessage id="partners_available_cross" />
                </ListItem>
                <ListItem>
                  <FormattedMessage id="partners_available_following" />
                </ListItem>
              </List>
            </PartnerAvailablesContent>
            <PartnerAvailablesImageWrapper>
              <PartnerAvailablesImage src="/images/partners/partners_design.png" />
            </PartnerAvailablesImageWrapper>
          </PartnerAvailablesContainer>
        </Section>
      </Container>
    </Container>
  );
}
