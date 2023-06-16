const getFlight = require("../utils/getData/getFlight");
const getPassengers = require("../utils/getData/getPassengers");
const getSeats = require("../utils/getSeatsData/getSeats");


const checkIn = async (req, res) => {
  const { id } = req.params;
  const flightId = parseInt(id);


  const seats = await getSeats(flightId);
  res.status(200).send(seats)


};

module.exports = checkIn;