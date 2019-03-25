import React from 'react';

import { Container } from '../components/Container/Container';
import { PageHeader } from '../components/PageHeader/PageHeader';

export default () => {
  return (
    <div className="about page">
      <Container>
        <PageHeader>dialog – намного больше, чем просто мессенджер</PageHeader>
      </Container>

      <section className="about__promo">
        <div className="about__video">
          <div className="about__video-wrapper">
            <img
              src="/images/about/team.png"
              srcSet="/images/about/team@2x.png 2x"
              alt=""
            />
          </div>
        </div>
        <Container>
          <a
            href="https://icanchoose.ru/company/dialog/"
            className="about__description about__description-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="img--icon"
              src="/images/svg/about-promo.svg"
              alt=""
            />
            <span>
              Подробнее о жизни в компании вы можете прочитать в специальном
              проекте i can choose
            </span>
            <img
              className="img--arrow"
              src="/images/svg-icons/arrow.svg"
              alt=""
            />
          </a>
        </Container>
      </section>

      <section className="about__features">
        <Container>
          <div className="about__features-list">
            <div className="about__features-item">
              <div className="about__features-icon">
                <img src="/images/svg/about-mission.svg" alt="Миссия" />
              </div>
              <div className="about__features-title">Миссия</div>
              <div className="about__features-description">
                Искоренить бюрократию. Упростить и повысить качество
                коммуникации всего человечества
              </div>
            </div>
            <div className="about__features-item">
              <div className="about__features-icon">
                <img src="/images/svg/about-worth.svg" alt="Ценности" />
              </div>
              <div className="about__features-title">Ценности</div>
              <div className="about__features-description">
                Простота, открытость, гибкость, разумные инновации, возможность
                и эффективность
              </div>
            </div>
            <div className="about__features-item">
              <div className="about__features-icon">
                <img src="/images/svg/about-goal.svg" alt="Цель" />
              </div>
              <div className="about__features-title">Цель</div>
              <div className="about__features-description">
                Создать коммуникационную платформу для формирования экосистемы
                «бизнес-общество-государство»
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="about__licenses">
        <Container>
          <div className="about__licenses-title">Патенты и лицензии</div>
          <div className="about__licenses-text">
            Патенты и лицензии ООО “Диалог” и его продукты соответствуют
            определённым требованиям Федеральных органов власти России.
          </div>
          <div className="about__licenses-link-box">
            <a href="/licenses" className="about__licenses-link link--arrow">
              <span className="link--arrow__text">
                Подробнее о патентах и лицензиях
              </span>
              <img
                src="/images/svg-icons/arrow-link.svg"
                alt=""
                className="link--arrow__icon"
              />
            </a>
          </div>
        </Container>
      </section>

      <section className="about__contacts box--prefooter">
        <Container>
          <div className="about__contacts-block">
            <div className="about__contacts-title">Контакты</div>
            <div className="about__contacts-items">
              <div className="about__contacts-item about__contacts-item--email">
                <a href="/404" className="link--default">
                  info@dlg.im
                </a>
              </div>
              <div className="about__contacts-item about__contacts-item--phone">
                <a href="tel:+78007758202">+7 (800) 775-8202</a>
              </div>
            </div>
            <div className="about__contacts-offices">
              <div className="about__contacts-office">
                <div className="about__contacts-city">Москва</div>
                <div className="about__contacts-address">
                  121170, ул. Поклонная 3к2, 11 этаж
                </div>
                <div className="about__contacts-map-link">
                  <a href="/404" className="link--default">
                    На карте
                  </a>
                </div>
              </div>
              <div className="about__contacts-office">
                <div className="about__contacts-city">Новосибирск</div>
                <div className="about__contacts-address">
                  630090, ул. Николаева 11, оф. 311
                </div>
                <div className="about__contacts-map-link">
                  <a href="/404" className="link--default">
                    На карте
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
