function combineAndPrintDefinitions(jsonStrings) {
    const dictionary = {};

    jsonStrings.forEach(jsonStr => {
        const obj = JSON.parse(jsonStr);
        for (let term in obj) {
            dictionary[term] = obj[term]; // This will overwrite any existing term with a new definition
        }
    });

    // Sorting terms alphabetically and printing each term with its definition
    Object.keys(dictionary)
        .sort()
        .forEach(term => {
            console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
        });
}

function solve(input){
const dictionary={};

const words=input.map(JSON.parse);

for (const wordObj of words) {
//take the key
    const word=Object.keys(wordObj)[0];
    dictionary[word]=wordObj[word];
  
   
}

Object.entries(dictionary)
.sort((a,b)=> a[0].localeCompare(b[0]))
.forEach(([term, desctription])=> console.log(`Term: ${term} => Definition: ${desctription}`));


}



// Example usage:
solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);
