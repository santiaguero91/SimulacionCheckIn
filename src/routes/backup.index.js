const {Router} = require("express");
const connection = require("../../db");

const router = Router();

router.get("/:id", (req,res) => {
  const { id } = req.params;

    const sql_query = `SELECT * FROM boarding_pass 
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
`


    connection.query (sql_query, (err,result)=> {
      console.log(sql_query.length);
       if (err) throw err;
       res.send(result);
    }
    )
  })
module.exports = router;