import { SendMessage } from "../../wailsjs/go/main/App";
import { ipc } from "../../wailsjs/go/models";

type sendMessageRequestProps = {
  chatId: string,
  content: string
  datetime: string,
  senderUserId: string
}

class MessageService {
  static sendMessageRequest (sendMessageRquest: sendMessageRequestProps, callback?: Function) {
    SendMessage(new ipc.SendMessageRequest(sendMessageRquest))
    if (callback) callback()
  }
}

export default MessageService