const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node.js app with CI/CD!, I try to deploy this app to Vercel using GitHub Actions');
});

module.exports = app;
