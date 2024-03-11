function solve(number){
  const evenSum = calculateDigitsSum(number, x=>x%2===0);
  const oddSum=calculateDigitsSum(number, x=>x%2!==0);

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);


  function calculateDigitsSum(number, filter){
    
    //get digit array
  const digits=  number
  .toString()
  .split('')
   .map(digit=>Number(digit))
   .filter(filter);

    //calculate sum
    const sum=digits.reduce((acc,digit)=>acc+digit,0);
  return sum;


}


}
solve(1000435);