function solve(employeeNames){
    //define structure-assoc array
    let employees={
    };

    for (const name of employeeNames) {
        employees[name]=name.length;
    }
        for (const employee in employees) {
            console.log(`Name: ${employee} -- Personal Number: ${employees[employee]}`)
 
        }




}

function fancySolve(employeeNames){
    //array of objects
    const employees=[];
    for (const name of employeeNames) {
       const employee={
        name,
        personalNumber: name.length,
       }
       employees.push(employee);
        
    }
    for (const empl of employees) {
        console.log(`Name: ${empl.name} -- Personal Number: ${empl.personalNumber}`)
        
    }


}


function fanciestSolve(employeeNames){
 employeeNames 
    .map(name=>({ // expression body
        name, 
        personalNumber: name.length
        })
    ) //statement body
    .forEach(employee =>  console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`));

}

fanciestSolve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )