function solve(input) {
  let message = input.shift();

  const takeEven = (message) => {
    let result = message
      .split("")
      .filter((_, i) => i % 2 == 0)
      .join("");
    console.log(result);
    return result;
  };

  const changeAll = (message, substring, replacement) => {
    let result = message;
    while (result.includes(substring)) {
      result = result.replace(substring, replacement);
    }
    console.log(result);
    return result;
  };

  const reverse = (message, substring) => {
    if (!message.includes(substring)) {
      console.log("error");
      return message;
    }
    result = message.replace(substring, "");
    result += substring.split("").reverse().join("");

    console.log(result);
    return result;

    // return message;
  };

  let line = input.shift();

  while (line != "Buy") {
    const [command, substring, replacement] = line.split("?");

    switch (command) {
      case "TakeEven":
        message = takeEven(message);

        break;
      case "ChangeAll":
        message = changeAll(message, substring, replacement);

        break;
      case "Reverse":
        message = reverse(message, substring);

        break;
    }

    line = input.shift();
  }

  console.log(`The cryptocurrency is: ${message}`);
}

solve([
  "z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",
  "TakeEven",
  "Reverse?!nzahc",
  "ChangeAll?m?g",
  "Reverse?adshk",
  "ChangeAll?z?i",
  "Buy",
]);

// function decodeCryptocurrencyInfo(input) {
//     let message = input.shift(); // Remove the first element, which is the encoded message

//     // Function to only take characters at even indices
//     function takeEven(str) {
//         return str.split('').filter((_, index) => index % 2 === 0).join('');
//     }

//     // Function to change all occurrences of a substring
//     function changeAll(str, substring, replacement) {
//         return str.split(substring).join(replacement);
//     }

//     // Function to reverse the first occurrence of a substring and append it to the end
//     function reverse(str, substring) {
//         const startIndex = str.indexOf(substring);
//         if (startIndex === -1) {
//             console.log("error");
//             return str; // Return the original string if substring is not found, but after logging "error"
//         }
//         const endIndex = startIndex + substring.length;
//         const reversedSubstring = str.substring(startIndex, endIndex).split('').reverse().join('');
//         const newStr = str.substring(0, startIndex) + str.substring(endIndex) + reversedSubstring;
//         console.log(newStr); // Print updated message after reverse operation
//         return newStr;
//     }

//     for (const commandString of input) {
//         if (commandString === "Buy") break; // Stop processing if "Buy" command is encountered

//         const [command, ...args] = commandString.split('?');

//         switch (command) {
//             case "TakeEven":
//                 message = takeEven(message);
//                 console.log(message);
//                 break;
//             case "ChangeAll":
//                 message = changeAll(message, args[0], args[1]);
//                 console.log(message);
//                 break;
//             case "Reverse":
//                 if (message.includes(args[0])) {
//                     message = reverse(message, args[0]);
//                 } else {
//                     console.log("error"); // Print "error" if the substring isn't found
//                 }
//                 break;
//         }
//     }

//     console.log(`The cryptocurrency is: ${message}`);
// }
