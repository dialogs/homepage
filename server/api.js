const router = require('express').Router();
const request = require('request');
const nodemailer = require('nodemailer');
const Mailchimp = require('mailchimp-api-v3');
const config = require('./config');
const md5 = require('md5');

// http://stackoverflow.com/questions/20082893/unable-to-verify-leaf-signature
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

let mailer = nodemailer.createTransport(config.email);
const mailchimp = new Mailchimp(config.mailchimp.key);
//https://ethereal.email/messages

function renderTextMessage(body, site) {
  const message = `
Имя: ${body.name}
Телефон: ${body.phone}
Email: ${body.email}
Компания: ${body.company}
Сообщение: ${body.message}
Количество пользователей: ${body.users}

========================================================

Форма: ${body.form}
Флаг: ${body.flag}
Сайт: ${site}
Подписка на новости: ${body.subscribe}
Согласие на обработку персональных данных: ${body.agree}

========================================================

Дополнительная информация:
Accept-Language: ${body.data.language}
Document-referrer: ${body.data.referrer}
Geolocation: ${JSON.stringify(body.data.geo, null, 2)}
Page-href: ${body.data.href}
GAcid: ${body.data.gacid}
  `;

  return message;
}

function renderApplicationMessage(body, site) {
  const message = `
    Имя: ${body.fio}
    Телефон: ${body.phone}
    Email: ${body.workemail}
    Город: ${body.city}
    Обо мне: ${body.aboutme}
    Форма: ${body.form}
    Отклик со страницы: ${site}

    ========================================================
    Дополнительная информация:
    Accept-Language: ${body.data.language}
    Document-referrer: ${body.data.referrer}
    Geolocation: ${JSON.stringify(body.data.geo, null, 2)}
    Page-href: ${body.data.href}
    GAcid: ${body.data.gacid}
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
          text: renderTextMessage(body, site),
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
    const sender = {
      name: body.name || 'empty name',
      address: body.email,
    };

    let mailAddressTo =
      body.form === 'support' ? config.email_to_support : config.email_to;

    mailer.sendMail(
      {
        from: {
          name: 'Dialog Bot',
          address: 'bot@dlg.im',
        },
        to: mailAddressTo,
        sender: sender.address,
        replyTo: sender.address,
        subject: `Заявка с сайта ${site}`,
        text: renderTextMessage(body, site),
        attachments: [
          {
            path: body.files,
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

function notifyMailchimp(body, site) {
  const listId =
    body.lang === 'ru' ? config.mailchimp.list.ru : config.mailchimp.list.en;
  return mailchimp.put(`/lists/${listId}/members/${md5(body.email)}`, {
    email_address: body.email,
    status: 'subscribed',
  });
}

function notifyResume(body, site) {
  return new Promise((resolve, reject) => {
    const sender = {
      name: body.name || 'empty name',
      address: body.email,
    };

    let mailAddressTo = config.email_to_hr;

    mailer.sendMail(
      {
        from: {
          name: 'Dialog Bot',
          address: 'bot@dlg.im',
        },
        to: mailAddressTo,
        sender: sender.address,
        replyTo: sender.address,
        subject: `Резюме на вакансию с сайта ${site}`,
        text: renderApplicationMessage(body, site),
        attachments: [
          {
            path: body.files,
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
  console.log(JSON.stringify({ ...body, headerReferer: referer }));
  return Promise.resolve();
}

router.post('/offer', (request, response) => {
  const { body } = request;
  const referer = request.header('referer');
  const promises = [];

  promises.push(logBody(body, referer));

  if (config.email.auth.user && config.email.auth.pass) {
    promises.push(notifyEmail(body, referer));
  }

  if (config.dialog.webhook) {
    promises.push(notifyDialog(body, referer));
  }

  if (body.subscribe) {
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

  promises.push(notifyMailchimp(body, referer));

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
  const referer = request.header('referer');
  const body = request.body;
  const promises = [];

  promises.push(logBody(body, referer));

  if (config.email.auth.user && config.email.auth.pass) {
    promises.push(notifyEmail(body, referer));
  }
  if (config.dialog.webhook) {
    promises.push(notifyDialog(body, referer));
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
  const referer = request.header('referer');
  const body = request.body;
  console.log(body);
  const promises = [];

  promises.push(logBody(body, referer));
  // promises.push(notifyResume(body, referer));

  if (config.email.auth.user && config.email.auth.pass) {
    promises.push(notifyEmail(body, referer));
  }
  if (config.dialog.webhook) {
    promises.push(notifyDialog(body, referer));
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
