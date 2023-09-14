import { Sequelize } from 'sequelize';
import UserModel from '../src/database/models/User.model';
import { initSequelize, termSequelize } from './config/sequelize';

let database: Sequelize;

beforeAll(async () => {
  database = await initSequelize();
});

afterAll(async () => termSequelize(database));

describe('01 - Crie um model para a tabela de pessoas usuárias.', () => {
  it('Será validado que é possível encontrar o primeiro seeder a partir da Model', async () => {
    const pkg = await UserModel.findByPk(1, { raw: true });

    expect(pkg).toEqual({
      "id": 1,
      "email": 'user1@email.com',
      "password": 'chang3m3'
    },
    )
  });
});

