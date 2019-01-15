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
    taskNameInput.setAttribute("id", "editKey")
    taskNameInput.textContent = taskItem.task;

    taskNameField.appendChild(taskNameLabel);
    taskNameField.appendChild(taskNameInput);

    // document.getElementById("editKey").onkeypress = function() {
    //     console.log("In function keypress")
    //     let x = event.keypress;
    //     if (x === 13) {
    //         consolelog(x)
    //         let editedTask = {
    //             task: taskNameInput.value
    //         }

    // TasksFetch.putExistingTask(taskItem, editedTask)
    //     .then(response => {
    //     TasksList.createDomList()
    //     })
    // }
    
    taskNameInput.addEventListener("keypress", function(event) {
        console.log("In function keypress")
        let x = event.charCode;
        
        console.log("x= " + x)
        if (x === 13) {
            console.log("You pressed Enter");
            let taskToEdit = {
                task: taskNameInput.value
            }
            console.log(taskToEdit)        
        
        TasksFetch.putExistingTask(taskId, taskToEdit)
        .then(response => {
        TasksList.createDomList()
        })
      }
    })    

    let taskFormArticle = document.querySelector(`#${articleId}`);
    
    taskFormArticle.appendChild(taskNameField);

    console.log(taskFormArticle);
    }
}

export default TasksEditForm