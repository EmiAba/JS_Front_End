function solve(peopleNumbers, groupType, weekDay) {
    let totalPrice;
  
    switch (groupType) {
      case "Students":
        if (weekDay === "Friday") {
          totalPrice = peopleNumbers * 8.45;
        } else if (weekDay === "Saturday") {
          totalPrice = peopleNumbers * 9.8;
        } else if (weekDay === "Sunday") {
          totalPrice = peopleNumbers * 10.46;
        }
  
        if (peopleNumbers >= 30) {
          totalPrice -= totalPrice * 0.15;
        }
        break;
  
      case "Business":
        if (peopleNumbers >= 100) {
          peopleNumbers -= 10;
        }
  
        if (weekDay === "Friday") {
          totalPrice = peopleNumbers * 10.90;
        } else if (weekDay === "Saturday") {
          totalPrice = peopleNumbers * 15.60;
        } else if (weekDay === "Sunday") {
          totalPrice = peopleNumbers * 16;
        }
        break;
  
      case "Regular":
        if (weekDay === "Friday") {
          totalPrice = peopleNumbers * 15;
        } else if (weekDay === "Saturday") {
          totalPrice = peopleNumbers * 20;
        } else if (weekDay === "Sunday") {
          totalPrice = peopleNumbers * 22.50;
        }
  
        if (peopleNumbers >= 10 && peopleNumbers <= 20) {
          totalPrice -= totalPrice * 0.05;
        }
        break;
  
      default:
      
        return;
    }
  
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
  }
  
  // Example usage:
  solve(30, "Students", "Sunday");
  
solve(40, "Regular", "Sunday");

// function vacationPrice(people, group, day) {

//   let groupTypes = {
//       Students: {
//           Friday: 8.45,
//           Saturday: 9.80,
//           Sunday: 10.46
//       },
//       Business: {
//           Friday: 10.90,
//           Saturday: 15.60,
//           Sunday: 16
//       },
//       Regular: {
//           Friday: 15,
//           Saturday: 20,
//           Sunday: 22.50
//       }
//   }

//   let totalPriceDiscount = 0

//   if (people >= 30 && group==="Students") {
//       let totalPrice = groupTypes[group][day] * people
//       totalPriceDiscount = totalPrice - ((15/100) * totalPrice)
//   }
//   else if (people >= 100 && group==="Business") {
//       totalPriceDiscount = groupTypes[group][day] * (people - 10)
//   }
//   else if (people >= 10 && people <= 20 && group==="Regular") {
//       let totalPrice = groupTypes[group][day] * people
//       totalPriceDiscount = totalPrice - ((5/100) * totalPrice)
//   }
//   else {
//       totalPriceDiscount = groupTypes[group][day] * people
//   }

//   console.log(`Total price: ${totalPriceDiscount.toFixed(2)}`)

// }