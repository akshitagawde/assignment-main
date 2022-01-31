'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     
     await queryInterface.bulkInsert('AdminLogins', [{
      FullName:'Ajay',
      Email:'ajay@gmail.com',
      Password:'ajay',
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
