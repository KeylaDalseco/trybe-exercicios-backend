const express = require('express');
const { passengerModel, travelModel, driverModel } = require('./models');
const { carService, travelService } = require('./services/index');

const app = express();

app.use(express.json());

const passengerExists = async (passengerId) => {
  const passenger = await passengerModel.findById(passengerId);
  return passenger || false;
};

// dia 1 + o dia 4 que foi refatoração
// fou criada a função dentro do service
// const passengerExists = async (passengerId) => {
//   const passenger = await passengerModel.findById(passengerId);
//   return passenger || false;
// };

app.post('/passengers/:passengerId/request/travel', async (req, res) => {
  const { passengerId } = req.params;

  const travelData = { passengerId, ...req.body };
  const serviceResponse = await travelService.requestTravel(travelData);
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(422).json({ message: serviceResponse.data });
  }

  return res.status(201).json(serviceResponse.data);
});

app.get('/drivers/open/travels', async (_req, res) => {
  const serviceResponse = await travelService.getOpenTravels();
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(422).json({ message: serviceResponse.data });
  }
  res.status(200).json(serviceResponse.data);
});

app.patch('/drivers/:driverId/travels/:travelId', async (req, res) => {
  const { driverId, travelId } = req.params;
  const INCREMENT_STATUS = 1;
  const { travelStatusId } = await travelModel.findById(travelId);
  const nextTravelStatusId = travelStatusId + INCREMENT_STATUS;

  await travelModel.update(travelId, { driverId, travelStatusId: nextTravelStatusId });
  const updatedTravel = await travelModel.findById(travelId);

  res.status(200).json(updatedTravel);
});

app.delete('/passengers/:id', async (req, res) => {
  const { id } = req.params;
  await passengerModel.remove(id);
  return res.status(204).end();
});

// ====================================================================
// rotas do dia 2 de conteúdo

  app.get('/drivers', async (req, res) => {
    const drivers = await driverModel.findAll();
    return res.status(200).json(drivers);
  });

  app.get('/drivers/:id', async (req, res) => {
    const { id } = req.params;
    const driverById = await driverModel.findById(Number(id));
    res.status(200).json(driverById);
  });
  
  app.post('/drivers', async (req, res) => {
    const { name } = req.body;
    const driverById = await driverModel.insert({ name });
    res.status(200).json(driverById);
  });
  
app.post('/passengers/:passengerId/request/travel', async (req, res) => {
  const { passengerId } = req.params;
  const { startingAddress, endingAddress, waypoints } = req.body;

  const passenger = await passengerExists(passengerId);
  if (!passenger) return res.status(404).json({ message: 'Passenger not found' });

  const travelId = await travelModel.insert({
    passengerId,
    startingAddress,
    endingAddress,
    waypoints,
  });
  const newTravel = await travelModel.findById(travelId);

  return res.status(201).json(newTravel);
});

app.get('/drivers/open/travels', async (_req, res) => {
  const WAITING_DRIVER = 1;
  const openTravelsFromDB = await travelModel.findByStatus(WAITING_DRIVER);
  res.status(200).json(openTravelsFromDB);
});

app.patch('/drivers/:driverId/travels/:travelId', async (req, res) => {
  const { driverId, travelId } = req.params;
  const INCREMENT_STATUS = 1;
  const { travelStatusId } = await travelModel.findById(travelId);
  const nextTravelStatusId = travelStatusId + INCREMENT_STATUS;

  await travelModel.update(travelId, { driverId, travelStatusId: nextTravelStatusId });
  const updatedTravel = await travelModel.findById(travelId);

  res.status(200).json(updatedTravel);
});

// SERVICE - dia 3 ===============================================================

app.get('/cars', async (_req, res) => {
  const serviceResponse = await carService.findAll();
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(400).json(serviceResponse.data);
  }
  return res.status(200).json(serviceResponse.data);
});

app.post('/cars', async (req, res) => {
  const { model, licensePlate, year, color, driverId } = req.body;
  const serviceResponse = await carService.createCar({
    model, 
    licensePlate, 
    year, 
    color, 
    driverId,
  });

  console.log(serviceResponse);
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(400).json(serviceResponse.data);
  }
  return res.status(201).json(serviceResponse.data);
});

app.get('/cars/:id', async (req, res) => {
  const { id } = req.params;
  const serviceResponse = await carService.findById(Number(id));
  if (serviceResponse.status === 'INVALID_ID') {
    return res.status(400).json({ message: 'ID INVÁLIDO' });
  }
  if (serviceResponse.status === 'NOT_FOUND') {
    return res.status(400).json({ message: 'não encontrado' });
  }
  return res.status(200).json(serviceResponse.data);
});

app.put('/cars/:id', async (req, res) => {
  const { id } = req.params;
  const carData = req.body;

  const update = await carService.update({ id: Number(id), ...carData });

  if (update.status === 'placa_invalida') {
    return res.status(422).json({ message: 'placa inválida' });
  }

  if (update.status === 'NOT_FOUND') {
    return res.status(400).json({ message: 'não encontrado' });
  }
    res.status(200).json(update.data);
});

module.exports = app;