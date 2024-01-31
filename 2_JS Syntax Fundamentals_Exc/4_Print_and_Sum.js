function solve(start, end) {
    let sum = 0;
    let output=[];
  
    for (let index = start; index <= end; index++) {
      sum += index;
  
     output.push(index);
    }


    console.log(`${output.join(' ')}`);
  
    console.log(`Sum: ${sum}`);
  }
  
solve(1,10)