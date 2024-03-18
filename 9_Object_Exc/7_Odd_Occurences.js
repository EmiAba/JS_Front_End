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
