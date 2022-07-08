class Preferences {
  static userId: string = ''

  static init = (props: { userId: string }) => {
    Preferences.userId = props.userId
  }
}

export default Preferences
