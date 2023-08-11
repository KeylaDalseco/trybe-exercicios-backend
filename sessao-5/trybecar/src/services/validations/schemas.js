// AQUI CRIAMOS UM SQUEMA COM O FORMATO QUE QUEREMOS UTILIZAR NA ADIÇÃO DO NOSSO CARRO

const Joi = require('joi');

const addCarSchema = Joi.object({
  model: Joi.string().min(3),
  color: Joi.string().min(2),
  licensePlate: Joi.string().length(7),
  year: Joi.number().integer(),
  driverId: Joi.number(),
  
});

const idSchema = Joi.number().integer().min(1);
const pointSchema = Joi.string().min(3);

const waypointSchema = Joi.object({
  address: pointSchema,
  stopOrder: Joi.number().integer().min(1),
});

const addRequestTravelSchema = Joi.object({
  passengerId: idSchema,
  startingAddress: pointSchema,
  endingAddress: pointSchema.invalid(Joi.ref('startingAddress')),
  waypoints: Joi.array().items(waypointSchema),
});

module.exports = { addCarSchema, idSchema, addRequestTravelSchema };