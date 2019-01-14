const TasksFetch = {

    getAllTasks() {
      return fetch("http://localhost:8088/tasks")
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
  
    