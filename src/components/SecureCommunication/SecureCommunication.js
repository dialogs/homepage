import React from 'react';

import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';

import './SecureCommunication.css';

export function SecureCommunication() {
  return (
    <Section className="secure-communication">
      <Heading level="2">Безопасное общение</Heading>

      <div className="box box--architecture">
        <div className="col information">
          <div className="box__icon">
            <img
              src="/images/home/safety/icon-safety-communication-1.svg"
              alt=""
            />
          </div>
          <div className="box__title">Безопасная архитектура</div>
          <div className="box__content">
            <div className="box__text">
              On-premise. В отличие от облачных решений, dialog не имеет ключей
              для расшифровки вашего общения и доступа к инфраструктуре. Эта
              архитектура предлагает лучшую защиту от любого злоумышленника.
            </div>
          </div>
        </div>
        <div className="col box--architecture__image">
          <img
            src="/images/solution/secure-communication.png"
            alt="Безопасная архитектура"
          />
        </div>
      </div>

      <div className="box box--standarts">
        <div className="box__icon">
          <img
            src="/images/home/safety/icon-safety-communication-2.svg"
            alt=""
          />
        </div>
        <div className="box__title">Высокие стандарты безопасности</div>
        <div className="box__content">
          <div className="items">
            <div className="item">
              <div className="box__subtitle">Шифрование данных</div>
              <div className="box__text">
                Для защищенного соединения dialog использует шифрование
                «клиент-сервер» по протоколам TLS и DTLS
              </div>
            </div>
            <div className="item">
              <div className="box__subtitle">Аудит безопасности</div>
              <div className="box__text">
                dialog сотрудничает с ведущими экспертами по безопасности для
                проведения регулярных аудитов своих продуктов.
              </div>
            </div>
            <div className="item">
              <div className="box__subtitle">Интеграция с антивирусным ПО</div>
              <div className="box__text">
                dialog поддерживает интеграции с антивирусами по протоколу ICAP.
                Мессенджер блокирует вредоносные файлы при отправке.
              </div>
            </div>
            <div className="item">
              <div className="box__subtitle">SIEM</div>
              <div className="box__text">
                Технология SIEM обеспечивает анализ в реальном времени dialog
                дает возможность оперативного реагирования на события
                безопасности и позволяет реагировать на них до наступления
                ущерба.
              </div>
            </div>
            <div className="item">
              <div className="box__subtitle">Интеграция с DLP</div>
              <div className="box__text">
                dialog интегрируется с системами предотвращения утечки данных по
                протоколу ICAP блокирующий отправку сообщений и вложений
                содержащих конфиденциальную информацию. Минимизирован риск
                умышленной или случайной утечки конфиденциальной информации.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="box box--compliance">
        <div className="box__icon">
          <img src="/images/solution/icon-solution-3.svg" alt="" />
        </div>
        <div className="box__title">Соответствие требованиям</div>
        <div className="box__content">
          <ul className="list list--secondary">
            <li>
              Компания-разработчик Диалог состоит в реестре аккредитованных
              организаций, осуществляющих деятельность в области информационных
              технологий на территории РФ (№ 436 от 07.09.2016).
            </li>
            <li>
              Мессенджер dialog соответствует требованиям Единого реестра
              российских программ для электронных вычислительных машин и баз
              данных, состоит в реестре отечественного ПО.
            </li>
            <li>
              Лицензии ФСТЭК России на деятельность по технической защите
              конфиденциальной информации (ТЗКИ), а также на деятельность по
              разработке и производству средств защиты конфиденциальной
              информации (СКЗИ).
            </li>
          </ul>
        </div>
        <div className="link-box">
          <a className="link--arrow" href="/licenses">
            <span className="link--arrow__text">Подробнее о лицензиях</span>
            <img
              src="/images/svg-icons/arrow-link.svg"
              alt=""
              className="link--arrow__icon"
            />
          </a>
        </div>
      </div>
    </Section>
  );
}
