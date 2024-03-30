function focused() {
    const inputElements=document.querySelectorAll('input[type=text]');

     Array.from(inputElements)
     .forEach(inputElem => inputElem.addEventListener('focus', (e)=>{
      // console.log(e.target.parentElement);
      e.target.parentElement.classList.add('focused');


     }
));

Array.from(inputElements)
.forEach(inputElem => inputElem.addEventListener('blur', (e)=>{
 
 e.target.parentElement.classList.remove('focused');


}
));
    
}