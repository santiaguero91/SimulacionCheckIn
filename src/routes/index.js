const {Router} = require("express");
const checkIn = require("../controllers/checkInController");


const router = Router();


router.get('/:id', checkIn);

module.exports = router;
