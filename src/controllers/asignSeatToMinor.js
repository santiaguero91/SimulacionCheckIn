const getFlight = require("../utils/getData/getFlight");
const getPassengers = require("../utils/getData/getPassengers");
const getMinors = require("../utils/getSeatsData/getMinors");
const getSeats = require("../utils/getSeatsData/getSeats");
const sortSeats = require("../utils/ordenar asientos/sortSeats");



function sortSeatsByRow(seatsArray) {
  return seatsArray.sort((a, b) => a.seat_row - b.seat_row);
}


const asignSeatToMinor = async (req, res) => {
  const { id } = req.params;
  const flightId = parseInt(id);


  const getSeatColumn = await sortSeats(flightId);
  const sortedSeats = sortSeatsByRow(getSeatColumn);
/*   console.log(sortedSeats); */

  const seats = await getSeats(flightId);
  const allMinorsOnFlight = await getMinors(flightId);
  let acompañantes = await getPassengers(flightId) ;
  let companion = acompañantes.filter((acompañante) => acompañante.purchase_id === allMinorsOnFlight[0].purchase_id)
 

  res.status(200).send(sortedSeats)

/*   180 */


  

};

module.exports = asignSeatToMinor;