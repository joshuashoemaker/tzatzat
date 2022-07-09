package chat

type RecentChat struct {
	Id          string
	SenderUsers []User
	LastMessage Message
}
