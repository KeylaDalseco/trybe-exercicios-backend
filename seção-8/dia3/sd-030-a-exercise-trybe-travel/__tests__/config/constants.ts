export default {
  defaultDelay: 1000,
  defaultRounds: 30,
  sequelizeDefs: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'trybe_travel',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3006,
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
      timezone: 'Z',
    },
  },
  numbers: {
    one: 1,
  },
};
