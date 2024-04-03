function addItem() {
   const itemTextElement= document.getElementById('newItemText');
   const itemValueElement=document.getElementById('newItemValue');


   const itemResultElement=document.getElementById('menu');

   const optionElement=document.createElement('option');
   optionElement.value=itemValueElement.value;
   optionElement.textContent=itemTextElement.value;

   itemResultElement.appendChild(optionElement);
}