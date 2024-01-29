function calculateTicketPrice(day, age) {
    let price = 0;
  
    switch (day) {
      case "Weekday":
        if (age >= 0 && age <= 18) {
          price = 12;
        } else if (age > 18 && age <= 64) {
          price = 18;
        } else if (age > 64 && age <= 122) {
          price = 12;
        } else {
          console.log(`Error!`);
          return;
        }
        break;
  
      case "Weekend":
        if (age >= 0 && age <= 18) {
          price = 15;
        } else if (age > 18 && age <= 64) {
          price = 20;
        } else if (age > 64 && age <= 122) {
          price = 15;
        } else {
          console.log(`Error!`);
          return;
        }
        break;
  
      case "Holiday":
        if (age >= 0 && age <= 18) {
          price = 5;
        } else if (age > 18 && age <= 64) {
          price = 12;
        } else if (age > 64 && age <= 122) {
          price = 10;
        } else {
          console.log(`Error!`);
          return;
        }
        break;
  
      default:
        console.log(`Error!`);
        return;
    }
  
    console.log(`${price}$`);
  }
  
  // Example usage:
  calculateTicketPrice("Weekday", 25);  // Outputs: 18$
  calculateTicketPrice("Weekend", 40);  // Outputs: 20$
  calculateTicketPrice("Holiday", 15);  // Outputs: 5$
  calculateTicketPrice("InvalidDay", 30);  // Outputs: Error! Invalid day.
  calculateTicketPrice("Weekday", 1300);  // Outputs: Error!
  