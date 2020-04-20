'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('odstats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Year: {
        type: Sequelize.INTEGER
      },
      State: {
        type: Sequelize.STRING
      },
      County: {
        type: Sequelize.STRING
      },
      Population: {
        type: Sequelize.STRING
      },
      DeathRate: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('odstats');
  }
};