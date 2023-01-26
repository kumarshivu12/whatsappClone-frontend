import React from 'react'
import {Box, styled, Typography} from '@mui/material'
//Components
import { emptyChatImage } from '../../../constants/data'

//Style
const Component=styled(Box)`
height:100%;
paddind:28px 0;
background:#f8f9fa;
text-align:center;
`
const Text=styled(Typography)`
color:#3b4a54;
margin-bottom:20px;

`
const Image=styled('img')({
    height:250,
    width:400,
    marginTop:100
})
const EmptyChat = () => {
  return (
    <Component>
        <Box>
            <Image src={emptyChatImage} alt='whatsapp'/>
            <Text variant='h4'>WhatsApp Web</Text>
            <Text >Send and receive messages without keeping your phone online.<br/>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</Text>
            <Text variant='body2' >End-to-end encrypted</Text>
        </Box>
    </Component>
  )
}

export default EmptyChat