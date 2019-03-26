import React from 'react';

import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';

import './Partnership.css';

export function Partnership() {
  return (
    <Section className="partnership">
      <Heading level="2">Технологическое партнерство с российским ПО</Heading>

      <div className="column column--info">
        <div className="subtitle">
          dialog сотрудничает с вендорами для обеспечения инфраструктуры
          требованиям российского законодательства
        </div>
        <div className="link-box">
          <a className="link--arrow" href="/licenses">
            <span className="link--arrow__text">Подробнее о партнерах</span>
            <img
              src="/images/svg-icons/arrow-link.svg"
              alt=""
              className="link--arrow__icon"
            />
          </a>
        </div>
      </div>
      <div className="column column--partners">
        <div className="partners">
          <div className="partner">
            <img
              className="partner__icon"
              src="/images/partner-basealt.png"
              alt="Базальт"
            />
            <div className="partner__name">Базальт</div>
          </div>
          <div className="partner">
            <img
              className="partner__icon"
              src="/images/partner-moiofis.png"
              alt="МойОфис"
            />
            <div className="partner__name">МойОфис</div>
          </div>
          <div className="partner">
            <img
              className="partner__icon"
              src="/images/partner-avrora.png"
              alt="Аврора"
            />
            <div className="partner__name">Аврора</div>
          </div>
        </div>
      </div>
    </Section>
  );
}
