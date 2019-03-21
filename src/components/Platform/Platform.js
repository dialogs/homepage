import React, { Children, useState } from 'react';
import classnames from 'classnames';

import { PageHeader } from '../PageHeader/PageHeader';
import { Section } from '../Section/Section';
import { Tabs, Tab } from '../Tabs';
import { PlatformIcon } from './PlatformIcon';
import './Platform.css';

export function Platform({ className }) {
  const [tab, setTab] = useState('messenger');
  const classes = classnames('platform', className);

  return (
    <Section className={classes}>
      <PageHeader className="platform__title">
        dialog — коммуникационная <br />
        платформа для компании
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
          <div className="platform__content">
            <div className="platform__content__title">Мессенджер</div>
            <div className="platform__content__icons">
              <PlatformIcon
                image="/images/home/platform/icon-1-1.svg"
                text="Личные и групповые чаты"
              />
              <PlatformIcon
                image="/images/home/platform/icon-1-2.svg"
                text="Бесплатные аудио/видеозвонки"
              />
              <PlatformIcon
                image="/images/home/platform/icon-1-3.svg"
                text="Обмен файлами без ограничений"
              />
              <PlatformIcon
                image="/images/home/platform/icon-1-4.svg"
                text="Каналы для оповещений"
              />
              <PlatformIcon
                image="/images/home/platform/icon-1-5.svg"
                text="Голосовые сообщения"
              />
              <PlatformIcon
                image="/images/home/platform/icon-1-6.svg"
                text="Эмодзи и стикеры"
              />
              <PlatformIcon
                image="/images/home/platform/icon-1-7.svg"
                text="Демонстрация экрана"
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
              </div>
            </div>
            <img
              className="platform__content__image"
              src="/images/home/platform/platform-messenger-export.png"
              srcSet="/images/home/platform/platform-messenger-export@2x.png 2x"
              alt="Мессенджер"
            />
          </div>
        </div>
      </div>
      <div className="accordion">
        <div className="accordion__button" data-open="false">
          Корпоративные функции
        </div>
        <div className="accordion__content" data-content="functions">
          <div className="platform__item platform--functions">
            <div className="platform__col--noimage">
              <div className="platform__icons">
                <div className="platform__icon">
                  <img
                    className="platform__icon-img"
                    src="/images/home/platform/icon-2-1.svg"
                    alt=""
                  />
                  <div className="platform__icon-text">
                    Интеллектуальные чат-боты
                  </div>
                </div>
                <div className="platform__icon">
                  <img
                    className="platform__icon-img"
                    src="/images/home/platform/icon-2-2.svg"
                    alt=""
                  />
                  <div className="platform__icon-text">
                    Интеграция с Active Directory (AD/LDAP)
                  </div>
                </div>
                <div className="platform__icon">
                  <img
                    className="platform__icon-img"
                    src="/images/home/platform/icon-2-3.svg"
                    alt=""
                  />
                  <div className="platform__icon-text">
                    Панель администратора
                  </div>
                </div>
                <div className="platform__icon">
                  <img
                    className="platform__icon-img"
                    src="/images/home/platform/icon-1-7.svg"
                    alt=""
                  />
                  <div className="platform__icon-text">Демонстрация экрана</div>
                </div>
                <div className="platform__icon">
                  <img
                    className="platform__icon-img"
                    src="/images/home/platform/icon-2-4.svg"
                    alt=""
                  />
                  <div className="platform__icon-text">
                    Комплекс мер безопасности для защищенного общения
                  </div>
                </div>
              </div>
            </div>
            <div className="platform__image">
              <img
                src="/images/home/platform/platform-functions-export.png"
                srcSet="/images/home/platform/platform-functions-export@2x.png 2x"
                alt="Корпоративные функции"
              />
            </div>
          </div>
        </div>

        <div className="accordion__button" data-open="false">
          Интеграции
        </div>
        <div className="accordion__content" data-content="integrations">
          <div className="platform__item platform--integrations">
            <div className="platform__col--noimage">
              <div className="platform__icons">
                <div className="platform__icon">
                  <img
                    className="platform__icon-img"
                    src="/images/home/platform/icon-3-1.svg"
                    alt=""
                  />
                  <div className="platform__icon-text">
                    dialog API для интеграции со сторонними приложениями
                  </div>
                </div>
                <div className="platform__icon">
                  <img
                    className="platform__icon-img"
                    src="/images/home/platform/icon-3-2.svg"
                    alt=""
                  />
                  <div className="platform__icon-text">
                    Bot SDK (Software Development Kit) для создания собственных
                    ботов
                  </div>
                </div>
                <div className="platform__icon">
                  <img
                    className="platform__icon-img"
                    src="/images/home/platform/icon-3-3.svg"
                    alt=""
                  />
                  <div className="platform__icon-text">
                    Возможность изменить фирменный стиль интерфейса dialog в
                    соответствии с гайдлайнами бренда заказчика
                  </div>
                </div>
              </div>
            </div>
            <div className="platform__image">
              <img
                src="/images/home/platform/platform-integrations-export.png"
                srcSet="/images/home/platform/platform-integrations-export@2x.png 2x"
                alt="Корпоративные функции"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
