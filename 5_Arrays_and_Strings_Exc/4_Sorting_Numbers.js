function solve(numbers) {
    
  const sortedNumbers= numbers.sort((a,b)=>a-b);
  result=[];
  while(sortedNumbers.length>0){
    let firstNumber=sortedNumbers.shift();
       let lastNumbers=sortedNumbers.pop();

    result.push(firstNumber, lastNumbers);

  }

  return result;
    
    
}
 console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))

  