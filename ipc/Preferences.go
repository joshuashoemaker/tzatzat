package ipc

import session "tzat/core/Session"

func (c *Channel) GetUserId() string {
	return session.GetPreferences().UserId
}
