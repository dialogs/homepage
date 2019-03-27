import React from 'react';

import { Page } from '../components/Page/Page';
import { Container } from '../components/Container/Container';
import { PageHeader } from '../components/PageHeader/PageHeader';
import { Section } from '../components/Section/Section';
import { Heading } from '../components/Heading/Heading';
import { Offer } from '../components/Offer/Offer';

import '../styles/prices.css';

export default () => {
  return (
    <Page>
      <Container>
        <PageHeader className="price__title">
          Стоимость бессрочной лицензии на одного пользователя 4800p
        </PageHeader>
        <div className="price__subtitle">
          Цена на платформу может отличаться в зависимости от количества
          пользователей
        </div>
        <Section className="prices">
          <div className="prices__description">
            Базовая версия продукта содержит привычные функции мессенджера
          </div>
          <div className="item">
            <Heading level="3" className="item__title">
              Мессенджер
            </Heading>
            <ul className="list list--secondary">
              <li>Личные чаты</li>
              <li>Групповые открытые / закрытые чаты</li>
              <li>Открытые / закрытые каналы</li>
              <li>Стикеры, смайлики, реакции на сообщения</li>
              <li>Личные</li>
              <li>Личные</li>
              <li>Личные</li>
              <li>Личные</li>
              <li>Личные</li>
              <li>Личные</li>
              <li>Личные</li>
              <li>Личные</li>
              <li>Личные</li>
              <li>Личные</li>
              <li>Личные</li>
            </ul>
          </div>
          <div className="item">
            <Heading level="3" className="item__title">
              Бизнес функции
            </Heading>
            <ul className="list list--secondary">
              <li>Личные</li>
              <li>Личные</li>
              <li>Личные</li>
              <li>Личные</li>
              <li>Личные</li>
              <li>Личные</li>
              <li>Личные</li>
              <li>Личные</li>
              <li>Личные</li>
            </ul>
          </div>
          <div className="item">
            <Heading level="3" className="item__title">
              Интеграции
            </Heading>
            <ul className="list list--secondary">
              <li>Личные</li>
              <li>Личные</li>
              <li>Личные</li>
              <li>Личные</li>
              <li>Личные</li>
              <li>Личные</li>
              <li>Личные</li>
              <li>Личные</li>
              <li>Личные</li>
            </ul>
          </div>
        </Section>
        <Offer />
      </Container>
    </Page>
  );
};
