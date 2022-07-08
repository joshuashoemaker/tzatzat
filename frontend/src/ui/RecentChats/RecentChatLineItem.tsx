import { Avatar } from "@mui/material"
import { recentChatLineItemProps } from "./recentChatsTypes"

function RecentChatLineItem (props: recentChatLineItemProps) {
  const getClassName = () => {
    return `RecentChatLineItem ${props.isActive ? 'activeRecentChatLineItem' : ''}`
  }

  return <div className={getClassName()} onClick={() => props.onClick()}>
    <div className="recentChatLineItemAvatarWrapper">
      <Avatar alt={props.senderName}>{props.senderInitials}</Avatar>
    </div>
    <div className="recentChatLineItemDetailsWrapper">
      <h4>{props.senderName}</h4>
      <p>{props.messageBrief}</p>
    </div>
  </div>
}

export default RecentChatLineItem
