function splitPascalCase(input) {
    const words = input.split(/(?=[A-Z])/).join(', ');
    console.log(words);
}