import Preferences from "../entities/Preferences/Preferences"

import { SendMessage } from '../../wailsjs/go/main/App'
import { ipc } from '../../wailsjs/go/models'
import { LogPrint } from "../../wailsjs/runtime/runtime"

type sendMessageRequest = {
  chatId: string,
  content: string,
}

const sendMessage = async (props: sendMessageRequest) => {
  const messageProps = {
    id: Math.random().toString(),
    chatId: props.chatId,
    content: props.content,
    senderUserId: Preferences.userId,
    datetime: new Date()
  }

  const { chatId, content, senderUserId, datetime } = messageProps
  const message = SendMessage(
    new ipc.SendMessageRequest({
      id: 'vvsvsfvfs',
      chatId,
      content,
      senderUserId,
      datetime: datetime.toString()
    })
  )

    LogPrint("messageREquest returned from GO:  " + JSON.stringify(await message, null, 2))
}

export default sendMessage