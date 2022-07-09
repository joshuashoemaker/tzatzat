import { Avatar } from "@mui/material"
import { ipc } from "../../../wailsjs/go/models"

const getUserInitials = (name: string) => {
  const nameSeparatedBySpace = name.split(' ')
  const [firstName, secondName] = nameSeparatedBySpace
  return `${firstName[0]}${secondName[0]}`
}

function RecentChatLineItem (props: { isActive: boolean , recentChatInstance: ipc.RecentChat, onClick: Function}) {
  const getClassName = () => {
    return `RecentChatLineItem ${props.isActive ? 'activeRecentChatLineItem' : ''}`
  }

  const lastMessageUser = props.recentChatInstance.senderUsers[0]

  return <div className={getClassName()} onClick={() => props.onClick()}>
    <div className="recentChatLineItemAvatarWrapper">
      <Avatar alt={lastMessageUser.displayName}>{getUserInitials(lastMessageUser.displayName)}</Avatar>
    </div>
    <div className="recentChatLineItemDetailsWrapper">
      <h4>{lastMessageUser.displayName}</h4>
      <p>{props.recentChatInstance.lastMessage.content}</p>
    </div>
  </div>
}

export default RecentChatLineItem
