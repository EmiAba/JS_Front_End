function toggle() {
    const toggleButtonElement=document.querySelector('.head span.button');

    const extraInformationElement=document.getElementById('extra');

   //show more
   const cuurentButtenElement=toggleButtonElement.textContent;

   if(cuurentButtenElement==='More'){
    extraInformationElement.style.display='block';
    toggleButtonElement.textContent='Less';
   }else {
extraInformationElement.style.display='none';
toggleButtonElement.textContent='More';
   }



}