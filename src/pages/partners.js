import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import FormattedMetaTags from '../components/FormattedMetaTags';
import FormattedOpenGraph from '../components/FormattedOpenGraph';
import { Page } from '../components/Page/Page';
import { Container } from '../components/Container/Container';
import { PageHeader } from '../components/PageHeader/PageHeader';
import { Section } from '../components/Section/Section';
import { CooperateWith } from '../components/CooperateWith/CooperateWith';
import ImageFormatted from '../components/ImageFormatted';
import { ContainerFluid } from '../components/ContainerFluid/ContainerFluid';
import { ForPartners } from '../components/ForPartners/ForPartners';
import { Offer } from '../components/Offer/Offer';
import '../styles/partners.css';

export default ({ pageContext: { locale, url, originalPath } }) => {
  console.log('layout', locale);
  console.log('layout', url);
  console.log('layout', originalPath);
  return (
    <Page>
      <FormattedMetaTags
        titleId="meta_title_partners"
        descriptionId="meta_description_partners"
      />
      <FormattedOpenGraph
        idOgTitle="meta_title_partners"
        url={url}
        path={`/${locale}${originalPath}`}
      />

      <Container>
        <Section className="partners">
          <div className="partners__wrapper">
            <div className="partners__content">
              <PageHeader>
                <FormattedMessage id="partners_header_title" />
              </PageHeader>
              <div className="partners__content_text">
                <FormattedMessage id="partners_header_text" />
              </div>
              <img
                className="partners__image"
                src="/images/partners/partners_promo.svg"
              />
            </div>
          </div>
        </Section>

        <Section className="info">
          <PageHeader className="info__title">
            <FormattedMessage id="partners_info_header" />
          </PageHeader>

          <div className="info__partnership">
            <div className="info__box">
              <PageHeader>
                <FormattedMessage id="partners_business_title" />
              </PageHeader>
              <div className="info__box_text">
                <FormattedMessage id="partners_business_info" />
              </div>
              <ul className="info__box_list">
                <li className="info__box_item">
                  <div className="info__box_item_wrapper">
                    <FormattedMessage id="partners_business_info_who" />
                  </div>
                </li>
                <li className="info__box_item">
                  <div className="info__box_item_wrapper">
                    <FormattedMessage id="partners_business_info_target" />
                  </div>
                </li>
              </ul>
            </div>
            <div className="info__box">
              <PageHeader>
                <FormattedMessage id="partners_technology_title" />
              </PageHeader>
              <div className="info__box_text">
                <FormattedMessage id="partners_technology_info" />
              </div>
              <ul className="info__box_list">
                <li className="info__box_item">
                  <div className="info__box_item_wrapper">
                    <FormattedMessage id="partners_technology_info_who" />
                  </div>
                </li>
                <li className="info__box_item">
                  <div className="info__box_item_wrapper">
                    <FormattedMessage id="partners_technology_info_target" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Section>
      </Container>
      <ContainerFluid>
        <CooperateWith />
      </ContainerFluid>
      <Container>
        <Section className="availables">
          <div className="availables__container">
            <div className="availables__container__content">
              <PageHeader>
                <FormattedMessage id="partners_available_title" />
              </PageHeader>
              <ul className="availables__list">
                <li className="availables__list_item">
                  <div className="availables__list_item_wrapper">
                    <FormattedMessage id="partners_available_materials" />
                  </div>
                </li>
                <li className="availables__list_item">
                  <div className="availables__list_item_wrapper">
                    <FormattedMessage id="partners_available_access" />
                  </div>
                </li>
                <li className="availables__list_item">
                  <div className="availables__list_item_wrapper">
                    <FormattedMessage id="partners_available_cross" />
                  </div>
                </li>
                <li className="availables__list_item">
                  <div className="availables__list_item_wrapper">
                    <FormattedMessage id="partners_available_following" />
                  </div>
                </li>
              </ul>
            </div>
            <div className="availables__container__image">
              <img
                className="availables__image"
                src="/images/partners/partners-design.svg"
              />
            </div>
          </div>
        </Section>
      </Container>
      <Container>
        <ForPartners />
      </Container>
      <Container>
        <Offer />
      </Container>
    </Page>
  );
};
