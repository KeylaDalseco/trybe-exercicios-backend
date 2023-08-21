const camelize = require('camelize');
const connection = require('./connection');
const {
  getFormattedColumnNames,
  getFormattedPlaceholders,
} = require('../utils/generateFormattedQuery');

const findAll = async () => {
  const [drivers] = await connection.execute('SELECT * FROM trybecardb.drivers');
  // console.log(drivers);
  return camelize(drivers);
};

const insert = async (driver) => {
  const columns = getFormattedColumnNames(driver);
  const placeholders = getFormattedPlaceholders(driver);
  const query = `INSERT INTO drivers (${columns}) VALUE (${placeholders});`;
  const [{ insertId }] = await connection.execute(query, [...Object.values(driver)]);
  return insertId;
};

const findById = async (id) => {
  const [driverById] = await connection.execute(
    'SELECT * FROM trybecardb.drivers WHERE id = ?',
    [id],
  );
  return camelize(driverById);
};

module.exports = {
  findAll,
  findById,
  insert,
};