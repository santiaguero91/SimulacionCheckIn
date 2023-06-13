require('dotenv').config();
const morgan = require("morgan");
const cors = require('cors');
const mysql2 = require("mysql2")
const express = require('express')
const server = express()
server.use(cors());
server.use(morgan("dev"));


const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const connection = mysql2.createConnection({
   connectionLimit: 5,
   host: `${DB_HOST}`,
   database: `${DB_NAME}`,
   user: `${DB_USER}`,
   password: `${DB_PASSWORD}`,
   queueLimit: 0,
 });
 


const port = process.env.port || 3000;

 server.listen(port, () => {
   console.log(`listening on port ${port}`)
   connection.connect((err)=>{
    if(err) throw err;
    console.log("database conected");
   })
 })



 server.get("/", (req,res) => {
   const sql_query = `SELECT *
   FROM passenger `
   connection.query (sql_query, (err,result)=> {
      if (err) throw err;
      res.send(result);
   }
   )
 })