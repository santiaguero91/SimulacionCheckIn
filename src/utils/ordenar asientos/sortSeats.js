const connection = require("../../../db");
const getPassengers = require("../getData/getPassengers");

const sortSeats = (flightId) => {
    return new Promise((resolve, reject) => {
        connection.query(
            `
            SELECT *
            FROM seat    
            WHERE airplane_id=${flightId}
          `,
          (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
   };

   
   function sortSeatsByRow(seatsArray) {
    return seatsArray.sort((a, b) => a.seat_row - b.seat_row);
  }

   const sortSeatsToPassengers = async (flightId) => {
    const getSeatColumn = await sortSeats(flightId);
    let allPassenger = await getPassengers(flightId);
    let sortedSeats = sortSeatsByRow(getSeatColumn);
  
    let seatTypeIds = [...new Set(allPassenger.map(passenger => passenger.seat_type_id))]
  
    seatTypeIds.forEach(type => {
      let filteredSeats = sortedSeats.filter(seat => seat.seat_type_id === type);
      let matchingPassengers = allPassenger.filter(passenger => passenger.seat_type_id === type && passenger.seat_id === null);
      matchingPassengers.forEach((passenger, index) => {
        passenger.seat_id = filteredSeats[index].seat_id;
      });
        return matchingPassengers ;
    });
   };

   
   module.exports = {sortSeats, sortSeatsToPassengers};


   