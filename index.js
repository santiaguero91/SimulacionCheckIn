require('dotenv').config();
const express = require('express')
const server = express()
const routes = require('./src/index');
const connection = require('./db');




const port = process.env.port || 3000;

 server.listen(port, () => {
   console.log(`listening on port ${port}`)
   connection.connect((err)=>{
    if(err) console.log(err); ;
    console.log("database conected");
   })
 })

 server.use('/', routes);

 module.exports = connection