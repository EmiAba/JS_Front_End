function solve(numOne, numTwo, operator){
    let result=simpleCalculator(numOne, numTwo, operator);

    console.log(result);


    function simpleCalculator(numOne, numTwo, operator){
 let calc;

 switch(operator){
    case "multiply":
        return numOne*numTwo;

        case "divide":
            return numOne/numTwo;
            case 'add':
                return numOne+numTwo;
                case "subtract":
                    return numOne-numTwo;
 }



    }
}
solve(5,
    5,
    'multiply')