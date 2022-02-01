'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Product_Id: {
        type: Sequelize.INTEGER
      },
      Customer_Id: {
        type: Sequelize.INTEGER
      },
      Order_date: {
        type: Sequelize.DATE
      },
      Order_Address: {
        type: Sequelize.STRING
      },
      Total_Amount: {
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
    await queryInterface.dropTable('Orders');
  }
};