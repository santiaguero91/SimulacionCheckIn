const connection = require("../../db");
const assignSeats = require("../utils/AsignarAsientos/getSeats");
const getFlight = require("../utils/getData/getFlight");
const getPassengers = require("../utils/getData/getPassengers");
const getAvailableSeats = require("../utils/getSeatsData/getAvailableSeats");
const getMinorsGuardian = require("../utils/getSeatsData/getMinorGuardian");
const {findPassengerWithMinorsByPurchaseId, filterPassengersWithNoMinors} = require("../utils/getSeatsData/getMinorGuardian");
const findPassengersByPurchaseId = require("../utils/getSeatsData/getMinorGuardian");
const getMinorGuardian = require("../utils/getSeatsData/getMinorGuardian");
const getMinors = require("../utils/getSeatsData/getMinors");
const getPurchase = require("../utils/getSeatsData/getPurchase");
const getSeats = require("../utils/getSeatsData/getSeats");
const {sortSeatsToPassengers} = require("../utils/ordenar asientos/sortSeats");
const groupSeats = require("../utils/ordenar asientos/sortSeats2");



const asignSeatToMinor = async (req, res) => {
  const { id } = req.params;
  const flightId = parseInt(id);

  try {
    if (flightId !== 1 && flightId !== 2 && flightId !== 3 && flightId !== 4) {
     throw new Error('flight not found');
    }
//get passengers and group them

const flight = await getFlight(flightId); 
  const passengers = await getPassengers(flightId); 
  const minors = await getMinors(flightId); 
  const GroupswithMinorsByPurchaseID = await findPassengerWithMinorsByPurchaseId(minors, passengers); 
  const getGroupsWithNoMinors = await filterPassengersWithNoMinors(minors, passengers);

// GET SEATS 
  const allSeats = await getSeats(flightId); 

//assign seats 
const passengersAssignedSeats = await assignSeats(allSeats, GroupswithMinorsByPurchaseID, getGroupsWithNoMinors);




return res.json({
  code: 200,
  data: {
   flightId: flight[0].flight_id,
   takeoffDateTime: flight[0].takeoffDateTime,
   takeoffAirport: flight[0].takeoffAirport,
   landingDateTime: flight[0].landingDateTime,
   landingAirport: flight[0].landingAirport,
   airplaneId: flight[0].airplaneId,
   passengers: passengersAssignedSeats,
  },
 });

} catch (error) {
  console.error(error);
  if (error.message === 'flight not found') {
   return res.status(404).json({
    code: 404,
    data: {},
   });
  }
  return res.status(400).json({
   code: 400,
   errors: 'could not connect to db',
  });
 }
};

module.exports = asignSeatToMinor;
