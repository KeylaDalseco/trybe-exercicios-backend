import { Options, Sequelize } from 'sequelize';
import { condExec } from '../utils/util';

import constants from './constants';

async function dbReset() {
  return condExec({
    command: 'npm run db:reset',
    validate: 'npx sequelize-cli db:migrate:status',
    include: 'up 02-create-packages.js',
  });
}

async function initSequelize() {
  
  await dbReset();

  const sequelize = new Sequelize(constants.sequelizeDefs as Options);

  type objectWithResult = { result: number };

  const [validate] = await sequelize.query('SELECT 1+1 as result', { type: 'SELECT' })
  .catch((_e) => { throw new Error('Não foi possível conectar ao banco de dados') });
  
  const { result } = (validate as unknown as objectWithResult);
  if(result !== 2){
    throw new Error('Não foi possível conectar ao banco de dados')
  }

  return sequelize;
}

async function termSequelize(sequelize: Sequelize) {
  return sequelize?.close();
}

export {
  initSequelize,
  termSequelize,
  dbReset,
};
