import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { useStaticQuery, graphql } from 'gatsby';
import FormattedMetaTags from '../FormattedMetaTags';
import FormattedOpenGraph from '../FormattedOpenGraph';
import { Page } from '../Page/Page';
import { Container } from '../Container/Container';
import { PageHeading } from '../PageHeading/PageHeading';
import { Heading } from '../Heading/Heading';
import { Section } from '../Section/Section';
import { Vacancies } from '../Vacancies/Vacancies';
import ApplyForJobForm from '../ApplyForJobForm';
import { RecommendEmployee } from '../RecommendEmployee/RecommendEmployee';
import ImageFormatted from '../ImageFormatted';
import { CompanyPictures } from '../CompanyPictures/CompanyPictures';
import { LinkButton } from '../Button/LinkButton';
import { PageHeader } from '../PageHeader/PageHeader';
import '../../styles/jobs.css';

function getCitiesAndCategories(vacancies) {
  const cities = ['all'];
  const categories = ['all'];

  vacancies.forEach(({ location, specialization }) => {
    if (!cities.includes(location)) {
      cities.push(location);
    }

    if (!categories.includes(specialization)) {
      categories.push(specialization);
    }
  });

  return { cities, categories };
}

export default ({
  pageContext: {
    siteUrl,
    intl: { language, originalPath },
    vacancies,
  },
}) => {
  const { headerImage } = useStaticQuery(graphql`
    {
      headerImage: file(relativePath: { eq: "images/jobs/jobs-promo.png" }) {
        childImageSharp {
          fluid(maxWidth: 680) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);
  const { cities, categories } = getCitiesAndCategories(vacancies);

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
        <Vacancies
          vacancies={vacancies}
          locale={language}
          cities={cities}
          categories={categories}
        />
      </Container>
      <Container fluid>
        <RecommendEmployee />
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
          <Heading level="1">
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
