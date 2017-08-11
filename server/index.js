const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const Static = require('./static');
const config = require('../config.json').development;
const app = express();

const port = config.port;

app.listen(port, () => {
  console.log(`Server start on 127.0.0.1:${port}`);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(Static);

const indexFile = path.resolve(__dirname, '../dist/index.html');
app.get('/*', (req, res) => {
  res.sendFile(indexFile);
});
