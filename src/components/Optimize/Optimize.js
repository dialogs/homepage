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
                    <a
                      className="optimize__link"
                      href={`/${language}/about`}
                      target="_blank"
                    >
                      Bot SDK
                    </a>
                    <br />
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
                  image="/images/home/optimize/google.svg"
                  title="optimize_item_title-1"
                  text="optimize_item_text-1"
                  alt="Google"
                />
                <OptimizeCard
                  image="/images/home/optimize/jira.svg"
                  title="optimize_item_title-2"
                  text="optimize_item_text-2"
                  alt="Jira"
                />
                <OptimizeCard
                  image="/images/home/optimize/amocrm.svg"
                  title="optimize_item_title-3"
                  text="optimize_item_text-3"
                  alt="Amocrm"
                />
                <OptimizeCard
                  image="/images/home/optimize/zendesk.svg"
                  title="optimize_item_title-4"
                  text="optimize_item_text-4"
                  alt="Zendesk"
                />
                <OptimizeCard
                  image="/images/home/optimize/symantec.svg"
                  title="optimize_item_title-5"
                  text="optimize_item_text-5"
                  alt="Symantec"
                />
                <OptimizeCard
                  image="/images/home/optimize/potok.svg"
                  title="optimize_item_title-6"
                  text="optimize_item_text-6"
                  alt="Potok"
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
