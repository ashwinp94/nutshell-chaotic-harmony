import messageCollection from "./fetch"


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
        editMessageButton.addEventListener("click", () =>{
            let articleId = event.target.parentNode.id
            let chatId = articleId.split("--")[1]

        })



        chatArea.appendChild(chatName);
        chatArea.appendChild(chatMessage);
        chatArea.appendChild(chatTime);

        return chatArea
    }
}


export default chat;