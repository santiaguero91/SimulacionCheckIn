require('dotenv').config();
const express = require('express')
const server = express()
const routes = require('./src/routes/index');
const {connection} = require('./db');




const PORT = process.env.PORT || 3001;

 server.listen(PORT, () => {
   console.log(`listening on port ${PORT}`)
    connection.connect((err)=>{
    if(err) console.log(err); ;
    console.log("database conected");
   }) 
 })

 server.use('/', routes);

 module.exports = connection