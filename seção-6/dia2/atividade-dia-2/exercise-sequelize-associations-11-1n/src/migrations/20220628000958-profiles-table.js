module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      first_name: { allowNull: false, type: Sequelize.STRING },
      last_name: { allowNull: false, type: Sequelize.STRING },
      phone: { allowNull: true, type: Sequelize.STRING },
      account_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Accounts', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    return queryInterface.dropTable('Profiles');
  },
};
