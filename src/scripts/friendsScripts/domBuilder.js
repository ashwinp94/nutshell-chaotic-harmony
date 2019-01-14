import messageCollection from "./fetch"
import messageList from "./list"

let currentUserId = sessionStorage.getItem("user Id");

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

        submitButton.addEventListener("click", messageForm.handleAddNewMessage)


        let chatFormFragment = document.createDocumentFragment()
        chatFormFragment.appendChild(chatMessageField)
        chatFormFragment.appendChild(submitButton)

        let inputArticle = document.querySelector("#messagesInput")
        inputArticle.appendChild(chatFormFragment)

    },
    createChatHeader() {
        let header1 = "<h1>Chat With Anyone!</h1>";
        let headerContainer = document.querySelector("#chatHeader")
        headerContainer.innerHTML= header1
    },
    handleAddNewMessage() {
        let inputMessage = document.querySelector("#chat_text").value
        let currentTime = new Date();


        let newMessage = {
            message: inputMessage,
            userId: currentUserId,
            time: currentTime,
        }
        messageCollection.postAllMessages(newMessage)
        .then(response =>{
            messageList.chatify();
        })
    }
}

export default messageForm