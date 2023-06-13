const {Router} = require("express");
const router = Router();

router.post("/", async (req,res) => {
});


router.get("/", async(req,res) => {
    console.log("hola");
})

router.delete("/:id", async(req,res) => {
}); 

router.get("/all", async(req,res) => {
})


module.exports = router;