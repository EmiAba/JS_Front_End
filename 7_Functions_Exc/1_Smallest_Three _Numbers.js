function solve(a, b, c) {
    const result = smallestOfThreeNumbers([a, b, c]);
    console.log(result);

    function smallestOfThreeNumbers(numbers) {
        let minNumber = Number.MAX_SAFE_INTEGER;

        for (const number of numbers) {
            if (number < minNumber) {
                minNumber = number;
            }
        }
        return minNumber;
    }
}


solve(2,3,5);

//Math.min(a,b,c) => one solution