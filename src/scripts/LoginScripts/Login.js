import Data from "./UserData"

import NavBar from "../NavBar";

const Login = {
    // adding Login page to the dom
    appendLogin() {
        let login = document.querySelector("#userInput");
        login.innerHTML = `<div 
    <section class="auth hidden">
      Username:

      <input class="username__Input" type="text" name="username">

        Email:


      <input class="email__Input" type="text" name="email">

    <button class="button--login">Log in</button>
  </section> </div>`
    },
    // after when you click the register button, a new form that have email and password inputwill populate the dom
    signUp() {

        let registerAccount = document.querySelector("#usersOutput");
        registerAccount.innerHTML = `<h2> Sign Up</h2>
        </br>
        <p> It’s free and always will be.</p> </br>
        <form>
        <input class="usernameInput"type="text" name="username"placeholder = "Put your username">
       </div>
       </br>
        <input class="emailInput"type="email" name="email"placeholder = "Put your email">
        </br>
        <button class="newAccount">Register</button>
        </form>`


    },

    // giving variable name of user input and email input
    testEvent() {
        let submitButton = document.querySelector(".button--login");
        submitButton.addEventListener("click", Login.getUserData)

    },

    getUserData() {
        let username = document.querySelector(".username__Input").value;
        let email = document.querySelector(".email__Input").value;
        Data.getData("users")
            .then(allUsers => {
                let userStart = 1;
                allUsers.forEach(users => {
                    if (username === users.username && email === users.email) {
                        console.log(users.username)
                        alert(` ${users.username} is success`)
                        sessionStorage.setItem("user Id", users.id)
                        sessionStorage.setItem("userName", users.username)
                        NavBar.clearDom()
                        NavBar.navBuilder()

                    } else if (userStart === allUsers.length) {
                        alert("not registered")
                    } 
                    else {
                        userStart++
                    }

                });
            })

    },
    registerUser() {
        let newUser = document.querySelector(".newAccount")
        newUser.addEventListener("click", Login.registerData)
    },
    registerData() {
        let newUser = document.querySelector(".usernameInput").value;
        let newEmail = document.querySelector(".emailInput").value;
        if (newUser === "" && newEmail === "") {
            alert("blank page, please write something")
        } else {
            // add user input into an object that will be passed into the database
            let newEntry = {
                username: newUser,
                email: newEmail
            };
            Data.postNewUser(newEntry)


        }
    }
}








































export default Login

