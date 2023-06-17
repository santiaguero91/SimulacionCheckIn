const {Router} = require("express");
const checkIn = require("../controllers/checkInController");
const asignSeatToMinor = require("../controllers/asignSeatToMinor");


const router = Router();


/* router.get('/:id', asignSeatToMinor); */  //este es el bueno

router.get('/:id', asignSeatToMinor);

module.exports = router;
