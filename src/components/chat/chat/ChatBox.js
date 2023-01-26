import React, { useContext, useEffect, useRef, useState } from 'react'
import {Box,styled} from '@mui/material'
import ChatFooter from './ChatFooter'
import { AccountContext } from '../../../context/AccountProvider'
import { getMessages, newMessage } from '../../../services/Api.js'
import Message from './Message'
//Style
const Component=styled(Box)`
background-image:url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'})
// background-size: 50%;
`
const Wrapper=styled(Box)`
height:80vh;
overflow-y:scroll;
`
const Container=styled(Box)`
padding:1px 80px;
`
const ChatBox = ({person,conversation}) => {
  const [value,setValue]=useState('')
  const [messages,setMessages]=useState([])
  const [file,setFile]=useState([])
  const [image,setImage]=useState('')
  const [incomingMessage, setIncomingMessage] = useState(null);
  const scrollRef = useRef();

    const { account,newMessageFlag,setNewMessageFlag,/*socket  */} = useContext(AccountContext);

//     useEffect(() => {
//         socket.current.on('getMessage', data => {
//             setIncomingMessage({
//                 ...data,
//                 createdAt: Date.now()
//             })
//         })
//     }, []);
  useEffect(()=>{
    const getMessageDetails=async ()=>{
      let data=await getMessages(conversation._id)
      // console.warn(data)
      setMessages(data)
    }
    conversation._id && getMessageDetails();
  },[person._id,conversation?._id,newMessageFlag])
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" })
}, [messages]);
// useEffect(() => {
//   incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && 
//       setMessages((prev) => [...prev, incomingMessage]);
  
// }, [incomingMessage, conversation]);
// const receiverId = conversation?.members?.find(member => member !== account.sub);
  const sendText=async (e)=>{
    const code=e.keyCode || e.which;
    // if(!value) return;
    let message={};
    if(code===13){
      if(!file){
        message={
          senderId:account.sub,
          receiverId:person.sub,
          conversationId:conversation._id,
          type:'text',
          text:value,
  
        }
      }
      else{
        message={
          senderId:account.sub,
          receiverId:person.sub,
          conversationId:conversation._id,
          type:'file',
          text:image,
  
        }
      }
      // socket.current.emit('sendMessage', message);
      await newMessage(message);
      setValue('')
      setFile('')
      setImage('')
      setNewMessageFlag(prev=>!prev)
    }
  }
  return (
    <Component>
        <Wrapper>
          {
            messages && messages.map((message)=>
            <Container ref={scrollRef}>
              <Message message={message}/>
            </Container>
            )
          }
        </Wrapper>
        <ChatFooter 
        sendText={sendText} 
        setValue={setValue} 
        value={value}
        file={file}
        setFile={setFile}
        setImage={setImage}
        />
    </Component>
  )
}

export default ChatBox