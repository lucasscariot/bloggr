var Liana = require('forest-express-sequelize');

Liana.collection('post', {
  actions: [{ name: 'Publish Post' }]
});
