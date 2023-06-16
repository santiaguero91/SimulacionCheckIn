const getPassengers = require("../getData/getPassengers");


const getTakenSeats = async (flightId) => {
    const passengerGroups = await getPassengers(flightId);
   
    const takenSeats = [];
   
    passengerGroups.forEach((passenger) => {
     if (passenger.seat_id !== null) {
      takenSeats.push(passenger.seat_id);
     }
    });
   
    return takenSeats;
   };

// esta funcion es llamada desde controller/asignSeatToMinor   y recibe la lista de asientos. 
const getAvailableSeats = async (flightId, seats) => {
    let takenSeats = [];
   
    takenSeats = await getTakenSeats(flightId);
   
    const availableSeats = seats
     .map((seat) => seat.seat_id)
     .filter((seat) => !takenSeats.includes(seat));
   
    const getSeatObjects = seats.filter((seat) =>
     availableSeats.includes(seat.seat_id)
    );
   
    const sortedSeats = getSeatObjects.sort((a, b) => {
     if (a.seat_row !== b.seat_row) {
      return a.seat_row - b.seat_row;
     } else {
      return a.seat_column.localeCompare(b.seat_column);
     }
    });
   
    return sortedSeats;
   };

   module.exports = getAvailableSeats;
