const connection = require("../../../db");


const getSeats = (id) => {
 const rows = connection.query(
  `
    SELECT *
    FROM seat
    WHERE airplane_id = ${id};
  `
 );

 return rows;
};

module.exports = getSeats ;