const connection = require('../../../db');

function makeConection() {
    connection.end((err)=>{
        if(err) console.log(err); ;
        console.log("database disconected");
       })
connection.connect((err)=>{
    if(err) console.log(err); ;
    console.log("database conected");
   })
   setTimeout(endConection, 2000);
}

function endConection() {
    console.log("alo");

}

module.exports = {makeConection,endConection} ;
