const Login = {

    appendLogin() {
    let login = document.querySelector("#userInput");
    login.innerHTML = ` <h1>Welcome to Nutshell</h1>
   
    <section class="auth hidden">
    <div class="username__Prompt">
      Username: 
    </div>
    <div class="username__Input">
      <input type="text" name="username">
    </div>
    <div class="email__Prompt">
        Email:
    </div>
    <div class="email__Input">
      <input type="text" name="email">
    </div>
    <button class="button--login">Login</button>
    <button class="button--newAccount">New account</button>
  </section>`
},

registerNewUser() {

    let registerDom = document.querySelector("#usersOutput");
    let registerAccount = document.querySelector(".button--newAccount");
    registerAccount.addEventListener("click", function() {
        registerDom.innerHTML = ` <form>
        <div class="dek__usernamePrompt">
        new username: 
      </div>
      <div class="usernameInput">
        <input type="text" name="username">
      </div>
      <div class="emailPrompt">
          Email:
      </div>
      <div class="emailInput">
        <input type="text" name="email">
        </form>`
    })
     },
        getUserEntry() {
            return fetch("http://localhost:8088/username")
            .then(entries => database.json())
        }
    }
export default Login