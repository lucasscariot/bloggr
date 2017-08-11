'use strict';
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('tags', {
    name: {
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^https?:\/\/.*/i, //Hypertext link detection
          msg: "The name must be a link.",
        }
      }
    } 
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Post;
};
