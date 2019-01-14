import Data from "./UserData"

const Login = {
    // adding Login page to the dom
    appendLogin() {
        let login = document.querySelector("#userInput");
        login.innerHTML = `<div> <h1>Welcome to Nutshell</h1> 
   
    <section class="auth hidden">
      Username: 
    
      <input class="username__Input" type="text" name="username">
   
        Email:

    
      <input class="email__Input" type="text" name="email">
    
    <button class="button--login">Log in</button>
  </section>
  </div>`
    },
    // after when you click the register button, a new form that have email and password inputwill populate the dom
    signUp() {

        let registerAccount = document.querySelector("#usersOutput");
        registerAccount.innerHTML =  `<h3> Sign Up</h3> </br>
        <p> It’s free and always will be.</p>
        <form>
        <input class="usernameInput"type="text" name="username"placeholder = "put your username">
       </div>
       </br>
        <input class="emailInput"type="text" name="email"placeholder = "put your email">
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
                allUsers.forEach(user => {
                    if (username === user.username && email === user.email) {
                        console.log(user.username)
                        alert(` ${user.username} is success`)
                        sessionStorage.setItem("user Id", user.id)

                    
                    }else if (userStart === allUsers.length){
                        alert ("not registered")
                    }else { userStart ++

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
           // add user input into an object that will be passed into the database
           let newEntry = {
               username : newUser,
               email : newEmail
           };
           Data.postNewUser(newEntry)
    }
}








































export default Login

