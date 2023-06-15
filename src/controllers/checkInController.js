const connection = require("../../db");
const getSeats = require("../utils/getData/getSeats");
const getBoardingPass = require("../utils/getData/getBoardingPass");
const getFlight = require("../utils/getData/getFlight");
const getPassengers = require("../utils/getData/getPassengers");


const checkIn =  async (req, res) => {
    const { id } = req.params;
    const flightId = parseInt(id);


     const allFlights = await getFlight(flightId);
     const allPassenger = await getPassengers(flightId);
     console.log(allFlights);


     
     const allSeats = getSeats(flightId);
     const allBoardingPasses = getBoardingPass(flightId);
/*     const sql_query = `SELECT * FROM boarding_pass 
    INNER JOIN passenger 
    ON boarding_pass.passenger_id = passenger.passenger_id
    INNER JOIN purchase 
    ON boarding_pass.purchase_id = purchase.purchase_id
    INNER JOIN seat 
    ON boarding_pass.seat_id = seat.seat_id
    INNER JOIN seat_type 
    ON boarding_pass.seat_type_id = seat_type.seat_type_id
    INNER JOIN flight 
    ON boarding_pass.flight_id = flight.flight_id
    INNER JOIN airplane 
    ON seat.airplane_id = airplane.airplane_id
    ;   
` */


    connection.query (allPassenger, async (err,result)=> {
       if (err) throw err;
       res.send(result);
    }
    )
  };

  module.exports = checkIn;