import ChatStore from "../entities/Chat/ChatStore";
import Message from "../entities/Message/Message";

class MessageService {
  static addMessageToChat (message: Message, callback?: Function) {
    const chatToUpdateIndex = ChatStore.chats.findIndex(c => c.id === message.chatId)
    ChatStore.chats[chatToUpdateIndex].messages.push(message)
    if (callback) callback()
  }
}

export default MessageService