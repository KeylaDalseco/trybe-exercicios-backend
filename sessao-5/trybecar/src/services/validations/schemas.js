// AQUI CRIAMOS UM SQUEMA COM O FORMATO QUE QUEREMOS UTILIZAR NA ADIÇÃO DO NOSSO CARRO

const Joi = require('joi');

const addCarSchema = Joi.object({
  model: Joi.string().min(3),
  color: Joi.string().min(2),
  licensePlate: Joi.string().length(7),
  year: Joi.number().integer(),
  driverId: Joi.number(),
  
});

module.exports = { addCarSchema };