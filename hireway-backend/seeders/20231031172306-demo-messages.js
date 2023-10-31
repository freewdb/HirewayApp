'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Messages', [{
      sender_id: 1, // Assuming John Doe has ID 1
      receiver_id: 2, // Assuming Jane Smith has ID 2
      content: 'Hello Jane, how are you?',
      type: 'Text',
      timestamp: new Date()
    }, {
      sender_id: 2, // Jane Smith
      receiver_id: 1, // John Doe
      content: 'Hi John, I am good. Thanks for asking!',
      type: 'Text',
      timestamp: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Messages', null, {});
  }
};
