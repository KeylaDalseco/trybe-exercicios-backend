module.exports = {
  async up(queryInterface, _) {
    return queryInterface.bulkInsert('Comments', 
    [
      {
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        upvoting: 2,
        downvoting: 23,
        account_id: 1,
      },
      {
        message: 'Nada que vale a pena é fácil. Lembre-se disso',
        upvoting: 28,
        downvoting: 15,
        account_id: 1,
      },
      {
        message: 'Não é por que o céu esta nublado que as estrelas morrem',
        upvoting: 35,
        downvoting: 0,
        account_id: 2,
      },
      {
        message: 'Pudera eu, escolher o que sentir.',
        upvoting: 50,
        downvoting: 10,
        account_id: 3,
      },
      {
        message: 'Não posso voltar para ontem porque lá eu era outra pessoa',
        upvoting: 100,
        downvoting: 8,
        account_id: 4,
      },
      {
        message: 'Não se policie tanto, você pode acabar preso.',
        upvoting: 78,
        downvoting: 18,
        account_id: 4,
      },
      {
        message: 'A noite não é o fim do dia. É o começo do dia que vem.',
        upvoting: 82,
        downvoting: 6,
        account_id: 4,
      },
    ]);
  },

  async down(queryInterface, _) {
    return queryInterface.bulkDelete('Comments', null, {});
  },
};
