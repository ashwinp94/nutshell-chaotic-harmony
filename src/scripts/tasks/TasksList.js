import TasksFetch from "./tasksFetch"
import TasksCreateObject from "./TasksCreateObject"

const TasksList = {
  createDomList(){
    
    TasksFetch.getAllTasks()
    .then(allTasks => {
      let taskDocFragment = document.createDocumentFragment()
      let taskHtml = TasksCreateObject.taskBuilder(taskItem)
      taskDocFragment.appendChild(taskHtml)
      })

      let outputArticle = document.querySelector(".tasksOutput")

      //This while loop essentially removes all child nodes of an element
      //until the element has no child nodes left. It is equivalent to the
      //following: outputArticle.innerHTML = "" - If we do not do this,
      //each time we add a new food item using our form, all the food items
      //will be appended to the bottom of our list so that we will have duplicates.
      //To understand why this while loop is needed, try commenting it out and
      //observe the behavior of the application. Essentially, we are clearing
      //out our output container (our article tag with class "output") so that
      //we repopulate it.
      while (outputArticle.firstChild) {
        outputArticle.removeChild(outputArticle.firstChild);
      }
      outputArticle.appendChild(taskDocFragment)

    }
  }

export default TasksList