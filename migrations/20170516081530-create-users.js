'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
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
      return queryInterface.sequelize.query('ALTER TABLE "users" ADD CONSTRAINT "username" PRIMARY KEY ("firstName", "lastName")');
    })
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};
