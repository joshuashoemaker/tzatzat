import RecentChatLineItem from './RecentChatLineItem'
import { ipc } from '../../../wailsjs/go/models'
import './recentChatsStyles.css'

const getUserInitials = (name: string) => {
  const nameSeparatedBySpace = name.split(' ')
  const [firstName, secondName] = nameSeparatedBySpace
  return `${firstName[0]}${secondName[0]}`
}

function RecentChats (props: { recentChatLineItems: ipc.RecentChat[], activeChatId: string, onClick: Function }) {
  const chatLineItemElements = props.recentChatLineItems.map(item => {
    const { id, senderUsers, lastMessage } = item
    const isActive = id === props.activeChatId
    const lastSenderUser = senderUsers[senderUsers.length - 1]
    return <RecentChatLineItem
      id={id}
      key={id}
      senderName={lastSenderUser.displayName}
      messageBrief={lastMessage.content}
      senderInitials={getUserInitials(lastSenderUser.displayName)}
      senderProfilePictureSource={lastSenderUser.profilePictureSource}
      isActive={isActive}
      onClick={() => props.onClick(id)}
    />
  }
)

  return <div id='recentChatsContainer'>
    { chatLineItemElements }
  </div>
}

export default RecentChats