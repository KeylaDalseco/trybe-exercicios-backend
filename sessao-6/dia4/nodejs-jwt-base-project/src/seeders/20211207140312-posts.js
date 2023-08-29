module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('posts',
      [{
        id: 1,
        title: 'título fake',
        content: 'conteúdo conteúdo conteúdo conteúdo conteúdo',
        user_id: 1
      },
      {
        id: 2,
        title: 'título fake',
        content: 'conteúdo conteúdo conteúdo conteúdo conteúdo',
        user_id: 1
      },
      {
        id: 3,
        title: 'título fake',
        content: 'conteúdo conteúdo conteúdo conteúdo conteúdo',
        user_id: 2
      },
      {
        id: 4,
        title: 'título fake',
        content: 'conteúdo conteúdo conteúdo conteúdo conteúdo',
        user_id: 3
      }], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('posts', null, {});
  },
};