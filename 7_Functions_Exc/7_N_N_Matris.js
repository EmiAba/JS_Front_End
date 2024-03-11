function printMatrix(n) {
    // Create a row string that contains n numbers separated by spaces
    const row = Array(n).fill(n).join(' ');

    // Print the row n times to form the n x n matrix
    for (let i = 0; i < n; i++) {
        console.log(row);
    }
}