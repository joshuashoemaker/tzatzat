package ipc

import (
	app "tzat/core/App"
	chat "tzat/core/Chat"
	session "tzat/core/Session"
	user "tzat/core/User"

	"github.com/google/uuid"
	"github.com/wailsapp/wails/v2/pkg/runtime"
)

func (c *Channel) AddNewChat(users []User) {
	var usersOfChat []chat.User
	for _, u := range users {
		usersOfChat = append(usersOfChat, chat.User{
			Id:                   u.Id,
			DisplayName:          u.DisplayName,
			ProfilePictureSource: u.ProfilePictureSource,
		})
	}

	loggedInUser := user.GetCollection().GetById(session.GetPreferences().UserId)
	usersOfChat = append(usersOfChat, chat.User{
		Id:                   loggedInUser.Id,
		DisplayName:          loggedInUser.DisplayName,
		ProfilePictureSource: loggedInUser.ProfilePictureSource,
	})

	newChat := chat.Chat{
		Id:    uuid.New().String(), // TODO: the id will be handled by the database once the server side is implemented
		Users: usersOfChat,
	}

	chat.GetCollection().AddChat(newChat)

	newChatResponse := Chat{
		Id:          newChat.Id,
		SenderUsers: users,
	}

	runtime.EventsEmit(app.GetInstance().Ctx, "newChatAdded", newChatResponse)
}
