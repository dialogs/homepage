import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { graphql } from 'gatsby';
import FormattedMetaTags from '../components/FormattedMetaTags';
import FormattedOpenGraph from '../components/FormattedOpenGraph';
import { Page } from '../components/Page/Page';
import { Container } from '../components/Container/Container';
import { PageHeader } from '../components/PageHeader/PageHeader';
import { Section } from '../components/Section/Section';
import { Vacancies } from '../components/Vacancies/Vacancies';
import ApplyForJobForm from '../components/ApplyForJobForm';
import { RecommendEmployee } from '../components/RecommendEmployee/RecommendEmployee';
import ImageFormatted from '../components/ImageFormatted';
import { ContainerFluid } from '../components/ContainerFluid/ContainerFluid';
import { CompanyPictures } from '../components/CompanyPictures/CompanyPictures';
import { LinkButton } from '../components/Button/LinkButton';
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

      <Container>
        <Section className="jobs">
          <div className="jobs__wrapper">
            <div className="jobs__content">
              <PageHeader>
                <FormattedHTMLMessage id="jobs_join_team" />
              </PageHeader>
              <LinkButton href="#apply_for_job_form">
                <FormattedMessage id="jobs_apply_button" />
              </LinkButton>
            </div>
            <img
              className="jobs__image"
              alt=""
              src="/images/jobs/jobs-promo.png"
            />
          </div>
        </Section>
        <Section className="ceo">
          <PageHeader className="ceo__title">
            <FormattedMessage id="jobs_ceo_header" />
          </PageHeader>

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

      <ContainerFluid>
        <RecommendEmployee />
      </ContainerFluid>

      <Container>
        <Vacancies
          vacancies={vacancies}
          locale={language}
          cities={cities}
          categories={categories}
        />
      </Container>
      <ContainerFluid>
        <CompanyPictures />
      </ContainerFluid>
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
      </Container>
      <Container>
        <Section className="apply">
          <div id="apply_for_job_form">
            <PageHeader>
              <FormattedMessage id="job_apply_header" />
            </PageHeader>
            <div className="apply__job_text">
              <FormattedMessage id="job_apply_message" />
            </div>
            <ApplyForJobForm
              className="apply__form"
              cities={cities}
              language={language}
            />
          </div>
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
  }
`;
