'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('users', {
    firstName: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    lastName: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
    },
  });
  User.removeAttribute('id');
  return User;
};
