const {Router} = require("express");
const connection = require("../db");
const router = Router();

router.get("/", (req,res) => {
    const sql_query = `SELECT *
    FROM passenger `
    connection.query (sql_query, (err,result)=> {
       if (err) throw err;
       res.send(result);
    }
    )
  })
module.exports = router;