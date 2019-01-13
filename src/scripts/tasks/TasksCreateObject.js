//  import TasksFetch from "./TasksFetch"
//  import TasksList from "./TasksList"
//  import TasksEditForm from "./TasksEditForm"

// // // Task object structure:
// // // "tasks": [
// // //     {
// // //         "id": 1,
// // //         "userId": 1,
// // //         "task": "Take out garbage",
// // //         "dueDate": "12/12/2018",
// // //         "complete": "False"
// // //     }
// // // ],
// // // <article>
// // // <h1>Task List</h1>
// // // <h2>Click to Edit or Check Complete</h2><br>

// // // List of Tasks produced by looping thru array - Call taskList
// // // <span class="spanClass"><input type="checkbox" name="complete" value="false">
// // // <p>dueDate value</p>
// // // <button>task value</button>

// // // <br><br>
// // // <h2>Add New Task</h2>
// // // <label for="dueDate">Due Date</label><br>
// // // <input type="date" name="dueDate" id="dueDate">
// // // <label for"task">Task</label><br>
// // // <input type="text" name="task">
// // // </article>

//  const TasksCreateObject = {
//    taskBuilder(taskObject) {
//    let taskH4 = document.createElement("h4")
//    let taskName = document.createElement("span")
//    taskName.textContent = taskObject.task

//    let taskDueDate = document.createElement("span")
//    taskDueDate = taskObject.dueDate

//    let taskComplete = document.createElement("span")
//    taskComplete.value = taskObject.complete

//    taskH4.appendChild(taskName)
//    taskH4.appendChild(taskDueDate)
//    taskH4.appendChild(taskComplete)

//    return taskH4
//    }
//   }
// //       // In order to change the data for an existing food item in our
// //       // API, we need to provide the user with a way to edit the
// //       // existing values. This means we will show the user a form with
// //       // the existing values already populated. Once again, we want our
// //       // data to be our point of truth. So we make a HTTP GET request
// //       // targeting the specific food item the user wants to edit to
// //       // get the data that will be populated in the form. Once we have
// //       // that data, we can build the form, populate the input field
// //       // with our data form the GET request and then append that form
// //       // to the appropriate place on the DOM
//   //  editCompleteAndTask() {
//   //      let editFoodButton = document.createElement("button")
// //       editFoodButton.textContent = "Edit"
// //       editFoodButton.addEventListener("click", () => {
// //         let articleId = event.target.parentNode.id
// //         let foodId = articleId.split("--")[1]
// //         foodCollection.getFood(foodId)
// //         .then(response => {
// //           foodEditForm.createAndAppendForm(articleId, response)
// //         })
// //       })
// //       // Since we can get the id of the food item to be deleted from the parent element(the article element), we can use that to make an HTTP DELETE request to our API. Once again after this we want to get the list of food items from the API using a HTTP GET request and display it to the user so that the user does not have to refresh the page in order to see that the item they deleted has actually been deleted.
// //       let deleteFoodButton = document.createElement("button")
// //       deleteFoodButton.textContent = "Delete"
// //       deleteFoodButton.addEventListener("click", () => {
// //         let foodId = event.target.parentNode.id.split("--")[1]
// //         foodCollection.deleteFood(foodId)
// //         .then(response => {
// //           foodList.fridgify()
// //         })
// //       })
    
  
// //       foodArticle.appendChild(foodName)
// //       foodArticle.appendChild(foodExp)
// //       foodArticle.appendChild(foodType)
// //       foodArticle.appendChild(editFoodButton)
// //       foodArticle.appendChild(deleteFoodButton)
  
// //       return foodArticle
// //     }
// //   }
