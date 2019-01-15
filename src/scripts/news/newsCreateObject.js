// This module will build html form for an object and append it to the DOM
import newsFetch from "./newsFetch"
import newsList from "./newsList"
import newsEditForm from "./newsEditForm.js"

const newsCreateObject = {
  // method to build html form, takes one argument it is an object from database
    articleBuilder(articleObject) {
      // create html elements
      let newsSection = document.createElement("section")
      newsSection.setAttribute("id", `news--${articleObject.id}`)
      let newsTitle = document.createElement("h3")
      // get content from database
      newsTitle.textContent = `${articleObject.title}`
      let newsSynopsis = document.createElement("p")
      newsSynopsis.textContent = `${articleObject.synopsis}`
      let newsUrl = document.createElement("p")
      newsUrl.textContent = `${articleObject.url}`
      // let newsuserId = document.createElement("h4")
      // newsuserId.textContent = `${articleObject.userId}`
      // let newstimeStamp = document.createElement("h4")
      // newstimeStamp.textContent = `${articleObject.timeStamp}`
      
    //   edit button
    let editArticleButton = document.createElement("button")
    editArticleButton.textContent = "Edit"
    editArticleButton.addEventListener("click", () => {
      let articleId = event.target.parentNode.id
      let newsId = articleId.split("--")[1]
      newsFetch.getNews(newsId)
      .then(response => {
        newsEditForm.createAndAppendEditForm(articleId, response)
      })
    })
      
      // create delete button
      let deleteArticleButton = document.createElement("button")
      deleteArticleButton.textContent = "Delete"
      deleteArticleButton.setAttribute("id", `news--${articleObject.id}`)
      // add eventListener to the delete button
      deleteArticleButton.addEventListener("click", () => {
      let newsId = event.target.id.split("--")[1]
      newsFetch.deleteArticle(newsId)
      .then(response => {
        newsList.newshtmlappending()
      })
    })
    // append it to the section
      newsSection.appendChild(newsTitle)
      newsSection.appendChild(newsSynopsis)
      newsSection.appendChild(newsUrl)
    //   newsSection.appendChild(newsuserId)
    //   newsSection.appendChild(newstimeStamp)
    newsSection.appendChild(editArticleButton)
      newsSection.appendChild(deleteArticleButton)
      return newsSection
    }
  }
  export default newsCreateObject