const express = require('express')
const server = express()
const port = 3001
const router = require("./src/serverIndex")
const {sequelize} = require("./db")
const cors = require('cors');


server.use(cors());
server.use(router)


sequelize.sync({ force: true }).then(()=>
server.listen(port, () => {
  console.log(`listening on port ${port}`)
})
)