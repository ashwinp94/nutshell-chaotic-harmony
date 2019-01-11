import messageCollection from "./fetch"
import messageList from "./list"

const messageEditForm = {
    createAndAppendForm (chatId, messageObjToEdit){
        let messageEditField = document.createElement("p");

        let messageEditLabel = document.createElement("label")
        messageEditLabel.textContent = "Edit Message"
        let messageEditInput = document.createElement("input")
        messageEditInput.value = messageObjToEdit.message

        messageEditField.appendChild(messageEditLabel)
        messageEditField.appendChild(messageEditInput)

        let updateButton = document.createElement("button")
        updateButton.textContent = "Update"

        updateButton.addEventListener("click", ()=>{
            let editedMessage = {
                message: messageEditInput.value,
            }
            messageCollection.putExistingMessages(messageObjToEdit.id, editedMessage)
            .then( () => {
                messageList.chatify()
            })
        })
        let messageItemArticle = document.querySelector(`#${chatId}`)

        while(messageItemArticle.firstChild){
            messageItemArticle.removeChild(messageItemArticle.firstChild)
        }
        messageItemArticle.appendChild(messageEditField)
        messageItemArticle.appendChild(updateButton)
    }
}

export default messageEditForm