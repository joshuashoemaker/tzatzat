package chat

import (
	session "tzat/core/Session"
)

type ChatCollection struct {
	Chats []Chat
}

var chatColelctionInstance *ChatCollection

func InitializeChatCollection() {
	if chatColelctionInstance != nil {
		return
	}

	chatColelctionInstance = &ChatCollection{}
}

func GetCollection() *ChatCollection {
	if chatColelctionInstance == nil {
		chatColelctionInstance = &ChatCollection{}
	}
	return chatColelctionInstance
}

func (collection *ChatCollection) GetRecentChats() []RecentChat {
	loggedInUserId := session.GetPreferences().UserId
	var recentChats []RecentChat

	for _, c := range collection.Chats {
		var lastMessage Message

		if len(c.Messages) > 0 {
			lastMessage = c.Messages[len(c.Messages)-1]
		}

		var senderUsers []User
		for _, u := range c.Users {
			if u.Id != loggedInUserId {
				senderUsers = append(senderUsers, u)
			}
		}

		recentChats = append(recentChats, RecentChat{
			Id:          c.Id,
			SenderUsers: senderUsers,
			LastMessage: lastMessage,
		})
	}

	return recentChats
}

func (collection *ChatCollection) AddChat(chat Chat) {
	collection.Chats = append(collection.Chats, chat)
}

func (collection *ChatCollection) AddMessageToChat(message Message) {
	for i, c := range collection.Chats {
		if c.Id == message.ChatId {
			collection.Chats[i].Messages = append(collection.Chats[i].Messages, message)
		}
	}
}
