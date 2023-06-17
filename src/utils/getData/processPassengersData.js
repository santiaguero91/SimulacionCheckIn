
function processPassengersData(passengersAssignedSeats) {
const passengers = passengersAssignedSeats.map(pass => {
    return {
    passengerId : pass.passenger_id,
    dni : pass.dni, 
    name : pass.name,
    age : pass.age,
    country : pass.country,
    boardingPassId: pass.boarding_pass_id,
    purchaseId : pass.purchase_id,
    seatTypeId : pass.seat_type_id,
    seatId : pass.seat_id
};
})
return passengers

}
module.exports = processPassengersData;