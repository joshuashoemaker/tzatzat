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
