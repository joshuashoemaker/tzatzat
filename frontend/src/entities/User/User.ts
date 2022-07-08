type userConstructorProps = {
  id: string,
  displayName: string,
  profilePictureSource: string
}

class User {
  id: string
  displayName: string
  profilePictureSource: string

  constructor (props: userConstructorProps) {
    this.id = props.id
    this.displayName = props.displayName
    this.profilePictureSource = props.profilePictureSource
  }

  get initials () {
    const nameSeparatedBySpace = this.displayName.split(' ')
    const [firstName, secondName] = nameSeparatedBySpace
    return `${firstName[0]}${secondName[0]}`
  }
}

export default User
