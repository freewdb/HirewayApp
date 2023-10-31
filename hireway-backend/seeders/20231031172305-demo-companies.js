'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Companies', [{
      name: 'TechCorp',
      address: '123 Tech St, TechCity',
      phone: '123-456-7890',
      website: 'www.techcorp.com',
      sector: 'Technology',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'HealthInc',
      address: '456 Health Ave, HealthTown',
      phone: '987-654-3210',
      website: 'www.healthinc.com',
      sector: 'Healthcare',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Companies', null, {});
  }
};
