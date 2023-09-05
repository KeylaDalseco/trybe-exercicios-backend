const express = require('express');
const PatientsController = require('./controllers/pacient.controller');
const planController= require('./controllers/plan.controller');

const app = express();
app.use(express.json());

app.post('/patients', PatientsController.createPatient);
app.get('/patients/plans', PatientsController.getPatients);
app.get('/patients/surgeries', PatientsController.getAllPatientsSurgeries);
app.get('/plans/:id', planController.getAllPlans);

module.exports = app;
