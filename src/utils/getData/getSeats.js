
const getSeats = (flightId) => {
 const rows =   `
    SELECT *
    FROM seat
    WHERE airplane_id = ${flightId};
  `;

 return rows;
};

module.exports = getSeats ;