package ipc

import (
	chat "tzat/core/Chat"
	session "tzat/core/Session"
)

type RecentChat struct {
	Id          string  `json:"id"`
	SenderUsers []User  `json:"senderUsers"`
	LastMessage Message `json:"lastMessage"`
}

func GetRecentChats() []RecentChat {
	recentChatsInCollection := chat.GetCollection().GetRecentChats()
	var recentChatsResponse []RecentChat

	for _, c := range recentChatsInCollection {
		var senderUsersInResponse []User
		for _, u := range c.SenderUsers {
			senderUsersInResponse = append(senderUsersInResponse, User{
				Id:                   u.Id,
				DisplayName:          u.DisplayName,
				ProfilePictureSource: u.ProfilePictureSource,
			})
		}
		recentChatsResponse = append(recentChatsResponse, RecentChat{
			Id:          c.Id,
			SenderUsers: senderUsersInResponse,
			LastMessage: Message{
				Id:           c.LastMessage.Id,
				Content:      c.LastMessage.Content,
				Datetime:     c.LastMessage.Datetime,
				SenderUserId: c.LastMessage.SenderUserId,
			},
		})
	}

	return recentChatsResponse
}

func GetChatById(id string) Chat {
	chatsInCollection := chat.GetCollection().Chats
	var foundChat chat.Chat

	for _, c := range chatsInCollection {
		if c.Id == id {
			foundChat = c
			break
		}
	}

	if foundChat.Id == "" {
		return Chat{}
	}

	var messagesForResponse []Message
	for _, m := range foundChat.Messages {
		messagesForResponse = append(messagesForResponse, Message{
			Id:           m.Id,
			Content:      m.Content,
			Datetime:     m.Datetime,
			SenderUserId: m.SenderUserId,
		})
	}

	var senderUsersForResponse []User
	for _, u := range foundChat.Users {
		if u.Id != session.GetPreferences().UserId {
			senderUsersForResponse = append(senderUsersForResponse, User{
				Id:                   u.Id,
				DisplayName:          u.DisplayName,
				ProfilePictureSource: u.ProfilePictureSource,
			})
		}
	}

	chatResponse := Chat{
		Id:          foundChat.Id,
		Messages:    messagesForResponse,
		SenderUsers: senderUsersForResponse,
	}

	return chatResponse
}
