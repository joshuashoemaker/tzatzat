import ChatStore from "../entities/Chat/ChatStore"
import Preferences from "../entities/Preferences/Preferences"
import { getSessionDataFromApi } from "./getSessionData"

const initializeData = () => {
  const sessionData = getSessionDataFromApi()
  ChatStore.init(sessionData.sessionChats)
  Preferences.init(sessionData.preferences)
}

export default initializeData
