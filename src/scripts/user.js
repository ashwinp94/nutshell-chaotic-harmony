
const auth = () => {
    document.querySelector("#container").innerHTML = authFormManager.authForm()
    saveAuth()
  }