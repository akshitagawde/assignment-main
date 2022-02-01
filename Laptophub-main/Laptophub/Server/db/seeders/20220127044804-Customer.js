'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Customers', [{
      Name: 'John Doe',
      Email: 'j@gmail.com',
      Mobileno:8766889990,
      Address:'pune - maharashtra',
      password:'2344354',
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
