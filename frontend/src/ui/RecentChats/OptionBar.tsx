import MapsUgcIcon from '@mui/icons-material/MapsUgc'
import MenuIcon from '@mui/icons-material/Menu'
import { IconButton } from '@mui/material'
import { useState } from 'react'
import AddNewChatMenu from '../Menus/AddNewChatMenu'

function OptionBar () {
  const [isAddChatMenuOpen, setIsAddChatMenuOpen] = useState(false)

  return (
    <div id='OptionBar'>
      <IconButton><MenuIcon htmlColor='#a063e0' fontSize='large' /></IconButton>
      <h3>tzatzat</h3>
      <IconButton onClick={() => { setIsAddChatMenuOpen(!isAddChatMenuOpen) }}><MapsUgcIcon htmlColor='#a063e0' fontSize='large' /></IconButton>

      {isAddChatMenuOpen
        ? <AddNewChatMenu />
        : ''
      }
    </div>
  )
}

export default OptionBar