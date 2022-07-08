import RecentChatLineItem from './RecentChatLineItem'
import { recentChat } from '../../entities/Chat/chatTypes'
import './recentChatsStyles.css'


function RecentChats (props: { recentChatLineItems: recentChat[], activeChatId: string, onClick: Function }) {
  const chatLineItemElements = props.recentChatLineItems.map(item => {
    const { id, senderName, senderInitials, senderProfilePictureSource, messageBrief } = item
    const isActive = id === props.activeChatId
    return <RecentChatLineItem
      id={id}
      key={id}
      senderName={senderName}
      messageBrief={messageBrief}
      senderInitials={senderInitials}
      senderProfilePictureSource={senderProfilePictureSource}
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