var Liana = require('forest-express-sequelize');

Liana.collection('post', {
  fields: [{
    field: 'CCCCCCAAAAAAAACCCCCC',
    type: 'Number',
    isFilterable: true,
    get: function (object) {
      return Math.random();
    }
  }],
  actions: [{
    name: 'Add user',
    fields: [{
      field: 'User',
      type: 'Number',
    }],
  },{
    name: 'Ban User',
    fields: [{
      field: 'User',
      type: 'Number',
    }],
  }],
});
