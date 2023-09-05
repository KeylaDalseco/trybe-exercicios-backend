const { Patient, Plan, Surgery } = require('../models');

const getPatientAndPlan = async () => {
  const pacients = await Patient.findAll({
    attributes: { exclude: ['plan_id', 'planId'] },
    include: [{ model: Plan, as: 'plan' }],
  });
  if (!pacients.length) {
    return ({ message: 'Nenhum paciente encontrado' });
  }
  return pacients;
};

const getAllPatientsSurgeries = async () => {
  const listOfPatients = await Patient.findAll({
    attributes: { exclude: ['plan_id', 'planId'] },
    include: { model: Surgery, as: 'surgeries', through: { attributes: [] } },
  });
  if (!listOfPatients.length) {
    return ({ message: 'Nenhum paciente encontrado' });
  }

  return listOfPatients;
};

const createPatient = async (fullname, planId) => {
  const newPatient = await Patient.create({ fullname, planId });

  if (!newPatient) {
    return ({ message: 'Não foi possível criar um novo paciente' });
  }

  return newPatient;
};

module.exports = { getPatientAndPlan, getAllPatientsSurgeries, createPatient };