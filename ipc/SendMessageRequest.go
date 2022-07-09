package ipc

type SendMessageRequest struct {
	ChatId       string `json:"chatId"`
	Content      string `json:"content"`
	Datetime     string `json:"datetime"`
	SenderUserId string `json:"senderUserId"`
}
