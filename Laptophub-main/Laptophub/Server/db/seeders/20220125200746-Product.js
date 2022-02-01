'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Products', [{
      productName: 'HP',
      Description:'HP Laptop with 18gb Ram',
      image:'',
      price:59000,
      createdAt:new Date(),
      updatedAt:new Date()
    }], {});
    
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
