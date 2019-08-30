const router = require('express').Router();
const request = require('request');
const nodemailer = require('nodemailer');
const Mailchimp = require('mailchimp-api-v3');
const config = require('./config');
const md5 = require('md5');

// http://stackoverflow.com/questions/20082893/unable-to-verify-leaf-signature
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

const SENDER_EMAIL = {
  name: 'Dialog Website Service',
  address: 'site-srv@dlg.im',
};

const mailer = nodemailer.createTransport(config.email);
const mailchimp = new Mailchimp(config.mailchimp.key);

function renderAdditionalInfo(body, site) {
  return `
ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ:

Accept-Language: ${body.data.language} |
Document-referrer: ${body.data.referrer} |
Geolocation: ${JSON.stringify(body.data.geo, null, 2)} |
Page-href: ${body.data.href} |
GAcid: ${body.data.gacid} |
`;
}

function renderTextMessage(body, site) {
  const message = `
ЗАЯВКА С САЙТА.

Имя: ${body.name} |
Телефон: ${body.phone} |
Email: ${body.email} |
Компания: ${body.company} |
Сообщение: ${body.message} |
Количество пользователей: ${body.users} |

========================================================

Форма: ${body.form} |
Язык сайта: ${body.siteLanguage} |
Флаг: ${body.flag} |
Заявка со страницы: ${site} |
Подписка на новости: ${body.subscribe} |
Согласие на обработку персональных данных: ${body.agree} |

========================================================

${renderAdditionalInfo(body, site)}
  `;

  return message;
}

function renderApplicationMessage(body, site) {
  const message = `
ОТКЛИК НА ВАКАНСИЮ.

Имя: ${body.name} |
Телефон: ${body.phone} |
Email: ${body.email} |
Город: ${body.city} |
Обо мне: ${body.about} |

========================================================

Форма: ${body.form} |
Язык сайта: ${body.siteLanguage} |
Отклик со страницы: ${site} |
Согласие на обработку персональных данных: ${body.agree} |

========================================================

${renderAdditionalInfo(body, site)}
  `;

  return message;
}

function notifyDialog(body, site) {
  return new Promise((resolve, reject) => {
    request(
      {
        method: 'POST',
        uri: config.dialog.webhook,
        json: true,
        body: {
          text:
            body.form === 'apply'
              ? renderApplicationMessage(body, site)
              : renderTextMessage(body, site),
        },
      },
      (error, res, body) => {
        if (error) {
          console.error(error);
        }

        resolve();
      },
    );
  });
}

function notifyEmail(body, site) {
  return new Promise((resolve, reject) => {
    mailer.sendMail(
      {
        from: SENDER_EMAIL,
        to: body.form === 'support' ? config.email_to_support : config.email_to,
        sender: body.email,
        replyTo: body.email,
        subject: `Заявка с сайта ${site}`,
        text: renderTextMessage(body, site),
      },
      (error, info) => {
        if (error) {
          reject(error);
        }

        resolve();
      },
    );
  });
}

function notifyPartners(body, site) {
  return new Promise((resolve, reject) => {
    mailer.sendMail(
      {
        from: SENDER_EMAIL,
        to: body.form === 'support' ? config.email_to_support : config.email_to,
        sender: body.email,
        replyTo: body.email,
        subject: `Заявка с сайта ${site}`,
        text: renderTextMessage(body, site),
      },
      (error, info) => {
        if (error) {
          reject(error);
        }

        resolve();
      },
    );
  });
}

function notifyMailchimp(body, site) {
  const listId =
    body.siteLanguage === 'ru'
      ? config.mailchimp.list.ru
      : config.mailchimp.list.en;

  return mailchimp.put(`/lists/${listId}/members/${md5(body.email)}`, {
    email_address: body.email,
    status: 'subscribed',
  });
}

