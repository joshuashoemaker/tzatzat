package user

type UserCollection struct {
	Users []User
}

var userCollection *UserCollection

func InitializeUserCollection() {
	if userCollection != nil {
		return
	}
	userCollection = &UserCollection{}
}

func GetCollection() *UserCollection {
	if userCollection == nil {
		userCollection = &UserCollection{}
	}
	return userCollection
}

func (collection *UserCollection) AddUser(user User) User {
	collection.Users = append(collection.Users, user)
	return user
}
