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
