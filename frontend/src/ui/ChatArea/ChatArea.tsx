
import { useState } from 'react';
import ChatThread from './ChatThread'
import ChatTextEditor from './ChatTextEditor'
import { GetChatById } from '../../../wailsjs/go/ipc/Channel'
import { ipc } from '../../../wailsjs/go/models'
import './chatAreaStyles.css'

function ChatArea (props: { chatId: string }) {
  const [activeChat, setActiveChat] = useState({} as ipc.Chat);

  if (!activeChat.id && props.chatId) {
    GetChatById(props.chatId).then(c => {
      setActiveChat(c)
    })
  }
  
  return <div id="ChatArea">
    {activeChat.id
      ? <div>
          <ChatThread chat={activeChat} />
          <ChatTextEditor chatId={activeChat.id} />
        </div>
      : '' }
    
  </div>
}

export default ChatArea