function notifyResume(body, site) {
  return new Promise((resolve, reject) => {
    mailer.sendMail(
      {
        from: SENDER_EMAIL,
        to: config.email_to_hr,
        sender: body.email,
        replyTo: body.email,
        subject: `Отклик на вакансию со страницы ${site}`,
        text: renderApplicationMessage(body, site),
        attachments: [
          {
            path: body.resume,
          },
        ],
      },
      (error, info) => {
        if (error) {
          reject(error);
        }

        resolve();
      },
    );
  });
}

function logBody(body, referer) {
  console.log(
    JSON.stringify({
      ...body,
      headerReferer: referer,
      resume: body.resume ? '[file]' : '[empty]',
    }),
  );

  return Promise.resolve();
}

router.post('/offer', (request, response) => {
  const { body } = request;
  const referer = request.header('referer');
  const promises = [];

  promises.push(logBody(body, referer));

  if (config.dialog.webhook) {
    promises.push(notifyDialog(body, referer));
  }

  if (config.email.auth.user && config.email.auth.pass) {
    promises.push(notifyEmail(body, referer));
  }

  if (
    config.mailchimp.key &&
    config.mailchimp.list.ru &&
    config.mailchimp.list.en &&
    body.subscribe
  ) {
    promises.push(notifyMailchimp(body, referer));
  }

  Promise.all(promises)
    .then(() => {
      response.json({
        status: 200,
        message: 'Ok',
      });
    })
    .catch((error) => {
      console.error(error);
      response.json({
        status: 500,
        message: 'Internal Error',
        error: error,
      });
    });
});

router.post('/subscribe', (request, response) => {
  const { body } = request;
  const referer = request.header('referer');
  const promises = [];

  promises.push(logBody(body, referer));

  if (config.dialog.webhook) {
    promises.push(notifyDialog(body, referer));
  }

  if (
    config.mailchimp.key &&
    config.mailchimp.list.ru &&
    config.mailchimp.list.en
  ) {
    promises.push(notifyMailchimp(body, referer));
  }

  Promise.all(promises)
    .then(() => {
      response.json({
        status: 200,
        message: 'Ok',
      });
    })
    .catch((error) => {
      console.error(error);
      response.json({
        status: 500,
        message: 'Internal Error',
        error: error,
      });
    });
});

router.post('/support', (request, response) => {
  const { body } = request;
  const referer = request.header('referer');
  const promises = [];

  promises.push(logBody(body, referer));

  if (config.dialog.webhook) {
    promises.push(notifyDialog(body, referer));
  }

  if (config.email.auth.user && config.email.auth.pass) {
    promises.push(notifyEmail(body, referer));
  }

  Promise.all(promises)
    .then(() => {
      response.json({
        status: 200,
        message: 'Ok',
      });
    })
    .catch((error) => {
      console.error(error);
      response.json({
        status: 500,
        message: 'Internal Error',
        error: error,
      });
    });
});

router.post('/apply', (request, response) => {
  const { body } = request;
  const referer = request.header('referer');
  const promises = [];

  promises.push(logBody(body, referer));

  if (config.dialog.webhook) {
    promises.push(notifyDialog(body, referer));
  }

  if (config.email.auth.user && config.email.auth.pass) {
    promises.push(notifyResume(body, referer));
  }

  Promise.all(promises)
    .then(() => {
      response.json({
        status: 200,
        message: 'Ok',
      });
    })
    .catch((e) => {
      console.error(e);
      response.json({
        status: 500,
        message: 'Internal Error',
      });
    });
});

router.post('/partner', (request, response) => {
  const { body } = request;
  const referer = request.header('referer');
  const promises = [];

  promises.push(logBody(body, referer));

  if (config.dialog.webhook) {
    promises.push(notifyDialog(body, referer));
  }

  if (config.email.auth.user && config.email.auth.pass) {
    promises.push(notifyPartners(body, referer));
  }

  Promise.all(promises)
    .then(() => {
      response.json({
        status: 200,
        message: 'Ok',
      });
    })
    .catch((e) => {
      console.error(e);
      response.json({
        status: 500,
        message: 'Internal Error',
      });
    });
});

router.get('/', (request, response) => {
  response.json({
    status: 200,
    message: 'knock knock...',
  });
});

module.exports = router;
