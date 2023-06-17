const {Router} = require("express");
const checkInController = require("../controllers/checkInController");


const router = Router();


/* router.get('/:id', asignSeatToMinor); */  //este es el bueno

router.get('/:id/passengers', checkInController);

module.exports = router;
