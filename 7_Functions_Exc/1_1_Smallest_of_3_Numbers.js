function solve(a, b, c){

    const getLowestOfTwo = (x, y) => x < y ? x : y; 

    
    const result = getLowestOfTwo(a, getLowestOfTwo(b, c));
    console.log(result);
}

solve(2,3,5)