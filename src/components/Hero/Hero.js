import React from 'react';

import { Section } from '../Section/Section';
import { PageHeader } from '../PageHeader/PageHeader';

import './Hero.css';

export function Hero({ openOfferModal }) {
  return (
    <Section className="hero home__intro">
      <div className="home__intro-box">
        <div className="home__intro-info">
          <PageHeader>
            Достигайте командные цели быстрее и без потери фокуса
          </PageHeader>
          <h4 className="home__intro-text">
            Простая и эффективная платформа для коммуникаций в компании
          </h4>
          <button
            type="button"
            className="button button--default home__intro-button"
            onClick={openOfferModal}
          >
            Получить предложение
          </button>
        </div>
        <div className="home__intro-image">
          <img
            className="home__intro-img"
            src="/images/home/home-hero.png"
            srcSet="/images/home/home-hero@2x.png 2x"
            alt="Достигайте командные цели быстрее и без потери фокуса"
          />
        </div>
      </div>
    </Section>
  );
}
