import chat from "./createObject"
import messageCollection from "./fetch"

const messageList = {
    chatify() {
        messageCollection.getAllMessages()
        .then(allMessages=>{
            let chatDocFragment = document.createDocumentFragment()
            allMessages.forEach(messageItem => {
                let chatHTML = chat.chatBuilder(messageItem)
                chatDocFragment.appendChild(chatHTML)
            });
            let messageOutput = document.querySelector("#messagesOutput")
            while (messageOutput.firstChild){
                messageOutput.removeChild(messageOutput.firstChild)
            }
            messageOutput.appendChild(chatDocFragment)
        })
    }
}

export default messageList