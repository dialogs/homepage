import React, { useState } from 'react';
import classNames from 'classnames';

// import { Page } from '../Page/Page';
import { Heading } from '../Heading/Heading';
import { Section } from '../Section/Section';
import { Tabs, Tab } from '../Tabs';
import { Collapsible } from '../Collapsible/Collapsible';
import './Features.css';

export function Features() {
  const [tab, setTab] = useState('messenger');
  const [slideTab1, setSlideTab1] = useState('calls');
  const [slideTab2, setSlideTab2] = useState('chatbots');
  const [slideTab3, setSlideTab3] = useState('api');
  const sectionClassName = classNames('features', {
    'features--secondary': tab === 'messenger',
    'features--primary': tab === 'business',
    'features--transparent': tab === 'integrations',
  });

  return (
    <Section className={sectionClassName}>
      <Heading>Что умеет dialog</Heading>
      <Tabs onChange={setTab} current={tab} className="features__tabs">
        <Tab value="messenger">Мессенджер</Tab>
        <Tab value="business">Бизнес функции</Tab>
        <Tab value="integrations">Интеграции</Tab>
      </Tabs>
      <div className="features__content">
        <div
          className={classNames(
            'features__content__block',
            tab === 'messenger' ? 'features__content__block--visible' : null,
          )}
        >
          <div className="feature_block">
            <Tabs
              onChange={setSlideTab1}
              current={slideTab1}
              className="features__tabs"
              vertical
              changeOnHover
            >
              <Tab value="calls">Аудио/Видеовызовы</Tab>
              <Tab value="files">Обмен файлами любого типа</Tab>
              <Tab value="chats">Личные и групповые чаты</Tab>
              <Tab value="audio">Аудио-сообщения</Tab>
              <Tab value="channels">Каналы</Tab>
              <Tab value="sharing">Демонстрация экрана</Tab>
              <Tab value="crossplatform">Работает на любой платформе</Tab>
            </Tabs>
            <div className="feature_block__slides">
              <div className="feature_block__slides__heading">Мессенджер</div>
              <Collapsible
                title="Аудио/Видеовызовы"
                contentClassName={classNames(
                  'feature_block__slide',
                  slideTab1 === 'calls' ? 'feature_block__slide--active' : null,
                )}
              >
                <div className="feature_block__slide__text">
                  <h4>Высокое качество связи</h4>
                  <p>
                    В зависимости от уровня сигнала сотового оператора в месте
                    вашего нахождения, dialog оптимизирует качество связи
                    автоматически. При слабом уровне сигнала dialog снижает
                    количество передаваемого аудио или видеотрафика без разрыва
                    или задержки соединения.
                  </p>
                  <h4>Безопасное общение</h4>
                  <p>
                    Все звонки надежно защищены криптографическими решениями на
                    базе end-to-end и TLS шифрования.
                  </p>
                </div>
                <img
                  src="/images/features/messenger-audio.png"
                  srcSet="/images/features/messenger-audio@2x.png 2x"
                  alt="Аудио/Видеовызовы"
                  className="feature_block__image feature_block__image--mobile"
                />
              </Collapsible>
              <Collapsible
                title="Обмен файлами любого типа"
                contentClassName={classNames(
                  'feature_block__slide',
                  slideTab1 === 'files' ? 'feature_block__slide--active' : null,
                )}
              >
                <div className="feature_block__slide__text">
                  <h4>Передача файлов без ограничений по размеру</h4>
                  <p>
                    Не проходит тяжелая презентация по почте? Забудьте об
                    ограничениях – делитесь информацией любого размера,
                    прикрепляйте заметки к файлам, а удобный поиск по названию
                    файла и имени отправителя поможет быстро найти важные
                    данные.
                  </p>
                </div>
                <img
                  src="/images/features/messenger-sending.png"
                  srcSet="/images/features/messenger-sending@2x.png 2x"
                  alt="Обмен файлами любого типа"
                  className="feature_block__image feature_block__image--mobile"
                />
              </Collapsible>
              <Collapsible
                title="Личные и групповые чаты"
                contentClassName={classNames(
                  'feature_block__slide',
                  slideTab1 === 'chats' ? 'feature_block__slide--active' : null,
                )}
              >
                <div className="feature_block__slide__text">
                  <h4>Все сообщения будут доставлены</h4>
                  <p>
                    Платформа dialog оптимизирована как для работы с GSM сетями
                    предыдущих поколений, так и с сетями нового поколения.
                    Приложение отправит сообщение, когда возможности сети
                    позволят это сделать, а также проконтролирует доставку.
                  </p>
                </div>
                <img
                  src="/images/features/messenger-chats.png"
                  srcSet="/images/features/messenger-chats@2x.png 2x"
                  alt="Личные и групповые чаты"
                  className="feature_block__image feature_block__image--mobile"
                />
              </Collapsible>
              <Collapsible
                title="Аудио-сообщения"
                contentClassName={classNames(
                  'feature_block__slide',
                  slideTab1 === 'audio' ? 'feature_block__slide--active' : null,
                )}
              >
                <div className="feature_block__slide__text">
                  <h4>Не отвлекайтесь от дел</h4>
                  <p>
                    Нет времени печатать сообщение? Воспользуйтесь функцией
                    голосовых сообщений – это гораздо удобнее и быстрее, чем
                    автоответчик или голосовая почта.
                  </p>
                </div>
                <img
                  src="/images/features/messenger-audio-message.png"
                  srcSet="/images/features/messenger-audio-message@2x.png 2x"
                  alt="Аудио-сообщения"
                  className="feature_block__image feature_block__image--mobile"
                />
              </Collapsible>
              <Collapsible
                title="Каналы"
                contentClassName={classNames(
                  'feature_block__slide',
                  slideTab1 === 'channels'
                    ? 'feature_block__slide--active'
                    : null,
                )}
              >
                <div className="feature_block__slide__text">
                  <h4>Работайте над документами совместно</h4>
                  <p>
                    Единовременная рассылка сообщений всем сотрудникам
                    организации – новостные ленты, блоги, оповещения.
                  </p>
                </div>
                <img
                  src="/images/features/messenger-channels.png"
                  srcSet="/images/features/messenger-channels@2x.png 2x"
                  alt="Каналы"
                  className="feature_block__image feature_block__image--mobile"
                />
              </Collapsible>
              <Collapsible
                title="Демонстрация экрана"
                contentClassName={classNames(
                  'feature_block__slide',
                  slideTab1 === 'sharing'
                    ? 'feature_block__slide--active'
                    : null,
                )}
              >
                <div className="feature_block__slide__text">
                  <h4>Работайте над документами совместно</h4>
                  <p>
                    Транслируйте экран коллегам или партнерам, обсуждайте
                    внутренние документы или проведите презентацию в режиме
                    реального времени.
                  </p>
                </div>
                <img
                  src="/images/features/messenger-screen.png"
                  srcSet="/images/features/messenger-screen@2x.png 2x"
                  alt="Демонстрация экрана"
                  className="feature_block__image feature_block__image--laptop"
                />
              </Collapsible>
              <Collapsible
                title="Работает на любой платформе"
                contentClassName={classNames(
                  'feature_block__slide',
                  slideTab1 === 'crossplatform'
                    ? 'feature_block__slide--active'
                    : null,
                )}
              >
                <div className="feature_block__slide__text">
                  <h4>Всегда на связи</h4>
                  <p>
                    dialog доступен на всех ваших устройствах. Поддерживаются
                    операционные системы Android, iOS, macOS, Windows и Linux.
                    Стабильная работа и синхронизация чатов в веб, мобильном и
                    десктопном клиентах.
                  </p>
                </div>
                <img
                  src="/images/features/messenger-platform.png"
                  srcSet="/images/features/messenger-platform@2x.png 2x"
                  alt="Всегда на связи"
                  className="feature_block__image feature_block__image--laptop"
                />
              </Collapsible>
            </div>
          </div>
        </div>
        <div
          className={classNames(
            'features__content__block',
            tab === 'business' ? 'features__content__block--visible' : null,
          )}
        >
          <div className="feature_block">
            <Tabs
              onChange={setSlideTab2}
              current={slideTab2}
              className="features__tabs"
              vertical
              changeOnHover
            >
              <Tab value="chatbots">Чатботы</Tab>
              <Tab value="dashboard">Панель администратора</Tab>
              <Tab value="ad">Active Directory (AD)</Tab>
            </Tabs>
            <div className="feature_block__slides">
              <div className="feature_block__slides__heading">
                Бизнес функции
              </div>
              <Collapsible
                title="Чатботы"
                contentClassName={classNames(
                  'feature_block__slide',
                  slideTab2 === 'chatbots'
                    ? 'feature_block__slide--active'
                    : null,
                )}
              >
                <div className="feature_block__slide__text">
                  <h4>Автоматизируйте процессы</h4>
                  <p>
                    Чатбот похож на виртуального собеседника. Он обрабатывает
                    входящий вопрос и выдает ответ.
                  </p>
                  <p>
                    Пример: оформление документов. Это утомительная и неизбежная
                    часть работы. Но с помощью чатбота её можно сделать проще.
                  </p>
                </div>
                <img
                  src="/images/features/business-chatbots.png"
                  srcSet="/images/features/business-chatbots@2x.png 2x"
                  alt="Автоматизируйте процессы"
                  className="feature_block__image feature_block__image--mobile"
                />
              </Collapsible>
              <Collapsible
                title="Панель администратора"
                contentClassName={classNames(
                  'feature_block__slide',
                  slideTab2 === 'dashboard'
                    ? 'feature_block__slide--active'
                    : null,
                )}
              >
                <div className="feature_block__slide__text">
                  <h4>Управляйте доступами</h4>
                  <p>
                    Со временем сотрудники вашей компании могут приходить и
                    уходить. С Панелью администратора вы можете легко
                    активировать / деактивировать пользователей в вашем рабочем
                    пространстве и управлять доступами.
                  </p>
                </div>
                <img
                  src="/images/features/business-administrator.png"
                  srcSet="/images/features/business-administrator@2x.png 2x"
                  alt="Управляйте доступами"
                  className="feature_block__image feature_block__image--laptop"
                />
              </Collapsible>
              <Collapsible
                title="Active Directory (AD)"
                contentClassName={classNames(
                  'feature_block__slide',
                  slideTab2 === 'ad' ? 'feature_block__slide--active' : null,
                )}
              >
                <div className="feature_block__slide__text">
                  <h4>Единая точка входа для своих работников</h4>
                  <p>
                    dialog отображает информацию о пользователях из AD.
                    Интегрируйте имеющуюся рабочую среду и групповую политику с
                    dialog. Пользователи могут войти в dialog под своими
                    учетными записями.
                  </p>
                </div>
                <img
                  src="/images/features/business-ad.png"
                  srcSet="/images/features/business-ad@2x.png 2x"
                  alt="Active Directory (AD)"
                  className="feature_block__image feature_block__image--laptop feature_block__image--ad"
                />
              </Collapsible>
            </div>
          </div>
        </div>
        <div
          className={classNames(
            'features__content__block',
            tab === 'integrations' ? 'features__content__block--visible' : null,
          )}
        >
          <div className="feature_block">
            <Tabs
              onChange={setSlideTab3}
              current={slideTab3}
              className="features__tabs"
              vertical
              changeOnHover
            >
              <Tab value="api">API dialog</Tab>
              <Tab value="botsdk">Bot SDK</Tab>
              <Tab value="whitelabel">Брендинг компании-заказчика</Tab>
            </Tabs>
            <div className="feature_block__slides">
              <div className="feature_block__slides__heading">Интеграции</div>
              <Collapsible
                title="API dialog"
                contentClassName={classNames(
                  'feature_block__slide',
                  slideTab3 === 'api' ? 'feature_block__slide--active' : null,
                )}
              >
                <div className="feature_block__slide__text">
                  <h4>Совместимость с популярными бизнес-сервисами</h4>
                  <p>
                    АТС, CRM, Таск менеджеры, Аналитические системы - все это, и
                    не только, можно связать с dialog. Интеграции ограничены
                    только фантазией разработчика.
                  </p>
                </div>
                <img
                  src="/images/features/integration-api.png"
                  srcSet="/images/features/integration-api@2x.png 2x"
                  alt="API dialog"
                  className="feature_block__image feature_block__image--printscreen feature_block__image--api"
                />
              </Collapsible>
              <Collapsible
                title="Bot SDK"
                contentClassName={classNames(
                  'feature_block__slide',
                  slideTab3 === 'botsdk'
                    ? 'feature_block__slide--active'
                    : null,
                )}
              >
                <div className="feature_block__slide__text">
                  <h4>Готовые средства разработки ботов для dialog</h4>
                  <p>
                    <a href="/404" className="link--default">
                      BOT SDK
                    </a>{' '}
                    позволяет быстро создавать собственных ботов. В настоящее
                    время SDK доступен для JS, Java и Python.
                  </p>
                  <div className="feature_block__slide__links">
                    <a href="/404" className="link--default">
                      Python
                    </a>
                    <a href="/404" className="link--default">
                      Java
                    </a>
                    <a href="/404" className="link--default">
                      JavaScript
                    </a>
                    <a href="/404" className="link--default">
                      Docs
                    </a>
                  </div>
                </div>
                <img
                  src="/images/features/integration-bot-sdk.png"
                  srcSet="/images/features/integration-bot-sdk@2x.png 2x"
                  alt="Bot SDK"
                  className="feature_block__image feature_block__image--printscreen"
                />
              </Collapsible>
              <Collapsible
                title="Брендинг компании-заказчика"
                contentClassName={classNames(
                  'feature_block__slide',
                  slideTab3 === 'whitelabel'
                    ? 'feature_block__slide--active'
                    : null,
                )}
              >
                <div className="feature_block__slide__text">
                  <h4>Не отходите от фирменного стиля</h4>
                  <p>
                    Используйте гайдлайны брендбука, чтобы приложение
                    соответствовало фирменному стилю вашей компании. В
                    интерфейсе dialog можно изменить логотип, цвета и шрифты.
                  </p>
                </div>
                <img
                  src="/images/features/integration-branding.png"
                  srcSet="/images/features/integration-branding@2x.png 2x"
                  alt="Брендинг компании-заказчика"
                  className="feature_block__image feature_block__image--laptop feature_block__image--whitelabel"
                />
              </Collapsible>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
