function solve(names){
    // Step 1: Sort names in ascending alphabetical order
    names.sort((a, b) => a.localeCompare(b));

    // Step 2 & 3: Transform into a numbered list and join with newline
    let numberedNames = names.map((name, index) => `${index + 1}.${name}`).join('\n');
    
 

 console.log(numberedNames);
    
}

solve(["John", "Bob", "Christina", "Ema"]);