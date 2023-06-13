const {Router} = require("express");
const {marker} = require("../../db");
const router = Router();
const adressPoints = require("../data2")

router.post("/", async (req,res) => {
});


router.get("/", async(req,res) => {
})

router.delete("/:id", async(req,res) => {
}); 

router.get("/all", async(req,res) => {
})


module.exports = router;