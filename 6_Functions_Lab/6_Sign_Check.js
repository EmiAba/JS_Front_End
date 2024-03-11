function checkMultiplicationSign(numOne, numTwo, numThree) {
    let negativeCount = 0;
    
    // Check each number and count how many are negative
    if (numOne < 0) negativeCount++;
    if (numTwo < 0) negativeCount++;
    if (numThree < 0) negativeCount++;
    
    // If the count of negative numbers is even (including zero), the result is positive
    if (negativeCount % 2 === 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}


