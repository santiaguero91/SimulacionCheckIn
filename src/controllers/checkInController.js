const connection = require("../../db");
const getSeats = require("../utils/getData/getSeats");
const getBoardingPass = require("../utils/getData/getBoardingPass");
const getFlight = require("../utils/getData/getFlight");
const getPassengers = require("../utils/getData/getPassengers");

const checkIn = async (req, res) => {
  const { id } = req.params;
  const flightId = parseInt(id);

  let allFlights = await getFlight(flightId);
  const allPassenger = await getPassengers(flightId);
  allFlights[0].passengers = allPassenger;
  res.status(200).send(allFlights)
  
};

module.exports = checkIn;
