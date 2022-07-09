import { Avatar } from '@mui/material'
import Chat from '../../entities/Chat/Chat'
import Preferences from '../../entities/Preferences/Preferences'

const loggedInUserID = Preferences.userId

function ChatThread (props: { chat: Chat }) {
  const { users, messages } = props.chat


  const messageElements = messages.map(m => {

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
          <Avatar alt={senderUser?.displayName}>{senderUser?.initials}</Avatar>
        </div>
        <p>{ m.content }</p>
      </div>
      <small className={getThreadDateClassName()}>{ new Date(m.datetime).toLocaleDateString() } { new Date(m.datetime).toLocaleTimeString() }</small>
    </div>
  })

  return <div id="ChatThread">
    { messageElements }
  </div>

}

export default ChatThread
