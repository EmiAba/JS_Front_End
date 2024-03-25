function deleteByEmail() {
    const inputEmailElement = document.querySelector('input[name=email]');
    const resultElement = document.getElementById('result');

    const trElements = document.querySelectorAll('table#customers tbody tr');

    // Search for tr element
    const resultTrElement = Array.from(trElements).find(trElement => 
        trElement.children[1].textContent.includes(inputEmailElement.value)
    );

    if (resultTrElement) {
        // If a matching table row is found, delete the table row
        resultTrElement.remove();
        resultElement.textContent = 'Deleted';
    } else {
        // If no matching table row is found, show "Not found."
        resultElement.textContent = 'Not found.';
    }

    // Clear input in both cases
    inputEmailElement.value = '';

}