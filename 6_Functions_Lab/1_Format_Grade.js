

function solve(grade) { // Ensure 'solve' accepts a grade argument
    let description = printGradeWithDescription(grade); // Pass the grade to the function
    console.log(description); // Print the returned description
    function printGradeWithDescription(grade) {
        let description;
        if (grade < 3.00) {
            description = "Fail (2)";
        } else if (grade >= 3.00 && grade < 3.50) {
            description = `Poor (${grade.toFixed(2)})`;
        } else if (grade >= 3.50 && grade < 4.50) {
            description = `Good (${grade.toFixed(2)})`;
        } else if (grade >= 4.50 && grade < 5.50) {
            description = `Very good (${grade.toFixed(2)})`;
        } else {
            description = `Excellent (${grade.toFixed(2)})`;
        }
        return description; // Return the description instead of just computing it
    }

}


solve(2.99)