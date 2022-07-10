import { GetUserId, SendMessage } from "../../wailsjs/go/ipc/Channel";
import { ipc } from "../../wailsjs/go/models";

type sendMessageRequestProps = {
  chatId: string,
  content: string,
}

class MessageService {
  static async sendMessageRequest (sendMessageRquest: sendMessageRequestProps, callback?: Function) {
    const { chatId, content } = sendMessageRquest
    SendMessage(new ipc.SendMessageRequest({
      id: Math.random().toString(),
      chatId,
      content,
      senderUserId: await GetUserId(),
      datetime: new Date().toString(),
    }))
    if (callback) callback()
  }
}

export default MessageService