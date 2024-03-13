function trackParkingLotOperations(operations) {
    const parkingLot = new Set();

    operations.forEach(operation => {
        const [direction, carNumber] = operation.split(', ');
        if (direction === "IN") {
            parkingLot.add(carNumber);
        } else if (direction === "OUT") {
            parkingLot.delete(carNumber);
        }
    });

    const sortedCarNumbers = Array.from(parkingLot).sort();
    if (sortedCarNumbers.length > 0) {
        sortedCarNumbers.forEach(carNumber => console.log(carNumber));
    } else {
        console.log("Parking Lot is Empty");
    }
}

// Example usage:
trackParkingLotOperations([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);
