import messageCollection from "./fetch"

let currentUserId = 1;

const messageForm = {
    createAndAppendInput() {
        let chatHeader = document.createElement("h3")
        chatHeader.textContent = "Chat"

        let chatMessageField = document.createElement("fieldset")

        let chatNameLabel = document.createElement("label")
        chatNameLabel.textContent = "Enter Your Message"
        chatNameLabel.setAttribute("for", "chat_text")
        let chatInput = document.createElement("input")
        chatInput.setAttribute("id", "chat_text")
        chatInput.setAttribute("name", "chat_text")

        chatMessageField.appendChild(chatNameLabel)
        chatMessageField.appendChild(chatInput)

        let submitButton = document.createElement("button")
        submitButton.textContent = "Send"
        submitButton.setAttribute("id", "chat_send")

        submitButton.addEventListener("click", messageForm.handleAddNewMessage)

        let chatFormFragment = document.createDocumentFragment()
        chatFormFragment.appendChild(chatMessageField)
        chatFormFragment.appendChild(submitButton)

        let inputArticle = document.querySelector("#messagesInput")
        inputArticle.appendChild(chatFormFragment)

    },
    handleAddNewMessage() {
        let inputMessage = document.querySelector("#chat_text").value

        let newMessage = {
            message: inputMessage,
            userId: currentUserId,
        }
        messageCollection.postAllMessages(newMessage)
    }
}

export default messageForm