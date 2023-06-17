function assignSeats(
  allSeats,
  GroupswithMinorsByPurchaseID,
  getGroupsWithNoMinors
) {
  let availableSeats = [...allSeats];
  let seatMapping = {};

  for (let i = 0; i < GroupswithMinorsByPurchaseID.length; i++) {
    const passenger = GroupswithMinorsByPurchaseID[i];
    const seatType = passenger.seat_type_id;
    const availableSeat = availableSeats.find(
      (seat) => seat.seat_type_id === seatType
    );

    if (availableSeat) {
      passenger.seat_id = availableSeat.seat_id;

      if (!seatMapping[seatType]) {
        seatMapping[seatType] = [];
      }
      seatMapping[seatType].push(availableSeat.seat_id);

      availableSeats = availableSeats.filter(
        (seat) => seat.seat_id !== availableSeat.seat_id
      );

      if (passenger.age < 18) {
        const matchingPassenger = GroupswithMinorsByPurchaseID.find(
          (p) => p.boarding_pass_id === passenger.boarding_pass_id && p.seat_row
        );

        if (matchingPassenger) {
          passenger.seat_row = matchingPassenger.seat_row;
        }
      }
    }
  }

  const boardingPassCount = {};

  for (const passenger of getGroupsWithNoMinors) {
    const boardingPassId = passenger.boarding_pass_id;
    if (boardingPassCount[boardingPassId]) {
      boardingPassCount[boardingPassId]++;
    } else {
      boardingPassCount[boardingPassId] = 1;
    }
  }

  getGroupsWithNoMinors.sort((a, b) => {
    const countA = boardingPassCount[a.boarding_pass_id];
    const countB = boardingPassCount[b.boarding_pass_id];
    return countB - countA;
  });

  for (const passenger of getGroupsWithNoMinors) {
    const seatType = passenger.seat_type_id;
    const availableSeat = availableSeats.find(
      (seat) => seat.seat_type_id === seatType
    );

    if (availableSeat) {
      passenger.seat_id = availableSeat.seat_id;

      const boardingPassId = passenger.boarding_pass_id;
      const passengersWithSameBoardingPass = getGroupsWithNoMinors.filter(
        (p) => p.boarding_pass_id === boardingPassId && p.seat_row
      );

      if (passengersWithSameBoardingPass.length > 0) {
        const referencePassenger = passengersWithSameBoardingPass[0];
        passenger.seat_row = referencePassenger.seat_row;
        passenger.seat_column = referencePassenger.seat_column;
      }
      availableSeats = availableSeats.filter(
        (seat) => seat.seat_id !== availableSeat.seat_id
      );
    }
  }
  const combinedArray = getGroupsWithNoMinors.concat(
    GroupswithMinorsByPurchaseID
  );

  return combinedArray;
}

module.exports = assignSeats;
