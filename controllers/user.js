const models = require('../models');

module.exports = {
  create(req, res) {
    return models.users
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
      })
      .then(user => res.res.sendStatus(201).send(user))
      .catch(error => res.res.sendStatus(400).send(error));
  },
};
