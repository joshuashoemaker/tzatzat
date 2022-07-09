import { Avatar } from '@mui/material'
import { ipc } from '../../../wailsjs/go/models'

const loggedInUserID = 'QWERTY' // TODO: replace with actual userId from GO

function ChatThread (props: { chat: ipc.Chat }) {
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
          <Avatar alt={senderUser?.displayName}>{/* senderUser?.initials */}</Avatar>
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
