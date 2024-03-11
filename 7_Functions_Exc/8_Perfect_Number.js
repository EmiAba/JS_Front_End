function isPerfectNumber(number) {
    let sum = 0;

    // Find all divisors and add them
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    // Compare the sum of divisors with the original number
    if (sum === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
