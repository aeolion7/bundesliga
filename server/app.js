const express = require('express');
const app = express();
const path = require('path');
const volleyball = require('volleyball');
const PORT = 3000;

app.use(volleyball);
app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(PORT, () => {
  console.log('Application listening on port', PORT);
});