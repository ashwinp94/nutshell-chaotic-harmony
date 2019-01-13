// 1. A 7-element form is created and appended to the DOM
//      article with id="tasksOutput" in index.html
//      (createAndAppendForm())
// 2. A list of current tasks is created and appended to
//      the DOM article with id="taskListOutput"in index.html
// ***** Stretch goal - Order the tasks by date
// 2. To create a list of current tasks for the currrent user
//       TasksList.createDomList() is called
// 3. TaskList.createDomList() calls TasksFetch.getAllTasksById()
//      for users matching the current userId and for complete = unchecked
//      Then the function does a forEach on the fetch
//  ***** Stretch goal would be adding option to show completed tasks
// 4. For each list item, TaskFetch.getAllTasksById() calls
//      TasksCreateObject.taskBuilder and returns the list object
//      (taskListField)
// 5. If the user adds a task, TasksDomBuilder.handleAddNewTask
//      takes the user input and creates a new object
//      Then it calls TaskFetch.postNewTask to POST
//      Then it calls TasksList.createDomList() to refresh the
//      list to show tasks not yet completed

import NavBar from "../NavBar"
import TasksFetch from "./TasksFetch"
import TasksEditForm from "./TasksEditForm"
import TasksList from "./TasksList"
import TasksCreateObject from "./TasksCreateObject"

const TasksDomBuilder = {

    createAndAppendForm () {
        console.log("Hello from TasksDomBuilder.createAndAppendForm");
// MAIN HEADER
    let taskFormHeader = document.createElement("h1");
    taskFormHeader.textContent = "TO DO LIST";
    taskFormHeader.setAttribute("class", "headerH1")

// ADD TASKS HEADER
    let taskAddHeader = document.createElement("h2");
    taskAddHeader.textContent = "Add Tasks";
    taskAddHeader.setAttribute("class", "headerH2")

// TASK
    let taskNameField = document.createElement("fieldset");
    taskNameField.setAttribute("class", "listItemContainer")

    let taskNameLabel = document.createElement("label");
    taskNameLabel.textContent = "Task:  ";
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
    taskDueDateLabel.textContent = "Date:  ";

    let taskDueDateInput = document.createElement("input");
    taskDueDateInput.setAttribute("id", "dueDate");
    taskDueDateInput.setAttribute("type", "date");
    taskDueDateInput.setAttribute("name", "dueDate");
    taskDueDateField.appendChild(taskDueDateLabel);
    taskDueDateField.appendChild(taskDueDateInput);

// CHECKBOX - Creating but not appending to DOM
   // let inputComplete = document.createElement("input");
    //inputComplete.setAttribute("type", "checkbox");

// SUBMIT BUTTON
    let submitButton = document.createElement("button");
    submitButton.textContent = "Add Tasks";
    submitButton.setAttribute("class", "task__save btnClass");
    // 2. Attach event listener to button in form
    submitButton.addEventListener("click", this.handleAddNewTask);

// EDIT TASKS HEADER
    let taskEditHeader = document.createElement("h3");
    taskEditHeader.textContent = "Click to Edit Tasks";
    taskEditHeader.setAttribute("class", "headerH3");

    let taskEditHeader2 = document.createElement("h4");
    taskEditHeader2.textContent = "Check Box to Mark Complete";
    taskEditHeader.setAttribute("class", "headerH4");

// 3. Append the HTML form to the DOM
    let taskFormFragment = document.createDocumentFragment();
    taskFormFragment.appendChild(taskFormHeader);
    taskFormFragment.appendChild(taskAddHeader);
    taskFormFragment.appendChild(taskNameField);
    taskFormFragment.appendChild(taskDueDateField);
    taskFormFragment.appendChild(submitButton);
    taskFormFragment.appendChild(taskEditHeader);
    taskFormFragment.appendChild(taskEditHeader2);

    let taskFormArticle = document.querySelector("#tasksOutput");
    taskFormArticle.setAttribute("class", "addContainer");
    taskFormArticle.appendChild(taskFormFragment);

    console.log(taskFormArticle);
    TasksList.createDomList();
    },    

  handleAddNewTask() {
    let inputTaskName = document.querySelector("#task").value
    let inputTaskDueDate = document.querySelector("#dueDate").value
    let inputComplete = "unchecked";
    
        // "tasks": [ {
        //       "id": 1,
        //       "userId": 1,
        //       "task": "Take out garbage",
        //       "dueDate": "12/12/2018",
        //       "complete": "" - attribute: is checked - value = "checked"?
        //   }  ],

// Until we pass in a value
let userId = 1;
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
},
}

export default TasksDomBuilder