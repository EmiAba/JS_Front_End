function attachEvents() {
  const titleInputElement=document.querySelector('input[type=text][name=title]');
  const authorInputElement=document.querySelector('input[type=text][name=author]');
  const buttonSubmitElement=document.querySelector('#form button');
  const bookTableBodyElement=document.querySelector('#books tbody');



buttonSubmitElement.addEventListener('click', (e)=>{
  const bookTRElement=createBookElement(titleInputElement.value, authorInputElement.value);
  bookTableBodyElement.appendChild(bookTRElement);
  titleInputElement.value='';
  authorInputElement.value='';
});

function createBookElement(title, author){

  const editButtonElement=document.createElement('button');
  editButtonElement.textContent='EDIT';

  const deleteButtonElement=document.createElement('button');
  deleteButtonElement.textContent='DELETE';

const buttonsTdElements=document.createElement('td');

buttonsTdElements.appendChild(editButtonElement);
buttonsTdElements.appendChild(deleteButtonElement);


const titleTdElement=document.createElement('td');
titleTdElement.textContent=title;


const authorTdElement=document.createElement('td');
authorTdElement.textContent=author;

const bookTRElement=document.createElement('tr');

bookTRElement.appendChild(titleTdElement);
bookTRElement.appendChild(authorTdElement);
bookTRElement.appendChild(buttonsTdElements);

return bookTRElement;

}
}

attachEvents();