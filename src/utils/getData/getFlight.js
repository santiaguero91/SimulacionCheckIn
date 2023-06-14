const getFlight = (flightId) => {
  const flights = `
       SELECT *
       FROM flight
       INNER JOIN airplane 
      ON flight.airplane_id = airplane.airplane_id
     `;

  return flights;
};

module.exports = getFlight;
