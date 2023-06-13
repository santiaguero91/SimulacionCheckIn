const { Router} = require("express")
const router = Router()
const bodyparser = require('body-parser');
const checkInRoutes = require("./routes/checkInRoutes")
const  { createPool } = require('mysql2/promise');

require('dotenv').config();
const mysql = require("promise-mysql")

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;



const pool = createPool({
    database: DB_NAME,
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    ssl: {
     rejectUnauthorized: false,
    },
   });


 async function getPassengers(flightId) {
 const rows = await pool.query(
    `
     SELECT passenger.passenger_id, dni, name, age, country, boarding_pass_id, purchase_id, seat_type_id, seat_id
     FROM passenger 
     JOIN boarding_pass ON passenger.passenger_id = boarding_pass.passenger_id 
     JOIN flight ON boarding_pass.flight_id = flight.flight_id 
     WHERE flight.flight_id = ?`,
    [flightId]
   );
  
   cachedData = rows;
   return rows;
  }


router.use(bodyparser.json());
router.use("/", getPassengers)



module.exports = router;