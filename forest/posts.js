var Liana = require('forest-express-sequelize');

Liana.collection('post', {
  fields: [{
    field: 'count',
    type: 'Number',
    get: function (object) {
      return Math.random();
    }
  }],
  actions: [{
    name: 'Add user',
    global: true,
    fields: [{
      field: 'User',
      type: 'Number',
      reference: 'users.id'
    }]
  }],
});
