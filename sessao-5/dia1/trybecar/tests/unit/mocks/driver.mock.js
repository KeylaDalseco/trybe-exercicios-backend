const driversBD = [
  { id: 1, name: 'Liana Cisneiros' },
  { id: 2, name: 'Fábio Frazão' },
  { id: 3, name: 'Anastácia Bicalho' },
  { id: 4, name: 'Samara Granjeiro' },
  { id: 5, name: 'Levi Teixeira' },
];

const driverById = { id: 4, name: 'Samara Granjeiro' };

const driverIdFromDB = { insertId: 6 };
const driverIdFromModel = 6;

module.exports = {
  driversBD,
  driverById,
  driverIdFromDB,
  driverIdFromModel,
};