import React, { useState } from 'react';

import { PageHeader } from '../components/PageHeader/PageHeader';
import { Tabs, Tab } from '../components/Tabs';

export default () => {
  const [tab, setTab] = useState('messenger');

  return (
    <div className="container">
      <section className="page features">
        <PageHeader>Что умеет Reetm</PageHeader>
        <Tabs onChange={setTab} current={tab}>
          <Tab value="messenger">Мессенджер</Tab>
          <Tab value="business">Бизнес функции</Tab>
          <Tab value="integrations">Интеграции</Tab>
        </Tabs>
        <div>
          <div className="features__content">
            <div data-tab="messenger" className="features__content__block">
              <div className="feature_block">
                <div className="feature_block__links">
                  <a
                    data-slide="calls"
                    href="#"
                    className="feature_block__link"
                  >
                    Аудио/Видеовызовы
                  </a>
                  <a
                    data-slide="files"
                    href="#"
                    className="feature_block__link"
                  >
                    Обмен файлами любого типа
                  </a>
                  <a
                    data-slide="chats"
                    href="#"
                    className="feature_block__link"
                  >
                    Личные и групповые чаты
                  </a>
                  <a
                    data-slide="audio"
                    href="#"
                    className="feature_block__link"
                  >
                    Аудио-сообщения
                  </a>
                  <a
                    data-slide="channels"
                    href="#"
                    className="feature_block__link"
                  >
                    Каналы
                  </a>
                  <a
                    data-slide="sharing"
                    href="#"
                    className="feature_block__link"
                  >
                    Демонстрация экрана
                  </a>
                  <a
                    data-slide="crossplatform"
                    href="#"
                    className="feature_block__link"
                  >
                    Работает на любой платформе
                  </a>
                </div>
                <div className="feature_block__slides">
                  <div className="feature_block__slides__heading">
                    Мессенджер
                  </div>
                  <dl>
                    <dt>
                      <a href="#">Аудио/Видеовызовы</a>
                    </dt>
                    <dd data-slide="calls" className="feature_block__slide">
                      <div className="feature_block__slide__text">
                        <h4>Высокое качество связи</h4>
                        <p>
                          В зависимости от уровня сигнала сотового оператора в
                          месте вашего нахождения, Reetm оптимизирует качество
                          связи автоматически. При слабом уровне сигнала Reetm
                          снижает количество передаваемого аудио или
                          видеотрафика без разрыва или задержки соединения.
                        </p>
                        <h4>Безопасное общение</h4>
                        <p>
                          Все звонки надежно защищены криптографическими
                          решениями на базе end-to-end и TLS шифрования.
                        </p>
                      </div>
                      <img
                        src="/images/features/messenger-audio.png"
                        srcSet="/images/features/messenger-audio@2x.png 2x"
                        alt="Аудио/Видеовызовы"
                        className="feature_block__image feature_block__image--mobile"
                      />
                    </dd>
                    <dt>
                      <a href="#">Обмен файлами любого типа</a>
                    </dt>
                    <dd data-slide="files" className="feature_block__slide">
                      <div className="feature_block__slide__text">
                        <h4>Передача файлов без ограничений по размеру</h4>
                        <p>
                          Не проходит тяжелая презентация по почте? Забудьте об
                          ограничениях – делитесь информацией любого размера,
                          прикрепляйте заметки к файлам, а удобный поиск по
                          названию файла и имени отправителя поможет быстро
                          найти важные данные.
                        </p>
                      </div>
                      <img
                        src="/images/features/messenger-sending.png"
                        srcSet="/images/features/messenger-sending@2x.png 2x"
                        alt="Обмен файлами любого типа"
                        className="feature_block__image feature_block__image--mobile"
                      />
                    </dd>
                    <dt>
                      <a href="#">Личные и групповые чаты</a>
                    </dt>
                    <dd data-slide="chats" className="feature_block__slide">
                      <div className="feature_block__slide__text">
                        <h4>Все сообщения будут доставлены</h4>
                        <p>
                          Платформа Reetm оптимизирована как для работы с GSM
                          сетями предыдущих поколений, так и с сетями нового
                          поколения. Приложение отправит сообщение, когда
                          возможности сети позволят это сделать, а также
                          проконтролирует доставку.
                        </p>
                      </div>
                      <img
                        src="/images/features/messenger-chats.png"
                        srcSet="/images/features/messenger-chats@2x.png 2x"
                        alt="Личные и групповые чаты"
                        className="feature_block__image feature_block__image--mobile"
                      />
                    </dd>
                    <dt>
                      <a href="#">Аудио-сообщения</a>
                    </dt>
                    <dd data-slide="audio" className="feature_block__slide">
                      <div className="feature_block__slide__text">
                        <h4>Не отвлекайтесь от дел</h4>
                        <p>
                          Нет времени печатать сообщение? Воспользуйтесь
                          функцией голосовых сообщений – это гораздо удобнее и
                          быстрее, чем автоответчик или голосовая почта.
                        </p>
                      </div>
                      <img
                        src="/images/features/messenger-audio-message.png"
                        srcSet="/images/features/messenger-audio-message@2x.png 2x"
                        alt="Аудио-сообщения"
                        className="feature_block__image feature_block__image--mobile"
                      />
                    </dd>
                    <dt>
                      <a href="#">Каналы</a>
                    </dt>
                    <dd data-slide="channels" className="feature_block__slide">
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
                    </dd>
                    <dt>
                      <a href="#">Демонстрация экрана</a>
                    </dt>
                    <dd data-slide="sharing" className="feature_block__slide">
                      <div className="feature_block__slide__text">
                        <h4>Работайте над документами совместно</h4>
                        <p>
                          Транслируйте экран коллегам или партнерам, обсуждайте
                          внутренние документы или проведите презентацию в
                          режиме реального времени.
                        </p>
                      </div>
                      <img
                        src="/images/features/messenger-screen.png"
                        srcSet="/images/features/messenger-screen@2x.png 2x"
                        alt="Демонстрация экрана"
                        className="feature_block__image feature_block__image--laptop"
                      />
                    </dd>
                    <dt>
                      <a href="#">Работает на любой платформе</a>
                    </dt>
                    <dd
                      data-slide="crossplatform"
                      className="feature_block__slide"
                    >
                      <div className="feature_block__slide__text">
                        <h4>Всегда на связи</h4>
                        <p>
                          Reetm доступен на всех ваших устройствах.
                          Поддерживаются операционные системы Android, iOS,
                          macOS, Windows и Linux. Стабильная работа и
                          синхронизация чатов в веб, мобильном и десктопном
                          клиентах.
                        </p>
                      </div>
                      <img
                        src="/images/features/messenger-platform.png"
                        srcSet="/images/features/messenger-platform@2x.png 2x"
                        alt="Всегда на связи"
                        className="feature_block__image feature_block__image--laptop"
                      />
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div data-tab="business" className="features__content__block">
              <div className="feature_block">
                <div className="feature_block__links">
                  <a
                    data-slide="chatbots"
                    href="#"
                    className="feature_block__link"
                  >
                    Чатботы
                  </a>
                  <a
                    data-slide="dashboard"
                    href="#"
                    className="feature_block__link"
                  >
                    Панель администратора
                  </a>
                  <a data-slide="ad" href="#" className="feature_block__link">
                    Active Directory (AD)
                  </a>
                </div>
                <div className="feature_block__slides">
                  <div className="feature_block__slides__heading">
                    Бизнес функции
                  </div>
                  <dl>
                    <dt>
                      <a href="#">Чатботы</a>
                    </dt>
                    <dd data-slide="chatbots" className="feature_block__slide">
                      <div className="feature_block__slide__text">
                        <h4>Автоматизируйте процессы</h4>
                        <p>
                          Чатбот похож на виртуального собеседника. Он
                          обрабатывает входящий вопрос и выдает ответ.
                        </p>
                        <p>
                          Пример: оформление документов. Это утомительная и
                          неизбежная часть работы. Но с помощью чатбота её можно
                          сделать проще.
                        </p>
                      </div>
                      <img
                        src="/images/features/business-chatbots.png"
                        srcSet="/images/features/business-chatbots@2x.png 2x"
                        alt="Автоматизируйте процессы"
                        className="feature_block__image feature_block__image--mobile"
                      />
                    </dd>
                    <dt>
                      <a href="#">Панель администратора</a>
                    </dt>
                    <dd data-slide="dashboard" className="feature_block__slide">
                      <div className="feature_block__slide__text">
                        <h4>Управляйте доступами</h4>
                        <p>
                          Со временем сотрудники вашей компании могут приходить
                          и уходить. С Панелью администратора вы можете легко
                          активировать / деактивировать пользователей в вашем
                          рабочем пространстве и управлять доступами.
                        </p>
                      </div>
                      <img
                        src="/images/features/business-administrator.png"
                        srcSet="/images/features/business-administrator@2x.png 2x"
                        alt="Управляйте доступами"
                        className="feature_block__image feature_block__image--laptop"
                      />
                    </dd>
                    <dt>
                      <a href="#">Active Directory (AD)</a>
                    </dt>
                    <dd data-slide="ad" className="feature_block__slide">
                      <div className="feature_block__slide__text">
                        <h4>Единая точка входа для своих работников</h4>
                        <p>
                          Reetm отображает информацию о пользователях из AD.
                          Интегрируйте имеющуюся рабочую среду и групповую
                          политику с Reetm. Пользователи могут войти в Reetm под
                          своими учетными записями.{' '}
                        </p>
                      </div>
                      <img
                        src="/images/features/business-ad.png"
                        srcSet="/images/features/business-ad@2x.png 2x"
                        alt="Active Directory (AD)"
                        className="feature_block__image feature_block__image--laptop"
                      />
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div data-tab="integrations" className="features__content__block">
              <div className="feature_block">
                <div className="feature_block__links">
                  <a data-slide="api" href="#" className="feature_block__link">
                    API Reetm
                  </a>
                  <a
                    data-slide="botsdk"
                    href="#"
                    className="feature_block__link"
                  >
                    Bot SDK
                  </a>
                  <a
                    data-slide="whitelabel"
                    href="#"
                    className="feature_block__link"
                  >
                    Брендинг <br />
                    компании-заказчика
                  </a>
                </div>
                <div className="feature_block__slides">
                  <div className="feature_block__slides__heading">
                    Интеграции
                  </div>
                  <dl>
                    <dt>
                      <a href="#">API Reetm</a>
                    </dt>
                    <dd data-slide="api" className="feature_block__slide">
                      <div className="feature_block__slide__text">
                        <h4>Совместимость с популярными бизнес-сервисами</h4>
                        <p>
                          АТС, CRM, Таск менеджеры, Аналитические системы - все
                          это, и не только, можно связать с Reetm. Интеграции
                          ограничены только фантазией разработчика.
                        </p>
                      </div>
                      <img
                        src="/images/features/integration-api.png"
                        srcSet="/images/features/integration-api@2x.png 2x"
                        alt="API Reetm"
                        className="feature_block__image feature_block__image--laptop"
                      />
                    </dd>
                    <dt>
                      <a href="#">Bot SDK</a>
                    </dt>
                    <dd data-slide="botsdk" className="feature_block__slide">
                      <div className="feature_block__slide__text">
                        <h4>Готовые средства разработки ботов для Reetm</h4>
                        <p>
                          <a href="#" className="link--default">
                            BOT SDK
                          </a>{' '}
                          позволяет быстро создавать собственных ботов. В
                          настоящее время SDK доступен для JS, Java и Python.
                        </p>
                        <div className="feature_block__slide__links">
                          <a href="#" className="link--default">
                            Python
                          </a>
                          <a href="#" className="link--default">
                            Java
                          </a>
                          <a href="#" className="link--default">
                            JavaScript
                          </a>
                          <a href="#" className="link--default">
                            Docs
                          </a>
                        </div>
                      </div>
                      <img
                        src="/images/features/integration-bot-sdk.png"
                        srcSet="/images/features/integration-bot-sdk@2x.png 2x"
                        alt="Bot SDK"
                        className="feature_block__image feature_block__image--laptop"
                      />
                    </dd>
                    <dt>
                      <a href="#">Брендинг компании-заказчика</a>
                    </dt>
                    <dd
                      data-slide="whitelabel"
                      className="feature_block__slide"
                    >
                      <div className="feature_block__slide__text">
                        <h4>Не отходите от фирменного стиля</h4>
                        <p>
                          Используйте гайдлайны брендбука, чтобы приложение
                          соответствовало фирменному стилю вашей компании. В
                          интерфейсе Reetm можно изменить логотип, цвета и
                          шрифты.
                        </p>
                      </div>
                      <img
                        src="/images/features/integration-branding.png"
                        srcSet="/images/features/integration-branding@2x.png 2x"
                        alt="Брендинг компании-заказчика"
                        className="feature_block__image feature_block__image--laptop"
                      />
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
