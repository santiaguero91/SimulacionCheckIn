const connection = require("../../../db");

const getFlight = (flightId) => {
  return new Promise((resolve, reject) => {
    connection.query(`
      SELECT *
      FROM flight
      WHERE flight_id=${flightId}
    `, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = getFlight;
