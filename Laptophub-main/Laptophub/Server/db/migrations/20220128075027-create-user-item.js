'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ProductId: {
        type: Sequelize.NUMERIC
      },
      productName: {
        type: Sequelize.STRING
      },
      Password: {
        type: Sequelize.STRING
      },
      Quantity: {
        type: Sequelize.NUMERIC
      },
      TotalAmount: {
        type: Sequelize.NUMERIC
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserItems');
  }
};