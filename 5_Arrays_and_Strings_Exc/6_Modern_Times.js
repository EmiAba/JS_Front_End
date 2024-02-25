function solve(input){
    const regex = /#[a-zA-Z]+/g;
    const specialWords = input.match(regex);

    if (specialWords) {
        specialWords.forEach(word => {
            const wordWithoutHash = word.slice(1); // Remove the "#" symbol
            if (/^[a-zA-Z]+$/.test(wordWithoutHash)) { // Check if word consists only of letters
                console.log(wordWithoutHash);
            }
        });
    }
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia')