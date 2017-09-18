const express = require('express');
const app = express();

// Watch for incoming req of method GET
app.get('/api', (req, res) => {
  res.send({ hi: 'there' });
});

module.exports = app;
