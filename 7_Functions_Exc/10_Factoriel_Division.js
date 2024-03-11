function factorialDivision(num1, num2) {
    // Calculate factorial of a number
    function factorial(n) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    // Calculate the factorials
    const factorial1 = factorial(num1);
    const factorial2 = factorial(num2);

    // Divide the first factorial by the second
    const divisionResult = factorial1 / factorial2;

    // Print the result formatted to two decimal places
    console.log(divisionResult.toFixed(2));
}
