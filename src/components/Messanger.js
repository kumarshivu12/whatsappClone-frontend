import React, { useContext } from 'react'
import {AppBar,Toolbar,styled,Box} from '@mui/material'

//Components
import LoginDialogue from './account/LoginDialogue'
import { AccountContext } from '../context/AccountProvider'
import ChatDialog from './chat/ChatDialog'

//Style
const Component=styled(Box)`
height:100vh;
background:#dcdcdc;
`
const Header=styled(AppBar)`
box-shadow:none;
height:200px;
background:#00bfa5;
`
const Messanger = () => {
  const {account}=useContext(AccountContext)
  return (
    <Component>
      {
        account?
        <ChatDialog/>
        :
        <>
          <Header>
          <Toolbar>

          </Toolbar>
        </Header>
        <LoginDialogue/>
      </>
      }
    </Component>
  )
}

export default Messanger