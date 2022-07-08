import Preferences from "../entities/Preferences/Preferences"

import { SendMessage } from '../../wailsjs/go/main/App'

type sendMessageRequest = {
  chatId: string,
  content: string,
}

const sendMessage = async (props: sendMessageRequest) => {
  const messageProps =  {
    id: Math.random().toString(),
    chatId: props.chatId,
    content: props.content,
    senderUserId: Preferences.userId,
    datetime: new Date()
  }

  const { chatId, content, senderUserId, datetime } = messageProps
  const message = SendMessage(chatId, content, senderUserId, datetime.toString())

  const sentMessageEvent = new CustomEvent('receivedMessage', {
    detail: { messageProps }
  })
  document.dispatchEvent(sentMessageEvent)
}

export default sendMessage