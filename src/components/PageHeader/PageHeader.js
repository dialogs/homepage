import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { styled } from 'astroturf';
import { Section } from '../Section/Section';
import { Container } from '../Container/Container';

const PageHeaderContainer = styled(Container)`
  @import '../../styles/variables.css';

  @media (--tablet-landscape-viewport) {
    margin: 0 var(--margin-container-side);
  }
`;

const PageHeaderSection = styled(Section)`
  @import '../../styles/variables.css';

  padding: 0;
  margin: 0;
  width: 100%;

  @media (--tablet-landscape-viewport) {
    margin: 0 auto;
    padding: 30px var(--margin-container-side) 72px;
  }

  @media (--desktop-viewport) {
    padding: 30px 0 80px;
    width: 1320px;
  }
`;

const PageHeaderWrapper = styled.div`
  @import '../../styles/variables.css';

  display: flex;
  align-items: center;
  position: relative;

  @media (--mobile-viewport) {
    flex-flow: column;
    align-items: normal;
  }

  @media (--tablet-viewport) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const PageHeaderContent = styled.div`
  @import '../../styles/variables.css';

  width: 100%;
  padding: 0 var(--margin-container-side);

  @media (--tablet-landscape-viewport) {
    padding: 0 0 20px;
    width: 50%;
  }

  @media (--laptop-viewport) {
    width: 46%;
  }

  @media (--desktop-viewport) {
    width: 40%;
  }
`;

const PageHeaderImageWrapper = styled.div`
  @import '../../styles/variables.css';

  flex: 0 0 auto;
  line-height: 0;
  position: relative;

  @media (--tablet-viewport) {
    width: 100%;
  }

  @media (--tablet-landscape-viewport) {
    width: auto;
    margin-right: calc(-1 * var(--margin-container-side));
  }

  @media (--desktop-viewport) {
    margin-right: -140px;
  }

  &:before {
    content: '';
    position: absolute;
    z-index: -2;
    display: none;
    background-color: var(--color-primary);
  }

  &:after {
    content: '';
    position: absolute;
    display: none;
    z-index: -1;
    background-color: var(--color-secondary);
  }

  @media (--tablet-landscape-viewport) {
    &:before {
      display: block;
      left: -42px;
      top: 32px;
      width: 150px;
      height: 150px;
    }

    &:after {
      display: block;
      left: -82px;
      top: 120px;
      right: 72px;
      bottom: -42px;
    }
  }

  @media (--laptop-viewport) {
    &:before {
      left: -50px;
      top: 42px;
    }

    &:after {
      left: -100px;
      top: 140px;
      right: 60px;
      bottom: -50px;
    }
  }

  @media (--desktop-viewport) {
    &:after {
      left: -120px;
      top: 150px;
      right: 64px;
      bottom: -50px;
    }
  }
`;

const PageHeaderImage = styled.div`
  @import '../../styles/variables.css';

  @media (--mobile-viewport) {
    display: block;
    width: 100%;
    object-fit: cover;
  }

  @media (--tablet-viewport) {
    display: block;
    width: 100%;
  }

  @media (--tablet-landscape-viewport) {
    width: 390px;
  }

  @media (--laptop-viewport) {
    width: 620px;
  }

  @media (--desktop-viewport) {
    width: 680px;
  }
`;

export function PageHeader({ children, image }) {
  return (
    <PageHeaderContainer fluid style={{ position: 'relative' }}>
      <PageHeaderSection>
        <PageHeaderWrapper>
          <PageHeaderContent>{children}</PageHeaderContent>
          <PageHeaderImageWrapper>
            <PageHeaderImage>
              <Image
                src={image}
                fadeIn={false}
                fluid={image.childImageSharp.fluid}
              />
            </PageHeaderImage>
          </PageHeaderImageWrapper>
        </PageHeaderWrapper>
      </PageHeaderSection>
    </PageHeaderContainer>
  );
}
