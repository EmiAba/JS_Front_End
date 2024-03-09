function solve(text, count){
    result=RepeatString(text, count);
    console.log(result);


    function RepeatString(text, count){
        let repeatedString=[];
        for (let index = 0; index <count; index++) {
            repeatedString+=text;
            
        }
        return repeatedString;
    }
}
solve("Sring", 3)