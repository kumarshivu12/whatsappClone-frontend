import React, { useContext, useEffect, useState } from 'react'
import {Box} from '@mui/material'

//Components
import ChatBox from './ChatBox'
import ChatHeader from './ChatHeader'
import { AccountContext } from '../../../context/AccountProvider'
import { getConversation } from '../../../services/Api'

const Messages = () => {
  const {person,account} =useContext(AccountContext)
  const [conversation,setConversation]=useState({})
  useEffect(()=>{
    const getConversationDetails=async ()=>{
      let data=await getConversation({senderId:account.sub,receiverId:person.sub})
      setConversation(data);
    }
    getConversationDetails();
  },[person.sub])
  return ( 
    <Box >
        <ChatHeader person={person}/>
        <ChatBox person={person} conversation={conversation}/>
    </Box>
  )
}

export default Messages