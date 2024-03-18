function countWordOccurrences(input) {
    const wordsToFind = input[0].split(' ');
    const wordCounts = {};

    // Initialize counts for all words to find
    wordsToFind.forEach(word => {
        wordCounts[word] = 0;
    });

    // Count occurrences of each word
    for (let i = 1; i < input.length; i++) {
        if (wordsToFind.includes(input[i])) {
            wordCounts[input[i]] += 1;
        }
    }

    // Sort words by count in descending order
    const sortedWords = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);

    // Print results
    sortedWords.forEach(([word, count]) => {
        console.log(`${word} - ${count}`);
    });
}


function solve(input){

    const words = input
    .shift()
    .split(' ')
    .reduce((result, word)=> {
        result[word]=0;

        return result;
    }, {});
    
for (const word of input){
    if(words.hasOwnProperty(word)){
       words[word]+=1;
    }

}


    //convert to array
Object.entries(words)
.sort((a,b)=> b[1]-a[1])
.forEach(([word, occurences]) => console.log(`${word} - ${occurences}`));

 
}


solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )