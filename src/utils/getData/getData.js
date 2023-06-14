const getSeats = require("./getSeats");



const getData = async (req,res) => {
    const { id } = req.params;
    try {
        const allSeats = await getSeats(id);
        res.status(200).json(allSeats);
    } catch (error) {
        res.status(400).json( {error: error.message} );
    }
};

module.exports = {
    getData
}