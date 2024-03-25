function generateReport() {
    const thElements = document.querySelectorAll('table thead th');
    const trElements = document.querySelectorAll('table tbody tr');
    const outputElement = document.getElementById('output');

    const columns = Array
        .from(thElements)
        .map(thElement => {
            const checkboxElement = thElement.querySelector('input[type=checkbox]');

            return {
                name: thElement.textContent.toLowerCase().trim(),
                active: checkboxElement.checked
            };
        });

    const reportData = Array
        .from(trElements)
        .map(trElement => {
            const tdElements = trElement.querySelectorAll('td');

            const result = Array
                .from(tdElements)
                  .reduce((data, tdElement, i) => {
                    if(columns[i].active){
                        return data;
                    }
                    const columnName = columns[i].name;
                    data[columnName] = tdElement.textContent;

                    return data;
                }, {})

            return result;
        })

    outputElement.value = JSON.stringify(reportData, null, 2);
}


//II way
// function generateReport() {
//     let headRowArray = Array.from(document.getElementsByTagName('input'));

//     let bodyRowArray = Array.from(document.querySelectorAll('tbody tr'));

//     let textArea = document.getElementById('output');

//     let indices = [];

//     let employees = [];

//     for (let i = 0; i < headRowArray.length; i++) {

//         if (headRowArray[i].checked === true) {

//             indices.push(i);

//         }

//     }

//     for (let i = 0; i < bodyRowArray.length; i++) {

//         let eInfo = {};

//         let tdArray = Array.from(bodyRowArray[i].children);

//         for (let j = 0; j < indices.length; j++) {

//             let key = headRowArray[indices[j]].name.toLowerCase();

//             let value = tdArray[indices[j]].textContent;

//             eInfo[key] = value;

//         }

//         employees.push(eInfo);

//     }

//     let str = JSON.stringify(employees);

//     textArea.textContent = str;
// }