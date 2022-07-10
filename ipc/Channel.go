package ipc

type Channel struct{}

var channelInstnace *Channel

func GetInstance() *Channel {
	if channelInstnace == nil {
		channelInstnace = &Channel{}
	}
	return channelInstnace
}
