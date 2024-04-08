function colorize() {
    let rowElements = Array.from(document.querySelectorAll('tr:nth-child(even)'))

    for (let element of rowElements) {
        element.style.backgroundColor = 'Teal'
    }
}


// function colorize() {
   
// const evenRowElements=document.querySelectorAll('table tr:nth-child(2n');
// evenRowElements.forEach(element=>element.style.backgroundColor='teal');

    

// }