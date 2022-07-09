package main

import (
	"context"
	chat "tzat/core/Chat"
	session "tzat/core/Session"
	ipc "tzat/ipc"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

type App struct {
	ctx context.Context
}

func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) SendMessage(messageRequest ipc.SendMessageRequest) ipc.SendMessageRequest {
	runtime.EventsEmit(a.ctx, "receivedMessage", messageRequest)

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

func (a *App) GetRecentChats() []ipc.RecentChat {
	return ipc.GetRecentChats()
}

func (a *App) GetChatById(id string) ipc.Chat {
	return ipc.GetChatById(id)
}

func (a *App) GetUserId() string {
	return session.GetPreferences().UserId
}
