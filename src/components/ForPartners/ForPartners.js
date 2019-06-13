import React, { useState } from 'react';
import classNames from 'classnames';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import ImageFormatted from '../ImageFormatted';

// import { Page } from '../Page/Page';
import { Heading } from '../Heading/Heading';
import { Section } from '../Section/Section';
import { PartnerTab } from '../PartnerTab/PartnerTab';
import './ForPartners.css';

export function ForPartners() {
  return (
    <Section className="for-partners">
      <Heading>
        <FormattedMessage id="for_partners_title" />
      </Heading>
      <div className="for-partners__content">
        <div className="for-partners__content__block">
          <ul className="nav__list">
            <li className="nav__list_item">
              <div className="nav__list_item_wrapper">
                <a className="llink" href="#technological">
                  <FormattedMessage id="partners_technological_nav_title" />
                </a>
              </div>
            </li>
            <li className="nav__list_item">
              <div className="nav__list_item_wrapper">
                <a className="llink" href="#business">
                  <FormattedMessage id="partners_business_nav_title" />
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="for-partners__content__tabs">
          <div
            className="for-partners__content__technological__text"
            id="technological"
          >
            <FormattedMessage id="partners_technological_text" />
          </div>
          <div className="for-partners__content__technological">
            <PartnerTab
              title={<FormattedMessage id="myoffice_tab_title" />}
              link="myoffice.ru"
              description={<FormattedMessage id="myoffice_tab_description" />}
              country={<FormattedMessage id="myoffice_tab_country" />}
              category={<FormattedMessage id="myoffice_tab_category" />}
              image="/images/partners/myoffice_icon.svg"
              href="https://myoffice.ru/"
            />
            <PartnerTab
              title={<FormattedMessage id="myoffice_tab_title" />}
              link={<FormattedMessage id="myoffice_tab_link" />}
              description={<FormattedMessage id="myoffice_tab_description" />}
              country={<FormattedMessage id="myoffice_tab_country" />}
              category={<FormattedMessage id="myoffice_tab_category" />}
              image="/images/partners/myoffice_icon.svg"
              href="https://myoffice.ru/"
            />
            <PartnerTab
              title={<FormattedMessage id="myoffice_tab_title" />}
              link={<FormattedMessage id="myoffice_tab_link" />}
              description={<FormattedMessage id="myoffice_tab_description" />}
              country={<FormattedMessage id="myoffice_tab_country" />}
              category={<FormattedMessage id="myoffice_tab_category" />}
              image="/images/partners/myoffice_icon.svg"
              href="https://myoffice.ru/"
            />
            <PartnerTab
              title={<FormattedMessage id="myoffice_tab_title" />}
              link={<FormattedMessage id="myoffice_tab_link" />}
              description={<FormattedMessage id="myoffice_tab_description" />}
              country={<FormattedMessage id="myoffice_tab_country" />}
              category={<FormattedMessage id="myoffice_tab_category" />}
              image="/images/partners/myoffice_icon.svg"
              href="https://myoffice.ru/"
            />
            <PartnerTab
              title={<FormattedMessage id="myoffice_tab_title" />}
              link={<FormattedMessage id="myoffice_tab_link" />}
              description={<FormattedMessage id="myoffice_tab_description" />}
              country={<FormattedMessage id="myoffice_tab_country" />}
              category={<FormattedMessage id="myoffice_tab_category" />}
              image="/images/partners/myoffice_icon.svg"
              href="https://myoffice.ru/"
            />
            <PartnerTab
              title={<FormattedMessage id="myoffice_tab_title" />}
              link={<FormattedMessage id="myoffice_tab_link" />}
              description={<FormattedMessage id="myoffice_tab_description" />}
              country={<FormattedMessage id="myoffice_tab_country" />}
              category={<FormattedMessage id="myoffice_tab_category" />}
              image="/images/partners/myoffice_icon.svg"
              href="https://myoffice.ru/"
            />
          </div>
          <div className="for-partners__content__business__text" id="business">
            <FormattedMessage id="partners_business_text" />
          </div>
          <div className="for-partners__content__business">
            <PartnerTab
              title={<FormattedMessage id="myoffice_tab_title" />}
              link={<FormattedMessage id="myoffice_tab_link" />}
              description={<FormattedMessage id="myoffice_tab_description" />}
              country={<FormattedMessage id="myoffice_tab_country" />}
              category={<FormattedMessage id="myoffice_tab_category" />}
              image="/images/partners/myoffice_icon.svg"
              href="https://myoffice.ru/"
            />
            <PartnerTab
              title={<FormattedMessage id="myoffice_tab_title" />}
              link={<FormattedMessage id="myoffice_tab_link" />}
              description={<FormattedMessage id="myoffice_tab_description" />}
              country={<FormattedMessage id="myoffice_tab_country" />}
              category={<FormattedMessage id="myoffice_tab_category" />}
              image="/images/partners/myoffice_icon.svg"
              href="https://myoffice.ru/"
            />
            <PartnerTab
              title={<FormattedMessage id="myoffice_tab_title" />}
              link={<FormattedMessage id="myoffice_tab_link" />}
              description={<FormattedMessage id="myoffice_tab_description" />}
              country={<FormattedMessage id="myoffice_tab_country" />}
              category={<FormattedMessage id="myoffice_tab_category" />}
              image="/images/partners/myoffice_icon.svg"
              href="https://myoffice.ru/"
            />
            <PartnerTab
              title={<FormattedMessage id="myoffice_tab_title" />}
              link={<FormattedMessage id="myoffice_tab_link" />}
              description={<FormattedMessage id="myoffice_tab_description" />}
              country={<FormattedMessage id="myoffice_tab_country" />}
              category={<FormattedMessage id="myoffice_tab_category" />}
              image="/images/partners/myoffice_icon.svg"
              href="https://myoffice.ru/"
            />
            <PartnerTab
              title={<FormattedMessage id="myoffice_tab_title" />}
              link={<FormattedMessage id="myoffice_tab_link" />}
              description={<FormattedMessage id="myoffice_tab_description" />}
              country={<FormattedMessage id="myoffice_tab_country" />}
              category={<FormattedMessage id="myoffice_tab_category" />}
              image="/images/partners/myoffice_icon.svg"
              href="https://myoffice.ru/"
            />
            <PartnerTab
              title={<FormattedMessage id="myoffice_tab_title" />}
              link={<FormattedMessage id="myoffice_tab_link" />}
              description={<FormattedMessage id="myoffice_tab_description" />}
              country={<FormattedMessage id="myoffice_tab_country" />}
              category={<FormattedMessage id="myoffice_tab_category" />}
              image="/images/partners/myoffice_icon.svg"
              href="https://myoffice.ru/"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
