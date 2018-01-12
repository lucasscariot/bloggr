const userController = require('../controllers').user;
const forest = require('forest-express-sequelize');

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Users API!',
  }));

  app.post('/api/users', userController.create);
};
