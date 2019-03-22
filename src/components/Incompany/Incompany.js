import React, { useState } from 'react';
import { Link } from 'gatsby';

import { Section } from '../Section/Section';
import { PageHeader } from '../PageHeader/PageHeader';
import { Tabs, Tab } from '../Tabs';
import './Incompany.css';

export function Incompany() {
  const [tab, setTab] = useState('marketing');

  function renderCurrentTab() {
    switch (tab) {
      case 'marketing':
        return (
          <div className="incompany__content">
            <div className="incompany__content__title">Маркетинг</div>
            <div className="incompany__content__body">
              <div className="incompany__content__body__title incompany__content-title">
                Пример оптимизации процесса
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
                Будьте в курсе результатов маркетинговых активностей с
                уведомлениями из аналитических систем (например, Google
                Analytics).
              </div>
            </div>
          </div>
        );

      case 'development':
        return (
          <div className="incompany__content">
            <div className="incompany__content__title">Разработка</div>
            <div className="incompany__content__body">
              <div className="incompany__content__body__title incompany__content-title">
                Пример оптимизации процесса
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
                Автоматизируйте процессы — синхронизируйте статусы задач из
                Jira в dialog.
              </div>
            </div>
          </div>
        );

      case 'hr':
        return (
          <div className="incompany__content">
            <div className="incompany__content__title">HR</div>
            <div className="incompany__content__body" />
            <div className="incompany__content__body__title incompany__content-title">
              Пример оптимизации процесса
            </div>
            <div className="incompany__content__body__image incompany__content-images">
              <img
                src="/images/home/incompany/icon-hr.svg"
                alt=""
                className="hr"
              />
            </div>
            <div className="incompany__content__body__text incompany__content-description">
              Сократите время на работу с кандидатами – передайте рутинную
              работу сервису. Программа сама выберет время и назначит
              собеседование.
            </div>
          </div>
        );

      case 'sales':
        return (
          <div className="incompany__content">
            <div className="incompany__content__title">Продажи</div>
            <div className="incompany__content__body">
              <div className="incompany__content__body__title incompany__content-title">
                Пример оптимизации процесса
              </div>
              <div className="incompany__content__body__image incompany__content-images">
                <img
                  src="/images/home/incompany/icon-amocrm.svg"
                  alt=""
                  className="amocrm"
                />
              </div>
              <div className="incompany__content__body__text incompany__content-description">
                Будьте всегда в курсе сделок с автоматическим обновлением
                статусов из CRM.
              </div>
            </div>
          </div>
        );

      case 'support':
        return (
          <div className="incompany__content">
            <div className="incompany__content__title">
              Техническая поддержка
            </div>
            <div className="incompany__content__body">
              <div className="incompany__content__body__title incompany__content-title">
                Пример оптимизации процесса
              </div>
              <div className="incompany__content__body__image incompany__content-images">
                <img
                  src="/images/home/incompany/icon-zendesk.svg"
                  alt=""
                  className="zendesk"
                />
              </div>
              <div className="incompany__content__body__text incompany__content-description">
                Сократите время ответа службы поддержки — соберите все запросы в
                одну систему.
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="incompany__content">
            <div className="incompany__content__title">Служба безопасности</div>
            <div className="incompany__content__body">
              <div className="incompany__content__body__title incompany__content-title">
                Пример оптимизации процесса
              </div>
              <div className="incompany__content__body__image incompany__content-images">
                <img
                  src="/images/home/incompany/security.svg"
                  alt=""
                  className="security"
                />
              </div>
              <div className="incompany__content__body__text incompany__content-description">
                Интеграции с антивирусами, системами контроля утечек данных 
                (DLP). Оповещения о событиях системы безопасности.
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  }

  return (
    <Section className="incompany">
      <PageHeader className="incompany__title">
        Делаем коммуникацию внутри любой компании простой и эффективной
      </PageHeader>
      <div className="incompany__subtitle">
        dialog API позволяет оптимизировать процессы, связав мессенджер и
        сервисы компании. Создавайте ботов самостоятельно с помощью{' '}
        <a
          href="https://dialogs.github.io/bots-docs/"
          className="link--default"
        >
          Bot SDK
        </a>{' '}
        или воспользуйтесь услугами партнёра-интегратора.
      </div>
      <div className="incompany__wrapper">
        <Tabs
          onChange={setTab}
          current={tab}
          vertical
          changeOnHover
          className="incompany__tabs"
        >
          <Tab value="marketing">Маркетинг</Tab>
          <Tab value="development">Разработка</Tab>
          <Tab value="hr">HR</Tab>
          <Tab value="sales">Продажи</Tab>
          <Tab value="support">Техническая поддержка</Tab>
          <Tab value="security">Служба безопасности</Tab>
        </Tabs>

        <div className="incompany__box">{renderCurrentTab()}</div>
      </div>
    </Section>
  );
}
