'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('strangeUsers', {
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      postId: {
        type: Sequelize.INTEGER,
        reference: { model: 'strangeUsers', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    .then(() => {
      // MYSQL
      //return queryInterface.sequelize.query('ALTER TABLE strangeUsers ADD CONSTRAINT username PRIMARY KEY (firstName, lastName)');
      // POSGRES
      return queryInterface.sequelize.query('ALTER TABLE "strangeUsers" ADD CONSTRAINT "username" PRIMARY KEY ("firstName", "lastName")');
    })
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('strangeUsers');
  }
};
