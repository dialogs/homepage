import React from 'react';
import './Optimize.css';
import { Section } from '../Section/Section';
import { OptimizeCard } from './OptimizeCard';
import { PageHeading } from '../PageHeading/PageHeading';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { graphql, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { ArrowLink } from '../ArrowLink/ArrowLink';

export function Optimize() {
  return (
    <StaticQuery
      query={graphql`
        query {
          optimizeImage: file(
            relativePath: { eq: "images/home/optimize/puzzle-illustration.png" }
          ) {
            childImageSharp {
              fluid(maxWidth: 479) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      `}
      render={({ optimizeImage, language }) => {
        return (
          <Section className="optimize">
            <div className="optimize__wrapper optimize__wrapper--header">
              <div className="optimize__row optimize__row--header">
                <div className="optimize__col optimize__col--text">
                  <PageHeading className="optimize__title optimize__title--main">
                    <FormattedMessage id="optimize_title" />
                  </PageHeading>

                  <h3 className="optimize__text optimize__text--description">
                    <FormattedHTMLMessage id="optimize_text_part_1" />
                    &nbsp;
                    <a
                      className="link--default"
                      href={`/${language}/about`}
                      target="_blank"
                    >
                      Bot SDK
                    </a>
                    &nbsp;
                    <FormattedHTMLMessage id="optimize_text_part_2" />
                  </h3>
                </div>

                <div className="optimize__col--image">
                  <div className="optimize__image">
                    <Image
                      fadeIn={false}
                      fluid={optimizeImage.childImageSharp.fluid}
                      alt="Puzzle Illustration"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="optimize__wrapper optimize__wrapper--cards">
              <h2 className="optimize__title--secondary">
                <FormattedHTMLMessage id="optimize_subtitle" />
              </h2>
              <div className="optimize__row optimize__row--cards">
                <OptimizeCard
                  image="/images/home/optimize/jira.svg"
                  title="optimize_item_title-development"
                  text="optimize_item_text-development"
                  alt="Jira"
                />
                <OptimizeCard
                  image="/images/home/optimize/zendesk.svg"
                  title="optimize_item_title-tech"
                  text="optimize_item_text-tech"
                  alt="Zendesk"
                />
                <OptimizeCard
                  image="/images/home/optimize/symantec.svg"
                  title="optimize_item_title-security"
                  text="optimize_item_text-security"
                  alt="Symantec"
                />
                <OptimizeCard
                  image="/images/home/optimize/amocrm.svg"
                  title="optimize_item_title-sales"
                  text="optimize_item_text-sales"
                  alt="Amocrm"
                />
                <OptimizeCard
                  image="/images/home/optimize/google.svg"
                  title="optimize_item_title-marketing"
                  text="optimize_item_text-marketing"
                  alt="Google"
                />
                <OptimizeCard
                  image="/images/home/optimize/huntflow.svg"
                  title="optimize_item_title-hr"
                  text="optimize_item_text-hr"
                  alt="Huntflow"
                />
              </div>
            </div>
            <ArrowLink
              to={`/${language}/about`}
              underline
              primary-new
              className="optimize__link--arrow"
            >
              <FormattedHTMLMessage id="optimize_link" />
            </ArrowLink>
          </Section>
        );
      }}
    />
  );
}
