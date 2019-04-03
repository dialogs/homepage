import React from 'react';

import { Section } from '../Section/Section';
import { PageHeader } from '../PageHeader/PageHeader';

import './Hero.css';

export function Hero({ openOfferModal }) {
  return (
    <Section className="hero">
      <div className="hero__wrapper">
        <div className="hero__content">
          <PageHeader>
            Достигайте командные цели быстрее и без потери фокуса
          </PageHeader>
          <h4 className="hero__text">
            Простая и эффективная платформа для коммуникаций в компании
          </h4>
          <button
            type="button"
            className="button button--default"
            onClick={openOfferModal}
          >
            Получить предложение
          </button>
        </div>
        <img
          className="hero__image"
          src="/images/home/home-hero.png"
          srcSet="/images/home/home-hero@2x.png 2x"
          alt="Достигайте командные цели быстрее и без потери фокуса"
        />
      </div>
    </Section>
  );
}
