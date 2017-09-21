const userController = require('../controllers').user;
const forest = require('forest-express-sequelize');

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Users API!',
  }));

  app.post('/api/users', userController.create);

  app.get('/forest/brands', forest.ensureAuthenticated, function (req, res) {
    res.send({
      "meta":{
        "count":1
      },
      "data":[
        {
          "type":"brands",
          "id":"1",
          "attributes":{
            "id":1,
            "brand":"Hello",
            "description": "This is a desc",
            "createdAt":"2017-08-31T14:08:22.786Z",
            "updatedAt":"2017-08-31T14:08:22.786Z"
          },
        }
      ]
    });
  });
};
