/*
 * Copyright 2019 dialog LLC <info@dlg.im>
 */

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const gatsbyExpress = require('./middlewares/gatsbyExpressCustomized');
const bodyParser = require('body-parser');
const { isDev, server, languages } = require('./config');
const api = require('./api');
const redirectRules = require('./redirect-rules');
const helmet = require('helmet');
const cors = require('cors');
const setHeaders = require('./middlewares/setHeaders');
const detectLanguage = require('./middlewares/detectLanguage');
// const parseUserAgent = require('./middlewares/parseUserAgent');
const localeRedirect = require('./middlewares/localeRedirect');

const app = express();

// Logging
app.use(morgan(isDev ? 'dev' : 'combined'));

app.use(helmet());
app.use(cors());
app.use(setHeaders);
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

redirectRules.forEach((rule) => {
  rule.from.forEach((from) => {
    console.log(`Add redirect rule from ${from} to ${rule.to}`);
    app.get(from, (req, res) => {
      res.redirect(rule.to);
    });
  });
});

app.use('/api/v1', api);

// app.use(parseUserAgent);
app.use(detectLanguage(languages));

if (!isDev) {
  app.use(localeRedirect(languages));
  app.use(express.static('public/', { maxage: 365 * 24 * 3600 * 1000 }));
  app.use(
    gatsbyExpress('server/gatsby-express.json', {
      publicDir: './public/',
      redirectSlashes: false,
    }),
  );
}

// Error tracing
app.use((error, req, res, next) => {
  console.trace(error);
  next(error);
});

app.listen(server, (error) => {
  if (error) {
    console.trace(error);
    process.exit(1);
  } else {
    console.log(`Express server started at ${server.host}:${server.port}\n`);
  }
});
