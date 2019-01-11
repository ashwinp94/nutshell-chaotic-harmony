// This module will get the data, build the HTML and append it to the DOM.
import newsFetch from "./newsFetch"
import newsCreateObject from "./newsCreateObject"
// This module gets data from fetch get request, build the HTML and append it to the DOM.
const newsList= {
    newshtmlappending(){
        newsFetch.getAllNews()
        .then(parsedResponce => {
            // create new document fragment
            let newsDocFragment = document.createDocumentFragment()
            // loop through an array of object we get from get request
            parsedResponce.forEach(news => {
                // build html
                let newsHtml = newsCreateObject.articleBuilder(news)
                // append the html to the document fragment
                newsDocFragment.appendChild(newsHtml)
                // get a reference of our container in index.html
                let newsOutput = document.querySelector("#newsOutput")
                // append document fragment to the container
                newsOutput.appendChild(newsDocFragment)
            })
        })
    }
}
export default newsList
