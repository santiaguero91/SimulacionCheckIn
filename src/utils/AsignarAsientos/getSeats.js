const connection = require("../../../db");

  function assignSeats(sortSeats2, GroupswithMinorsByPurchaseID, getGroupsWithNoMinors) {
    // Create a copy of the sortSeats2 array to track the available seats
    let availableSeats = [...sortSeats2];
  
    // Create a mapping object to store the assigned seat_id for each seat_type_id
    let seatMapping = {};
  
    // Iterate over GroupswithMinorsByPurchaseID array
    for (let i = 0; i < GroupswithMinorsByPurchaseID.length; i++) {
      const passenger = GroupswithMinorsByPurchaseID[i];
      const seatType = passenger.seat_type_id;
  
      // Find an available seat with the same seat_type_id
      const availableSeat = availableSeats.find(seat => seat.seat_type_id === seatType);
  
      if (availableSeat) {
        // Assign the seat_id to the passenger
        passenger.seat_id = availableSeat.seat_id;
  
        // Update the seatMapping object
        if (!seatMapping[seatType]) {
          seatMapping[seatType] = [];
        }
        seatMapping[seatType].push(availableSeat.seat_id);
  
        // Remove the assigned seat from availableSeats
        availableSeats = availableSeats.filter(seat => seat.seat_id !== availableSeat.seat_id);
  
        // If the passenger's age is less than 18, find a matching boarding_pass_id and assign the same seat_row
        if (passenger.age < 18) {
          const matchingPassenger = GroupswithMinorsByPurchaseID.find(
            p => p.boarding_pass_id === passenger.boarding_pass_id && p.seat_row
          );
  
          if (matchingPassenger) {
            passenger.seat_row = matchingPassenger.seat_row;
          }
        }
      }
    }

// AssignSeats to those without children 

const boardingPassCount = {};


for (const passenger of getGroupsWithNoMinors) {
  const boardingPassId = passenger.boarding_pass_id;
  if (boardingPassCount[boardingPassId]) {
    boardingPassCount[boardingPassId]++;
  } else {
    boardingPassCount[boardingPassId] = 1;
  }
}

// Sort the passengers based on the count of repeated boarding_pass_id
getGroupsWithNoMinors.sort((a, b) => {
  const countA = boardingPassCount[a.boarding_pass_id];
  const countB = boardingPassCount[b.boarding_pass_id];
  return countB - countA; // Descending order
})


// Assign seats to passengers
for (const passenger of getGroupsWithNoMinors) {
  const seatType = passenger.seat_type_id;

  // Find an available seat with the same seat_type_id
  const availableSeat = availableSeats.find(seat => seat.seat_type_id === seatType);

  if (availableSeat) {
    // Assign the seat_id to the passenger
    passenger.seat_id = availableSeat.seat_id;

    // Update the seat_row or seat_column based on boarding_pass_id
    const boardingPassId = passenger.boarding_pass_id;
    const passengersWithSameBoardingPass = getGroupsWithNoMinors.filter(
      p => p.boarding_pass_id === boardingPassId && p.seat_row
    );

    if (passengersWithSameBoardingPass.length > 0) {
      const referencePassenger = passengersWithSameBoardingPass[0];
      passenger.seat_row = referencePassenger.seat_row;
      passenger.seat_column = referencePassenger.seat_column;
    }

    // Remove the assigned seat from availableSeats
    availableSeats = availableSeats.filter(seat => seat.seat_id !== availableSeat.seat_id);
  }
}
  

const combinedArray = getGroupsWithNoMinors.concat(GroupswithMinorsByPurchaseID);

return combinedArray;







};

module.exports = assignSeats ;

