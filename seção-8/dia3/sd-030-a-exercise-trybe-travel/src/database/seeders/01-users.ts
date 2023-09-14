import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        email: 'user1@email.com',
        password: 'chang3m3',
      },
      {
        email: 'user2@email.com',
        password: 'chang3m3',
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {}, {});
  }
};