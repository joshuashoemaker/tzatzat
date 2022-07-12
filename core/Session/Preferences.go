package session

type Preferences struct {
	UserId          string
	UserDisplayName string
}

var preferencesInstance *Preferences

func InitializePreferences() {
	if preferencesInstance != nil {
		return
	}

	preferencesInstance = &Preferences{}
	preferencesInstance.UserId = "QWERTY"
	preferencesInstance.UserDisplayName = "Joshua Shoemaker"
}

func GetPreferences() *Preferences {
	if preferencesInstance == nil {
		preferencesInstance = &Preferences{}
	}

	return preferencesInstance
}
