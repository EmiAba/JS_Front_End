function checkForWord(word, text) {
    word = word.toLowerCase();
    text = text.toLowerCase();

    const words = text.split(' ');

    for (let i = 0; i < words.length; i++) {
        if (words[i] === word) {
            console.log(word);
            return; // Stop the program after finding the word
        }
    }

    console.log(`${word} not found!`);
}


checkForWord('javascript',
'JavaScript is the best programming language'
);
