function solve(numbers) {
    
  const sortedNumbers= numbers.sort((a,b)=>a-b);
  result=[];
  while(sortedNumbers.length>0){
    let firstNumber=sortedNumbers.shift();
       let lastNumber=sortedNumbers.pop();

    result.push(firstNumber);
    //the edge case uneven array
    if(lastNumber){
        result.push(lastNumber);
    }

  }

  return result;
    
    
}
 console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))

  