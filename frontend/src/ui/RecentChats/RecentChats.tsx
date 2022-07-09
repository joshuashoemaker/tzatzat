import RecentChatLineItem from './RecentChatLineItem'
import { ipc } from '../../../wailsjs/go/models'
import './recentChatsStyles.css'

function RecentChats (props: { recentChatLineItems: ipc.RecentChat[], activeChatId: string, onClick: Function }) {
  const chatLineItemElements = props.recentChatLineItems.map(item => {
    const { id } = item
    const isActive = id === props.activeChatId
    return <RecentChatLineItem
      key={id}
      recentChatInstance={item}
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