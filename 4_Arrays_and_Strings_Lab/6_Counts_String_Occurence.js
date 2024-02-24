function countAndPrintOccurrences(text, word) {
    // Create a regular expression to match the word globally (all occurrences) and case insensitively
    let regex = new RegExp('\\b' + word + '\\b', 'gi');

    // Use match method to find all occurrences of the word in the text
    let matches = text.match(regex);

    // If matches found, return the count, otherwise return 0
    let occurrences = matches ? matches.length : 0;

    // Print the number of occurrences
    console.log(occurrences);
}

