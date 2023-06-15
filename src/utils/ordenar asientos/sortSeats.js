const connection = require("../../../db");

const sortSeats = (flightId) => {
    return new Promise((resolve, reject) => {
        connection.query(
            `
            SELECT *
            FROM seat    
            WHERE airplane_id=${flightId}
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
   
   module.exports = sortSeats ;


   