import React, { useState } from 'react';
import classNames from 'classnames';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import ImageFormatted from '../ImageFormatted';

import { Section } from '../Section/Section';
import { PageHeader } from '../PageHeader/PageHeader';
import { Tabs, Tab } from '../Tabs';
import { Collapsible } from '../Collapsible/Collapsible';
import './Incompany.css';

export function Incompany() {
  const [tab, setTab] = useState('marketing');

  return (
    <Section className="incompany">
      <PageHeader className="incompany__title">
        <FormattedMessage id="incompany_header" />
      </PageHeader>
      <div className="incompany__subtitle">
        <FormattedHTMLMessage id="incompany_subtitle" />
      </div>
      <div className="incompany__wrapper">
        <Tabs
          onChange={setTab}
          current={tab}
          vertical
          changeOnHover
          withSquares
          className="incompany__tabs"
        >
          <Tab value="marketing">
            <FormattedMessage id="marketing" />
          </Tab>
          <Tab value="development">
            <FormattedMessage id="development" />
          </Tab>
          <Tab value="hr">
            <FormattedMessage id="hr" />
          </Tab>
          <Tab value="sales">
            <FormattedMessage id="sales" />
          </Tab>
          <Tab value="support">
            <FormattedMessage id="technical_support" />
          </Tab>
          <Tab value="security">
            <FormattedMessage id="security_service" />
          </Tab>
        </Tabs>

        <div className="incompany__box">
          <Collapsible
            className={classNames(
              'incompany__content',
              tab === 'marketing' ? 'incompany__content--visible' : null,
            )}
            title={<FormattedMessage id="marketing" />}
          >
            <div className="incompany__content__body">
              <div className="incompany__content__body__title">
                <FormattedMessage id="optimization_cases" />
              </div>
              <div className="incompany__content__body__image incompany__content-images">
                <ImageFormatted
                  src="/images/home/incompany/icon-marketing.svg"
                  altLangId="alt_ga"
                />
                <img src="/images/home/incompany/icon-arrows.svg" alt="" />
                <ImageFormatted
                  imgClass="dlg"
                  src="/images/dialog-logo.svg"
                  altLangId="alt_dialog"
                />
              </div>
              <div className="incompany__content__body__text incompany__content-description">
                <FormattedMessage id="case_marketing" />
              </div>
            </div>
          </Collapsible>
          <Collapsible
            className={classNames(
              'incompany__content',
              tab === 'development' ? 'incompany__content--visible' : null,
            )}
            title={<FormattedMessage id="development" />}
          >
            <div className="incompany__content__body">
              <div className="incompany__content__body__title">
                <FormattedMessage id="optimization_cases" />
              </div>
              <div className="incompany__content__body__image incompany__content-images">
                <ImageFormatted
                  imgClass="jira"
                  src="/images/home/incompany/logo-jira.svg"
                  altLangId="alt_jira"
                />
                <img src="/images/home/incompany/icon-arrows.svg" alt="" />
                <ImageFormatted
                  imgClass="dlg"
                  src="/images/dialog-logo.svg"
                  altLangId="alt_dialog"
                />
              </div>
              <div className="incompany__content__body__text incompany__content-description">
                <FormattedMessage id="case_development" />
              </div>
            </div>
          </Collapsible>
          <Collapsible
            className={classNames(
              'incompany__content',
              tab === 'hr' ? 'incompany__content--visible' : null,
            )}
            title={<FormattedMessage id="hr" />}
          >
            <div className="incompany__content__body">
              <div className="incompany__content__body__title">
                <FormattedMessage id="optimization_cases" />
              </div>
              <div className="incompany__content__body__image incompany__content-images">
                <ImageFormatted
                  imgClass="hr"
                  src="/images/home/incompany/icon-hr.svg"
                  altLangId="alt_hr"
                />
              </div>
              <div className="incompany__content__body__text incompany__content-description">
                <FormattedMessage id="case_hr" />
              </div>
            </div>
          </Collapsible>
          <Collapsible
            className={classNames(
              'incompany__content',
              tab === 'sales' ? 'incompany__content--visible' : null,
            )}
            title={<FormattedMessage id="sales" />}
          >
            <div className="incompany__content__body">
              <div className="incompany__content__body__title">
                <FormattedMessage id="optimization_cases" />
              </div>
              <div className="incompany__content__body__image incompany__content-images">
                <ImageFormatted
                  imgClass="amocrm"
                  src="/images/home/incompany/icon-amocrm.svg"
                  altLangId="alt_amo_crm"
                />
              </div>
              <div className="incompany__content__body__text incompany__content-description">
                <FormattedMessage id="case_sales" />
              </div>
            </div>
          </Collapsible>
          <Collapsible
            className={classNames(
              'incompany__content',
              tab === 'support' ? 'incompany__content--visible' : null,
            )}
            title={<FormattedMessage id="technical_support" />}
          >
            {' '}
            <div className="incompany__content__body">
              <div className="incompany__content__body__title">
                <FormattedMessage id="optimization_cases" />
              </div>
              <div className="incompany__content__body__image incompany__content-images">
                <ImageFormatted
                  imgClass="zendesk"
                  src="/images/home/incompany/icon-zendesk.svg"
                  altLangId="alt_zendesk"
                />
              </div>
              <div className="incompany__content__body__text incompany__content-description">
                <FormattedMessage id="case_technical_support" />
              </div>
            </div>
          </Collapsible>
          <Collapsible
            className={classNames(
              'incompany__content',
              tab === 'security' ? 'incompany__content--visible' : null,
            )}
            title={<FormattedMessage id="security_service" />}
          >
            <div className="incompany__content__body">
              <div className="incompany__content__body__title">
                <FormattedMessage id="optimization_cases" />
              </div>
              <div className="incompany__content__body__image incompany__content-images">
                <ImageFormatted
                  imgClass="security"
                  src="/images/home/incompany/security.svg"
                  altLangId="alt_security_service"
                />
              </div>
              <div className="incompany__content__body__text incompany__content-description">
                <FormattedMessage id="case_security_service" />
              </div>
            </div>
          </Collapsible>
        </div>
      </div>
    </Section>
  );
}
