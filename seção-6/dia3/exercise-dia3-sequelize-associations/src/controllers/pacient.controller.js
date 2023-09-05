const PatientService = require('../services/patient.service');

const getPatients = async (req, res) => {
  try {
    const getPatientsAndPlans = await PatientService.getPatientAndPlan();
    if (getPatientsAndPlans.message) return res.status(404).send(getPatientsAndPlans);

    return res.status(200).json(getPatientsAndPlans);
  } catch (error) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getAllPatientsSurgeries = async (_req, res) => {
  try {
    const listOfPatients = await PatientService.getAllPatientsSurgeries();
    console.log(listOfPatients);

    if (listOfPatients.message) return res.status(404).send(listOfPatients);

    return res.status(200).json(listOfPatients);
  } catch (error) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const createPatient = async (req, res) => {
  const { fullname, planId } = req.body;
  try {
    const newPatient = await PatientService.createPatient(fullname, planId);

    if (newPatient.message) return res.status(404).send(newPatient);

    return res.status(200).json(newPatient);
  } catch (error) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getPatients,
  getAllPatientsSurgeries,
  createPatient,
};