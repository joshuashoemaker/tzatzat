import { Avatar } from '@mui/material'
import { useEffect, useState } from 'react'
import { GetChatById } from '../../../wailsjs/go/ipc/Channel'
import { ipc } from '../../../wailsjs/go/models'
import { EventsOn, LogPrint } from '../../../wailsjs/runtime/runtime'
import PreferenceService from '../../services/PreferenceService'
import { getUserInitials } from '../../utils/utils'

const loggedInUserID = PreferenceService.userId

let updateChatThreadCallback: Function = () => {LogPrint('updateRecentChatsCallback() has not been defined')}
EventsOn('receivedMessage', () => {
  updateChatThreadCallback()
})

function ChatThread (props: { chat: ipc.Chat }) {
  const { id, users } = props.chat
  const [messages, setMessages] = useState([] as ipc.Message[])

  useEffect(() => updateChatThreadCallback(), [props.chat.id])

  updateChatThreadCallback = async () => {
    setMessages((await GetChatById(id)).messages || [])
  }

  if (id && messages.length === 0) updateChatThreadCallback()

  const getMessageElements = () => messages.map(m => {
    const getThreadMessageClassName = () => {
      return `threadMessage ${m.senderUserId !== loggedInUserID ? 'receivedMessage' : ''}`
    }

    const getThreadDateClassName = () => {
      return `messageDate ${m.senderUserId !== loggedInUserID ? 'receiveMessageDate' : ''}`
    }

    const senderUser = users.find(u => u.id === m.senderUserId)
    return <div key={m.id} className={getThreadMessageClassName()}>
      <div className='messageContainer'>
        <div className='messageAvatar'>
          <Avatar alt={senderUser?.displayName}>{getUserInitials(senderUser?.displayName)}</Avatar>
        </div>
        <p>{ m.content }</p>
      </div>
      <small className={getThreadDateClassName()}>{ new Date(m.datetime).toLocaleDateString() } { new Date(m.datetime).toLocaleTimeString() }</small>
    </div>
  })

  return <div id="ChatThread">
    { messages ? getMessageElements() : '' }
  </div>

}

export default ChatThread
