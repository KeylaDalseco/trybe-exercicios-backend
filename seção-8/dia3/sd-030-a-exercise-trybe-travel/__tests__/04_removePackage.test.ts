import request from 'supertest';
import { Sequelize } from 'sequelize' ;
import app from '../src/app';
import { initSequelize, termSequelize } from './config/sequelize';

let database: Sequelize;

beforeAll(async () => {
  database = await initSequelize();
});

afterAll(async () => termSequelize(database));

describe('04 - Crie um endpoint que remova um pacote de viagem, a partir de seu id.', () => {
  it('Será validado que é possível remover um pacote que existe', async () => {
    const {
      body,
      statusCode,
    } = await request(app).delete('/packages/1');

    expect(statusCode).toEqual(204);
    expect(body).toEqual({});

    const result = await database.query('SELECT id, destination, category, price from packages where id=1', { type: 'SELECT' });
    
    expect(result).toEqual([]);
  });

  it("Será validado que não é possível remover um pacote que não existe", async () => {
    const {
      body,
      statusCode,
    } = await request(app).delete('/packages/100')
    
    expect(statusCode).toBe(404);
    expect(body.message).toEqual("Pacote não encontrado!");
    
    const [result] = await database.query('SELECT id, destination, category, price from packages where id=100', { type: 'SELECT' });

    expect(result).toEqual(undefined);
  });
});

