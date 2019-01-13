import TasksFetch from "./TasksFetch"
import TasksList from "./TasksList"

const TasksEditForm = {
  createAndAppendForm (articleId, taskItem) {
    let taskNameField = document.createElement("p");
    taskNameField.setAttribute("id", "listItem");
    let taskNameLabel = document.createElement("label");
    taskNameLabel.textContent = "Edit Task:         ";
    taskNameLabel.setAttribute("class", "listItem")

    let taskNameInput = document.createElement("input");
    taskNameInput.textContent = taskItem.task;

    taskNameField.appendChild(taskNameLabel);
    taskNameField.appendChild(taskNameInput);
    
    taskNameInput.addEventListener("keycode", event => {
        let x = event.keyCode;
        if (x === 13) {
            let editedTask = {
                task: taskNameInput.value
            }
        }

    TasksFetch.putExistingTask(taskItem, editedTask)
        .then(response => {
        TasksList.createDomList()
        })
    })    

    let taskFormArticle = document.querySelector(`#${articleId}`);
    taskFormArticle.appendChild(taskNameField);

    console.log(taskFormArticle);
    }
}

export default TasksEditForm