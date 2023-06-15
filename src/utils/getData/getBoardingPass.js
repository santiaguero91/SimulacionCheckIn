const getBoardingPass = (flightId) => {
    const boardingPasses =   `
       SELECT *
       FROM boarding_pass
       INNER JOIN flight 
       ON boarding_pass.flight_id = flight.flight_id
       INNER JOIN passenger 
       ON boarding_pass.passenger_id = passenger.passenger_id
     `;
    return boardingPasses;
   };
   
   module.exports = getBoardingPass ;

