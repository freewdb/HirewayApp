'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Orders', [{
      company_id: 1, // Assuming TechCorp has ID 1
      order_date: new Date(),
      order_details: 'Order for 5 software licenses',
      status: 'Active',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      company_id: 2, // Assuming HealthInc has ID 2
      order_date: new Date(),
      order_details: 'Order for 10 medical devices',
      status: 'Completed',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
