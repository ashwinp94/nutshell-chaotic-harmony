import Data from "./UserData"

const Login = {
    // adding Login page to the dom
    appendLogin() {
        let login = document.querySelector("#userInput");
        login.innerHTML = ` <h1>Welcome to Nutshell</h1>
   
    <section class="auth hidden">
    <div class="username__Prompt">
      Username: 
    </div>
    <div >
      <input class="username__Input" type="text" name="username">
    </div>
    <div class="email__Prompt">
        Email:
    </div>
    <div >
      <input class="email__Input" type="text" name="email">
    </div>
    <button class="button--login">Login</button>
  </section>`
  
    },
    // after when you click the register button, a new form that have email and password inputwill populate the dom
    signUp() {

        let registerAccount = document.querySelector("#usersOutput");
        registerAccount.innerHTML =  `<h3> Sign Up</h3> </br>
        <p> It’s free and always will be.</p>
        <form>
        <div class="dek__usernamePrompt">
         New username: 
       </div>
       
        <input class="usernameInput"type="text" name="username">
       </div>
       <div class="emailPrompt">
           Email:
       </div>
       
        <input class="emailInput"type="text" name="email"></br>
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
                allUsers.forEach(user => {
                    if (username === user.username && email === user.email) {
                        console.log(user.username)
                        alert(` ${user.username} is success`)
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

