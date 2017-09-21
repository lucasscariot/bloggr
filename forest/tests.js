var Liana = require('forest-express-sequelize');

Liana.collection('brands', {
  fields: [
    { field: 'brand', type: 'String', isSortable: false },
    { field: 'brad', type: 'String', isSortable: false },
    { field: 'description', type: 'String', isSortable: true }
  ]
});
