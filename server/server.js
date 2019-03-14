/*
 * Copyright 2019 dialog LLC <info@dlg.im>
 */

const path = require('path');
const express = require('express');
const port = 3000;

const app = express();

// app.use(express.static(path.join(__dirname, '../src/assets')));

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/about.html'));
  // res.sendFile(path.join(__dirname, '../about.html'));
});

app.listen(port, (err) => {
  if (err) {
  	return console.log('smth bad happened', err);
  }

  console.log(`server is listening on port ${port}`);
});
