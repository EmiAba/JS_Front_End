function math(firstNum, secondNum, operation) {
    let result = 0;

    switch (operation) {
        case "+":
            result = firstNum + secondNum;
            break;
        case "-":
            result = firstNum - secondNum;
            break;
        case "*":
            result = firstNum * secondNum;
            break;
        case "/":
            result = firstNum / secondNum;
            break;
        case '%':
            result = firstNum % secondNum;
            break;
        case "**":
            result = firstNum ** secondNum;
            break;
        default:
            console.log(`Invalid operation`);
            return;  // Exit the function if the operation is not recognized
    }

    console.log(result);
}

math(5, 6, "+");
