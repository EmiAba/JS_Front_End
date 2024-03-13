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


