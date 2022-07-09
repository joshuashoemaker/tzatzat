package ipc

import (
	chat "tzat/core/Chat"
)

type messageJSON struct {
	Id           string `json:"id"`
	Content      string `json:"content"`
	Datetime     string `json:"datetime"`
	SenderUserId string `json:"senderUserId"`
}

type userJSON struct {
	Id                   string `json:"id"`
	DisplayName          string `json:"displayName"`
	ProfilePictureSource string `json:"profilePictureSource"`
}

type RecentChat struct {
	Id          string      `json:"id"`
	SenderUsers []userJSON  `json:"senderUsers"`
	LastMessage messageJSON `json:"lastMessage"`
}

func GetRecentChats() []RecentChat {
	recentChatsInCollection := chat.GetCollection().GetRecentChats()
	var recentChatsResponse []RecentChat

	for _, c := range recentChatsInCollection {
		var senderUsersInResponse []userJSON
		for _, u := range c.SenderUsers {
			senderUsersInResponse = append(senderUsersInResponse, userJSON{
				Id:                   u.Id,
				DisplayName:          u.DisplayName,
				ProfilePictureSource: u.ProfilePictureSource,
			})
		}
		recentChatsResponse = append(recentChatsResponse, RecentChat{
			Id:          c.Id,
			SenderUsers: senderUsersInResponse,
			LastMessage: messageJSON{
				Id:           c.LastMessage.Id,
				Content:      c.LastMessage.Content,
				Datetime:     c.LastMessage.Datetime,
				SenderUserId: c.LastMessage.SenderUserId,
			},
		})
	}

	return recentChatsResponse
}
