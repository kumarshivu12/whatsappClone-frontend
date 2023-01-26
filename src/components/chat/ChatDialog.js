import { Grid} from '@mui/material'
import React, { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider';
import EmptyChat from './chat/EmptyChat';
import Messages from './chat/Messages';

//Components
import Menu from './menu/Menu';

const ChatDialog = () => {
  const {person}=useContext(AccountContext)
  return (
    <div>
        <Grid container sx={{height:'100vh',background:'white'}}>
            <Grid item lg={4} md={4} sm={5} xs={7}>
                <Menu/>
            </Grid>
            <Grid item lg={8} md={8} sm={7} xs={5}>
                {
                  Object.keys(person).length?<Messages/>:<EmptyChat/>
                }
            </Grid>
        </Grid>
    </div>
  )
}

export default ChatDialog