function checkDistanceValidity(x1, y1, x2, y2) {
    const calculateDistance = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    const isValid = (distance) => Number.isInteger(distance) ? 'valid' : 'invalid';

    const distance1 = calculateDistance(x1, y1, 0, 0);
    const distance2 = calculateDistance(x2, y2, 0, 0);
    const distance3 = calculateDistance(x1, y1, x2, y2);

    console.log(`{${x1}, ${y1}} to {0, 0} is ${isValid(distance1)}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${isValid(distance2)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid(distance3)}`);
}

// Example usage:
checkDistanceValidity(3, 0, 0, 4);


