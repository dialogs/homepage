import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import FormattedMetaTags from '../components/FormattedMetaTags';
import FormattedOpenGraph from '../components/FormattedOpenGraph';
import { Page } from '../components/Page/Page';
import { Container } from '../components/Container/Container';
import { PageHeader } from '../components/PageHeader/PageHeader';
import { Section } from '../components/Section/Section';
import { Vacancies } from '../components/Vacancies/Vacancies';
import { ApplyForJob } from '../components/ApplyForJob/ApplyForJob';
import { RecommendEmployee } from '../components/RecommendEmployee/RecommendEmployee';
import ImageFormatted from '../components/ImageFormatted';
import { ContainerFluid } from '../components/ContainerFluid/ContainerFluid';
import { CompanyPictures } from '../components/CompanyPictures/CompanyPictures';
import '../styles/jobs.css';

export default ({ pageContext: { locale, url, originalPath } }) => {
  console.log('layout', locale);
  console.log('layout', url);
  console.log('layout', originalPath);
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
        <Section className="jobs">
          <div className="jobs__wrapper">
            <div className="jobs__content">
              <PageHeader>
                <FormattedMessage id="jobs_join_team" />
              </PageHeader>
              <a className="button button--default" href="#form">
                <FormattedMessage id="jobs_apply_button" />
              </a>
            </div>
            <img className="jobs__image" src="/images/jobs/jobs-promo.png" />
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
        <Vacancies lang={locale} />
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
        <ApplyForJob />
      </Container>
    </Page>
  );
};
