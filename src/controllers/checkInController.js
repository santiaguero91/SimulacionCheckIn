const connection = require("../../db");
const getSeats = require("../utils/getData/getSeats");
const getBoardingPass = require("../utils/getData/getBoardingPass");
const getFlight = require("../utils/getData/getFlight");
const getPassengers = require("../utils/getData/getPassengers");
const getMinors = require("../utils/getMinors");

const checkIn = async (req, res) => {
  const { id } = req.params;
  const flightId = parseInt(id);

  const allMinors = await getMinors(flightId);
  res.status(200).send(allMinors)


};

module.exports = checkIn;