const getPurchase = require("../utils/getData/getPurchase");
const getMinors = require("../utils/getSeatsData/getMinors");
const getSeats = require("../utils/getSeatsData/getSeats");


const checkIn = async (req, res) => {
  const { id } = req.params;
  const flightId = parseInt(id);

  const allSeats = await getMinors(flightId);
  res.status(200).send(allSeats)


};

module.exports = checkIn;