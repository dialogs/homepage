const router = require('express').Router();
const request = require('request');
const nodemailer = require('nodemailer');
const config = require('./config');

// http://stackoverflow.com/questions/20082893/unable-to-verify-leaf-signature
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

// const mailer = nodemailer.createTransport(config.email);
console.log('\n');
console.log(config);
console.log('\n');

function renderTextMessage(body, site) {
  const message = `
Заявка с сайта ${site}

Имя: ${body.NAME ? body.NAME : 'не указано'}
Телефон: ${body.PHONE ? body.PHONE : 'не указан'}
Email: ${body.EMAIL ? body.EMAIL : 'не указан'}
Компания: ${body.COMPANY ? body.COMPANY : 'не указана'}
Сообщение: ${body.MESSAGE ? body.MESSAGE : 'не указано'}
Количество пользователей: ${body.COUNT_USERS ? body.COUNT_USERS : 'не указано'}
Форма: ${body.FORM}
Тэги: ${body.TAGS ? body.TAGS.toString() : 'теги отсутсвуют'}

---
Дополнительная информация:
Accept-Language: ${body.LANGUAGE}
Document-referrer: ${body.REFERRER}
Geolocation: ${JSON.stringify(body.GEO, null, '  ')}
Page-href: ${body.HREF}
GAcid: ${body.GACID ? body.GACID : 'GAcid отсутсвует'}
  `;

  return message;
}

function renderHTMLMessage(body, site) {
  const email = encodeURI(
    body.NAME
      ? `${body.NAME} <${body.EMAIL}>?Subject=Re: ${body.MESSAGE}`
      : `${body.EMAIL}?Subject=Re: ${body.MESSAGE}`,
  );
  const additional = `Accept-Language: ${JSON.stringify(
    body.LANGUAGE,
    null,
    '  ',
  )}\nDocument-referrer: ${JSON.stringify(
    body.REFERRER,
    null,
    '  ',
  )}\nGeolocation: ${JSON.stringify(
    body.GEO,
    null,
    '  ',
  )}\nPage-href: ${JSON.stringify(body.HREF, null, '  ')}`;

  return `
    <div style="font-size: large;">
      <h2>Заявка с сайта ${site}</h2>
      <p><b>Имя</b>: ${body.NAME ? body.NAME : 'не указано'}</p>
      <p><b>Телефон</b>: ${body.PHONE ? body.PHONE : 'не указан'}</p>
      <p><b>Email</b>: ${body.EMAIL ? body.EMAIL : 'не указан'}</p>
      <p><b>Компания</b>: ${body.COMPANY ? body.COMPANY : 'не указана'}</p>
      <p><b>Сообщение</b>: ${body.MESSAGE ? body.MESSAGE : 'не указано'}</p>
      <p><b>Количество пользователей</b>: ${
        body.COUNT_USERS ? body.COUNT_USERS : 'не указано'
      }</p>
      <p><b>Форма</b>: ${body.FORM}</p>
      <p><b>Тэги</b>: ${
        body.TAGS ? body.TAGS.toString() : 'теги отсутсвуют'
      }</p>
      <p><a href="mailto:${email}">Ответить</a></p>
      <hr />
      <p><b>Дополнительная информация:</b></p>
      <pre>${additional}</pre>
      <p><b>GAcid</b>: ${body.GACID ? body.GACID : 'GAcid отсутсвует'}</p>
    </div>
  `;
}

function notifyDialog(body, site) {
  return new Promise((resolve, reject) => {
    request(
      {
        method: 'POST',
        uri: config.dialog.url,
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

// function notifyEmail(body, site) {
//   return new Promise((resolve, reject) => {
//     const sender = {
//       name: body.NAME,
//       address: body.EMAIL,
//     };
//
//     mailer.sendMail(
//       {
//         from: {
//           name: 'Dialog Bot',
//           address: 'bot@dlg.im',
//         },
//         to: config.email_to,
//         sender: sender,
//         replyTo: sender,
//         subject: `Заявка с сайта ${site}`,
//         text: renderTextMessage(body, site),
//         html: renderHTMLMessage(body, site),
//       },
//       function(error, info) {
//         if (error) {
//           console.log(error);
//         }
//
//         resolve();
//       },
//     );
//   });
// }

function logBody(body, site) {
  return new Promise((resolve, reject) => {
    console.log({ site, body });
    resolve();
  });
}

router.post('/', (req, res) => {
  const referer = req.header('referer');
  const body = req.body;
  let promises = [];

  // promises.push(logBody(body, referer));
  promises.push(notifyEmail(body, referer));
  promises.push(notifyDialog(body, referer));

  Promise.all(promises)
    .then(() => {
      res.json({
        status: 200,
        message: 'Ok',
      });
    })
    .catch((e) => {
      console.error(e);
      res.json({
        status: 500,
        message: 'Internal Error',
      });
    });
});

router.get('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
