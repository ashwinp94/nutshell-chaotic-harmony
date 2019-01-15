import messageCollection from "./fetch"
import messageEditForm from "./editForm"
import messageList from "./list";

let currentUserName = sessionStorage.getItem("userName");
let currentUserId1 = sessionStorage.getItem("user Id");

const chat = {
    chatBuilder(chatObject){
        let chatArea = document.createElement("article")
        chatArea.setAttribute("id", `chat--${chatObject.id}`)

        let chatName = document.createElement("h3")
        chatName.textContent = `${chatObject.users.username}`;
        chatName.setAttribute("id", `${chatObject.users.username}` )

        let chatMessage = document.createElement("section")
        chatMessage.textContent = chatObject.message;

        let chatTime = document.createElement("section")
        chatTime.textContent= chatObject.time;

        chatArea.appendChild(chatName);
        chatArea.appendChild(chatMessage);
        chatArea.appendChild(chatTime);

        if (`${chatObject.user.username}`=== currentUserName) {
            let editMessageButton = document.createElement("button")
            editMessageButton.textContent = "Edit";
            chatArea.appendChild(editMessageButton);

            editMessageButton.addEventListener("click", () => {
                let articleId = event.target.parentNode.id
                let chatId = articleId.split("--")[1]
                messageCollection.getMessage(chatId)
                .then(response => {
                    messageEditForm.createAndAppendForm(articleId, response)
                })
            })
        }
    //     let friendsNameClass = document.getElementsByClassName(`${chatObject.user.username}`)
    //     messageCollection.getFriendInChat("friends")
    //         .then(allFriends => {
    //             allFriends.forEach(friend => {
    //             if (currentUserId1.userId === friendsNameClass){
    //                 console.log(friendsNameClass)
    //             }else{
    //             let addButton = document.createElement("button");
    //             addButton.textContent = "Add Friend"
    //             chatArea.appendChild(addButton);
    //             addButton.addEventListener("click", () => {

    //             let friendsId = chatObject.user.username;
    //             let newFriends = {
    //             currentUserId: currentUserId1,
    //             userId: friendsId,
    //         }
    //             messageCollection.postAllFriends(newFriends)
    //             .then(response => {
    //             messageList.friendify();
    //                 })
    //             })
    //         }
    //     })
    // })
        return chatArea
    }
}


export default chat;