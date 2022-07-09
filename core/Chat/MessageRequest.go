package chat

type MessageRequest struct {
	Id           string `json:"id"`
	ChatId       string `json:"chatId"`
	Content      string `json:"content"`
	Datetime     string `json:"datetime"`
	SenderUserId string `json:"senderUserId"`
}
