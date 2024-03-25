function addItem() {
    const itemListElement = document.getElementById('items');
    const inputElement = document.getElementById('newItemText');

    //create element

    const newItemElement = document.createElement('li'); // Fixed variable name

    newItemElement.textContent = inputElement.value;

    //append element
    itemListElement.appendChild(newItemElement);

    //clear the element
    inputElement.value = '';


    //II solution
//     var inputText = document.getElementById('newItemText').value;

//     // Creating a new list item
//     var newItem = document.createElement('li');
//     newItem.textContent = inputText;

//     // Appending the new item to the list
//     document.getElementById('items').appendChild(newItem);

//     // Optional: Clearing the input field after adding the item
//    // document.getElementById('newInputText').value = '';
}
