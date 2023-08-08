const express = require('express');
const { passengerModel, travelModel, driverModel } = require('./models');

const app = express();

app.use(express.json());

const passengerExists = async (passengerId) => {
  const passenger = await passengerModel.findById(passengerId);
  return passenger || false;
};

app.get('/passengers', async (req, res) => {
  const passengers = await passengerModel.findAll();
  return res.status(200).json(passengers);
});

app.post('/passengers', async (req, res) => {
  const { email, name, phone } = req.body;
  
  if (!name || !email || !phone) {
    return res.status(400).json({ message: 'Algum campo está faltando' });
  }
  // insere os registros no banco
  const passenger = { email, name, phone };
  const id = await passengerModel.insert(passenger);
  return res.status(201).json({
    id,
    name,
    email,
    phone,
  });
});
app.get('/passengers/:id', async (req, res) => {
  const { id } = req.params;
  const passenger = await passengerModel.findById(id);
  if (!passenger) return res.status(404).json({ message: 'Passenger not found' });
  return res.status(200).json(passenger);
});

app.put('/passengers/:id', async (req, res) => {
  const { email, name, phone } = req.body;
  const { id } = req.params;
  
  if (!name || !email || !phone) {
    return res.status(400).json({ message: 'Algum campo está faltando' });
  }
  const passenger = await passengerModel.update(id, { name, email, phone });
  return res.status(204).json(passenger);
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
module.exports = app;