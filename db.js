const mysql2 = require("mysql2")
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;



const connection = mysql2.createConnection({
  connectionLimit: 5,
  host: `${DB_HOST}`,
  database: `${DB_NAME}`,
  user: `${DB_USER}`,
  password: `${DB_PASSWORD}`,
  queueLimit: 0,
});

module.exports = connection;
