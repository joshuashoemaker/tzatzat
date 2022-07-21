import RecentChatLineItem from './RecentChatLineItem'
import OptionBar from './OptionBar'
import { ipc } from '../../../wailsjs/go/models'
import './recentChatsStyles.css'
import { LogPrint } from '../../../wailsjs/runtime/runtime'

function RecentChats (props: { recentChatLineItems: ipc.RecentChat[], activeChatId: string, onClick: Function }) {
  const chatLineItemElements = props.recentChatLineItems.map(item => {
    const { id } = item
    const isActive = id === props.activeChatId
    return <RecentChatLineItem
      key={id}
      recentChatInstance={item}
      isActive={isActive}
      onClick={() => { 
        LogPrint(id)
        props.onClick(id)
      }}
    />
  }
)

  return <div id='recentChatsContainer'>
    <OptionBar />
    { props.recentChatLineItems.length ? chatLineItemElements : '' }
  </div>
}

export default RecentChats