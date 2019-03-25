import React from 'react';

import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';

import './SecureCommunication.css';

export function SecureCommunication() {
  return (
    <Section className="secure-communication">
      <div className="block block--header">
        <Heading level="2">Безопасное общение</Heading>
        <div className="item">
          <div className="item__icon">
            <img
              src="/images/home/safety/icon-safety-communication-1.svg"
              alt=""
            />
          </div>
          <div className="item__title">Безопасная архитектура</div>
          <div className="item__content">
            <div className="item__content--text">
              On-premise. В отличие от облачных решений, Reetm не имеет ключей
              для расшифровки вашего общения и доступа к инфраструктуре. Эта
              архитектура предлагает лучшую защиту от любого злоумышленника.
            </div>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="item">
          <div className="item__icon">
            <img
              src="/images/home/safety/icon-safety-communication-2.svg"
              alt=""
            />
          </div>
          <div className="item__title">Высокие стандарты безопасности</div>
          <div className="item__content" />
        </div>
      </div>
    </Section>
  );
}
