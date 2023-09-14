import { Sequelize } from 'sequelize' ;
import PackageModel from '../src/database/models/Package.model';
import { initSequelize, termSequelize } from './config/sequelize';

let database: Sequelize;

beforeAll(async () => {
  database = await initSequelize();
});

afterAll(async () => termSequelize(database));

describe('02 - Crie um model para a tabela de pacotes turísticos.', () => {
  it('Será validado que é possível encontrar o primeiro seeder a partir da Model', async () => {
    const pkg = await PackageModel.findByPk(1, { raw: true });

    expect(pkg).toEqual({
      "id": 1,
      "destination": "Salvador",
      "category": "basic",
      "price": 1200.0
    },
    )
  });
});

