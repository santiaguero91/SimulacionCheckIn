

function findPassengerWithMinorsByPurchaseId(minors, passengers) {
  const purchaseIds = minors.map(minor => minor.purchase_id);
  const matchingPassengers = passengers.filter(passenger => purchaseIds.includes(passenger.purchase_id));
  matchingPassengers.sort(function(a, b) {
    return a.purchase_id - b.purchase_id;
  });
  return matchingPassengers;
}

function filterPassengersWithNoMinors(minors, passengers) {
  const minorPurchaseIds = minors.map((minor) => minor.purchase_id);
  const idCounts = {};
  passengers.forEach((passenger) => {
    if (!minorPurchaseIds.includes(passenger.purchase_id)) {
      idCounts[passenger.purchase_id] = (idCounts[passenger.purchase_id] || 0) + 1;
    }
  });

  return passengers
    .filter((passenger) => !minorPurchaseIds.includes(passenger.purchase_id))
    .sort((a, b) => idCounts[b.purchase_id] - idCounts[a.purchase_id]);
}


   module.exports = {findPassengerWithMinorsByPurchaseId, filterPassengersWithNoMinors};