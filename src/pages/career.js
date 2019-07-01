import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { graphql } from 'gatsby';
import FormattedMetaTags from '../components/FormattedMetaTags';
import FormattedOpenGraph from '../components/FormattedOpenGraph';
import { Page } from '../components/Page/Page';
import { Container } from '../components/Container/Container';
import { PageHeading } from '../components/PageHeading/PageHeading';
import { Heading } from '../components/Heading/Heading';
import { Section } from '../components/Section/Section';
import { Vacancies } from '../components/Vacancies/Vacancies';
import ApplyForJobForm from '../components/ApplyForJobForm';
import { RecommendEmployee } from '../components/RecommendEmployee/RecommendEmployee';
import ImageFormatted from '../components/ImageFormatted';
import { CompanyPictures } from '../components/CompanyPictures/CompanyPictures';
import { LinkButton } from '../components/Button/LinkButton';
import { PageHeader } from '../components/PageHeader/PageHeader';
import '../styles/jobs.css';

function getCitiesAndCategories(vacancies) {
  const cities = ['all'];
  const categories = ['all'];

  for (let vacancy of vacancies) {
    const { city, category } = vacancy.frontmatter;

    if (!cities.includes(city)) {
      cities.push(city);
    }

    if (!categories.includes(category)) {
      categories.push(category);
    }
  }

  return { cities, categories };
}

export default ({
  data: {
    vacancies,
    site: {
      siteMetadata: { siteUrl },
    },
    headerImage,
  },
  pageContext: {
    intl: { language, originalPath },
  },
}) => {
  const { cities, categories } = getCitiesAndCategories(vacancies.nodes);

  return (
    <Page>
      <FormattedMetaTags
        titleId="meta_title_jobs"
        descriptionId="meta_description_jobs"
      />
      <FormattedOpenGraph
        idOgTitle="meta_title_jobs"
        url={siteUrl}
        path={`/${language}${originalPath}`}
      />

      <PageHeader image={headerImage}>
        <PageHeading>
          <FormattedHTMLMessage id="jobs_join_team" />
        </PageHeading>
        <LinkButton href="#apply_for_job_form">
          <FormattedMessage id="jobs_apply_button" />
        </LinkButton>
      </PageHeader>

      <Container>
        <Section className="ceo">
          <PageHeading className="ceo__title">
            <FormattedMessage id="jobs_ceo_header" />
          </PageHeading>

          <div className="ceo__photo_bio">
            <div className="ceo__photo_wrapper">
              <ImageFormatted
                imgClass="ceo__photo"
                src="/images/jobs/jobs-ceo.png"
                altLangId="alt_jobs_ceo"
              />
              <span className="ceo__bio">
                <FormattedHTMLMessage id="jobs_ceo_bio" />
              </span>
            </div>
            <div className="ceo__quote_wrapper">
              <div className="ceo__quote">
                <div className="ceo__quote_mark">&#8221;</div>
                <div className="ceo__quote_text">
                  <FormattedMessage id="jobs_ceo_quote" />
                </div>
                <div className="ceo__quote_mark">&#8220;</div>
              </div>
            </div>
          </div>
          <div className="ceo__about__product">
            <FormattedHTMLMessage id="jobs_ceo_about_product" />
          </div>
        </Section>
      </Container>

      <Container fluid>
        <RecommendEmployee />
      </Container>

      <Container>
        <Vacancies
          vacancies={vacancies}
          locale={language}
          cities={cities}
          categories={categories}
        />
      </Container>
      <Container fluid>
        <CompanyPictures />
      </Container>
      <Container>
        <Section className="icanchoose">
          <a
            href="https://icanchoose.ru/company/dialog/"
            className="about__description about__description-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ImageFormatted
              imgClass="img--icon"
              src="/images/svg/about-promo.svg"
              altLangId="alt_icanchoose_about_dialog"
            />
            <FormattedMessage id="link_icanchoose" />
            <img
              className="img--arrow"
              src="/images/svg-icons/arrow.svg"
              alt=""
            />
          </a>
        </Section>

        <Section className="apply" id="apply_for_job_form">
          <Heading>
            <FormattedMessage id="job_apply_header" />
          </Heading>
          <div className="apply__job_text">
            <FormattedMessage id="job_apply_message" />
          </div>
          <ApplyForJobForm className="apply__form" cities={cities} />
        </Section>
      </Container>
    </Page>
  );
};

export const vacanciesQuery = graphql`
  {
    vacancies: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          title
          date
          city
          category
          salary
          tags
          description
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
    headerImage: file(relativePath: { eq: "images/jobs/jobs-promo.png" }) {
      childImageSharp {
        fluid(maxWidth: 680) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
