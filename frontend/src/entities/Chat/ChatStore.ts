import User from "../User/User";
import Chat from "./Chat";
import { recentChat } from "./chatTypes";

class ChatStore {
  static chats: Chat[] = []

  static init = (chats: Chat[]) => {
    ChatStore.chats = chats
  }

  static findById = (id: string) => ChatStore.chats.find(c => c.id === id)

  static get recentChats (): recentChat[] {
    return ChatStore.chats.map(c => {
      const lastMessage = c.messages[c.messages.length - 1]
      const userOfLastMessage = c.users.find(u => u.id === lastMessage.senderUserId) as User
      return {
        id: c.id,
        senderName: userOfLastMessage?.displayName,
        senderInitials: userOfLastMessage?.initials,
        senderProfilePictureSource: userOfLastMessage?.profilePictureSource,
        messageBrief: lastMessage.brief
      }
    })
  }
}


export default ChatStore
