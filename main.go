package main

import (
	"embed"
	app "tzat/core/App"
	user "tzat/core/User"

	chat "tzat/core/Chat"
	session "tzat/core/Session"
	Channel "tzat/ipc"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
)

//go:embed frontend/dist
var assets embed.FS

func main() {
	app := app.GetInstance()
	ipcChannel := Channel.GetInstance()
	session.InitializePreferences()
	chat.InitializeChatCollection()
	user.InitializeUserCollection()

	joshua := user.GetCollection().AddUser(user.User{
		Id:          "QWERTY",
		DisplayName: "Joshua Shoemaker",
	})

	travis := user.GetCollection().AddUser(user.User{
		Id:          "ABC",
		DisplayName: "Travis Gatlin",
	})

	var users []chat.User
	users = append(users, chat.User{
		Id:          joshua.Id,
		DisplayName: joshua.DisplayName,
	})
	users = append(users, chat.User{
		Id:          travis.Id,
		DisplayName: travis.DisplayName,
	})

	chat.GetCollection().AddChat(chat.Chat{
		Id:    "XYZ",
		Users: users,
	})

	err := wails.Run(&options.App{
		Title:            "tzat",
		Width:            1024,
		Height:           768,
		Assets:           assets,
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        app.Startup,
		Bind: []interface{}{
			ipcChannel,
		},
	})

	if err != nil {
		println("Error:", err)
	}
}
