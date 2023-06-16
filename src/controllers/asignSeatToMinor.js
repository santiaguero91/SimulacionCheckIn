const connection = require("../../db");
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

  const passengers = await getPassengers(flightId); //funciona bien me trae todos los menores.
  const minors = await getMinors(flightId); //funciona bien me trae todos los menores.
  const GroupswithMinorsByPurchaseID = await findPassengerWithMinorsByPurchaseId(minors, passengers);  // funciona bien me da los grupos con menores y en rden segun su ticket de compra.
  const getGroupsWithNoMinors = await filterPassengersWithNoMinors(minors, passengers);



// GET SEATS
  const allSeats = await getSeats(flightId); //funciona bien me trae todos los asientos.
  const sortSeats = await getAvailableSeats(flightId, allSeats); 
  const sortSeats2 = await groupSeats(allSeats);  // funciona bien masomenos el ordenamiento.









res.status(200).send(minors)

};

module.exports = asignSeatToMinor;
