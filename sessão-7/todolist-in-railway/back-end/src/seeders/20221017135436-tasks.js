module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('tasks',
      [{
        description: 'Estudar os conteúdos de Docker da Trybe',
        check: true
      },
      {
        description: 'Resolver o projeto Docker Todo List',
        check: false
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('tasks', null, {});
  },
};
