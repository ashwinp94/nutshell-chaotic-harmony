import newsDomBuilder from "./news/newsDomBuilder"
import newsList from "./news/newsList"

newsDomBuilder.addNewArticleForm()
newsList.newshtmlappending()

import messageList from "./friendsScripts/list"
import messageForm from "./friendsScripts/domBuilder"


messageForm.createChatHeader();
messageList.chatify();
messageForm.createAndAppendInput();

