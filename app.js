const express = require('express');
const routes = require('./routes/routes');

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.set('view engine', 'ejs');

app.use('/', routes);

app.listen(3000, () => {
  console.log('Connected to localhost');
});
