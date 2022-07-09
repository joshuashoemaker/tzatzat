package session

type Preferences struct {
	UserId string
}

var preferencesInstance *Preferences

func GetPreferences() *Preferences {
	if preferencesInstance == nil {
		preferencesInstance = &Preferences{}
	}

	return preferencesInstance
}
