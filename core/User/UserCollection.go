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

func (collection *UserCollection) GetById(id string) User {
	var foundUser User
	for _, u := range collection.Users {
		if u.Id == id {
			foundUser = u
			break
		}
	}
	return foundUser
}
