function addItem() {
    
        const itemListElement = document.getElementById('items');
        const inputElement = document.getElementById('newItemText');
    
        // Create new list item element
        const newItemElement = document.createElement('li'); 
        newItemElement.textContent = inputElement.value;
    
        // Create link element for deletion
        const deleteLinkElement = document.createElement('a');
        deleteLinkElement.textContent = '[Delete]';
        deleteLinkElement.href = '#';
    
        // Event listener for deletion
        deleteLinkElement.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the link from changing the URL hash
            newItemElement.remove(); // Remove the list item, not the entire list
        });
    
        // Append the delete link to the list item
        newItemElement.appendChild(deleteLinkElement);
    
        // Append the list item to the list
        itemListElement.appendChild(newItemElement);
    
        // Clear the input element
        inputElement.value = '';
    }

    
//     const itemListElement = document.getElementById('items');
//     const inputElement = document.getElementById('newItemText');

//     //create element

//     const newItemElement = document.createElement('li'); 

//     newItemElement.textContent = inputElement.value;

//     //create link element
//     const deleteLinkElement=document.createElement('a');
//     deleteLinkElement.textContent='[Delete]';
//     deleteLinkElement.href='#';

//     //event listener
// deleteLinkElement.addEventListener('click', ()=>{
// itemListElement.remove();
// })

//     //
//     itemListElement.appendChild(deleteLinkElement);
//     //append element
//     itemListElement.appendChild(newItemElement);

//     //clear the element
//     inputElement.value = '';





// }