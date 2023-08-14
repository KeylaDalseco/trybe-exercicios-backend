const checkRequiredFields = require('../utils/checkRequiredFields');

const validateTravelWithWaypoints = (waypoints) => {
  const waypointsRequiredFilds = ['address', 'stopOrder'];

  for (let i = 0; i < waypoints.length; i += 1) {
    const waypoint = waypoints[i];
    const error = checkRequiredFields(waypoint, waypointsRequiredFilds);
    if (error) return error;
  }
};

const validateTravelFields = (req, res, next) => {
  const travelRequiredFields = ['startingAddress', 'endingAddress'];
  const { body } = req.body;

  const travelError = checkRequiredFields(body, travelRequiredFields);
  if (travelError) return res.status(400).json({ message: travelError });

  const { waypoints } = req;
  if (waypoints) {
    const waypointError = validateTravelWithWaypoints(waypoints);
    if (waypointError) return res.status(400).json({ json: waypointError });
  }
  next();
};

module.exports = validateTravelFields;