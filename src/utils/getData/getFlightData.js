import connection from '../../../db.js';

export const getFlightData = async (id) => {
 const [rows] = await connection.query(
  `
     SELECT flight_id, takeoff_date_time, takeoff_airport, landing_date_time, landing_airport, airplane.airplane_id
     FROM airplane
     JOIN flight ON airplane.airplane_id = flight.airplane_id
     WHERE flight.flight_id = ?;
   `,
  [id]
 );

 return rows[0];
};