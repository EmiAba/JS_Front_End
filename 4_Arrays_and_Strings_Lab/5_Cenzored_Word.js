function solve(text, word) {
    // Create a regular expression to match the word globally (all occurrences) and case insensitively
    let regex = new RegExp(word, 'gi');

    // Replace all occurrences of the word with the corresponding count of '*'
    let replacedText = text.replace(regex, match => '*'.repeat(match.length));

    // Print the modified text
    console.log(replacedText);
}

// Example usage:
solve('Find the hidden word', 'hidden');
