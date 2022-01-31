'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('productCategories', [{
      categoryName: 'Laptop',
      createdAt: new Date(),
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
