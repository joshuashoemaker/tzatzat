import startupData from "../assets/dummyData/startupData"
import Chat from "../entities/Chat/Chat"
import Message from "../entities/Message/Message"
import User from "../entities/User/User"

const getSessionDataFromApi = () => {
  const apiResponse = startupData
  const { users, messages, chats, preferences } = apiResponse

  const sessionUsers = users.map(u => new User({
    id: u.id,
    displayName: u.displayName,
    profilePictureSource: u.profilePictureSource
  }))

  const sessionMessages = messages.map(m => new Message({
    id: m.id,
    chatId: m.chatId,
    content: m.content,
    datetime: m.datetime,
    senderUserId: m.senderUserId
  }))

  const sessionChats = chats.map(c => {
    const messagesInChat = sessionMessages.filter(m => m.chatId === c.id)
    const allUserIdsFromMessages = messagesInChat.map(m => m.senderUserId)
    const uniqueUserIds = [...new Set(allUserIdsFromMessages)]
    const usersInChat = sessionUsers.filter(u => uniqueUserIds.includes(u.id))
    return new Chat({
      id: c.id,
      messages: messagesInChat,
      users: usersInChat
    })
  })


  return {
    sessionChats,
    preferences: {
      userId: preferences.userId
    }
  }
}

export { getSessionDataFromApi }
