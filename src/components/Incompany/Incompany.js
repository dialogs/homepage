import React, { useState } from 'react';
import classNames from 'classnames';

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

        <div className="incompany__box">
          <Collapsible
            className={classNames(
              'incompany__content',
              tab === 'marketing' ? 'incompany__content--visible' : null,
            )}
            title="Маркетинг"
          >
            <div className="incompany__content__body">
              <div className="incompany__content__body__title">
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
          </Collapsible>
          <Collapsible
            className={classNames(
              'incompany__content',
              tab === 'development' ? 'incompany__content--visible' : null,
            )}
            title="Разработка"
          >
            <div className="incompany__content__body">
              <div className="incompany__content__body__title">
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
          </Collapsible>
          <Collapsible
            className={classNames(
              'incompany__content',
              tab === 'hr' ? 'incompany__content--visible' : null,
            )}
            title="HR"
          >
            {' '}
            <div className="incompany__content__body">
              <div className="incompany__content__body__title">
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
          </Collapsible>
          <Collapsible
            className={classNames(
              'incompany__content',
              tab === 'sales' ? 'incompany__content--visible' : null,
            )}
            title="Продажи"
          >
            <div className="incompany__content__body">
              <div className="incompany__content__body__title">
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
          </Collapsible>
          <Collapsible
            className={classNames(
              'incompany__content',
              tab === 'support' ? 'incompany__content--visible' : null,
            )}
            title="Техническая поддержка"
          >
            {' '}
            <div className="incompany__content__body">
              <div className="incompany__content__body__title">
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
          </Collapsible>
          <Collapsible
            className={classNames(
              'incompany__content',
              tab === 'security' ? 'incompany__content--visible' : null,
            )}
            title="Служба безопасности"
          >
            <div className="incompany__content__body">
              <div className="incompany__content__body__title">
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
          </Collapsible>
        </div>
      </div>
    </Section>
  );
}
