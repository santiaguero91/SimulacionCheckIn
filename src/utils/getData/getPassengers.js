const getPassengers = async (flightId) => {
    const rows =   `
       SELECT *
       FROM passenger
       INNER JOIN boarding_pass 
       ON passenger.passenger_id = boarding_pass.passenger_id
       WHERE flight_id = ${flightId};
     `;
   
    return rows;
   };
   
   module.exports = getPassengers ;