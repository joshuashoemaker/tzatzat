import { GetUserPreferences } from "../../wailsjs/go/ipc/Channel"

type userPreferences = {
  userId: string,
  userDisplayName: string
}

class PreferenceService {
  static userId: string = ''
  static userDisplayName: string = ''

  static getUserPreferences = async (): Promise<userPreferences> => {
    const preferencesResponse = await GetUserPreferences()
    PreferenceService.userId = preferencesResponse.userId
    PreferenceService.userDisplayName = preferencesResponse.userDisplayName
    return {
      userId: PreferenceService.userId,
      userDisplayName: PreferenceService.userDisplayName
    }
  }
}

export default PreferenceService
