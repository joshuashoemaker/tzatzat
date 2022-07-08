import Message from "../Message/Message"
import User from "../User/User"
import { chatConstructorProps } from "./chatTypes"

class Chat {
  id: string
  users: User[] = []
  messages: Message[] = []

  constructor (props: chatConstructorProps) {
    const { id, users, messages } = props
    
    this.id = id
    if (users) this.users = props.users
    if (messages) this.messages = props.messages
  }
}

export default Chat
