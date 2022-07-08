import { recentChat } from "../../entities/Chat/chatTypes"

type recentChatLineItemProps = recentChat & { isActive: boolean, onClick: Function }

export type {
  recentChatLineItemProps,
}
