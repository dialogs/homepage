import React from 'react';
import { FormattedMessage } from 'react-intl';
import { styled } from 'astroturf';
import { withProps } from 'astroturf/helpers';
import Image from 'gatsby-image';
import { Section } from '../Section/Section';
import { Container } from '../Container/Container';
import { Heading } from '../Heading/Heading';
import { List, ListItem } from '../List/List';

const EffectiveCommunicationSection = styled(Section)`
  @import '../../styles/variables.css';

  padding-top: 30px;
  padding-bottom: 30px;
  position: relative;

  @media (--tablet-viewport) {
    padding-top: 40px;
    padding-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (--laptop-viewport) {
    padding-top: 80px;
    padding-bottom: 60px;
    margin-top: 80px;
    background-color: #fff;
    box-shadow: calc(var(--margin-container-side) / 2) 0 #fff;
  }

  &:before {
    @media (--laptop-viewport) {
      content: '';
      position: absolute;
      height: 330px;
      left: 0;
      top: -80px;
      right: calc(-1 * var(--margin-container-side));
      background-color: var(--color-secondary);
      z-index: -1;
    }
  }
`;

const EffectiveCommunicationHeading = withProps({ level: '1' })(styled(Heading)`
  padding-top: 0 !important;
  margin-bottom: 60px !important;
`);

const EffectiveCommunicationBlockHeading = withProps({ level: '3' })(styled(
  Heading,
)`
  padding-top: 0 !important;
`);

const EffectiveCommunicationColumn = styled.div`
  @import '../../styles/variables.css';

  @media (--tablet-viewport) {
    width: calc(50% - var(--padding-side-columns) / 2);
  }
`;
const EffectiveCommunicationImageColumn = styled(EffectiveCommunicationColumn)`
  @import '../../styles/variables.css';

  @media (--tablet-viewport) {
    display: flex;
    flex-direction: column;
  }
`;

const EffectiveCommunicationColumnItem = styled.div`
  @import '../../styles/variables.css';

  margin-top: 40px;

  @media (--tablet-viewport) {
    &:first-of-type {
      margin-top: 14px;
    }
  }

  @media (--tablet-landscape-viewport) {
    margin-top: 60px;

    &:first-of-type {
      margin-top: 18px;
    }
  }
`;

const EffectiveCommunicationImageWrapper = styled.div`
  @import '../../styles/variables.css';

  position: relative;
  z-index: 1;

  & :global(.image) {
    @media (--tablet-viewport) {
      margin-left: calc(-1 * var(--margin-container-side));
      max-width: 350px;
    }

    @media (--tablet-landscape-viewport) {
      max-width: 470px;
    }

    @media (--laptop-viewport) {
      max-width: 670px;
    }

    @media (--desktop-viewport) {
      margin-left: -140px;
      max-width: 740px;
    }
  }

  &:before {
    content: '';
    position: absolute;
    width: 1000px;
    top: 30%;
    background-color: var(--color-secondary);
    z-index: -1;

    @media (--mobile-viewport) {
      height: 40%;
      right: 0;
    }

    @media (--tablet-viewport) {
      height: 86px;
      right: 80px;
    }

    @media (--tablet-landscape-viewport) {
      height: 132px;
      right: 120px;
    }

    @media (--laptop-viewport) {
      height: 200px;
      right: 200px;
    }

    @media (--desktop-viewport) {
      height: 256px;
      right: 225px;
    }
  }
`;

export function EffectiveCommunication({ image }) {
  return (
    <Container fluid>
      <Container>
        <EffectiveCommunicationSection className="effective-communication">
          <EffectiveCommunicationImageColumn>
            <EffectiveCommunicationHeading>
              <FormattedMessage id="EffectiveCommunication_effective_communications" />
            </EffectiveCommunicationHeading>
            <EffectiveCommunicationImageWrapper>
              <FormattedMessage id="EffectiveCommunication_effective_communications">
                {(alt) => {
                  return (
                    <Image
                      className="image"
                      fadeIn={false}
                      fluid={image.childImageSharp.fluid}
                      alt={alt}
                    />
                  );
                }}
              </FormattedMessage>
            </EffectiveCommunicationImageWrapper>
          </EffectiveCommunicationImageColumn>
          <EffectiveCommunicationColumn>
            <EffectiveCommunicationColumnItem>
              <EffectiveCommunicationBlockHeading>
                <FormattedMessage id="EffectiveCommunication_increased_productivity" />
              </EffectiveCommunicationBlockHeading>
              <List intent="secondary">
                <ListItem>
                  <FormattedMessage id="EffectiveCommunication_increased_speed" />
                </ListItem>
                <ListItem>
                  <FormattedMessage id="EffectiveCommunication_fast" />
                </ListItem>
                <ListItem>
                  <FormattedMessage id="EffectiveCommunication_new" />
                </ListItem>
              </List>
            </EffectiveCommunicationColumnItem>
            <EffectiveCommunicationColumnItem>
              <EffectiveCommunicationBlockHeading>
                <FormattedMessage id="EffectiveCommunication_decreasing" />
              </EffectiveCommunicationBlockHeading>
              <List intent="secondary">
                <ListItem>
                  <FormattedMessage id="EffectiveCommunication_combination" />
                </ListItem>
                <ListItem>
                  <FormattedMessage id="EffectiveCommunication_viop" />
                </ListItem>
                <ListItem>
                  <FormattedMessage id="EffectiveCommunication_teleconference" />
                </ListItem>
                <ListItem>
                  <FormattedMessage id="EffectiveCommunication_calls_inside" />
                </ListItem>
              </List>
            </EffectiveCommunicationColumnItem>
          </EffectiveCommunicationColumn>
        </EffectiveCommunicationSection>
      </Container>
    </Container>
  );
}
