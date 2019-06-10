import React from 'react';
import { FormattedMessage } from 'react-intl';
import FormattedMetaTags from '../FormattedMetaTags';
import FormattedOpenGraph from '../FormattedOpenGraph';

import { Page } from '../Page/Page';
import { Container } from '../Container/Container';
import { PageHeader } from '../PageHeader/PageHeader';
import { Section } from '../Section/Section';
import { Button } from '../Button/Button';
import { ApplyForJobForm } from '../ApplyForJobForm/ApplyForJobForm';
import { RecommendEmployee } from '../RecommendEmployee/RecommendEmployee';
import { ContainerFluid } from '../ContainerFluid/ContainerFluid';
import './VacancyLayout.css';

export default ({
  data: { markdownRemark },
  pageContext: { locale, url, slug },
}) => {
  function handleBackClick() {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  }

  return (
    <Page>
      <FormattedMetaTags
        titleId="meta_title_vacancy"
        descriptionId="meta_description_vacancy"
      />
      <FormattedOpenGraph
        idOgTitle="meta_title_vacancy"
        url={url}
        path={`/${locale}${slug}`}
      />

      <Container>
        <button type="button" className="link--back" onClick={handleBackClick}>
          <img src="/images/svg-icons/arrow-link.svg" alt="" className="" />
          <span>
            <FormattedMessage id="job_back" />
          </span>
        </button>
        <Section className="vacancy_summary">
          <div className="vacancy_summary__wrapper">
            <div className="vacancy_summary__title">
              {markdownRemark.frontmatter.title}
            </div>
            <div className="vacancy_summary__salary">
              {markdownRemark.frontmatter.salary}
            </div>
            <div className="vacancy_summary__desc">
              {markdownRemark.frontmatter.description}
            </div>
            <Button>
              <FormattedMessage id="job_apply_button" />
            </Button>
          </div>
        </Section>
        <Section className="expectations_bonuses">
          <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        </Section>
      </Container>
      <ContainerFluid>
        <RecommendEmployee />
      </ContainerFluid>
      <Container>
        <Section className="apply">
          <div id="form">
            <PageHeader>
              <FormattedMessage id="job_apply_vacancy_header" />
            </PageHeader>
            <div className="vacancy__apply_text">
              <FormattedMessage id="job_apply_vacancy_message" />
            </div>
            <ApplyForJobForm className="apply__form" />
          </div>
        </Section>
      </Container>
    </Page>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        salary
        description
      }
    }
  }
`;
