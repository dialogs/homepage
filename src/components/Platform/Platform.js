import React, { useState } from 'react';
import classNames from 'classnames';

import { PageHeader } from '../PageHeader/PageHeader';
import { Section } from '../Section/Section';
import { Tabs, Tab } from '../Tabs';
import { PlatformIcon } from './PlatformIcon';
import { Collapsible } from '../Collapsible/Collapsible';
import './Platform.css';

export function Platform({ className }) {
  const [tab, setTab] = useState('messenger');
  const classes = classNames('platform', className);

  return (
    <Section className={classes}>
      <PageHeader className="platform__title">
        dialog — коммуникационная <br />
        платформа для компаний
      </PageHeader>
      <div className="platform__wrapper">
        <Tabs
          onChange={setTab}
          current={tab}
          vertical
          changeOnHover
          className="platform__tabs"
        >
          <Tab value="messenger">Мессенджер</Tab>
          <Tab value="features">Корпоративные функции</Tab>
          <Tab value="integrations">Интеграции</Tab>
        </Tabs>

        <div className="platform__box">
          <Collapsible
            className={classNames(
              'platform__box__item',
              tab === 'messenger' ? 'platform__box__item--visible' : null,
            )}
            title="Мессенджер"
          >
            <div className="platform__content__icons">
              <PlatformIcon
                type="messenger"
                image="/images/home/platform/icon-1-1.svg"
                text="Личные и групповые чаты"
              />
              <PlatformIcon
                type="messenger"
                image="/images/home/platform/icon-1-2.svg"
                text="Бесплатные аудио/видеозвонки"
              />
              <PlatformIcon
                type="messenger"
                image="/images/home/platform/icon-1-3.svg"
                text="Обмен файлами без ограничений"
              />
              <PlatformIcon
                type="messenger"
                image="/images/home/platform/icon-1-4.svg"
                text="Каналы для оповещений"
              />
              <PlatformIcon
                type="messenger"
                image="/images/home/platform/icon-1-5.svg"
                text="Голосовые сообщения"
              />
              <PlatformIcon
                type="messenger"
                image="/images/home/platform/icon-1-6.svg"
                text="Эмодзи и стикеры"
              />
            </div>
            <div className="platform__content__links">
              <div className="platform__content__links__title">
                Доступность на популярных платформах
              </div>
              <div className="platform__content__links__list">
                <span>iOS</span>
                <span>Android</span>
                <span>Windows</span>
                <span>macOS</span>
                <span>Linux</span>
                <span>Аврора</span>
              </div>
            </div>
            <img
              className="platform__content__image"
              src="/images/home/platform/platform-messenger-export.png"
              srcSet="/images/home/platform/platform-messenger-export@2x.png 2x"
              alt="Мессенджер"
            />
          </Collapsible>
          <Collapsible
            className={classNames(
              'platform__box__item',
              tab === 'features' ? 'platform__box__item--visible' : null,
            )}
            title="Корпоративные функции"
          >
            <div className="platform__content__icons">
              <PlatformIcon
                type="functions"
                image="/images/home/platform/icon-2-1.svg"
                text="Интеллектуальные чат-боты"
              />
              <PlatformIcon
                type="functions"
                image="/images/home/platform/icon-2-2.svg"
                text="Интеграция с Active Directory (AD/LDAP)"
              />
              <PlatformIcon
                type="functions"
                image="/images/home/platform/icon-2-3.svg"
                text="Панель администратора"
              />
              <PlatformIcon
                type="functions"
                image="/images/home/platform/icon-1-7.svg"
                text="Демонстрация экрана"
              />
              <PlatformIcon
                type="functions"
                image="/images/home/platform/icon-2-3.svg"
                text="Комплекс мер безопасности для защищенного общения"
              />
              <PlatformIcon
                type="functions"
                image="/images/home/platform/icon-3-3.svg"
                text="Возможность изменить фирменный стиль интерфейса dialog в соответствии с гайдлайнами бренда заказчика"
              />
            </div>
            <img
              className="platform__content__image"
              src="/images/home/platform/platform-functions-export.png"
              srcSet="/images/home/platform/platform-functions-export@2x.png 2x"
              alt="Корпоративные функции"
            />
          </Collapsible>
          <Collapsible
            className={classNames(
              'platform__box__item',
              tab === 'integrations' ? 'platform__box__item--visible' : null,
            )}
            title="Интеграции"
          >
            <div className="platform__content__icons">
              <PlatformIcon
                type="integrations"
                image="/images/home/platform/icon-3-1.svg"
                text="dialog API для интеграции со сторонними приложениями"
              />
              <PlatformIcon
                type="integrations"
                image="/images/home/platform/icon-3-2.svg"
                text="Bot SDK (Software Development Kit) для создания собственных ботов"
              />
            </div>
            <img
              className="platform__content__image platform__content__image--integrations"
              src="/images/home/platform/platform-integrations-export.png"
              srcSet="/images/home/platform/platform-integrations-export@2x.png 2x"
              alt="Корпоративные функции"
            />
          </Collapsible>
        </div>
      </div>
    </Section>
  );
}
