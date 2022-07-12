package ipc

import session "tzat/core/Session"

func (c *Channel) GetUserId() string {
	return session.GetPreferences().UserId
}

type Preferences struct {
	UserId          string `json:"userId"`
	UserDisplayName string `json:"userDisplayName"`
}

func (c *Channel) GetUserPreferences() Preferences {
	preferences := session.GetPreferences()
	return Preferences{
		UserId:          preferences.UserId,
		UserDisplayName: preferences.UserDisplayName,
	}
}
