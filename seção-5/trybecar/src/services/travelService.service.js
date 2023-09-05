const schema = require('./validations/validations.inputs');
const { passengerModel, travelModel } = require('../models');

const requestTravel = async (travelDataObject) => {
  /* (1) ✅ Validar dados de entrada com Joi; */
  const error = schema.validateRequestTravel(travelDataObject);
  if (error) return { status: error.status, data: { message: error.message } };

  /* (2) ✅ Validar se pessoa passageira existe; */
  const passenger = await passengerModel.findById(travelDataObject.passengerId);
  if (!passenger) return { status: 'NOT_FOUND', data: { message: 'Passenger not found' } };

  /* (3) ✅ Gravar nova solicitação de viagem no banco */
  const newTravelId = await travelModel.insert(travelDataObject);
  const newTravel = await travelModel.findById(newTravelId);
  return { status: 'SUCCESSFUL', data: newTravel };
};

const getOpenTravels = async () => {
  const WAITING_DRIVER = 1;
  let data = await travelModel.findByStatus(WAITING_DRIVER);
  if (!data || data.length === 0) data = { message: 'There are no open trips' };
  return { status: 'SUCCESSFUL', data };
};

module.exports = {
  requestTravel,
  getOpenTravels,
};