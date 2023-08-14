const route = require('express').Router();
const { driverController } = require('../controllers');

route.get('/open/travels', driverController.openTravels);

module.exports = route;