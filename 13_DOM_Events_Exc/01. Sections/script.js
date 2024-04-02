function create(words) {
  const contentElement = document.getElementById("content");
  //create div with paragraph
  
  const divElements = words
      .map((word) => {
      const divElement = document.createElement("div");

      const pElement = document.createElement("p");
      pElement.textContent = word;
    //hide paragrph
      pElement.style.display = "none";

       divElement.appendChild(pElement);

    //  divElement.addEventListener('click', ()=>{
    //    pElement.style.display='block';
    //  })

    return divElement;
  });

  //show paragraph on div click

  divElements.forEach((divElement) => {
    divElement.addEventListener("click", () => {
      const pElement = divElement.querySelector("p");
      pElement.style.display = "block";
    });
  });

  //append all to DOM-1 approach
  // contentElement.append(...divElements);

  // Append all div elements to the DOM - 2 approach
  // divElements.forEach(divElement => contentElement.appendChild(divElement));


 ///3rd wayadd to DOM Fragments is NODE and they are parents
 // Using DocumentFragment to append elements
 const divElementsFragment = document.createDocumentFragment();
 divElements.forEach(divElement => divElementsFragment.appendChild(divElement));

 // Appending the DocumentFragment to the DOM
 contentElement.appendChild(divElementsFragment);

}
