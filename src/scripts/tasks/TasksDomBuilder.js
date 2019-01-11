import TasksFetch from "./TasksFetch"
import TasksList from "./TasksList"

const TasksDomBuilder = {

  // This module will build a form and append it to the DOM.
  // The form will contain input fields for a user to add a new task
  // to the to do list
  createAndAppendForm () {
// HEADER
    let taskFormHeader = document.createElement("h1");
    formHeader.textContent = "Add Tasks";

// TASK
    let taskNameField = document.createElement("fieldset");

    let taskNameLabel = document.createElement("label");
    taskNameLabel.textContent = "Task";
    taskNameLabel.setAttribute("for", "task");

    let taskNameInput = document.createElement("input");
    taskNameInput.setAttribute("id", "task");
    taskNameInput.setAttribute("name", "task");
    taskNameField.appendChild(taskNameLabel);
    taskNameField.appendChild(taskNameInput);

// DUE DATE
    let taskDueDateField = document.createElement("fieldset");

    let taskDueDateLabel = document.createElement("label");
    taskDueDateLabel.setAttribute("for", "dueDate");

    let taskDueDateInput = document.createElement("input");
    taskDueDateInput.setAttribute("id", "dueDate");
    taskDueDateInput.setAttribute("type", "date");
    taskDueDateInput.setAttribute("name", "dueDate");
    taskDueDateField.appendChild(taskDueDateLabel);
    taskDueDateField.appendChild(taskDueDateInput);
    
// SUBMIT BUTTON
    let submitButton = document.createElement("button");
    submitButton.textContent = "Add Tasks";
    submitButton.setAttribute("class", "task__save");

// 2. Attach event listener to button in form
    submitButton.addEventListener("click", this.handleAddNewTask);

// 3. Append the HTML form to the DOM
    let taskFormFragment = document.createDocumentFragment();
    taskFormFragment.appendChild(taskFormHeader);
    taskFormFragment.appendChild(taskNameField);
    taskFormFragment.appendChild(taskDueDateField);
    taskFormFragment.appendChild(submitButton);

    let taskFormArticle = document.querySelector("#tasksOutput");
    taskFormArticle.appendChild(taskFormFragment);

  },
  
  handleAddNewTask (event) {
   
    let inputTaskName = document.querySelector("#task").value
    let inputTaskDueDate = document.querySelector("#dueDate").value
    let inputComplete = false;

    // "tasks": [ {
    //       "id": 1,
    //       "userId": 1,
    //       "task": "Take out garbage",
    //       "dueDate": "12/12/2018",
    //       "complete": "false"
    //   }  ],

    let newTask = {
      userId: userId,
      task: inputTaskName,
      dueDate: inputTaskDueDate,
      complete: inputComplete
    }

    
    TasksFetch.postNewTask(newTask)
    .then(response => {
      TasksList.createDomList()
    })
  }
}

export default TasksDomBuilder