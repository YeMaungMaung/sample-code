const path = require('path');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');

const routes = require('./routes');
const errorHandlers = require('./handlers/errorHandlers');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression());

app.use('/', routes);

app.use(errorHandlers.notFound);

if (app.get('env') === 'development') {
  app.use(errorHandlers.developmentErrors);
}

app.use(errorHandlers.productionErrors);

module.exports = app;
