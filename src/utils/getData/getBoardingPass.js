const getBoardingPass = (flightId) => {
    const boardingPasses =   `
       SELECT *
       FROM boarding_pass
     `;
    return boardingPasses;
   };
   
   module.exports = getBoardingPass ;