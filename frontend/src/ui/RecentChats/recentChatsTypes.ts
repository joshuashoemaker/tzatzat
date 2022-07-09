import { ipc } from '../../../wailsjs/go/models'

type recentChatLineItemProps = ipc.RecentChat & { senderProfilePictureSource: string, isActive: boolean, onClick: Function, senderName: string }

export type {
  recentChatLineItemProps,
}
