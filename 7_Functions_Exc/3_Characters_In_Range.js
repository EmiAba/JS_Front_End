
function solve(firstChar, secondChar){
//find the start character
const soretdCharacters=getSortedCharacters(firstChar, secondChar);

let start=soretdCharacters[0];
let end=soretdCharacters[1];

//iterater from start to end

 const result=getCharacterBetween(start, end);
 console.log(result.join(' '));


 function getCharacterBetween(start, end){
    let characters=[];
    for (let i=start.charCodeAt(0)+1; i<end.charCodeAt(0); i++){
    characters.push(String.fromCharCode(i));
    }
     return characters;
 }

 function getSortedCharacters(a,b){
     const characters=[a,b];
     characters.sort();
     return characters;

 }








}

solve('C',
'#'
)