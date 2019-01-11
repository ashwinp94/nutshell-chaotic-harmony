const Login = {
// adding Login page to the dom
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
    <button class="button--account">Sign up</button>
  </section>`
},
// after when you click the register button, a new form that have email and password inputwill populate the dom
signUp() {

    let registerDom = document.querySelector("#usersOutput");
    let registerAccount = document.querySelector(".button--account");
    registerAccount.addEventListener("click", function() {
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
}
}




export default Login

