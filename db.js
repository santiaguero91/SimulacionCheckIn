require('dotenv').config();
const morgan = require("morgan");
const cors = require('cors');
const mysql2 = require("mysql2")
const express = require('express')
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const connection = mysql2.createConnection({
   connectionLimit: 5,
   host: `${DB_HOST}`,
   database: `${DB_NAME}`,
   user: `${DB_USER}`,
   password: `${DB_PASSWORD}`,
   queueLimit: 0,
   waitForConnection: true
 });
 
 server.use(cors());
 server.use(morgan("dev"));


const server = express()
const port = process.env.port || 3000;

 server.listen(port, () => {
   console.log(`listening on port ${port}`)
 })


 server.use("/all", (req,res) => {
   const sql_query = `SELECT passenger.passenger_id, dni, name, age, country, boarding_pass_id, purchase_id, seat_type_id, seat_id
   FROM passenger `
   connection.query (sql, (err,result)=> {
      if (err) throw err;
      res.send(result);
   }
   )
 })