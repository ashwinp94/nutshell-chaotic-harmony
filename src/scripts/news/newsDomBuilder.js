// This module will build an input form and append it to the DOM
import newsList from "./newsList"
import newsFetch from "./newsFetch"

const newsDomBuilder= {
    addNewArticleForm() {
        // button created when clicked displays a form to inter New article
        const newsOutput= document.querySelector("#newsOutput")
        let newArticleBtn= document.createElement("button")
        let newBtn= document.createTextNode("New article")
        newArticleBtn.classList.add("newArticleBtn")
        newArticleBtn.appendChild(newBtn)
        newsOutput.appendChild(newArticleBtn)
        // add eventListener to the above button
        newArticleBtn.addEventListener("click", ()=>{
            // get reference of container in index.html
            const newsOutput= document.querySelector("#newsOutput")
            // create new article form
            let inputForm = `
            <article>
            <h2>add your article here</h2>
                <section>
                    <label for="new-title">News title:</label>
                    <input id="new-title" name="new-title" type="text" />
                </section>
                <section>
                    <label for="new-Synopsis">Synopsis:</label>
                    <textArea id="new-Synopsis" name="new-Synopsis" type="text" ></textArea>
                </section>
                <section>
                    <label for="new-URL">URL:</label>
                    <input id="new-link" name="new-link" type="text" />
                </section>
                <section>
            </article>
                `
                // append add new article form to dom (container in the index.html)
                newsOutput.innerHTML=inputForm
                // create save button when clicked sens the article entered to database
                let saveArticleBtn = document.createElement("button")
                let saveBtn= document.createTextNode("Save article")
                saveArticleBtn.classList.add("saveArticleBtn")
                saveArticleBtn.appendChild(saveBtn)
                newsOutput.appendChild(saveArticleBtn)
                // add eventListener to the save button
            })
            // function executed when button clicked and gets the value entered in the form, create an object, pass the to post fetch call
        }
}
export default newsDomBuilder