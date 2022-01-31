'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cart.init({
    ProductId: DataTypes.NUMERIC,
    productName: DataTypes.STRING,
    Password: DataTypes.STRING,
    Quantity: DataTypes.NUMERIC,
    TotalAmount: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};