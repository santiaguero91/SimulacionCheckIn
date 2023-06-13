const { Router} = require("express")
const router = Router()
const bodyparser = require('body-parser');
const markers = require("./routes/markers")


router.use(bodyparser.json());
router.use("/markers", markers)



module.exports = router;