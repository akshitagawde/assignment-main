'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Products', [{
      productName: 'Microsoft Surface Pro 4',
      Description:'5 inch:4GB:32GB',
      Category:'Laptops',
      image:'https://i.imgur.com/nXgI5iT.png',
      price:40000,
      createdAt:new Date(),
      updatedAt:new Date()
    }
  ,
  {
    productName: 'Dell Inspiration 4',
    Description:'5 inch:8GB:1TB',
    Category:'Laptops',
    image:'https://i.imgur.com/ILEU18M.jpg',
    price:42000,
    createdAt:new Date(),
    updatedAt:new Date()
  },
  {
    productName: 'Dell Xtreame 5',
    Description:'5 inch:16GB:1TB',
    Category:'Laptops',
    image:'https://i.imgur.com/2kePJmX.jpg',
    price:59000,
    createdAt:new Date(),
    updatedAt:new Date()
  }
,{
  productName: 'HP Pro 4',
  Description:'5 inch:4GB:1TB',
  Category:'Laptops',
  image:'https://i.imgur.com/yugQN69.jpg',
  price:55000,
  createdAt:new Date(),
  updatedAt:new Date()
}
,{
  productName: 'Lenovo true 4',
  Description:'5 inch:4GB:32GB',
  Category:'Laptops',
  image:'https://i.imgur.com/JOpmFkw.png',
  price:45000,
  createdAt:new Date(),
  updatedAt:new Date()
}
,{
  productName: 'HP Elitebook 840',
  Description:'5 inch:4GB:32GB',
  Category:'Laptops',
  image:'https://i.imgur.com/O02Owsf.jpg',
  price:60000,
  createdAt:new Date(),
  updatedAt:new Date()
}
], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
