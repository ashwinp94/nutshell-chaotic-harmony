const TasksFetch = {

  // ***** Need to replace "1" value for userId with
// the variable being passed *****

    getAllTasksById() {
      return fetch(`http://localhost:8088/tasks?userId=1&complete=unchecked`)
      .then(response => response.json())
    },
    postNewTask(newTaskToSave) {
      return fetch("http://localhost:8088/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTaskToSave)
      })
    },
    getTask(taskId) {
      return fetch(`http://localhost:8088/tasks/${taskId}`)
      .then(response => response.json())
    },

    putExistingTask(taskId, taskToEdit) {
      return fetch(`http://localhost:8088/tasks/${taskId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(taskToEdit)
      })
    }
  }
  export default TasksFetch