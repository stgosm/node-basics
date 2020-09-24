const express = require('express');
const moment = require('moment');

// Generate application
const app = express();

app.get('/', (req, res) => {
  return res.send('Hello World');
});

app.listen(8080, () => {
  console.log(`Express escuchando en el puerto 8080 a las ${moment().format('LLLL')}`)
})