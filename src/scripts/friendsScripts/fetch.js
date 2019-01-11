const messageCollection = {
    getAllMessages (){
        return fetch ("http://localhost:8088/messages?_expand=user")
        .then(response => response.json())
    },
    postAllMessages(newMessageToSave) {
        fetch("http://localhost:8088/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newMessageToSave)
        })
        location.reload(true)
    },
    getMessage(chatId) {
        return fetch(`http://localhost:8088/fridge/${chatId}`)
        .then(response => response.json())
    }
}

export default messageCollection