function solve(number){
const result = sumEvenOddDigits(number);
console.log(result); 
function sumEvenOddDigits(number) {
    // Convert the number to a string to easily iterate over each digit
    const digits = number.toString().split('');

    // Initialize sums for even and odd digits
    let sumEven = 0;
    let sumOdd = 0;

    // Iterate over each digit to separate and sum even and odd digits
    digits.forEach(digit => {
        const num = parseInt(digit, 10); // Convert digit back to number
        if (num % 2 === 0) {
            // If the digit is even, add it to the sum of even digits
            sumEven += num;
        } else {
            // If the digit is odd, add it to the sum of odd digits
            sumOdd += num;
        }
    });

    // Return an object with both sums
    return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;
}

    
}
solve(1000435)