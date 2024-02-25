function solve(...arr, step) {
    for (let i = 0; i < arr.length; i += step) {
        let elem=(arr[i]);
        console.log(elem);
    }
}


solve(['5', '20', '31', '4', '20'], 2)
