const {pool} = require("../../../db");

const getSeats = (flightId) => {

  return new Promise((resolve, reject) => {
    pool.query(
      `
      SELECT *
      FROM seat
      INNER JOIN airplane 
      ON seat.airplane_id = airplane.airplane_id
      INNER JOIN flight 
      ON seat.airplane_id = flight.airplane_id
      WHERE flight.flight_id = ${flightId};
    `,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
            console.log(result.length);
          resolve(result);
        }
      }
    );
  });
};

module.exports = getSeats ;

