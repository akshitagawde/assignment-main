module.exports=(app)=>{
  const express = require('express');
  const ROUTE = express.Router();
  //Category
  const categoryController = require('./category-controller');
  ROUTE.get('/productCategories',categoryController.findAll);
  ROUTE.get('/productCategories/:id',categoryController.findByPk);
  ROUTE.post('/productCategories/add/',categoryController.create);
  ROUTE.put('/productCategories/update/:id',categoryController.update);
  ROUTE.delete('/productCategories/delete/:id',categoryController.delete);
//--------------------------------------------------------------------------------------------
//Products
  const productController = require('./product-controller');
  ROUTE.get('/Products',productController.findAll);
  ROUTE.get('/Products/:id',productController.findByPk);
  ROUTE.post('/Products/add/',productController.create);
  ROUTE.put('/Products/update/:id',productController.update);
  ROUTE.delete('/Products/delete/:id',productController.delete);


  //--------------------------------------------------------------------------------------
  //AdminLogin

  //Products
  const AdminLoginController = require('./AdminLogin-controller');
  ROUTE.get('/AdminLogins',AdminLoginController.findAll);
  ROUTE.get('/AdminLogins/:id',AdminLoginController.findByPk);
  ROUTE.post('/AdminLogins/add/',AdminLoginController.create);
  ROUTE.put('/AdminLogins/update/:id',AdminLoginController.update);
  ROUTE.delete('/AdminLogins/delete/:id',AdminLoginController.delete);

//----------------------------------------------------------------------------------------------------
// Customer

const CustomerController = require('./customer-controller');
  ROUTE.get('/Customers',CustomerController.findAll);
  ROUTE.get('/Customers/:id',CustomerController.findByPk);
  ROUTE.post('/Customers/add/',CustomerController.create);
  ROUTE.put('/Customers/update/:id',CustomerController.update);
  ROUTE.delete('/Customers/delete/:id',CustomerController.delete);

//----------------------------------------------------------------------------------------------------
//Orders
const OrderController = require('./order-controller');
  ROUTE.get('/Orders/:customerId',OrderController.findAll);
  ROUTE.get('/Orders/:id',OrderController.findByPk);
  ROUTE.post('/Orders/add/',OrderController.create);
  ROUTE.put('/Orders/update/:id',OrderController.update);
  ROUTE.delete('/Orders/delete/:id',OrderController.delete);

  //------------------------------------------------
  //Cart

  const CartController = require('./cart-controller');
  ROUTE.get('/carts',CartController.findAll);
  ROUTE.get('/cart/:id',CartController.findByPk);
  ROUTE.get('/cart/product/:id',CartController.findCartByProduct);
  ROUTE.post('/cart/add/',CartController.create);
  ROUTE.put('/cart/update/:id',CartController.update);
  ROUTE.delete('/cart/delete/:id',CartController.delete);

//-----------------------------------------------------------------------------------------------
const PaymentController = require('./payment-controller');
  ROUTE.get('/Payments',PaymentController.findAll);
  ROUTE.get('/Payments/:id',PaymentController.findByPk);
  ROUTE.post('/Payments/add/',PaymentController.create);
  ROUTE.put('/Payments/update/:id',PaymentController.update);
  ROUTE.delete('/Payments/delete/:id',PaymentController.delete);


 app.use('/app',ROUTE);
 }
