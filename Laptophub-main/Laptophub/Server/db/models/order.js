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
    
    OrderDate: DataTypes.DATE,
    productName: DataTypes.STRING,
    CustomerId: DataTypes.NUMERIC,
    Location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};