function solve(arr) {
    // Step 1: Sort the array in ascending order
    arr.sort((a, b) => a - b);
    
    let start = 0; // Start pointer
    let end = arr.length - 1; // End pointer
    
    // Alternate between largest and smallest, starting with the largest
    while (start <= end) {
        if (start !== end) {
            console.log(arr[start++]); //Print the smallest (next) element
        }
        console.log(arr[end--]); // 
    }
}
  solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])

  