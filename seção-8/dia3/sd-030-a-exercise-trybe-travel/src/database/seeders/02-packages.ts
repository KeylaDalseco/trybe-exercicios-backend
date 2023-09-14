import { QueryInterface } from 'sequelize'; 

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('packages', [
      {
        destination: 'Salvador',
        category: 'basic',
        price: 1200.0
      },
      {
        destination: 'Salvador',
        category: 'classic',
        price: 2000.0
      },
      {
        destination: 'Salvador',
        category: 'premium',
        price: 3500.0
      },
      {
        destination: 'Belo Horizonte',
        category: 'basic',
        price: 2500.0
      },
      {
        destination: 'Belo Horizonte',
        category: 'classic',
        price: 3600.0
      },
      {
        destination: 'Belo Horizonte',
        category: 'premium',
        price: 5000.0
      },
      {
        destination: 'Lisboa',
        category: 'basic',
        price: 6200.0
      },
      {
        destination: 'Lisboa',
        category: 'classic',
        price: 7500.0
      },
      {
        destination: 'Lisboa',
        category: 'premium',
        price: 10000.0
      },
      {
        destination: 'Paris',
        category: 'basic',
        price: 7500.0
      },
      {
        destination: 'Paris',
        category: 'classic',
        price: 10000.0
      },
      {
        destination: 'Paris',
        category: 'premium',
        price: 14000.0
      },
    ], {});
  },
  
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('packages', {});
  }
};