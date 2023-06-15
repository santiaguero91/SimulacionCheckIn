const connection = require("../../../db");

const getPurchase = (flightId) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `
      SELECT *
            FROM boarding_pass
            INNER JOIN purchase 
            ON boarding_pass.purchase_id = purchase.purchase_id
            INNER JOIN passenger 
            ON boarding_pass.passenger_id = passenger.passenger_id
            WHERE boarding_pass.flight_id = ${flightId}
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
   
   module.exports = getPurchase ;

   

   