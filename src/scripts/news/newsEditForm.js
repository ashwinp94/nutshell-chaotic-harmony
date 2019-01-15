// This module will build an edit form and append it to the DOM.
import newsFetch from "./newsFetch"
import newsList from "./newsList"

const newsEditForm = {
    
    createAndAppendEditForm (articleId, newsObjectToEdit) {
// Building the edit form 
// Each of the input fields contains the existing values from the database.
        let newsTitleField = document.createElement("p")
  
        let newsTitleLabel = document.createElement("label")
        newsTitleLabel.textContent = "title"
        let newsTitleInput = document.createElement("input")
        newsTitleInput.value= newsObjectToEdit.title
    
        newsTitleField.appendChild(newsTitleLabel)
        newsTitleField.appendChild(newsTitleInput)

        let newsSynopsisField = document.createElement("p")
  
      let newsSynopsisLabel = document.createElement("label")
      newsSynopsisLabel.textContent = "synopsis"
      let newsSynopsisInput = document.createElement("input")
      newsSynopsisInput.value= newsObjectToEdit.synopsis
  
      newsSynopsisField.appendChild(newsSynopsisLabel)
      newsSynopsisField.appendChild(newsSynopsisInput)

      let newsUrlField = document.createElement("p")
  
      let newsUrlLabel = document.createElement("label")
      newsUrlLabel.textContent = "url"
      let newsUrlInput = document.createElement("input")
      newsUrlInput.value= newsObjectToEdit.url
  
      newsUrlField.appendChild(newsUrlLabel)
      newsUrlField.appendChild(newsUrlInput)
      // creating update button
      let updateButton = document.createElement("button")
      updateButton.textContent = "Update"
      // event listener on the Update button 
      updateButton.addEventListener("click", () => {
        // build an object for the news item to be edited.
        let editedArticle = {
          title: newsTitleInput.value,
          synopsis: newsSynopsisInput.value,
          url: newsUrlInput.value
        }
        // pass it to the put fetch call
        newsFetch.putExistingNews(newsObjectToEdit.id, editedArticle)
        .then(response => {
          newsList.newshtmlappending()
        })
      })
  
      // We passed in the id of the article so we know exactly where to append the edit form.
      let newsItemArticle = document.querySelector(`#${articleId}`)
  
      // Because we want to replace what is currently in the article element with the edit form, we clear out all children HTML elements in our targeted element before appending our edit form to it.
      while (newsItemArticle.firstChild) {
        newsItemArticle.removeChild(newsItemArticle.firstChild);
      }
      newsItemArticle.appendChild(newsTitleField)
      newsItemArticle.appendChild(newsSynopsisField)
      newsItemArticle.appendChild(newsUrlField)
      newsItemArticle.appendChild(updateButton)
    }
  }
  export default newsEditForm