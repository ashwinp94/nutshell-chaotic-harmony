let currentUserId = sessionStorage.getItem("user Id");

const messageCollection = {
    getAllMessages (){
        return fetch ("http://localhost:8088/messages?_expand=user")
        .then(response => response.json())
    },
    postAllMessages(newMessageToSave) {
        return fetch("http://localhost:8088/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newMessageToSave)
        })
    },
    getMessage(chatId) {
        return fetch(`http://localhost:8088/messages/${chatId}`)
        .then(response => response.json())
    },
    putExistingMessages(chatId, messagesToEdit){
        return fetch(`http://localhost:8088/messages/${chatId}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(messagesToEdit)
        })
    },
    getFriendInChat() {
        return fetch(`http://localhost:8088/friends?currentUserId=${currentUserId}&_expand=user`) //friends?currentUserId=1&_expand=user
        .then(response => response.json())
        },
    postAllFriends(newFriendToSave){
        return fetch("http://localhost:8088/friends", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newFriendToSave)
        })
    }
}

export default messageCollection