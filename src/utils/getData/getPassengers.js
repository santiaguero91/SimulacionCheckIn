const connection = require("../../../db");

const getPassengers = (flightId) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `
      SELECT *
      FROM passenger
      INNER JOIN boarding_pass 
      ON passenger.passenger_id = boarding_pass.passenger_id
      WHERE flight_id = ${flightId};
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

module.exports = getPassengers;
