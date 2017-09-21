'use strict';
module.exports = function(sequelize, DataTypes) {
  var StrangeUser = sequelize.define('strangeUsers', {
    firstName: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    lastName: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        StrangeUser.belongsTo(models.post);
      }
    }
  });
  StrangeUser.removeAttribute('id');
  return StrangeUser;
};
