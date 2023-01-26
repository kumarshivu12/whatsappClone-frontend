import { Box,styled} from '@mui/material'
import {Chat,DataUsage,People} from '@mui/icons-material';
import React, { useContext} from 'react'

//Components
import { AccountContext } from '../../../context/AccountProvider';
import HeaderMenu from './HeaderMenu';

//Style
const Component=styled(Box)`
display:flex;
align-items:center;
height:44px;
padding:10px 16px;
background:#f0f2f5;
`
const Image=styled('img')({
    width:40,
    height:40,
    borderRadius:'50%'
})
const IconWrapper=styled(Box)`
margin-left:auto;
&>*{
    margin-right:10px;
    padding:10px;
}
`
const Header = () => {
    const {account}=useContext(AccountContext);
  return (
    <>
    <Component>
        <Image src={account.picture} alt='dp' />
        <IconWrapper>
            <People/>
            <DataUsage/>
            <Chat/>
            <HeaderMenu/>
        </IconWrapper>
    </Component>
    </>
  )
}

export default Header