import { Typography,Box,styled} from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { emptyProfilePicture } from '../../../constants/data'
import { AccountContext } from '../../../context/AccountProvider'
import { getConversation, setConversation } from '../../../services/Api'
import { FormatDate } from '../../../utils/common-utils'


//Style
const Component=styled(Box)`
padding:13px 0;
height:45px;
display:flex;
align-items:center;
// overflow:overlay;
cursor:pointer;
`
const Image=styled('img')({
  width:45,
  height:45,
  padding:'0 14px',
  borderRadius:'50%',
})
const Container = styled(Box)`
    display: flex;
`;

const Timestamp = styled(Typography)`
    font-size: 12px;
    margin-left: auto;
    color: #00000099;
    margin-right: 20px;
`;

const Text = styled(Typography)`
    display: block;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
`;
const Conversation = ({user}) => {
  const url = user.picture || emptyProfilePicture;
  const {setPerson,account,newMessageFlag}=useContext(AccountContext)
  const [message, setMessage] = useState({});
  useEffect(() => {
    const getConversationMessage = async() => {
        const data = await getConversation({ senderId: account.sub, receiverId: user.sub });
        setMessage({ text: data?.message, timestamp: data?.updatedAt });
    }
    getConversationMessage();
}, [newMessageFlag]);
  const getUser=async ()=>{
    setPerson(user);
    await setConversation({senderId:account.sub,receiverId:user.sub});
  }
  return (
    <Component onClick={getUser}>
      <Box>
        <Image src={url} alt='dp'/>
      </Box>
      <Box style={{width: '100%'}}>
        <Container>
            <Typography>{user.name}</Typography>
            { 
                message?.text && 
                <Timestamp>{FormatDate(message?.timestamp)}</Timestamp>        
            }
        </Container>
        <Box>
            <Text>{message?.text?.includes('l127.0.0.1') ? 'media' : message.text}</Text>
        </Box>
    </Box>
    </Component>
  )
}

export default Conversation