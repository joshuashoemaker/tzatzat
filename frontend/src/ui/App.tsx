import { useState } from 'react'
import ChatArea from './ChatArea/ChatArea'
import RecentChats from './RecentChats/RecentChats'
import OrganizationService from '../services/OrganizationService'
import PreferenceService from '../services/PreferenceService'
import { EventsOn, LogPrint } from '../../wailsjs/runtime/runtime'
import { ipc } from '../../wailsjs/go/models'
import { GetRecentChats } from '../../wailsjs/go/ipc/Channel'

import './App.css'

let updateRecentChatsCallback: Function = () => {LogPrint('updateRecentChatsCallback() has not been defined')}
EventsOn('receivedMessage', () => updateRecentChatsCallback())
EventsOn('newChatAdded', () => updateRecentChatsCallback())

function App() {
  const [recentChatLineItems, setRecentChatLineItems] = useState([] as ipc.RecentChat[]);
  const [activeChatId, setActiveChatId] = useState('')
  const [loggedInUserId, setLoggedInUserId] = useState('')
  const [orgainizationUsers, setOrganizationUsers] = useState([] as ipc.User[])

  updateRecentChatsCallback = async () => {
    setRecentChatLineItems(await GetRecentChats())
  }

  if (!loggedInUserId) {
    PreferenceService.getUserPreferences().then(prefs => {
      setLoggedInUserId(prefs.userId)
    })
  }

  if (recentChatLineItems.length === 0) {
    GetRecentChats().then(chats => {
      setRecentChatLineItems(chats)
    })
  }

  if (orgainizationUsers.length === 0) {
    OrganizationService.getUsers().then(users => {
      setOrganizationUsers(users)
    })
  }


  return (
    loggedInUserId
      ? <div id="App">
        <RecentChats recentChatLineItems={recentChatLineItems} activeChatId={activeChatId} onClick={setActiveChatId} />
        <ChatArea chatId={activeChatId} />
      </div>
      : <div id="App"></div>
  )
}

export default App
