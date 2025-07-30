const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node.js app with CI/CD!');
});

module.exports = app;
