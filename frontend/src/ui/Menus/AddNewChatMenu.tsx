import { Button } from '@mui/material'
import { useState } from 'react'
import { AddNewChat } from '../../../wailsjs/go/ipc/Channel'
import { ipc } from '../../../wailsjs/go/models'
import OrganizationService from '../../services/OrganizationService'
import PreferenceService from '../../services/PreferenceService'
import AutoCompleteMultiSelect, { multiSelectInputOption } from '../CommonComponents/AutoCompleteMultiSelect'
import './AddNewChatMenuStyles.css'

const getOptionsFromUsers = (users?: ipc.User[]) => {
  if (!users || users.length < 1) return []

  return users.map(u => ({
    value: u.id,
    display: u.displayName
  }))
}

function AddNewChatMenu() {
  const [users, setUsers] = useState([] as ipc.User[])
  const [selectedUsers, setSelectedUsers] = useState([] as ipc.User[])

  const getUsers = () => {
    if (users.length !== 0) return

    const loggedInUserId = PreferenceService.userId

    let usersExcludingLoggedInUser = []

    const usersFromOrganizationServices = OrganizationService.users || []
    if (usersFromOrganizationServices.length !== 0) {
      usersExcludingLoggedInUser = usersFromOrganizationServices.filter(u => u.id !== loggedInUserId)
      setUsers(usersExcludingLoggedInUser)
      return
    }

    OrganizationService.getUsers().then(users => {
      usersExcludingLoggedInUser = users.filter(u => {
        return u.id !== PreferenceService.userId
      })
      setUsers(usersExcludingLoggedInUser)
    })
  }

  const onChangeHandle = (selectedOptions: multiSelectInputOption[]) => {
    const selectedUserIdsFromInput = selectedOptions.map(o => o.value)
    const usersFromSelection = users.filter(u => selectedUserIdsFromInput.includes(u.id))
    setSelectedUsers(usersFromSelection)
  }

  const onSubmitClickHandle = () => {
    AddNewChat(selectedUsers)
  }

  getUsers()

  return <div id="AddNewChatMenu">
    <AutoCompleteMultiSelect options={getOptionsFromUsers(users)} onChange={onChangeHandle} />
    <Button variant='contained' onClick={onSubmitClickHandle}>Submit</Button>
  </div>
}

export default AddNewChatMenu