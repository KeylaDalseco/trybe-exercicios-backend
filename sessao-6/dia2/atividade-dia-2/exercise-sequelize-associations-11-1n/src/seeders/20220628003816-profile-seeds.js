module.exports = {
  async up(queryInterface, _) {
    return queryInterface.bulkInsert('Profiles', 
    [
      {
        first_name: 'Elaine',
        last_name: 'Stevens',
        phone: '(116) 941 9747',
        account_id: 1,
      },
      {
        first_name: 'Margie',
        last_name: 'Chambers',
        phone: '(438) 738 2053',
        account_id: 2,
      },
      {
        first_name: 'Kurt',
        last_name: 'Wagner',
        phone: '(929) 344 7886',
        account_id: 3,
      },
      {
        first_name: 'Audrey',
        last_name: 'Medina',
        phone: '(146) 556 9633',
        account_id: 4,
      },
      {
        first_name: 'Jeffery',
        last_name: 'Matthews',
        phone: '(550) 891 9423',
        account_id: 5,
      },
    ]);
  },

  async down(queryInterface, _) {
    return queryInterface.bulkDelete('Profiles', null, {});
  },
};
