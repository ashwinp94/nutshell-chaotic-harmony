// This module will build an input form and append it to the DOM
import newsList from "./newsList"
import newsFetch from "./newsFetch"

const newsDomBuilder= {
    addNewArticleForm() {
      // Build HTML form
      let addewsHeader = document.createElement("h3")
      addewsHeader.textContent = "Add new article"
  
      let newsTitleField = document.createElement("fieldset")
  
      let newsTitleLabel = document.createElement("label")
      newsTitleLabel.textContent = "title"
      newsTitleLabel.setAttribute("for", "newsTitle")
      let newsTitleInput = document.createElement("input")
      newsTitleInput.setAttribute("id", "newsTitle")
      newsTitleInput.setAttribute("name", "news-Title")
  
      newsTitleField.appendChild(newsTitleLabel)
      newsTitleField.appendChild(newsTitleInput)
  
      let newsSynopsisField = document.createElement("fieldset")
  
      let newsSynopsisLabel = document.createElement("label")
      newsSynopsisLabel.textContent = "synopsis"
      newsSynopsisLabel.setAttribute("for", "newsSynopsis")
      let newsSynopsisInput = document.createElement("input")
      newsSynopsisInput.setAttribute("id", "newsSynopsis")
      newsSynopsisInput.setAttribute("name", "news-Synopsis")
  
      newsSynopsisField.appendChild(newsSynopsisLabel)
      newsSynopsisField.appendChild(newsSynopsisInput)
  
      let newsUrlField = document.createElement("fieldset")
  
      let newsUrlLabel = document.createElement("label")
      newsUrlLabel.textContent = "url"
      newsUrlLabel.setAttribute("for", "newsUrl")
      let newsUrlInput = document.createElement("input")
      newsUrlInput.setAttribute("id", "newsUrl")
      newsUrlInput.setAttribute("name", "news-Url")
  
      newsUrlField.appendChild(newsUrlLabel)
      newsUrlField.appendChild(newsUrlInput)
  
      let submitButton = document.createElement("button")
      submitButton.textContent = "Add new article"
      submitButton.setAttribute("class", "newsSave")
  
      // Attach event listener to button in form
      submitButton.addEventListener("click", this.handleAddNewArticle)

      // Append the HTML form to the DOM
      const newsForm = document.querySelector("#newsForm")
      // let formArticle= document.createElement("article")
      // newsOutput.appendChild(formArticle)
      let newsFormFragment = document.createDocumentFragment()
      newsFormFragment.appendChild(addewsHeader)
      newsFormFragment.appendChild(newsTitleField)
      newsFormFragment.appendChild(newsSynopsisField)
      newsFormFragment.appendChild(newsUrlField)
      newsFormFragment.appendChild(submitButton)
      newsForm.appendChild(newsFormFragment)
      // formArticle= ""
      // new
  
    },
    handleAddNewArticle (event) {
      // 1. Get user input that user entered
      let inputNewsTitle = document.querySelector("#newsTitle").value
      let inputNewsSynopsis = document.querySelector("#newsSynopsis").value
      let inputNewsUrl = document.querySelector("#newsUrl").value
  
      let newsObject = {
        title: inputNewsTitle,
        synopsis: inputNewsSynopsis,
        url: inputNewsUrl
      }
      newsFetch.postNewArticle(newsObject)
      .then(response => {
        newsList.newshtmlappending()
      })
    }
}
export default newsDomBuilder