const { travelService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const openTravels = async (_req, res) => {
  const { status, data } = await travelService.getOpenTravels();
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  openTravels,
};