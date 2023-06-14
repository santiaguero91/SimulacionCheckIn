const connection = require("../db");


export async function getPassengers(flightId) {
const rows = await pool.query(
        `
         SELECT *
         FROM passenger 
         JOIN boarding_pass ON passenger.passenger_id = boarding_pass.passenger_id 
         JOIN flight ON boarding_pass.flight_id = flight.flight_id 
         WHERE flight.flight_id = ?`,
        [flightId]
       );
      
       cachedData = rows;
       return rows;
}