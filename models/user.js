'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('user', {
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.post);
      }
    }
  });
  return User;
};
