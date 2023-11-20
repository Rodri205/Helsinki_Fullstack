const express = require('express');
const app = express();

app.use((next) => {
  next();
});

