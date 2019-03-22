import React from 'react';

import { Container } from '../components/Container/Container';
import { Section } from '../components/Section/Section';
import { Heading } from '../components/Heading/Heading';
import { Hero } from '../components/Hero/Hero';
import { Platform } from '../components/Platform/Platform';
import { Safety } from '../components/Safety/Safety';
import { Incompany } from '../components/Incompany/Incompany';
import { FormOffer } from '../components/FormOffer/FormOffer';

export default () => {
  return (
    <Container>
      <Hero />
      <Platform />
      <Safety />
      <Incompany />

      <div className="home__section easy">
        <div className="easy__cols">
          <div className="easy__col easy__col--left">
            <h3 className="easy-title">dialog — это просто и эффективно</h3>
            <div className="easy-image">
              <img
                className="easy-img"
                src="/images/home/easy/easy-export.png"
                srcSet="/images/home/easy/easy-export@2x.png 2x"
                alt=""
              />
            </div>
          </div>
          <div className="easy__col easy__col--right">
            <div className="easy-info">
              <div className="easy-info-item">
                <div className="easy-info-title">В диалоге – проще</div>
                <div className="easy-info-text">
                  Современный мир перегружен шумом - реклама, новости,
                  отвлекающие уведомления. IT-продукты в погоне за новыми
                  функциями забывают о пользователях. Dialog помогает
                  сфокусироваться на решении задач без сложных интерфейсов и фич
                  - берись и работай, как тебе удобно.
                </div>
              </div>
              <div className="easy-info-item">
                <div className="easy-info-title">В диалоге – эффективнее</div>
                <div className="easy-info-text">
                  Мы против бюрократии, бесполезных встреч и формальных писем с
                  километровыми подписями. Чем эффективнее коммуникация, тем
                  быстрее команда достигает своих целей. Dialog помогает
                  эффективно решать личные и командные задачи без перегруженных
                  процессов.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home__section business">
        <div className="business__cols">
          <div className="business__info">
            <div className="business__info-title">
              dialog — в большом бизнесе
            </div>
            <div className="business__info-subtitle">
              Пример интеграции в банковскую сферу
            </div>
            <div className="business__info-logo">
              <img
                className="business__info-img"
                src="/images/home/business/logo-sberbank-business.svg"
                alt="Сбербанк"
              />
            </div>
            <ul className="business__info-list list list--secondary">
              <li className="business__info-item">
                Платформа для общения сотрудников и корпоративных клиентов
              </li>
              <li className="business__info-item">
                Интеграция банковских сервисов через открытый API
              </li>
              <li className="business__info-item">
                Доступ с любых устройств и из всех подсетей
              </li>
              <li className="business__info-item">
                Обмен конфиденциальной информацией
              </li>
            </ul>
          </div>
          <div className="business__image">
            <img
              className="business__img"
              src="/images/home/business/man2.png"
              srcSet="/images/home/business/man2@2x.png 2x"
              alt=""
            />
          </div>
        </div>
      </div>

      <Section className="offer">
        <Heading>Получить предложение</Heading>
        <div className="offer-description">Пакет от 100 лицензий.</div>
        <FormOffer />
      </Section>
    </Container>
  );
};
