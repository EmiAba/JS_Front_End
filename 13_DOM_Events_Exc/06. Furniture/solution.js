function solve() {
const textareaInputElement = document.querySelector('#exercise textarea:first-of-type');
const textareaOutputElement= document.querySelector('#exercise textarea:last-of-type');
const generateButtonElement= document.querySelector('#exercise button:first-of-type');
const buyButtonElement= document.querySelector('#exercise button:last-of-type');
const furnitureTbodyElement = document.querySelector('.table tbody');


//Parse input 
generateButtonElement.addEventListener('click',(e) =>{
  const funitures=JSON.parse(textareaInputElement.value);

  for (const furniture of funitures) {
   
    const imgElement = document.createElement('img');
    imgElement.src = furniture.img;
    const imageTdElement = document.createElement('td');
    imageTdElement.appendChild(imgElement);

    const namePElement = document.createElement('p');
    namePElement.textContent = furniture.name;
    const nameTdElement = document.createElement('td');
    nameTdElement.appendChild(namePElement);

    const pricePElement = document.createElement('p');
    pricePElement.textContent = furniture.price;
    const priceTdElement = document.createElement('td');
    priceTdElement.appendChild(pricePElement);

    const decPElement = document.createElement('p');
    decPElement.textContent = furniture.decFactor;
    const decTdElement = document.createElement('td');
    decTdElement.appendChild(decPElement);

    const markElement = document.createElement('input');
    markElement.setAttribute('type', 'checkbox');
    const markTdElement = document.createElement('td');
    markTdElement.appendChild(markElement);

    
  }



}
);













}