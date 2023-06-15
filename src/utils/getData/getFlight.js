const connection = require("../../../db");

const getFlight = async (flightId) => {
  const flights = `
       SELECT *
       FROM flight
      WHERE flight_id=${flightId}
     `;

  connection.query(flights, (err, result) => {
    return result;
  });
};

module.exports = getFlight;
