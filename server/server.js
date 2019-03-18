/*
 * Copyright 2019 dialog LLC <info@dlg.im>
 */

const path = require('path');
const express = require('express');
const port = 3000;

const app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static(path.join(__dirname, '../src/assets')));

app.get('/', (req, res) => res.render('../src/index'));
app.get('/features', (req, res) => res.render('../src/features'));
app.get('/blog', (req, res) => res.render('../src/blog'));
app.get('/blog/tag', (req, res) => res.render('../src/blogTag'));
app.get('/about', (req, res) => res.render('../src/about'));
app.get('/download', (req, res) => res.render('../src/download'));
app.get('/download/cloud', (req, res) => res.render('../src/downloadCloud'));
app.get('/licenses', (req, res) => res.render('../src/licenses'));
app.get('/support', (req, res) => res.render('../src/support'));

app.get('/playground', (req, res) => res.render('../src/playground'));

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on port ${port}`);
});
