/*
 * Copyright 2019 dialog LLC <info@dlg.im>
 */

const path = require('path');
const express = require('express');
const links = require('./links');
const app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static(path.join(__dirname, '../src/assets')));

app.get('/', (req, res) => res.render('../src/index'));
app.get('/features', (req, res) => res.render('../src/features'));
app.get('/blog', (req, res) => res.render('../src/blog'));
app.get('/blog/tag', (req, res) => res.render('../src/blogTag'));
app.get('/about', (req, res) => res.render('../src/about'));
app.get('/download', (req, res) => {
  res.render('../src/download', { links });
});
app.get('/download/cloud', (req, res) => {
  res.render('../src/downloadCloud', { links });
});
app.get('/licenses', (req, res) => res.render('../src/licenses'));
app.get('/support', (req, res) => res.render('../src/support'));
app.get('/legal', (req, res) => res.render('../src/legal'));

app.get('/playground', (req, res) => res.render('../src/playground'));

app.listen(
  {
    port: 8080,
    host: '0.0.0.0',
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
