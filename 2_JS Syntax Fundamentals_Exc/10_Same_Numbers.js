function checkSameDigitsAndSum(number) {
    // Convert the number to a string to access individual digits
    const digits = number.toString().split('');
    
    // Get the first digit
    const firstDigit = digits[0];
    
    // Initialize variables for sum and whether all digits are the same
    let sum = 0;
    let allSame = true;
    
    // Calculate the sum of all digits and check if all digits are the same
    for (let digit of digits) {
        sum += parseInt(digit);
        if (digit !== firstDigit) {
            allSame = false;
        }
    }
    
    // Print whether all digits are the same
    console.log(allSame);
    
    // Print the sum of all digits
    console.log(sum);
}

// Example usage:
checkSameDigitsAndSum(111); // Output: true \n 3
checkSameDigitsAndSum(123); // Output: false \n 6
checkSameDigitsAndSum(55555); // Output: true \n 25
