import { MoreVert, Search } from '@mui/icons-material'
import { Box ,styled, Typography} from '@mui/material'
import React from 'react'
import { useContext } from 'react';
//Components
import {defaultProfilePicture} from '../../../constants/data'
import { AccountContext } from '../../../context/AccountProvider';

//Style
const Component=styled(Box)`
display:flex;
align-items:center;
height:44px;
padding:10px 16px;
background:#f0f2f5;
`
const IconWrapper=styled(Box)`
margin-left:auto;
&>*{
    margin-right:10px;
    padding:10px;
}
`
const Image=styled('img')({
    width:40,
    height:40,
    borderRadius:'50%'
})

const ChatHeader = ({person}) => {
    const { activeUsers } = useContext(AccountContext);
  return (
    <Component>
        <Image src={person.picture} alt={defaultProfilePicture}/>
        <Box style={{marginLeft:'12px'}}>
            <Typography >{person.name}</Typography>
            <Typography style={{fontSize:'12px',color:'rgb(0 0 0 0.6'}}>{activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline'}</Typography>
        </Box>
        <IconWrapper>
            <Search/>
            <MoreVert/>
        </IconWrapper>
    </Component>
  )
}

export default ChatHeader