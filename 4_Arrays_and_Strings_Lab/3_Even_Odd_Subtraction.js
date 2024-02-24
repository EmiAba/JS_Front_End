function solve(arr) {
  let sumEven = 0;
  let summOdd = 0;
  let difference = 0;

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    if (element % 2 === 0) {
      sumEven += element;
    } else {
      summOdd += element;
    }
  }
  difference = sumEven - summOdd;
  console.log(difference);
}

solve([3,5,7,9])