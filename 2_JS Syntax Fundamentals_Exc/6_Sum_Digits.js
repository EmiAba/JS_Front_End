function sumOfDigits(number) {

    const digits = number.toString().split('');
    

    let sum = 0;
    

    for (let digit of digits) {   
        
        // Convert each digit back to a number before adding it to the sum
        const digitValue = parseInt(digit);
   
        sum += digitValue;
    }
    

    console.log(`${sum}`);
   
}

// Example usage:
sumOfDigits(123); // Output: The sum of digits of 123 is: 6
sumOfDigits(4567); // Output: The sum of digits of 4567 is: 22
sumOfDigits(987654321); // Output: The sum of digits of 987654321 is: 45
