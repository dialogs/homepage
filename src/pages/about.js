import React from 'react';

import { Container } from '../components/Container/Container';
import { PageHeader } from '../components/PageHeader/PageHeader';

export default () => {
  const officesLinks = {
    moscow:
      'https://www.google.com/maps/place/dialog/@55.7368062,37.5323798,18z/data=!3m1!4b1!4m13!1m7!3m6!1s0x0:0x0!2zNTXCsDQ0JzEyLjUiTiAzN8KwMzInMDAuNyJF!3b1!8m2!3d55.736806!4d37.533528!3m4!1s0x46b54a53aa3b42cd:0x3c26303a75a2c356!8m2!3d55.7368062!4d37.5334741',
    novosibirskNikolaeva:
      'https://www.google.com/maps/place/%D0%A6%D0%B5%D0%BD%D1%82%D1%80+%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D1%85+%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B9/@54.8580416,83.1106614,18z/data=!4m13!1m7!3m6!1s0x42dfc3f43cc9190d:0x3da699e7445b010e!2z0YPQuy4g0J3QuNC60L7Qu9Cw0LXQstCwLCAxMSwg0J3QvtCy0L7RgdC40LHQuNGA0YHQuiwg0J3QvtCy0L7RgdC40LHQuNGA0YHQutCw0Y8g0L7QsdC7LiwgNjMwMDkw!3b1!8m2!3d54.8581713!4d83.1103964!3m4!1s0x0:0x70c9334b88f99469!8m2!3d54.8576537!4d83.1117064',
    novosibirskMost:
      'https://www.google.com/maps/place/%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D1%86%D0%B5%D0%BD%D1%82%D1%80+MOST/@55.023146,82.920614,15z/data=!4m5!3m4!1s0x0:0x6bef1adfc015b0e6!8m2!3d55.023146!4d82.920614',
  };

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
                  <a
                    href={officesLinks.moscow}
                    className="link--default"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                  <a
                    href={officesLinks.novosibirskNikolaeva}
                    className="link--default"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    На карте
                  </a>
                </div>
              </div>
              <div className="about__contacts-office">
                <div className="about__contacts-city">Новосибирск</div>
                <div className="about__contacts-address">
                  630007, ул. Коммунистическая 40
                </div>
                <div className="about__contacts-map-link">
                  <a
                    href={officesLinks.novosibirskMost}
                    className="link--default"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
