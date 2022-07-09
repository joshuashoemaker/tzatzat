import ChatStore from '../../entities/Chat/ChatStore'
import Chat from '../../entities/Chat/Chat'
import ChatThread from './ChatThread'
import './chatAreaStyles.css'
import ChatTextEditor from './ChatTextEditor'

function ChatArea (props: { chatId: string }) {
  const activeChat = ChatStore.chats.find(c => c.id === props.chatId)
  
  return <div id="ChatArea">
    {activeChat 
      ? <div>
          <ChatThread chat={new Chat({ id: 'QWE', messages: [], users: [] })} />
          <ChatTextEditor chatId={activeChat.id} />
        </div>
      : '' }
    
  </div>
}

export default ChatArea
