function checkPalindromes(numbers) {
    numbers.forEach(number => {
        const numStr = number.toString();
        const reversedNumStr = numStr.split('').reverse().join('');
        console.log(numStr === reversedNumStr ? 'true' : 'false');
    });
}
