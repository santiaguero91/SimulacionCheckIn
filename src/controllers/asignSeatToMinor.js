const getMinors = require("../utils/getSeatsData/getMinors");
const getSeats = require("../utils/getSeatsData/getSeats");


const asignSeatToMinor = async (req, res) => {
  const { id } = req.params;
  const flightId = parseInt(id);

  const seats = await getSeats(flightId);
  const allMinorsOnFlight = await getMinors(flightId);
  res.status(200).send(seats)



};

module.exports = asignSeatToMinor;