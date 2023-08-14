const { travelService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const createTravel = async (req, res) => {
  const { passengerId } = req.params;
  const travelData = { passengerId, ...req.body };

  const { status, data } = await travelService.requestTravel(travelData);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  createTravel,
};