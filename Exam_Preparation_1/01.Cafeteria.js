function solve(input){

    const baristaCount = Number(input.shift());
    const team = {};
     // Prepare team
     for (let i = 0; i < baristaCount; i++) {
        const [name, shift, coffeeTypes] = input[i].split(' ');
        team[name] = {
            shift,
            coffeeTypes: coffeeTypes.split(','),
        };
    }


  console.log(team);

    //execute commands
    let commandLine=input.shift();
    while(commandLine!='Closed'){
 let [command, name, fisrst] =commandLine.split(' / ');

        commandLine=input.shift();

    }
       
       
    }



    //execute commands





//2 approach
// function cafeteria(input) {
//     let baristas = [];
  
//     let currentIndex = 1;
//     const n = Number(input[0]);
  
//     while (currentIndex <= n) {
//       const [name, shift, coffeeTypes] = input[currentIndex].split(' ');
//       baristas.push({ name, shift, coffeeTypes: coffeeTypes.split(',') });
//       currentIndex++;
//     }
  
//     function findBarista(name) {
//       return baristas.find(barista => barista.name === name);
//     }
  
  
  
//     while (input[currentIndex] !== 'Closed') {
//       const [action, baristaName, parameter1, parameter2] = input[currentIndex].split(' / ');
  
//       if (action === 'Prepare') {
//         const shift = parameter1;
//         const coffeeType = parameter2;
//         const barista = findBarista(baristaName);
//         if (barista && barista.shift === shift && barista.coffeeTypes.includes(coffeeType)) {
//           console.log(`${barista.name} has prepared a ${coffeeType} for you!`);
//         } else {
//           console.log(`${baristaName} is not available to prepare a ${coffeeType}.`);
//         }
//       } else if (action === 'Change Shift') {
//         const newShift = parameter1;
//         const baristaToUpdate = findBarista(baristaName);
//         if (baristaToUpdate) {
//           baristaToUpdate.shift = newShift;
//           console.log(`${baristaName} has updated his shift to: ${newShift}`);
//         }
//       } else if (action === 'Learn') {
//         const newCoffeeType = parameter1;
//         const baristaToUpgrade = findBarista(baristaName);
//         if (baristaToUpgrade) {
//           if (baristaToUpgrade.coffeeTypes.includes(newCoffeeType)) {
//             console.log(`${baristaName} knows how to make ${newCoffeeType}.`);
//           } else {
//             baristaToUpgrade.coffeeTypes.push(newCoffeeType);
//             console.log(`${baristaName} has learned a new coffee type: ${newCoffeeType}.`);
//           }
//         }
//       }
  
//       currentIndex++;
//     }
  
//     // Print the final list of baristas
//     baristas.forEach(barista => {
//       console.log(`Barista: ${barista.name}, Shift: ${barista.shift}, Drinks: ${barista.coffeeTypes.join(', ')}`);
//     });
//   }

//3.approach
// function solve(input) {
//     const baristas = {};

//     // Helper function to add or update barista information
//     const addOrUpdateBarista = (name, shift, drinks) => {
//         if (!baristas[name]) baristas[name] = { shift, drinks: [] };
//         if (shift) baristas[name].shift = shift;
//         if (drinks) baristas[name].drinks = [...new Set([...baristas[name].drinks, ...drinks.split(',')])];
//     };

//     // Processing the initial barista information
//     const n = parseInt(input.shift()); // Number of baristas
//     for (let i = 0; i < n; i++) {
//         const [name, shift, drinks] = input.shift().split(' ');
//         addOrUpdateBarista(name, shift, drinks);
//     }

//     // Processing commands
//     input.forEach(command => {
//         const [action, name, param1, param2] = command.split(' / ');
        
//         switch(action) {
//             case "Prepare":
//                 if (baristas[name] && baristas[name].shift === param1 && baristas[name].drinks.includes(param2)) {
//                     console.log(`${name} has prepared a ${param2} for you!`);
//                 } else {
//                     console.log(`${name} is not available to prepare a ${param2}.`);
//                 }
//                 break;
//             case "Change Shift":
//                 if (baristas[name]) {
//                     baristas[name].shift = param1;
//                     console.log(`${name} has updated his shift to: ${param1}`);
//                 }
//                 break;
//             case "Learn":
//                 if (baristas[name] && !baristas[name].drinks.includes(param1)) {
//                     baristas[name].drinks.push(param1);
//                     console.log(`${name} has learned a new coffee type: ${param1}.`);
//                 } else {
//                     console.log(`${name} knows how to make ${param1}.`);
//                 }
//                 break;
//             // No need for "Closed" case as it signifies end of input
//         }
//     });

//     // Outputting final barista information
//     Object.entries(baristas).sort(([nameA], [nameB]) => nameA.localeCompare(nameB)).forEach(([name, {shift, drinks}]) => {
//         console.log(`Barista: ${name}, Shift: ${shift}, Drinks: ${drinks.join(', ')}`);
//     });
// }


solve([
    '3',
      'Alice day Espresso,Cappuccino',
      'Bob night Latte,Mocha',
      'Carol day Americano,Mocha',
      'Prepare / Alice / day / Espresso',
      'Change Shift / Bob / night',
      'Learn / Carol / Latte',
      'Learn / Bob / Latte',
      'Prepare / Bob / night / Latte',
      'Closed']    )