function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
   const trElements = document.querySelectorAll('table.container tbody tr');
   const searchFieldElement = document.getElementById('searchField');
   const searchText = searchFieldElement.value;
   
   for (const trElement of trElements) {
      //take all data inside
      const tdElements = trElement.querySelectorAll('td');
      let isSelected = false;

      //clear input field-
      trElement.classList.remove('select');
      
      for (const tdElement of tdElements) {
         // TODO: Check case sensitivity
         if (tdElement.textContent.includes(searchText)) {
            isSelected = true;
            break;
         }
      }

      if (isSelected) {
         trElement.className = 'select';
         // trElement.classList.add('select');
      }
   }
   
   // Clear old data
   searchFieldElement.value = '';
}
}


