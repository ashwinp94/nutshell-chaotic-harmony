
// NAVBAR
import NavBar from "./NavBar"

// CHAT
import messageList from "./friendsScripts/list"
import messageForm from "./friendsScripts/domBuilder"

// TASKS
import TasksCreateObject from ".tasks/TasksCreateObject"
import TasksDomBuilder from ".tasks/TasksDomBuilder"
import TasksEditForm from ".tasks/TasksEdit Form"
import TasksFetch from ".tasks/TasksFetch"
import TasksList from ".tasks/TasksList"

// NEWS
import newsDomBuilder from "./news/newsDomBuilder"
import newsList from "./news/newsList"

// EVENTS


// *********************

// NAVBAR
NavBar.navBuilder();

// CHAT
messageForm.createChatHeader();
messageList.chatify();
messageForm.createAndAppendInput();

// TASKS
TasksDomBuilder.createAndAppendForm()

// NEWS
newsDomBuilder.addNewArticleForm()
newsList.newshtmlappending()