function solve(arr, rotations) {
    const effectiveRotations = rotations % arr.length;
    
    for (let i = 0; i < effectiveRotations; i++) {
        arr.push(arr.shift());
    }
    
    console.log(arr.join(' '));
}

solve([51, 47, 32, 61, 21], 2)