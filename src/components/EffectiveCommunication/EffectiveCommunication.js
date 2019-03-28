import React from 'react';

import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';

import './EffectiveCommunication.css';

export function EffectiveCommunication() {
  return (
    <Section className="effective-communication">
      <div className="column column--image">
        <Heading level="2">Эффективные коммуникации</Heading>
        <div className="image">
          <img
            src="/images/solution/effective-communication.png"
            alt="Эффективные коммуникации"
          />
        </div>
      </div>
      <div className="column">
        <div className="item">
          <div className="item__title">
            Повышение продуктивности сотрудников за счет:
          </div>
          <ul className="list list--secondary">
            <li>
              Повышения скорости коммуникации в рабочих группах за счет
              мгновенного обмена сообщениями.
            </li>
            <li>
              Быстрого принятия оперативных решений в рабочих чатах и каналах.
            </li>
            <li>
              Новых возможностей для совместной работы с функциями мессенджера.
            </li>
          </ul>
        </div>
        <div className="item">
          <div className="item__title">
            Сокращение затрат на средства коммуникации от 10% до 30% за счет:
          </div>
          <ul className="list list--secondary">
            <li>Совмещения разрозненных инструментов в одной платформе.</li>
            <li>Интеграции VoIP и мобильной телефонии.</li>
            <li>Телеконференций.</li>
            <li>
              Экономии при звонках внутри организации, роуминге, звонках на
              внешние телефоны.
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
