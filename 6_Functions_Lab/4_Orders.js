function solve(meal, amount) {
  let order = Order(meal, amount);
  console.log(order.toFixed(2));

  function Order(meal, amount) {
    let result = 0;

    switch (meal) {
      case "coffee":
        return (result = amount * 1.5);
      case "water":
        return (result = amount * 1);
      case "coke":
        return (result = amount * 1.4);
      case "snaks":
        return (result = amount * 2);
    }
    return result;
  }

}
solve("water", 5)
