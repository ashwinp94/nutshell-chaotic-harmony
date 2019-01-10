import messageCollection from "./fetch"
import chat from "./createObject";

const messageForm = {
    createAndAppendInput() {

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

        submitButton.addEventListener("click", messageForm.handleAddNewContact)
    }
}