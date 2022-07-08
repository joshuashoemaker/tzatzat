import Message from "../Message/Message"
import User from "../User/User"

type chatConstructorProps = {
  id: string,
  users: User[],
  messages: Message[]
}

type recentChat = {
  id: string
  senderName: string,
  senderInitials: string,
  senderProfilePictureSource: string,
  messageBrief: string
}

export type {
  chatConstructorProps,
  recentChat
}