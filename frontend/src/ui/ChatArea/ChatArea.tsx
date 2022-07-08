import ChatStore from '../../entities/Chat/ChatStore'
import Chat from '../../entities/Chat/Chat'
import ChatThread from './ChatThread'
import './chatAreaStyles.css'
import ChatTextEditor from './ChatTextEditor'

function ChatArea (props: { chatId: string }) {
  const activeChat = ChatStore.chats.find(c => c.id === props.chatId) as Chat
  
  return <div id="ChatArea">
    <ChatThread chat={activeChat} />
    <ChatTextEditor chatId={activeChat.id} />
  </div>
}

export default ChatArea
