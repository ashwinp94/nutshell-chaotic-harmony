import TasksFetch from "./TasksFetch"
import TasksEditForm from "./TasksEditForm"

const TasksCreateObject = {
   taskBuilder(taskItem) {

    let taskArticle = document.createElement("article")
    taskArticle.setAttribute("id", `task--${taskItem.id}`)

    let taskListField = document.createElement("fieldset");
    taskListField.setAttribute("class", "listItemContainer");
    
    let editTaskNameBtn = document.createElement("button");
    editTaskNameBtn.textContent = taskItem.task;
    console.log(editTaskNameBtn.textContent);
    editTaskNameBtn.addEventListener("click", () => {
      let articleId = event.target.parentNode.id;
      let taskId = articleId.split("--")[1]
      TasksFetch.getAllTasksById(taskId)
      .then(response => {
        TasksEditForm.createAndAppendForm(articleId, response)
      })
    })

    let taskDueDate = document.createElement("label");
    taskDueDate.textContent = taskItem.dueDate.toString() + "  ";
    taskDueDate.setAttribute("class", "dateListItem")
    console.log(taskDueDate);

    let taskComplete = document.createElement("input");
    taskComplete.setAttribute("type", "checkbox");
    taskComplete.setAttribute("name", "complete");
    taskComplete.value = taskItem.complete;
    taskComplete.addEventListener("click", this.handleEditComplete);

    taskListField.appendChild(taskDueDate);
    taskListField.appendChild(taskComplete);
    taskListField.appendChild(editTaskNameBtn);

    return taskListField;
   }   
  }

  export default TasksCreateObject