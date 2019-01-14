// CHAT
import messageList from "./friendsScripts/list"
import messageForm from "./friendsScripts/domBuilder"

// TASKS
import  TasksDomBuilder from "./tasks/TasksDomBuilder"
//import TasksList from "./tasks/TasksList"

// NEWS
import newsDomBuilder from "./news/newsDomBuilder"
//import newsList from "./news/newsList"


const NavBar = {

	clearDom() {
	  console.log("Hello from NavBar.clearDom");
      let clearHtmlDiv = document.querySelector("#pageDiv");
	  let clearHtmlSection = document.querySelector("#clearSection");
	  clearHtmlSection.innerHTML = `
	    <article id="usersOutput"></article>
		<article id= "chatHeader"></article>
		<article id="messagesOutput"></article>
		<article id="messagesInput"></article>
		<article id="newsOutput"></article>
		<article id="friendsOutput"></article>
		<article id="tasksOutput"></article>
		<article id="taskListOutput"></article>`;
	  clearHtmlDiv.appendChild(clearHtmlSection);
	},

	navBuilder() {

		const navBarContainer = document.querySelector("#navOutput");
		let navBar = document.createElement("nav");
		navBar.setAttribute("id", "navBar");
		let navUl = document.createElement("ul");
		let liOne = document.createElement("li");
		liOne.setAttribute("class", "liOne");
		let linkOne = document.createElement("a");
        linkOne.setAttribute("href", "#");
        linkOne.textContent = "Home";
        liOne.appendChild(linkOne);
		liOne.addEventListener("click", () => {
			messageList.chatify();
			messageForm.createAndAppendInput();
		})

		let liTwo = document.createElement("li");
		liTwo.setAttribute("class", "liTwo");
		let linkTwo = document.createElement("a");
        linkTwo.setAttribute("href", "#");
        linkTwo.textContent = "Tasks";
        liTwo.appendChild(linkTwo);
		liTwo.addEventListener("click", () => {
			NavBar.clearDom();
			TasksDomBuilder.createAndAppendForm();
		})
		let liThree = document.createElement("li");
		liThree.setAttribute("class", "liThree");
		let linkThree = document.createElement("a");
        linkThree.setAttribute("href", "#");
        linkThree.textContent = "Events";
        liThree.appendChild(linkThree);
		//liThree.addEventListener("click", eventsDomBuilder.createAndAppendForm);
		let liFour = document.createElement("li");
		liFour.setAttribute("class", "liFour");
		let linkFour = document.createElement("a");
        linkFour.setAttribute("href", "#");
        linkFour.textContent = "News";
        liFour.appendChild(linkFour);
		liFour.addEventListener("click", () => {
			NavBar.clearDom();
			newsDomBuilder.addNewArticleForm();
			})
		let liFive = document.createElement("li");
		liFive.setAttribute("class", "liFive");
		let linkFive = document.createElement("a");
		linkFive.addEventListener("click", function() {
			location.reload(true)
	})
        linkFive.setAttribute("href", "#");
        linkFive.textContent = "Logout";
        liFive.appendChild(linkFive);
        //liFive.addEventListener("click", logout);

		navUl.appendChild(liOne);
        navUl.appendChild(liTwo);
        navUl.appendChild(liThree);
        navUl.appendChild(liFour);
		navUl.appendChild(liFive);
		navBar.appendChild(navUl);
		navBarContainer.appendChild(navBar);
		
		messageList.chatify();
		messageForm.createAndAppendInput();
	}
}

export default NavBar

// navBar.innerHTML = `
// 		<nav>
// 			<ul>
// 				<li class="liOne"><a href="#">Home</a></li>
// 				<li class="liTwo"><a href="#./TasksDomBuilder/">Tasks</a></li>
// 				<li class="liThree"><a href="#" class="color3">Events</a></li>
// 				<li class="liFour"><a href="#">News</a></li>
// 				<li class="liFive"><a href="#">Logout</a></li>
// 			</ul>
// 		</nav>`;
// 		console.log(navBar.innerHTML)