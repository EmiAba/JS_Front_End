    function calculateCircleArea(input) {
        if (typeof input === 'number') {
          // Assuming input is the radius, calculate the circle area
          const area = Math.PI * Math.pow(input, 2);
          // Print the area rounded to two decimal places
          console.log(`${area.toFixed(2)}`);
        } else {
          console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
        }
      }
      
     





