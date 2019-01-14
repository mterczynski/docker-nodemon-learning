const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('app listening on localhost:3000');
});

app.get('/', (req, res) => {
  res.send({ version: process.version });
});

app.get('/test', (req, res) => {
  res.send({ text: 'test' });
});
