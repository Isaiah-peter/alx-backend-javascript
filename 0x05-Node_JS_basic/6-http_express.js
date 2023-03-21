const express = require('express');

const app = express();
const PORT = 1245;
const HOST = 'localhost';

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, HOST, () => {
  console.log(`server running on ${HOST}:${PORT}`);
});

module.exports = app;
