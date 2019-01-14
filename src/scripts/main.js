import Login from "./LoginScripts/Login"
import Data from "./LoginScripts/UserData"
import NaVBar from "./tasks/NavBar"

Data.getData()
Login.appendLogin();
Login.signUp()
Login.testEvent()

Login.registerUser()


NaVBar.navBuilder()





















// const event = {
//     eventLogin (){
//     let online = document.querySelector(".button--login");
//     console.log(dateField)
// },

// submitEventListener(){
//     // get user input
//     let dateField = document.querySelector(".username__Input").value;
//     let conceptField = document.querySelector(".email__Input").value;
// }
// }








// const data = {
// getUserEntry() {
//     return fetch("http://localhost:8088/username")
//     .then(entries => database.json())
//          return fetch(UserData)
//              .then(entryParsed => res.json())
//      }
//     }
// authDataManager.getUsers()




















 // },
//         // addUserEntry(newPost) {
//         //     return fetch("http://localhost:8088/entries", {
//         //         method: "POST",
//         //         headers: {
//         //             "Content-Type": "application/json"
//         //         },
//         //         body: JSON.stringify(newPost),
//         //     })
//         }
//     }
//     //

// const loginButtonEvent = {
//     submitEntry() {
//         let loginButton = document.querySelector(".button--login");
//         loginButton.addEventListener("click", )
//     },
//     submitEventListener() {
//         let usernameLogin = document.querySelector(".username__Input").value;
//         let emailLogin = document.querySelector(".email__Input");


//         let newEntry = {
//             userName : usernameLogin,
//             email: emailLogin
//         };

//     }
// }




// // NAVBAR
// import NavBar from "./tasks/NavBar"
// LOGIN
import Login from "./Login"
import Data from "./UserData"

// NAVBAR
import NavBar from "./NavBar"

// // CHAT
// import messageList from "./friendsScripts/list"
// import messageForm from "./friendsScripts/domBuilder"

// TASKS
import  TasksDomBuilder from "./tasks/TasksDomBuilder"
import TasksList from "./tasks/TasksList"

// // NEWS
// import newsDomBuilder from "./news/newsDomBuilder"
// import newsList from "./news/newsList"

// // EVENTS


// // *********************

// // NAVBAR
// NavBar.navBuilder();

// // CHAT
// messageForm.createChatHeader();
// messageList.chatify();
// messageForm.createAndAppendInput();

// // TASKS
// TasksDomBuilder.createAndAppendForm()

// // NEWS
// newsDomBuilder.addNewArticleForm()
// newsList.newshtmlappending()
// LOGIN
//Data.getData()
//Login.appendLogin();
//Login.signUp()
//Login.testEvent()

// NAVBAR
NavBar.navBuilder();

// CHAT
//messageForm.createChatHeader();
//messageList.chatify();
//messageForm.createAndAppendInput();

// TASKS
//TasksDomBuilder.createAndAppendForm();
//TasksList.createDomList


// NEWS
//newsDomBuilder.addNewArticleForm();
//newsList.newshtmlappending();

// EVENTS
