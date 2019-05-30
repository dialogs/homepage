import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import FormattedMetaTags from '../FormattedMetaTags';
import FormattedOpenGraph from '../FormattedOpenGraph';

import { Page } from '../Page/Page';
import { Container } from '../Container/Container';
import { PageHeader } from '../PageHeader/PageHeader';
import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';
import { Button } from '../Button/Button';
import { Quote } from '../Quote/Quote';
import { Vacancies } from '../Vacancies/Vacancies';
import { ApplyForJob } from '../ApplyForJob/ApplyForJob';
import { RecommendEmployee } from '../RecommendEmployee/RecommendEmployee';
import ImageFormatted from '../ImageFormatted';
import { ContainerFluid } from '../ContainerFluid/ContainerFluid';
import './VacancyLayout.css';

export default ({ pageContext: { locale, url, originalPath }, data }) => {
  console.log(url);
  const job = data.markdownRemark;
  return (
    <Page>
      <FormattedMetaTags
        titleId="meta_title_jobs"
        descriptionId="meta_description_jobs"
      />
      <FormattedOpenGraph
        idOgTitle="meta_title_jobs"
        url={url}
        path={`/${locale}${originalPath}`}
      />

      <Container>
        <button
          type="button"
          className="link--back"
          onClick={() => {
            if (typeof window !== 'undefined') {
              window.history.back();
            }
          }}
        >
          <img src="/images/svg-icons/arrow-link.svg" alt="" className="" />
          <span>
            <FormattedMessage id="job_back" />
          </span>
        </button>
        <Section className="jobs">
          <div className="jobs__wrapper">
            <div className="jobs__content">
              <PageHeader>{job.frontmatter.title}</PageHeader>
              <Button>
                <FormattedMessage id="job_apply_button" />
              </Button>
            </div>
          </div>
        </Section>

        <Section className="expectation">
          <PageHeader className="expectation__title">
            <FormattedMessage id="job_expectation_header" />
          </PageHeader>

          <div className="expectation_list" />
        </Section>
        <Section className="bonus">
          <PageHeader className="bonus__title">
            <FormattedMessage id="job_bonus_header" />
          </PageHeader>

          <div className="bonus_list" />
        </Section>
      </Container>
      <ContainerFluid>
        <RecommendEmployee />
      </ContainerFluid>
      <Container>
        <ApplyForJob />
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
        expectations
        bonuses
      }
    }
  }
`;
