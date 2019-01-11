import messageCollection from "./fetch"
import messageEditForm from "./editForm"

const chat = {
    chatBuilder(chatObject){
        let chatArea = document.createElement("article")
        chatArea.setAttribute("id", `chat--${chatObject.id}`)

        let chatName = document.createElement("h3")
        chatName.textContent = chatObject.user.username;

        let chatMessage = document.createElement("section")
        chatMessage.textContent = chatObject.message;

        let chatTime = document.createElement("section")
        chatTime.textContent= chatObject.time;

        let editMessageButton = document.createElement("button")
        editMessageButton.textContent = "Edit",
        editMessageButton.addEventListener("click", () => {
            let articleId = event.target.parentNode.id
            let chatId = articleId.split("--")[1]
            messageCollection.getMessage(chatId)
            .then(response => {
                messageEditForm.createAndAppendForm(chatId, response)
            })
        })

        chatArea.appendChild(chatName);
        chatArea.appendChild(chatMessage);
        chatArea.appendChild(chatTime);
        chatArea.appendChild(editMessageButton);

        return chatArea
    }
}


export default chat;