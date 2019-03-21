import React from 'react';
import { Link } from 'gatsby';

import { Section } from '../Section/Section';

import './Safety.css';

export function Safety() {
  return (
    <Section className="home__section safety">
      <h3 className="safety-title">Безопасность и соответствие требованиям</h3>

      <div className="safety-item safety-communication">
        <div className="safety-item__title">Защищенное общение</div>
        <div className="safety-item__content safety-communication__content">
          <div className="safety-communication__items">
            <div className="safety-communication__item">
              <div className="safety-communication__icon">
                <img
                  src="/images/home/safety/icon-safety-communication-1.svg"
                  alt=""
                />
              </div>
              <div className="safety-communication__text">
                Размещение платформы на сервере компании по модели On-Premise. В
                комплексе со средствами защиты в ПО минимизированы риски утечки
                информации, внешних сбоев и блокировок.
              </div>
            </div>
            <div className="safety-communication__item">
              <div className="safety-communication__icon">
                <img
                  src="/images/home/safety/icon-safety-communication-2.svg"
                  alt=""
                />
              </div>
              <div className="safety-communication__text">
                dialog отвечает высоким стандартам безопасности: предусмотрена
                защита от перехвата данных, утечки конфиденциальной информации и
                распространения вирусов. ПО проходит аудит на предмет
                уязвимостей и ошибок.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="safety-item safety-requirements">
        <div className="safety-item__title">Соответствие требованиям</div>
        <div className="safety-item__content safety-requirements__content">
          <div className="safety-requirements__items">
            <div className="safety-requirements__item">
              Компания-разработчик ООО “Диалог” состоит в реестре
              аккредитованных организаций, осуществляющих деятельность в области
              информационных технологий на территории РФ (№ 436 от 07.09.2016
              г.).
            </div>
            <div className="safety-requirements__item">
              Мессенджер dialog соответствует требованиям Единого реестра
              российских программ для электронных вычислительных машин и баз
              данных, а также состоит в реестре отечественного ПО.
            </div>
            <div className="safety-requirements__item">
              Компания-разработчик ООО "Диалог" лицензирована ФСТЭК России на
              деятельность по технической защите конфиденциальной информации,
              разработку и производство средств защиты конфиденциальной
              информации.
            </div>
            <div className="safety-requirements__item">
              Компания-разработчик ООО "Диалог" имеет лицензию ФСБ России на
              разработку, производство, распространение шифровальных средств,
              информационных систем и телекоммуникационных систем, защищённых с
              помощью шифровальных средств.
            </div>
          </div>
          <div className="safety-requirements__link-box">
            <Link to="/licenses" className="link--arrow">
              <span className="link--arrow__text">Подробнее</span>
              <img
                src="/images/svg-icons/arrow-link.svg"
                alt=""
                className="link--arrow__icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
