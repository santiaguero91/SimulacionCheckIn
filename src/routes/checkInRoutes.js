const {Router} = require("express");
const router = Router();
const checkIn = require("../controllers/checkInControllers")

router.get('/:id/passengers', checkIn);

module.exports = router;