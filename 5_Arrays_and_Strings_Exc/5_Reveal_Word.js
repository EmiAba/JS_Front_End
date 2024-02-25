function solve(wordsString, templateString) {
    // Split the wordsString into an array of words
    const words = wordsString.split(', ');

    // Split the templateString into an array of words and symbols
    const templateParts = templateString.split(' ');

    // Replace '*' in the template with words of the same length
    const replacedParts = templateParts.map(part => {
        if (part.includes('*')) {
            const length = part.length;
            const matchingWord = words.find(word => word.length === length);
            return matchingWord ? matchingWord : part;
        }
        return part;
    });

    // Join the replaced parts to form the final string
    const result = replacedParts.join(' ');

    console.log(result);
}
solve('great',
'softuni is ***** place for learning new programming languages'
)

