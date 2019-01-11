// NAVBAR
import NavBar from "./NavBar"

// TASKS
import TasksCreateObject from ".tasks/TasksCreateObject"
import TasksDomBuilder from ".tasks/TasksDomBuilder"
import TasksEditForm from ".tasks/TasksEdit Form"
import TasksFetch from ".tasks/TasksFetch"
import TasksList from ".tasks/TasksList"

// CHAT
import messageList from "./friendsScripts/list"
import messageForm from "./friendsScripts/domBuilder"


// *********************

// NAVBAR
NavBar.navBuilder();

// TASKS
TasksDomBuilder.createAndAppendForm()

// CHAT
messageForm.createChatHeader();
messageList.chatify();
messageForm.createAndAppendInput();


