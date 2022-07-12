const getUserInitials = (name?: string) => {
  if (!name) return ''
  const nameSeparatedBySpace = name.split(' ')
  const [firstName, secondName] = nameSeparatedBySpace
  return `${firstName[0]}${secondName[0]}`
}

export { getUserInitials }
