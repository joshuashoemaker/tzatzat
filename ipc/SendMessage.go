package ipc

import (
	app "tzat/core/App"
	chat "tzat/core/Chat"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

type SendMessageRequest struct {
	ChatId       string `json:"chatId"`
	Content      string `json:"content"`
	Datetime     string `json:"datetime"`
	SenderUserId string `json:"senderUserId"`
}

func (c *Channel) SendMessage(messageRequest SendMessageRequest) SendMessageRequest {
	runtime.EventsEmit(app.GetInstance().Ctx, "receivedMessage", messageRequest)

	chatCollection := chat.GetCollection()
	newMessage := chat.Message{
		ChatId:       messageRequest.ChatId,
		Content:      messageRequest.Content,
		Datetime:     messageRequest.Datetime,
		SenderUserId: messageRequest.SenderUserId,
	}
	chatCollection.AddMessageToChat(newMessage)

	return messageRequest
}
