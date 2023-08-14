const route = require('express').Router();
const { passengerController } = require('../controllers');
const validateTravelFields = require('../middlewares/validadeTravelFiels');

route.post(
  '/:passengerId/request/travel',
  validateTravelFields,
  passengerController.createTravel,
);

module.exports = route;
