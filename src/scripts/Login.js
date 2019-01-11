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
    <button class="button--account">Sign up</button>
  </section>`
    },
    // after when you click the register button, a new form that have email and password inputwill populate the dom
    signUp() {

        let registerDom = document.querySelector("#usersOutput");
        let registerAccount = document.querySelector(".button--account");
        registerAccount.addEventListener("click", function () {
            registerDom.innerHTML = ` <form>
        <div class="dek__usernamePrompt">
        New username: 
      </div>
      <div class="usernameInput">
        <input type="text" name="username">
      </div>
      <div class="emailPrompt">
          Email:
      </div>
      <div class="emailInput"> 
       <input type="text" name="email"></br>
       <button class="newAccount">Register</button>
       </form>`
        })
    },
    // giving variable name of user input and email input
    testEvent(){
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
                        console.log(`this is: ${user.id}`)
                    }
                });
            })

    }
}








































export default Login

