import { useState } from 'react';
import ChatArea from './ChatArea/ChatArea';
import RecentChats from './RecentChats/RecentChats';
import MessageService from '../services/MessageService';

import { EventsOn, LogPrint } from '../../wailsjs/runtime/runtime'
import { ipc } from '../../wailsjs/go/models'
import { GetRecentChats } from '../../wailsjs/go/main/App'

import './App.css';

let testCallback: Function = () => {console.log('test callback')}
EventsOn('receivedMessage', (data: ipc.SendMessageRequest) => {
  MessageService.sendMessageRequest({
    chatId: data.chatId,
    content: data.content,
    datetime: data.datetime,
    senderUserId: data.senderUserId
  }, testCallback)
})

function App() {
  const [recentChatLineItems, setRecentChatLineItems] = useState([] as ipc.RecentChat[]);
  const [activeChatId, setActiveChatId] = useState('')

  setTimeout(async () => {
    LogPrint('Timeout call')
    setRecentChatLineItems(await GetRecentChats())
  }, 3000);

  testCallback = async () => {
    setRecentChatLineItems(await GetRecentChats())
  }

  return (
    <div id="App">
      <RecentChats recentChatLineItems={recentChatLineItems} activeChatId={activeChatId} onClick={setActiveChatId} />
      <ChatArea chatId={activeChatId} />
    </div>
  )
}

export default App
