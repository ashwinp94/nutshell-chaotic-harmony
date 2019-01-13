import TasksFetch from "./TasksFetch"
import TasksList from "./TasksList"

const TasksEditForm = {
  createAndAppendForm (articleId, taskObjectToEdit) {
    let taskNameField = document.createElement("fieldset");
    taskNameField.setAttribute("id", "editClass")

    let taskNameLabel = document.createElement("label");
    taskNameLabel.textContent = "Task:  ";
    taskNameLabel.setAttribute("for", "task");

    let taskNameInput = document.createElement("input");
    taskNameInput.setAttribute("id", "task");
    taskNameInput.setAttribute("name", "task");
    taskNameField.appendChild(taskNameLabel);
    taskNameField.appendChild(taskNameInput);

    let updateButton = document.createElement("button");
    updateButton.textContent = "Update";
    updateButton.setAttribute("class", "task__edit btnClass");
    // 2. Attach event listener to button in form
    updateButton.addEventListener("click", () => {
        let editedTask = {
            task: taskNameInput.value
        }

    TasksFetch.putExistingTask()
        .then(response => {
        TasksList.createDomList()
        })
    })

    let taskFormFragment = document.createDocumentFragment();
    taskFormFragment.appendChild(taskNameField);
    taskFormFragment.appendChild(updateButton);

    let taskFormArticle = document.querySelector("#tasksOutput");
    taskFormArticle.appendChild(taskFormFragment);

    console.log(taskFormArticle);

    return taskFormArticle
  }
}

export default TasksEditForm