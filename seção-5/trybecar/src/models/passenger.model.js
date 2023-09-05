const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [passengers] = await connection.execute('SELECT * FROM passengers');
  return camelize(passengers);
};

const findById = async (id) => {
  const [[passenger]] = await connection.execute('SELECT * FROM passengers WHERE id = ?', [id]);
  return camelize(passenger);
};

const insert = async (passenger) => {
  const results = await connection.execute(
    'INSERT INTO passengers (name, email, phone) VALUES (?, ?, ?)',
      [passenger.name, passenger.email, passenger.phone],
    );
    
      return results.insertId;
};

const update = async (id, passenger) => {
  const result = await connection.execute(
    'UPDATE passengers SET name = ?, email = ?, phone = ? WHERE id = ?',
    [passenger.name, passenger.email, passenger.phone, id],
  );

  return result;
};

const remove = async (id) => {
  const result = await connection.execute('DELETE FROM passengers WHERE id = ?', [id]);
  return result;
};

module.exports = {
  findAll,
  findById,
  insert,
  update,
  remove,
};