'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Candidates', [{
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      address: '123 Main St, CityTown',
      skills: 'JavaScript, Node.js',
      experience: 5,
      education: 'Bachelor\'s in Computer Science',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      first_name: 'Jane',
      last_name: 'Smith',
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
      address: '456 Elm St, TownCity',
      skills: 'Python, Django',
      experience: 4,
      education: 'Bachelor\'s in Software Engineering',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Candidates', null, {});
  }
};
