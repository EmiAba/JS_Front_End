function addItem() {
    var inputText = document.getElementById('newItemText').value;

    // Creating a new list item
    var newItem = document.createElement('li');
    newItem.textContent = inputText;

    // Appending the new item to the list
    document.getElementById('items').appendChild(newItem);

    // Optional: Clearing the input field after adding the item
    document.getElementById('newInputText').value = '';
}
