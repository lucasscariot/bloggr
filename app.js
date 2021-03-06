require('dotenv').config()

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const forest = require('forest-express-sequelize');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(forest.init({
  modelsDir: __dirname + '/models', // Your models directory.
  envSecret: process.env.FOREST_ENV_SECRET,
  authSecret: process.env.FOREST_AUTH_SECRET,
  authExpiration: process.env.FOREST_AUTH_EXPIRATION,
  sequelize: require('./models').sequelize
}));

// Require our routes into the application.
require('./routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;
