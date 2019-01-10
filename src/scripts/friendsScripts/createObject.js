const chat = {
    chatBuilder(chatObject){
        let chatArea = document.createElement("article")

        let chatHeader = document.createElement("h3")
        chatHeader.textContent = "Chat"

        let chatName = document.createElement("section")
        chatName.textContent = chatObject.  userId;
        console.log(chatObject.user)

        let chatMessage = document.createElement("section")
        chatMessage.textContent = chatObject.message;

        chatArea.appendChild(chatHeader);
        chatArea.appendChild(chatName);
        chatArea.appendChild(chatMessage)

        return chatArea

    }
}


export default chat;