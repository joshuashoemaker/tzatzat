package ipc

import user "tzat/core/User"

func (c *Channel) GetUsers() []User {
	usersInCollection := user.GetCollection().Users

	var usersInResponse []User
	for _, u := range usersInCollection {
		usersInResponse = append(usersInResponse, User{
			Id:                   u.Id,
			DisplayName:          u.DisplayName,
			ProfilePictureSource: u.ProfilePictureSource,
		})
	}

	return usersInResponse
}
