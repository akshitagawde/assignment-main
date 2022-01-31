'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdminLogin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AdminLogin.init({
    FullName: DataTypes.STRING,
    Email: DataTypes.STRING,
    Password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AdminLogin',
  });
  return AdminLogin;
};