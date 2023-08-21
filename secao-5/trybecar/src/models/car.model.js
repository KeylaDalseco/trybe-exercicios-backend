const camelize = require('camelize');
const connection = require('./connection');
const {
  getFormattedColumnNames,
  getFormattedPlaceholders,
} = require('../utils/generateFormattedQuery');

const insert = async (car) => {
  const columns = getFormattedColumnNames(car);
  const placeholders = getFormattedPlaceholders(car);
  const query = `INSERT INTO cars (${columns}) VALUES (${placeholders})`;

  // INSERT = PROMISSE => [ { insertId: 6 }, undefined]
  const [{ insertId }] = await connection.execute(query, [...Object.values(car)]);

  return insertId;
};

const findAll = async () => {
  const [cars] = await connection.execute(
    'SELECT * FROM cars',
  );

  return camelize(cars);
};

const findById = async (carId) => {
  const [[car]] = await connection.execute(
    'SELECT * FROM cars WHERE id = ?',
    [carId],
  );

  return camelize(car);
};

const update = async (car) => {
  const result = await connection.execute(
    'UPDATE cars SET model = ?, color = ?, license_plate = ?, year = ? WHERE id = ?',
    [car.model, car.color, car.licensePlate, car.year, car.id],
  );
  return result.affectedRows;
};

module.exports = {
  insert,
  findById,
  findAll,
  update,
};