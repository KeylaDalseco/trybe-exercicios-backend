module.exports = {
  async up(queryInterface, _Sequelize) {
    return queryInterface.bulkInsert('Accounts', 
    [
      {
        email: 'elaine.stevens@tryber.com',
        password: 's3cr3t',
      },
      {
        email: 'margie.chambers@tryber.com',
        password: 'a1b2c3',
      },
      {
        email: 'kurt.wagner@tryber.com',
        password: '112233',
      },
      {
        email: 'audrey.medina@tryber.com',
        password: '123123',
      },
      {
        email: 'jeffery.matthews@tryber.com',
        password: '123abc',
      },
    ]);
  },

  async down(queryInterface, _Sequelize) {
    return queryInterface.bulkDelete('Accounts', null, {});
  },
};
