const mysql2 = require("mysql2")
const { createPool } = require ('mysql2/promise');


const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const connection = mysql2.createConnection({
   connectionLimit: 5,
   host: `${DB_HOST}`,
   database: `${DB_NAME}`,
   user: `${DB_USER}`,
   password: `${DB_PASSWORD}`,
   queueLimit: 0,
 });

const pool = mysql2.createPool({
  host: `${DB_HOST}`,
   database: `${DB_NAME}`,
   user: `${DB_USER}`,
   password: `${DB_PASSWORD}`,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

 module.exports = {connection,pool}

