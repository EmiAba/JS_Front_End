<<<<<<< HEAD
function extractOddOccurrenceWords(sentence) {
    // Convert the sentence to lowercase and split into words
    const words = sentence.toLowerCase().split(' ');
    const wordCounts = {};

    // Count occurrences of each word
    words.forEach(word => {
        if (wordCounts[word]) {
            wordCounts[word] += 1;
        } else {
            wordCounts[word] = 1;
        }
    });

    // Find words that appear an odd number of times
    const oddOccurrenceWords = Object.keys(wordCounts).filter(word => wordCounts[word] % 2 !== 0);

    // Print the result
    console.log(oddOccurrenceWords.join(' '));
}

// Example usage
extractOddOccurrenceWords('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
=======
function solve(input) {
    const words = input.split(' ');
    const wordOccurances = {};

    for (const word of words) {
        if (!wordOccurances.hasOwnProperty(word.toLowerCase())) {
            wordOccurances[word.toLowerCase()] = 0;
        }

        wordOccurances[word.toLowerCase()]++;
    }

    const result = [];
    for (const word in wordOccurances) {
        if (wordOccurances[word] % 2 !== 0) {
            result.push(word);
        }
    }

    console.log(result.join(' '));
}


function fancySolve(input){


 const occurances= input
    .split(' ')
    .reduce((acc, word)=> 
            acc.hasOwnProperty(word.toLowerCase())
            ? {...acc, [word.toLowerCase()]:acc[word.toLowerCase()]+1 }
            : {...acc, [word.toLowerCase()]:1}


    , {});

 const result= Object.entries(occurances)
 .filter(([word, count])=> count%2!==0)
 .map(([word, count])=>word)
 .join(' ');

 
 console.log((result));

}



fancySolve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
>>>>>>> 612f1053e9f80acf7579ffa4fe535d5a3c8f2063
