require("dotenv").config();
const mysql = require("promise-mysql");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const connection = mysql.createPool({
  connectionLimit: 5,
  host: `${DB_HOST}`,
  database: `${DB_NAME}`,
  user: `${DB_USER}`,
  password: `${DB_PASSWORD}`,
  queueLimit: 0,
  waitForConnection: true,
});
const getConnection = () => {
  return connection;
};

module.exports = {
  getConnection,
};
