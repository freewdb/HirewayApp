'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Contacts', [{
      company_id: 1, // TechCorp
      first_name: 'Tom',
      last_name: 'Jones',
      email: 'tom.jones@techcorp.com',
      phone: '123-456-7890',
      position: 'Manager',
      status: 'Active',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      company_id: 2, // HealthInc
      first_name: 'Lucy',
      last_name: 'Brown',
      email: 'lucy.brown@healthinc.com',
      phone: '987-654-3210',
      position: 'Director',
      status: 'Inactive',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Contacts', null, {});
  }
};
