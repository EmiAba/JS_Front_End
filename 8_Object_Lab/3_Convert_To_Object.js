function solve(jsonStr) {
    const data = JSON.parse(jsonStr);

Object.keys(data)
.forEach(key=> console.log(`${key}: ${data[key]}`));


    // // Convert JSON string to an object
    // const obj = JSON.parse(jsonStr);
    
    // // Loop through all the keys and print them with their values
    // for (const key in obj) {
    //     if (obj.hasOwnProperty(key)) {
    //         console.log(`${key}: ${obj[key]}`);
    //     }
    // }
}
