import { useState } from 'react';
import initializeData from '../useCases/initializeData';
import RecentChats from './RecentChats/RecentChats';
import ChatStore from '../entities/Chat/ChatStore';
import ChatArea from './ChatArea/ChatArea';
import Message from '../entities/Message/Message';

import { EventsOn } from '../../wailsjs/runtime/runtime'

import './App.css';
import MessageService from '../services/MessageService';

initializeData()

let testCallback: Function = () => {console.log('test callback')}
document.addEventListener('receivedMessage', (e: any) => {
  console.log(e)
  MessageService.addMessageToChat(new Message(e.detail.messageProps), testCallback)  
})


function App() {
  const [recentChatLineItems, setRecentChatLineItems] = useState(ChatStore.recentChats);
  const [activeChatId, setActiveChatId] = useState(ChatStore.chats[0].id)

  testCallback = () => {
    // setRecentChatLineItems(ChatStore.recentChats)
  }

  EventsOn('receivedMessage', (data: any) => {
    setRecentChatLineItems(ChatStore.recentChats)
  })

  return (
    <div id="App">
      <RecentChats recentChatLineItems={recentChatLineItems} activeChatId={activeChatId} onClick={setActiveChatId} />
      <ChatArea chatId={activeChatId} />
    </div>
  )
}

export default App
