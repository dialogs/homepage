/*
 * Copyright 2019 dialog LLC <info@dlg.im>
 */

const path = require('path');
const express = require('express');
const gatsyExpress = require('gatsby-plugin-express');
const { server } = require('./config');
const api = require('./api');
const app = express();

app.use('/api/v1', api);

app.use(express.static('public/'));
app.use(
  gatsyExpress('server/gatsby-express.json', {
    publicDir: './public/',
    template: path.resolve('./public/404/index.html'),
    redirectSlashes: true,
  }),
);

app.listen(server, (error) => {
  if (error) {
    console.trace(error);
    process.exit(1);
  } else {
    console.log(`Express server started at ${server.host}:${server.port}\n`);
  }
});
