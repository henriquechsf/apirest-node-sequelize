const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        nome: 'John Doe',
        email: 'john@email.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Carlos Henrique',
        email: 'henrique@email.com',
        password_hash: await bcryptjs.hash('1234567', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Dani Guerra',
        email: 'dani@email.com',
        password_hash: await bcryptjs.hash('12345678', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down: async () => {
  },
};
