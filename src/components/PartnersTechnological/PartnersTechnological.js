import React from 'react';

import './PartnersTechnological.css';

export function PartnersTechnological() {
  return (
    <section className="section  license__partners">
      <div className="license__partners-title">
        Компания имеет технологичных партнеров
      </div>
      <div className="license__partners-list">
        <div className="license__partners-item">
          <a href="/404" className="license__partners-item-link">
            <img
              className="license__partners-image"
              src="/images/partner-infotecs.svg"
              alt="infotecs"
            />
          </a>
        </div>
        <div className="license__partners-item">
          <a href="/404" className="license__partners-item-link">
            <img
              className="license__partners-image"
              src="/images/partner-rostelecom.svg"
              alt="rostelecom"
            />
          </a>
        </div>
        <div className="license__partners-item">
          <a href="/404" className="license__partners-item-link">
            <img
              className="license__partners-image"
              src="/images/partner-norbit.svg"
              alt="norbit"
            />
          </a>
        </div>
        <div className="license__partners-item">
          <a href="/404" className="license__partners-item-link">
            <img
              className="license__partners-image"
              src="/images/partner-jet.svg"
              alt="jet"
            />
          </a>
        </div>
        <div className="license__partners-item">
          <a href="/404" className="license__partners-item-link">
            <img
              className="license__partners-image"
              src="/images/partner-redsoft.svg"
              alt="redsoft"
            />
          </a>
        </div>
        <div className="license__partners-item">
          <a href="/404" className="license__partners-item-link">
            <img
              className="license__partners-image"
              src="/images/partner-omp.svg"
              alt="open mobile platform"
            />
          </a>
        </div>
        <div className="license__partners-item">
          <a href="/404" className="license__partners-item-link">
            <img
              className="license__partners-image"
              src="/images/partner-infowatch.svg"
              alt="infowatch"
            />
          </a>
        </div>
      </div>
      <div className="license__partners-link-box">
        <a href="/404" className="license__partners-link link--arrow">
          <span className="link--arrow__text">Партнерская программа</span>
          <img
            src="/images/svg-icons/arrow-link.svg"
            alt=""
            className="link--arrow__icon"
          />
        </a>
      </div>
    </section>
  );
}
