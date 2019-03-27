const router = require('express').Router();
const request = require('request');
const nodemailer = require('nodemailer');
const config = require('./config');

// http://stackoverflow.com/questions/20082893/unable-to-verify-leaf-signature
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

const mailer = nodemailer.createTransport(config.email);

function renderTextMessage(body, site) {
  const message = `
Заявка с сайта ${site}

Имя: ${body.name}
Телефон: ${body.phone}
Email: ${body.email}
Компания: ${body.company}
Сообщение: ${body.message}
Количество пользователей: ${body.users}
Форма: ${body.form}
Тэги: ${body.tags}

---
Дополнительная информация:
Accept-Language: ${body.language}
Document-referrer: ${body.referer}
Geolocation: ${JSON.stringify(body.geo, null, '  ')}
Page-href: ${body.href}
GAcid: ${body.gacid}
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
      name: body.name,
      address: body.email,
    };

    mailer.sendMail(
      {
        from: {
          name: 'Dialog Bot',
          address: 'bot@dlg.im',
        },
        to: config.email_to,
        sender: sender,
        replyTo: sender,
        subject: `Заявка с сайта ${site}`,
        text: renderTextMessage(body, site),
      },
      (error, info) => {
        if (error) {
          console.log(error);
        }

        resolve();
      },
    );
  });
}

function logBody(body, site) {
  return new Promise((resolve, reject) => {
    console.log({ site, body });
    resolve();
  });
}

router.post(['/subscribe', '/offer'], (request, response) => {
  const { body } = request;
  const referer = request.header('referer');
  const promises = [];

  if (config.isDev) {
    promises.push(logBody(body, referer));
  }
  if (config.email.auth.user && config.email.auth.pass) {
    promises.push(notifyEmail(body, referer));
  }
  if (dialog.webhook) {
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

router.post('/support', (request, response) => {
  const referer = request.header('referer');
  const body = request.body;
  let promises = [];
  console.log('support post', { body, referer });

  if (config.isDev) {
    promises.push(logBody(body, referer));
  }
  if (config.email.auth.user && config.email.auth.pass) {
    promises.push(notifyEmail(body, referer));
  }
  if (dialog.webhook) {
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
