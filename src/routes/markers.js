const {Router} = require("express");
const {marker} = require("../../db");
const router = Router();
const adressPoints = require("../data2")

router.post("/", async (req,res) => {
    let {
        name,
        latitude,
        longitude,
        img,
        link,
        tipo
   } = req.body;
   let markerCreated = await marker.create({
    name,
    latitude,
    longitude,
    img,
    link,
    tipo
});
res.status(200).send(markerCreated)
})


router.get("/", async(req,res) => {
    try {
    const name = req.query.name
    let markersTotal = await marker.findAll();
    if(name){
        let markerName = await markersTotal.filter(el =>el.name.toLowerCase().includes(name.toLowerCase()))
        markerName.length ?
        res.status(200).send(markerName):
        res.status(404).send("Can't find such marker")
    } else{
        res.status(200).send(markersTotal)
    }
} catch (error) {
    console.log(error)
}
})

router.delete("/:id", async(req,res) => {
    const {id} = req.params;
    try {
    if(id){
        marker.destroy(
        { where: { id: id }
        });
        res.status(200).send("marker deleted")
    } else{
        res.status(404).send("Can't find such marker")
    }
} catch (error) {
    console.log(error)
}
}); 

router.get("/all", async(req,res) => {
    let markersToAdd = adressPoints
    markersToAdd.map((el)=>{
        marker.create({
            name: el[2],
            latitude:el[0],
            longitude:el[1],
            tipo:el[3]
        });
    })
res.status(200).send("datos  default creados con exito")
})


module.exports = router;