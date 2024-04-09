window.addEventListener("load", solve);

function solve() {
  const addButtonElement = document.getElementById("add-btn");
  //take the inputs
  const expenseInputElement = document.getElementById("expense");
  const amountInputElement = document.getElementById("amount");
  const dateInputElement = document.getElementById("date");

  const previewListElement = document.getElementById("preview-list");
  const  expensesElement= document.getElementById("expenses-list");

  const deleteButtonElement=document.querySelector('.btn.delete');

  addButtonElement.addEventListener("click", () => {
    //get input information
    const expense = expenseInputElement.value;
    const amount = amountInputElement.value;
    const date = dateInputElement.value;
    //check empty element
    if (!expense || !amount || !date) {
      return;
    }
    //add to preview list
    const expenceLiElement = createArticlElement(expense, amount, date);
    previewListElement.appendChild(expenceLiElement);
    //disable add button
    addButtonElement.setAttribute("disabled", "disabled");

    //clear input
    expenseInputElement.value = "";
    amountInputElement.value = "";
    dateInputElement.value = "";

    //get buttons Elements
    const editButtonElement = previewListElement.querySelector(".btn.edit");
    const okButtonElement = previewListElement.querySelector(".btn.ok");

    //atach event listener
    editButtonElement.addEventListener("click", () => {
      //extract data from preview
    //   const pElementsNodeList = expenceLiElement.querySelectorAll("article p");
    //   const pElements = Array.from(pElementsNodeList);

    //   const expenseType = pElements[0].textContent.substring(6);
    //   const amountType = pElements[1].textContent.substring( 8,  pElements[1].textContent.length - 1 );
    //   const dateType = pElements[2].textContent.substring(6);

      //send data to inputs
      expenseInputElement.value = expense;
      amountInputElement.value = amount;
      dateInputElement.value = date;

    //   expenseInputElement.value = expenseType;
    //   amountInputElement.value = amountType;
    //   dateInputElement.value = dateType;

      //clear preview;
      editButtonElement.removeEventListener();
      expenceLiElement.remove();

      //addbutton enable
      addButtonElement.removeAttribute("disabled");
    });
//attacj ok event listenet
    okButtonElement.addEventListener("click", () => {

//remove buttons from expense items
const expenseButtonsElement=expenceLiElement.querySelector('.buttons');
expenseButtonsElement.remove();
//move expense item to expense list
expensesElement.appendChild(expenceLiElement);

//activate add button
addButtonElement.removeAttribute("disabled");


    });


  });

  deleteButtonElement.addEventListener('click',()=>{
    expensesElement.innerHTML='';

  })

  function createArticlElement(expense, amount, date) {
    const pTypeElement = document.createElement("p");
    pTypeElement.textContent = `Type: ${expense}`;

    const pAmountElement = document.createElement("p");
    pAmountElement.textContent = `Amount: ${amount}$`;

    const pDateElement = document.createElement("p");
    pDateElement.textContent = `Date: ${date}`;

    const articleElement = document.createElement("article");
    articleElement.appendChild(pTypeElement);
    articleElement.appendChild(pAmountElement);
    articleElement.appendChild(pDateElement);

    const editButtonElement = document.createElement("button");
    editButtonElement.classList.add("btn", "edit");
    editButtonElement.textContent = "edit";

    const okButtonElement = document.createElement("button");
    okButtonElement.classList.add("btn", "ok");
    okButtonElement.textContent = "ok";

    const buttonsDivElement = document.createElement("div");
    buttonsDivElement.classList.add("buttons");
    buttonsDivElement.appendChild(editButtonElement);
    buttonsDivElement.appendChild(okButtonElement);

    const liExpenseElement = document.createElement("li");
    liExpenseElement.classList.add("expense-item");
    liExpenseElement.appendChild(articleElement);
    liExpenseElement.appendChild(buttonsDivElement);

    return liExpenseElement;
  }
}
