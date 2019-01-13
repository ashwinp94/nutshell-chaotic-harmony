// 1. This module will build a 5-element form using
//      createAndAppendForm() and append it to the DOM article
//      with id="tasksOutput" in index.html
// 2. A list of current tasks is created and appended to
//      the DOM article with id="taskListOutput"in index.html
// 2. To create a list of current tasks TasksList.createDomList()
//      is called to show incomplete task list for current user
// 3. createDomList() calls TasksFetch.getAllTasksById()and then
//      does a forEach on fetch
// 4. For each list item, getAllTasksById() calls
//      TasksCreateObject.taskBuilder and returns the list object
//      (taskListField)
// 5. If the user adds a task, TasksDomBuilder.handleAddNewTask
//      takes the user input and creates a new object
//      Then it calls TaskFetch.postNewTask to POST
//      Then it calls TasksList.createDomList() to refresh the
//      list of tasks not yet completed

import TasksFetch from "./TasksFetch"
import TasksList from "./TasksList"
import TasksCreateObject from "./TasksCreateObject"

const TasksDomBuilder = {
    createAndAppendForm () {
// MAIN HEADER
    let taskFormHeader = document.createElement("h1");
    taskFormHeader.textContent = "TO DO LIST";
    taskFormHeader.setAttribute("class", "main-header")

// ADD TASKS HEADER
    let taskAddHeader = document.createElement("h2");
    taskAddHeader.textContent = "Add Tasks";
    taskAddHeader.setAttribute("class", "header")

// TASK
    let taskNameField = document.createElement("fieldset");

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
    let inputComplete = document.createElement("input");
    inputComplete.setAttribute("type", "checkbox");
    // SUBMIT BUTTON
    let submitButton = document.createElement("button");
    submitButton.textContent = "Add Tasks";
    submitButton.setAttribute("class", "task__save btnClass");
    // 2. Attach event listener to button in form
    submitButton.addEventListener("click", this.handleAddNewTask);

// EDIT TASKS HEADER
    let taskEditHeader = document.createElement("h2");
    taskEditHeader.textContent = "Edit Tasks";
    taskEditHeader.setAttribute("class", "header");

// 3. Append the HTML form to the DOM
    let taskFormFragment = document.createDocumentFragment();
    taskFormFragment.appendChild(taskFormHeader)
    taskFormFragment.appendChild(taskAddHeader);
    taskFormFragment.appendChild(taskNameField);
    taskFormFragment.appendChild(taskDueDateField);
    taskFormFragment.appendChild(submitButton);
    taskFormFragment.appendChild(taskEditHeader);

    let taskFormArticle = document.querySelector("#tasksOutput");
    taskFormArticle.appendChild(taskFormFragment);

    console.log(taskFormArticle);

    TasksList.createDomList();
    //taskFormFragment.appendChild(taskListField)

    // return taskFormArticle
  },

  handleAddNewTask () {
    let inputTaskName = document.querySelector("#task").value
    let inputTaskDueDate = document.querySelector("#dueDate").value
    let inputComplete = "unchecked";
    // (if the checkbox is not checked, no information is sent)

// "tasks": [ {
//       "id": 1,
//       "userId": 1,
//       "task": "Take out garbage",
//       "dueDate": "12/12/2018",
//       "complete": "" - attribute: is checked - value = "checked"?
//   }  ],

// <article>
// <h1>Task List</h1>
// <h2>Click to Edit or Check Complete</h2><br>

// <br><br>
// <h2>Add New Task</h2>
// <label for="dueDate">Due Date</label><br>
// <input type="date" name="dueDate" id="dueDate">
// <label for"task">Task</label><br>
// <input type="text" name="task">
// </article>

// List of Tasks produced by looping thru array - Call taskList
// <span class="spanClass"><input type="checkbox" name="complete" value="false">
// <p>dueDate value</p>
// <button>task value</button>

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
  }
}

export default TasksDomBuilder