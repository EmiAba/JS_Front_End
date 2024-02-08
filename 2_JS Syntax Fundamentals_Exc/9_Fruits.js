function price(fruit, wieghtInGrams, priceWeight){


let sum=wieghtInGrams*priceWeight;

console.log(`I need ${'$'}${(sum/1000).toFixed(2)} to buy ${(wieghtInGrams/1000).toFixed(2)} kilograms ${fruit}.`);





}

price('orange', 2500, 1.80)