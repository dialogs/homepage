import React, { useState } from 'react';
import classNames from 'classnames';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

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
                <img src="/images/home/incompany/icon-marketing.svg" alt="" />
                <img src="/images/home/incompany/icon-arrows.svg" alt="" />
                <img
                  src="/images/home/incompany/logo-dlg.png"
                  alt=""
                  className="dlg"
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
                <img
                  src="/images/home/incompany/logo-jira.svg"
                  alt=""
                  className="jira"
                />
                <img src="/images/home/incompany/icon-arrows.svg" alt="" />
                <img
                  src="/images/home/incompany/logo-dlg.png"
                  alt=""
                  className="dlg"
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
                <img
                  src="/images/home/incompany/icon-hr.svg"
                  alt=""
                  className="hr"
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
                <img
                  src="/images/home/incompany/icon-amocrm.svg"
                  alt=""
                  className="amocrm"
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
                <img
                  src="/images/home/incompany/icon-zendesk.svg"
                  alt=""
                  className="zendesk"
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
                <img
                  src="/images/home/incompany/security.svg"
                  alt=""
                  className="security"
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
