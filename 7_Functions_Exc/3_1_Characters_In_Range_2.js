function solve(firstChar, secondChar){
    // Find the start character
    const sortedCharacters = getSortedCharacters(firstChar, secondChar);

    let start = sortedCharacters[0];
    let end = sortedCharacters[1];

    // Iterate from start to end
    const result = getCharacterBetween(start, end);
    console.log(result.join(' '));

    function getCharacterBetween(start, end){
        let characters = [];
        // Start from the next character of 'start'
        for (let i = start.charCodeAt(0) + 1; i < end.charCodeAt(0); i++){
            characters.push(String.fromCharCode(i));
        }
        return characters;
    }

    function getSortedCharacters(a, b){
        return [a, b].sort();
    }
}
