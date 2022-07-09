package main

import (
	"embed"
	chat "tzat/core/Chat"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
)

//go:embed frontend/dist
var assets embed.FS

func main() {
	// Create an instance of the app structure
	app := NewApp()
	chatCollection := chat.GetCollection()

	// Create application with options
	err := wails.Run(&options.App{
		Title:            "tzat",
		Width:            1024,
		Height:           768,
		Assets:           assets,
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        app.startup,
		Bind: []interface{}{
			app,
			chatCollection,
		},
	})

	if err != nil {
		println("Error:", err)
	}
}
