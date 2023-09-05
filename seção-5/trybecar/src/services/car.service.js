const { driverModel, carModel } = require('../models');
const { validateNewCar, isValidLicensePlateFormat } = require('./validations/validations.inputs');

// É RECOMENDADO QUE ESSAS FUNÇÕES FIQUEM DENTRO DA VALIDATION
const driverExists = async (driverId) => {
  const driver = await driverModel.findById(driverId);
  return driver || false;
};

const plateRegistered = async (licensePlate) => {
  const car = await carModel.findByLicensePlate(licensePlate);
  return car || false;
};

const isCarOlderThanTenYears = (year) => {
  const currentYear = new Date().getFullYear;
  const carYear = Number(year);
  return currentYear - carYear > 10;
};

// eslint-disable-next-line max-lines-per-function, complexity
const createCar = async ({ model, licensePlate, year, color, driverId }) => {
  const error = validateNewCar({ model, licensePlate, year, color, driverId });
  if (error) return { status: error.status, data: { message: error.message } };

  const driver = await driverExists(driverId);
  if (!driver) return { status: 'NOT_FOUND', data: { message: 'Driver not found' } };

  const isValidPlate = isValidLicensePlateFormat(licensePlate);
  if (!isValidPlate) return { status: 'INVALID_VALUES', data: { message: 'Invalid licensePlate' } };

  const possuiRegistro = await plateRegistered(licensePlate);
    if (possuiRegistro) {
      return { status: 'CONFLICT', data: { message: 'Car already registered' } };
    }
    if (isCarOlderThanTenYears(year)) {
      // eslint-disable-next-line max-len
      return { status: 'INVALID_VALUES', message: 'The year of the car cannot be more than 10 years old',
      };
    }

  const carId = await carModel.insert({ model, licensePlate, year, color, driverId });
  const newCar = {
    id: carId,
    model,
    licensePlate,
    year,
    color,
    driverId,
  };
  return { status: 'SUCCESSFUL', data: newCar };
};

const findAll = async () => {
  const cars = await carModel.findAll();
  return { status: 'SUCCESSFUL', data: cars };
};

const findById = async (id) => {
  const car = await carModel.findById(id);
  if (id <= 0 || !Number.isInteger(id)) {
    return { status: 'INVALID_ID' };
  }
  if (!car) {
    return { status: 'NOT_FOUND', data: null };
  }
  return { status: 'SUCESSFUL', data: car };
};

// input: dados dos carros
// output: retorna nada ou objeto atualizado
const update = async (car) => {
  // validar entradas e regras de negócio

  const regex = /[A-Z]{3}[0-9][0-9A-Z][0-9]{2}/; // padrão placa antiga

  if (!regex.test(car.licensePlate)) {
    return { status: 'placa_invalida' };
  }

  const affectedRows = await carModel.update(car);
  if (affectedRows === 0) {
    return { status: 'NOT_FOUND', data: null };
  }
  return { status: 'SUCESSFUL', data: car };
};
module.exports = {
  createCar,
  findAll,
  findById,
  update,
  plateRegistered,
};