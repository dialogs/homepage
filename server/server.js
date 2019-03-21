/*
 * Copyright 2019 dialog LLC <info@dlg.im>
 */

const path = require('path');
const express = require('express');
const gatsyExpress = require('gatsby-plugin-express');

const app = express();

app.use(express.static('public/'));
app.use(
  gatsyExpress('config/gatsby-express.json', {
    publicDir: 'public/',
    template: 'public/404/index.html',
    redirectSlashes: true,
  }),
);

app.listen(
  {
    port: env('PORT', 3000),
    host: env('HOST', '127.0.0.1'),
  },
  (error) => {
    if (error) {
      console.trace(error);
      process.exit(1);
    } else {
      console.log('Server started');
    }
  },
);
