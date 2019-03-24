import React from 'react';

import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';

export function Business() {
  return (
    <Section className="business">
      <div className="business__cols">
        <div className="business__info">
          <Heading className="business__info-title">
            dialog — в большом бизнесе
          </Heading>
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
    </Section>
  );
}
