function CookingByNumbers(number, ...operations) {
    // Parse the initial number to a float
    let result = parseFloat(number);

    // Perform each operation sequentially
    for (let operation of operations) {
        switch (operation) {
            case 'chop':
                result /= 2;
                break;
            case 'dice':
                result = Math.sqrt(result);
                break;
            case 'spice':
                result += 1;
                break;
            case 'bake':
                result *= 3;
                break;
            case 'fillet':
                result *= 0.8; // Subtracting 20% is equivalent to multiplying by 0.8
                break;
            default:
                console.log(`Unknown operation: ${operation}`);
                break;
        }
        // Print the result of the operation
        console.log(result);
}
    }
   




// Example usage:
//CookingByNumbers('9', ['chop', 'dice', 'spice', 'bake', 'fillet']);

CookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')