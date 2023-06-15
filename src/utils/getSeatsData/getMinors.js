const connection = require("../../../db");

const getMinors = (flightId) => {
    return new Promise((resolve, reject) => {
        connection.query(
            `
            SELECT *
            FROM boarding_pass
            INNER JOIN flight 
            ON boarding_pass.flight_id = flight.flight_id
            INNER JOIN passenger 
            ON boarding_pass.passenger_id = passenger.passenger_id
            WHERE age < 18 AND flight.flight_id = ${flightId}
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
   
   module.exports = getMinors ;


