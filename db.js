require('dotenv').config();
const { Sequelize} = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const marker = require('./src/models/Markers');

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   { logging: false, native: false }
);
marker(sequelize);


module.exports = {
   ...sequelize.models,
   sequelize,
};