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

//get passengers and group them


  const flights = await getFlight(flightId);
  const passengers = await getPassengers(flightId); //funciona bien me trae todos los menores.
  const minors = await getMinors(flightId); //funciona bien me trae todos los menores.
  const GroupswithMinorsByPurchaseID = await findPassengerWithMinorsByPurchaseId(minors, passengers);  // funciona bien me da los grupos CON menores y en rden segun su ticket de compra.
  const getGroupsWithNoMinors = await filterPassengersWithNoMinors(minors, passengers);    // funciona bien me da los grupos SIN menores y en rden segun su ticket de compra y ordenados en grupos de mas grande a mas chico.




// GET SEATS and kinda sort them out
  const allSeats = await getSeats(flightId); //funciona bien me trae todos los asientos.
  const sortSeats = await getAvailableSeats(flightId, allSeats); 
  const sortSeats2 = await groupSeats(allSeats);  // funciona bien masomenos el ordenamiento.



//assign seats 

const assignedSeats = await assignSeats(allSeats, GroupswithMinorsByPurchaseID, getGroupsWithNoMinors); //funciona bien me trae todos los asientos.




res.status(200).send(assignedSeats)

};

module.exports = asignSeatToMinor;
