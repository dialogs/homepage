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
        <div className="price__header">
          <PageHeader>
            Стоимость бессрочной лицензии на одного пользователя
          </PageHeader>
          <div className="value">4800 ₽</div>
        </div>
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
              <li>Статусы присутствия</li>
              <li>Голосовые сообщения</li>
              <li>Избранные чаты и контакты</li>
              <li>Адресная книга</li>
              <li>Поиск по сообщения и контактам</li>
              <li>Возможность упоминания пользователя с помощью @</li>
              <li>Просмотр всех загруженных медиа в выбранном чате</li>
              <li>Переотправка и цитирование сообщений</li>
              <li>Отправка местоположения</li>
              <li>Отправка контакта в чате</li>
              <li>Возможность выключить все уведомления в конкретных чатах</li>
            </ul>
          </div>
          <div className="item">
            <Heading level="3" className="item__title">
              Бизнес функции
            </Heading>
            <ul className="list list--secondary">
              <li>Обмен документами любого размера</li>
              <li>Поддержка чат-ботов</li>
              <li>Аудио / Видеоконференции для участников</li>
              <li>
                Отдельная вкладка «Обзор», на которой в административной панели
                можно закрепить необходимые корпоративные каналы или группы
              </li>
              <li>Управление правами в группах и каналах</li>
              <li>Административная панель</li>
              <li>Пользовательские данные в профиле</li>
              <li>Демонстрация экрана</li>
              <li>Кастомизация интерфейса</li>
            </ul>
          </div>
          <div className="item">
            <Heading level="3" className="item__title">
              Интеграции
            </Heading>
            <ul className="list list--secondary">
              <li>
                Интеграции с e-mail, голосовой почтой и системами коммуникации
              </li>
              <li>Интеграции с системами видеоконференцсвязи (в разработке)</li>
              <li>Интеграции с корпоративной АТС</li>
              <li>Открытое API</li>
              <li>Интеграция с каталогами пользователей AD / LDAP</li>
              <li>
                Интеграции с инфраструктурой безопасности (SIEM, DLP, IDM,
                Антивирус)
              </li>
              <li>Bot SDK</li>
            </ul>
          </div>
        </Section>
        <Offer />
      </Container>
    </Page>
  );
};
