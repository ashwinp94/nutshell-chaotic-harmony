import chat from "./createObject"
import messageCollection from "./fetch"
import messageForm from "./domBuilder";

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
    },
    friendify() {
        messageCollection.getFriendInChat()
        .then(allFriends =>{
            let friendDocFragment = document.createDocumentFragment()
            allFriends.forEach(friendItem => {
                let friendHTML = messageForm.friendBuilder(friendItem)
                friendDocFragment.appendChild(friendHTML)
            })
            let friendOutput = document.querySelector("#friendsOutput")
            while (friendOutput.firstChild){
                friendOutput.removeChild(friendOutput.firstChild)
            }
            friendOutput.appendChild(friendDocFragment)
        })
    }
}

export default messageList