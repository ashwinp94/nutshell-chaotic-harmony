import TasksFetch from "./TasksFetch"
import TasksCreateObject from "./TasksCreateObject"

const TasksList = {
  createDomList() {
// ***** Need to replace "1" value for userId with
// the variable being passed *****
const userId = 1;
    TasksFetch.getAllTasksById()
    .then(allTasks => {
      let taskDocFragment = document.createDocumentFragment()
      allTasks.forEach(taskItem => {
          let taskHtml = TasksCreateObject.taskBuilder(taskItem)
          taskDocFragment.appendChild(taskHtml)
          console.log(taskDocFragment)
        })

      let outputArticle = document.querySelector("#taskListOutput")
      outputArticle.setAttribute("class", "editContainer")

      //This while loop essentially removes all child nodes of an element
      //until the element has no child nodes left. It is equivalent to the
      //following: outputArticle.innerHTML = "" - If we don't do this,
      //each time a new task is added using the form, all the tasks
      //will be appended again to the bottom of the list.
      //Essentially, it clears the output container (article tag with
      //id taskOutput before repopulating it.
      while (outputArticle.firstChild) {
        outputArticle.removeChild(outputArticle.firstChild);
      }
      outputArticle.appendChild(taskDocFragment)
    })
  }
}
export default TasksList