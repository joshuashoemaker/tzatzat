package app

import (
	"context"
)

type App struct {
	Ctx context.Context
}

var appInstance *App

func GetInstance() *App {
	if appInstance == nil {
		appInstance = &App{}
	}
	return appInstance
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) Startup(ctx context.Context) {
	a.Ctx = ctx
}

// func (a *App) SendMessage(messageRequest ipc.SendMessageRequest) ipc.SendMessageRequest {
// 	runtime.EventsEmit(a.ctx, "receivedMessage", messageRequest)

// 	chatCollection := chat.GetCollection()
// 	newMessage := chat.Message{
// 		ChatId:       messageRequest.ChatId,
// 		Content:      messageRequest.Content,
// 		Datetime:     messageRequest.Datetime,
// 		SenderUserId: messageRequest.SenderUserId,
// 	}
// 	chatCollection.AddMessageToChat(newMessage)

// 	return messageRequest
// }
