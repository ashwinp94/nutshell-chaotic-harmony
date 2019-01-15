// This module make all fetch calls for this application
const newsFetch= {
        getAllNews() {
          // GET request made by this fetch call, gives us an array of object
      return fetch("http://localhost:8088/news")
      .then(response => response.json())
    },
    // POST request made by this fetch call, take one argument (object), posts new article to our API collection.
    postNewArticle(newArticleToSave) {
        return fetch("http://localhost:8088/news", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(newArticleToSave)
        })
    },
    // delete fetch call, takes one argument (id) to target which article we are deleting
    deleteArticle(newsId) {
      return fetch(`http://localhost:8088/news/${newsId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
      })
    },
    getNews(newsId) {
        return fetch(`http://localhost:8088/news/${newsId}`)
        .then(response => response.json())
      },
      // In order to edit an existing food item, we need the id to identify which food item we want to edit and the new data we want to replace the existing data with. So this time, we have two arguments for the method.
      putExistingNews(newsId, newsToEdit) {
        return fetch(`http://localhost:8088/news/${newsId}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(newsToEdit)
        })
          }
    }
    export default newsFetch