type messageConstructorProps = {
  id: string,
  chatId: string
  content: string,
  datetime: string,
  senderUserId: string
}

class Message {
  id: string
  chatId: string
  content: string
  datetime: string
  senderUserId: string

  constructor (props: messageConstructorProps) {
    this.id = props.id
    this.chatId = props.chatId
    this.content = props.content
    this.datetime = props.datetime
    this.senderUserId = props.senderUserId
  }

  get brief () {
    return this.content.substring(0, 60)
  }
}

export default Message
