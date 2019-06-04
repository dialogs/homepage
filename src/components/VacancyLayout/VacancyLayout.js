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

export default ({ data, pageContext: { locale, url, slug } }) => {
  console.log('layout', data);
  const job = data.markdownRemark;
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
        <Section className="vacancy_summary">
          <div className="vacancy_summary__wrapper">
            <div className="vacancy_summary__title">
              {job.frontmatter.title}
            </div>
            <div className="vacancy_summary__salary">
              {job.frontmatter.salary}
            </div>
            <div className="vacancy_summary__desc">
              {job.frontmatter.description}
            </div>
            <Button>
              <FormattedMessage id="job_apply_button" />
            </Button>
          </div>
        </Section>

        <Section className="expectations_bonuses">
          <div dangerouslySetInnerHTML={{ __html: job.html }} />
        </Section>
      </Container>
      <ContainerFluid>
        <RecommendEmployee />
      </ContainerFluid>
      <Container />
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
