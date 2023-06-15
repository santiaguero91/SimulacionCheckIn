const connection = require("../../../db");

const getSeats = (flightId) => {

  return new Promise((resolve, reject) => {
    connection.query(
      `
      SELECT *
      FROM seat
      INNER JOIN airplane 
      ON seat.airplane_id = airplane.airplane_id
      WHERE seat.airplane_id = ${flightId};
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

