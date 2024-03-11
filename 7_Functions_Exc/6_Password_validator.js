function validatePassword(password) {
    let isValid = true;
    const lengthCheck = password.length >= 6 && password.length <= 10;
    const contentCheck = /^[A-Za-z0-9]+$/.test(password);
    const digitCheck = (password.match(/\d/g) || []).length >= 2;

    if (!lengthCheck) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }

    if (!contentCheck) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
    }

    if (!digitCheck) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }

    if (isValid) {
        console.log("Password is valid");
    }
}
