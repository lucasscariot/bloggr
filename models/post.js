'use strict';
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Post.belongsTo(models.user);
        Post.hasMany(models.strangeUsers);
      }
    }
  });
  return Post;
};
