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
          }
    }
    export default newsFetch