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
            registerDom.innerHTML = ` <div class="d-flex justify-content-center">
            <div class="card w-50 text-center">
              <div class="card-header">
              </div>
              <div class="text-center card-body"  id="welcome">
                <h1 class="card-title">Welcome</h1>
                <p class="card-text">Sign in or Register for a username.</p>
                <fieldset>
                  <label for="username"><b>Username</b></label>
                  <input type="text" placeholder="Enter username" id="username" name="username">
                  <label for="psw"><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" id="psw" name="psw">
                </fieldset>
                <button type="button" class="btn btn-info" id="registerBtn">Register</button>
                <button type="button" class="btn btn-secondary" id="loginBtn">Login</button>
              </div>
            <div class="card-footer text-muted">
          </div>
        </div>
      </div>`
        })
    },
    // giving variable name of user input and email input

    testEvent() {
        let submitButton = document.querySelector(".button--login");
        submitButton.addEventListener("click", getUserData)
            
    
    },
    getUserData() {
        let username = document.querySelector(".username__Input").value.target;
        let email = document.querySelector(".email__Input").value.target;
        Data.getData("users")
            .then(allUsers => {
                let UserStart = 1;
                allUsers.forEach(user => {
                    if (username === user.username && email === user.email) {
                        console.log(`this is: ${user.email}`)
                    }
                });
            })

    }
}








































export default Login

