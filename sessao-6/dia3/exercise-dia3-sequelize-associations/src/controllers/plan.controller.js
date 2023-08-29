// src/controllers/plansController.js

const service = require('../services/plan.services');

const getAllPlans = async (req, res) => {
  const { id } = req.params;
  try {
    const listOfPlans = await service.getAllPlans(id);

    if (listOfPlans.message) return res.status(404).send(listOfPlans);

    return res.status(200).json(listOfPlans);
  } catch (error) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getAllPlans,
};
