'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    Product_Id: DataTypes.INTEGER,
    Customer_Id: DataTypes.INTEGER,
    Order_date: DataTypes.DATE,
    Order_Address: DataTypes.STRING,
    Total_Amount: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
