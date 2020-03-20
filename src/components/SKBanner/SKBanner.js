import React from 'react';

export function SKBanner({ className, locale }) {
  return (
    <div className={className}>
      <a href="https://sk.ru" target="_blank">
        <img
          src={
            locale === 'ru'
              ? '/images/sk_participant_ru.svg'
              : '/images/sk_participant_en.svg'
          }
          alt="Skolkovo"
        />
      </a>
    </div>
  );
}
