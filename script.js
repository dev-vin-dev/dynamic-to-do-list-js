// Ensuring the list runs after the DOM is fully loaded.
document.addEventListener("DOMContentLoaded", function(){
    //Selecting DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById('task-list');

    // Array to store task strings
    let tasks = [];
    //Loading tasks from Local storage and displaying them
    function loadTasks(){
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            tasks = JSON.parse(storedTasks);
            tasks.forEach(taskText=>{
                createTaskElement(taskText);
            });
        }
    }

    //Saving the current tasks to Local Storage
    function saveTasks(){
        localStorage.setItem("tasks",JSON.stringify(tasks));
    }


    //Function to add task
    function addTask () {
        const taskText = taskInput.value.trim();//Get and trim Value
        //Validating input
        if (taskText===''){
            alert("Please enter a task.");
            return;
        }

     

        


        //Creating a list item & Removing items from list
        const listItem = document.createElement("li");
        listItem.textContent =taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent="Remove";
        removeButton.classList.add('remove-btn')

        //Attach removal functionality to the Button
        removeButton.onclick = function(){
            taskList.removeChild(listItem);
        }
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        //clear the input
        taskInput.value="";
    }
    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function (event){
        if (event.key === "Enter"){
            addTask();  
        }          
    });
});