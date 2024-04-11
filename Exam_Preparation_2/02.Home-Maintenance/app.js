window.addEventListener("load", solve);

function solve(){
    const addButtonElement = document.getElementById('add-btn');
    const placeInputElement = document.getElementById('place');
    const actionInputElement = document.getElementById('action');
    const personInputElement = document.getElementById('person');
    const taskListElement = document.getElementById('task-list');

    const doneListElement=document.getElementById('done-list');
    
    // // Ensure all elements are correctly loaded
    // if (!addButtonElement || !placeInputElement || !actionInputElement || !personInputElement || !taskListElement) {
    //     console.error('One or more elements could not be found.');
    //     return; // Stop further execution if any element is not found
    // }

    addButtonElement.addEventListener('click', () => {
        const place = placeInputElement.value.trim();
        const action = actionInputElement.value.trim();
        const person = personInputElement.value.trim();
        
     
        const taskLiElement = createTaskElement(place, action, person);
        taskListElement.appendChild(taskLiElement);
        
        placeInputElement.value = '';
        actionInputElement.value = '';
        personInputElement.value = '';
    

        const editButtonElement = taskListElement.querySelector('.btn.edit');
        const  doneButtonElement= taskListElement.querySelector('.btn.done');

        editButtonElement.addEventListener('click', ()=>{

            placeInputElement.value=place;
            actionInputElement.value=action;
            personInputElement.value=person;

            taskLiElement.remove();



        })
        const deleteButtonElement=document.createElement('button');
        deleteButtonElement.classList.add('delete','Delete');
        deleteButtonElement.textContent='Delete';
   
        doneButtonElement.addEventListener('click',()=>{
          

          //remove buttons
          const buttonsDivElement1 = taskLiElement.querySelector('.buttons');
       
           buttonsDivElement1.remove();

                //append to tasks
            doneListElement.appendChild(taskLiElement);

                 //append delete buutton

            doneListElement.appendChild(deleteButtonElement);



        
        });
        deleteButtonElement.addEventListener('click',()=>{
            doneListElement.remove();
        })






    });
    
    function createTaskElement(place, action, person) {
        const pPlaceElement = document.createElement("p");
        pPlaceElement.textContent = `Place:${place}`;
        
        const pActionElement = document.createElement("p");
        pActionElement.textContent = `Action:${action}`;
        
        const pPersonElement = document.createElement("p");
        pPersonElement.textContent = `Person:${person}`;
        
        const articleElement = document.createElement("article");
        articleElement.appendChild(pPlaceElement);
        articleElement.appendChild(pActionElement);
        articleElement.appendChild(pPersonElement);
        
        const editButtonElement = document.createElement("button");
        editButtonElement.classList.add('btn', 'edit');
        editButtonElement.textContent = "Edit";
        
        const doneButtonElement = document.createElement("button");
        doneButtonElement.classList.add('btn',"done");
        doneButtonElement.textContent = "Done";
        
        const buttonsDivElement = document.createElement("div");
        buttonsDivElement.classList.add("buttons");
        buttonsDivElement.appendChild(editButtonElement);
        buttonsDivElement.appendChild(doneButtonElement);
        
        const taskLiElement = document.createElement("li");
        taskLiElement.classList.add("clean-task");
        taskLiElement.appendChild(articleElement);
        taskLiElement.appendChild(buttonsDivElement);
        
        return taskLiElement;
    }
}