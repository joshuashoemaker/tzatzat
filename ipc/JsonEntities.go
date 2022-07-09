package ipc

type Chat struct {
	Id          string    `json:"id"`
	Messages    []Message `json:"messages"`
	SenderUsers []User    `json:"users"`
}

type Message struct {
	Id           string `json:"id"`
	Content      string `json:"content"`
	Datetime     string `json:"datetime"`
	SenderUserId string `json:"senderUserId"`
}

type User struct {
	Id                   string `json:"id"`
	DisplayName          string `json:"displayName"`
	ProfilePictureSource string `json:"profilePictureSource"`
}
